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
   "benchmark.pool_connection_failure": 0,
   "benchmark.http_4xx": 0,
   "benchmark.http_5xx": 0
  },
  "requests_per_second": 100,
  "connections": 100,
  "duration": "10s",
  "timeout": "30s",
  "h2": false,
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
       "duration": "0.000001984s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000002185s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000002246s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000002303s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000002356s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000002401s"
      },
      {
       "percentile": 0.55,
       "count": "552",
       "duration": "0.000002432s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000002459s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000002483s"
      },
      {
       "percentile": 0.7,
       "count": "701",
       "duration": "0.000002519s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000002552s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000002574s"
      },
      {
       "percentile": 0.8,
       "count": "801",
       "duration": "0.000002609s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000002625s"
      },
      {
       "percentile": 0.85,
       "count": "851",
       "duration": "0.000002657s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000002702s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000002718s"
      },
      {
       "percentile": 0.9,
       "count": "903",
       "duration": "0.000002740s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000002753s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000002777s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000002810s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000002828s"
      },
      {
       "percentile": 0.95,
       "count": "951",
       "duration": "0.000002841s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000002851s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000002876s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000002901s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000002915s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000002953s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000002963s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000002982s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000003010s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000003019s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000003024s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000003041s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000003077s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000003112s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000003112s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000003117s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000003126s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000003152s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000003154s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000003154s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000003154s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000003173s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000003173s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000003481s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000003481s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000003481s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000003481s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000003481s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000003655s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000003655s"
      }
     ],
     "mean": "0.000002434s",
     "pstdev": "0.000000219s"
    },
    {
     "count": "999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000083707s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000098567s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000103603s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000104179s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000104639s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000105087s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000105307s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000105487s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000105731s"
      },
      {
       "percentile": 0.7,
       "count": "701",
       "duration": "0.000105959s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000106143s"
      },
      {
       "percentile": 0.775,
       "count": "776",
       "duration": "0.000106255s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000106347s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000106475s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000106667s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000106847s"
      },
      {
       "percentile": 0.8875,
       "count": "889",
       "duration": "0.000106967s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000107071s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000107319s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000107483s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000107823s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000107995s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000108351s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000108979s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000109799s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000110575s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000110599s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000111223s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000112531s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000115603s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000147031s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000155759s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000173303s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000173455s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000174495s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000179943s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000179943s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000185311s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000199775s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000204631s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000210447s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000210447s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000210447s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000226727s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000226727s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000314735s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000314735s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000314735s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000314735s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000314735s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000329823s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000329823s"
      }
     ],
     "mean": "0.000105891s",
     "pstdev": "0.000014062s"
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
       "duration": "0.000088379s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000103283s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000108303s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000108927s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000109411s"
      },
      {
       "percentile": 0.5,
       "count": "501",
       "duration": "0.000109851s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000110059s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000110295s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000110515s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000110723s"
      },
      {
       "percentile": 0.75,
       "count": "752",
       "duration": "0.000110955s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000111059s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000111135s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000111283s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000111403s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000111631s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000111795s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000111915s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000112099s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000112307s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000112715s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000112887s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000113363s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000113783s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000114707s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000115483s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000115607s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000116215s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000117643s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000120099s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000151951s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000160495s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000178207s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000178735s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000179079s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000186975s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000186975s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000189615s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000204631s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000209255s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000215023s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000215023s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000215023s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000231847s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000231847s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000319615s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000319615s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000319615s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000319615s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000319615s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000334687s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000334687s"
      }
     ],
     "mean": "0.000110667s",
     "pstdev": "0.000014095s"
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
     "name": "upstream_cx_http1_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "164467"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "60540"
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
   "execution_duration": "10.000001234s"
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
       "duration": "0.000002059s"
      },
      {
       "percentile": 0.1,
       "count": "101",
       "duration": "0.000002339s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000002409s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000002462s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000002515s"
      },
      {
       "percentile": 0.5,
       "count": "502",
       "duration": "0.000002558s"
      },
      {
       "percentile": 0.55,
       "count": "551",
       "duration": "0.000002594s"
      },
      {
       "percentile": 0.6,
       "count": "601",
       "duration": "0.000002627s"
      },
      {
       "percentile": 0.65,
       "count": "651",
       "duration": "0.000002660s"
      },
      {
       "percentile": 0.7,
       "count": "701",
       "duration": "0.000002691s"
      },
      {
       "percentile": 0.75,
       "count": "751",
       "duration": "0.000002732s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000002749s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000002771s"
      },
      {
       "percentile": 0.825,
       "count": "826",
       "duration": "0.000002804s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000002825s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000002858s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000002874s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000002894s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000002920s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000002939s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000002961s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000002984s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000003015s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000003044s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000003091s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000003109s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000003121s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000003134s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000003150s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000003167s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000003190s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000003203s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000003218s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000003240s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000003255s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000003286s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000003286s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000003352s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000003420s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000003492s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000003588s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000003588s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000003588s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000003638s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000003638s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000003699s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000003699s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000003699s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000003699s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000003699s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000003935s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000003935s"
      }
     ],
     "mean": "0.000002600s",
     "pstdev": "0.000000229s"
    },
    {
     "count": "999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000073499s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000086287s"
      },
      {
       "percentile": 0.2,
       "count": "201",
       "duration": "0.000086719s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000086983s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000087223s"
      },
      {
       "percentile": 0.5,
       "count": "501",
       "duration": "0.000087499s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000087655s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000087823s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000087975s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000088279s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000088759s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000089223s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000090271s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000097651s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000098407s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000098815s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000099043s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000099275s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000099535s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000099783s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000100055s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000100231s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000100559s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000100831s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000101423s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000101915s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000104519s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000108127s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000109091s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000110579s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000122095s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000125187s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000128591s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000137647s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000152847s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000156135s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000156135s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000163439s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000166535s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000171063s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000179599s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000179599s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000179599s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000185079s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000185079s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000209783s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000209783s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000209783s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000209783s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000209783s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000244727s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000244727s"
      }
     ],
     "mean": "0.000090541s",
     "pstdev": "0.000011032s"
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
       "duration": "0.000078127s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000090947s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000091391s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000091667s"
      },
      {
       "percentile": 0.4,
       "count": "401",
       "duration": "0.000091963s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000092271s"
      },
      {
       "percentile": 0.55,
       "count": "551",
       "duration": "0.000092403s"
      },
      {
       "percentile": 0.6,
       "count": "602",
       "duration": "0.000092567s"
      },
      {
       "percentile": 0.65,
       "count": "651",
       "duration": "0.000092791s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000093119s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000093647s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000094223s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000095175s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000102535s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000103251s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000103647s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000103911s"
      },
      {
       "percentile": 0.9,
       "count": "901",
       "duration": "0.000104155s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000104435s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000104671s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000104963s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000105111s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000105467s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000105579s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000106375s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000106995s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000109439s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000112979s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000114695s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000115335s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000129035s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000131271s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000134223s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000142391s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000157647s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000160799s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000160799s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000168215s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000171271s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000176047s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000184591s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000184591s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000184591s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000190407s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000190407s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000214495s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000214495s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000214495s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000214495s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000214495s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000249551s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000249551s"
      }
     ],
     "mean": "0.000095317s",
     "pstdev": "0.000011094s"
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
     "name": "upstream_cx_http1_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "164467"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "60540"
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
   "execution_duration": "10.000000718s"
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
       "duration": "0.000002076s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000002355s"
      },
      {
       "percentile": 0.2,
       "count": "201",
       "duration": "0.000002435s"
      },
      {
       "percentile": 0.3,
       "count": "301",
       "duration": "0.000002488s"
      },
      {
       "percentile": 0.4,
       "count": "402",
       "duration": "0.000002533s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000002589s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000002620s"
      },
      {
       "percentile": 0.6,
       "count": "601",
       "duration": "0.000002648s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000002682s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000002721s"
      },
      {
       "percentile": 0.75,
       "count": "752",
       "duration": "0.000002763s"
      },
      {
       "percentile": 0.775,
       "count": "776",
       "duration": "0.000002786s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000002817s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000002839s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000002866s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000002894s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000002914s"
      },
      {
       "percentile": 0.9,
       "count": "901",
       "duration": "0.000002936s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000002951s"
      },
      {
       "percentile": 0.925,
       "count": "926",
       "duration": "0.000002971s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000002997s"
      },
      {
       "percentile": 0.94375,
       "count": "944",
       "duration": "0.000003028s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000003046s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000003058s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000003084s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000003113s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000003134s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000003162s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000003186s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000003206s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000003213s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000003223s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000003227s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000003267s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000003275s"
      },
      {
       "percentile": 0.9921875,
       "count": "993",
       "duration": "0.000003322s"
      },
      {
       "percentile": 0.99296875,
       "count": "993",
       "duration": "0.000003322s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000003322s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000003355s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000003411s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000003525s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000003525s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000003525s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000003613s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000003613s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000003615s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000003615s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000003615s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000003615s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000003615s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000003669s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000003669s"
      }
     ],
     "mean": "0.000002624s",
     "pstdev": "0.000000232s"
    },
    {
     "count": "999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000073727s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000087567s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000096487s"
      },
      {
       "percentile": 0.3,
       "count": "301",
       "duration": "0.000097259s"
      },
      {
       "percentile": 0.4,
       "count": "402",
       "duration": "0.000097703s"
      },
      {
       "percentile": 0.5,
       "count": "501",
       "duration": "0.000098095s"
      },
      {
       "percentile": 0.55,
       "count": "552",
       "duration": "0.000098275s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000098515s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000098715s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000098951s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000099295s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000099511s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000099667s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000099895s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000100639s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000103999s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000104835s"
      },
      {
       "percentile": 0.9,
       "count": "901",
       "duration": "0.000105519s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000105931s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000106411s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000106723s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000106971s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000107255s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000107495s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000107691s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000108235s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000108475s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000109219s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000109571s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000110027s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000140471s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000143551s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000148567s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000165095s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000167375s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000178359s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000178359s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000181791s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000194247s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000195447s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000197351s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000197351s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000197351s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000202903s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000202903s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000220295s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000220295s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000220295s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000220295s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000220295s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000322127s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000322127s"
      }
     ],
     "mean": "0.000098697s",
     "pstdev": "0.000013173s"
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
       "duration": "0.000078551s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000092187s"
      },
      {
       "percentile": 0.2,
       "count": "201",
       "duration": "0.000101151s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000101955s"
      },
      {
       "percentile": 0.4,
       "count": "402",
       "duration": "0.000102447s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000102883s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000103087s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000103267s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000103567s"
      },
      {
       "percentile": 0.7,
       "count": "702",
       "duration": "0.000103871s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000104199s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000104331s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000104595s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000104955s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000105779s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000109167s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000109739s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000110559s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000110947s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000111363s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000111715s"
      },
      {
       "percentile": 0.94375,
       "count": "944",
       "duration": "0.000111991s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000112295s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000112479s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000112815s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000113219s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000113487s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000114459s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000114627s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000115603s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000145727s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000148175s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000153951s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000169823s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000172159s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000182927s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000182927s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000186535s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000199071s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000200287s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000201807s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000201807s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000201807s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000207695s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000207695s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000225215s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000225215s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000225215s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000225215s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000225215s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000326735s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000326735s"
      }
     ],
     "mean": "0.000103504s",
     "pstdev": "0.000013212s"
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
     "name": "upstream_cx_http1_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "164467"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "60540"
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
   "execution_duration": "10.000000813s"
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
       "duration": "0.000002332s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000002588s"
      },
      {
       "percentile": 0.2,
       "count": "202",
       "duration": "0.000002679s"
      },
      {
       "percentile": 0.3,
       "count": "301",
       "duration": "0.000002742s"
      },
      {
       "percentile": 0.4,
       "count": "401",
       "duration": "0.000002810s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000002875s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000002906s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000002946s"
      },
      {
       "percentile": 0.65,
       "count": "653",
       "duration": "0.000002977s"
      },
      {
       "percentile": 0.7,
       "count": "701",
       "duration": "0.000003012s"
      },
      {
       "percentile": 0.75,
       "count": "751",
       "duration": "0.000003061s"
      },
      {
       "percentile": 0.775,
       "count": "776",
       "duration": "0.000003083s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000003113s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000003134s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000003174s"
      },
      {
       "percentile": 0.875,
       "count": "877",
       "duration": "0.000003215s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000003231s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000003255s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000003270s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000003290s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000003324s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000003349s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000003367s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000003383s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000003415s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000003436s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000003448s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000003490s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000003505s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000003510s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000003516s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000003530s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000003542s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000003556s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000003568s"
      },
      {
       "percentile": 0.9921875,
       "count": "993",
       "duration": "0.000003589s"
      },
      {
       "percentile": 0.99296875,
       "count": "993",
       "duration": "0.000003589s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000003589s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000003640s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000003642s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000003650s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000003650s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000003650s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000003784s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000003784s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000004066s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000004066s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000004066s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000004066s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000004066s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000004343s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000004343s"
      }
     ],
     "mean": "0.000002901s",
     "pstdev": "0.000000258s"
    },
    {
     "count": "999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000060365s"
      },
      {
       "percentile": 0.1,
       "count": "101",
       "duration": "0.000061555s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000061887s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000062151s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000062439s"
      },
      {
       "percentile": 0.5,
       "count": "501",
       "duration": "0.000062663s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000062779s"
      },
      {
       "percentile": 0.6,
       "count": "601",
       "duration": "0.000062907s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000063011s"
      },
      {
       "percentile": 0.7,
       "count": "702",
       "duration": "0.000063147s"
      },
      {
       "percentile": 0.75,
       "count": "751",
       "duration": "0.000063275s"
      },
      {
       "percentile": 0.775,
       "count": "776",
       "duration": "0.000063353s"
      },
      {
       "percentile": 0.8,
       "count": "801",
       "duration": "0.000063473s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000063537s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000063711s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000063903s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000063967s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000064067s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000064143s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000064227s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000064501s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000064561s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000064731s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000064841s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000065077s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000065517s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000065719s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000066835s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000067315s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000067659s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000067819s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000068227s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000069139s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000073763s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000074371s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000079615s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000079615s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000081511s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000092575s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000092939s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000116783s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000116783s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000116783s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000136519s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000136519s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000182503s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000182503s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000182503s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000182503s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000182503s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000193071s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000193071s"
      }
     ],
     "mean": "0.000063259s",
     "pstdev": "0.000006606s"
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
       "duration": "0.000064993s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000066579s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000066999s"
      },
      {
       "percentile": 0.3,
       "count": "302",
       "duration": "0.000067295s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000067587s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000067847s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000067963s"
      },
      {
       "percentile": 0.6,
       "count": "601",
       "duration": "0.000068087s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000068227s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000068375s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000068527s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000068619s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000068767s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000068879s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000069019s"
      },
      {
       "percentile": 0.875,
       "count": "877",
       "duration": "0.000069143s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000069227s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000069335s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000069471s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000069703s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000069999s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000070123s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000070315s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000070635s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000070891s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000071583s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000072211s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000072527s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000072619s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000073003s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000074079s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000074119s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000074451s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000079275s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000079811s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000084971s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000084971s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000089939s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000097495s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000097779s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000122543s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000122543s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000122543s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000141183s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000141183s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000188519s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000188519s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000188519s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000188519s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000188519s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000197751s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000197751s"
      }
     ],
     "mean": "0.000068462s",
     "pstdev": "0.000006642s"
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
     "name": "upstream_cx_http1_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "164467"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "60540"
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
   "execution_duration": "10.000001417s"
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
       "count": "2",
       "duration": "0.000002123s"
      },
      {
       "percentile": 0.1,
       "count": "102",
       "duration": "0.000002270s"
      },
      {
       "percentile": 0.2,
       "count": "201",
       "duration": "0.000002353s"
      },
      {
       "percentile": 0.3,
       "count": "301",
       "duration": "0.000002435s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000002500s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000002566s"
      },
      {
       "percentile": 0.55,
       "count": "552",
       "duration": "0.000002599s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000002622s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000002660s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000002689s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000002728s"
      },
      {
       "percentile": 0.775,
       "count": "777",
       "duration": "0.000002747s"
      },
      {
       "percentile": 0.8,
       "count": "803",
       "duration": "0.000002775s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000002807s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000002832s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000002869s"
      },
      {
       "percentile": 0.8875,
       "count": "888",
       "duration": "0.000002892s"
      },
      {
       "percentile": 0.9,
       "count": "902",
       "duration": "0.000002911s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000002930s"
      },
      {
       "percentile": 0.925,
       "count": "926",
       "duration": "0.000002982s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000003009s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000003037s"
      },
      {
       "percentile": 0.95,
       "count": "952",
       "duration": "0.000003061s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000003098s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000003114s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000003160s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000003174s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000003209s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000003221s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000003239s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000003287s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000003288s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000003308s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000003318s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000003322s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000003433s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000003433s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000003485s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000003495s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000003502s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000003556s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000003556s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000003556s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000003594s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000003594s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000003694s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000003694s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000003694s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000003694s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000003694s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000007762s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000007762s"
      }
     ],
     "mean": "0.000002589s",
     "pstdev": "0.000000304s"
    },
    {
     "count": "999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000059827s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000072835s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000073155s"
      },
      {
       "percentile": 0.3,
       "count": "301",
       "duration": "0.000073419s"
      },
      {
       "percentile": 0.4,
       "count": "402",
       "duration": "0.000073671s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000073927s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000074131s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000074295s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000074567s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000074919s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000075759s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000077387s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000084631s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000085023s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000085315s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000085603s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000085803s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000085979s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000086219s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000086507s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000086719s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000086847s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000086955s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000087039s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000087139s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000087275s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000087319s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000087535s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000087771s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000087863s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000088295s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000088331s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000088639s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000089651s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000090075s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000093627s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000093627s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000097891s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000101211s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000102915s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000104723s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000104723s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000104723s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000105807s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000105807s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000111371s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000111371s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000111371s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000111371s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000111371s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000136479s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000136479s"
      }
     ],
     "mean": "0.000076596s",
     "pstdev": "0.000005917s"
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
       "duration": "0.000065019s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000077411s"
      },
      {
       "percentile": 0.2,
       "count": "201",
       "duration": "0.000077791s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000078091s"
      },
      {
       "percentile": 0.4,
       "count": "402",
       "duration": "0.000078359s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000078655s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000078847s"
      },
      {
       "percentile": 0.6,
       "count": "601",
       "duration": "0.000079063s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000079395s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000079831s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000080907s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000082655s"
      },
      {
       "percentile": 0.8,
       "count": "801",
       "duration": "0.000089411s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000089815s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000090163s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000090515s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000090707s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000090919s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000091331s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000091527s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000091803s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000091915s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000092015s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000092179s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000092359s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000092731s"
      },
      {
       "percentile": 0.971875,
       "count": "972",
       "duration": "0.000092927s"
      },
      {
       "percentile": 0.975,
       "count": "976",
       "duration": "0.000093115s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000093183s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000093527s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000093691s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000093843s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000094931s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000095695s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000098391s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000103067s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000103067s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000103703s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000107639s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000108267s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000109399s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000109399s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000109399s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000110787s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000110787s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000116863s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000116863s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000116863s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000116863s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000116863s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000141319s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000141319s"
      }
     ],
     "mean": "0.000081397s",
     "pstdev": "0.000006099s"
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
     "name": "upstream_cx_http1_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "164467"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "60540"
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
   "execution_duration": "10.000001185s"
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
       "duration": "0.000002172s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000002370s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000002448s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000002503s"
      },
      {
       "percentile": 0.4,
       "count": "401",
       "duration": "0.000002566s"
      },
      {
       "percentile": 0.5,
       "count": "501",
       "duration": "0.000002623s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000002654s"
      },
      {
       "percentile": 0.6,
       "count": "605",
       "duration": "0.000002686s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000002712s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000002747s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000002800s"
      },
      {
       "percentile": 0.775,
       "count": "776",
       "duration": "0.000002827s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000002849s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000002869s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000002908s"
      },
      {
       "percentile": 0.875,
       "count": "876",
       "duration": "0.000002946s"
      },
      {
       "percentile": 0.8875,
       "count": "889",
       "duration": "0.000002960s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000002982s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000003019s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000003047s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000003077s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000003101s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000003117s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000003121s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000003150s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000003192s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000003204s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000003258s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000003279s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000003298s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000003328s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000003357s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000003387s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000003405s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000003412s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000003461s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000003461s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000003474s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000003579s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000003620s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000003761s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000003761s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000003761s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000004262s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000004262s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000005291s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000005291s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000005291s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000005291s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000005291s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000005353s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000005353s"
      }
     ],
     "mean": "0.000002661s",
     "pstdev": "0.000000275s"
    },
    {
     "count": "999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000060245s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000074239s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000075915s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000083611s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000084139s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000084579s"
      },
      {
       "percentile": 0.55,
       "count": "551",
       "duration": "0.000084775s"
      },
      {
       "percentile": 0.6,
       "count": "601",
       "duration": "0.000084943s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000085111s"
      },
      {
       "percentile": 0.7,
       "count": "702",
       "duration": "0.000085303s"
      },
      {
       "percentile": 0.75,
       "count": "751",
       "duration": "0.000085563s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000085679s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000085779s"
      },
      {
       "percentile": 0.825,
       "count": "826",
       "duration": "0.000085915s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000086019s"
      },
      {
       "percentile": 0.875,
       "count": "876",
       "duration": "0.000086183s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000086235s"
      },
      {
       "percentile": 0.9,
       "count": "901",
       "duration": "0.000086327s"
      },
      {
       "percentile": 0.9125,
       "count": "913",
       "duration": "0.000086447s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000086579s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000086763s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000086899s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000086975s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000087071s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000087171s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000087343s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000087435s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000087575s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000087879s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000088843s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000089235s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000090247s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000090979s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000095159s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000095415s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000098179s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000098179s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000099103s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000110883s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000112211s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000115675s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000115675s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000115675s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000116475s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000116475s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000148543s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000148543s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000148543s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000148543s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000148543s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000182079s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000182079s"
      }
     ],
     "mean": "0.000083045s",
     "pstdev": "0.000006343s"
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
       "duration": "0.000065057s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000079023s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000080895s"
      },
      {
       "percentile": 0.3,
       "count": "301",
       "duration": "0.000088551s"
      },
      {
       "percentile": 0.4,
       "count": "401",
       "duration": "0.000089103s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000089487s"
      },
      {
       "percentile": 0.55,
       "count": "552",
       "duration": "0.000089683s"
      },
      {
       "percentile": 0.6,
       "count": "603",
       "duration": "0.000089855s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000090031s"
      },
      {
       "percentile": 0.7,
       "count": "702",
       "duration": "0.000090307s"
      },
      {
       "percentile": 0.75,
       "count": "751",
       "duration": "0.000090515s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000090607s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000090719s"
      },
      {
       "percentile": 0.825,
       "count": "826",
       "duration": "0.000090851s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000091003s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000091183s"
      },
      {
       "percentile": 0.8875,
       "count": "888",
       "duration": "0.000091283s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000091367s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000091539s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000091699s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000091879s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000092071s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000092203s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000092303s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000092471s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000092659s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000092791s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000092871s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000093423s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000093907s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000094595s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000095527s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000096331s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000100047s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000102911s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000104583s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000104583s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000105255s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000116691s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000119587s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000120511s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000120511s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000120511s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000120979s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000120979s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000153351s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000153351s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000153351s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000153351s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000153351s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000187047s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000187047s"
      }
     ],
     "mean": "0.000087999s",
     "pstdev": "0.000006427s"
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
     "name": "upstream_cx_http1_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "164467"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "60540"
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
   "execution_duration": "10.000000661s"
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
       "duration": "0.000002113s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000002308s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000002380s"
      },
      {
       "percentile": 0.3,
       "count": "301",
       "duration": "0.000002432s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000002489s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000002535s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000002564s"
      },
      {
       "percentile": 0.6,
       "count": "602",
       "duration": "0.000002596s"
      },
      {
       "percentile": 0.65,
       "count": "651",
       "duration": "0.000002630s"
      },
      {
       "percentile": 0.7,
       "count": "703",
       "duration": "0.000002672s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000002707s"
      },
      {
       "percentile": 0.775,
       "count": "778",
       "duration": "0.000002725s"
      },
      {
       "percentile": 0.8,
       "count": "801",
       "duration": "0.000002746s"
      },
      {
       "percentile": 0.825,
       "count": "826",
       "duration": "0.000002780s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000002811s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000002847s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000002862s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000002882s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000002907s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000002944s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000002956s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000002973s"
      },
      {
       "percentile": 0.95,
       "count": "951",
       "duration": "0.000002983s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000003005s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000003030s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000003051s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000003091s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000003096s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000003109s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000003136s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000003162s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000003171s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000003179s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000003232s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000003242s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000003254s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000003254s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000003256s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000003289s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000003294s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000003333s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000003333s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000003333s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000003404s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000003404s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000003504s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000003504s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000003504s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000003504s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000003504s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000003659s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000003659s"
      }
     ],
     "mean": "0.000002573s",
     "pstdev": "0.000000227s"
    },
    {
     "count": "999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000057731s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000059267s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000059585s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000059793s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000059985s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000060169s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000060251s"
      },
      {
       "percentile": 0.6,
       "count": "601",
       "duration": "0.000060361s"
      },
      {
       "percentile": 0.65,
       "count": "651",
       "duration": "0.000060471s"
      },
      {
       "percentile": 0.7,
       "count": "701",
       "duration": "0.000060579s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000060701s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000060769s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000060841s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000060945s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000061047s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000061127s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000061217s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000061331s"
      },
      {
       "percentile": 0.9125,
       "count": "913",
       "duration": "0.000061419s"
      },
      {
       "percentile": 0.925,
       "count": "926",
       "duration": "0.000061507s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000061637s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000061703s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000061805s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000061913s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000062083s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000062207s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000062291s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000062417s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000062617s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000062797s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000063637s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000064039s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000066631s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000071199s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000071691s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000077563s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000077563s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000078215s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000098235s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000113371s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000115623s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000115623s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000115623s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000122539s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000122539s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000150975s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000150975s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000150975s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000150975s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000150975s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000164239s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000164239s"
      }
     ],
     "mean": "0.000060712s",
     "pstdev": "0.000005644s"
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
       "duration": "0.000062101s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000063835s"
      },
      {
       "percentile": 0.2,
       "count": "201",
       "duration": "0.000064147s"
      },
      {
       "percentile": 0.3,
       "count": "301",
       "duration": "0.000064355s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000064583s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000064803s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000064909s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000065007s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000065113s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000065247s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000065375s"
      },
      {
       "percentile": 0.775,
       "count": "776",
       "duration": "0.000065479s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000065555s"
      },
      {
       "percentile": 0.825,
       "count": "826",
       "duration": "0.000065627s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000065707s"
      },
      {
       "percentile": 0.875,
       "count": "876",
       "duration": "0.000065887s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000065987s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000066083s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000066175s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000066383s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000066619s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000066695s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000066891s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000067115s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000067351s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000067603s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000067735s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000067903s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000068179s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000068399s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000068579s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000068715s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000072499s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000075723s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000076499s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000082275s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000082275s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000083179s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000103423s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000117687s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000121299s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000121299s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000121299s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000127143s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000127143s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000155367s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000155367s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000155367s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000155367s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000155367s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000168887s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000168887s"
      }
     ],
     "mean": "0.000065369s",
     "pstdev": "0.000005674s"
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
     "name": "upstream_cx_http1_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "164467"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "60540"
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
   "execution_duration": "10.000000013s"
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
       "duration": "0.000002097s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000002250s"
      },
      {
       "percentile": 0.2,
       "count": "202",
       "duration": "0.000002327s"
      },
      {
       "percentile": 0.3,
       "count": "301",
       "duration": "0.000002388s"
      },
      {
       "percentile": 0.4,
       "count": "402",
       "duration": "0.000002446s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000002510s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000002546s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000002583s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000002622s"
      },
      {
       "percentile": 0.7,
       "count": "701",
       "duration": "0.000002662s"
      },
      {
       "percentile": 0.75,
       "count": "752",
       "duration": "0.000002711s"
      },
      {
       "percentile": 0.775,
       "count": "777",
       "duration": "0.000002740s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000002765s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000002789s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000002822s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000002869s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000002886s"
      },
      {
       "percentile": 0.9,
       "count": "901",
       "duration": "0.000002899s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000002927s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000002974s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000003017s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000003040s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000003066s"
      },
      {
       "percentile": 0.95625,
       "count": "957",
       "duration": "0.000003082s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000003103s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000003134s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000003151s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000003183s"
      },
      {
       "percentile": 0.978125,
       "count": "979",
       "duration": "0.000003225s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000003239s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000003259s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000003260s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000003316s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000003329s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000003338s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000003348s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000003348s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000003392s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000003424s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000003477s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000003514s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000003514s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000003514s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000003528s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000003528s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000003615s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000003615s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000003615s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000003615s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000003615s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000003767s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000003767s"
      }
     ],
     "mean": "0.000002554s",
     "pstdev": "0.000000265s"
    },
    {
     "count": "999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000058499s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000059551s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000060015s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000060367s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000060683s"
      },
      {
       "percentile": 0.5,
       "count": "501",
       "duration": "0.000061043s"
      },
      {
       "percentile": 0.55,
       "count": "551",
       "duration": "0.000061239s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000061443s"
      },
      {
       "percentile": 0.65,
       "count": "651",
       "duration": "0.000061675s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000061891s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000062167s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000062295s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000062383s"
      },
      {
       "percentile": 0.825,
       "count": "826",
       "duration": "0.000062507s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000062681s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000062833s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000062965s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000063085s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000063257s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000063457s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000063665s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000063859s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000064059s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000064367s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000064633s"
      },
      {
       "percentile": 0.96875,
       "count": "969",
       "duration": "0.000064893s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000065041s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000065169s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000065373s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000065699s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000066215s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000066283s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000066455s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000066847s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000070563s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000072867s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000072867s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000077395s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000078147s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000081515s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000084627s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000084627s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000084627s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000091919s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000091919s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000126955s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000126955s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000126955s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000126955s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000126955s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000128051s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000128051s"
      }
     ],
     "mean": "0.000061498s",
     "pstdev": "0.000003675s"
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
       "duration": "0.000062963s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000064087s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000064549s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000064889s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000065293s"
      },
      {
       "percentile": 0.5,
       "count": "502",
       "duration": "0.000065731s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000065959s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000066195s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000066451s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000066659s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000066887s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000067003s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000067147s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000067335s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000067483s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000067759s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000067887s"
      },
      {
       "percentile": 0.9,
       "count": "901",
       "duration": "0.000068015s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000068159s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000068391s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000068707s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000068951s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000069207s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000069391s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000069499s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000070039s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000070299s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000070459s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000070647s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000070743s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000071023s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000071327s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000071523s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000073407s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000075599s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000077519s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000077519s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000081843s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000083055s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000086335s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000089047s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000089047s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000089047s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000096767s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000096767s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000131775s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000131775s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000131775s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000131775s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000131775s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000133087s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000133087s"
      }
     ],
     "mean": "0.000066185s",
     "pstdev": "0.000003746s"
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
     "name": "upstream_cx_http1_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "164467"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "60540"
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
   "execution_duration": "10.000000341s"
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
       "duration": "0.000002094s"
      },
      {
       "percentile": 0.1,
       "count": "101",
       "duration": "0.000002280s"
      },
      {
       "percentile": 0.2,
       "count": "201",
       "duration": "0.000002337s"
      },
      {
       "percentile": 0.3,
       "count": "303",
       "duration": "0.000002401s"
      },
      {
       "percentile": 0.4,
       "count": "401",
       "duration": "0.000002459s"
      },
      {
       "percentile": 0.5,
       "count": "501",
       "duration": "0.000002507s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000002531s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000002561s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000002587s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000002635s"
      },
      {
       "percentile": 0.75,
       "count": "751",
       "duration": "0.000002675s"
      },
      {
       "percentile": 0.775,
       "count": "779",
       "duration": "0.000002695s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000002710s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000002740s"
      },
      {
       "percentile": 0.85,
       "count": "851",
       "duration": "0.000002775s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000002813s"
      },
      {
       "percentile": 0.8875,
       "count": "888",
       "duration": "0.000002839s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000002866s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000002887s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000002933s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000002961s"
      },
      {
       "percentile": 0.94375,
       "count": "944",
       "duration": "0.000002986s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000003s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000003039s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000003068s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000003121s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000003131s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000003153s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000003176s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000003212s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000003244s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000003256s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000003275s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000003320s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000003336s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000003371s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000003371s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000003528s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000003544s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000003558s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000003630s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000003630s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000003630s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000003685s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000003685s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000003732s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000003732s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000003732s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000003732s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000003732s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000006705s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000006705s"
      }
     ],
     "mean": "0.000002549s",
     "pstdev": "0.000000276s"
    },
    {
     "count": "999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000059775s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000073887s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000074411s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000075123s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000083595s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000084339s"
      },
      {
       "percentile": 0.55,
       "count": "551",
       "duration": "0.000084599s"
      },
      {
       "percentile": 0.6,
       "count": "601",
       "duration": "0.000084779s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000084971s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000085183s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000085383s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000085531s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000085603s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000085723s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000085883s"
      },
      {
       "percentile": 0.875,
       "count": "876",
       "duration": "0.000086007s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000086055s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000086163s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000086243s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000086399s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000086495s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000086603s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000086763s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000086851s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000087203s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000087851s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000088115s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000088623s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000089231s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000089831s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000096055s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000100931s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000101803s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000119799s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000124259s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000132327s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000132327s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000156087s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000179175s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000186311s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000207879s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000207879s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000207879s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000224815s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000224815s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000434383s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000434383s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000434383s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000434383s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000434383s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000555551s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000555551s"
      }
     ],
     "mean": "0.000082959s",
     "pstdev": "0.000021173s"
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
       "duration": "0.000064563s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000078375s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000078971s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000079923s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000088335s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000088955s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000089259s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000089455s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000089615s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000089819s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000090019s"
      },
      {
       "percentile": 0.775,
       "count": "776",
       "duration": "0.000090147s"
      },
      {
       "percentile": 0.8,
       "count": "802",
       "duration": "0.000090283s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000090371s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000090503s"
      },
      {
       "percentile": 0.875,
       "count": "876",
       "duration": "0.000090627s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000090775s"
      },
      {
       "percentile": 0.9,
       "count": "901",
       "duration": "0.000090919s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000091039s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000091183s"
      },
      {
       "percentile": 0.9375,
       "count": "938",
       "duration": "0.000091375s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000091483s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000091639s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000091923s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000092367s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000092719s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000093091s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000093819s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000094067s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000094947s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000100783s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000105383s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000106627s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000128667s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000132023s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000136759s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000136759s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000160759s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000184103s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000191311s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000212463s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000212463s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000212463s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000229535s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000229535s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000439359s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000439359s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000439359s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000439359s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000439359s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000560159s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000560159s"
      }
     ],
     "mean": "0.000087635s",
     "pstdev": "0.000021213s"
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
     "name": "upstream_cx_http1_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "164467"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "60540"
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
   "execution_duration": "10.000000541s"
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
       "duration": "0.000002066s"
      },
      {
       "percentile": 0.1,
       "count": "104",
       "duration": "0.000002226s"
      },
      {
       "percentile": 0.2,
       "count": "201",
       "duration": "0.000002274s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000002325s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000002369s"
      },
      {
       "percentile": 0.5,
       "count": "503",
       "duration": "0.000002416s"
      },
      {
       "percentile": 0.55,
       "count": "551",
       "duration": "0.000002437s"
      },
      {
       "percentile": 0.6,
       "count": "602",
       "duration": "0.000002461s"
      },
      {
       "percentile": 0.65,
       "count": "651",
       "duration": "0.000002484s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000002520s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000002545s"
      },
      {
       "percentile": 0.775,
       "count": "779",
       "duration": "0.000002566s"
      },
      {
       "percentile": 0.8,
       "count": "801",
       "duration": "0.000002584s"
      },
      {
       "percentile": 0.825,
       "count": "826",
       "duration": "0.000002611s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000002639s"
      },
      {
       "percentile": 0.875,
       "count": "876",
       "duration": "0.000002667s"
      },
      {
       "percentile": 0.8875,
       "count": "888",
       "duration": "0.000002680s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000002697s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000002711s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000002728s"
      },
      {
       "percentile": 0.9375,
       "count": "939",
       "duration": "0.000002744s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000002752s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000002777s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000002794s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000002811s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000002828s"
      },
      {
       "percentile": 0.971875,
       "count": "972",
       "duration": "0.000002845s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000002868s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000002879s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000002899s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000002912s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000002920s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000002934s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000002967s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000002970s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000002994s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000002994s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000003s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000003019s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000003065s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000003096s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000003096s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000003096s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000003296s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000003296s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000003302s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000003302s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000003302s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000003302s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000003302s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000004119s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000004119s"
      }
     ],
     "mean": "0.000002440s",
     "pstdev": "0.000000193s"
    },
    {
     "count": "999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000104835s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000108239s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000108699s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000109095s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000109507s"
      },
      {
       "percentile": 0.5,
       "count": "501",
       "duration": "0.000109867s"
      },
      {
       "percentile": 0.55,
       "count": "551",
       "duration": "0.000110011s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000110139s"
      },
      {
       "percentile": 0.65,
       "count": "652",
       "duration": "0.000110307s"
      },
      {
       "percentile": 0.7,
       "count": "701",
       "duration": "0.000110451s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000110679s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000110799s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000110883s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000110975s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000111143s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000111307s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000111407s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000111539s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000111695s"
      },
      {
       "percentile": 0.925,
       "count": "926",
       "duration": "0.000111803s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000111987s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000112051s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000112167s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000112319s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000112535s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000112763s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000113323s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000114027s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000114267s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000114983s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000115567s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000116303s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000122355s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000135703s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000144399s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000156999s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000156999s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000169055s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000188743s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000305583s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000333871s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000333871s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000333871s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000354895s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000354895s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000488895s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000488895s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000488895s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000488895s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000488895s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000572767s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000572767s"
      }
     ],
     "mean": "0.000111659s",
     "pstdev": "0.000022829s"
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
       "duration": "0.000109955s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000112815s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000113287s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000113691s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000114079s"
      },
      {
       "percentile": 0.5,
       "count": "502",
       "duration": "0.000114423s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000114559s"
      },
      {
       "percentile": 0.6,
       "count": "603",
       "duration": "0.000114711s"
      },
      {
       "percentile": 0.65,
       "count": "652",
       "duration": "0.000114843s"
      },
      {
       "percentile": 0.7,
       "count": "701",
       "duration": "0.000115027s"
      },
      {
       "percentile": 0.75,
       "count": "751",
       "duration": "0.000115287s"
      },
      {
       "percentile": 0.775,
       "count": "776",
       "duration": "0.000115375s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000115475s"
      },
      {
       "percentile": 0.825,
       "count": "826",
       "duration": "0.000115607s"
      },
      {
       "percentile": 0.85,
       "count": "851",
       "duration": "0.000115799s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000115955s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000116083s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000116211s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000116335s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000116475s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000116647s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000116787s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000116979s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000117115s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000117387s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000117939s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000118131s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000118771s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000119175s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000119963s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000121107s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000121447s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000127039s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000140167s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000149423s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000161703s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000161703s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000173727s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000193471s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000310143s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000338719s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000338719s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000338719s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000359663s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000359663s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000493631s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000493631s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000493631s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000493631s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000493631s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000577343s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000577343s"
      }
     ],
     "mean": "0.000116261s",
     "pstdev": "0.000022839s"
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
     "name": "upstream_cx_http1_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "164467"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "60540"
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
       "duration": "0.000002080s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000002255s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000002326s"
      },
      {
       "percentile": 0.3,
       "count": "303",
       "duration": "0.000002376s"
      },
      {
       "percentile": 0.4,
       "count": "404",
       "duration": "0.000002428s"
      },
      {
       "percentile": 0.5,
       "count": "501",
       "duration": "0.000002475s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000002505s"
      },
      {
       "percentile": 0.6,
       "count": "602",
       "duration": "0.000002536s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000002572s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000002608s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000002642s"
      },
      {
       "percentile": 0.775,
       "count": "777",
       "duration": "0.000002664s"
      },
      {
       "percentile": 0.8,
       "count": "801",
       "duration": "0.000002683s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000002707s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000002728s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000002757s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000002775s"
      },
      {
       "percentile": 0.9,
       "count": "901",
       "duration": "0.000002798s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000002817s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000002846s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000002883s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000002899s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000002932s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000002953s"
      },
      {
       "percentile": 0.9625,
       "count": "964",
       "duration": "0.000002972s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000003007s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000003013s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000003049s"
      },
      {
       "percentile": 0.978125,
       "count": "979",
       "duration": "0.000003059s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000003066s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000003105s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000003108s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000003148s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000003168s"
      },
      {
       "percentile": 0.990625,
       "count": "991",
       "duration": "0.000003169s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000003183s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000003183s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000003186s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000003215s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000003267s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000003276s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000003276s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000003276s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000003278s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000003278s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000003386s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000003386s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000003386s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000003386s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000003386s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000005524s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000005524s"
      }
     ],
     "mean": "0.000002513s",
     "pstdev": "0.000000238s"
    },
    {
     "count": "999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000111251s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000121223s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000122235s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000122879s"
      },
      {
       "percentile": 0.4,
       "count": "401",
       "duration": "0.000123319s"
      },
      {
       "percentile": 0.5,
       "count": "501",
       "duration": "0.000123667s"
      },
      {
       "percentile": 0.55,
       "count": "553",
       "duration": "0.000123883s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000124047s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000124207s"
      },
      {
       "percentile": 0.7,
       "count": "702",
       "duration": "0.000124395s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000124587s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000124727s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000124851s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000124955s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000125147s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000125339s"
      },
      {
       "percentile": 0.8875,
       "count": "888",
       "duration": "0.000125459s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000125595s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000125671s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000125831s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000126059s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000126191s"
      },
      {
       "percentile": 0.95,
       "count": "951",
       "duration": "0.000126311s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000126527s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000126651s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000127183s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000127395s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000127567s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000128947s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000130631s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000137647s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000148167s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000152119s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000159511s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000162583s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000185695s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000185695s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000202247s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000229447s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000256623s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000257743s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000257743s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000257743s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000259263s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000259263s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000301839s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000301839s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000301839s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000301839s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000301839s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000379407s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000379407s"
      }
     ],
     "mean": "0.000124342s",
     "pstdev": "0.000013845s"
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
       "duration": "0.000115603s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000125739s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000126715s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000127379s"
      },
      {
       "percentile": 0.4,
       "count": "401",
       "duration": "0.000127767s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000128167s"
      },
      {
       "percentile": 0.55,
       "count": "551",
       "duration": "0.000128339s"
      },
      {
       "percentile": 0.6,
       "count": "601",
       "duration": "0.000128531s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000128723s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000128911s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000129103s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000129211s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000129319s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000129515s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000129723s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000129903s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000129991s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000130163s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000130287s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000130483s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000130835s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000130987s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000131063s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000131383s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000131783s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000131959s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000132039s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000132615s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000133327s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000135095s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000148151s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000152431s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000156591s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000163967s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000167415s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000190439s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000190439s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000207319s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000234191s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000260967s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000262335s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000262335s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000262335s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000263599s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000263599s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000306143s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000306143s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000306143s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000306143s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000306143s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000383887s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000383887s"
      }
     ],
     "mean": "0.000128864s",
     "pstdev": "0.000013864s"
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
     "name": "upstream_cx_http1_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "164467"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "60540"
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
   "execution_duration": "10.000000294s"
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
       "duration": "0.000002130s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000002394s"
      },
      {
       "percentile": 0.2,
       "count": "201",
       "duration": "0.000002459s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000002514s"
      },
      {
       "percentile": 0.4,
       "count": "403",
       "duration": "0.000002570s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000002628s"
      },
      {
       "percentile": 0.55,
       "count": "552",
       "duration": "0.000002653s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000002679s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000002718s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000002759s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000002806s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000002836s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000002868s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000002890s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000002930s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000002953s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000002976s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000002998s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000003019s"
      },
      {
       "percentile": 0.925,
       "count": "926",
       "duration": "0.000003050s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000003079s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000003102s"
      },
      {
       "percentile": 0.95,
       "count": "951",
       "duration": "0.000003138s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000003160s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000003171s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000003199s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000003215s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000003245s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000003273s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000003296s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000003351s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000003406s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000003420s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000003432s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000003448s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000003469s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000003469s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000003512s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000003563s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000003624s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000003671s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000003671s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000003671s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000003732s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000003732s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000003738s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000003738s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000003738s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000003738s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000003738s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000003917s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000003917s"
      }
     ],
     "mean": "0.000002666s",
     "pstdev": "0.000000251s"
    },
    {
     "count": "999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000064803s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000073799s"
      },
      {
       "percentile": 0.2,
       "count": "201",
       "duration": "0.000074307s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000074679s"
      },
      {
       "percentile": 0.4,
       "count": "402",
       "duration": "0.000074935s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000075299s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000075647s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000076279s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000083971s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000084663s"
      },
      {
       "percentile": 0.75,
       "count": "751",
       "duration": "0.000085067s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000085283s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000085575s"
      },
      {
       "percentile": 0.825,
       "count": "826",
       "duration": "0.000085803s"
      },
      {
       "percentile": 0.85,
       "count": "851",
       "duration": "0.000086015s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000086175s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000086263s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000086347s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000086431s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000086543s"
      },
      {
       "percentile": 0.9375,
       "count": "939",
       "duration": "0.000086723s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000086763s"
      },
      {
       "percentile": 0.95,
       "count": "951",
       "duration": "0.000086867s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000086947s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000087063s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000087275s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000087455s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000087623s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000087831s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000088127s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000089911s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000090635s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000105487s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000109259s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000112595s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000143735s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000143735s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000143759s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000175023s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000230607s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000236055s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000236055s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000236055s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000247295s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000247295s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000423903s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000423903s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000423903s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000423903s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000423903s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000570399s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000570399s"
      }
     ],
     "mean": "0.000080369s",
     "pstdev": "0.000022105s"
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
       "duration": "0.000072375s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000078551s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000079071s"
      },
      {
       "percentile": 0.3,
       "count": "301",
       "duration": "0.000079443s"
      },
      {
       "percentile": 0.4,
       "count": "401",
       "duration": "0.000079767s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000080155s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000080631s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000081223s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000088863s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000089615s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000090023s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000090243s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000090527s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000090739s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000090927s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000091119s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000091223s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000091347s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000091451s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000091647s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000091819s"
      },
      {
       "percentile": 0.94375,
       "count": "944",
       "duration": "0.000091919s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000092027s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000092275s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000092467s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000092611s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000092787s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000093059s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000093095s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000094115s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000095099s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000095875s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000112451s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000114911s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000117579s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000148815s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000148815s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000149263s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000180375s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000235367s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000240895s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000240895s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000240895s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000252399s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000252399s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000428751s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000428751s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000428751s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000428751s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000428751s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000575583s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000575583s"
      }
     ],
     "mean": "0.000085251s",
     "pstdev": "0.000022146s"
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
     "name": "upstream_cx_http1_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "164467"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "60540"
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
   "execution_duration": "10.000000270s"
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
       "duration": "0.000002141s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000002312s"
      },
      {
       "percentile": 0.2,
       "count": "202",
       "duration": "0.000002374s"
      },
      {
       "percentile": 0.3,
       "count": "307",
       "duration": "0.000002423s"
      },
      {
       "percentile": 0.4,
       "count": "402",
       "duration": "0.000002469s"
      },
      {
       "percentile": 0.5,
       "count": "501",
       "duration": "0.000002519s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000002546s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000002582s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000002603s"
      },
      {
       "percentile": 0.7,
       "count": "705",
       "duration": "0.000002631s"
      },
      {
       "percentile": 0.75,
       "count": "751",
       "duration": "0.000002671s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000002690s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000002709s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000002731s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000002753s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000002787s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000002799s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000002834s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000002872s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000002893s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000002918s"
      },
      {
       "percentile": 0.94375,
       "count": "944",
       "duration": "0.000002930s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000002956s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000002986s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000003017s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000003049s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000003077s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000003096s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000003121s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000003129s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000003164s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000003179s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000003192s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000003207s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000003272s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000003305s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000003305s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000003319s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000003373s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000003410s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000003420s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000003420s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000003420s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000003441s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000003441s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000003445s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000003445s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000003445s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000003445s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000003445s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000003472s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000003472s"
      }
     ],
     "mean": "0.000002553s",
     "pstdev": "0.000000217s"
    },
    {
     "count": "999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000110547s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000112403s"
      },
      {
       "percentile": 0.2,
       "count": "201",
       "duration": "0.000112895s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000113331s"
      },
      {
       "percentile": 0.4,
       "count": "401",
       "duration": "0.000113731s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000114091s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000114295s"
      },
      {
       "percentile": 0.6,
       "count": "601",
       "duration": "0.000114587s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000114919s"
      },
      {
       "percentile": 0.7,
       "count": "702",
       "duration": "0.000115191s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000115527s"
      },
      {
       "percentile": 0.775,
       "count": "776",
       "duration": "0.000115647s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000115751s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000115935s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000116111s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000116547s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000116663s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000117443s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000122079s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000123179s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000123663s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000123875s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000124183s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000124403s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000124583s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000124771s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000124863s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000125179s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000125975s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000126195s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000127215s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000139247s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000143487s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000163039s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000167703s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000174535s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000174535s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000194879s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000218671s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000245031s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000247183s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000247183s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000247183s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000248671s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000248671s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000293775s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000293775s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000293775s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000293775s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000293775s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000372511s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000372511s"
      }
     ],
     "mean": "0.000116167s",
     "pstdev": "0.000013797s"
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
       "duration": "0.000115247s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000116979s"
      },
      {
       "percentile": 0.2,
       "count": "201",
       "duration": "0.000117563s"
      },
      {
       "percentile": 0.3,
       "count": "301",
       "duration": "0.000117995s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000118383s"
      },
      {
       "percentile": 0.5,
       "count": "501",
       "duration": "0.000118755s"
      },
      {
       "percentile": 0.55,
       "count": "551",
       "duration": "0.000118987s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000119255s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000119591s"
      },
      {
       "percentile": 0.7,
       "count": "702",
       "duration": "0.000119839s"
      },
      {
       "percentile": 0.75,
       "count": "751",
       "duration": "0.000120147s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000120291s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000120447s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000120639s"
      },
      {
       "percentile": 0.85,
       "count": "851",
       "duration": "0.000120839s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000121339s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000121707s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000122419s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000127063s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000127879s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000128607s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000128775s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000129059s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000129231s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000129447s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000129727s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000129807s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000130347s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000130967s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000131551s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000132311s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000143831s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000148087s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000168023s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000172351s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000179439s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000179439s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000199479s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000223679s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000249975s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000251711s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000251711s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000251711s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000253471s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000253471s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000298495s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000298495s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000298495s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000298495s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000298495s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000377135s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000377135s"
      }
     ],
     "mean": "0.000120856s",
     "pstdev": "0.000013817s"
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
     "name": "upstream_cx_http1_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "164467"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "60540"
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
   "execution_duration": "10.000000544s"
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
       "duration": "0.000002204s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000002389s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000002458s"
      },
      {
       "percentile": 0.3,
       "count": "302",
       "duration": "0.000002513s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000002562s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000002625s"
      },
      {
       "percentile": 0.55,
       "count": "551",
       "duration": "0.000002646s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000002674s"
      },
      {
       "percentile": 0.65,
       "count": "651",
       "duration": "0.000002709s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000002742s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000002780s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000002801s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000002817s"
      },
      {
       "percentile": 0.825,
       "count": "826",
       "duration": "0.000002840s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000002858s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000002902s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000002928s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000002953s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000002987s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000003005s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000003040s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000003061s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000003072s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000003089s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000003108s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000003126s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000003148s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000003162s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000003188s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000003199s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000003213s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000003218s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000003228s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000003289s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000003298s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000003315s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000003315s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000003321s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000003324s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000003360s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000003398s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000003398s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000003398s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000003418s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000003418s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000003474s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000003474s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000003474s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000003474s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000003474s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000003551s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000003551s"
      }
     ],
     "mean": "0.000002649s",
     "pstdev": "0.000000220s"
    },
    {
     "count": "999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000066239s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000088903s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000098943s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000099875s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000101051s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000106979s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000107391s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000107779s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000108107s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000108407s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000108703s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000108819s"
      },
      {
       "percentile": 0.8,
       "count": "801",
       "duration": "0.000108991s"
      },
      {
       "percentile": 0.825,
       "count": "826",
       "duration": "0.000109147s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000109399s"
      },
      {
       "percentile": 0.875,
       "count": "876",
       "duration": "0.000109563s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000109691s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000109915s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000110119s"
      },
      {
       "percentile": 0.925,
       "count": "926",
       "duration": "0.000110291s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000110515s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000110815s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000111079s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000111319s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000111803s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000112443s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000112555s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000113275s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000113475s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000114443s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000116439s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000117487s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000119051s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000126991s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000127003s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000129579s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000129579s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000178391s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000215151s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000228247s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000236367s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000236367s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000236367s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000242135s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000242135s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000274831s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000274831s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000274831s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000274831s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000274831s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000558975s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000558975s"
      }
     ],
     "mean": "0.000104356s",
     "pstdev": "0.000019070s"
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
       "duration": "0.000073171s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000093715s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000103687s"
      },
      {
       "percentile": 0.3,
       "count": "301",
       "duration": "0.000104663s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000105907s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000111795s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000112283s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000112639s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000112991s"
      },
      {
       "percentile": 0.7,
       "count": "702",
       "duration": "0.000113247s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000113531s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000113727s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000113883s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000114047s"
      },
      {
       "percentile": 0.85,
       "count": "851",
       "duration": "0.000114227s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000114435s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000114603s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000114823s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000114947s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000115263s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000115719s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000115971s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000116171s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000116559s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000117087s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000117507s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000117539s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000118139s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000118607s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000119235s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000121215s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000122135s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000123695s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000132167s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000132207s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000134503s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000134503s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000183391s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000220191s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000233383s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000241271s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000241271s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000241271s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000247095s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000247095s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000279823s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000279823s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000279823s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000279823s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000279823s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000564191s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000564191s"
      }
     ],
     "mean": "0.000109193s",
     "pstdev": "0.000019106s"
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
     "name": "upstream_cx_http1_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "164467"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "60540"
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
   "execution_duration": "10.000000318s"
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
       "duration": "0.000002156s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000002354s"
      },
      {
       "percentile": 0.2,
       "count": "202",
       "duration": "0.000002413s"
      },
      {
       "percentile": 0.3,
       "count": "301",
       "duration": "0.000002475s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000002522s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000002566s"
      },
      {
       "percentile": 0.55,
       "count": "554",
       "duration": "0.000002592s"
      },
      {
       "percentile": 0.6,
       "count": "601",
       "duration": "0.000002623s"
      },
      {
       "percentile": 0.65,
       "count": "652",
       "duration": "0.000002657s"
      },
      {
       "percentile": 0.7,
       "count": "701",
       "duration": "0.000002691s"
      },
      {
       "percentile": 0.75,
       "count": "752",
       "duration": "0.000002730s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000002752s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000002773s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000002796s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000002818s"
      },
      {
       "percentile": 0.875,
       "count": "876",
       "duration": "0.000002852s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000002867s"
      },
      {
       "percentile": 0.9,
       "count": "901",
       "duration": "0.000002902s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000002918s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000002938s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000002978s"
      },
      {
       "percentile": 0.94375,
       "count": "944",
       "duration": "0.000002997s"
      },
      {
       "percentile": 0.95,
       "count": "951",
       "duration": "0.000003026s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000003070s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000003077s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000003099s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000003112s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000003144s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000003150s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000003197s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000003206s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000003243s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000003247s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000003268s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000003271s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000003308s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000003308s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000003399s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000003473s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000003476s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000003500s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000003500s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000003500s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000003673s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000003673s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000003767s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000003767s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000003767s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000003767s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000003767s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000007736s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000007736s"
      }
     ],
     "mean": "0.000002608s",
     "pstdev": "0.000000276s"
    },
    {
     "count": "999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000086783s"
      },
      {
       "percentile": 0.1,
       "count": "101",
       "duration": "0.000089155s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000098919s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000099795s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000100435s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000101239s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000102231s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000106187s"
      },
      {
       "percentile": 0.65,
       "count": "651",
       "duration": "0.000107019s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000107399s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000107783s"
      },
      {
       "percentile": 0.775,
       "count": "776",
       "duration": "0.000107927s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000108135s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000108283s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000108491s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000108819s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000108903s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000109047s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000109159s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000109371s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000109651s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000109843s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000110119s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000110587s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000110871s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000111603s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000111711s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000112067s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000114759s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000117155s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000119419s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000119439s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000120475s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000126099s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000127799s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000128635s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000128635s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000208239s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000220343s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000228351s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000250279s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000250279s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000250279s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000253535s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000253535s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000266527s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000266527s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000266527s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000266527s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000266527s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000384031s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000384031s"
      }
     ],
     "mean": "0.000103021s",
     "pstdev": "0.000015568s"
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
       "duration": "0.000091167s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000093867s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000103647s"
      },
      {
       "percentile": 0.3,
       "count": "301",
       "duration": "0.000104439s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000105151s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000105951s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000107291s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000111063s"
      },
      {
       "percentile": 0.65,
       "count": "651",
       "duration": "0.000111747s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000112199s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000112507s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000112691s"
      },
      {
       "percentile": 0.8,
       "count": "801",
       "duration": "0.000112867s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000113051s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000113323s"
      },
      {
       "percentile": 0.875,
       "count": "876",
       "duration": "0.000113603s"
      },
      {
       "percentile": 0.8875,
       "count": "888",
       "duration": "0.000113719s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000113855s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000114055s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000114247s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000114559s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000114643s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000115111s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000115363s"
      },
      {
       "percentile": 0.9625,
       "count": "963",
       "duration": "0.000115947s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000116319s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000116463s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000116615s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000119635s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000122907s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000124355s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000124719s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000130455s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000131983s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000132191s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000133327s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000133327s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000212791s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000225167s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000233327s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000254655s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000254655s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000254655s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000258287s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000258287s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000271631s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000271631s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000271631s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000271631s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000271631s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000388799s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000388799s"
      }
     ],
     "mean": "0.000107764s",
     "pstdev": "0.000015610s"
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
     "name": "upstream_cx_http1_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "164467"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "60540"
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
   "execution_duration": "10.000000791s"
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
       "duration": "0.000002088s"
      },
      {
       "percentile": 0.1,
       "count": "101",
       "duration": "0.000002271s"
      },
      {
       "percentile": 0.2,
       "count": "201",
       "duration": "0.000002331s"
      },
      {
       "percentile": 0.3,
       "count": "302",
       "duration": "0.000002386s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000002432s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000002478s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000002506s"
      },
      {
       "percentile": 0.6,
       "count": "601",
       "duration": "0.000002535s"
      },
      {
       "percentile": 0.65,
       "count": "654",
       "duration": "0.000002564s"
      },
      {
       "percentile": 0.7,
       "count": "703",
       "duration": "0.000002592s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000002632s"
      },
      {
       "percentile": 0.775,
       "count": "776",
       "duration": "0.000002653s"
      },
      {
       "percentile": 0.8,
       "count": "802",
       "duration": "0.000002679s"
      },
      {
       "percentile": 0.825,
       "count": "826",
       "duration": "0.000002709s"
      },
      {
       "percentile": 0.85,
       "count": "851",
       "duration": "0.000002735s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000002758s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000002771s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000002788s"
      },
      {
       "percentile": 0.9125,
       "count": "913",
       "duration": "0.000002806s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000002837s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000002859s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000002878s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000002887s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000002915s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000002932s"
      },
      {
       "percentile": 0.96875,
       "count": "969",
       "duration": "0.000002953s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000002960s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000002986s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000002996s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000003020s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000003071s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000003096s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000003110s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000003120s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000003129s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000003152s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000003152s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000003153s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000003155s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000003167s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000003169s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000003169s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000003169s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000003314s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000003314s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000003385s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000003385s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000003385s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000003385s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000003385s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000003780s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000003780s"
      }
     ],
     "mean": "0.000002511s",
     "pstdev": "0.000000209s"
    },
    {
     "count": "999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000086635s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000087815s"
      },
      {
       "percentile": 0.2,
       "count": "201",
       "duration": "0.000088163s"
      },
      {
       "percentile": 0.3,
       "count": "301",
       "duration": "0.000088519s"
      },
      {
       "percentile": 0.4,
       "count": "400",
       "duration": "0.000088875s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000089323s"
      },
      {
       "percentile": 0.55,
       "count": "551",
       "duration": "0.000089751s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000090507s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000091995s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000099707s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000100511s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000100763s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000101071s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000101511s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000101935s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000102415s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000102807s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000103763s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000107047s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000107863s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000108255s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000108491s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000108599s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000108783s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000109031s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000109303s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000109467s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000109879s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000110239s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000110415s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000110819s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000111007s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000113947s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000120423s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000129803s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000187247s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000187247s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000196279s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000208775s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000216167s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000230999s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000230999s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000230999s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000254719s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000254719s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000262607s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000262607s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000262607s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000262607s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000262607s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000372591s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000372591s"
      }
     ],
     "mean": "0.000094751s",
     "pstdev": "0.000015812s"
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
       "duration": "0.000091087s"
      },
      {
       "percentile": 0.1,
       "count": "100",
       "duration": "0.000092303s"
      },
      {
       "percentile": 0.2,
       "count": "200",
       "duration": "0.000092699s"
      },
      {
       "percentile": 0.3,
       "count": "300",
       "duration": "0.000093043s"
      },
      {
       "percentile": 0.4,
       "count": "401",
       "duration": "0.000093415s"
      },
      {
       "percentile": 0.5,
       "count": "500",
       "duration": "0.000093883s"
      },
      {
       "percentile": 0.55,
       "count": "550",
       "duration": "0.000094443s"
      },
      {
       "percentile": 0.6,
       "count": "600",
       "duration": "0.000095139s"
      },
      {
       "percentile": 0.65,
       "count": "650",
       "duration": "0.000096791s"
      },
      {
       "percentile": 0.7,
       "count": "700",
       "duration": "0.000104375s"
      },
      {
       "percentile": 0.75,
       "count": "750",
       "duration": "0.000105139s"
      },
      {
       "percentile": 0.775,
       "count": "775",
       "duration": "0.000105411s"
      },
      {
       "percentile": 0.8,
       "count": "800",
       "duration": "0.000105755s"
      },
      {
       "percentile": 0.825,
       "count": "825",
       "duration": "0.000106191s"
      },
      {
       "percentile": 0.85,
       "count": "850",
       "duration": "0.000106635s"
      },
      {
       "percentile": 0.875,
       "count": "875",
       "duration": "0.000107143s"
      },
      {
       "percentile": 0.8875,
       "count": "887",
       "duration": "0.000107515s"
      },
      {
       "percentile": 0.9,
       "count": "900",
       "duration": "0.000108767s"
      },
      {
       "percentile": 0.9125,
       "count": "912",
       "duration": "0.000111719s"
      },
      {
       "percentile": 0.925,
       "count": "925",
       "duration": "0.000112555s"
      },
      {
       "percentile": 0.9375,
       "count": "937",
       "duration": "0.000113047s"
      },
      {
       "percentile": 0.94375,
       "count": "943",
       "duration": "0.000113219s"
      },
      {
       "percentile": 0.95,
       "count": "950",
       "duration": "0.000113451s"
      },
      {
       "percentile": 0.95625,
       "count": "956",
       "duration": "0.000113615s"
      },
      {
       "percentile": 0.9625,
       "count": "962",
       "duration": "0.000113847s"
      },
      {
       "percentile": 0.96875,
       "count": "968",
       "duration": "0.000114291s"
      },
      {
       "percentile": 0.971875,
       "count": "971",
       "duration": "0.000114387s"
      },
      {
       "percentile": 0.975,
       "count": "975",
       "duration": "0.000114703s"
      },
      {
       "percentile": 0.978125,
       "count": "978",
       "duration": "0.000115147s"
      },
      {
       "percentile": 0.98125,
       "count": "981",
       "duration": "0.000115351s"
      },
      {
       "percentile": 0.984375,
       "count": "984",
       "duration": "0.000116003s"
      },
      {
       "percentile": 0.9859375,
       "count": "985",
       "duration": "0.000116491s"
      },
      {
       "percentile": 0.9875,
       "count": "987",
       "duration": "0.000119047s"
      },
      {
       "percentile": 0.9890625,
       "count": "989",
       "duration": "0.000125339s"
      },
      {
       "percentile": 0.990625,
       "count": "990",
       "duration": "0.000134295s"
      },
      {
       "percentile": 0.9921875,
       "count": "992",
       "duration": "0.000192119s"
      },
      {
       "percentile": 0.99296875,
       "count": "992",
       "duration": "0.000192119s"
      },
      {
       "percentile": 0.99375,
       "count": "993",
       "duration": "0.000200647s"
      },
      {
       "percentile": 0.99453125,
       "count": "994",
       "duration": "0.000213655s"
      },
      {
       "percentile": 0.9953125,
       "count": "995",
       "duration": "0.000220855s"
      },
      {
       "percentile": 0.99609375,
       "count": "996",
       "duration": "0.000235671s"
      },
      {
       "percentile": 0.996484375,
       "count": "996",
       "duration": "0.000235671s"
      },
      {
       "percentile": 0.996875,
       "count": "996",
       "duration": "0.000235671s"
      },
      {
       "percentile": 0.997265625,
       "count": "997",
       "duration": "0.000259567s"
      },
      {
       "percentile": 0.99765625,
       "count": "997",
       "duration": "0.000259567s"
      },
      {
       "percentile": 0.998046875,
       "count": "998",
       "duration": "0.000267599s"
      },
      {
       "percentile": 0.9982421875,
       "count": "998",
       "duration": "0.000267599s"
      },
      {
       "percentile": 0.9984375,
       "count": "998",
       "duration": "0.000267599s"
      },
      {
       "percentile": 0.9986328125,
       "count": "998",
       "duration": "0.000267599s"
      },
      {
       "percentile": 0.998828125,
       "count": "998",
       "duration": "0.000267599s"
      },
      {
       "percentile": 0.9990234375,
       "count": "999",
       "duration": "0.000377231s"
      },
      {
       "percentile": 1,
       "count": "999",
       "duration": "0.000377231s"
      }
     ],
     "mean": "0.000099371s",
     "pstdev": "0.000015866s"
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
     "name": "upstream_cx_http1_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "164467"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "60540"
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
   "execution_duration": "10.000000726s"
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
       "duration": "0.000001984s"
      },
      {
       "percentile": 0.1,
       "count": "1618",
       "duration": "0.000002296s"
      },
      {
       "percentile": 0.2,
       "count": "3224",
       "duration": "0.000002372s"
      },
      {
       "percentile": 0.3,
       "count": "4818",
       "duration": "0.000002435s"
      },
      {
       "percentile": 0.4,
       "count": "6395",
       "duration": "0.000002491s"
      },
      {
       "percentile": 0.5,
       "count": "8004",
       "duration": "0.000002550s"
      },
      {
       "percentile": 0.55,
       "count": "8824",
       "duration": "0.000002583s"
      },
      {
       "percentile": 0.6,
       "count": "9610",
       "duration": "0.000002617s"
      },
      {
       "percentile": 0.65,
       "count": "10426",
       "duration": "0.000002653s"
      },
      {
       "percentile": 0.7,
       "count": "11201",
       "duration": "0.000002690s"
      },
      {
       "percentile": 0.75,
       "count": "11996",
       "duration": "0.000002731s"
      },
      {
       "percentile": 0.775,
       "count": "12398",
       "duration": "0.000002754s"
      },
      {
       "percentile": 0.8,
       "count": "12790",
       "duration": "0.000002781s"
      },
      {
       "percentile": 0.825,
       "count": "13190",
       "duration": "0.000002812s"
      },
      {
       "percentile": 0.85,
       "count": "13595",
       "duration": "0.000002845s"
      },
      {
       "percentile": 0.875,
       "count": "13988",
       "duration": "0.000002882s"
      },
      {
       "percentile": 0.8875,
       "count": "14188",
       "duration": "0.000002904s"
      },
      {
       "percentile": 0.9,
       "count": "14395",
       "duration": "0.000002930s"
      },
      {
       "percentile": 0.9125,
       "count": "14586",
       "duration": "0.000002954s"
      },
      {
       "percentile": 0.925,
       "count": "14786",
       "duration": "0.000002983s"
      },
      {
       "percentile": 0.9375,
       "count": "14987",
       "duration": "0.000003020s"
      },
      {
       "percentile": 0.94375,
       "count": "15090",
       "duration": "0.000003044s"
      },
      {
       "percentile": 0.95,
       "count": "15186",
       "duration": "0.000003065s"
      },
      {
       "percentile": 0.95625,
       "count": "15287",
       "duration": "0.000003092s"
      },
      {
       "percentile": 0.9625,
       "count": "15390",
       "duration": "0.000003120s"
      },
      {
       "percentile": 0.96875,
       "count": "15490",
       "duration": "0.000003150s"
      },
      {
       "percentile": 0.971875,
       "count": "15535",
       "duration": "0.000003164s"
      },
      {
       "percentile": 0.975,
       "count": "15587",
       "duration": "0.000003185s"
      },
      {
       "percentile": 0.978125,
       "count": "15636",
       "duration": "0.000003209s"
      },
      {
       "percentile": 0.98125,
       "count": "15685",
       "duration": "0.000003235s"
      },
      {
       "percentile": 0.984375,
       "count": "15738",
       "duration": "0.000003267s"
      },
      {
       "percentile": 0.9859375,
       "count": "15760",
       "duration": "0.000003282s"
      },
      {
       "percentile": 0.9875,
       "count": "15785",
       "duration": "0.000003298s"
      },
      {
       "percentile": 0.9890625,
       "count": "15812",
       "duration": "0.000003322s"
      },
      {
       "percentile": 0.990625,
       "count": "15837",
       "duration": "0.000003352s"
      },
      {
       "percentile": 0.9921875,
       "count": "15860",
       "duration": "0.000003398s"
      },
      {
       "percentile": 0.99296875,
       "count": "15872",
       "duration": "0.000003413s"
      },
      {
       "percentile": 0.99375,
       "count": "15885",
       "duration": "0.000003427s"
      },
      {
       "percentile": 0.99453125,
       "count": "15897",
       "duration": "0.000003459s"
      },
      {
       "percentile": 0.9953125,
       "count": "15910",
       "duration": "0.000003490s"
      },
      {
       "percentile": 0.99609375,
       "count": "15923",
       "duration": "0.000003511s"
      },
      {
       "percentile": 0.996484375,
       "count": "15929",
       "duration": "0.000003528s"
      },
      {
       "percentile": 0.996875,
       "count": "15935",
       "duration": "0.000003552s"
      },
      {
       "percentile": 0.997265625,
       "count": "15941",
       "duration": "0.000003570s"
      },
      {
       "percentile": 0.99765625,
       "count": "15947",
       "duration": "0.000003613s"
      },
      {
       "percentile": 0.998046875,
       "count": "15953",
       "duration": "0.000003638s"
      },
      {
       "percentile": 0.9982421875,
       "count": "15956",
       "duration": "0.000003650s"
      },
      {
       "percentile": 0.9984375,
       "count": "15960",
       "duration": "0.000003671s"
      },
      {
       "percentile": 0.9986328125,
       "count": "15963",
       "duration": "0.000003694s"
      },
      {
       "percentile": 0.998828125,
       "count": "15966",
       "duration": "0.000003732s"
      },
      {
       "percentile": 0.9990234375,
       "count": "15970",
       "duration": "0.000003767s"
      },
      {
       "percentile": 0.99912109375,
       "count": "15970",
       "duration": "0.000003767s"
      },
      {
       "percentile": 0.99921875,
       "count": "15972",
       "duration": "0.000003784s"
      },
      {
       "percentile": 0.99931640625,
       "count": "15974",
       "duration": "0.000003935s"
      },
      {
       "percentile": 0.9994140625,
       "count": "15975",
       "duration": "0.000004066s"
      },
      {
       "percentile": 0.99951171875,
       "count": "15977",
       "duration": "0.000004262s"
      },
      {
       "percentile": 0.999560546875,
       "count": "15977",
       "duration": "0.000004262s"
      },
      {
       "percentile": 0.999609375,
       "count": "15978",
       "duration": "0.000004343s"
      },
      {
       "percentile": 0.999658203125,
       "count": "15979",
       "duration": "0.000005291s"
      },
      {
       "percentile": 0.99970703125,
       "count": "15980",
       "duration": "0.000005353s"
      },
      {
       "percentile": 0.999755859375,
       "count": "15981",
       "duration": "0.000005524s"
      },
      {
       "percentile": 0.9997802734375,
       "count": "15981",
       "duration": "0.000005524s"
      },
      {
       "percentile": 0.9998046875,
       "count": "15981",
       "duration": "0.000005524s"
      },
      {
       "percentile": 0.9998291015625,
       "count": "15982",
       "duration": "0.000006705s"
      },
      {
       "percentile": 0.999853515625,
       "count": "15982",
       "duration": "0.000006705s"
      },
      {
       "percentile": 0.9998779296875,
       "count": "15983",
       "duration": "0.000007736s"
      },
      {
       "percentile": 0.99989013671875,
       "count": "15983",
       "duration": "0.000007736s"
      },
      {
       "percentile": 0.99990234375,
       "count": "15983",
       "duration": "0.000007736s"
      },
      {
       "percentile": 0.99991455078125,
       "count": "15983",
       "duration": "0.000007736s"
      },
      {
       "percentile": 0.9999267578125,
       "count": "15983",
       "duration": "0.000007736s"
      },
      {
       "percentile": 0.99993896484375,
       "count": "15984",
       "duration": "0.000007762s"
      },
      {
       "percentile": 1,
       "count": "15984",
       "duration": "0.000007762s"
      }
     ],
     "mean": "0.000002589s",
     "pstdev": "0.000000266s"
    },
    {
     "count": "15984",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000057731s"
      },
      {
       "percentile": 0.1,
       "count": "1600",
       "duration": "0.000061443s"
      },
      {
       "percentile": 0.2,
       "count": "3198",
       "duration": "0.000073131s"
      },
      {
       "percentile": 0.3,
       "count": "4796",
       "duration": "0.000075631s"
      },
      {
       "percentile": 0.4,
       "count": "6397",
       "duration": "0.000085803s"
      },
      {
       "percentile": 0.5,
       "count": "7992",
       "duration": "0.000088143s"
      },
      {
       "percentile": 0.55,
       "count": "8792",
       "duration": "0.000090555s"
      },
      {
       "percentile": 0.6,
       "count": "9591",
       "duration": "0.000098679s"
      },
      {
       "percentile": 0.65,
       "count": "10390",
       "duration": "0.000100527s"
      },
      {
       "percentile": 0.7,
       "count": "11189",
       "duration": "0.000104831s"
      },
      {
       "percentile": 0.75,
       "count": "11989",
       "duration": "0.000107399s"
      },
      {
       "percentile": 0.775,
       "count": "12388",
       "duration": "0.000108291s"
      },
      {
       "percentile": 0.8,
       "count": "12789",
       "duration": "0.000108991s"
      },
      {
       "percentile": 0.825,
       "count": "13188",
       "duration": "0.000109867s"
      },
      {
       "percentile": 0.85,
       "count": "13587",
       "duration": "0.000110895s"
      },
      {
       "percentile": 0.875,
       "count": "13986",
       "duration": "0.000112699s"
      },
      {
       "percentile": 0.8875,
       "count": "14186",
       "duration": "0.000113411s"
      },
      {
       "percentile": 0.9,
       "count": "14386",
       "duration": "0.000114091s"
      },
      {
       "percentile": 0.9125,
       "count": "14586",
       "duration": "0.000115107s"
      },
      {
       "percentile": 0.925,
       "count": "14786",
       "duration": "0.000116439s"
      },
      {
       "percentile": 0.9375,
       "count": "14986",
       "duration": "0.000122311s"
      },
      {
       "percentile": 0.94375,
       "count": "15087",
       "duration": "0.000122891s"
      },
      {
       "percentile": 0.95,
       "count": "15185",
       "duration": "0.000123303s"
      },
      {
       "percentile": 0.95625,
       "count": "15286",
       "duration": "0.000123635s"
      },
      {
       "percentile": 0.9625,
       "count": "15385",
       "duration": "0.000123959s"
      },
      {
       "percentile": 0.96875,
       "count": "15486",
       "duration": "0.000124287s"
      },
      {
       "percentile": 0.971875,
       "count": "15537",
       "duration": "0.000124451s"
      },
      {
       "percentile": 0.975,
       "count": "15586",
       "duration": "0.000124627s"
      },
      {
       "percentile": 0.978125,
       "count": "15635",
       "duration": "0.000124855s"
      },
      {
       "percentile": 0.98125,
       "count": "15685",
       "duration": "0.000125123s"
      },
      {
       "percentile": 0.984375,
       "count": "15735",
       "duration": "0.000125515s"
      },
      {
       "percentile": 0.9859375,
       "count": "15760",
       "duration": "0.000125703s"
      },
      {
       "percentile": 0.9875,
       "count": "15785",
       "duration": "0.000126087s"
      },
      {
       "percentile": 0.9890625,
       "count": "15810",
       "duration": "0.000126591s"
      },
      {
       "percentile": 0.990625,
       "count": "15835",
       "duration": "0.000127987s"
      },
      {
       "percentile": 0.9921875,
       "count": "15860",
       "duration": "0.000140471s"
      },
      {
       "percentile": 0.99296875,
       "count": "15872",
       "duration": "0.000148543s"
      },
      {
       "percentile": 0.99375,
       "count": "15885",
       "duration": "0.000156999s"
      },
      {
       "percentile": 0.99453125,
       "count": "15897",
       "duration": "0.000169055s"
      },
      {
       "percentile": 0.9953125,
       "count": "15910",
       "duration": "0.000179207s"
      },
      {
       "percentile": 0.99609375,
       "count": "15922",
       "duration": "0.000193071s"
      },
      {
       "percentile": 0.996484375,
       "count": "15928",
       "duration": "0.000199775s"
      },
      {
       "percentile": 0.996875,
       "count": "15935",
       "duration": "0.000209783s"
      },
      {
       "percentile": 0.997265625,
       "count": "15941",
       "duration": "0.000220343s"
      },
      {
       "percentile": 0.99765625,
       "count": "15947",
       "duration": "0.000230607s"
      },
      {
       "percentile": 0.998046875,
       "count": "15953",
       "duration": "0.000245031s"
      },
      {
       "percentile": 0.9982421875,
       "count": "15956",
       "duration": "0.000248671s"
      },
      {
       "percentile": 0.9984375,
       "count": "15960",
       "duration": "0.000256623s"
      },
      {
       "percentile": 0.9986328125,
       "count": "15963",
       "duration": "0.000262607s"
      },
      {
       "percentile": 0.998828125,
       "count": "15966",
       "duration": "0.000293775s"
      },
      {
       "percentile": 0.9990234375,
       "count": "15969",
       "duration": "0.000314735s"
      },
      {
       "percentile": 0.99912109375,
       "count": "15970",
       "duration": "0.000322127s"
      },
      {
       "percentile": 0.99921875,
       "count": "15972",
       "duration": "0.000333871s"
      },
      {
       "percentile": 0.99931640625,
       "count": "15974",
       "duration": "0.000372511s"
      },
      {
       "percentile": 0.9994140625,
       "count": "15975",
       "duration": "0.000372591s"
      },
      {
       "percentile": 0.99951171875,
       "count": "15977",
       "duration": "0.000384031s"
      },
      {
       "percentile": 0.999560546875,
       "count": "15977",
       "duration": "0.000384031s"
      },
      {
       "percentile": 0.999609375,
       "count": "15978",
       "duration": "0.000423903s"
      },
      {
       "percentile": 0.999658203125,
       "count": "15979",
       "duration": "0.000434383s"
      },
      {
       "percentile": 0.99970703125,
       "count": "15980",
       "duration": "0.000488895s"
      },
      {
       "percentile": 0.999755859375,
       "count": "15981",
       "duration": "0.000555551s"
      },
      {
       "percentile": 0.9997802734375,
       "count": "15981",
       "duration": "0.000555551s"
      },
      {
       "percentile": 0.9998046875,
       "count": "15981",
       "duration": "0.000555551s"
      },
      {
       "percentile": 0.9998291015625,
       "count": "15982",
       "duration": "0.000558975s"
      },
      {
       "percentile": 0.999853515625,
       "count": "15982",
       "duration": "0.000558975s"
      },
      {
       "percentile": 0.9998779296875,
       "count": "15983",
       "duration": "0.000570399s"
      },
      {
       "percentile": 0.99989013671875,
       "count": "15983",
       "duration": "0.000570399s"
      },
      {
       "percentile": 0.99990234375,
       "count": "15983",
       "duration": "0.000570399s"
      },
      {
       "percentile": 0.99991455078125,
       "count": "15983",
       "duration": "0.000570399s"
      },
      {
       "percentile": 0.9999267578125,
       "count": "15983",
       "duration": "0.000570399s"
      },
      {
       "percentile": 0.99993896484375,
       "count": "15984",
       "duration": "0.000572767s"
      },
      {
       "percentile": 1,
       "count": "15984",
       "duration": "0.000572767s"
      }
     ],
     "mean": "0.000091116s",
     "pstdev": "0.000023913s"
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
       "duration": "0.000062101s"
      },
      {
       "percentile": 0.1,
       "count": "1599",
       "duration": "0.000066279s"
      },
      {
       "percentile": 0.2,
       "count": "3198",
       "duration": "0.000077755s"
      },
      {
       "percentile": 0.3,
       "count": "4796",
       "duration": "0.000080623s"
      },
      {
       "percentile": 0.4,
       "count": "6395",
       "duration": "0.000090595s"
      },
      {
       "percentile": 0.5,
       "count": "7993",
       "duration": "0.000092855s"
      },
      {
       "percentile": 0.55,
       "count": "8792",
       "duration": "0.000095347s"
      },
      {
       "percentile": 0.6,
       "count": "9591",
       "duration": "0.000103475s"
      },
      {
       "percentile": 0.65,
       "count": "10390",
       "duration": "0.000105291s"
      },
      {
       "percentile": 0.7,
       "count": "11189",
       "duration": "0.000109619s"
      },
      {
       "percentile": 0.75,
       "count": "11989",
       "duration": "0.000112211s"
      },
      {
       "percentile": 0.775,
       "count": "12392",
       "duration": "0.000113043s"
      },
      {
       "percentile": 0.8,
       "count": "12790",
       "duration": "0.000113735s"
      },
      {
       "percentile": 0.825,
       "count": "13187",
       "duration": "0.000114523s"
      },
      {
       "percentile": 0.85,
       "count": "13587",
       "duration": "0.000115595s"
      },
      {
       "percentile": 0.875,
       "count": "13986",
       "duration": "0.000117403s"
      },
      {
       "percentile": 0.8875,
       "count": "14186",
       "duration": "0.000118071s"
      },
      {
       "percentile": 0.9,
       "count": "14388",
       "duration": "0.000118767s"
      },
      {
       "percentile": 0.9125,
       "count": "14587",
       "duration": "0.000119767s"
      },
      {
       "percentile": 0.925,
       "count": "14786",
       "duration": "0.000121215s"
      },
      {
       "percentile": 0.9375,
       "count": "14985",
       "duration": "0.000126843s"
      },
      {
       "percentile": 0.94375,
       "count": "15085",
       "duration": "0.000127435s"
      },
      {
       "percentile": 0.95,
       "count": "15185",
       "duration": "0.000127779s"
      },
      {
       "percentile": 0.95625,
       "count": "15286",
       "duration": "0.000128151s"
      },
      {
       "percentile": 0.9625,
       "count": "15385",
       "duration": "0.000128507s"
      },
      {
       "percentile": 0.96875,
       "count": "15486",
       "duration": "0.000128831s"
      },
      {
       "percentile": 0.971875,
       "count": "15536",
       "duration": "0.000129015s"
      },
      {
       "percentile": 0.975,
       "count": "15585",
       "duration": "0.000129183s"
      },
      {
       "percentile": 0.978125,
       "count": "15636",
       "duration": "0.000129443s"
      },
      {
       "percentile": 0.98125,
       "count": "15685",
       "duration": "0.000129751s"
      },
      {
       "percentile": 0.984375,
       "count": "15736",
       "duration": "0.000130163s"
      },
      {
       "percentile": 0.9859375,
       "count": "15760",
       "duration": "0.000130451s"
      },
      {
       "percentile": 0.9875,
       "count": "15785",
       "duration": "0.000130979s"
      },
      {
       "percentile": 0.9890625,
       "count": "15810",
       "duration": "0.000131735s"
      },
      {
       "percentile": 0.990625,
       "count": "15835",
       "duration": "0.000133087s"
      },
      {
       "percentile": 0.9921875,
       "count": "15860",
       "duration": "0.000145727s"
      },
      {
       "percentile": 0.99296875,
       "count": "15872",
       "duration": "0.000153351s"
      },
      {
       "percentile": 0.99375,
       "count": "15885",
       "duration": "0.000161703s"
      },
      {
       "percentile": 0.99453125,
       "count": "15897",
       "duration": "0.000173727s"
      },
      {
       "percentile": 0.9953125,
       "count": "15911",
       "duration": "0.000184591s"
      },
      {
       "percentile": 0.99609375,
       "count": "15922",
       "duration": "0.000197751s"
      },
      {
       "percentile": 0.996484375,
       "count": "15928",
       "duration": "0.000204631s"
      },
      {
       "percentile": 0.996875,
       "count": "15935",
       "duration": "0.000214495s"
      },
      {
       "percentile": 0.997265625,
       "count": "15941",
       "duration": "0.000225215s"
      },
      {
       "percentile": 0.99765625,
       "count": "15947",
       "duration": "0.000235367s"
      },
      {
       "percentile": 0.998046875,
       "count": "15953",
       "duration": "0.000249975s"
      },
      {
       "percentile": 0.9982421875,
       "count": "15956",
       "duration": "0.000253471s"
      },
      {
       "percentile": 0.9984375,
       "count": "15960",
       "duration": "0.000260967s"
      },
      {
       "percentile": 0.9986328125,
       "count": "15963",
       "duration": "0.000267599s"
      },
      {
       "percentile": 0.998828125,
       "count": "15966",
       "duration": "0.000298495s"
      },
      {
       "percentile": 0.9990234375,
       "count": "15969",
       "duration": "0.000319615s"
      },
      {
       "percentile": 0.99912109375,
       "count": "15970",
       "duration": "0.000326735s"
      },
      {
       "percentile": 0.99921875,
       "count": "15972",
       "duration": "0.000338719s"
      },
      {
       "percentile": 0.99931640625,
       "count": "15974",
       "duration": "0.000377135s"
      },
      {
       "percentile": 0.9994140625,
       "count": "15975",
       "duration": "0.000377231s"
      },
      {
       "percentile": 0.99951171875,
       "count": "15977",
       "duration": "0.000388799s"
      },
      {
       "percentile": 0.999560546875,
       "count": "15977",
       "duration": "0.000388799s"
      },
      {
       "percentile": 0.999609375,
       "count": "15978",
       "duration": "0.000428751s"
      },
      {
       "percentile": 0.999658203125,
       "count": "15979",
       "duration": "0.000439359s"
      },
      {
       "percentile": 0.99970703125,
       "count": "15980",
       "duration": "0.000493631s"
      },
      {
       "percentile": 0.999755859375,
       "count": "15981",
       "duration": "0.000560159s"
      },
      {
       "percentile": 0.9997802734375,
       "count": "15981",
       "duration": "0.000560159s"
      },
      {
       "percentile": 0.9998046875,
       "count": "15981",
       "duration": "0.000560159s"
      },
      {
       "percentile": 0.9998291015625,
       "count": "15982",
       "duration": "0.000564191s"
      },
      {
       "percentile": 0.999853515625,
       "count": "15982",
       "duration": "0.000564191s"
      },
      {
       "percentile": 0.9998779296875,
       "count": "15983",
       "duration": "0.000575583s"
      },
      {
       "percentile": 0.99989013671875,
       "count": "15983",
       "duration": "0.000575583s"
      },
      {
       "percentile": 0.99990234375,
       "count": "15983",
       "duration": "0.000575583s"
      },
      {
       "percentile": 0.99991455078125,
       "count": "15983",
       "duration": "0.000575583s"
      },
      {
       "percentile": 0.9999267578125,
       "count": "15983",
       "duration": "0.000575583s"
      },
      {
       "percentile": 0.99993896484375,
       "count": "15984",
       "duration": "0.000577343s"
      },
      {
       "percentile": 1,
       "count": "15984",
       "duration": "0.000577343s"
      }
     ],
     "mean": "0.000095881s",
     "pstdev": "0.000023879s"
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
     "name": "upstream_cx_http1_total",
     "value": "16"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "2631472"
    },
    {
     "name": "upstream_cx_total",
     "value": "16"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "968640"
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
   "execution_duration": "10.000000669s"
  }
 ],
 "timestamp": "2019-11-12T13:43:37.172835532Z"
}
