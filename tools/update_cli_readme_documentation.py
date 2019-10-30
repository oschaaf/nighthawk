#!/usr/bin/env python3

# Tool to automatically update README.md files that contain --help output of c++ TCLAP binaries

import logging
import argparse
import os
import pathlib
import re
import sys
import subprocess

if __name__ == '__main__':
  parser = argparse.ArgumentParser(description='Tool to update README.md CLI documentation.')
  parser.add_argument(
      '--binary',
      required=True,
      help='Relative path to the target binary, for example: "bazel-bin/nighthawk_client".')
  parser.add_argument(
      '--readme',
      required=True,
      help='Relative path to the target documentation file, for example: "README.md"')
  parser.add_argument(
      '--mode',
      default="check",
      required=True,
      choices={"check", "fix"},
      help='Either "check" or "fix"')

  args = parser.parse_args()

  project_root = os.path.join(os.path.dirname(os.path.join(os.path.realpath(__file__))), "../")
  # Change directory to avoid TCLAP outputting a full path specification to the binary
  # in its help output.
  os.chdir(os.path.realpath(project_root))
  readme_md_path = os.path.join(project_root, args.readme)
  process = subprocess.run([args.binary, "--help"], stdout=subprocess.PIPE, check=True)

  # Avoid trailing spaces, as they introduce markdown linting errors.
  cli_help = [s.strip() for s in process.stdout.decode().splitlines()]

  target_path = pathlib.Path(readme_md_path)
  with target_path.open("r") as f:
    original_contents = f.read()
    replaced = re.sub("\nUSAGE\:[^.]*.*%s[^```]*" % args.binary, str.join("\n", cli_help),
                      original_contents)

  if replaced != original_contents:
    if args.mode == "check":
      logging.log(
          logging.INFO,
          "CLI documentation in /%s needs to be updated for %s" % (args.readme, args.binary))
      sys.exit(-1)
    elif args.mode == "fix":
      with target_path.open("w") as f:
        logging.log(
            logging.ERROR,
            "CLI documentation in /%s needs to be updated for %s" % (args.readme, args.binary))
        f.write("%s" % replaced)

  logging.log(logging.INFO, "Done")
  sys.exit(0)
