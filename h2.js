{
 "options": {
  "verbosity": {
   "value": "INFO"
  },
  "output_format": {
   "value": "JSON"
  },
  "address_family": {
   "value": "AUTO"
  },
  "request_options": {
   "request_method": "GET",
   "request_headers": [],
   "request_body_size": 0
  },
  "tls_context": {
   "sni": "",
   "allow_renegotiation": false
  },
  "sequencer_idle_strategy": {
   "value": "SPIN"
  },
  "termination_predicates": {},
  "failure_predicates": {
   "benchmark.http_4xx": 0,
   "benchmark.http_5xx": 0,
   "benchmark.pool_connection_failure": 0
  },
  "requests_per_second": 100,
  "connections": 100,
  "duration": "10s",
  "timeout": "30s",
  "h2": true,
  "concurrency": "16",
  "prefetch_connections": false,
  "burst_size": 0,
  "max_pending_requests": 0,
  "max_active_requests": 100,
  "max_requests_per_connection": 4294937295,
  "uri": "127.0.0.1:10000",
  "trace": "",
  "open_loop": false
 },
 "results": [
  {
   "name": "worker_0",
   "statistics": [
    {
     "count": "999",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000004290s"
      },
      {
       "percentile": 0.1,
       "count": "102",
       "duration": "0.000004649s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000004738s"
      },
      {
       "percentile": 0.3,
       "count": "301",
       "duration": "0.000004821s"
      },
      {
       "percentile": 0.4,
       "count": "401",
       "duration": "0.000004897s"
      },
      {
       "percentile": 0.5,
       "count": "502",
       "duration": "0.000004975s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000005010s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000005042s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000005072s"
      },
      {
       "percentile": 0.7,
       "count": "701",
       "duration": "0.000005121s"
      },
      {
       "percentile": 0.75,
       "count": "751",
       "duration": "0.000005193s"
      },
      {
       "percentile": 0.775,
       "count": "776",
       "duration": "0.000005221s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000005254s"
      },
      {
       "percentile": 0.825,
       "count": "826",
       "duration": "0.000005296s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000005337s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000005395s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000005435s"
      },
      {
       "percentile": 0.9,
       "count": "901",
       "duration": "0.000005477s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000005500s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000005551s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000005604s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000005631s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000005674s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000005695s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000005726s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000005780s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000005810s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000005850s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000005887s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000005923s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000005993s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000006017s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000006051s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000006080s"
      },
      {
       "percentile": 0.990625,
       "count": "991",
       "duration": "0.000006081s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000006101s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000006101s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000006160s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000006305s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000006365s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000006680s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000006680s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000006680s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000006739s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000006739s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000007182s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000007182s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000007182s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000007182s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000007182s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000008691s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000008691s"
      }
     ],
     "mean": "0.000005020s",
     "pstdev": "0.000000362s"
    },
    {
     "count": "999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000069647s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000070995s"
      },
      {
       "percentile": 0.2,
       "count": "201",
       "duration": "0.000071563s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000071855s"
      },
      {
       "percentile": 0.4,
       "count": "402",
       "duration": "0.000072119s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000072403s"
      },
      {
       "percentile": 0.55,
       "count": "552",
       "duration": "0.000072567s"
      },
      {
       "percentile": 0.6,
       "count": "601",
       "duration": "0.000072707s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000072819s"
      },
      {
       "percentile": 0.7,
       "count": "701",
       "duration": "0.000072987s"
      },
      {
       "percentile": 0.75,
       "count": "751",
       "duration": "0.000073155s"
      },
      {
       "percentile": 0.775,
       "count": "776",
       "duration": "0.000073231s"
      },
      {
       "percentile": 0.8,
       "count": "803",
       "duration": "0.000073335s"
      },
      {
       "percentile": 0.825,
       "count": "826",
       "duration": "0.000073395s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000073527s"
      },
      {
       "percentile": 0.875,
       "count": "876",
       "duration": "0.000073663s"
      },
      {
       "percentile": 0.8875,
       "count": "888",
       "duration": "0.000073723s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000073783s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000073907s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000074003s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000074147s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000074307s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000074471s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000074623s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000074859s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000075043s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000075143s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000075419s"
      },
      {
       "percentile": 0.978125,
       "count": "979",
       "duration": "0.000075531s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000075963s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000076419s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000076919s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000079411s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000081111s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000083115s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000089347s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000089347s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000090751s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000100923s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000109299s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000117547s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000117547s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000117547s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000120971s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000120971s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000146455s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000146455s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000146455s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000146455s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000146455s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000219199s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000219199s"
      }
     ],
     "mean": "0.000072879s",
     "pstdev": "0.000005982s"
    },
    {
     "count": "0",
     "id": "sequencer.blocking",
     "percentiles": [
      {
       "percentile": 1,
       "count": "0",
       "duration": "0s"
      }
     ],
     "mean": "0s",
     "pstdev": "0s"
    },
    {
     "count": "999",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000076679s"
      },
      {
       "percentile": 0.1,
       "count": "102",
       "duration": "0.000078183s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000078699s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000079079s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000079375s"
      },
      {
       "percentile": 0.5,
       "count": "501",
       "duration": "0.000079639s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000079787s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000079935s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000080083s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000080247s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000080427s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000080515s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000080639s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000080767s"
      },
      {
       "percentile": 0.85,
       "count": "851",
       "duration": "0.000080923s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000081027s"
      },
      {
       "percentile": 0.8875,
       "count": "888",
       "duration": "0.000081135s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000081231s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000081367s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000081535s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000081791s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000081951s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000082151s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000082291s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000082423s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000082843s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000082983s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000083123s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000083755s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000084011s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000084571s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000084975s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000086679s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000088915s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000095059s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000096719s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000096719s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000097971s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000107803s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000116387s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000124843s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000124843s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000124843s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000128091s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000128091s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000154439s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000154439s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000154439s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000154439s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000154439s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000226119s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000226119s"
      }
     ],
     "mean": "0.000080157s",
     "pstdev": "0.000006018s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "1009"
    },
    {
     "name": "default.total_match_count",
     "value": "1"
    },
    {
     "name": "membership_change",
     "value": "1"
    },
    {
     "name": "upstream_cx_http2_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "57816"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "13196"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "1009"
    }
   ],
   "execution_duration": "10.000001085s"
  },
  {
   "name": "worker_1",
   "statistics": [
    {
     "count": "999",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000004305s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000004545s"
      },
      {
       "percentile": 0.2,
       "count": "201",
       "duration": "0.000004626s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000004699s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000004764s"
      },
      {
       "percentile": 0.5,
       "count": "501",
       "duration": "0.000004839s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000004874s"
      },
      {
       "percentile": 0.6,
       "count": "602",
       "duration": "0.000004908s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000004950s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000005003s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000005055s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000005086s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000005113s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000005141s"
      },
      {
       "percentile": 0.85,
       "count": "851",
       "duration": "0.000005178s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000005235s"
      },
      {
       "percentile": 0.8875,
       "count": "888",
       "duration": "0.000005265s"
      },
      {
       "percentile": 0.9,
       "count": "901",
       "duration": "0.000005296s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000005320s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000005353s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000005380s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000005422s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000005454s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000005500s"
      },
      {
       "percentile": 0.9625,
       "count": "963",
       "duration": "0.000005529s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000005561s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000005590s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000005608s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000005620s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000005638s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000005666s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000005669s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000005703s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000005709s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000005711s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000005762s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000005762s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000005789s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000005800s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000005823s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000005834s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000005834s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000005834s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000005951s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000005951s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000006317s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000006317s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000006317s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000006317s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000006317s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000008541s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000008541s"
      }
     ],
     "mean": "0.000004885s",
     "pstdev": "0.000000318s"
    },
    {
     "count": "999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000068423s"
      },
      {
       "percentile": 0.1,
       "count": "104",
       "duration": "0.000069487s"
      },
      {
       "percentile": 0.2,
       "count": "201",
       "duration": "0.000069787s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000070039s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000070235s"
      },
      {
       "percentile": 0.5,
       "count": "503",
       "duration": "0.000070471s"
      },
      {
       "percentile": 0.55,
       "count": "551",
       "duration": "0.000070603s"
      },
      {
       "percentile": 0.6,
       "count": "601",
       "duration": "0.000070767s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000070943s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000071151s"
      },
      {
       "percentile": 0.75,
       "count": "751",
       "duration": "0.000071427s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000071691s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000072203s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000072887s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000088543s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000089243s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000089395s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000089567s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000089731s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000089955s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000090143s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000090195s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000090267s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000090403s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000090599s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000090679s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000090747s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000091023s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000091119s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000091271s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000091407s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000091675s"
      },
      {
       "percentile": 0.9875,
       "count": "988",
       "duration": "0.000091775s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000091911s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000092175s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000092415s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000092415s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000092539s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000092707s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000093471s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000127643s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000127643s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000127643s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000129791s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000129791s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000158751s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000158751s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000158751s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000158751s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000158751s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000169791s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000169791s"
      }
     ],
     "mean": "0.000073845s",
     "pstdev": "0.000008632s"
    },
    {
     "count": "0",
     "id": "sequencer.blocking",
     "percentiles": [
      {
       "percentile": 1,
       "count": "0",
       "duration": "0s"
      }
     ],
     "mean": "0s",
     "pstdev": "0s"
    },
    {
     "count": "999",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000075287s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000076411s"
      },
      {
       "percentile": 0.2,
       "count": "202",
       "duration": "0.000076783s"
      },
      {
       "percentile": 0.3,
       "count": "301",
       "duration": "0.000077003s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000077251s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000077531s"
      },
      {
       "percentile": 0.55,
       "count": "551",
       "duration": "0.000077675s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000077847s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000078015s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000078291s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000078595s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000078919s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000079455s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000080699s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000095747s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000096399s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000096631s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000096835s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000097055s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000097323s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000097431s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000097503s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000097627s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000097775s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000097835s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000097983s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000098147s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000098227s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000098291s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000098563s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000098799s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000098927s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000098963s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000099451s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000099599s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000100167s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000100167s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000100715s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000101099s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000101259s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000136743s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000136743s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000136743s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000140663s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000140663s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000166223s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000166223s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000166223s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000166223s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000166223s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000177487s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000177487s"
      }
     ],
     "mean": "0.000080939s",
     "pstdev": "0.000008767s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "1009"
    },
    {
     "name": "default.total_match_count",
     "value": "1"
    },
    {
     "name": "membership_change",
     "value": "1"
    },
    {
     "name": "upstream_cx_http2_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "57816"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "13196"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "1009"
    }
   ],
   "execution_duration": "10.000000861s"
  },
  {
   "name": "worker_2",
   "statistics": [
    {
     "count": "999",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000004185s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000004417s"
      },
      {
       "percentile": 0.2,
       "count": "201",
       "duration": "0.000004506s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000004572s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000004645s"
      },
      {
       "percentile": 0.5,
       "count": "502",
       "duration": "0.000004709s"
      },
      {
       "percentile": 0.55,
       "count": "552",
       "duration": "0.000004746s"
      },
      {
       "percentile": 0.6,
       "count": "601",
       "duration": "0.000004787s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000004831s"
      },
      {
       "percentile": 0.7,
       "count": "701",
       "duration": "0.000004865s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000004908s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000004927s"
      },
      {
       "percentile": 0.8,
       "count": "801",
       "duration": "0.000004959s"
      },
      {
       "percentile": 0.825,
       "count": "826",
       "duration": "0.000004985s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000005031s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000005062s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000005085s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000005113s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000005140s"
      },
      {
       "percentile": 0.925,
       "count": "928",
       "duration": "0.000005163s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000005194s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000005216s"
      },
      {
       "percentile": 0.95,
       "count": "951",
       "duration": "0.000005245s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000005278s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000005296s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000005308s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000005348s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000005370s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000005388s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000005416s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000005461s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000005474s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000005496s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000005572s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000005616s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000005667s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000005667s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000005674s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000005678s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000005681s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000005691s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000005691s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000005691s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000005700s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000005700s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000005939s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000005939s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000005939s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000005939s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000005939s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000008085s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000008085s"
      }
     ],
     "mean": "0.000004747s",
     "pstdev": "0.000000293s"
    },
    {
     "count": "999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000093459s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000095815s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000102315s"
      },
      {
       "percentile": 0.3,
       "count": "301",
       "duration": "0.000103167s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000103563s"
      },
      {
       "percentile": 0.5,
       "count": "501",
       "duration": "0.000103955s"
      },
      {
       "percentile": 0.55,
       "count": "551",
       "duration": "0.000104127s"
      },
      {
       "percentile": 0.6,
       "count": "602",
       "duration": "0.000104283s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000104407s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000104627s"
      },
      {
       "percentile": 0.75,
       "count": "751",
       "duration": "0.000104795s"
      },
      {
       "percentile": 0.775,
       "count": "776",
       "duration": "0.000104919s"
      },
      {
       "percentile": 0.8,
       "count": "801",
       "duration": "0.000105011s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000105159s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000105255s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000105439s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000105523s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000105639s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000105711s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000105891s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000106159s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000106307s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000106483s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000106651s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000106923s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000107327s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000107791s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000108131s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000108335s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000108859s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000109135s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000109327s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000109387s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000111371s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000111583s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000123911s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000123911s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000130267s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000135367s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000137543s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000141823s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000141823s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000141823s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000173823s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000173823s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000196623s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000196623s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000196623s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000196623s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000196623s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000238711s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000238711s"
      }
     ],
     "mean": "0.000103348s",
     "pstdev": "0.000006985s"
    },
    {
     "count": "0",
     "id": "sequencer.blocking",
     "percentiles": [
      {
       "percentile": 1,
       "count": "0",
       "duration": "0s"
      }
     ],
     "mean": "0s",
     "pstdev": "0s"
    },
    {
     "count": "999",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000100495s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000102719s"
      },
      {
       "percentile": 0.2,
       "count": "201",
       "duration": "0.000109307s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000110035s"
      },
      {
       "percentile": 0.4,
       "count": "401",
       "duration": "0.000110515s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000110887s"
      },
      {
       "percentile": 0.55,
       "count": "551",
       "duration": "0.000111019s"
      },
      {
       "percentile": 0.6,
       "count": "601",
       "duration": "0.000111183s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000111339s"
      },
      {
       "percentile": 0.7,
       "count": "702",
       "duration": "0.000111551s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000111751s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000111871s"
      },
      {
       "percentile": 0.8,
       "count": "801",
       "duration": "0.000111995s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000112107s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000112235s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000112387s"
      },
      {
       "percentile": 0.8875,
       "count": "888",
       "duration": "0.000112471s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000112567s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000112691s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000112931s"
      },
      {
       "percentile": 0.9375,
       "count": "938",
       "duration": "0.000113179s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000113315s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000113571s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000113835s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000113959s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000114535s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000114883s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000115107s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000115651s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000115883s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000115955s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000116223s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000116687s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000118171s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000118591s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000130711s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000130711s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000136951s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000142207s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000148431s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000149911s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000149911s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000149911s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000181391s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000181391s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000203823s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000203823s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000203823s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000203823s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000203823s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000245751s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000245751s"
      }
     ],
     "mean": "0.000110286s",
     "pstdev": "0.000007038s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "1009"
    },
    {
     "name": "default.total_match_count",
     "value": "1"
    },
    {
     "name": "membership_change",
     "value": "1"
    },
    {
     "name": "upstream_cx_http2_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "57816"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "13196"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "1009"
    }
   ],
   "execution_duration": "10.000000121s"
  },
  {
   "name": "worker_3",
   "statistics": [
    {
     "count": "999",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000004183s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000004602s"
      },
      {
       "percentile": 0.2,
       "count": "201",
       "duration": "0.000004706s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000004780s"
      },
      {
       "percentile": 0.4,
       "count": "402",
       "duration": "0.000004872s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000004932s"
      },
      {
       "percentile": 0.55,
       "count": "553",
       "duration": "0.000004980s"
      },
      {
       "percentile": 0.6,
       "count": "602",
       "duration": "0.000005017s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000005064s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000005120s"
      },
      {
       "percentile": 0.75,
       "count": "752",
       "duration": "0.000005190s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000005221s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000005262s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000005308s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000005357s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000005414s"
      },
      {
       "percentile": 0.8875,
       "count": "888",
       "duration": "0.000005447s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000005500s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000005552s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000005606s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000005662s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000005692s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000005745s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000005817s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000005862s"
      },
      {
       "percentile": 0.96875,
       "count": "969",
       "duration": "0.000005946s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000005949s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000005992s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000006014s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000006033s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000006097s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000006105s"
      },
      {
       "percentile": 0.9875,
       "count": "988",
       "duration": "0.000006133s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000006157s"
      },
      {
       "percentile": 0.990625,
       "count": "991",
       "duration": "0.000006162s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000006171s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000006171s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000006178s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000006219s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000006284s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000006427s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000006427s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000006427s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000006444s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000006444s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000006517s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000006517s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000006517s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000006517s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000006517s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000008318s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000008318s"
      }
     ],
     "mean": "0.000005006s",
     "pstdev": "0.000000380s"
    },
    {
     "count": "999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000070739s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000072023s"
      },
      {
       "percentile": 0.2,
       "count": "201",
       "duration": "0.000072335s"
      },
      {
       "percentile": 0.3,
       "count": "301",
       "duration": "0.000072591s"
      },
      {
       "percentile": 0.4,
       "count": "403",
       "duration": "0.000072815s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000073015s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000073151s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000073315s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000073523s"
      },
      {
       "percentile": 0.7,
       "count": "701",
       "duration": "0.000073743s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000074107s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000074651s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000076003s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000116803s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000117651s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000118131s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000118255s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000118431s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000118647s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000118919s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000119147s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000119291s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000119375s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000119587s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000119783s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000120075s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000120271s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000120467s"
      },
      {
       "percentile": 0.978125,
       "count": "979",
       "duration": "0.000120571s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000120703s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000120959s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000121115s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000121283s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000121567s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000122011s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000124511s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000124511s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000125543s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000141999s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000142071s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000142775s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000142775s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000142775s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000158263s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000158263s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000187207s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000187207s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000187207s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000187207s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000187207s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000226855s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000226855s"
      }
     ],
     "mean": "0.000082059s",
     "pstdev": "0.000019168s"
    },
    {
     "count": "0",
     "id": "sequencer.blocking",
     "percentiles": [
      {
       "percentile": 1,
       "count": "0",
       "duration": "0s"
      }
     ],
     "mean": "0s",
     "pstdev": "0s"
    },
    {
     "count": "999",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000077735s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000078915s"
      },
      {
       "percentile": 0.2,
       "count": "201",
       "duration": "0.000079315s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000079595s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000079839s"
      },
      {
       "percentile": 0.5,
       "count": "502",
       "duration": "0.000080099s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000080247s"
      },
      {
       "percentile": 0.6,
       "count": "601",
       "duration": "0.000080407s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000080623s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000080971s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000081739s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000082295s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000083935s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000124071s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000125103s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000125383s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000125643s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000125955s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000126275s"
      },
      {
       "percentile": 0.925,
       "count": "926",
       "duration": "0.000126651s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000126859s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000127019s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000127203s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000127459s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000127815s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000128127s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000128247s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000128551s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000128779s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000128883s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000129143s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000129199s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000129367s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000130571s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000130975s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000132239s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000132239s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000139175s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000149327s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000149351s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000149727s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000149727s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000149727s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000165199s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000165199s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000194287s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000194287s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000194287s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000194287s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000194287s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000234071s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000234071s"
      }
     ],
     "mean": "0.000089246s",
     "pstdev": "0.000019371s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "1009"
    },
    {
     "name": "default.total_match_count",
     "value": "1"
    },
    {
     "name": "membership_change",
     "value": "1"
    },
    {
     "name": "upstream_cx_http2_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "57816"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "13196"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "1009"
    }
   ],
   "execution_duration": "10.000000685s"
  },
  {
   "name": "worker_4",
   "statistics": [
    {
     "count": "999",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000004260s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000004703s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000004806s"
      },
      {
       "percentile": 0.3,
       "count": "304",
       "duration": "0.000004886s"
      },
      {
       "percentile": 0.4,
       "count": "403",
       "duration": "0.000004947s"
      },
      {
       "percentile": 0.5,
       "count": "502",
       "duration": "0.000005020s"
      },
      {
       "percentile": 0.55,
       "count": "553",
       "duration": "0.000005064s"
      },
      {
       "percentile": 0.6,
       "count": "601",
       "duration": "0.000005102s"
      },
      {
       "percentile": 0.65,
       "count": "651",
       "duration": "0.000005150s"
      },
      {
       "percentile": 0.7,
       "count": "701",
       "duration": "0.000005210s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000005266s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000005298s"
      },
      {
       "percentile": 0.8,
       "count": "801",
       "duration": "0.000005330s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000005346s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000005399s"
      },
      {
       "percentile": 0.875,
       "count": "877",
       "duration": "0.000005452s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000005461s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000005491s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000005545s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000005576s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000005619s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000005636s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000005659s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000005670s"
      },
      {
       "percentile": 0.9625,
       "count": "963",
       "duration": "0.000005683s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000005722s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000005730s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000005754s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000005765s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000005797s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000005840s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000005842s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000005855s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000005905s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000005925s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000005977s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000005977s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000005979s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000005998s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000006111s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000006114s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000006114s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000006114s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000006397s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000006397s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000006458s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000006458s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000006458s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000006458s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000006458s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000006816s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000006816s"
      }
     ],
     "mean": "0.000005070s",
     "pstdev": "0.000000316s"
    },
    {
     "count": "999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000068907s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000069879s"
      },
      {
       "percentile": 0.2,
       "count": "201",
       "duration": "0.000070159s"
      },
      {
       "percentile": 0.3,
       "count": "301",
       "duration": "0.000070363s"
      },
      {
       "percentile": 0.4,
       "count": "401",
       "duration": "0.000070551s"
      },
      {
       "percentile": 0.5,
       "count": "503",
       "duration": "0.000070703s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000070795s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000070895s"
      },
      {
       "percentile": 0.65,
       "count": "651",
       "duration": "0.000071015s"
      },
      {
       "percentile": 0.7,
       "count": "705",
       "duration": "0.000071171s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000071283s"
      },
      {
       "percentile": 0.775,
       "count": "776",
       "duration": "0.000071347s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000071451s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000071547s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000071631s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000071783s"
      },
      {
       "percentile": 0.8875,
       "count": "888",
       "duration": "0.000071887s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000071987s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000072071s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000072179s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000072271s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000072399s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000072511s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000072611s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000072691s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000072731s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000073015s"
      },
      {
       "percentile": 0.975,
       "count": "977",
       "duration": "0.000073115s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000073131s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000073787s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000074415s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000074575s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000074643s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000075091s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000075415s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000075791s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000075791s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000075847s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000081651s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000084595s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000086791s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000086791s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000086791s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000106927s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000106927s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000119063s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000119063s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000119063s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000119063s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000119063s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000132351s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000132351s"
      }
     ],
     "mean": "0.000071026s",
     "pstdev": "0.000002957s"
    },
    {
     "count": "0",
     "id": "sequencer.blocking",
     "percentiles": [
      {
       "percentile": 1,
       "count": "0",
       "duration": "0s"
      }
     ],
     "mean": "0s",
     "pstdev": "0s"
    },
    {
     "count": "999",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000075975s"
      },
      {
       "percentile": 0.1,
       "count": "101",
       "duration": "0.000076991s"
      },
      {
       "percentile": 0.2,
       "count": "201",
       "duration": "0.000077291s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000077519s"
      },
      {
       "percentile": 0.4,
       "count": "403",
       "duration": "0.000077699s"
      },
      {
       "percentile": 0.5,
       "count": "504",
       "duration": "0.000077927s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000078019s"
      },
      {
       "percentile": 0.6,
       "count": "601",
       "duration": "0.000078163s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000078279s"
      },
      {
       "percentile": 0.7,
       "count": "701",
       "duration": "0.000078387s"
      },
      {
       "percentile": 0.75,
       "count": "752",
       "duration": "0.000078559s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000078623s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000078771s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000078867s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000079011s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000079151s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000079243s"
      },
      {
       "percentile": 0.9,
       "count": "901",
       "duration": "0.000079363s"
      },
      {
       "percentile": 0.9125,
       "count": "913",
       "duration": "0.000079491s"
      },
      {
       "percentile": 0.925,
       "count": "926",
       "duration": "0.000079651s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000079803s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000079939s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000080067s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000080195s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000080443s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000080779s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000080955s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000081115s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000081295s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000081555s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000081891s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000082107s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000082443s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000082691s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000082919s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000083227s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000083227s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000086195s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000089075s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000091679s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000094023s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000094023s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000094023s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000114711s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000114711s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000126255s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000126255s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000126255s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000126255s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000126255s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000139807s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000139807s"
      }
     ],
     "mean": "0.000078263s",
     "pstdev": "0.000003020s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "1009"
    },
    {
     "name": "default.total_match_count",
     "value": "1"
    },
    {
     "name": "membership_change",
     "value": "1"
    },
    {
     "name": "upstream_cx_http2_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "57816"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "13196"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "1009"
    }
   ],
   "execution_duration": "10.000000689s"
  },
  {
   "name": "worker_5",
   "statistics": [
    {
     "count": "999",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000004266s"
      },
      {
       "percentile": 0.1,
       "count": "103",
       "duration": "0.000004595s"
      },
      {
       "percentile": 0.2,
       "count": "201",
       "duration": "0.000004673s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000004746s"
      },
      {
       "percentile": 0.4,
       "count": "401",
       "duration": "0.000004811s"
      },
      {
       "percentile": 0.5,
       "count": "501",
       "duration": "0.000004875s"
      },
      {
       "percentile": 0.55,
       "count": "551",
       "duration": "0.000004910s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000004947s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000005s"
      },
      {
       "percentile": 0.7,
       "count": "702",
       "duration": "0.000005050s"
      },
      {
       "percentile": 0.75,
       "count": "751",
       "duration": "0.000005090s"
      },
      {
       "percentile": 0.775,
       "count": "776",
       "duration": "0.000005123s"
      },
      {
       "percentile": 0.8,
       "count": "801",
       "duration": "0.000005149s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000005185s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000005222s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000005261s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000005280s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000005308s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000005365s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000005408s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000005449s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000005478s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000005544s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000005598s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000005667s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000005723s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000005737s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000005779s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000005815s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000005855s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000005873s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000005902s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000005976s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000005992s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000006049s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000006126s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000006126s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000006173s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000006201s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000006362s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000006676s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000006676s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000006676s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000008592s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000008592s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000010554s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000010554s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000010554s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000010554s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000010554s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000010695s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000010695s"
      }
     ],
     "mean": "0.000004944s",
     "pstdev": "0.000000420s"
    },
    {
     "count": "999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000069379s"
      },
      {
       "percentile": 0.1,
       "count": "101",
       "duration": "0.000071035s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000113951s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000114987s"
      },
      {
       "percentile": 0.4,
       "count": "402",
       "duration": "0.000115571s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000115955s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000116111s"
      },
      {
       "percentile": 0.6,
       "count": "604",
       "duration": "0.000116335s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000116539s"
      },
      {
       "percentile": 0.7,
       "count": "701",
       "duration": "0.000116755s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000116979s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000117075s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000117199s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000117395s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000117583s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000117791s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000117911s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000118035s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000118223s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000118399s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000118519s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000118607s"
      },
      {
       "percentile": 0.95,
       "count": "951",
       "duration": "0.000118771s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000118803s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000119015s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000119283s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000119387s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000119491s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000119939s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000120251s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000120539s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000120583s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000121143s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000121335s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000121807s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000127043s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000127043s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000130067s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000130559s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000136007s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000140143s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000140143s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000140143s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000158887s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000158887s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000168727s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000168727s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000168727s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000168727s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000168727s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000187303s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000187303s"
      }
     ],
     "mean": "0.000108119s",
     "pstdev": "0.000018176s"
    },
    {
     "count": "0",
     "id": "sequencer.blocking",
     "percentiles": [
      {
       "percentile": 1,
       "count": "0",
       "duration": "0s"
      }
     ],
     "mean": "0s",
     "pstdev": "0s"
    },
    {
     "count": "999",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000076311s"
      },
      {
       "percentile": 0.1,
       "count": "101",
       "duration": "0.000078039s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000121047s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000122179s"
      },
      {
       "percentile": 0.4,
       "count": "401",
       "duration": "0.000122747s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000123091s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000123275s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000123447s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000123687s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000123887s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000124111s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000124259s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000124383s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000124575s"
      },
      {
       "percentile": 0.85,
       "count": "851",
       "duration": "0.000124743s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000125015s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000125123s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000125339s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000125499s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000125619s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000125819s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000126099s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000126351s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000126531s"
      },
      {
       "percentile": 0.9625,
       "count": "963",
       "duration": "0.000126643s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000126787s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000126979s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000127351s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000127511s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000127867s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000128247s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000128407s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000128771s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000130239s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000131247s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000134263s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000134263s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000137367s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000137647s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000143071s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000146999s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000146999s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000146999s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000165991s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000165991s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000178455s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000178455s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000178455s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000178455s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000178455s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000194639s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000194639s"
      }
     ],
     "mean": "0.000115289s",
     "pstdev": "0.000018226s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "1009"
    },
    {
     "name": "default.total_match_count",
     "value": "1"
    },
    {
     "name": "membership_change",
     "value": "1"
    },
    {
     "name": "upstream_cx_http2_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "57816"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "13196"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "1009"
    }
   ],
   "execution_duration": "10.000000927s"
  },
  {
   "name": "worker_6",
   "statistics": [
    {
     "count": "999",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000004181s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000004452s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000004548s"
      },
      {
       "percentile": 0.3,
       "count": "301",
       "duration": "0.000004637s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000004703s"
      },
      {
       "percentile": 0.5,
       "count": "503",
       "duration": "0.000004778s"
      },
      {
       "percentile": 0.55,
       "count": "552",
       "duration": "0.000004802s"
      },
      {
       "percentile": 0.6,
       "count": "601",
       "duration": "0.000004839s"
      },
      {
       "percentile": 0.65,
       "count": "652",
       "duration": "0.000004869s"
      },
      {
       "percentile": 0.7,
       "count": "701",
       "duration": "0.000004912s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000004978s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000004999s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000005022s"
      },
      {
       "percentile": 0.825,
       "count": "828",
       "duration": "0.000005059s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000005095s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000005137s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000005156s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000005195s"
      },
      {
       "percentile": 0.9125,
       "count": "913",
       "duration": "0.000005231s"
      },
      {
       "percentile": 0.925,
       "count": "926",
       "duration": "0.000005254s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000005301s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000005312s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000005330s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000005359s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000005405s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000005444s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000005456s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000005499s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000005521s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000005566s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000005601s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000005611s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000005616s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000005669s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000005700s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000005723s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000005723s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000005744s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000005747s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000005768s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000006005s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000006005s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000006005s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000006044s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000006044s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000006560s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000006560s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000006560s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000006560s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000006560s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000007518s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000007518s"
      }
     ],
     "mean": "0.000004805s",
     "pstdev": "0.000000307s"
    },
    {
     "count": "999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000069383s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000088339s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000088683s"
      },
      {
       "percentile": 0.3,
       "count": "302",
       "duration": "0.000088907s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000089075s"
      },
      {
       "percentile": 0.5,
       "count": "502",
       "duration": "0.000089267s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000089371s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000089491s"
      },
      {
       "percentile": 0.65,
       "count": "652",
       "duration": "0.000089611s"
      },
      {
       "percentile": 0.7,
       "count": "702",
       "duration": "0.000089759s"
      },
      {
       "percentile": 0.75,
       "count": "751",
       "duration": "0.000089907s"
      },
      {
       "percentile": 0.775,
       "count": "776",
       "duration": "0.000089971s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000090083s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000090215s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000090379s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000090535s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000090615s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000090783s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000090971s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000091351s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000091723s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000091987s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000092247s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000092443s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000092655s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000093579s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000095331s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000098327s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000098819s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000099127s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000100087s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000100379s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000100683s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000104987s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000105655s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000107723s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000107723s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000110199s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000112591s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000114563s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000126363s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000126363s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000126363s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000133983s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000133983s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000175535s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000175535s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000175535s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000175535s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000175535s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000245343s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000245343s"
      }
     ],
     "mean": "0.000089767s",
     "pstdev": "0.000006768s"
    },
    {
     "count": "0",
     "id": "sequencer.blocking",
     "percentiles": [
      {
       "percentile": 1,
       "count": "0",
       "duration": "0s"
      }
     ],
     "mean": "0s",
     "pstdev": "0s"
    },
    {
     "count": "999",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000075867s"
      },
      {
       "percentile": 0.1,
       "count": "101",
       "duration": "0.000095147s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000095511s"
      },
      {
       "percentile": 0.3,
       "count": "301",
       "duration": "0.000095771s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000096011s"
      },
      {
       "percentile": 0.5,
       "count": "502",
       "duration": "0.000096199s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000096299s"
      },
      {
       "percentile": 0.6,
       "count": "602",
       "duration": "0.000096451s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000096591s"
      },
      {
       "percentile": 0.7,
       "count": "701",
       "duration": "0.000096747s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000096935s"
      },
      {
       "percentile": 0.775,
       "count": "776",
       "duration": "0.000097047s"
      },
      {
       "percentile": 0.8,
       "count": "801",
       "duration": "0.000097175s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000097303s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000097423s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000097663s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000097819s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000097991s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000098219s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000098667s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000098911s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000099027s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000099383s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000099595s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000099935s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000100507s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000102419s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000105871s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000106239s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000107031s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000107567s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000107843s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000110555s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000113267s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000113639s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000116675s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000116675s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000117107s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000119183s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000121543s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000133119s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000133119s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000133119s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000141039s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000141039s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000182327s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000182327s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000182327s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000182327s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000182327s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000252247s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000252247s"
      }
     ],
     "mean": "0.000096726s",
     "pstdev": "0.000006821s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "1009"
    },
    {
     "name": "default.total_match_count",
     "value": "1"
    },
    {
     "name": "membership_change",
     "value": "1"
    },
    {
     "name": "upstream_cx_http2_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "57816"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "13196"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "1009"
    }
   ],
   "execution_duration": "10.000000811s"
  },
  {
   "name": "worker_7",
   "statistics": [
    {
     "count": "999",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000004417s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000004732s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000004837s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000004929s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000005001s"
      },
      {
       "percentile": 0.5,
       "count": "501",
       "duration": "0.000005067s"
      },
      {
       "percentile": 0.55,
       "count": "551",
       "duration": "0.000005104s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000005144s"
      },
      {
       "percentile": 0.65,
       "count": "653",
       "duration": "0.000005179s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000005221s"
      },
      {
       "percentile": 0.75,
       "count": "751",
       "duration": "0.000005273s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000005294s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000005329s"
      },
      {
       "percentile": 0.825,
       "count": "826",
       "duration": "0.000005371s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000005416s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000005468s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000005489s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000005513s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000005543s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000005576s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000005615s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000005639s"
      },
      {
       "percentile": 0.95,
       "count": "951",
       "duration": "0.000005679s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000005697s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000005718s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000005813s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000005817s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000005854s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000005918s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000005990s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000006006s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000006007s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000006166s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000006209s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000006262s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000006287s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000006287s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000006349s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000006394s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000006486s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000006588s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000006588s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000006588s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000006631s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000006631s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000007050s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000007050s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000007050s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000007050s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000007050s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000009155s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000009155s"
      }
     ],
     "mean": "0.000005108s",
     "pstdev": "0.000000348s"
    },
    {
     "count": "999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000070927s"
      },
      {
       "percentile": 0.1,
       "count": "101",
       "duration": "0.000072371s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000072771s"
      },
      {
       "percentile": 0.3,
       "count": "302",
       "duration": "0.000073071s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000073427s"
      },
      {
       "percentile": 0.5,
       "count": "505",
       "duration": "0.000073707s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000073887s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000074063s"
      },
      {
       "percentile": 0.65,
       "count": "651",
       "duration": "0.000074251s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000074431s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000074615s"
      },
      {
       "percentile": 0.775,
       "count": "777",
       "duration": "0.000074755s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000074879s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000074979s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000075131s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000075319s"
      },
      {
       "percentile": 0.8875,
       "count": "888",
       "duration": "0.000075415s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000075503s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000075627s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000075807s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000076003s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000076115s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000076315s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000076419s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000076567s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000076783s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000076851s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000076971s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000077219s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000078007s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000079151s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000079447s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000080171s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000080263s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000080859s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000082951s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000082951s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000083407s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000086271s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000087083s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000097811s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000097811s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000097811s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000101331s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000101331s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000153295s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000153295s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000153295s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000153295s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000153295s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000161975s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000161975s"
      }
     ],
     "mean": "0.000074129s",
     "pstdev": "0.000004192s"
    },
    {
     "count": "0",
     "id": "sequencer.blocking",
     "percentiles": [
      {
       "percentile": 1,
       "count": "0",
       "duration": "0s"
      }
     ],
     "mean": "0s",
     "pstdev": "0s"
    },
    {
     "count": "999",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000078171s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000079383s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000079887s"
      },
      {
       "percentile": 0.3,
       "count": "301",
       "duration": "0.000080219s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000080539s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000080931s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000081119s"
      },
      {
       "percentile": 0.6,
       "count": "601",
       "duration": "0.000081279s"
      },
      {
       "percentile": 0.65,
       "count": "651",
       "duration": "0.000081511s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000081679s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000081891s"
      },
      {
       "percentile": 0.775,
       "count": "776",
       "duration": "0.000082015s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000082175s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000082327s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000082531s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000082751s"
      },
      {
       "percentile": 0.8875,
       "count": "888",
       "duration": "0.000082867s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000083075s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000083259s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000083515s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000083755s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000083883s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000084011s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000084151s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000084223s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000084743s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000084871s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000085335s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000085467s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000086047s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000086963s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000087231s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000087627s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000087743s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000088343s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000090247s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000090247s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000093411s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000095663s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000097003s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000105135s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000105135s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000105135s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000109879s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000109879s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000160279s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000160279s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000160279s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000160279s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000160279s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000169599s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000169599s"
      }
     ],
     "mean": "0.000081375s",
     "pstdev": "0.000004289s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "1009"
    },
    {
     "name": "default.total_match_count",
     "value": "1"
    },
    {
     "name": "membership_change",
     "value": "1"
    },
    {
     "name": "upstream_cx_http2_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "57816"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "13196"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "1009"
    }
   ],
   "execution_duration": "10.000000081s"
  },
  {
   "name": "worker_8",
   "statistics": [
    {
     "count": "999",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000004236s"
      },
      {
       "percentile": 0.1,
       "count": "101",
       "duration": "0.000004509s"
      },
      {
       "percentile": 0.2,
       "count": "201",
       "duration": "0.000004602s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000004669s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000004734s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000004798s"
      },
      {
       "percentile": 0.55,
       "count": "552",
       "duration": "0.000004839s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000004876s"
      },
      {
       "percentile": 0.65,
       "count": "652",
       "duration": "0.000004910s"
      },
      {
       "percentile": 0.7,
       "count": "702",
       "duration": "0.000004949s"
      },
      {
       "percentile": 0.75,
       "count": "752",
       "duration": "0.000004994s"
      },
      {
       "percentile": 0.775,
       "count": "776",
       "duration": "0.000005015s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000005046s"
      },
      {
       "percentile": 0.825,
       "count": "826",
       "duration": "0.000005071s"
      },
      {
       "percentile": 0.85,
       "count": "852",
       "duration": "0.000005113s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000005136s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000005166s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000005195s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000005214s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000005245s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000005293s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000005325s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000005343s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000005379s"
      },
      {
       "percentile": 0.9625,
       "count": "963",
       "duration": "0.000005395s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000005423s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000005436s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000005463s"
      },
      {
       "percentile": 0.978125,
       "count": "979",
       "duration": "0.000005486s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000005524s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000005570s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000005589s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000005660s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000005711s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000005717s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000005722s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000005722s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000005752s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000005806s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000005879s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000005974s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000005974s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000005974s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000006028s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000006028s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000006331s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000006331s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000006331s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000006331s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000006331s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000006725s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000006725s"
      }
     ],
     "mean": "0.000004837s",
     "pstdev": "0.000000281s"
    },
    {
     "count": "999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000087567s"
      },
      {
       "percentile": 0.1,
       "count": "102",
       "duration": "0.000095827s"
      },
      {
       "percentile": 0.2,
       "count": "201",
       "duration": "0.000096307s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000096651s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000096911s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000097247s"
      },
      {
       "percentile": 0.55,
       "count": "551",
       "duration": "0.000097363s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000097483s"
      },
      {
       "percentile": 0.65,
       "count": "651",
       "duration": "0.000097631s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000097799s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000098039s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000098143s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000098287s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000098391s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000098519s"
      },
      {
       "percentile": 0.875,
       "count": "876",
       "duration": "0.000098715s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000098771s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000098879s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000099087s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000099359s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000099775s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000099931s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000100067s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000100215s"
      },
      {
       "percentile": 0.9625,
       "count": "963",
       "duration": "0.000100659s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000101671s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000102255s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000104123s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000104587s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000105387s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000106287s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000106347s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000106423s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000108559s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000114007s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000117615s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000117615s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000118127s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000118711s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000123223s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000135751s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000135751s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000135751s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000149231s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000149231s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000182783s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000182783s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000182783s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000182783s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000182783s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000254287s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000254287s"
      }
     ],
     "mean": "0.000097760s",
     "pstdev": "0.000006489s"
    },
    {
     "count": "0",
     "id": "sequencer.blocking",
     "percentiles": [
      {
       "percentile": 1,
       "count": "0",
       "duration": "0s"
      }
     ],
     "mean": "0s",
     "pstdev": "0s"
    },
    {
     "count": "999",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000094223s"
      },
      {
       "percentile": 0.1,
       "count": "101",
       "duration": "0.000102663s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000103191s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000103491s"
      },
      {
       "percentile": 0.4,
       "count": "401",
       "duration": "0.000103779s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000104051s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000104223s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000104355s"
      },
      {
       "percentile": 0.65,
       "count": "651",
       "duration": "0.000104527s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000104703s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000104931s"
      },
      {
       "percentile": 0.775,
       "count": "776",
       "duration": "0.000105067s"
      },
      {
       "percentile": 0.8,
       "count": "803",
       "duration": "0.000105187s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000105299s"
      },
      {
       "percentile": 0.85,
       "count": "851",
       "duration": "0.000105443s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000105615s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000105719s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000105907s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000106015s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000106359s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000106659s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000106795s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000107075s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000107227s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000107887s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000108719s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000108951s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000111227s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000112071s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000112487s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000113331s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000113335s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000114007s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000115555s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000120751s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000124803s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000124803s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000125139s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000125847s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000129935s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000142967s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000142967s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000142967s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000156359s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000156359s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000189751s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000189751s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000189751s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000189751s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000189751s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000261287s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000261287s"
      }
     ],
     "mean": "0.000104645s",
     "pstdev": "0.000006506s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "1009"
    },
    {
     "name": "default.total_match_count",
     "value": "1"
    },
    {
     "name": "membership_change",
     "value": "1"
    },
    {
     "name": "upstream_cx_http2_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "57816"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "13196"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "1009"
    }
   ],
   "execution_duration": "10.000000799s"
  },
  {
   "name": "worker_9",
   "statistics": [
    {
     "count": "999",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000004328s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000004668s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000004777s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000004857s"
      },
      {
       "percentile": 0.4,
       "count": "401",
       "duration": "0.000004919s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000004985s"
      },
      {
       "percentile": 0.55,
       "count": "551",
       "duration": "0.000005027s"
      },
      {
       "percentile": 0.6,
       "count": "602",
       "duration": "0.000005071s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000005115s"
      },
      {
       "percentile": 0.7,
       "count": "702",
       "duration": "0.000005153s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000005218s"
      },
      {
       "percentile": 0.775,
       "count": "778",
       "duration": "0.000005252s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000005281s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000005317s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000005349s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000005397s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000005420s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000005449s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000005488s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000005519s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000005563s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000005614s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000005650s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000005678s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000005742s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000005798s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000005814s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000005833s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000005842s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000005923s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000005949s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000006011s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000006067s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000006080s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000006087s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000006150s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000006150s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000006167s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000006192s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000006212s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000006266s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000006266s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000006266s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000006314s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000006314s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000007574s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000007574s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000007574s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000007574s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000007574s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000008175s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000008175s"
      }
     ],
     "mean": "0.000005043s",
     "pstdev": "0.000000342s"
    },
    {
     "count": "999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000068359s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000069375s"
      },
      {
       "percentile": 0.2,
       "count": "201",
       "duration": "0.000069647s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000069879s"
      },
      {
       "percentile": 0.4,
       "count": "403",
       "duration": "0.000070115s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000070331s"
      },
      {
       "percentile": 0.55,
       "count": "552",
       "duration": "0.000070475s"
      },
      {
       "percentile": 0.6,
       "count": "601",
       "duration": "0.000070591s"
      },
      {
       "percentile": 0.65,
       "count": "651",
       "duration": "0.000070731s"
      },
      {
       "percentile": 0.7,
       "count": "701",
       "duration": "0.000070867s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000071019s"
      },
      {
       "percentile": 0.775,
       "count": "777",
       "duration": "0.000071099s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000071171s"
      },
      {
       "percentile": 0.825,
       "count": "826",
       "duration": "0.000071247s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000071335s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000071439s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000071511s"
      },
      {
       "percentile": 0.9,
       "count": "901",
       "duration": "0.000071627s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000071727s"
      },
      {
       "percentile": 0.925,
       "count": "926",
       "duration": "0.000071859s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000072067s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000072123s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000072227s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000072327s"
      },
      {
       "percentile": 0.9625,
       "count": "963",
       "duration": "0.000072415s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000072499s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000072863s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000073159s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000073491s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000073751s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000074287s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000074655s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000075227s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000078243s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000078275s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000079751s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000079751s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000081359s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000083259s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000090499s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000090891s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000090891s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000090891s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000119935s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000119935s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000150287s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000150287s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000150287s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000150287s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000150287s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000165271s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000165271s"
      }
     ],
     "mean": "0.000070758s",
     "pstdev": "0.000004473s"
    },
    {
     "count": "0",
     "id": "sequencer.blocking",
     "percentiles": [
      {
       "percentile": 1,
       "count": "0",
       "duration": "0s"
      }
     ],
     "mean": "0s",
     "pstdev": "0s"
    },
    {
     "count": "999",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000075279s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000076463s"
      },
      {
       "percentile": 0.2,
       "count": "204",
       "duration": "0.000076763s"
      },
      {
       "percentile": 0.3,
       "count": "301",
       "duration": "0.000077023s"
      },
      {
       "percentile": 0.4,
       "count": "401",
       "duration": "0.000077283s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000077535s"
      },
      {
       "percentile": 0.55,
       "count": "551",
       "duration": "0.000077663s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000077771s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000077911s"
      },
      {
       "percentile": 0.7,
       "count": "701",
       "duration": "0.000078083s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000078235s"
      },
      {
       "percentile": 0.775,
       "count": "777",
       "duration": "0.000078351s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000078467s"
      },
      {
       "percentile": 0.825,
       "count": "826",
       "duration": "0.000078583s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000078687s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000078831s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000078943s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000079075s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000079167s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000079251s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000079375s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000079455s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000079611s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000079855s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000080111s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000080399s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000080451s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000080647s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000080967s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000081099s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000081543s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000081699s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000082831s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000085135s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000087315s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000090059s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000090059s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000090539s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000091123s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000097827s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000098191s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000098191s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000098191s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000127871s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000127871s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000157671s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000157671s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000157671s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000157671s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000157671s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000172199s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000172199s"
      }
     ],
     "mean": "0.000077966s",
     "pstdev": "0.000004528s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "1009"
    },
    {
     "name": "default.total_match_count",
     "value": "1"
    },
    {
     "name": "membership_change",
     "value": "1"
    },
    {
     "name": "upstream_cx_http2_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "57816"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "13196"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "1009"
    }
   ],
   "execution_duration": "10.000000851s"
  },
  {
   "name": "worker_10",
   "statistics": [
    {
     "count": "999",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000004342s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000004625s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000004739s"
      },
      {
       "percentile": 0.3,
       "count": "301",
       "duration": "0.000004809s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000004891s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000004963s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000004999s"
      },
      {
       "percentile": 0.6,
       "count": "601",
       "duration": "0.000005046s"
      },
      {
       "percentile": 0.65,
       "count": "651",
       "duration": "0.000005092s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000005141s"
      },
      {
       "percentile": 0.75,
       "count": "752",
       "duration": "0.000005193s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000005228s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000005275s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000005320s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000005376s"
      },
      {
       "percentile": 0.875,
       "count": "876",
       "duration": "0.000005435s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000005463s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000005481s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000005521s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000005564s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000005606s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000005641s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000005649s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000005684s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000005721s"
      },
      {
       "percentile": 0.96875,
       "count": "969",
       "duration": "0.000005782s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000005799s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000005840s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000005878s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000005887s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000005920s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000005976s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000005990s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000006046s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000006092s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000006112s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000006112s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000006167s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000006195s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000006249s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000006317s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000006317s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000006317s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000006354s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000006354s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000006875s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000006875s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000006875s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000006875s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000006875s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000014015s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000014015s"
      }
     ],
     "mean": "0.000005026s",
     "pstdev": "0.000000444s"
    },
    {
     "count": "999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000070919s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000072259s"
      },
      {
       "percentile": 0.2,
       "count": "202",
       "duration": "0.000072647s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000072951s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000073307s"
      },
      {
       "percentile": 0.5,
       "count": "501",
       "duration": "0.000073627s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000073807s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000073951s"
      },
      {
       "percentile": 0.65,
       "count": "651",
       "duration": "0.000074119s"
      },
      {
       "percentile": 0.7,
       "count": "701",
       "duration": "0.000074315s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000074503s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000074611s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000074723s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000074855s"
      },
      {
       "percentile": 0.85,
       "count": "851",
       "duration": "0.000075075s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000075203s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000075267s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000075399s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000075499s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000075691s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000075847s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000075983s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000076243s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000076563s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000076695s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000077071s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000077235s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000078091s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000078595s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000078771s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000079219s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000079867s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000081879s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000086383s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000087519s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000104567s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000104567s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000111871s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000120839s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000131135s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000149023s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000149023s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000149023s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000164055s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000164055s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000209999s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000209999s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000209999s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000209999s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000209999s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000378223s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000378223s"
      }
     ],
     "mean": "0.000074580s",
     "pstdev": "0.000011621s"
    },
    {
     "count": "0",
     "id": "sequencer.blocking",
     "percentiles": [
      {
       "percentile": 1,
       "count": "0",
       "duration": "0s"
      }
     ],
     "mean": "0s",
     "pstdev": "0s"
    },
    {
     "count": "999",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000078087s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000079359s"
      },
      {
       "percentile": 0.2,
       "count": "202",
       "duration": "0.000079755s"
      },
      {
       "percentile": 0.3,
       "count": "302",
       "duration": "0.000080155s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000080499s"
      },
      {
       "percentile": 0.5,
       "count": "502",
       "duration": "0.000080803s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000080955s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000081187s"
      },
      {
       "percentile": 0.65,
       "count": "651",
       "duration": "0.000081383s"
      },
      {
       "percentile": 0.7,
       "count": "701",
       "duration": "0.000081555s"
      },
      {
       "percentile": 0.75,
       "count": "751",
       "duration": "0.000081775s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000081851s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000081995s"
      },
      {
       "percentile": 0.825,
       "count": "826",
       "duration": "0.000082191s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000082355s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000082503s"
      },
      {
       "percentile": 0.8875,
       "count": "888",
       "duration": "0.000082675s"
      },
      {
       "percentile": 0.9,
       "count": "901",
       "duration": "0.000082835s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000082947s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000083275s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000083551s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000083691s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000083823s"
      },
      {
       "percentile": 0.95625,
       "count": "957",
       "duration": "0.000084115s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000084247s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000084463s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000084771s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000085243s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000085603s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000086211s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000087519s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000088391s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000089147s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000093043s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000094463s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000112347s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000112347s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000118979s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000138191s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000142127s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000156023s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000156023s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000156023s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000171375s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000171375s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000217567s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000217567s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000217567s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000217567s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000217567s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000385407s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000385407s"
      }
     ],
     "mean": "0.000081809s",
     "pstdev": "0.000011702s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "1009"
    },
    {
     "name": "default.total_match_count",
     "value": "1"
    },
    {
     "name": "membership_change",
     "value": "1"
    },
    {
     "name": "upstream_cx_http2_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "57816"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "13196"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "1009"
    }
   ],
   "execution_duration": "9.999999947s"
  },
  {
   "name": "worker_11",
   "statistics": [
    {
     "count": "999",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000004361s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000004729s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000004816s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000004893s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000004958s"
      },
      {
       "percentile": 0.5,
       "count": "502",
       "duration": "0.000005034s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000005080s"
      },
      {
       "percentile": 0.6,
       "count": "601",
       "duration": "0.000005116s"
      },
      {
       "percentile": 0.65,
       "count": "651",
       "duration": "0.000005151s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000005206s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000005261s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000005293s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000005316s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000005357s"
      },
      {
       "percentile": 0.85,
       "count": "851",
       "duration": "0.000005398s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000005438s"
      },
      {
       "percentile": 0.8875,
       "count": "888",
       "duration": "0.000005472s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000005498s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000005536s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000005570s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000005611s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000005618s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000005665s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000005689s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000005739s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000005763s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000005812s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000005852s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000005910s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000005923s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000005953s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000005956s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000005972s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000005991s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000005993s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000006071s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000006071s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000006259s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000006270s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000006293s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000006300s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000006300s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000006300s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000007200s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000007200s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000008213s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000008213s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000008213s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000008213s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000008213s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000016256s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000016256s"
      }
     ],
     "mean": "0.000005095s",
     "pstdev": "0.000000484s"
    },
    {
     "count": "999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000068863s"
      },
      {
       "percentile": 0.1,
       "count": "101",
       "duration": "0.000069855s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000070167s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000070415s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000070627s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000070819s"
      },
      {
       "percentile": 0.55,
       "count": "551",
       "duration": "0.000070911s"
      },
      {
       "percentile": 0.6,
       "count": "602",
       "duration": "0.000071027s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000071127s"
      },
      {
       "percentile": 0.7,
       "count": "701",
       "duration": "0.000071243s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000071391s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000071483s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000071579s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000071663s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000071775s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000071883s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000071999s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000072143s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000072227s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000072347s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000072471s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000072615s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000072707s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000072867s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000073043s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000073163s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000073323s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000073595s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000073855s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000074811s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000075507s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000076475s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000079631s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000081243s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000081547s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000089763s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000089763s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000093979s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000094659s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000103975s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000112863s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000112863s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000112863s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000134311s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000134311s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000152407s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000152407s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000152407s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000152407s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000152407s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000293743s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000293743s"
      }
     ],
     "mean": "0.000071463s",
     "pstdev": "0.000008117s"
    },
    {
     "count": "0",
     "id": "sequencer.blocking",
     "percentiles": [
      {
       "percentile": 1,
       "count": "0",
       "duration": "0s"
      }
     ],
     "mean": "0s",
     "pstdev": "0s"
    },
    {
     "count": "999",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000075743s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000076971s"
      },
      {
       "percentile": 0.2,
       "count": "201",
       "duration": "0.000077327s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000077611s"
      },
      {
       "percentile": 0.4,
       "count": "403",
       "duration": "0.000077859s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000078075s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000078207s"
      },
      {
       "percentile": 0.6,
       "count": "601",
       "duration": "0.000078323s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000078463s"
      },
      {
       "percentile": 0.7,
       "count": "701",
       "duration": "0.000078607s"
      },
      {
       "percentile": 0.75,
       "count": "751",
       "duration": "0.000078751s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000078843s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000078931s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000079087s"
      },
      {
       "percentile": 0.85,
       "count": "852",
       "duration": "0.000079195s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000079379s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000079463s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000079627s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000079839s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000080015s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000080131s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000080275s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000080487s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000080807s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000081003s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000081411s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000081499s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000081975s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000082331s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000082887s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000086963s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000087939s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000089003s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000089339s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000090747s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000097295s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000097295s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000101495s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000102187s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000111575s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000120383s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000120383s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000120383s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000141775s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000141775s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000160143s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000160143s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000160143s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000160143s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000160143s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000300815s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000300815s"
      }
     ],
     "mean": "0.000078783s",
     "pstdev": "0.000008160s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "1009"
    },
    {
     "name": "default.total_match_count",
     "value": "1"
    },
    {
     "name": "membership_change",
     "value": "1"
    },
    {
     "name": "upstream_cx_http2_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "57816"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "13196"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "1009"
    }
   ],
   "execution_duration": "10.000000041s"
  },
  {
   "name": "worker_12",
   "statistics": [
    {
     "count": "999",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000004318s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000004623s"
      },
      {
       "percentile": 0.2,
       "count": "203",
       "duration": "0.000004722s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000004799s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000004876s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000004950s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000004984s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000005020s"
      },
      {
       "percentile": 0.65,
       "count": "651",
       "duration": "0.000005060s"
      },
      {
       "percentile": 0.7,
       "count": "701",
       "duration": "0.000005102s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000005160s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000005194s"
      },
      {
       "percentile": 0.8,
       "count": "801",
       "duration": "0.000005226s"
      },
      {
       "percentile": 0.825,
       "count": "826",
       "duration": "0.000005257s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000005294s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000005348s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000005369s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000005407s"
      },
      {
       "percentile": 0.9125,
       "count": "913",
       "duration": "0.000005454s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000005478s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000005541s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000005552s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000005578s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000005596s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000005617s"
      },
      {
       "percentile": 0.96875,
       "count": "969",
       "duration": "0.000005632s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000005650s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000005679s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000005742s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000005848s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000005911s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000005925s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000005984s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000006057s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000006060s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000006071s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000006071s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000006121s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000006124s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000006322s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000006380s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000006380s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000006380s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000006669s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000006669s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000006849s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000006849s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000006849s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000006849s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000006849s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000007156s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000007156s"
      }
     ],
     "mean": "0.000004989s",
     "pstdev": "0.000000330s"
    },
    {
     "count": "999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000109091s"
      },
      {
       "percentile": 0.1,
       "count": "101",
       "duration": "0.000154799s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000155759s"
      },
      {
       "percentile": 0.3,
       "count": "301",
       "duration": "0.000156303s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000156879s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000158831s"
      },
      {
       "percentile": 0.55,
       "count": "551",
       "duration": "0.000163247s"
      },
      {
       "percentile": 0.6,
       "count": "602",
       "duration": "0.000164087s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000164559s"
      },
      {
       "percentile": 0.7,
       "count": "701",
       "duration": "0.000164975s"
      },
      {
       "percentile": 0.75,
       "count": "752",
       "duration": "0.000165399s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000165647s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000166015s"
      },
      {
       "percentile": 0.825,
       "count": "826",
       "duration": "0.000166447s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000166943s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000170271s"
      },
      {
       "percentile": 0.8875,
       "count": "888",
       "duration": "0.000171039s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000171439s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000171983s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000172303s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000172583s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000172871s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000173167s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000173367s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000173543s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000173935s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000174079s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000174255s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000174751s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000175279s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000176119s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000180231s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000184495s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000194719s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000198383s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000218511s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000218511s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000240063s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000251647s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000258263s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000261927s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000261927s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000261927s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000280463s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000280463s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000288223s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000288223s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000288223s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000288223s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000288223s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000307551s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000307551s"
      }
     ],
     "mean": "0.000160421s",
     "pstdev": "0.000015081s"
    },
    {
     "count": "0",
     "id": "sequencer.blocking",
     "percentiles": [
      {
       "percentile": 1,
       "count": "0",
       "duration": "0s"
      }
     ],
     "mean": "0s",
     "pstdev": "0s"
    },
    {
     "count": "999",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000116303s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000161783s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000162719s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000163295s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000163999s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000166055s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000170423s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000171175s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000171735s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000172119s"
      },
      {
       "percentile": 0.75,
       "count": "751",
       "duration": "0.000172703s"
      },
      {
       "percentile": 0.775,
       "count": "776",
       "duration": "0.000172959s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000173247s"
      },
      {
       "percentile": 0.825,
       "count": "826",
       "duration": "0.000173775s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000174367s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000177631s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000178319s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000178751s"
      },
      {
       "percentile": 0.9125,
       "count": "913",
       "duration": "0.000179319s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000179807s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000180087s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000180287s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000180727s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000180871s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000181007s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000181359s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000181711s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000181863s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000182583s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000183431s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000186791s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000187623s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000191727s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000201687s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000205295s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000226087s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000226087s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000246783s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000258831s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000265231s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000269487s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000269487s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000269487s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000287407s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000287407s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000295311s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000295311s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000295311s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000295311s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000295311s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000314703s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000314703s"
      }
     ],
     "mean": "0.000167587s",
     "pstdev": "0.000015131s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "1009"
    },
    {
     "name": "default.total_match_count",
     "value": "1"
    },
    {
     "name": "membership_change",
     "value": "1"
    },
    {
     "name": "upstream_cx_http2_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "57816"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "13196"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "1009"
    }
   ],
   "execution_duration": "10.000000639s"
  },
  {
   "name": "worker_13",
   "statistics": [
    {
     "count": "999",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000004118s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000004571s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000004651s"
      },
      {
       "percentile": 0.3,
       "count": "303",
       "duration": "0.000004738s"
      },
      {
       "percentile": 0.4,
       "count": "401",
       "duration": "0.000004815s"
      },
      {
       "percentile": 0.5,
       "count": "501",
       "duration": "0.000004879s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000004932s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000004972s"
      },
      {
       "percentile": 0.65,
       "count": "651",
       "duration": "0.000005010s"
      },
      {
       "percentile": 0.7,
       "count": "702",
       "duration": "0.000005067s"
      },
      {
       "percentile": 0.75,
       "count": "751",
       "duration": "0.000005130s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000005156s"
      },
      {
       "percentile": 0.8,
       "count": "802",
       "duration": "0.000005191s"
      },
      {
       "percentile": 0.825,
       "count": "826",
       "duration": "0.000005213s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000005241s"
      },
      {
       "percentile": 0.875,
       "count": "876",
       "duration": "0.000005285s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000005303s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000005341s"
      },
      {
       "percentile": 0.9125,
       "count": "913",
       "duration": "0.000005369s"
      },
      {
       "percentile": 0.925,
       "count": "927",
       "duration": "0.000005417s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000005455s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000005468s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000005507s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000005522s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000005570s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000005616s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000005632s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000005665s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000005686s"
      },
      {
       "percentile": 0.98125,
       "count": "982",
       "duration": "0.000005706s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000005765s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000005780s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000005802s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000005840s"
      },
      {
       "percentile": 0.990625,
       "count": "991",
       "duration": "0.000005850s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000005880s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000005880s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000005925s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000006010s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000006019s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000006097s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000006097s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000006097s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000006241s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000006241s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000006300s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000006300s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000006300s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000006300s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000006300s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000011550s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000011550s"
      }
     ],
     "mean": "0.000004934s",
     "pstdev": "0.000000379s"
    },
    {
     "count": "999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000108455s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000154215s"
      },
      {
       "percentile": 0.2,
       "count": "201",
       "duration": "0.000155111s"
      },
      {
       "percentile": 0.3,
       "count": "301",
       "duration": "0.000155879s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000156775s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000162511s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000163671s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000164207s"
      },
      {
       "percentile": 0.65,
       "count": "653",
       "duration": "0.000164575s"
      },
      {
       "percentile": 0.7,
       "count": "701",
       "duration": "0.000164895s"
      },
      {
       "percentile": 0.75,
       "count": "751",
       "duration": "0.000165303s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000165567s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000165879s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000166271s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000167183s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000170631s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000171343s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000171759s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000172007s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000172335s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000172783s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000172975s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000173391s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000173479s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000173679s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000173911s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000174015s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000174351s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000174631s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000174951s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000177303s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000181703s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000187551s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000191127s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000194479s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000206959s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000206959s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000248191s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000260927s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000271215s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000274959s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000274959s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000274959s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000279119s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000279119s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000297071s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000297071s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000297071s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000297071s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000297071s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000298271s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000298271s"
      }
     ],
     "mean": "0.000160394s",
     "pstdev": "0.000015420s"
    },
    {
     "count": "0",
     "id": "sequencer.blocking",
     "percentiles": [
      {
       "percentile": 1,
       "count": "0",
       "duration": "0s"
      }
     ],
     "mean": "0s",
     "pstdev": "0s"
    },
    {
     "count": "999",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000115383s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000161095s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000162023s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000162799s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000163759s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000169519s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000170567s"
      },
      {
       "percentile": 0.6,
       "count": "601",
       "duration": "0.000171159s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000171551s"
      },
      {
       "percentile": 0.7,
       "count": "701",
       "duration": "0.000171967s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000172415s"
      },
      {
       "percentile": 0.775,
       "count": "776",
       "duration": "0.000172647s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000173071s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000173415s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000174351s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000177959s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000178575s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000178895s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000179159s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000179751s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000180111s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000180335s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000180551s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000180831s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000181063s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000181391s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000181455s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000181711s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000182215s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000183319s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000185287s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000189415s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000195431s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000201391s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000203831s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000214063s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000214063s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000255351s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000267711s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000278367s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000282159s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000282159s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000282159s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000285775s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000285775s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000303807s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000303807s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000303807s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000303807s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000303807s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000304815s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000304815s"
      }
     ],
     "mean": "0.000167453s",
     "pstdev": "0.000015479s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "1009"
    },
    {
     "name": "default.total_match_count",
     "value": "1"
    },
    {
     "name": "membership_change",
     "value": "1"
    },
    {
     "name": "upstream_cx_http2_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "57816"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "13196"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "1009"
    }
   ],
   "execution_duration": "10.000000930s"
  },
  {
   "name": "worker_14",
   "statistics": [
    {
     "count": "999",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000004274s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000004593s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000004708s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000004805s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000004905s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000005011s"
      },
      {
       "percentile": 0.55,
       "count": "553",
       "duration": "0.000005045s"
      },
      {
       "percentile": 0.6,
       "count": "604",
       "duration": "0.000005099s"
      },
      {
       "percentile": 0.65,
       "count": "651",
       "duration": "0.000005151s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000005200s"
      },
      {
       "percentile": 0.75,
       "count": "751",
       "duration": "0.000005261s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000005296s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000005334s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000005383s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000005437s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000005479s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000005503s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000005543s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000005580s"
      },
      {
       "percentile": 0.925,
       "count": "926",
       "duration": "0.000005623s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000005642s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000005674s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000005707s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000005727s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000005758s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000005810s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000005826s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000005893s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000005935s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000005972s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000006007s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000006012s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000006049s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000006068s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000006110s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000006139s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000006139s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000006234s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000006237s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000006371s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000006393s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000006393s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000006393s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000006474s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000006474s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000006570s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000006570s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000006570s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000006570s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000006570s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000006796s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000006796s"
      }
     ],
     "mean": "0.000005039s",
     "pstdev": "0.000000376s"
    },
    {
     "count": "999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000116619s"
      },
      {
       "percentile": 0.1,
       "count": "101",
       "duration": "0.000162567s"
      },
      {
       "percentile": 0.2,
       "count": "201",
       "duration": "0.000164567s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000169647s"
      },
      {
       "percentile": 0.4,
       "count": "401",
       "duration": "0.000170615s"
      },
      {
       "percentile": 0.5,
       "count": "502",
       "duration": "0.000171191s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000171439s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000171743s"
      },
      {
       "percentile": 0.65,
       "count": "652",
       "duration": "0.000171967s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000172287s"
      },
      {
       "percentile": 0.75,
       "count": "752",
       "duration": "0.000172599s"
      },
      {
       "percentile": 0.775,
       "count": "776",
       "duration": "0.000172783s"
      },
      {
       "percentile": 0.8,
       "count": "801",
       "duration": "0.000172927s"
      },
      {
       "percentile": 0.825,
       "count": "826",
       "duration": "0.000173103s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000173255s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000173567s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000173727s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000173855s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000173919s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000174103s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000174335s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000174463s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000174695s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000174847s"
      },
      {
       "percentile": 0.9625,
       "count": "963",
       "duration": "0.000175159s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000175887s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000176743s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000177951s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000179063s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000180239s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000181671s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000181919s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000197335s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000202767s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000205823s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000223735s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000223735s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000256159s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000266255s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000268895s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000278911s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000278911s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000278911s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000289039s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000289039s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000294975s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000294975s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000294975s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000294975s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000294975s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000314047s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000314047s"
      }
     ],
     "mean": "0.000168796s",
     "pstdev": "0.000014431s"
    },
    {
     "count": "0",
     "id": "sequencer.blocking",
     "percentiles": [
      {
       "percentile": 1,
       "count": "0",
       "duration": "0s"
      }
     ],
     "mean": "0s",
     "pstdev": "0s"
    },
    {
     "count": "999",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000123903s"
      },
      {
       "percentile": 0.1,
       "count": "101",
       "duration": "0.000169831s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000171735s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000176503s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000177703s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000178223s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000178519s"
      },
      {
       "percentile": 0.6,
       "count": "601",
       "duration": "0.000178871s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000179111s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000179447s"
      },
      {
       "percentile": 0.75,
       "count": "751",
       "duration": "0.000179767s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000179879s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000180087s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000180335s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000180591s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000180823s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000180991s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000181103s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000181303s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000181503s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000181639s"
      },
      {
       "percentile": 0.94375,
       "count": "944",
       "duration": "0.000181807s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000182023s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000182263s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000182575s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000183519s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000184783s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000185167s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000186719s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000187311s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000188655s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000188903s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000204159s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000209519s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000212511s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000230975s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000230975s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000263503s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000273103s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000276783s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000286399s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000286399s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000286399s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000296399s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000296399s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000301807s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000301807s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000301807s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000301807s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000301807s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000321551s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000321551s"
      }
     ],
     "mean": "0.000175977s",
     "pstdev": "0.000014421s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "1009"
    },
    {
     "name": "default.total_match_count",
     "value": "1"
    },
    {
     "name": "membership_change",
     "value": "1"
    },
    {
     "name": "upstream_cx_http2_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "57816"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "13196"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "1009"
    }
   ],
   "execution_duration": "10.000000917s"
  },
  {
   "name": "worker_15",
   "statistics": [
    {
     "count": "999",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000004227s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000004403s"
      },
      {
       "percentile": 0.2,
       "count": "201",
       "duration": "0.000004467s"
      },
      {
       "percentile": 0.3,
       "count": "303",
       "duration": "0.000004511s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000004563s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000004627s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000004654s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000004678s"
      },
      {
       "percentile": 0.65,
       "count": "652",
       "duration": "0.000004710s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000004740s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000004776s"
      },
      {
       "percentile": 0.775,
       "count": "776",
       "duration": "0.000004794s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000004816s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000004846s"
      },
      {
       "percentile": 0.85,
       "count": "851",
       "duration": "0.000004865s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000004896s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000004914s"
      },
      {
       "percentile": 0.9,
       "count": "901",
       "duration": "0.000004933s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000004954s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000004975s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000005017s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000005030s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000005048s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000005067s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000005097s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000005141s"
      },
      {
       "percentile": 0.971875,
       "count": "972",
       "duration": "0.000005153s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000005202s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000005257s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000005272s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000005296s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000005299s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000005323s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000005339s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000005357s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000005380s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000005380s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000005414s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000005473s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000005484s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000005531s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000005531s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000005531s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000005564s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000005564s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000005753s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000005753s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000005753s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000005753s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000005753s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000006711s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000006711s"
      }
     ],
     "mean": "0.000004653s",
     "pstdev": "0.000000230s"
    },
    {
     "count": "999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000068615s"
      },
      {
       "percentile": 0.1,
       "count": "101",
       "duration": "0.000069891s"
      },
      {
       "percentile": 0.2,
       "count": "201",
       "duration": "0.000070151s"
      },
      {
       "percentile": 0.3,
       "count": "303",
       "duration": "0.000070367s"
      },
      {
       "percentile": 0.4,
       "count": "401",
       "duration": "0.000070591s"
      },
      {
       "percentile": 0.5,
       "count": "502",
       "duration": "0.000070803s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000070947s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000071079s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000071219s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000071387s"
      },
      {
       "percentile": 0.75,
       "count": "751",
       "duration": "0.000071539s"
      },
      {
       "percentile": 0.775,
       "count": "776",
       "duration": "0.000071647s"
      },
      {
       "percentile": 0.8,
       "count": "801",
       "duration": "0.000071727s"
      },
      {
       "percentile": 0.825,
       "count": "826",
       "duration": "0.000071847s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000071955s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000072163s"
      },
      {
       "percentile": 0.8875,
       "count": "888",
       "duration": "0.000072247s"
      },
      {
       "percentile": 0.9,
       "count": "901",
       "duration": "0.000072363s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000072499s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000072947s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000074087s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000076035s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000095847s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000168175s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000169007s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000169471s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000169799s"
      },
      {
       "percentile": 0.975,
       "count": "976",
       "duration": "0.000170023s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000170095s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000170303s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000170383s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000170391s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000170431s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000170535s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000170623s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000170991s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000170991s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000171239s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000171255s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000171831s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000172095s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000172095s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000172095s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000172607s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000172607s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000173583s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000173583s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000173583s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000173583s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000173583s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000188215s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000188215s"
      }
     ],
     "mean": "0.000075781s",
     "pstdev": "0.000021286s"
    },
    {
     "count": "0",
     "id": "sequencer.blocking",
     "percentiles": [
      {
       "percentile": 1,
       "count": "0",
       "duration": "0s"
      }
     ],
     "mean": "0s",
     "pstdev": "0s"
    },
    {
     "count": "999",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000075431s"
      },
      {
       "percentile": 0.1,
       "count": "101",
       "duration": "0.000076479s"
      },
      {
       "percentile": 0.2,
       "count": "202",
       "duration": "0.000076767s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000077051s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000077279s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000077511s"
      },
      {
       "percentile": 0.55,
       "count": "551",
       "duration": "0.000077639s"
      },
      {
       "percentile": 0.6,
       "count": "601",
       "duration": "0.000077783s"
      },
      {
       "percentile": 0.65,
       "count": "653",
       "duration": "0.000077955s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000078103s"
      },
      {
       "percentile": 0.75,
       "count": "752",
       "duration": "0.000078307s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000078387s"
      },
      {
       "percentile": 0.8,
       "count": "801",
       "duration": "0.000078511s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000078667s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000078783s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000078943s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000079075s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000079383s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000079511s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000079851s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000081079s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000083203s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000102747s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000174967s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000175775s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000176271s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000176391s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000176591s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000176687s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000176863s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000177063s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000177103s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000177319s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000177471s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000177551s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000177639s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000177639s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000177775s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000178007s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000178263s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000179079s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000179079s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000179079s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000179455s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000179455s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000180303s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000180303s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000180303s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000180303s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000180303s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000194703s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000194703s"
      }
     ],
     "mean": "0.000082497s",
     "pstdev": "0.000021289s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "1009"
    },
    {
     "name": "default.total_match_count",
     "value": "1"
    },
    {
     "name": "membership_change",
     "value": "1"
    },
    {
     "name": "upstream_cx_http2_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "57816"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "13196"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "1009"
    }
   ],
   "execution_duration": "10.000000272s"
  },
  {
   "name": "global",
   "statistics": [
    {
     "count": "15984",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000004118s"
      },
      {
       "percentile": 0.1,
       "count": "1602",
       "duration": "0.000004552s"
      },
      {
       "percentile": 0.2,
       "count": "3207",
       "duration": "0.000004661s"
      },
      {
       "percentile": 0.3,
       "count": "4814",
       "duration": "0.000004746s"
      },
      {
       "percentile": 0.4,
       "count": "6395",
       "duration": "0.000004826s"
      },
      {
       "percentile": 0.5,
       "count": "7996",
       "duration": "0.000004902s"
      },
      {
       "percentile": 0.55,
       "count": "8799",
       "duration": "0.000004943s"
      },
      {
       "percentile": 0.6,
       "count": "9603",
       "duration": "0.000004986s"
      },
      {
       "percentile": 0.65,
       "count": "10396",
       "duration": "0.000005030s"
      },
      {
       "percentile": 0.7,
       "count": "11200",
       "duration": "0.000005080s"
      },
      {
       "percentile": 0.75,
       "count": "11998",
       "duration": "0.000005134s"
      },
      {
       "percentile": 0.775,
       "count": "12388",
       "duration": "0.000005166s"
      },
      {
       "percentile": 0.8,
       "count": "12790",
       "duration": "0.000005202s"
      },
      {
       "percentile": 0.825,
       "count": "13196",
       "duration": "0.000005240s"
      },
      {
       "percentile": 0.85,
       "count": "13594",
       "duration": "0.000005282s"
      },
      {
       "percentile": 0.875,
       "count": "13991",
       "duration": "0.000005330s"
      },
      {
       "percentile": 0.8875,
       "count": "14188",
       "duration": "0.000005358s"
      },
      {
       "percentile": 0.9,
       "count": "14390",
       "duration": "0.000005394s"
      },
      {
       "percentile": 0.9125,
       "count": "14595",
       "duration": "0.000005430s"
      },
      {
       "percentile": 0.925,
       "count": "14791",
       "duration": "0.000005468s"
      },
      {
       "percentile": 0.9375,
       "count": "14985",
       "duration": "0.000005516s"
      },
      {
       "percentile": 0.94375,
       "count": "15086",
       "duration": "0.000005548s"
      },
      {
       "percentile": 0.95,
       "count": "15185",
       "duration": "0.000005575s"
      },
      {
       "percentile": 0.95625,
       "count": "15287",
       "duration": "0.000005611s"
      },
      {
       "percentile": 0.9625,
       "count": "15385",
       "duration": "0.000005645s"
      },
      {
       "percentile": 0.96875,
       "count": "15487",
       "duration": "0.000005683s"
      },
      {
       "percentile": 0.971875,
       "count": "15536",
       "duration": "0.000005707s"
      },
      {
       "percentile": 0.975,
       "count": "15586",
       "duration": "0.000005735s"
      },
      {
       "percentile": 0.978125,
       "count": "15637",
       "duration": "0.000005768s"
      },
      {
       "percentile": 0.98125,
       "count": "15685",
       "duration": "0.000005817s"
      },
      {
       "percentile": 0.984375,
       "count": "15735",
       "duration": "0.000005856s"
      },
      {
       "percentile": 0.9859375,
       "count": "15762",
       "duration": "0.000005902s"
      },
      {
       "percentile": 0.9875,
       "count": "15785",
       "duration": "0.000005927s"
      },
      {
       "percentile": 0.9890625,
       "count": "15811",
       "duration": "0.000005972s"
      },
      {
       "percentile": 0.990625,
       "count": "15835",
       "duration": "0.000006s"
      },
      {
       "percentile": 0.9921875,
       "count": "15860",
       "duration": "0.000006049s"
      },
      {
       "percentile": 0.99296875,
       "count": "15872",
       "duration": "0.000006071s"
      },
      {
       "percentile": 0.99375,
       "count": "15886",
       "duration": "0.000006110s"
      },
      {
       "percentile": 0.99453125,
       "count": "15897",
       "duration": "0.000006139s"
      },
      {
       "percentile": 0.9953125,
       "count": "15911",
       "duration": "0.000006192s"
      },
      {
       "percentile": 0.99609375,
       "count": "15922",
       "duration": "0.000006262s"
      },
      {
       "percentile": 0.996484375,
       "count": "15928",
       "duration": "0.000006293s"
      },
      {
       "percentile": 0.996875,
       "count": "15935",
       "duration": "0.000006322s"
      },
      {
       "percentile": 0.997265625,
       "count": "15941",
       "duration": "0.000006371s"
      },
      {
       "percentile": 0.99765625,
       "count": "15947",
       "duration": "0.000006444s"
      },
      {
       "percentile": 0.998046875,
       "count": "15953",
       "duration": "0.000006570s"
      },
      {
       "percentile": 0.9982421875,
       "count": "15956",
       "duration": "0.000006669s"
      },
      {
       "percentile": 0.9984375,
       "count": "15960",
       "duration": "0.000006725s"
      },
      {
       "percentile": 0.9986328125,
       "count": "15963",
       "duration": "0.000006816s"
      },
      {
       "percentile": 0.998828125,
       "count": "15966",
       "duration": "0.000007050s"
      },
      {
       "percentile": 0.9990234375,
       "count": "15969",
       "duration": "0.000007200s"
      },
      {
       "percentile": 0.99912109375,
       "count": "15970",
       "duration": "0.000007518s"
      },
      {
       "percentile": 0.99921875,
       "count": "15972",
       "duration": "0.000008085s"
      },
      {
       "percentile": 0.99931640625,
       "count": "15974",
       "duration": "0.000008213s"
      },
      {
       "percentile": 0.9994140625,
       "count": "15975",
       "duration": "0.000008318s"
      },
      {
       "percentile": 0.99951171875,
       "count": "15977",
       "duration": "0.000008592s"
      },
      {
       "percentile": 0.999560546875,
       "count": "15977",
       "duration": "0.000008592s"
      },
      {
       "percentile": 0.999609375,
       "count": "15978",
       "duration": "0.000008691s"
      },
      {
       "percentile": 0.999658203125,
       "count": "15979",
       "duration": "0.000009155s"
      },
      {
       "percentile": 0.99970703125,
       "count": "15980",
       "duration": "0.000010554s"
      },
      {
       "percentile": 0.999755859375,
       "count": "15981",
       "duration": "0.000010695s"
      },
      {
       "percentile": 0.9997802734375,
       "count": "15981",
       "duration": "0.000010695s"
      },
      {
       "percentile": 0.9998046875,
       "count": "15981",
       "duration": "0.000010695s"
      },
      {
       "percentile": 0.9998291015625,
       "count": "15982",
       "duration": "0.000011550s"
      },
      {
       "percentile": 0.999853515625,
       "count": "15982",
       "duration": "0.000011550s"
      },
      {
       "percentile": 0.9998779296875,
       "count": "15983",
       "duration": "0.000014015s"
      },
      {
       "percentile": 0.99989013671875,
       "count": "15983",
       "duration": "0.000014015s"
      },
      {
       "percentile": 0.99990234375,
       "count": "15983",
       "duration": "0.000014015s"
      },
      {
       "percentile": 0.99991455078125,
       "count": "15983",
       "duration": "0.000014015s"
      },
      {
       "percentile": 0.9999267578125,
       "count": "15983",
       "duration": "0.000014015s"
      },
      {
       "percentile": 0.99993896484375,
       "count": "15984",
       "duration": "0.000016256s"
      },
      {
       "percentile": 1,
       "count": "15984",
       "duration": "0.000016256s"
      }
     ],
     "mean": "0.000004950s",
     "pstdev": "0.000000378s"
    },
    {
     "count": "15984",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000068359s"
      },
      {
       "percentile": 0.1,
       "count": "1605",
       "duration": "0.000070235s"
      },
      {
       "percentile": 0.2,
       "count": "3198",
       "duration": "0.000070883s"
      },
      {
       "percentile": 0.3,
       "count": "4798",
       "duration": "0.000071795s"
      },
      {
       "percentile": 0.4,
       "count": "6397",
       "duration": "0.000072851s"
      },
      {
       "percentile": 0.5,
       "count": "7992",
       "duration": "0.000074319s"
      },
      {
       "percentile": 0.55,
       "count": "8795",
       "duration": "0.000088143s"
      },
      {
       "percentile": 0.6,
       "count": "9592",
       "duration": "0.000089915s"
      },
      {
       "percentile": 0.65,
       "count": "10390",
       "duration": "0.000096839s"
      },
      {
       "percentile": 0.7,
       "count": "11189",
       "duration": "0.000103259s"
      },
      {
       "percentile": 0.75,
       "count": "11988",
       "duration": "0.000114575s"
      },
      {
       "percentile": 0.775,
       "count": "12388",
       "duration": "0.000116439s"
      },
      {
       "percentile": 0.8,
       "count": "12788",
       "duration": "0.000118451s"
      },
      {
       "percentile": 0.825,
       "count": "13187",
       "duration": "0.000154591s"
      },
      {
       "percentile": 0.85,
       "count": "13589",
       "duration": "0.000156143s"
      },
      {
       "percentile": 0.875,
       "count": "13986",
       "duration": "0.000161335s"
      },
      {
       "percentile": 0.8875,
       "count": "14186",
       "duration": "0.000163655s"
      },
      {
       "percentile": 0.9,
       "count": "14386",
       "duration": "0.000164431s"
      },
      {
       "percentile": 0.9125,
       "count": "14586",
       "duration": "0.000165063s"
      },
      {
       "percentile": 0.925,
       "count": "14786",
       "duration": "0.000165943s"
      },
      {
       "percentile": 0.9375,
       "count": "14985",
       "duration": "0.000169759s"
      },
      {
       "percentile": 0.94375,
       "count": "15085",
       "duration": "0.000170431s"
      },
      {
       "percentile": 0.95,
       "count": "15185",
       "duration": "0.000170927s"
      },
      {
       "percentile": 0.95625,
       "count": "15286",
       "duration": "0.000171335s"
      },
      {
       "percentile": 0.9625,
       "count": "15388",
       "duration": "0.000171775s"
      },
      {
       "percentile": 0.96875,
       "count": "15486",
       "duration": "0.000172151s"
      },
      {
       "percentile": 0.971875,
       "count": "15535",
       "duration": "0.000172367s"
      },
      {
       "percentile": 0.975,
       "count": "15589",
       "duration": "0.000172591s"
      },
      {
       "percentile": 0.978125,
       "count": "15635",
       "duration": "0.000172823s"
      },
      {
       "percentile": 0.98125,
       "count": "15685",
       "duration": "0.000173055s"
      },
      {
       "percentile": 0.984375,
       "count": "15735",
       "duration": "0.000173375s"
      },
      {
       "percentile": 0.9859375,
       "count": "15760",
       "duration": "0.000173519s"
      },
      {
       "percentile": 0.9875,
       "count": "15785",
       "duration": "0.000173703s"
      },
      {
       "percentile": 0.9890625,
       "count": "15812",
       "duration": "0.000173863s"
      },
      {
       "percentile": 0.990625,
       "count": "15835",
       "duration": "0.000174055s"
      },
      {
       "percentile": 0.9921875,
       "count": "15862",
       "duration": "0.000174351s"
      },
      {
       "percentile": 0.99296875,
       "count": "15872",
       "duration": "0.000174615s"
      },
      {
       "percentile": 0.99375,
       "count": "15885",
       "duration": "0.000174807s"
      },
      {
       "percentile": 0.99453125,
       "count": "15897",
       "duration": "0.000175159s"
      },
      {
       "percentile": 0.9953125,
       "count": "15910",
       "duration": "0.000176095s"
      },
      {
       "percentile": 0.99609375,
       "count": "15922",
       "duration": "0.000179703s"
      },
      {
       "percentile": 0.996484375,
       "count": "15928",
       "duration": "0.000181703s"
      },
      {
       "percentile": 0.996875,
       "count": "15935",
       "duration": "0.000185903s"
      },
      {
       "percentile": 0.997265625,
       "count": "15941",
       "duration": "0.000191127s"
      },
      {
       "percentile": 0.99765625,
       "count": "15947",
       "duration": "0.000200711s"
      },
      {
       "percentile": 0.998046875,
       "count": "15953",
       "duration": "0.000210391s"
      },
      {
       "percentile": 0.9982421875,
       "count": "15956",
       "duration": "0.000219199s"
      },
      {
       "percentile": 0.9984375,
       "count": "15960",
       "duration": "0.000240063s"
      },
      {
       "percentile": 0.9986328125,
       "count": "15963",
       "duration": "0.000251647s"
      },
      {
       "percentile": 0.998828125,
       "count": "15966",
       "duration": "0.000258263s"
      },
      {
       "percentile": 0.9990234375,
       "count": "15969",
       "duration": "0.000266255s"
      },
      {
       "percentile": 0.99912109375,
       "count": "15970",
       "duration": "0.000268895s"
      },
      {
       "percentile": 0.99921875,
       "count": "15972",
       "duration": "0.000274959s"
      },
      {
       "percentile": 0.99931640625,
       "count": "15974",
       "duration": "0.000279119s"
      },
      {
       "percentile": 0.9994140625,
       "count": "15975",
       "duration": "0.000280463s"
      },
      {
       "percentile": 0.99951171875,
       "count": "15977",
       "duration": "0.000289039s"
      },
      {
       "percentile": 0.999560546875,
       "count": "15977",
       "duration": "0.000289039s"
      },
      {
       "percentile": 0.999609375,
       "count": "15978",
       "duration": "0.000293743s"
      },
      {
       "percentile": 0.999658203125,
       "count": "15979",
       "duration": "0.000294975s"
      },
      {
       "percentile": 0.99970703125,
       "count": "15980",
       "duration": "0.000297071s"
      },
      {
       "percentile": 0.999755859375,
       "count": "15981",
       "duration": "0.000298271s"
      },
      {
       "percentile": 0.9997802734375,
       "count": "15981",
       "duration": "0.000298271s"
      },
      {
       "percentile": 0.9998046875,
       "count": "15981",
       "duration": "0.000298271s"
      },
      {
       "percentile": 0.9998291015625,
       "count": "15982",
       "duration": "0.000307551s"
      },
      {
       "percentile": 0.999853515625,
       "count": "15982",
       "duration": "0.000307551s"
      },
      {
       "percentile": 0.9998779296875,
       "count": "15983",
       "duration": "0.000314047s"
      },
      {
       "percentile": 0.99989013671875,
       "count": "15983",
       "duration": "0.000314047s"
      },
      {
       "percentile": 0.99990234375,
       "count": "15983",
       "duration": "0.000314047s"
      },
      {
       "percentile": 0.99991455078125,
       "count": "15983",
       "duration": "0.000314047s"
      },
      {
       "percentile": 0.9999267578125,
       "count": "15983",
       "duration": "0.000314047s"
      },
      {
       "percentile": 0.99993896484375,
       "count": "15984",
       "duration": "0.000378223s"
      },
      {
       "percentile": 1,
       "count": "15984",
       "duration": "0.000378223s"
      }
     ],
     "mean": "0.000097195s",
     "pstdev": "0.000035850s"
    },
    {
     "count": "0",
     "id": "sequencer.blocking",
     "percentiles": [
      {
       "percentile": 1,
       "count": "0",
       "duration": "0s"
      }
     ],
     "mean": "0s",
     "pstdev": "0s"
    },
    {
     "count": "15984",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000075279s"
      },
      {
       "percentile": 0.1,
       "count": "1602",
       "duration": "0.000077255s"
      },
      {
       "percentile": 0.2,
       "count": "3201",
       "duration": "0.000078003s"
      },
      {
       "percentile": 0.3,
       "count": "4801",
       "duration": "0.000078947s"
      },
      {
       "percentile": 0.4,
       "count": "6399",
       "duration": "0.000080047s"
      },
      {
       "percentile": 0.5,
       "count": "7992",
       "duration": "0.000081655s"
      },
      {
       "percentile": 0.55,
       "count": "8792",
       "duration": "0.000094903s"
      },
      {
       "percentile": 0.6,
       "count": "9592",
       "duration": "0.000097007s"
      },
      {
       "percentile": 0.65,
       "count": "10391",
       "duration": "0.000103703s"
      },
      {
       "percentile": 0.7,
       "count": "11189",
       "duration": "0.000110111s"
      },
      {
       "percentile": 0.75,
       "count": "11988",
       "duration": "0.000121643s"
      },
      {
       "percentile": 0.775,
       "count": "12389",
       "duration": "0.000123587s"
      },
      {
       "percentile": 0.8,
       "count": "12788",
       "duration": "0.000125807s"
      },
      {
       "percentile": 0.825,
       "count": "13189",
       "duration": "0.000161527s"
      },
      {
       "percentile": 0.85,
       "count": "13589",
       "duration": "0.000163151s"
      },
      {
       "percentile": 0.875,
       "count": "13986",
       "duration": "0.000168263s"
      },
      {
       "percentile": 0.8875,
       "count": "14186",
       "duration": "0.000170727s"
      },
      {
       "percentile": 0.9,
       "count": "14386",
       "duration": "0.000171519s"
      },
      {
       "percentile": 0.9125,
       "count": "14586",
       "duration": "0.000172191s"
      },
      {
       "percentile": 0.925,
       "count": "14788",
       "duration": "0.000173199s"
      },
      {
       "percentile": 0.9375,
       "count": "14986",
       "duration": "0.000176775s"
      },
      {
       "percentile": 0.94375,
       "count": "15085",
       "duration": "0.000177543s"
      },
      {
       "percentile": 0.95,
       "count": "15185",
       "duration": "0.000178047s"
      },
      {
       "percentile": 0.95625,
       "count": "15285",
       "duration": "0.000178479s"
      },
      {
       "percentile": 0.9625,
       "count": "15386",
       "duration": "0.000178919s"
      },
      {
       "percentile": 0.96875,
       "count": "15486",
       "duration": "0.000179375s"
      },
      {
       "percentile": 0.971875,
       "count": "15536",
       "duration": "0.000179615s"
      },
      {
       "percentile": 0.975,
       "count": "15587",
       "duration": "0.000179823s"
      },
      {
       "percentile": 0.978125,
       "count": "15635",
       "duration": "0.000180055s"
      },
      {
       "percentile": 0.98125,
       "count": "15686",
       "duration": "0.000180343s"
      },
      {
       "percentile": 0.984375,
       "count": "15735",
       "duration": "0.000180671s"
      },
      {
       "percentile": 0.9859375,
       "count": "15760",
       "duration": "0.000180847s"
      },
      {
       "percentile": 0.9875,
       "count": "15785",
       "duration": "0.000181023s"
      },
      {
       "percentile": 0.9890625,
       "count": "15810",
       "duration": "0.000181215s"
      },
      {
       "percentile": 0.990625,
       "count": "15835",
       "duration": "0.000181479s"
      },
      {
       "percentile": 0.9921875,
       "count": "15861",
       "duration": "0.000181767s"
      },
      {
       "percentile": 0.99296875,
       "count": "15872",
       "duration": "0.000181983s"
      },
      {
       "percentile": 0.99375,
       "count": "15885",
       "duration": "0.000182263s"
      },
      {
       "percentile": 0.99453125,
       "count": "15897",
       "duration": "0.000182655s"
      },
      {
       "percentile": 0.9953125,
       "count": "15910",
       "duration": "0.000184015s"
      },
      {
       "percentile": 0.99609375,
       "count": "15922",
       "duration": "0.000187063s"
      },
      {
       "percentile": 0.996484375,
       "count": "15928",
       "duration": "0.000188903s"
      },
      {
       "percentile": 0.996875,
       "count": "15935",
       "duration": "0.000192759s"
      },
      {
       "percentile": 0.997265625,
       "count": "15941",
       "duration": "0.000201391s"
      },
      {
       "percentile": 0.99765625,
       "count": "15947",
       "duration": "0.000207999s"
      },
      {
       "percentile": 0.998046875,
       "count": "15953",
       "duration": "0.000218167s"
      },
      {
       "percentile": 0.9982421875,
       "count": "15956",
       "duration": "0.000226119s"
      },
      {
       "percentile": 0.9984375,
       "count": "15960",
       "duration": "0.000246783s"
      },
      {
       "percentile": 0.9986328125,
       "count": "15963",
       "duration": "0.000258831s"
      },
      {
       "percentile": 0.998828125,
       "count": "15966",
       "duration": "0.000265231s"
      },
      {
       "percentile": 0.9990234375,
       "count": "15969",
       "duration": "0.000273103s"
      },
      {
       "percentile": 0.99912109375,
       "count": "15970",
       "duration": "0.000276783s"
      },
      {
       "percentile": 0.99921875,
       "count": "15972",
       "duration": "0.000282159s"
      },
      {
       "percentile": 0.99931640625,
       "count": "15974",
       "duration": "0.000286399s"
      },
      {
       "percentile": 0.9994140625,
       "count": "15975",
       "duration": "0.000287407s"
      },
      {
       "percentile": 0.99951171875,
       "count": "15977",
       "duration": "0.000296399s"
      },
      {
       "percentile": 0.999560546875,
       "count": "15977",
       "duration": "0.000296399s"
      },
      {
       "percentile": 0.999609375,
       "count": "15978",
       "duration": "0.000300815s"
      },
      {
       "percentile": 0.999658203125,
       "count": "15979",
       "duration": "0.000301807s"
      },
      {
       "percentile": 0.99970703125,
       "count": "15980",
       "duration": "0.000303807s"
      },
      {
       "percentile": 0.999755859375,
       "count": "15981",
       "duration": "0.000304815s"
      },
      {
       "percentile": 0.9997802734375,
       "count": "15981",
       "duration": "0.000304815s"
      },
      {
       "percentile": 0.9998046875,
       "count": "15981",
       "duration": "0.000304815s"
      },
      {
       "percentile": 0.9998291015625,
       "count": "15982",
       "duration": "0.000314703s"
      },
      {
       "percentile": 0.999853515625,
       "count": "15982",
       "duration": "0.000314703s"
      },
      {
       "percentile": 0.9998779296875,
       "count": "15983",
       "duration": "0.000321551s"
      },
      {
       "percentile": 0.99989013671875,
       "count": "15983",
       "duration": "0.000321551s"
      },
      {
       "percentile": 0.99990234375,
       "count": "15983",
       "duration": "0.000321551s"
      },
      {
       "percentile": 0.99991455078125,
       "count": "15983",
       "duration": "0.000321551s"
      },
      {
       "percentile": 0.9999267578125,
       "count": "15983",
       "duration": "0.000321551s"
      },
      {
       "percentile": 0.99993896484375,
       "count": "15984",
       "duration": "0.000385407s"
      },
      {
       "percentile": 1,
       "count": "15984",
       "duration": "0.000385407s"
      }
     ],
     "mean": "0.000104313s",
     "pstdev": "0.000035856s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "16144"
    },
    {
     "name": "cluster_manager.cluster_added",
     "value": "16"
    },
    {
     "name": "default.total_match_count",
     "value": "16"
    },
    {
     "name": "membership_change",
     "value": "16"
    },
    {
     "name": "runtime.load_success",
     "value": "1"
    },
    {
     "name": "runtime.override_dir_not_exists",
     "value": "1"
    },
    {
     "name": "upstream_cx_http2_total",
     "value": "16"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "925056"
    },
    {
     "name": "upstream_cx_total",
     "value": "16"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "211136"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "16"
    },
    {
     "name": "upstream_rq_total",
     "value": "16144"
    }
   ],
   "execution_duration": "10.000000603s"
  }
 ],
 "timestamp": "2019-11-12T13:43:56.702882469Z"
}
