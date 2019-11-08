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
  "requests_per_second": 50000,
  "connections": 100,
  "duration": "10s",
  "timeout": "30s",
  "h2": true,
  "concurrency": "auto",
  "prefetch_connections": false,
  "burst_size": 0,
  "max_pending_requests": 0,
  "max_active_requests": 100,
  "max_requests_per_connection": 4294937295,
  "uri": "127.0.0.1:10000",
  "trace": ""
 },
 "results": [
  {
   "name": "global",
   "statistics": [
    {
     "count": "499988",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000001546s"
      },
      {
       "percentile": 0.1,
       "count": "50373",
       "duration": "0.000002022s"
      },
      {
       "percentile": 0.2,
       "count": "100558",
       "duration": "0.000002101s"
      },
      {
       "percentile": 0.3,
       "count": "150254",
       "duration": "0.000002173s"
      },
      {
       "percentile": 0.4,
       "count": "200190",
       "duration": "0.000002257s"
      },
      {
       "percentile": 0.5,
       "count": "250215",
       "duration": "0.000002423s"
      },
      {
       "percentile": 0.55,
       "count": "275039",
       "duration": "0.000002507s"
      },
      {
       "percentile": 0.6,
       "count": "300243",
       "duration": "0.000002580s"
      },
      {
       "percentile": 0.65,
       "count": "325186",
       "duration": "0.000002653s"
      },
      {
       "percentile": 0.7,
       "count": "350001",
       "duration": "0.000002762s"
      },
      {
       "percentile": 0.75,
       "count": "375016",
       "duration": "0.000004081s"
      },
      {
       "percentile": 0.775,
       "count": "387560",
       "duration": "0.000004178s"
      },
      {
       "percentile": 0.8,
       "count": "400135",
       "duration": "0.000004266s"
      },
      {
       "percentile": 0.825,
       "count": "412572",
       "duration": "0.000004370s"
      },
      {
       "percentile": 0.85,
       "count": "425010",
       "duration": "0.000004533s"
      },
      {
       "percentile": 0.875,
       "count": "437559",
       "duration": "0.000004842s"
      },
      {
       "percentile": 0.8875,
       "count": "443839",
       "duration": "0.000004914s"
      },
      {
       "percentile": 0.9,
       "count": "450087",
       "duration": "0.000004965s"
      },
      {
       "percentile": 0.9125,
       "count": "456379",
       "duration": "0.000005006s"
      },
      {
       "percentile": 0.925,
       "count": "462637",
       "duration": "0.000005043s"
      },
      {
       "percentile": 0.9375,
       "count": "468822",
       "duration": "0.000005078s"
      },
      {
       "percentile": 0.94375,
       "count": "472005",
       "duration": "0.000005096s"
      },
      {
       "percentile": 0.95,
       "count": "475031",
       "duration": "0.000005114s"
      },
      {
       "percentile": 0.95625,
       "count": "478124",
       "duration": "0.000005133s"
      },
      {
       "percentile": 0.9625,
       "count": "481259",
       "duration": "0.000005153s"
      },
      {
       "percentile": 0.96875,
       "count": "484470",
       "duration": "0.000005176s"
      },
      {
       "percentile": 0.971875,
       "count": "485971",
       "duration": "0.000005188s"
      },
      {
       "percentile": 0.975,
       "count": "487506",
       "duration": "0.000005202s"
      },
      {
       "percentile": 0.978125,
       "count": "489134",
       "duration": "0.000005218s"
      },
      {
       "percentile": 0.98125,
       "count": "490665",
       "duration": "0.000005235s"
      },
      {
       "percentile": 0.984375,
       "count": "492242",
       "duration": "0.000005256s"
      },
      {
       "percentile": 0.9859375,
       "count": "493007",
       "duration": "0.000005268s"
      },
      {
       "percentile": 0.9875,
       "count": "493762",
       "duration": "0.000005282s"
      },
      {
       "percentile": 0.9890625,
       "count": "494541",
       "duration": "0.000005298s"
      },
      {
       "percentile": 0.990625,
       "count": "495307",
       "duration": "0.000005317s"
      },
      {
       "percentile": 0.9921875,
       "count": "496085",
       "duration": "0.000005342s"
      },
      {
       "percentile": 0.99296875,
       "count": "496484",
       "duration": "0.000005359s"
      },
      {
       "percentile": 0.99375,
       "count": "496880",
       "duration": "0.000005379s"
      },
      {
       "percentile": 0.99453125,
       "count": "497269",
       "duration": "0.000005407s"
      },
      {
       "percentile": 0.9953125,
       "count": "497651",
       "duration": "0.000005446s"
      },
      {
       "percentile": 0.99609375,
       "count": "498035",
       "duration": "0.000005513s"
      },
      {
       "percentile": 0.996484375,
       "count": "498231",
       "duration": "0.000005568s"
      },
      {
       "percentile": 0.996875,
       "count": "498426",
       "duration": "0.000005649s"
      },
      {
       "percentile": 0.997265625,
       "count": "498622",
       "duration": "0.000005766s"
      },
      {
       "percentile": 0.99765625,
       "count": "498818",
       "duration": "0.000005956s"
      },
      {
       "percentile": 0.998046875,
       "count": "499012",
       "duration": "0.000006235s"
      },
      {
       "percentile": 0.9982421875,
       "count": "499110",
       "duration": "0.000006444s"
      },
      {
       "percentile": 0.9984375,
       "count": "499207",
       "duration": "0.000006635s"
      },
      {
       "percentile": 0.9986328125,
       "count": "499305",
       "duration": "0.000006921s"
      },
      {
       "percentile": 0.998828125,
       "count": "499403",
       "duration": "0.000007419s"
      },
      {
       "percentile": 0.9990234375,
       "count": "499500",
       "duration": "0.000008141s"
      },
      {
       "percentile": 0.99912109375,
       "count": "499549",
       "duration": "0.000008490s"
      },
      {
       "percentile": 0.99921875,
       "count": "499598",
       "duration": "0.000008897s"
      },
      {
       "percentile": 0.99931640625,
       "count": "499647",
       "duration": "0.000009277s"
      },
      {
       "percentile": 0.9994140625,
       "count": "499696",
       "duration": "0.000010110s"
      },
      {
       "percentile": 0.99951171875,
       "count": "499744",
       "duration": "0.000011380s"
      },
      {
       "percentile": 0.999560546875,
       "count": "499769",
       "duration": "0.000012579s"
      },
      {
       "percentile": 0.999609375,
       "count": "499793",
       "duration": "0.000014390s"
      },
      {
       "percentile": 0.999658203125,
       "count": "499818",
       "duration": "0.000016027s"
      },
      {
       "percentile": 0.99970703125,
       "count": "499843",
       "duration": "0.000016670s"
      },
      {
       "percentile": 0.999755859375,
       "count": "499866",
       "duration": "0.000017307s"
      },
      {
       "percentile": 0.9997802734375,
       "count": "499879",
       "duration": "0.000018344s"
      },
      {
       "percentile": 0.9998046875,
       "count": "499891",
       "duration": "0.000018759s"
      },
      {
       "percentile": 0.9998291015625,
       "count": "499903",
       "duration": "0.000019150s"
      },
      {
       "percentile": 0.999853515625,
       "count": "499915",
       "duration": "0.000019401s"
      },
      {
       "percentile": 0.9998779296875,
       "count": "499927",
       "duration": "0.000019779s"
      },
      {
       "percentile": 0.99989013671875,
       "count": "499934",
       "duration": "0.000020387s"
      },
      {
       "percentile": 0.99990234375,
       "count": "499940",
       "duration": "0.000020849s"
      },
      {
       "percentile": 0.99991455078125,
       "count": "499946",
       "duration": "0.000021267s"
      },
      {
       "percentile": 0.9999267578125,
       "count": "499952",
       "duration": "0.000022094s"
      },
      {
       "percentile": 0.99993896484375,
       "count": "499958",
       "duration": "0.000022345s"
      },
      {
       "percentile": 0.999945068359375,
       "count": "499961",
       "duration": "0.000022822s"
      },
      {
       "percentile": 0.999951171875,
       "count": "499964",
       "duration": "0.000023542s"
      },
      {
       "percentile": 0.999957275390625,
       "count": "499967",
       "duration": "0.000024446s"
      },
      {
       "percentile": 0.99996337890625,
       "count": "499970",
       "duration": "0.000025031s"
      },
      {
       "percentile": 0.999969482421875,
       "count": "499973",
       "duration": "0.000025681s"
      },
      {
       "percentile": 0.99997253417968746,
       "count": "499975",
       "duration": "0.000026590s"
      },
      {
       "percentile": 0.9999755859375,
       "count": "499976",
       "duration": "0.000027213s"
      },
      {
       "percentile": 0.99997863769531248,
       "count": "499978",
       "duration": "0.000027586s"
      },
      {
       "percentile": 0.999981689453125,
       "count": "499979",
       "duration": "0.000027610s"
      },
      {
       "percentile": 0.9999847412109375,
       "count": "499981",
       "duration": "0.000028945s"
      },
      {
       "percentile": 0.99998626708984373,
       "count": "499982",
       "duration": "0.000031640s"
      },
      {
       "percentile": 0.99998779296875,
       "count": "499982",
       "duration": "0.000031640s"
      },
      {
       "percentile": 0.99998931884765629,
       "count": "499983",
       "duration": "0.000031916s"
      },
      {
       "percentile": 0.99999084472656252,
       "count": "499984",
       "duration": "0.000033273s"
      },
      {
       "percentile": 0.99999237060546875,
       "count": "499985",
       "duration": "0.000033531s"
      },
      {
       "percentile": 0.99999313354492192,
       "count": "499985",
       "duration": "0.000033531s"
      },
      {
       "percentile": 0.999993896484375,
       "count": "499985",
       "duration": "0.000033531s"
      },
      {
       "percentile": 0.99999465942382815,
       "count": "499986",
       "duration": "0.000037585s"
      },
      {
       "percentile": 0.99999542236328121,
       "count": "499986",
       "duration": "0.000037585s"
      },
      {
       "percentile": 0.99999618530273438,
       "count": "499987",
       "duration": "0.000040339s"
      },
      {
       "percentile": 0.999996566772461,
       "count": "499987",
       "duration": "0.000040339s"
      },
      {
       "percentile": 0.99999694824218754,
       "count": "499987",
       "duration": "0.000040339s"
      },
      {
       "percentile": 0.999997329711914,
       "count": "499987",
       "duration": "0.000040339s"
      },
      {
       "percentile": 0.9999977111816406,
       "count": "499987",
       "duration": "0.000040339s"
      },
      {
       "percentile": 0.99999809265136719,
       "count": "499988",
       "duration": "0.000085831s"
      },
      {
       "percentile": 1,
       "count": "499988",
       "duration": "0.000085831s"
      }
     ],
     "mean": "0.000002943s",
     "pstdev": "0.000001177s"
    },
    {
     "count": "499986",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000100715s"
      },
      {
       "percentile": 0.1,
       "count": "50065",
       "duration": "0.000120535s"
      },
      {
       "percentile": 0.2,
       "count": "100070",
       "duration": "0.000122739s"
      },
      {
       "percentile": 0.3,
       "count": "149999",
       "duration": "0.000124903s"
      },
      {
       "percentile": 0.4,
       "count": "200028",
       "duration": "0.000127551s"
      },
      {
       "percentile": 0.5,
       "count": "250009",
       "duration": "0.000131167s"
      },
      {
       "percentile": 0.55,
       "count": "275028",
       "duration": "0.000132519s"
      },
      {
       "percentile": 0.6,
       "count": "300115",
       "duration": "0.000134055s"
      },
      {
       "percentile": 0.65,
       "count": "325011",
       "duration": "0.000135823s"
      },
      {
       "percentile": 0.7,
       "count": "350084",
       "duration": "0.000137767s"
      },
      {
       "percentile": 0.75,
       "count": "375039",
       "duration": "0.000139975s"
      },
      {
       "percentile": 0.775,
       "count": "387513",
       "duration": "0.000141567s"
      },
      {
       "percentile": 0.8,
       "count": "400029",
       "duration": "0.000143119s"
      },
      {
       "percentile": 0.825,
       "count": "412543",
       "duration": "0.000144919s"
      },
      {
       "percentile": 0.85,
       "count": "425009",
       "duration": "0.000147215s"
      },
      {
       "percentile": 0.875,
       "count": "437506",
       "duration": "0.000150671s"
      },
      {
       "percentile": 0.8875,
       "count": "443743",
       "duration": "0.000154735s"
      },
      {
       "percentile": 0.9,
       "count": "449988",
       "duration": "0.000162295s"
      },
      {
       "percentile": 0.9125,
       "count": "456247",
       "duration": "0.000171967s"
      },
      {
       "percentile": 0.925,
       "count": "462488",
       "duration": "0.000173911s"
      },
      {
       "percentile": 0.9375,
       "count": "468744",
       "duration": "0.000176103s"
      },
      {
       "percentile": 0.94375,
       "count": "471870",
       "duration": "0.000178735s"
      },
      {
       "percentile": 0.95,
       "count": "474991",
       "duration": "0.000181431s"
      },
      {
       "percentile": 0.95625,
       "count": "478118",
       "duration": "0.000188143s"
      },
      {
       "percentile": 0.9625,
       "count": "481242",
       "duration": "0.000195799s"
      },
      {
       "percentile": 0.96875,
       "count": "484366",
       "duration": "0.000208919s"
      },
      {
       "percentile": 0.971875,
       "count": "485925",
       "duration": "0.000218079s"
      },
      {
       "percentile": 0.975,
       "count": "487487",
       "duration": "0.000230487s"
      },
      {
       "percentile": 0.978125,
       "count": "489049",
       "duration": "0.000244911s"
      },
      {
       "percentile": 0.98125,
       "count": "490613",
       "duration": "0.000265551s"
      },
      {
       "percentile": 0.984375,
       "count": "492176",
       "duration": "0.000288399s"
      },
      {
       "percentile": 0.9859375,
       "count": "492955",
       "duration": "0.000301887s"
      },
      {
       "percentile": 0.9875,
       "count": "493737",
       "duration": "0.000317839s"
      },
      {
       "percentile": 0.9890625,
       "count": "494518",
       "duration": "0.000339023s"
      },
      {
       "percentile": 0.990625,
       "count": "495299",
       "duration": "0.000362431s"
      },
      {
       "percentile": 0.9921875,
       "count": "496080",
       "duration": "0.000399055s"
      },
      {
       "percentile": 0.99296875,
       "count": "496471",
       "duration": "0.000425471s"
      },
      {
       "percentile": 0.99375,
       "count": "496862",
       "duration": "0.000452831s"
      },
      {
       "percentile": 0.99453125,
       "count": "497252",
       "duration": "0.000484991s"
      },
      {
       "percentile": 0.9953125,
       "count": "497643",
       "duration": "0.000557311s"
      },
      {
       "percentile": 0.99609375,
       "count": "498033",
       "duration": "0.000660511s"
      },
      {
       "percentile": 0.996484375,
       "count": "498229",
       "duration": "0.000712799s"
      },
      {
       "percentile": 0.996875,
       "count": "498424",
       "duration": "0.000802687s"
      },
      {
       "percentile": 0.997265625,
       "count": "498619",
       "duration": "0.000915615s"
      },
      {
       "percentile": 0.99765625,
       "count": "498815",
       "duration": "0.000995583s"
      },
      {
       "percentile": 0.998046875,
       "count": "499010",
       "duration": "0.001050111s"
      },
      {
       "percentile": 0.9982421875,
       "count": "499108",
       "duration": "0.001131263s"
      },
      {
       "percentile": 0.9984375,
       "count": "499205",
       "duration": "0.001209791s"
      },
      {
       "percentile": 0.9986328125,
       "count": "499303",
       "duration": "0.001327167s"
      },
      {
       "percentile": 0.998828125,
       "count": "499401",
       "duration": "0.001424639s"
      },
      {
       "percentile": 0.9990234375,
       "count": "499498",
       "duration": "0.001548223s"
      },
      {
       "percentile": 0.99912109375,
       "count": "499547",
       "duration": "0.001577023s"
      },
      {
       "percentile": 0.99921875,
       "count": "499596",
       "duration": "0.001594303s"
      },
      {
       "percentile": 0.99931640625,
       "count": "499645",
       "duration": "0.001655743s"
      },
      {
       "percentile": 0.9994140625,
       "count": "499694",
       "duration": "0.001980607s"
      },
      {
       "percentile": 0.99951171875,
       "count": "499742",
       "duration": "0.002149375s"
      },
      {
       "percentile": 0.999560546875,
       "count": "499767",
       "duration": "0.002168447s"
      },
      {
       "percentile": 0.999609375,
       "count": "499791",
       "duration": "0.002186111s"
      },
      {
       "percentile": 0.999658203125,
       "count": "499816",
       "duration": "0.002201727s"
      },
      {
       "percentile": 0.99970703125,
       "count": "499840",
       "duration": "0.002231807s"
      },
      {
       "percentile": 0.999755859375,
       "count": "499864",
       "duration": "0.002291583s"
      },
      {
       "percentile": 0.9997802734375,
       "count": "499877",
       "duration": "0.002322175s"
      },
      {
       "percentile": 0.9998046875,
       "count": "499889",
       "duration": "0.002348543s"
      },
      {
       "percentile": 0.9998291015625,
       "count": "499901",
       "duration": "0.002634623s"
      },
      {
       "percentile": 0.999853515625,
       "count": "499913",
       "duration": "0.002696319s"
      },
      {
       "percentile": 0.9998779296875,
       "count": "499925",
       "duration": "0.002796159s"
      },
      {
       "percentile": 0.99989013671875,
       "count": "499932",
       "duration": "0.002832255s"
      },
      {
       "percentile": 0.99990234375,
       "count": "499938",
       "duration": "0.002882815s"
      },
      {
       "percentile": 0.99991455078125,
       "count": "499944",
       "duration": "0.002907903s"
      },
      {
       "percentile": 0.9999267578125,
       "count": "499950",
       "duration": "0.002918271s"
      },
      {
       "percentile": 0.99993896484375,
       "count": "499956",
       "duration": "0.002925823s"
      },
      {
       "percentile": 0.999945068359375,
       "count": "499959",
       "duration": "0.002929791s"
      },
      {
       "percentile": 0.999951171875,
       "count": "499962",
       "duration": "0.002933631s"
      },
      {
       "percentile": 0.999957275390625,
       "count": "499965",
       "duration": "0.002937855s"
      },
      {
       "percentile": 0.99996337890625,
       "count": "499968",
       "duration": "0.002942079s"
      },
      {
       "percentile": 0.999969482421875,
       "count": "499971",
       "duration": "0.002946559s"
      },
      {
       "percentile": 0.99997253417968746,
       "count": "499973",
       "duration": "0.002949375s"
      },
      {
       "percentile": 0.9999755859375,
       "count": "499974",
       "duration": "0.002950783s"
      },
      {
       "percentile": 0.99997863769531248,
       "count": "499976",
       "duration": "0.002954367s"
      },
      {
       "percentile": 0.999981689453125,
       "count": "499977",
       "duration": "0.002956159s"
      },
      {
       "percentile": 0.9999847412109375,
       "count": "499979",
       "duration": "0.002959359s"
      },
      {
       "percentile": 0.99998626708984373,
       "count": "499980",
       "duration": "0.002961279s"
      },
      {
       "percentile": 0.99998779296875,
       "count": "499980",
       "duration": "0.002961279s"
      },
      {
       "percentile": 0.99998931884765629,
       "count": "499981",
       "duration": "0.002963327s"
      },
      {
       "percentile": 0.99999084472656252,
       "count": "499982",
       "duration": "0.002965119s"
      },
      {
       "percentile": 0.99999237060546875,
       "count": "499983",
       "duration": "0.002966783s"
      },
      {
       "percentile": 0.99999313354492192,
       "count": "499983",
       "duration": "0.002966783s"
      },
      {
       "percentile": 0.999993896484375,
       "count": "499983",
       "duration": "0.002966783s"
      },
      {
       "percentile": 0.99999465942382815,
       "count": "499984",
       "duration": "0.002968575s"
      },
      {
       "percentile": 0.99999542236328121,
       "count": "499984",
       "duration": "0.002968575s"
      },
      {
       "percentile": 0.99999618530273438,
       "count": "499985",
       "duration": "0.002970111s"
      },
      {
       "percentile": 0.999996566772461,
       "count": "499985",
       "duration": "0.002970111s"
      },
      {
       "percentile": 0.99999694824218754,
       "count": "499985",
       "duration": "0.002970111s"
      },
      {
       "percentile": 0.999997329711914,
       "count": "499985",
       "duration": "0.002970111s"
      },
      {
       "percentile": 0.9999977111816406,
       "count": "499985",
       "duration": "0.002970111s"
      },
      {
       "percentile": 0.99999809265136719,
       "count": "499986",
       "duration": "0.002970367s"
      },
      {
       "percentile": 1,
       "count": "499986",
       "duration": "0.002970367s"
      }
     ],
     "mean": "0.000143228s",
     "pstdev": "0.000086480s"
    },
    {
     "count": "25",
     "id": "sequencer.blocking",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000068783s"
      },
      {
       "percentile": 0.1,
       "count": "3",
       "duration": "0.000115155s"
      },
      {
       "percentile": 0.2,
       "count": "5",
       "duration": "0.000124823s"
      },
      {
       "percentile": 0.3,
       "count": "8",
       "duration": "0.000147743s"
      },
      {
       "percentile": 0.4,
       "count": "10",
       "duration": "0.000166607s"
      },
      {
       "percentile": 0.5,
       "count": "13",
       "duration": "0.000299919s"
      },
      {
       "percentile": 0.55,
       "count": "14",
       "duration": "0.000350671s"
      },
      {
       "percentile": 0.6,
       "count": "15",
       "duration": "0.000359183s"
      },
      {
       "percentile": 0.65,
       "count": "17",
       "duration": "0.000487151s"
      },
      {
       "percentile": 0.7,
       "count": "18",
       "duration": "0.000501007s"
      },
      {
       "percentile": 0.75,
       "count": "19",
       "duration": "0.000666879s"
      },
      {
       "percentile": 0.775,
       "count": "20",
       "duration": "0.000895359s"
      },
      {
       "percentile": 0.8,
       "count": "20",
       "duration": "0.000895359s"
      },
      {
       "percentile": 0.825,
       "count": "21",
       "duration": "0.001146239s"
      },
      {
       "percentile": 0.85,
       "count": "22",
       "duration": "0.001220287s"
      },
      {
       "percentile": 0.875,
       "count": "22",
       "duration": "0.001220287s"
      },
      {
       "percentile": 0.8875,
       "count": "23",
       "duration": "0.001238143s"
      },
      {
       "percentile": 0.9,
       "count": "23",
       "duration": "0.001238143s"
      },
      {
       "percentile": 0.9125,
       "count": "23",
       "duration": "0.001238143s"
      },
      {
       "percentile": 0.925,
       "count": "24",
       "duration": "0.001790655s"
      },
      {
       "percentile": 0.9375,
       "count": "24",
       "duration": "0.001790655s"
      },
      {
       "percentile": 0.94375,
       "count": "24",
       "duration": "0.001790655s"
      },
      {
       "percentile": 0.95,
       "count": "24",
       "duration": "0.001790655s"
      },
      {
       "percentile": 0.95625,
       "count": "24",
       "duration": "0.001790655s"
      },
      {
       "percentile": 0.9625,
       "count": "25",
       "duration": "0.002201727s"
      },
      {
       "percentile": 1,
       "count": "25",
       "duration": "0.002201727s"
      }
     ],
     "mean": "0.000527781s",
     "pstdev": "0.000561632s"
    },
    {
     "count": "499986",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000112387s"
      },
      {
       "percentile": 0.1,
       "count": "50021",
       "duration": "0.000134103s"
      },
      {
       "percentile": 0.2,
       "count": "100171",
       "duration": "0.000136071s"
      },
      {
       "percentile": 0.3,
       "count": "150128",
       "duration": "0.000137679s"
      },
      {
       "percentile": 0.4,
       "count": "200177",
       "duration": "0.000139119s"
      },
      {
       "percentile": 0.5,
       "count": "250097",
       "duration": "0.000141367s"
      },
      {
       "percentile": 0.55,
       "count": "275002",
       "duration": "0.000143839s"
      },
      {
       "percentile": 0.6,
       "count": "300043",
       "duration": "0.000147399s"
      },
      {
       "percentile": 0.65,
       "count": "325062",
       "duration": "0.000149327s"
      },
      {
       "percentile": 0.7,
       "count": "350014",
       "duration": "0.000150791s"
      },
      {
       "percentile": 0.75,
       "count": "375022",
       "duration": "0.000152223s"
      },
      {
       "percentile": 0.775,
       "count": "387490",
       "duration": "0.000153103s"
      },
      {
       "percentile": 0.8,
       "count": "400039",
       "duration": "0.000154335s"
      },
      {
       "percentile": 0.825,
       "count": "412500",
       "duration": "0.000155807s"
      },
      {
       "percentile": 0.85,
       "count": "424990",
       "duration": "0.000157719s"
      },
      {
       "percentile": 0.875,
       "count": "437495",
       "duration": "0.000162551s"
      },
      {
       "percentile": 0.8875,
       "count": "443742",
       "duration": "0.000167135s"
      },
      {
       "percentile": 0.9,
       "count": "449988",
       "duration": "0.000174847s"
      },
      {
       "percentile": 0.9125,
       "count": "456238",
       "duration": "0.000191479s"
      },
      {
       "percentile": 0.925,
       "count": "462509",
       "duration": "0.000196023s"
      },
      {
       "percentile": 0.9375,
       "count": "468741",
       "duration": "0.000198175s"
      },
      {
       "percentile": 0.94375,
       "count": "471864",
       "duration": "0.000199983s"
      },
      {
       "percentile": 0.95,
       "count": "474990",
       "duration": "0.000203271s"
      },
      {
       "percentile": 0.95625,
       "count": "478113",
       "duration": "0.000207503s"
      },
      {
       "percentile": 0.9625,
       "count": "481238",
       "duration": "0.000216015s"
      },
      {
       "percentile": 0.96875,
       "count": "484364",
       "duration": "0.000229143s"
      },
      {
       "percentile": 0.971875,
       "count": "485924",
       "duration": "0.000238767s"
      },
      {
       "percentile": 0.975,
       "count": "487487",
       "duration": "0.000251743s"
      },
      {
       "percentile": 0.978125,
       "count": "489050",
       "duration": "0.000267631s"
      },
      {
       "percentile": 0.98125,
       "count": "490612",
       "duration": "0.000288879s"
      },
      {
       "percentile": 0.984375,
       "count": "492174",
       "duration": "0.000315439s"
      },
      {
       "percentile": 0.9859375,
       "count": "492955",
       "duration": "0.000330015s"
      },
      {
       "percentile": 0.9875,
       "count": "493737",
       "duration": "0.000347855s"
      },
      {
       "percentile": 0.9890625,
       "count": "494519",
       "duration": "0.000369999s"
      },
      {
       "percentile": 0.990625,
       "count": "495300",
       "duration": "0.000396879s"
      },
      {
       "percentile": 0.9921875,
       "count": "496080",
       "duration": "0.000431967s"
      },
      {
       "percentile": 0.99296875,
       "count": "496471",
       "duration": "0.000463919s"
      },
      {
       "percentile": 0.99375,
       "count": "496862",
       "duration": "0.000490719s"
      },
      {
       "percentile": 0.99453125,
       "count": "497252",
       "duration": "0.000527647s"
      },
      {
       "percentile": 0.9953125,
       "count": "497643",
       "duration": "0.000598239s"
      },
      {
       "percentile": 0.99609375,
       "count": "498033",
       "duration": "0.000730111s"
      },
      {
       "percentile": 0.996484375,
       "count": "498229",
       "duration": "0.000782303s"
      },
      {
       "percentile": 0.996875,
       "count": "498424",
       "duration": "0.000885343s"
      },
      {
       "percentile": 0.997265625,
       "count": "498619",
       "duration": "0.001010847s"
      },
      {
       "percentile": 0.99765625,
       "count": "498815",
       "duration": "0.001076799s"
      },
      {
       "percentile": 0.998046875,
       "count": "499010",
       "duration": "0.001124543s"
      },
      {
       "percentile": 0.9982421875,
       "count": "499108",
       "duration": "0.001213951s"
      },
      {
       "percentile": 0.9984375,
       "count": "499205",
       "duration": "0.001273663s"
      },
      {
       "percentile": 0.9986328125,
       "count": "499303",
       "duration": "0.001432127s"
      },
      {
       "percentile": 0.998828125,
       "count": "499401",
       "duration": "0.001491903s"
      },
      {
       "percentile": 0.9990234375,
       "count": "499498",
       "duration": "0.001671935s"
      },
      {
       "percentile": 0.99912109375,
       "count": "499547",
       "duration": "0.001697727s"
      },
      {
       "percentile": 0.99921875,
       "count": "499596",
       "duration": "0.001733695s"
      },
      {
       "percentile": 0.99931640625,
       "count": "499645",
       "duration": "0.001833919s"
      },
      {
       "percentile": 0.9994140625,
       "count": "499694",
       "duration": "0.002186367s"
      },
      {
       "percentile": 0.99951171875,
       "count": "499742",
       "duration": "0.002287871s"
      },
      {
       "percentile": 0.999560546875,
       "count": "499767",
       "duration": "0.002322559s"
      },
      {
       "percentile": 0.999609375,
       "count": "499791",
       "duration": "0.002348287s"
      },
      {
       "percentile": 0.999658203125,
       "count": "499816",
       "duration": "0.002477439s"
      },
      {
       "percentile": 0.99970703125,
       "count": "499840",
       "duration": "0.002512127s"
      },
      {
       "percentile": 0.999755859375,
       "count": "499864",
       "duration": "0.002541183s"
      },
      {
       "percentile": 0.9997802734375,
       "count": "499877",
       "duration": "0.002556415s"
      },
      {
       "percentile": 0.9998046875,
       "count": "499889",
       "duration": "0.002577919s"
      },
      {
       "percentile": 0.9998291015625,
       "count": "499901",
       "duration": "0.002999679s"
      },
      {
       "percentile": 0.999853515625,
       "count": "499913",
       "duration": "0.003013631s"
      },
      {
       "percentile": 0.9998779296875,
       "count": "499925",
       "duration": "0.003027455s"
      },
      {
       "percentile": 0.99989013671875,
       "count": "499932",
       "duration": "0.003034879s"
      },
      {
       "percentile": 0.99990234375,
       "count": "499938",
       "duration": "0.003041663s"
      },
      {
       "percentile": 0.99991455078125,
       "count": "499944",
       "duration": "0.003048831s"
      },
      {
       "percentile": 0.9999267578125,
       "count": "499950",
       "duration": "0.003055871s"
      },
      {
       "percentile": 0.99993896484375,
       "count": "499956",
       "duration": "0.003063039s"
      },
      {
       "percentile": 0.999945068359375,
       "count": "499959",
       "duration": "0.003066751s"
      },
      {
       "percentile": 0.999951171875,
       "count": "499962",
       "duration": "0.003069951s"
      },
      {
       "percentile": 0.999957275390625,
       "count": "499965",
       "duration": "0.003073279s"
      },
      {
       "percentile": 0.99996337890625,
       "count": "499968",
       "duration": "0.003076991s"
      },
      {
       "percentile": 0.999969482421875,
       "count": "499971",
       "duration": "0.003080319s"
      },
      {
       "percentile": 0.99997253417968746,
       "count": "499973",
       "duration": "0.003082623s"
      },
      {
       "percentile": 0.9999755859375,
       "count": "499974",
       "duration": "0.003083647s"
      },
      {
       "percentile": 0.99997863769531248,
       "count": "499976",
       "duration": "0.003085695s"
      },
      {
       "percentile": 0.999981689453125,
       "count": "499977",
       "duration": "0.003086847s"
      },
      {
       "percentile": 0.9999847412109375,
       "count": "499979",
       "duration": "0.003088767s"
      },
      {
       "percentile": 0.99998626708984373,
       "count": "499980",
       "duration": "0.003090175s"
      },
      {
       "percentile": 0.99998779296875,
       "count": "499980",
       "duration": "0.003090175s"
      },
      {
       "percentile": 0.99998931884765629,
       "count": "499981",
       "duration": "0.003091199s"
      },
      {
       "percentile": 0.99999084472656252,
       "count": "499982",
       "duration": "0.003092223s"
      },
      {
       "percentile": 0.99999237060546875,
       "count": "499983",
       "duration": "0.003093119s"
      },
      {
       "percentile": 0.99999313354492192,
       "count": "499983",
       "duration": "0.003093119s"
      },
      {
       "percentile": 0.999993896484375,
       "count": "499983",
       "duration": "0.003093119s"
      },
      {
       "percentile": 0.99999465942382815,
       "count": "499984",
       "duration": "0.003094143s"
      },
      {
       "percentile": 0.99999542236328121,
       "count": "499984",
       "duration": "0.003094143s"
      },
      {
       "percentile": 0.99999618530273438,
       "count": "499985",
       "duration": "0.003095167s"
      },
      {
       "percentile": 0.999996566772461,
       "count": "499985",
       "duration": "0.003095167s"
      },
      {
       "percentile": 0.99999694824218754,
       "count": "499985",
       "duration": "0.003095167s"
      },
      {
       "percentile": 0.999997329711914,
       "count": "499985",
       "duration": "0.003095167s"
      },
      {
       "percentile": 0.9999977111816406,
       "count": "499985",
       "duration": "0.003095167s"
      },
      {
       "percentile": 0.99999809265136719,
       "count": "499986",
       "duration": "0.003096191s"
      },
      {
       "percentile": 1,
       "count": "499986",
       "duration": "0.003096191s"
      }
     ],
     "mean": "0.000156888s",
     "pstdev": "0.000093446s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "499987"
    },
    {
     "name": "cluster_manager.cluster_added",
     "value": "1"
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
     "name": "runtime.load_success",
     "value": "1"
    },
    {
     "name": "runtime.override_dir_not_exists",
     "value": "1"
    },
    {
     "name": "upstream_cx_http2_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "28499585"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "6499936"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "499989"
    }
   ]
  }
 ],
 "timestamp": "2019-11-06T21:11:15.338969611Z"
}
