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
  "duration": "15s",
  "timeout": "30s",
  "h2": false,
  "concurrency": "8",
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
     "count": "1499",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000001787s"
      },
      {
       "percentile": 0.1,
       "count": "150",
       "duration": "0.000001960s"
      },
      {
       "percentile": 0.2,
       "count": "302",
       "duration": "0.000001989s"
      },
      {
       "percentile": 0.3,
       "count": "452",
       "duration": "0.000002011s"
      },
      {
       "percentile": 0.4,
       "count": "604",
       "duration": "0.000002032s"
      },
      {
       "percentile": 0.5,
       "count": "751",
       "duration": "0.000002054s"
      },
      {
       "percentile": 0.55,
       "count": "827",
       "duration": "0.000002067s"
      },
      {
       "percentile": 0.6,
       "count": "909",
       "duration": "0.000002078s"
      },
      {
       "percentile": 0.65,
       "count": "977",
       "duration": "0.000002089s"
      },
      {
       "percentile": 0.7,
       "count": "1055",
       "duration": "0.000002102s"
      },
      {
       "percentile": 0.75,
       "count": "1126",
       "duration": "0.000002119s"
      },
      {
       "percentile": 0.775,
       "count": "1163",
       "duration": "0.000002127s"
      },
      {
       "percentile": 0.8,
       "count": "1204",
       "duration": "0.000002140s"
      },
      {
       "percentile": 0.825,
       "count": "1238",
       "duration": "0.000002153s"
      },
      {
       "percentile": 0.85,
       "count": "1279",
       "duration": "0.000002165s"
      },
      {
       "percentile": 0.875,
       "count": "1312",
       "duration": "0.000002178s"
      },
      {
       "percentile": 0.8875,
       "count": "1331",
       "duration": "0.000002186s"
      },
      {
       "percentile": 0.9,
       "count": "1351",
       "duration": "0.000002197s"
      },
      {
       "percentile": 0.9125,
       "count": "1369",
       "duration": "0.000002205s"
      },
      {
       "percentile": 0.925,
       "count": "1388",
       "duration": "0.000002217s"
      },
      {
       "percentile": 0.9375,
       "count": "1406",
       "duration": "0.000002231s"
      },
      {
       "percentile": 0.94375,
       "count": "1415",
       "duration": "0.000002239s"
      },
      {
       "percentile": 0.95,
       "count": "1425",
       "duration": "0.000002243s"
      },
      {
       "percentile": 0.95625,
       "count": "1434",
       "duration": "0.000002250s"
      },
      {
       "percentile": 0.9625,
       "count": "1443",
       "duration": "0.000002261s"
      },
      {
       "percentile": 0.96875,
       "count": "1453",
       "duration": "0.000002284s"
      },
      {
       "percentile": 0.971875,
       "count": "1457",
       "duration": "0.000002289s"
      },
      {
       "percentile": 0.975,
       "count": "1462",
       "duration": "0.000002296s"
      },
      {
       "percentile": 0.978125,
       "count": "1467",
       "duration": "0.000002306s"
      },
      {
       "percentile": 0.98125,
       "count": "1471",
       "duration": "0.000002312s"
      },
      {
       "percentile": 0.984375,
       "count": "1476",
       "duration": "0.000002331s"
      },
      {
       "percentile": 0.9859375,
       "count": "1478",
       "duration": "0.000002334s"
      },
      {
       "percentile": 0.9875,
       "count": "1482",
       "duration": "0.000002348s"
      },
      {
       "percentile": 0.9890625,
       "count": "1483",
       "duration": "0.000002350s"
      },
      {
       "percentile": 0.990625,
       "count": "1485",
       "duration": "0.000002362s"
      },
      {
       "percentile": 0.9921875,
       "count": "1488",
       "duration": "0.000002409s"
      },
      {
       "percentile": 0.99296875,
       "count": "1489",
       "duration": "0.000002419s"
      },
      {
       "percentile": 0.99375,
       "count": "1490",
       "duration": "0.000002420s"
      },
      {
       "percentile": 0.99453125,
       "count": "1491",
       "duration": "0.000002425s"
      },
      {
       "percentile": 0.9953125,
       "count": "1492",
       "duration": "0.000002430s"
      },
      {
       "percentile": 0.99609375,
       "count": "1494",
       "duration": "0.000002515s"
      },
      {
       "percentile": 0.996484375,
       "count": "1494",
       "duration": "0.000002515s"
      },
      {
       "percentile": 0.996875,
       "count": "1495",
       "duration": "0.000002604s"
      },
      {
       "percentile": 0.997265625,
       "count": "1495",
       "duration": "0.000002604s"
      },
      {
       "percentile": 0.99765625,
       "count": "1496",
       "duration": "0.000002672s"
      },
      {
       "percentile": 0.998046875,
       "count": "1497",
       "duration": "0.000002880s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1497",
       "duration": "0.000002880s"
      },
      {
       "percentile": 0.9984375,
       "count": "1497",
       "duration": "0.000002880s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1497",
       "duration": "0.000002880s"
      },
      {
       "percentile": 0.998828125,
       "count": "1498",
       "duration": "0.000012629s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1498",
       "duration": "0.000012629s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1498",
       "duration": "0.000012629s"
      },
      {
       "percentile": 0.99921875,
       "count": "1498",
       "duration": "0.000012629s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1498",
       "duration": "0.000012629s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1499",
       "duration": "0.000024929s"
      },
      {
       "percentile": 1,
       "count": "1499",
       "duration": "0.000024929s"
      }
     ],
     "mean": "0.000002090s",
     "pstdev": "0.000000658s"
    },
    {
     "count": "1499",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000056611s"
      },
      {
       "percentile": 0.1,
       "count": "150",
       "duration": "0.000057863s"
      },
      {
       "percentile": 0.2,
       "count": "302",
       "duration": "0.000058313s"
      },
      {
       "percentile": 0.3,
       "count": "450",
       "duration": "0.000058615s"
      },
      {
       "percentile": 0.4,
       "count": "601",
       "duration": "0.000058889s"
      },
      {
       "percentile": 0.5,
       "count": "750",
       "duration": "0.000059131s"
      },
      {
       "percentile": 0.55,
       "count": "825",
       "duration": "0.000059237s"
      },
      {
       "percentile": 0.6,
       "count": "900",
       "duration": "0.000059359s"
      },
      {
       "percentile": 0.65,
       "count": "976",
       "duration": "0.000059485s"
      },
      {
       "percentile": 0.7,
       "count": "1051",
       "duration": "0.000059619s"
      },
      {
       "percentile": 0.75,
       "count": "1126",
       "duration": "0.000059791s"
      },
      {
       "percentile": 0.775,
       "count": "1162",
       "duration": "0.000059907s"
      },
      {
       "percentile": 0.8,
       "count": "1200",
       "duration": "0.000060023s"
      },
      {
       "percentile": 0.825,
       "count": "1237",
       "duration": "0.000060147s"
      },
      {
       "percentile": 0.85,
       "count": "1275",
       "duration": "0.000060279s"
      },
      {
       "percentile": 0.875,
       "count": "1313",
       "duration": "0.000060465s"
      },
      {
       "percentile": 0.8875,
       "count": "1331",
       "duration": "0.000060579s"
      },
      {
       "percentile": 0.9,
       "count": "1350",
       "duration": "0.000060761s"
      },
      {
       "percentile": 0.9125,
       "count": "1368",
       "duration": "0.000060915s"
      },
      {
       "percentile": 0.925,
       "count": "1387",
       "duration": "0.000061041s"
      },
      {
       "percentile": 0.9375,
       "count": "1406",
       "duration": "0.000061467s"
      },
      {
       "percentile": 0.94375,
       "count": "1415",
       "duration": "0.000061651s"
      },
      {
       "percentile": 0.95,
       "count": "1425",
       "duration": "0.000061911s"
      },
      {
       "percentile": 0.95625,
       "count": "1434",
       "duration": "0.000062191s"
      },
      {
       "percentile": 0.9625,
       "count": "1443",
       "duration": "0.000062451s"
      },
      {
       "percentile": 0.96875,
       "count": "1453",
       "duration": "0.000063023s"
      },
      {
       "percentile": 0.971875,
       "count": "1457",
       "duration": "0.000063307s"
      },
      {
       "percentile": 0.975,
       "count": "1462",
       "duration": "0.000064445s"
      },
      {
       "percentile": 0.978125,
       "count": "1467",
       "duration": "0.000065783s"
      },
      {
       "percentile": 0.98125,
       "count": "1471",
       "duration": "0.000067047s"
      },
      {
       "percentile": 0.984375,
       "count": "1476",
       "duration": "0.000072799s"
      },
      {
       "percentile": 0.9859375,
       "count": "1478",
       "duration": "0.000076935s"
      },
      {
       "percentile": 0.9875,
       "count": "1481",
       "duration": "0.000088243s"
      },
      {
       "percentile": 0.9890625,
       "count": "1483",
       "duration": "0.000092287s"
      },
      {
       "percentile": 0.990625,
       "count": "1485",
       "duration": "0.000103255s"
      },
      {
       "percentile": 0.9921875,
       "count": "1488",
       "duration": "0.000118791s"
      },
      {
       "percentile": 0.99296875,
       "count": "1489",
       "duration": "0.000123023s"
      },
      {
       "percentile": 0.99375,
       "count": "1490",
       "duration": "0.000128067s"
      },
      {
       "percentile": 0.99453125,
       "count": "1491",
       "duration": "0.000128863s"
      },
      {
       "percentile": 0.9953125,
       "count": "1492",
       "duration": "0.000134175s"
      },
      {
       "percentile": 0.99609375,
       "count": "1494",
       "duration": "0.000141935s"
      },
      {
       "percentile": 0.996484375,
       "count": "1494",
       "duration": "0.000141935s"
      },
      {
       "percentile": 0.996875,
       "count": "1495",
       "duration": "0.000181991s"
      },
      {
       "percentile": 0.997265625,
       "count": "1495",
       "duration": "0.000181991s"
      },
      {
       "percentile": 0.99765625,
       "count": "1496",
       "duration": "0.000217751s"
      },
      {
       "percentile": 0.998046875,
       "count": "1497",
       "duration": "0.000269247s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1497",
       "duration": "0.000269247s"
      },
      {
       "percentile": 0.9984375,
       "count": "1497",
       "duration": "0.000269247s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1497",
       "duration": "0.000269247s"
      },
      {
       "percentile": 0.998828125,
       "count": "1498",
       "duration": "0.000461263s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1498",
       "duration": "0.000461263s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1498",
       "duration": "0.000461263s"
      },
      {
       "percentile": 0.99921875,
       "count": "1498",
       "duration": "0.000461263s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1498",
       "duration": "0.000461263s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1499",
       "duration": "0.000511711s"
      },
      {
       "percentile": 1,
       "count": "1499",
       "duration": "0.000511711s"
      }
     ],
     "mean": "0.000060726s",
     "pstdev": "0.000018245s"
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
     "count": "1499",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000060781s"
      },
      {
       "percentile": 0.1,
       "count": "150",
       "duration": "0.000062333s"
      },
      {
       "percentile": 0.2,
       "count": "300",
       "duration": "0.000062767s"
      },
      {
       "percentile": 0.3,
       "count": "450",
       "duration": "0.000063067s"
      },
      {
       "percentile": 0.4,
       "count": "601",
       "duration": "0.000063351s"
      },
      {
       "percentile": 0.5,
       "count": "750",
       "duration": "0.000063597s"
      },
      {
       "percentile": 0.55,
       "count": "825",
       "duration": "0.000063737s"
      },
      {
       "percentile": 0.6,
       "count": "900",
       "duration": "0.000063869s"
      },
      {
       "percentile": 0.65,
       "count": "976",
       "duration": "0.000064011s"
      },
      {
       "percentile": 0.7,
       "count": "1050",
       "duration": "0.000064139s"
      },
      {
       "percentile": 0.75,
       "count": "1125",
       "duration": "0.000064347s"
      },
      {
       "percentile": 0.775,
       "count": "1162",
       "duration": "0.000064469s"
      },
      {
       "percentile": 0.8,
       "count": "1200",
       "duration": "0.000064605s"
      },
      {
       "percentile": 0.825,
       "count": "1237",
       "duration": "0.000064707s"
      },
      {
       "percentile": 0.85,
       "count": "1275",
       "duration": "0.000064901s"
      },
      {
       "percentile": 0.875,
       "count": "1312",
       "duration": "0.000065119s"
      },
      {
       "percentile": 0.8875,
       "count": "1331",
       "duration": "0.000065249s"
      },
      {
       "percentile": 0.9,
       "count": "1350",
       "duration": "0.000065459s"
      },
      {
       "percentile": 0.9125,
       "count": "1368",
       "duration": "0.000065659s"
      },
      {
       "percentile": 0.925,
       "count": "1387",
       "duration": "0.000065947s"
      },
      {
       "percentile": 0.9375,
       "count": "1406",
       "duration": "0.000066279s"
      },
      {
       "percentile": 0.94375,
       "count": "1415",
       "duration": "0.000066483s"
      },
      {
       "percentile": 0.95,
       "count": "1425",
       "duration": "0.000066667s"
      },
      {
       "percentile": 0.95625,
       "count": "1434",
       "duration": "0.000067163s"
      },
      {
       "percentile": 0.9625,
       "count": "1443",
       "duration": "0.000067507s"
      },
      {
       "percentile": 0.96875,
       "count": "1453",
       "duration": "0.000067843s"
      },
      {
       "percentile": 0.971875,
       "count": "1457",
       "duration": "0.000068391s"
      },
      {
       "percentile": 0.975,
       "count": "1462",
       "duration": "0.000069355s"
      },
      {
       "percentile": 0.978125,
       "count": "1467",
       "duration": "0.000071087s"
      },
      {
       "percentile": 0.98125,
       "count": "1471",
       "duration": "0.000071663s"
      },
      {
       "percentile": 0.984375,
       "count": "1476",
       "duration": "0.000081727s"
      },
      {
       "percentile": 0.9859375,
       "count": "1478",
       "duration": "0.000086855s"
      },
      {
       "percentile": 0.9875,
       "count": "1481",
       "duration": "0.000092871s"
      },
      {
       "percentile": 0.9890625,
       "count": "1483",
       "duration": "0.000096763s"
      },
      {
       "percentile": 0.990625,
       "count": "1485",
       "duration": "0.000107903s"
      },
      {
       "percentile": 0.9921875,
       "count": "1488",
       "duration": "0.000123555s"
      },
      {
       "percentile": 0.99296875,
       "count": "1489",
       "duration": "0.000127603s"
      },
      {
       "percentile": 0.99375,
       "count": "1490",
       "duration": "0.000133327s"
      },
      {
       "percentile": 0.99453125,
       "count": "1491",
       "duration": "0.000138759s"
      },
      {
       "percentile": 0.9953125,
       "count": "1492",
       "duration": "0.000138911s"
      },
      {
       "percentile": 0.99609375,
       "count": "1494",
       "duration": "0.000153775s"
      },
      {
       "percentile": 0.996484375,
       "count": "1494",
       "duration": "0.000153775s"
      },
      {
       "percentile": 0.996875,
       "count": "1495",
       "duration": "0.000186479s"
      },
      {
       "percentile": 0.997265625,
       "count": "1495",
       "duration": "0.000186479s"
      },
      {
       "percentile": 0.99765625,
       "count": "1496",
       "duration": "0.000222295s"
      },
      {
       "percentile": 0.998046875,
       "count": "1497",
       "duration": "0.000273647s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1497",
       "duration": "0.000273647s"
      },
      {
       "percentile": 0.9984375,
       "count": "1497",
       "duration": "0.000273647s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1497",
       "duration": "0.000273647s"
      },
      {
       "percentile": 0.998828125,
       "count": "1498",
       "duration": "0.000466111s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1498",
       "duration": "0.000466111s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1498",
       "duration": "0.000466111s"
      },
      {
       "percentile": 0.99921875,
       "count": "1498",
       "duration": "0.000466111s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1498",
       "duration": "0.000466111s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1499",
       "duration": "0.000516191s"
      },
      {
       "percentile": 1,
       "count": "1499",
       "duration": "0.000516191s"
      }
     ],
     "mean": "0.000065287s",
     "pstdev": "0.000018334s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "1509"
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
     "value": "245967"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "90540"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "1509"
    }
   ],
   "execution_duration": "14.999999998s"
  },
  {
   "name": "worker_1",
   "statistics": [
    {
     "count": "1499",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000001788s"
      },
      {
       "percentile": 0.1,
       "count": "155",
       "duration": "0.000001888s"
      },
      {
       "percentile": 0.2,
       "count": "306",
       "duration": "0.000001921s"
      },
      {
       "percentile": 0.3,
       "count": "451",
       "duration": "0.000001944s"
      },
      {
       "percentile": 0.4,
       "count": "604",
       "duration": "0.000001970s"
      },
      {
       "percentile": 0.5,
       "count": "754",
       "duration": "0.000001992s"
      },
      {
       "percentile": 0.55,
       "count": "826",
       "duration": "0.000002001s"
      },
      {
       "percentile": 0.6,
       "count": "906",
       "duration": "0.000002014s"
      },
      {
       "percentile": 0.65,
       "count": "975",
       "duration": "0.000002025s"
      },
      {
       "percentile": 0.7,
       "count": "1053",
       "duration": "0.000002040s"
      },
      {
       "percentile": 0.75,
       "count": "1132",
       "duration": "0.000002057s"
      },
      {
       "percentile": 0.775,
       "count": "1164",
       "duration": "0.000002065s"
      },
      {
       "percentile": 0.8,
       "count": "1201",
       "duration": "0.000002075s"
      },
      {
       "percentile": 0.825,
       "count": "1239",
       "duration": "0.000002083s"
      },
      {
       "percentile": 0.85,
       "count": "1278",
       "duration": "0.000002096s"
      },
      {
       "percentile": 0.875,
       "count": "1312",
       "duration": "0.000002107s"
      },
      {
       "percentile": 0.8875,
       "count": "1331",
       "duration": "0.000002116s"
      },
      {
       "percentile": 0.9,
       "count": "1352",
       "duration": "0.000002125s"
      },
      {
       "percentile": 0.9125,
       "count": "1368",
       "duration": "0.000002134s"
      },
      {
       "percentile": 0.925,
       "count": "1387",
       "duration": "0.000002148s"
      },
      {
       "percentile": 0.9375,
       "count": "1406",
       "duration": "0.000002168s"
      },
      {
       "percentile": 0.94375,
       "count": "1415",
       "duration": "0.000002176s"
      },
      {
       "percentile": 0.95,
       "count": "1425",
       "duration": "0.000002188s"
      },
      {
       "percentile": 0.95625,
       "count": "1434",
       "duration": "0.000002195s"
      },
      {
       "percentile": 0.9625,
       "count": "1443",
       "duration": "0.000002202s"
      },
      {
       "percentile": 0.96875,
       "count": "1453",
       "duration": "0.000002215s"
      },
      {
       "percentile": 0.971875,
       "count": "1457",
       "duration": "0.000002219s"
      },
      {
       "percentile": 0.975,
       "count": "1462",
       "duration": "0.000002233s"
      },
      {
       "percentile": 0.978125,
       "count": "1467",
       "duration": "0.000002241s"
      },
      {
       "percentile": 0.98125,
       "count": "1471",
       "duration": "0.000002246s"
      },
      {
       "percentile": 0.984375,
       "count": "1477",
       "duration": "0.000002261s"
      },
      {
       "percentile": 0.9859375,
       "count": "1478",
       "duration": "0.000002266s"
      },
      {
       "percentile": 0.9875,
       "count": "1481",
       "duration": "0.000002274s"
      },
      {
       "percentile": 0.9890625,
       "count": "1483",
       "duration": "0.000002275s"
      },
      {
       "percentile": 0.990625,
       "count": "1485",
       "duration": "0.000002286s"
      },
      {
       "percentile": 0.9921875,
       "count": "1488",
       "duration": "0.000002304s"
      },
      {
       "percentile": 0.99296875,
       "count": "1489",
       "duration": "0.000002316s"
      },
      {
       "percentile": 0.99375,
       "count": "1490",
       "duration": "0.000002327s"
      },
      {
       "percentile": 0.99453125,
       "count": "1491",
       "duration": "0.000002344s"
      },
      {
       "percentile": 0.9953125,
       "count": "1492",
       "duration": "0.000002359s"
      },
      {
       "percentile": 0.99609375,
       "count": "1494",
       "duration": "0.000002420s"
      },
      {
       "percentile": 0.996484375,
       "count": "1494",
       "duration": "0.000002420s"
      },
      {
       "percentile": 0.996875,
       "count": "1495",
       "duration": "0.000002489s"
      },
      {
       "percentile": 0.997265625,
       "count": "1495",
       "duration": "0.000002489s"
      },
      {
       "percentile": 0.99765625,
       "count": "1496",
       "duration": "0.000002498s"
      },
      {
       "percentile": 0.998046875,
       "count": "1497",
       "duration": "0.000002547s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1497",
       "duration": "0.000002547s"
      },
      {
       "percentile": 0.9984375,
       "count": "1497",
       "duration": "0.000002547s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1497",
       "duration": "0.000002547s"
      },
      {
       "percentile": 0.998828125,
       "count": "1498",
       "duration": "0.000002571s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1498",
       "duration": "0.000002571s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1498",
       "duration": "0.000002571s"
      },
      {
       "percentile": 0.99921875,
       "count": "1498",
       "duration": "0.000002571s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1498",
       "duration": "0.000002571s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1499",
       "duration": "0.000007184s"
      },
      {
       "percentile": 1,
       "count": "1499",
       "duration": "0.000007184s"
      }
     ],
     "mean": "0.000002005s",
     "pstdev": "0.000000166s"
    },
    {
     "count": "1499",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000059397s"
      },
      {
       "percentile": 0.1,
       "count": "150",
       "duration": "0.000074559s"
      },
      {
       "percentile": 0.2,
       "count": "302",
       "duration": "0.000074875s"
      },
      {
       "percentile": 0.3,
       "count": "450",
       "duration": "0.000075139s"
      },
      {
       "percentile": 0.4,
       "count": "600",
       "duration": "0.000075411s"
      },
      {
       "percentile": 0.5,
       "count": "752",
       "duration": "0.000075703s"
      },
      {
       "percentile": 0.55,
       "count": "827",
       "duration": "0.000075827s"
      },
      {
       "percentile": 0.6,
       "count": "900",
       "duration": "0.000075951s"
      },
      {
       "percentile": 0.65,
       "count": "977",
       "duration": "0.000076103s"
      },
      {
       "percentile": 0.7,
       "count": "1050",
       "duration": "0.000076251s"
      },
      {
       "percentile": 0.75,
       "count": "1126",
       "duration": "0.000076411s"
      },
      {
       "percentile": 0.775,
       "count": "1162",
       "duration": "0.000076499s"
      },
      {
       "percentile": 0.8,
       "count": "1200",
       "duration": "0.000076615s"
      },
      {
       "percentile": 0.825,
       "count": "1237",
       "duration": "0.000076763s"
      },
      {
       "percentile": 0.85,
       "count": "1275",
       "duration": "0.000077075s"
      },
      {
       "percentile": 0.875,
       "count": "1314",
       "duration": "0.000077347s"
      },
      {
       "percentile": 0.8875,
       "count": "1331",
       "duration": "0.000077535s"
      },
      {
       "percentile": 0.9,
       "count": "1350",
       "duration": "0.000077911s"
      },
      {
       "percentile": 0.9125,
       "count": "1368",
       "duration": "0.000078247s"
      },
      {
       "percentile": 0.925,
       "count": "1387",
       "duration": "0.000079191s"
      },
      {
       "percentile": 0.9375,
       "count": "1406",
       "duration": "0.000081091s"
      },
      {
       "percentile": 0.94375,
       "count": "1415",
       "duration": "0.000082767s"
      },
      {
       "percentile": 0.95,
       "count": "1425",
       "duration": "0.000085647s"
      },
      {
       "percentile": 0.95625,
       "count": "1434",
       "duration": "0.000087179s"
      },
      {
       "percentile": 0.9625,
       "count": "1443",
       "duration": "0.000088175s"
      },
      {
       "percentile": 0.96875,
       "count": "1453",
       "duration": "0.000088803s"
      },
      {
       "percentile": 0.971875,
       "count": "1457",
       "duration": "0.000089147s"
      },
      {
       "percentile": 0.975,
       "count": "1463",
       "duration": "0.000090075s"
      },
      {
       "percentile": 0.978125,
       "count": "1467",
       "duration": "0.000090739s"
      },
      {
       "percentile": 0.98125,
       "count": "1471",
       "duration": "0.000093267s"
      },
      {
       "percentile": 0.984375,
       "count": "1476",
       "duration": "0.000097483s"
      },
      {
       "percentile": 0.9859375,
       "count": "1478",
       "duration": "0.000097883s"
      },
      {
       "percentile": 0.9875,
       "count": "1481",
       "duration": "0.000098427s"
      },
      {
       "percentile": 0.9890625,
       "count": "1483",
       "duration": "0.000105023s"
      },
      {
       "percentile": 0.990625,
       "count": "1485",
       "duration": "0.000109387s"
      },
      {
       "percentile": 0.9921875,
       "count": "1488",
       "duration": "0.000118559s"
      },
      {
       "percentile": 0.99296875,
       "count": "1489",
       "duration": "0.000118687s"
      },
      {
       "percentile": 0.99375,
       "count": "1490",
       "duration": "0.000118991s"
      },
      {
       "percentile": 0.99453125,
       "count": "1491",
       "duration": "0.000119751s"
      },
      {
       "percentile": 0.9953125,
       "count": "1492",
       "duration": "0.000126507s"
      },
      {
       "percentile": 0.99609375,
       "count": "1494",
       "duration": "0.000142335s"
      },
      {
       "percentile": 0.996484375,
       "count": "1494",
       "duration": "0.000142335s"
      },
      {
       "percentile": 0.996875,
       "count": "1495",
       "duration": "0.000143927s"
      },
      {
       "percentile": 0.997265625,
       "count": "1495",
       "duration": "0.000143927s"
      },
      {
       "percentile": 0.99765625,
       "count": "1496",
       "duration": "0.000166823s"
      },
      {
       "percentile": 0.998046875,
       "count": "1497",
       "duration": "0.000186911s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1497",
       "duration": "0.000186911s"
      },
      {
       "percentile": 0.9984375,
       "count": "1497",
       "duration": "0.000186911s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1497",
       "duration": "0.000186911s"
      },
      {
       "percentile": 0.998828125,
       "count": "1498",
       "duration": "0.000299471s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1498",
       "duration": "0.000299471s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1498",
       "duration": "0.000299471s"
      },
      {
       "percentile": 0.99921875,
       "count": "1498",
       "duration": "0.000299471s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1498",
       "duration": "0.000299471s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1499",
       "duration": "0.000380783s"
      },
      {
       "percentile": 1,
       "count": "1499",
       "duration": "0.000380783s"
      }
     ],
     "mean": "0.000077219s",
     "pstdev": "0.000011721s"
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
     "count": "1499",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000063779s"
      },
      {
       "percentile": 0.1,
       "count": "151",
       "duration": "0.000078911s"
      },
      {
       "percentile": 0.2,
       "count": "301",
       "duration": "0.000079255s"
      },
      {
       "percentile": 0.3,
       "count": "451",
       "duration": "0.000079527s"
      },
      {
       "percentile": 0.4,
       "count": "600",
       "duration": "0.000079783s"
      },
      {
       "percentile": 0.5,
       "count": "753",
       "duration": "0.000080095s"
      },
      {
       "percentile": 0.55,
       "count": "825",
       "duration": "0.000080223s"
      },
      {
       "percentile": 0.6,
       "count": "900",
       "duration": "0.000080359s"
      },
      {
       "percentile": 0.65,
       "count": "975",
       "duration": "0.000080507s"
      },
      {
       "percentile": 0.7,
       "count": "1051",
       "duration": "0.000080675s"
      },
      {
       "percentile": 0.75,
       "count": "1126",
       "duration": "0.000080847s"
      },
      {
       "percentile": 0.775,
       "count": "1163",
       "duration": "0.000080931s"
      },
      {
       "percentile": 0.8,
       "count": "1200",
       "duration": "0.000081095s"
      },
      {
       "percentile": 0.825,
       "count": "1237",
       "duration": "0.000081371s"
      },
      {
       "percentile": 0.85,
       "count": "1275",
       "duration": "0.000081607s"
      },
      {
       "percentile": 0.875,
       "count": "1312",
       "duration": "0.000081999s"
      },
      {
       "percentile": 0.8875,
       "count": "1331",
       "duration": "0.000082319s"
      },
      {
       "percentile": 0.9,
       "count": "1350",
       "duration": "0.000082667s"
      },
      {
       "percentile": 0.9125,
       "count": "1368",
       "duration": "0.000083243s"
      },
      {
       "percentile": 0.925,
       "count": "1387",
       "duration": "0.000083875s"
      },
      {
       "percentile": 0.9375,
       "count": "1406",
       "duration": "0.000085571s"
      },
      {
       "percentile": 0.94375,
       "count": "1415",
       "duration": "0.000087359s"
      },
      {
       "percentile": 0.95,
       "count": "1425",
       "duration": "0.000090139s"
      },
      {
       "percentile": 0.95625,
       "count": "1434",
       "duration": "0.000091695s"
      },
      {
       "percentile": 0.9625,
       "count": "1443",
       "duration": "0.000092563s"
      },
      {
       "percentile": 0.96875,
       "count": "1453",
       "duration": "0.000093507s"
      },
      {
       "percentile": 0.971875,
       "count": "1457",
       "duration": "0.000094203s"
      },
      {
       "percentile": 0.975,
       "count": "1462",
       "duration": "0.000094683s"
      },
      {
       "percentile": 0.978125,
       "count": "1467",
       "duration": "0.000095343s"
      },
      {
       "percentile": 0.98125,
       "count": "1471",
       "duration": "0.000098975s"
      },
      {
       "percentile": 0.984375,
       "count": "1476",
       "duration": "0.000102087s"
      },
      {
       "percentile": 0.9859375,
       "count": "1478",
       "duration": "0.000102287s"
      },
      {
       "percentile": 0.9875,
       "count": "1481",
       "duration": "0.000102803s"
      },
      {
       "percentile": 0.9890625,
       "count": "1483",
       "duration": "0.000109663s"
      },
      {
       "percentile": 0.990625,
       "count": "1485",
       "duration": "0.000114443s"
      },
      {
       "percentile": 0.9921875,
       "count": "1488",
       "duration": "0.000122955s"
      },
      {
       "percentile": 0.99296875,
       "count": "1489",
       "duration": "0.000123435s"
      },
      {
       "percentile": 0.99375,
       "count": "1490",
       "duration": "0.000124403s"
      },
      {
       "percentile": 0.99453125,
       "count": "1491",
       "duration": "0.000130871s"
      },
      {
       "percentile": 0.9953125,
       "count": "1492",
       "duration": "0.000132727s"
      },
      {
       "percentile": 0.99609375,
       "count": "1494",
       "duration": "0.000146911s"
      },
      {
       "percentile": 0.996484375,
       "count": "1494",
       "duration": "0.000146911s"
      },
      {
       "percentile": 0.996875,
       "count": "1495",
       "duration": "0.000148151s"
      },
      {
       "percentile": 0.997265625,
       "count": "1495",
       "duration": "0.000148151s"
      },
      {
       "percentile": 0.99765625,
       "count": "1496",
       "duration": "0.000171575s"
      },
      {
       "percentile": 0.998046875,
       "count": "1497",
       "duration": "0.000191543s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1497",
       "duration": "0.000191543s"
      },
      {
       "percentile": 0.9984375,
       "count": "1497",
       "duration": "0.000191543s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1497",
       "duration": "0.000191543s"
      },
      {
       "percentile": 0.998828125,
       "count": "1498",
       "duration": "0.000304031s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1498",
       "duration": "0.000304031s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1498",
       "duration": "0.000304031s"
      },
      {
       "percentile": 0.99921875,
       "count": "1498",
       "duration": "0.000304031s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1498",
       "duration": "0.000304031s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1499",
       "duration": "0.000385551s"
      },
      {
       "percentile": 1,
       "count": "1499",
       "duration": "0.000385551s"
      }
     ],
     "mean": "0.000081662s",
     "pstdev": "0.000011781s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "1509"
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
     "value": "245967"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "90540"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "1509"
    }
   ],
   "execution_duration": "15.000000945s"
  },
  {
   "name": "worker_2",
   "statistics": [
    {
     "count": "1499",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000001928s"
      },
      {
       "percentile": 0.1,
       "count": "155",
       "duration": "0.000002083s"
      },
      {
       "percentile": 0.2,
       "count": "300",
       "duration": "0.000002126s"
      },
      {
       "percentile": 0.3,
       "count": "451",
       "duration": "0.000002152s"
      },
      {
       "percentile": 0.4,
       "count": "607",
       "duration": "0.000002179s"
      },
      {
       "percentile": 0.5,
       "count": "755",
       "duration": "0.000002203s"
      },
      {
       "percentile": 0.55,
       "count": "825",
       "duration": "0.000002215s"
      },
      {
       "percentile": 0.6,
       "count": "902",
       "duration": "0.000002226s"
      },
      {
       "percentile": 0.65,
       "count": "977",
       "duration": "0.000002238s"
      },
      {
       "percentile": 0.7,
       "count": "1058",
       "duration": "0.000002254s"
      },
      {
       "percentile": 0.75,
       "count": "1134",
       "duration": "0.000002271s"
      },
      {
       "percentile": 0.775,
       "count": "1162",
       "duration": "0.000002277s"
      },
      {
       "percentile": 0.8,
       "count": "1202",
       "duration": "0.000002285s"
      },
      {
       "percentile": 0.825,
       "count": "1238",
       "duration": "0.000002299s"
      },
      {
       "percentile": 0.85,
       "count": "1276",
       "duration": "0.000002309s"
      },
      {
       "percentile": 0.875,
       "count": "1314",
       "duration": "0.000002320s"
      },
      {
       "percentile": 0.8875,
       "count": "1331",
       "duration": "0.000002327s"
      },
      {
       "percentile": 0.9,
       "count": "1351",
       "duration": "0.000002338s"
      },
      {
       "percentile": 0.9125,
       "count": "1370",
       "duration": "0.000002351s"
      },
      {
       "percentile": 0.925,
       "count": "1388",
       "duration": "0.000002363s"
      },
      {
       "percentile": 0.9375,
       "count": "1406",
       "duration": "0.000002378s"
      },
      {
       "percentile": 0.94375,
       "count": "1415",
       "duration": "0.000002385s"
      },
      {
       "percentile": 0.95,
       "count": "1425",
       "duration": "0.000002392s"
      },
      {
       "percentile": 0.95625,
       "count": "1436",
       "duration": "0.000002398s"
      },
      {
       "percentile": 0.9625,
       "count": "1443",
       "duration": "0.000002404s"
      },
      {
       "percentile": 0.96875,
       "count": "1453",
       "duration": "0.000002418s"
      },
      {
       "percentile": 0.971875,
       "count": "1460",
       "duration": "0.000002423s"
      },
      {
       "percentile": 0.975,
       "count": "1464",
       "duration": "0.000002428s"
      },
      {
       "percentile": 0.978125,
       "count": "1467",
       "duration": "0.000002432s"
      },
      {
       "percentile": 0.98125,
       "count": "1471",
       "duration": "0.000002440s"
      },
      {
       "percentile": 0.984375,
       "count": "1477",
       "duration": "0.000002449s"
      },
      {
       "percentile": 0.9859375,
       "count": "1478",
       "duration": "0.000002455s"
      },
      {
       "percentile": 0.9875,
       "count": "1481",
       "duration": "0.000002465s"
      },
      {
       "percentile": 0.9890625,
       "count": "1483",
       "duration": "0.000002468s"
      },
      {
       "percentile": 0.990625,
       "count": "1485",
       "duration": "0.000002475s"
      },
      {
       "percentile": 0.9921875,
       "count": "1488",
       "duration": "0.000002505s"
      },
      {
       "percentile": 0.99296875,
       "count": "1489",
       "duration": "0.000002519s"
      },
      {
       "percentile": 0.99375,
       "count": "1490",
       "duration": "0.000002553s"
      },
      {
       "percentile": 0.99453125,
       "count": "1491",
       "duration": "0.000002554s"
      },
      {
       "percentile": 0.9953125,
       "count": "1492",
       "duration": "0.000002571s"
      },
      {
       "percentile": 0.99609375,
       "count": "1494",
       "duration": "0.000002618s"
      },
      {
       "percentile": 0.996484375,
       "count": "1494",
       "duration": "0.000002618s"
      },
      {
       "percentile": 0.996875,
       "count": "1495",
       "duration": "0.000002647s"
      },
      {
       "percentile": 0.997265625,
       "count": "1495",
       "duration": "0.000002647s"
      },
      {
       "percentile": 0.99765625,
       "count": "1496",
       "duration": "0.000002660s"
      },
      {
       "percentile": 0.998046875,
       "count": "1497",
       "duration": "0.000002670s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1497",
       "duration": "0.000002670s"
      },
      {
       "percentile": 0.9984375,
       "count": "1497",
       "duration": "0.000002670s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1497",
       "duration": "0.000002670s"
      },
      {
       "percentile": 0.998828125,
       "count": "1498",
       "duration": "0.000003275s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1498",
       "duration": "0.000003275s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1498",
       "duration": "0.000003275s"
      },
      {
       "percentile": 0.99921875,
       "count": "1498",
       "duration": "0.000003275s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1498",
       "duration": "0.000003275s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1499",
       "duration": "0.000007878s"
      },
      {
       "percentile": 1,
       "count": "1499",
       "duration": "0.000007878s"
      }
     ],
     "mean": "0.000002213s",
     "pstdev": "0.000000180s"
    },
    {
     "count": "1499",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000074095s"
      },
      {
       "percentile": 0.1,
       "count": "151",
       "duration": "0.000085263s"
      },
      {
       "percentile": 0.2,
       "count": "301",
       "duration": "0.000085743s"
      },
      {
       "percentile": 0.3,
       "count": "450",
       "duration": "0.000086063s"
      },
      {
       "percentile": 0.4,
       "count": "601",
       "duration": "0.000086363s"
      },
      {
       "percentile": 0.5,
       "count": "750",
       "duration": "0.000086643s"
      },
      {
       "percentile": 0.55,
       "count": "828",
       "duration": "0.000086799s"
      },
      {
       "percentile": 0.6,
       "count": "900",
       "duration": "0.000086951s"
      },
      {
       "percentile": 0.65,
       "count": "975",
       "duration": "0.000087099s"
      },
      {
       "percentile": 0.7,
       "count": "1052",
       "duration": "0.000087295s"
      },
      {
       "percentile": 0.75,
       "count": "1126",
       "duration": "0.000087515s"
      },
      {
       "percentile": 0.775,
       "count": "1163",
       "duration": "0.000087615s"
      },
      {
       "percentile": 0.8,
       "count": "1200",
       "duration": "0.000087723s"
      },
      {
       "percentile": 0.825,
       "count": "1237",
       "duration": "0.000087923s"
      },
      {
       "percentile": 0.85,
       "count": "1276",
       "duration": "0.000088171s"
      },
      {
       "percentile": 0.875,
       "count": "1312",
       "duration": "0.000088555s"
      },
      {
       "percentile": 0.8875,
       "count": "1331",
       "duration": "0.000088751s"
      },
      {
       "percentile": 0.9,
       "count": "1350",
       "duration": "0.000088991s"
      },
      {
       "percentile": 0.9125,
       "count": "1368",
       "duration": "0.000089223s"
      },
      {
       "percentile": 0.925,
       "count": "1387",
       "duration": "0.000089619s"
      },
      {
       "percentile": 0.9375,
       "count": "1406",
       "duration": "0.000090359s"
      },
      {
       "percentile": 0.94375,
       "count": "1415",
       "duration": "0.000090755s"
      },
      {
       "percentile": 0.95,
       "count": "1425",
       "duration": "0.000091415s"
      },
      {
       "percentile": 0.95625,
       "count": "1434",
       "duration": "0.000092451s"
      },
      {
       "percentile": 0.9625,
       "count": "1443",
       "duration": "0.000093859s"
      },
      {
       "percentile": 0.96875,
       "count": "1453",
       "duration": "0.000096307s"
      },
      {
       "percentile": 0.971875,
       "count": "1457",
       "duration": "0.000098431s"
      },
      {
       "percentile": 0.975,
       "count": "1462",
       "duration": "0.000100799s"
      },
      {
       "percentile": 0.978125,
       "count": "1467",
       "duration": "0.000102655s"
      },
      {
       "percentile": 0.98125,
       "count": "1471",
       "duration": "0.000104179s"
      },
      {
       "percentile": 0.984375,
       "count": "1476",
       "duration": "0.000106539s"
      },
      {
       "percentile": 0.9859375,
       "count": "1478",
       "duration": "0.000108879s"
      },
      {
       "percentile": 0.9875,
       "count": "1481",
       "duration": "0.000110039s"
      },
      {
       "percentile": 0.9890625,
       "count": "1483",
       "duration": "0.000110319s"
      },
      {
       "percentile": 0.990625,
       "count": "1485",
       "duration": "0.000114735s"
      },
      {
       "percentile": 0.9921875,
       "count": "1488",
       "duration": "0.000128959s"
      },
      {
       "percentile": 0.99296875,
       "count": "1489",
       "duration": "0.000130295s"
      },
      {
       "percentile": 0.99375,
       "count": "1490",
       "duration": "0.000131999s"
      },
      {
       "percentile": 0.99453125,
       "count": "1491",
       "duration": "0.000132959s"
      },
      {
       "percentile": 0.9953125,
       "count": "1492",
       "duration": "0.000137231s"
      },
      {
       "percentile": 0.99609375,
       "count": "1494",
       "duration": "0.000153159s"
      },
      {
       "percentile": 0.996484375,
       "count": "1494",
       "duration": "0.000153159s"
      },
      {
       "percentile": 0.996875,
       "count": "1495",
       "duration": "0.000156631s"
      },
      {
       "percentile": 0.997265625,
       "count": "1495",
       "duration": "0.000156631s"
      },
      {
       "percentile": 0.99765625,
       "count": "1496",
       "duration": "0.000177351s"
      },
      {
       "percentile": 0.998046875,
       "count": "1497",
       "duration": "0.000197975s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1497",
       "duration": "0.000197975s"
      },
      {
       "percentile": 0.9984375,
       "count": "1497",
       "duration": "0.000197975s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1497",
       "duration": "0.000197975s"
      },
      {
       "percentile": 0.998828125,
       "count": "1498",
       "duration": "0.000311327s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1498",
       "duration": "0.000311327s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1498",
       "duration": "0.000311327s"
      },
      {
       "percentile": 0.99921875,
       "count": "1498",
       "duration": "0.000311327s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1498",
       "duration": "0.000311327s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1499",
       "duration": "0.000393135s"
      },
      {
       "percentile": 1,
       "count": "1499",
       "duration": "0.000393135s"
      }
     ],
     "mean": "0.000087849s",
     "pstdev": "0.000011711s"
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
     "count": "1499",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000078591s"
      },
      {
       "percentile": 0.1,
       "count": "150",
       "duration": "0.000089935s"
      },
      {
       "percentile": 0.2,
       "count": "302",
       "duration": "0.000090467s"
      },
      {
       "percentile": 0.3,
       "count": "450",
       "duration": "0.000090771s"
      },
      {
       "percentile": 0.4,
       "count": "600",
       "duration": "0.000091091s"
      },
      {
       "percentile": 0.5,
       "count": "750",
       "duration": "0.000091399s"
      },
      {
       "percentile": 0.55,
       "count": "825",
       "duration": "0.000091531s"
      },
      {
       "percentile": 0.6,
       "count": "900",
       "duration": "0.000091711s"
      },
      {
       "percentile": 0.65,
       "count": "977",
       "duration": "0.000091875s"
      },
      {
       "percentile": 0.7,
       "count": "1052",
       "duration": "0.000092043s"
      },
      {
       "percentile": 0.75,
       "count": "1125",
       "duration": "0.000092255s"
      },
      {
       "percentile": 0.775,
       "count": "1162",
       "duration": "0.000092399s"
      },
      {
       "percentile": 0.8,
       "count": "1200",
       "duration": "0.000092599s"
      },
      {
       "percentile": 0.825,
       "count": "1237",
       "duration": "0.000092795s"
      },
      {
       "percentile": 0.85,
       "count": "1275",
       "duration": "0.000093035s"
      },
      {
       "percentile": 0.875,
       "count": "1312",
       "duration": "0.000093483s"
      },
      {
       "percentile": 0.8875,
       "count": "1331",
       "duration": "0.000093671s"
      },
      {
       "percentile": 0.9,
       "count": "1350",
       "duration": "0.000093927s"
      },
      {
       "percentile": 0.9125,
       "count": "1368",
       "duration": "0.000094327s"
      },
      {
       "percentile": 0.925,
       "count": "1387",
       "duration": "0.000094619s"
      },
      {
       "percentile": 0.9375,
       "count": "1406",
       "duration": "0.000095331s"
      },
      {
       "percentile": 0.94375,
       "count": "1415",
       "duration": "0.000095827s"
      },
      {
       "percentile": 0.95,
       "count": "1425",
       "duration": "0.000096563s"
      },
      {
       "percentile": 0.95625,
       "count": "1434",
       "duration": "0.000097255s"
      },
      {
       "percentile": 0.9625,
       "count": "1443",
       "duration": "0.000099167s"
      },
      {
       "percentile": 0.96875,
       "count": "1453",
       "duration": "0.000101811s"
      },
      {
       "percentile": 0.971875,
       "count": "1457",
       "duration": "0.000103619s"
      },
      {
       "percentile": 0.975,
       "count": "1462",
       "duration": "0.000105887s"
      },
      {
       "percentile": 0.978125,
       "count": "1467",
       "duration": "0.000107511s"
      },
      {
       "percentile": 0.98125,
       "count": "1471",
       "duration": "0.000108863s"
      },
      {
       "percentile": 0.984375,
       "count": "1476",
       "duration": "0.000111891s"
      },
      {
       "percentile": 0.9859375,
       "count": "1478",
       "duration": "0.000113607s"
      },
      {
       "percentile": 0.9875,
       "count": "1481",
       "duration": "0.000114883s"
      },
      {
       "percentile": 0.9890625,
       "count": "1483",
       "duration": "0.000115199s"
      },
      {
       "percentile": 0.990625,
       "count": "1485",
       "duration": "0.000119739s"
      },
      {
       "percentile": 0.9921875,
       "count": "1488",
       "duration": "0.000133759s"
      },
      {
       "percentile": 0.99296875,
       "count": "1489",
       "duration": "0.000135367s"
      },
      {
       "percentile": 0.99375,
       "count": "1490",
       "duration": "0.000136695s"
      },
      {
       "percentile": 0.99453125,
       "count": "1491",
       "duration": "0.000137639s"
      },
      {
       "percentile": 0.9953125,
       "count": "1492",
       "duration": "0.000142183s"
      },
      {
       "percentile": 0.99609375,
       "count": "1494",
       "duration": "0.000158351s"
      },
      {
       "percentile": 0.996484375,
       "count": "1494",
       "duration": "0.000158351s"
      },
      {
       "percentile": 0.996875,
       "count": "1495",
       "duration": "0.000161319s"
      },
      {
       "percentile": 0.997265625,
       "count": "1495",
       "duration": "0.000161319s"
      },
      {
       "percentile": 0.99765625,
       "count": "1496",
       "duration": "0.000182287s"
      },
      {
       "percentile": 0.998046875,
       "count": "1497",
       "duration": "0.000202791s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1497",
       "duration": "0.000202791s"
      },
      {
       "percentile": 0.9984375,
       "count": "1497",
       "duration": "0.000202791s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1497",
       "duration": "0.000202791s"
      },
      {
       "percentile": 0.998828125,
       "count": "1498",
       "duration": "0.000316303s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1498",
       "duration": "0.000316303s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1498",
       "duration": "0.000316303s"
      },
      {
       "percentile": 0.99921875,
       "count": "1498",
       "duration": "0.000316303s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1498",
       "duration": "0.000316303s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1499",
       "duration": "0.000398063s"
      },
      {
       "percentile": 1,
       "count": "1499",
       "duration": "0.000398063s"
      }
     ],
     "mean": "0.000092630s",
     "pstdev": "0.000011742s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "1509"
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
     "value": "245967"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "90540"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "1509"
    }
   ],
   "execution_duration": "15.000001061s"
  },
  {
   "name": "worker_3",
   "statistics": [
    {
     "count": "1499",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000001875s"
      },
      {
       "percentile": 0.1,
       "count": "151",
       "duration": "0.000002020s"
      },
      {
       "percentile": 0.2,
       "count": "305",
       "duration": "0.000002057s"
      },
      {
       "percentile": 0.3,
       "count": "451",
       "duration": "0.000002087s"
      },
      {
       "percentile": 0.4,
       "count": "600",
       "duration": "0.000002111s"
      },
      {
       "percentile": 0.5,
       "count": "754",
       "duration": "0.000002140s"
      },
      {
       "percentile": 0.55,
       "count": "827",
       "duration": "0.000002154s"
      },
      {
       "percentile": 0.6,
       "count": "903",
       "duration": "0.000002167s"
      },
      {
       "percentile": 0.65,
       "count": "978",
       "duration": "0.000002186s"
      },
      {
       "percentile": 0.7,
       "count": "1050",
       "duration": "0.000002203s"
      },
      {
       "percentile": 0.75,
       "count": "1135",
       "duration": "0.000002221s"
      },
      {
       "percentile": 0.775,
       "count": "1170",
       "duration": "0.000002231s"
      },
      {
       "percentile": 0.8,
       "count": "1200",
       "duration": "0.000002243s"
      },
      {
       "percentile": 0.825,
       "count": "1240",
       "duration": "0.000002256s"
      },
      {
       "percentile": 0.85,
       "count": "1275",
       "duration": "0.000002270s"
      },
      {
       "percentile": 0.875,
       "count": "1315",
       "duration": "0.000002289s"
      },
      {
       "percentile": 0.8875,
       "count": "1331",
       "duration": "0.000002298s"
      },
      {
       "percentile": 0.9,
       "count": "1351",
       "duration": "0.000002313s"
      },
      {
       "percentile": 0.9125,
       "count": "1368",
       "duration": "0.000002326s"
      },
      {
       "percentile": 0.925,
       "count": "1387",
       "duration": "0.000002344s"
      },
      {
       "percentile": 0.9375,
       "count": "1406",
       "duration": "0.000002366s"
      },
      {
       "percentile": 0.94375,
       "count": "1415",
       "duration": "0.000002378s"
      },
      {
       "percentile": 0.95,
       "count": "1425",
       "duration": "0.000002386s"
      },
      {
       "percentile": 0.95625,
       "count": "1436",
       "duration": "0.000002397s"
      },
      {
       "percentile": 0.9625,
       "count": "1443",
       "duration": "0.000002415s"
      },
      {
       "percentile": 0.96875,
       "count": "1453",
       "duration": "0.000002428s"
      },
      {
       "percentile": 0.971875,
       "count": "1457",
       "duration": "0.000002435s"
      },
      {
       "percentile": 0.975,
       "count": "1462",
       "duration": "0.000002439s"
      },
      {
       "percentile": 0.978125,
       "count": "1467",
       "duration": "0.000002448s"
      },
      {
       "percentile": 0.98125,
       "count": "1471",
       "duration": "0.000002456s"
      },
      {
       "percentile": 0.984375,
       "count": "1477",
       "duration": "0.000002479s"
      },
      {
       "percentile": 0.9859375,
       "count": "1478",
       "duration": "0.000002484s"
      },
      {
       "percentile": 0.9875,
       "count": "1481",
       "duration": "0.000002498s"
      },
      {
       "percentile": 0.9890625,
       "count": "1483",
       "duration": "0.000002516s"
      },
      {
       "percentile": 0.990625,
       "count": "1485",
       "duration": "0.000002519s"
      },
      {
       "percentile": 0.9921875,
       "count": "1488",
       "duration": "0.000002557s"
      },
      {
       "percentile": 0.99296875,
       "count": "1489",
       "duration": "0.000002587s"
      },
      {
       "percentile": 0.99375,
       "count": "1490",
       "duration": "0.000002588s"
      },
      {
       "percentile": 0.99453125,
       "count": "1491",
       "duration": "0.000002606s"
      },
      {
       "percentile": 0.9953125,
       "count": "1492",
       "duration": "0.000002608s"
      },
      {
       "percentile": 0.99609375,
       "count": "1494",
       "duration": "0.000002613s"
      },
      {
       "percentile": 0.996484375,
       "count": "1494",
       "duration": "0.000002613s"
      },
      {
       "percentile": 0.996875,
       "count": "1495",
       "duration": "0.000002626s"
      },
      {
       "percentile": 0.997265625,
       "count": "1495",
       "duration": "0.000002626s"
      },
      {
       "percentile": 0.99765625,
       "count": "1497",
       "duration": "0.000002669s"
      },
      {
       "percentile": 0.998046875,
       "count": "1497",
       "duration": "0.000002669s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1497",
       "duration": "0.000002669s"
      },
      {
       "percentile": 0.9984375,
       "count": "1497",
       "duration": "0.000002669s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1497",
       "duration": "0.000002669s"
      },
      {
       "percentile": 0.998828125,
       "count": "1498",
       "duration": "0.000003008s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1498",
       "duration": "0.000003008s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1498",
       "duration": "0.000003008s"
      },
      {
       "percentile": 0.99921875,
       "count": "1498",
       "duration": "0.000003008s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1498",
       "duration": "0.000003008s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1499",
       "duration": "0.000007186s"
      },
      {
       "percentile": 1,
       "count": "1499",
       "duration": "0.000007186s"
      }
     ],
     "mean": "0.000002160s",
     "pstdev": "0.000000177s"
    },
    {
     "count": "1499",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000057533s"
      },
      {
       "percentile": 0.1,
       "count": "150",
       "duration": "0.000058621s"
      },
      {
       "percentile": 0.2,
       "count": "300",
       "duration": "0.000058945s"
      },
      {
       "percentile": 0.3,
       "count": "450",
       "duration": "0.000059199s"
      },
      {
       "percentile": 0.4,
       "count": "601",
       "duration": "0.000059387s"
      },
      {
       "percentile": 0.5,
       "count": "750",
       "duration": "0.000059571s"
      },
      {
       "percentile": 0.55,
       "count": "826",
       "duration": "0.000059667s"
      },
      {
       "percentile": 0.6,
       "count": "900",
       "duration": "0.000059741s"
      },
      {
       "percentile": 0.65,
       "count": "975",
       "duration": "0.000059823s"
      },
      {
       "percentile": 0.7,
       "count": "1050",
       "duration": "0.000059927s"
      },
      {
       "percentile": 0.75,
       "count": "1125",
       "duration": "0.000060075s"
      },
      {
       "percentile": 0.775,
       "count": "1162",
       "duration": "0.000060139s"
      },
      {
       "percentile": 0.8,
       "count": "1201",
       "duration": "0.000060239s"
      },
      {
       "percentile": 0.825,
       "count": "1237",
       "duration": "0.000060337s"
      },
      {
       "percentile": 0.85,
       "count": "1275",
       "duration": "0.000060489s"
      },
      {
       "percentile": 0.875,
       "count": "1312",
       "duration": "0.000060609s"
      },
      {
       "percentile": 0.8875,
       "count": "1331",
       "duration": "0.000060713s"
      },
      {
       "percentile": 0.9,
       "count": "1350",
       "duration": "0.000060821s"
      },
      {
       "percentile": 0.9125,
       "count": "1368",
       "duration": "0.000060927s"
      },
      {
       "percentile": 0.925,
       "count": "1387",
       "duration": "0.000061089s"
      },
      {
       "percentile": 0.9375,
       "count": "1406",
       "duration": "0.000061285s"
      },
      {
       "percentile": 0.94375,
       "count": "1415",
       "duration": "0.000061365s"
      },
      {
       "percentile": 0.95,
       "count": "1425",
       "duration": "0.000061529s"
      },
      {
       "percentile": 0.95625,
       "count": "1434",
       "duration": "0.000061647s"
      },
      {
       "percentile": 0.9625,
       "count": "1443",
       "duration": "0.000061819s"
      },
      {
       "percentile": 0.96875,
       "count": "1453",
       "duration": "0.000062041s"
      },
      {
       "percentile": 0.971875,
       "count": "1457",
       "duration": "0.000062139s"
      },
      {
       "percentile": 0.975,
       "count": "1462",
       "duration": "0.000062511s"
      },
      {
       "percentile": 0.978125,
       "count": "1467",
       "duration": "0.000062757s"
      },
      {
       "percentile": 0.98125,
       "count": "1471",
       "duration": "0.000063827s"
      },
      {
       "percentile": 0.984375,
       "count": "1476",
       "duration": "0.000066703s"
      },
      {
       "percentile": 0.9859375,
       "count": "1478",
       "duration": "0.000070451s"
      },
      {
       "percentile": 0.9875,
       "count": "1481",
       "duration": "0.000094739s"
      },
      {
       "percentile": 0.9890625,
       "count": "1483",
       "duration": "0.000110363s"
      },
      {
       "percentile": 0.990625,
       "count": "1485",
       "duration": "0.000118547s"
      },
      {
       "percentile": 0.9921875,
       "count": "1488",
       "duration": "0.000130203s"
      },
      {
       "percentile": 0.99296875,
       "count": "1489",
       "duration": "0.000133311s"
      },
      {
       "percentile": 0.99375,
       "count": "1490",
       "duration": "0.000148815s"
      },
      {
       "percentile": 0.99453125,
       "count": "1491",
       "duration": "0.000154871s"
      },
      {
       "percentile": 0.9953125,
       "count": "1492",
       "duration": "0.000180879s"
      },
      {
       "percentile": 0.99609375,
       "count": "1494",
       "duration": "0.000182983s"
      },
      {
       "percentile": 0.996484375,
       "count": "1494",
       "duration": "0.000182983s"
      },
      {
       "percentile": 0.996875,
       "count": "1495",
       "duration": "0.000196447s"
      },
      {
       "percentile": 0.997265625,
       "count": "1495",
       "duration": "0.000196447s"
      },
      {
       "percentile": 0.99765625,
       "count": "1496",
       "duration": "0.000205151s"
      },
      {
       "percentile": 0.998046875,
       "count": "1497",
       "duration": "0.000235663s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1497",
       "duration": "0.000235663s"
      },
      {
       "percentile": 0.9984375,
       "count": "1497",
       "duration": "0.000235663s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1497",
       "duration": "0.000235663s"
      },
      {
       "percentile": 0.998828125,
       "count": "1498",
       "duration": "0.000244007s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1498",
       "duration": "0.000244007s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1498",
       "duration": "0.000244007s"
      },
      {
       "percentile": 0.99921875,
       "count": "1498",
       "duration": "0.000244007s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1498",
       "duration": "0.000244007s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1499",
       "duration": "0.000286735s"
      },
      {
       "percentile": 1,
       "count": "1499",
       "duration": "0.000286735s"
      }
     ],
     "mean": "0.000060965s",
     "pstdev": "0.000012861s"
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
     "count": "1499",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000061775s"
      },
      {
       "percentile": 0.1,
       "count": "150",
       "duration": "0.000063139s"
      },
      {
       "percentile": 0.2,
       "count": "300",
       "duration": "0.000063465s"
      },
      {
       "percentile": 0.3,
       "count": "450",
       "duration": "0.000063745s"
      },
      {
       "percentile": 0.4,
       "count": "601",
       "duration": "0.000063971s"
      },
      {
       "percentile": 0.5,
       "count": "750",
       "duration": "0.000064169s"
      },
      {
       "percentile": 0.55,
       "count": "825",
       "duration": "0.000064265s"
      },
      {
       "percentile": 0.6,
       "count": "901",
       "duration": "0.000064357s"
      },
      {
       "percentile": 0.65,
       "count": "975",
       "duration": "0.000064461s"
      },
      {
       "percentile": 0.7,
       "count": "1051",
       "duration": "0.000064611s"
      },
      {
       "percentile": 0.75,
       "count": "1125",
       "duration": "0.000064777s"
      },
      {
       "percentile": 0.775,
       "count": "1162",
       "duration": "0.000064909s"
      },
      {
       "percentile": 0.8,
       "count": "1200",
       "duration": "0.000065003s"
      },
      {
       "percentile": 0.825,
       "count": "1239",
       "duration": "0.000065141s"
      },
      {
       "percentile": 0.85,
       "count": "1275",
       "duration": "0.000065301s"
      },
      {
       "percentile": 0.875,
       "count": "1312",
       "duration": "0.000065495s"
      },
      {
       "percentile": 0.8875,
       "count": "1331",
       "duration": "0.000065647s"
      },
      {
       "percentile": 0.9,
       "count": "1350",
       "duration": "0.000065783s"
      },
      {
       "percentile": 0.9125,
       "count": "1368",
       "duration": "0.000065919s"
      },
      {
       "percentile": 0.925,
       "count": "1387",
       "duration": "0.000066135s"
      },
      {
       "percentile": 0.9375,
       "count": "1406",
       "duration": "0.000066231s"
      },
      {
       "percentile": 0.94375,
       "count": "1415",
       "duration": "0.000066391s"
      },
      {
       "percentile": 0.95,
       "count": "1425",
       "duration": "0.000066527s"
      },
      {
       "percentile": 0.95625,
       "count": "1434",
       "duration": "0.000066727s"
      },
      {
       "percentile": 0.9625,
       "count": "1443",
       "duration": "0.000066839s"
      },
      {
       "percentile": 0.96875,
       "count": "1453",
       "duration": "0.000067151s"
      },
      {
       "percentile": 0.971875,
       "count": "1457",
       "duration": "0.000067407s"
      },
      {
       "percentile": 0.975,
       "count": "1462",
       "duration": "0.000067631s"
      },
      {
       "percentile": 0.978125,
       "count": "1467",
       "duration": "0.000068279s"
      },
      {
       "percentile": 0.98125,
       "count": "1471",
       "duration": "0.000069131s"
      },
      {
       "percentile": 0.984375,
       "count": "1476",
       "duration": "0.000071215s"
      },
      {
       "percentile": 0.9859375,
       "count": "1478",
       "duration": "0.000075371s"
      },
      {
       "percentile": 0.9875,
       "count": "1481",
       "duration": "0.000103111s"
      },
      {
       "percentile": 0.9890625,
       "count": "1483",
       "duration": "0.000115015s"
      },
      {
       "percentile": 0.990625,
       "count": "1485",
       "duration": "0.000123243s"
      },
      {
       "percentile": 0.9921875,
       "count": "1488",
       "duration": "0.000134967s"
      },
      {
       "percentile": 0.99296875,
       "count": "1489",
       "duration": "0.000137911s"
      },
      {
       "percentile": 0.99375,
       "count": "1490",
       "duration": "0.000153735s"
      },
      {
       "percentile": 0.99453125,
       "count": "1491",
       "duration": "0.000159503s"
      },
      {
       "percentile": 0.9953125,
       "count": "1492",
       "duration": "0.000185567s"
      },
      {
       "percentile": 0.99609375,
       "count": "1494",
       "duration": "0.000187623s"
      },
      {
       "percentile": 0.996484375,
       "count": "1494",
       "duration": "0.000187623s"
      },
      {
       "percentile": 0.996875,
       "count": "1495",
       "duration": "0.000201087s"
      },
      {
       "percentile": 0.997265625,
       "count": "1495",
       "duration": "0.000201087s"
      },
      {
       "percentile": 0.99765625,
       "count": "1496",
       "duration": "0.000210095s"
      },
      {
       "percentile": 0.998046875,
       "count": "1497",
       "duration": "0.000240303s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1497",
       "duration": "0.000240303s"
      },
      {
       "percentile": 0.9984375,
       "count": "1497",
       "duration": "0.000240303s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1497",
       "duration": "0.000240303s"
      },
      {
       "percentile": 0.998828125,
       "count": "1498",
       "duration": "0.000248639s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1498",
       "duration": "0.000248639s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1498",
       "duration": "0.000248639s"
      },
      {
       "percentile": 0.99921875,
       "count": "1498",
       "duration": "0.000248639s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1498",
       "duration": "0.000248639s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1499",
       "duration": "0.000291455s"
      },
      {
       "percentile": 1,
       "count": "1499",
       "duration": "0.000291455s"
      }
     ],
     "mean": "0.000065623s",
     "pstdev": "0.000012901s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "1509"
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
     "value": "245967"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "90540"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "1509"
    }
   ],
   "execution_duration": "15.000000562s"
  },
  {
   "name": "worker_4",
   "statistics": [
    {
     "count": "1499",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000001738s"
      },
      {
       "percentile": 0.1,
       "count": "150",
       "duration": "0.000001926s"
      },
      {
       "percentile": 0.2,
       "count": "305",
       "duration": "0.000001955s"
      },
      {
       "percentile": 0.3,
       "count": "453",
       "duration": "0.000001974s"
      },
      {
       "percentile": 0.4,
       "count": "607",
       "duration": "0.000001993s"
      },
      {
       "percentile": 0.5,
       "count": "751",
       "duration": "0.000002012s"
      },
      {
       "percentile": 0.55,
       "count": "831",
       "duration": "0.000002022s"
      },
      {
       "percentile": 0.6,
       "count": "903",
       "duration": "0.000002032s"
      },
      {
       "percentile": 0.65,
       "count": "985",
       "duration": "0.000002045s"
      },
      {
       "percentile": 0.7,
       "count": "1051",
       "duration": "0.000002058s"
      },
      {
       "percentile": 0.75,
       "count": "1129",
       "duration": "0.000002071s"
      },
      {
       "percentile": 0.775,
       "count": "1167",
       "duration": "0.000002078s"
      },
      {
       "percentile": 0.8,
       "count": "1207",
       "duration": "0.000002088s"
      },
      {
       "percentile": 0.825,
       "count": "1238",
       "duration": "0.000002095s"
      },
      {
       "percentile": 0.85,
       "count": "1278",
       "duration": "0.000002106s"
      },
      {
       "percentile": 0.875,
       "count": "1313",
       "duration": "0.000002116s"
      },
      {
       "percentile": 0.8875,
       "count": "1335",
       "duration": "0.000002125s"
      },
      {
       "percentile": 0.9,
       "count": "1353",
       "duration": "0.000002130s"
      },
      {
       "percentile": 0.9125,
       "count": "1370",
       "duration": "0.000002137s"
      },
      {
       "percentile": 0.925,
       "count": "1390",
       "duration": "0.000002146s"
      },
      {
       "percentile": 0.9375,
       "count": "1406",
       "duration": "0.000002156s"
      },
      {
       "percentile": 0.94375,
       "count": "1416",
       "duration": "0.000002163s"
      },
      {
       "percentile": 0.95,
       "count": "1427",
       "duration": "0.000002170s"
      },
      {
       "percentile": 0.95625,
       "count": "1434",
       "duration": "0.000002177s"
      },
      {
       "percentile": 0.9625,
       "count": "1444",
       "duration": "0.000002183s"
      },
      {
       "percentile": 0.96875,
       "count": "1453",
       "duration": "0.000002196s"
      },
      {
       "percentile": 0.971875,
       "count": "1457",
       "duration": "0.000002205s"
      },
      {
       "percentile": 0.975,
       "count": "1463",
       "duration": "0.000002212s"
      },
      {
       "percentile": 0.978125,
       "count": "1468",
       "duration": "0.000002221s"
      },
      {
       "percentile": 0.98125,
       "count": "1471",
       "duration": "0.000002233s"
      },
      {
       "percentile": 0.984375,
       "count": "1476",
       "duration": "0.000002249s"
      },
      {
       "percentile": 0.9859375,
       "count": "1480",
       "duration": "0.000002254s"
      },
      {
       "percentile": 0.9875,
       "count": "1481",
       "duration": "0.000002256s"
      },
      {
       "percentile": 0.9890625,
       "count": "1483",
       "duration": "0.000002259s"
      },
      {
       "percentile": 0.990625,
       "count": "1485",
       "duration": "0.000002262s"
      },
      {
       "percentile": 0.9921875,
       "count": "1488",
       "duration": "0.000002273s"
      },
      {
       "percentile": 0.99296875,
       "count": "1489",
       "duration": "0.000002275s"
      },
      {
       "percentile": 0.99375,
       "count": "1490",
       "duration": "0.000002279s"
      },
      {
       "percentile": 0.99453125,
       "count": "1491",
       "duration": "0.000002298s"
      },
      {
       "percentile": 0.9953125,
       "count": "1492",
       "duration": "0.000002339s"
      },
      {
       "percentile": 0.99609375,
       "count": "1494",
       "duration": "0.000002346s"
      },
      {
       "percentile": 0.996484375,
       "count": "1494",
       "duration": "0.000002346s"
      },
      {
       "percentile": 0.996875,
       "count": "1495",
       "duration": "0.000002348s"
      },
      {
       "percentile": 0.997265625,
       "count": "1495",
       "duration": "0.000002348s"
      },
      {
       "percentile": 0.99765625,
       "count": "1496",
       "duration": "0.000002442s"
      },
      {
       "percentile": 0.998046875,
       "count": "1497",
       "duration": "0.000002531s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1497",
       "duration": "0.000002531s"
      },
      {
       "percentile": 0.9984375,
       "count": "1497",
       "duration": "0.000002531s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1497",
       "duration": "0.000002531s"
      },
      {
       "percentile": 0.998828125,
       "count": "1498",
       "duration": "0.000002754s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1498",
       "duration": "0.000002754s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1498",
       "duration": "0.000002754s"
      },
      {
       "percentile": 0.99921875,
       "count": "1498",
       "duration": "0.000002754s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1498",
       "duration": "0.000002754s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1499",
       "duration": "0.000006889s"
      },
      {
       "percentile": 1,
       "count": "1499",
       "duration": "0.000006889s"
      }
     ],
     "mean": "0.000002026s",
     "pstdev": "0.000000152s"
    },
    {
     "count": "1499",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "2",
       "duration": "0.000079959s"
      },
      {
       "percentile": 0.1,
       "count": "150",
       "duration": "0.000081675s"
      },
      {
       "percentile": 0.2,
       "count": "301",
       "duration": "0.000082051s"
      },
      {
       "percentile": 0.3,
       "count": "450",
       "duration": "0.000082339s"
      },
      {
       "percentile": 0.4,
       "count": "601",
       "duration": "0.000082591s"
      },
      {
       "percentile": 0.5,
       "count": "750",
       "duration": "0.000082875s"
      },
      {
       "percentile": 0.55,
       "count": "825",
       "duration": "0.000083051s"
      },
      {
       "percentile": 0.6,
       "count": "900",
       "duration": "0.000083279s"
      },
      {
       "percentile": 0.65,
       "count": "975",
       "duration": "0.000083459s"
      },
      {
       "percentile": 0.7,
       "count": "1050",
       "duration": "0.000083635s"
      },
      {
       "percentile": 0.75,
       "count": "1125",
       "duration": "0.000083779s"
      },
      {
       "percentile": 0.775,
       "count": "1163",
       "duration": "0.000083903s"
      },
      {
       "percentile": 0.8,
       "count": "1201",
       "duration": "0.000083987s"
      },
      {
       "percentile": 0.825,
       "count": "1238",
       "duration": "0.000084107s"
      },
      {
       "percentile": 0.85,
       "count": "1278",
       "duration": "0.000084199s"
      },
      {
       "percentile": 0.875,
       "count": "1312",
       "duration": "0.000084343s"
      },
      {
       "percentile": 0.8875,
       "count": "1332",
       "duration": "0.000084427s"
      },
      {
       "percentile": 0.9,
       "count": "1350",
       "duration": "0.000084511s"
      },
      {
       "percentile": 0.9125,
       "count": "1368",
       "duration": "0.000084659s"
      },
      {
       "percentile": 0.925,
       "count": "1387",
       "duration": "0.000084931s"
      },
      {
       "percentile": 0.9375,
       "count": "1406",
       "duration": "0.000085143s"
      },
      {
       "percentile": 0.94375,
       "count": "1415",
       "duration": "0.000085299s"
      },
      {
       "percentile": 0.95,
       "count": "1425",
       "duration": "0.000085371s"
      },
      {
       "percentile": 0.95625,
       "count": "1435",
       "duration": "0.000085615s"
      },
      {
       "percentile": 0.9625,
       "count": "1443",
       "duration": "0.000085911s"
      },
      {
       "percentile": 0.96875,
       "count": "1453",
       "duration": "0.000086455s"
      },
      {
       "percentile": 0.971875,
       "count": "1458",
       "duration": "0.000086679s"
      },
      {
       "percentile": 0.975,
       "count": "1462",
       "duration": "0.000087091s"
      },
      {
       "percentile": 0.978125,
       "count": "1467",
       "duration": "0.000087811s"
      },
      {
       "percentile": 0.98125,
       "count": "1471",
       "duration": "0.000091831s"
      },
      {
       "percentile": 0.984375,
       "count": "1476",
       "duration": "0.000097155s"
      },
      {
       "percentile": 0.9859375,
       "count": "1478",
       "duration": "0.000105235s"
      },
      {
       "percentile": 0.9875,
       "count": "1481",
       "duration": "0.000128175s"
      },
      {
       "percentile": 0.9890625,
       "count": "1483",
       "duration": "0.000135663s"
      },
      {
       "percentile": 0.990625,
       "count": "1485",
       "duration": "0.000145415s"
      },
      {
       "percentile": 0.9921875,
       "count": "1488",
       "duration": "0.000170263s"
      },
      {
       "percentile": 0.99296875,
       "count": "1489",
       "duration": "0.000171135s"
      },
      {
       "percentile": 0.99375,
       "count": "1490",
       "duration": "0.000183263s"
      },
      {
       "percentile": 0.99453125,
       "count": "1491",
       "duration": "0.000184263s"
      },
      {
       "percentile": 0.9953125,
       "count": "1492",
       "duration": "0.000186279s"
      },
      {
       "percentile": 0.99609375,
       "count": "1494",
       "duration": "0.000219855s"
      },
      {
       "percentile": 0.996484375,
       "count": "1494",
       "duration": "0.000219855s"
      },
      {
       "percentile": 0.996875,
       "count": "1495",
       "duration": "0.000226863s"
      },
      {
       "percentile": 0.997265625,
       "count": "1495",
       "duration": "0.000226863s"
      },
      {
       "percentile": 0.99765625,
       "count": "1496",
       "duration": "0.000231175s"
      },
      {
       "percentile": 0.998046875,
       "count": "1497",
       "duration": "0.000238991s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1497",
       "duration": "0.000238991s"
      },
      {
       "percentile": 0.9984375,
       "count": "1497",
       "duration": "0.000238991s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1497",
       "duration": "0.000238991s"
      },
      {
       "percentile": 0.998828125,
       "count": "1498",
       "duration": "0.000246351s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1498",
       "duration": "0.000246351s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1498",
       "duration": "0.000246351s"
      },
      {
       "percentile": 0.99921875,
       "count": "1498",
       "duration": "0.000246351s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1498",
       "duration": "0.000246351s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1499",
       "duration": "0.000289135s"
      },
      {
       "percentile": 1,
       "count": "1499",
       "duration": "0.000289135s"
      }
     ],
     "mean": "0.000084438s",
     "pstdev": "0.000012759s"
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
     "count": "1499",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000084375s"
      },
      {
       "percentile": 0.1,
       "count": "153",
       "duration": "0.000086071s"
      },
      {
       "percentile": 0.2,
       "count": "301",
       "duration": "0.000086455s"
      },
      {
       "percentile": 0.3,
       "count": "450",
       "duration": "0.000086723s"
      },
      {
       "percentile": 0.4,
       "count": "600",
       "duration": "0.000086975s"
      },
      {
       "percentile": 0.5,
       "count": "753",
       "duration": "0.000087287s"
      },
      {
       "percentile": 0.55,
       "count": "825",
       "duration": "0.000087475s"
      },
      {
       "percentile": 0.6,
       "count": "900",
       "duration": "0.000087691s"
      },
      {
       "percentile": 0.65,
       "count": "975",
       "duration": "0.000087863s"
      },
      {
       "percentile": 0.7,
       "count": "1050",
       "duration": "0.000088031s"
      },
      {
       "percentile": 0.75,
       "count": "1125",
       "duration": "0.000088223s"
      },
      {
       "percentile": 0.775,
       "count": "1163",
       "duration": "0.000088331s"
      },
      {
       "percentile": 0.8,
       "count": "1202",
       "duration": "0.000088447s"
      },
      {
       "percentile": 0.825,
       "count": "1239",
       "duration": "0.000088559s"
      },
      {
       "percentile": 0.85,
       "count": "1276",
       "duration": "0.000088663s"
      },
      {
       "percentile": 0.875,
       "count": "1314",
       "duration": "0.000088827s"
      },
      {
       "percentile": 0.8875,
       "count": "1331",
       "duration": "0.000088955s"
      },
      {
       "percentile": 0.9,
       "count": "1350",
       "duration": "0.000089031s"
      },
      {
       "percentile": 0.9125,
       "count": "1368",
       "duration": "0.000089239s"
      },
      {
       "percentile": 0.925,
       "count": "1387",
       "duration": "0.000089515s"
      },
      {
       "percentile": 0.9375,
       "count": "1406",
       "duration": "0.000089719s"
      },
      {
       "percentile": 0.94375,
       "count": "1415",
       "duration": "0.000089835s"
      },
      {
       "percentile": 0.95,
       "count": "1426",
       "duration": "0.000090039s"
      },
      {
       "percentile": 0.95625,
       "count": "1434",
       "duration": "0.000090279s"
      },
      {
       "percentile": 0.9625,
       "count": "1443",
       "duration": "0.000090531s"
      },
      {
       "percentile": 0.96875,
       "count": "1453",
       "duration": "0.000090967s"
      },
      {
       "percentile": 0.971875,
       "count": "1457",
       "duration": "0.000091159s"
      },
      {
       "percentile": 0.975,
       "count": "1462",
       "duration": "0.000091963s"
      },
      {
       "percentile": 0.978125,
       "count": "1467",
       "duration": "0.000092883s"
      },
      {
       "percentile": 0.98125,
       "count": "1471",
       "duration": "0.000096475s"
      },
      {
       "percentile": 0.984375,
       "count": "1476",
       "duration": "0.000101427s"
      },
      {
       "percentile": 0.9859375,
       "count": "1478",
       "duration": "0.000118799s"
      },
      {
       "percentile": 0.9875,
       "count": "1481",
       "duration": "0.000132751s"
      },
      {
       "percentile": 0.9890625,
       "count": "1483",
       "duration": "0.000140183s"
      },
      {
       "percentile": 0.990625,
       "count": "1485",
       "duration": "0.000149863s"
      },
      {
       "percentile": 0.9921875,
       "count": "1488",
       "duration": "0.000174711s"
      },
      {
       "percentile": 0.99296875,
       "count": "1489",
       "duration": "0.000175511s"
      },
      {
       "percentile": 0.99375,
       "count": "1490",
       "duration": "0.000187831s"
      },
      {
       "percentile": 0.99453125,
       "count": "1491",
       "duration": "0.000188559s"
      },
      {
       "percentile": 0.9953125,
       "count": "1492",
       "duration": "0.000190895s"
      },
      {
       "percentile": 0.99609375,
       "count": "1494",
       "duration": "0.000224463s"
      },
      {
       "percentile": 0.996484375,
       "count": "1494",
       "duration": "0.000224463s"
      },
      {
       "percentile": 0.996875,
       "count": "1495",
       "duration": "0.000231279s"
      },
      {
       "percentile": 0.997265625,
       "count": "1495",
       "duration": "0.000231279s"
      },
      {
       "percentile": 0.99765625,
       "count": "1496",
       "duration": "0.000235751s"
      },
      {
       "percentile": 0.998046875,
       "count": "1497",
       "duration": "0.000243455s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1497",
       "duration": "0.000243455s"
      },
      {
       "percentile": 0.9984375,
       "count": "1497",
       "duration": "0.000243455s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1497",
       "duration": "0.000243455s"
      },
      {
       "percentile": 0.998828125,
       "count": "1498",
       "duration": "0.000251007s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1498",
       "duration": "0.000251007s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1498",
       "duration": "0.000251007s"
      },
      {
       "percentile": 0.99921875,
       "count": "1498",
       "duration": "0.000251007s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1498",
       "duration": "0.000251007s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1499",
       "duration": "0.000293615s"
      },
      {
       "percentile": 1,
       "count": "1499",
       "duration": "0.000293615s"
      }
     ],
     "mean": "0.000088874s",
     "pstdev": "0.000012784s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "1509"
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
     "value": "245967"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "90540"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "1509"
    }
   ],
   "execution_duration": "15.000000058s"
  },
  {
   "name": "worker_5",
   "statistics": [
    {
     "count": "1499",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000001889s"
      },
      {
       "percentile": 0.1,
       "count": "151",
       "duration": "0.000002013s"
      },
      {
       "percentile": 0.2,
       "count": "303",
       "duration": "0.000002051s"
      },
      {
       "percentile": 0.3,
       "count": "457",
       "duration": "0.000002078s"
      },
      {
       "percentile": 0.4,
       "count": "600",
       "duration": "0.000002103s"
      },
      {
       "percentile": 0.5,
       "count": "755",
       "duration": "0.000002126s"
      },
      {
       "percentile": 0.55,
       "count": "827",
       "duration": "0.000002135s"
      },
      {
       "percentile": 0.6,
       "count": "903",
       "duration": "0.000002148s"
      },
      {
       "percentile": 0.65,
       "count": "981",
       "duration": "0.000002158s"
      },
      {
       "percentile": 0.7,
       "count": "1053",
       "duration": "0.000002169s"
      },
      {
       "percentile": 0.75,
       "count": "1127",
       "duration": "0.000002182s"
      },
      {
       "percentile": 0.775,
       "count": "1171",
       "duration": "0.000002191s"
      },
      {
       "percentile": 0.8,
       "count": "1209",
       "duration": "0.000002200s"
      },
      {
       "percentile": 0.825,
       "count": "1238",
       "duration": "0.000002209s"
      },
      {
       "percentile": 0.85,
       "count": "1275",
       "duration": "0.000002220s"
      },
      {
       "percentile": 0.875,
       "count": "1314",
       "duration": "0.000002235s"
      },
      {
       "percentile": 0.8875,
       "count": "1334",
       "duration": "0.000002244s"
      },
      {
       "percentile": 0.9,
       "count": "1353",
       "duration": "0.000002254s"
      },
      {
       "percentile": 0.9125,
       "count": "1369",
       "duration": "0.000002261s"
      },
      {
       "percentile": 0.925,
       "count": "1387",
       "duration": "0.000002273s"
      },
      {
       "percentile": 0.9375,
       "count": "1407",
       "duration": "0.000002287s"
      },
      {
       "percentile": 0.94375,
       "count": "1415",
       "duration": "0.000002293s"
      },
      {
       "percentile": 0.95,
       "count": "1425",
       "duration": "0.000002303s"
      },
      {
       "percentile": 0.95625,
       "count": "1435",
       "duration": "0.000002317s"
      },
      {
       "percentile": 0.9625,
       "count": "1443",
       "duration": "0.000002325s"
      },
      {
       "percentile": 0.96875,
       "count": "1453",
       "duration": "0.000002342s"
      },
      {
       "percentile": 0.971875,
       "count": "1457",
       "duration": "0.000002346s"
      },
      {
       "percentile": 0.975,
       "count": "1462",
       "duration": "0.000002357s"
      },
      {
       "percentile": 0.978125,
       "count": "1467",
       "duration": "0.000002360s"
      },
      {
       "percentile": 0.98125,
       "count": "1471",
       "duration": "0.000002369s"
      },
      {
       "percentile": 0.984375,
       "count": "1476",
       "duration": "0.000002376s"
      },
      {
       "percentile": 0.9859375,
       "count": "1478",
       "duration": "0.000002388s"
      },
      {
       "percentile": 0.9875,
       "count": "1481",
       "duration": "0.000002392s"
      },
      {
       "percentile": 0.9890625,
       "count": "1485",
       "duration": "0.000002402s"
      },
      {
       "percentile": 0.990625,
       "count": "1485",
       "duration": "0.000002402s"
      },
      {
       "percentile": 0.9921875,
       "count": "1488",
       "duration": "0.000002414s"
      },
      {
       "percentile": 0.99296875,
       "count": "1489",
       "duration": "0.000002416s"
      },
      {
       "percentile": 0.99375,
       "count": "1490",
       "duration": "0.000002423s"
      },
      {
       "percentile": 0.99453125,
       "count": "1491",
       "duration": "0.000002430s"
      },
      {
       "percentile": 0.9953125,
       "count": "1493",
       "duration": "0.000002479s"
      },
      {
       "percentile": 0.99609375,
       "count": "1494",
       "duration": "0.000002482s"
      },
      {
       "percentile": 0.996484375,
       "count": "1494",
       "duration": "0.000002482s"
      },
      {
       "percentile": 0.996875,
       "count": "1495",
       "duration": "0.000002493s"
      },
      {
       "percentile": 0.997265625,
       "count": "1495",
       "duration": "0.000002493s"
      },
      {
       "percentile": 0.99765625,
       "count": "1496",
       "duration": "0.000002654s"
      },
      {
       "percentile": 0.998046875,
       "count": "1497",
       "duration": "0.000002834s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1497",
       "duration": "0.000002834s"
      },
      {
       "percentile": 0.9984375,
       "count": "1497",
       "duration": "0.000002834s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1497",
       "duration": "0.000002834s"
      },
      {
       "percentile": 0.998828125,
       "count": "1498",
       "duration": "0.000003335s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1498",
       "duration": "0.000003335s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1498",
       "duration": "0.000003335s"
      },
      {
       "percentile": 0.99921875,
       "count": "1498",
       "duration": "0.000003335s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1498",
       "duration": "0.000003335s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1499",
       "duration": "0.000006842s"
      },
      {
       "percentile": 1,
       "count": "1499",
       "duration": "0.000006842s"
      }
     ],
     "mean": "0.000002134s",
     "pstdev": "0.000000158s"
    },
    {
     "count": "1499",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000057469s"
      },
      {
       "percentile": 0.1,
       "count": "150",
       "duration": "0.000058419s"
      },
      {
       "percentile": 0.2,
       "count": "301",
       "duration": "0.000058623s"
      },
      {
       "percentile": 0.3,
       "count": "451",
       "duration": "0.000058779s"
      },
      {
       "percentile": 0.4,
       "count": "600",
       "duration": "0.000058899s"
      },
      {
       "percentile": 0.5,
       "count": "751",
       "duration": "0.000059039s"
      },
      {
       "percentile": 0.55,
       "count": "828",
       "duration": "0.000059095s"
      },
      {
       "percentile": 0.6,
       "count": "901",
       "duration": "0.000059159s"
      },
      {
       "percentile": 0.65,
       "count": "976",
       "duration": "0.000059235s"
      },
      {
       "percentile": 0.7,
       "count": "1052",
       "duration": "0.000059335s"
      },
      {
       "percentile": 0.75,
       "count": "1125",
       "duration": "0.000059441s"
      },
      {
       "percentile": 0.775,
       "count": "1163",
       "duration": "0.000059519s"
      },
      {
       "percentile": 0.8,
       "count": "1200",
       "duration": "0.000059581s"
      },
      {
       "percentile": 0.825,
       "count": "1238",
       "duration": "0.000059669s"
      },
      {
       "percentile": 0.85,
       "count": "1276",
       "duration": "0.000059791s"
      },
      {
       "percentile": 0.875,
       "count": "1312",
       "duration": "0.000059913s"
      },
      {
       "percentile": 0.8875,
       "count": "1331",
       "duration": "0.000059977s"
      },
      {
       "percentile": 0.9,
       "count": "1351",
       "duration": "0.000060039s"
      },
      {
       "percentile": 0.9125,
       "count": "1369",
       "duration": "0.000060229s"
      },
      {
       "percentile": 0.925,
       "count": "1387",
       "duration": "0.000060409s"
      },
      {
       "percentile": 0.9375,
       "count": "1406",
       "duration": "0.000060745s"
      },
      {
       "percentile": 0.94375,
       "count": "1415",
       "duration": "0.000060993s"
      },
      {
       "percentile": 0.95,
       "count": "1425",
       "duration": "0.000061225s"
      },
      {
       "percentile": 0.95625,
       "count": "1434",
       "duration": "0.000061539s"
      },
      {
       "percentile": 0.9625,
       "count": "1443",
       "duration": "0.000061939s"
      },
      {
       "percentile": 0.96875,
       "count": "1453",
       "duration": "0.000062473s"
      },
      {
       "percentile": 0.971875,
       "count": "1457",
       "duration": "0.000062729s"
      },
      {
       "percentile": 0.975,
       "count": "1462",
       "duration": "0.000062951s"
      },
      {
       "percentile": 0.978125,
       "count": "1467",
       "duration": "0.000063221s"
      },
      {
       "percentile": 0.98125,
       "count": "1471",
       "duration": "0.000063749s"
      },
      {
       "percentile": 0.984375,
       "count": "1476",
       "duration": "0.000065699s"
      },
      {
       "percentile": 0.9859375,
       "count": "1478",
       "duration": "0.000070851s"
      },
      {
       "percentile": 0.9875,
       "count": "1481",
       "duration": "0.000072599s"
      },
      {
       "percentile": 0.9890625,
       "count": "1483",
       "duration": "0.000073967s"
      },
      {
       "percentile": 0.990625,
       "count": "1485",
       "duration": "0.000076815s"
      },
      {
       "percentile": 0.9921875,
       "count": "1488",
       "duration": "0.000078167s"
      },
      {
       "percentile": 0.99296875,
       "count": "1489",
       "duration": "0.000078887s"
      },
      {
       "percentile": 0.99375,
       "count": "1490",
       "duration": "0.000085095s"
      },
      {
       "percentile": 0.99453125,
       "count": "1491",
       "duration": "0.000085319s"
      },
      {
       "percentile": 0.9953125,
       "count": "1492",
       "duration": "0.000089679s"
      },
      {
       "percentile": 0.99609375,
       "count": "1494",
       "duration": "0.000111255s"
      },
      {
       "percentile": 0.996484375,
       "count": "1494",
       "duration": "0.000111255s"
      },
      {
       "percentile": 0.996875,
       "count": "1495",
       "duration": "0.000122135s"
      },
      {
       "percentile": 0.997265625,
       "count": "1495",
       "duration": "0.000122135s"
      },
      {
       "percentile": 0.99765625,
       "count": "1496",
       "duration": "0.000153783s"
      },
      {
       "percentile": 0.998046875,
       "count": "1497",
       "duration": "0.000169703s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1497",
       "duration": "0.000169703s"
      },
      {
       "percentile": 0.9984375,
       "count": "1497",
       "duration": "0.000169703s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1497",
       "duration": "0.000169703s"
      },
      {
       "percentile": 0.998828125,
       "count": "1498",
       "duration": "0.000211519s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1498",
       "duration": "0.000211519s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1498",
       "duration": "0.000211519s"
      },
      {
       "percentile": 0.99921875,
       "count": "1498",
       "duration": "0.000211519s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1498",
       "duration": "0.000211519s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1499",
       "duration": "0.000218143s"
      },
      {
       "percentile": 1,
       "count": "1499",
       "duration": "0.000218143s"
      }
     ],
     "mean": "0.000059821s",
     "pstdev": "0.000007501s"
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
     "count": "1499",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000061795s"
      },
      {
       "percentile": 0.1,
       "count": "150",
       "duration": "0.000062937s"
      },
      {
       "percentile": 0.2,
       "count": "300",
       "duration": "0.000063149s"
      },
      {
       "percentile": 0.3,
       "count": "450",
       "duration": "0.000063327s"
      },
      {
       "percentile": 0.4,
       "count": "601",
       "duration": "0.000063465s"
      },
      {
       "percentile": 0.5,
       "count": "752",
       "duration": "0.000063593s"
      },
      {
       "percentile": 0.55,
       "count": "827",
       "duration": "0.000063661s"
      },
      {
       "percentile": 0.6,
       "count": "902",
       "duration": "0.000063739s"
      },
      {
       "percentile": 0.65,
       "count": "976",
       "duration": "0.000063825s"
      },
      {
       "percentile": 0.7,
       "count": "1051",
       "duration": "0.000063933s"
      },
      {
       "percentile": 0.75,
       "count": "1125",
       "duration": "0.000064061s"
      },
      {
       "percentile": 0.775,
       "count": "1162",
       "duration": "0.000064139s"
      },
      {
       "percentile": 0.8,
       "count": "1200",
       "duration": "0.000064249s"
      },
      {
       "percentile": 0.825,
       "count": "1238",
       "duration": "0.000064337s"
      },
      {
       "percentile": 0.85,
       "count": "1275",
       "duration": "0.000064443s"
      },
      {
       "percentile": 0.875,
       "count": "1312",
       "duration": "0.000064545s"
      },
      {
       "percentile": 0.8875,
       "count": "1331",
       "duration": "0.000064661s"
      },
      {
       "percentile": 0.9,
       "count": "1350",
       "duration": "0.000064831s"
      },
      {
       "percentile": 0.9125,
       "count": "1368",
       "duration": "0.000065023s"
      },
      {
       "percentile": 0.925,
       "count": "1387",
       "duration": "0.000065177s"
      },
      {
       "percentile": 0.9375,
       "count": "1406",
       "duration": "0.000065747s"
      },
      {
       "percentile": 0.94375,
       "count": "1415",
       "duration": "0.000066103s"
      },
      {
       "percentile": 0.95,
       "count": "1425",
       "duration": "0.000066291s"
      },
      {
       "percentile": 0.95625,
       "count": "1434",
       "duration": "0.000066507s"
      },
      {
       "percentile": 0.9625,
       "count": "1443",
       "duration": "0.000066779s"
      },
      {
       "percentile": 0.96875,
       "count": "1453",
       "duration": "0.000067363s"
      },
      {
       "percentile": 0.971875,
       "count": "1457",
       "duration": "0.000067671s"
      },
      {
       "percentile": 0.975,
       "count": "1462",
       "duration": "0.000067791s"
      },
      {
       "percentile": 0.978125,
       "count": "1467",
       "duration": "0.000068071s"
      },
      {
       "percentile": 0.98125,
       "count": "1471",
       "duration": "0.000068739s"
      },
      {
       "percentile": 0.984375,
       "count": "1476",
       "duration": "0.000072099s"
      },
      {
       "percentile": 0.9859375,
       "count": "1478",
       "duration": "0.000075695s"
      },
      {
       "percentile": 0.9875,
       "count": "1481",
       "duration": "0.000077263s"
      },
      {
       "percentile": 0.9890625,
       "count": "1483",
       "duration": "0.000078827s"
      },
      {
       "percentile": 0.990625,
       "count": "1485",
       "duration": "0.000081407s"
      },
      {
       "percentile": 0.9921875,
       "count": "1488",
       "duration": "0.000083627s"
      },
      {
       "percentile": 0.99296875,
       "count": "1489",
       "duration": "0.000089707s"
      },
      {
       "percentile": 0.99375,
       "count": "1490",
       "duration": "0.000089991s"
      },
      {
       "percentile": 0.99453125,
       "count": "1491",
       "duration": "0.000090807s"
      },
      {
       "percentile": 0.9953125,
       "count": "1492",
       "duration": "0.000094227s"
      },
      {
       "percentile": 0.99609375,
       "count": "1494",
       "duration": "0.000115939s"
      },
      {
       "percentile": 0.996484375,
       "count": "1494",
       "duration": "0.000115939s"
      },
      {
       "percentile": 0.996875,
       "count": "1495",
       "duration": "0.000126875s"
      },
      {
       "percentile": 0.997265625,
       "count": "1495",
       "duration": "0.000126875s"
      },
      {
       "percentile": 0.99765625,
       "count": "1496",
       "duration": "0.000158511s"
      },
      {
       "percentile": 0.998046875,
       "count": "1497",
       "duration": "0.000174215s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1497",
       "duration": "0.000174215s"
      },
      {
       "percentile": 0.9984375,
       "count": "1497",
       "duration": "0.000174215s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1497",
       "duration": "0.000174215s"
      },
      {
       "percentile": 0.998828125,
       "count": "1498",
       "duration": "0.000216615s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1498",
       "duration": "0.000216615s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1498",
       "duration": "0.000216615s"
      },
      {
       "percentile": 0.99921875,
       "count": "1498",
       "duration": "0.000216615s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1498",
       "duration": "0.000216615s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1499",
       "duration": "0.000222767s"
      },
      {
       "percentile": 1,
       "count": "1499",
       "duration": "0.000222767s"
      }
     ],
     "mean": "0.000064431s",
     "pstdev": "0.000007544s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "1509"
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
     "value": "245967"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "90540"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "1509"
    }
   ],
   "execution_duration": "15.000000414s"
  },
  {
   "name": "worker_6",
   "statistics": [
    {
     "count": "1499",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000001740s"
      },
      {
       "percentile": 0.1,
       "count": "153",
       "duration": "0.000001879s"
      },
      {
       "percentile": 0.2,
       "count": "301",
       "duration": "0.000001913s"
      },
      {
       "percentile": 0.3,
       "count": "455",
       "duration": "0.000001937s"
      },
      {
       "percentile": 0.4,
       "count": "601",
       "duration": "0.000001958s"
      },
      {
       "percentile": 0.5,
       "count": "754",
       "duration": "0.000001979s"
      },
      {
       "percentile": 0.55,
       "count": "835",
       "duration": "0.000001989s"
      },
      {
       "percentile": 0.6,
       "count": "906",
       "duration": "0.000002s"
      },
      {
       "percentile": 0.65,
       "count": "975",
       "duration": "0.000002011s"
      },
      {
       "percentile": 0.7,
       "count": "1057",
       "duration": "0.000002025s"
      },
      {
       "percentile": 0.75,
       "count": "1126",
       "duration": "0.000002040s"
      },
      {
       "percentile": 0.775,
       "count": "1171",
       "duration": "0.000002050s"
      },
      {
       "percentile": 0.8,
       "count": "1200",
       "duration": "0.000002058s"
      },
      {
       "percentile": 0.825,
       "count": "1241",
       "duration": "0.000002070s"
      },
      {
       "percentile": 0.85,
       "count": "1278",
       "duration": "0.000002081s"
      },
      {
       "percentile": 0.875,
       "count": "1315",
       "duration": "0.000002099s"
      },
      {
       "percentile": 0.8875,
       "count": "1331",
       "duration": "0.000002107s"
      },
      {
       "percentile": 0.9,
       "count": "1350",
       "duration": "0.000002118s"
      },
      {
       "percentile": 0.9125,
       "count": "1370",
       "duration": "0.000002125s"
      },
      {
       "percentile": 0.925,
       "count": "1387",
       "duration": "0.000002137s"
      },
      {
       "percentile": 0.9375,
       "count": "1407",
       "duration": "0.000002153s"
      },
      {
       "percentile": 0.94375,
       "count": "1418",
       "duration": "0.000002158s"
      },
      {
       "percentile": 0.95,
       "count": "1426",
       "duration": "0.000002165s"
      },
      {
       "percentile": 0.95625,
       "count": "1435",
       "duration": "0.000002179s"
      },
      {
       "percentile": 0.9625,
       "count": "1443",
       "duration": "0.000002190s"
      },
      {
       "percentile": 0.96875,
       "count": "1454",
       "duration": "0.000002196s"
      },
      {
       "percentile": 0.971875,
       "count": "1457",
       "duration": "0.000002203s"
      },
      {
       "percentile": 0.975,
       "count": "1462",
       "duration": "0.000002220s"
      },
      {
       "percentile": 0.978125,
       "count": "1467",
       "duration": "0.000002224s"
      },
      {
       "percentile": 0.98125,
       "count": "1472",
       "duration": "0.000002235s"
      },
      {
       "percentile": 0.984375,
       "count": "1476",
       "duration": "0.000002252s"
      },
      {
       "percentile": 0.9859375,
       "count": "1478",
       "duration": "0.000002254s"
      },
      {
       "percentile": 0.9875,
       "count": "1481",
       "duration": "0.000002275s"
      },
      {
       "percentile": 0.9890625,
       "count": "1483",
       "duration": "0.000002334s"
      },
      {
       "percentile": 0.990625,
       "count": "1485",
       "duration": "0.000002339s"
      },
      {
       "percentile": 0.9921875,
       "count": "1488",
       "duration": "0.000002380s"
      },
      {
       "percentile": 0.99296875,
       "count": "1489",
       "duration": "0.000002385s"
      },
      {
       "percentile": 0.99375,
       "count": "1490",
       "duration": "0.000002388s"
      },
      {
       "percentile": 0.99453125,
       "count": "1491",
       "duration": "0.000002391s"
      },
      {
       "percentile": 0.9953125,
       "count": "1492",
       "duration": "0.000002395s"
      },
      {
       "percentile": 0.99609375,
       "count": "1494",
       "duration": "0.000002456s"
      },
      {
       "percentile": 0.996484375,
       "count": "1494",
       "duration": "0.000002456s"
      },
      {
       "percentile": 0.996875,
       "count": "1495",
       "duration": "0.000002557s"
      },
      {
       "percentile": 0.997265625,
       "count": "1495",
       "duration": "0.000002557s"
      },
      {
       "percentile": 0.99765625,
       "count": "1496",
       "duration": "0.000002754s"
      },
      {
       "percentile": 0.998046875,
       "count": "1497",
       "duration": "0.000002793s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1497",
       "duration": "0.000002793s"
      },
      {
       "percentile": 0.9984375,
       "count": "1497",
       "duration": "0.000002793s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1497",
       "duration": "0.000002793s"
      },
      {
       "percentile": 0.998828125,
       "count": "1498",
       "duration": "0.000002951s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1498",
       "duration": "0.000002951s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1498",
       "duration": "0.000002951s"
      },
      {
       "percentile": 0.99921875,
       "count": "1498",
       "duration": "0.000002951s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1498",
       "duration": "0.000002951s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1499",
       "duration": "0.000006880s"
      },
      {
       "percentile": 1,
       "count": "1499",
       "duration": "0.000006880s"
      }
     ],
     "mean": "0.000001995s",
     "pstdev": "0.000000163s"
    },
    {
     "count": "1499",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000057495s"
      },
      {
       "percentile": 0.1,
       "count": "150",
       "duration": "0.000058813s"
      },
      {
       "percentile": 0.2,
       "count": "300",
       "duration": "0.000059113s"
      },
      {
       "percentile": 0.3,
       "count": "453",
       "duration": "0.000059385s"
      },
      {
       "percentile": 0.4,
       "count": "602",
       "duration": "0.000059639s"
      },
      {
       "percentile": 0.5,
       "count": "750",
       "duration": "0.000059859s"
      },
      {
       "percentile": 0.55,
       "count": "827",
       "duration": "0.000059993s"
      },
      {
       "percentile": 0.6,
       "count": "901",
       "duration": "0.000060089s"
      },
      {
       "percentile": 0.65,
       "count": "975",
       "duration": "0.000060217s"
      },
      {
       "percentile": 0.7,
       "count": "1052",
       "duration": "0.000060357s"
      },
      {
       "percentile": 0.75,
       "count": "1125",
       "duration": "0.000060525s"
      },
      {
       "percentile": 0.775,
       "count": "1162",
       "duration": "0.000060643s"
      },
      {
       "percentile": 0.8,
       "count": "1200",
       "duration": "0.000060783s"
      },
      {
       "percentile": 0.825,
       "count": "1239",
       "duration": "0.000060879s"
      },
      {
       "percentile": 0.85,
       "count": "1275",
       "duration": "0.000061041s"
      },
      {
       "percentile": 0.875,
       "count": "1312",
       "duration": "0.000061299s"
      },
      {
       "percentile": 0.8875,
       "count": "1331",
       "duration": "0.000061433s"
      },
      {
       "percentile": 0.9,
       "count": "1350",
       "duration": "0.000061545s"
      },
      {
       "percentile": 0.9125,
       "count": "1368",
       "duration": "0.000061719s"
      },
      {
       "percentile": 0.925,
       "count": "1387",
       "duration": "0.000061957s"
      },
      {
       "percentile": 0.9375,
       "count": "1407",
       "duration": "0.000062177s"
      },
      {
       "percentile": 0.94375,
       "count": "1415",
       "duration": "0.000062409s"
      },
      {
       "percentile": 0.95,
       "count": "1425",
       "duration": "0.000062615s"
      },
      {
       "percentile": 0.95625,
       "count": "1434",
       "duration": "0.000062963s"
      },
      {
       "percentile": 0.9625,
       "count": "1443",
       "duration": "0.000063141s"
      },
      {
       "percentile": 0.96875,
       "count": "1453",
       "duration": "0.000063801s"
      },
      {
       "percentile": 0.971875,
       "count": "1457",
       "duration": "0.000064063s"
      },
      {
       "percentile": 0.975,
       "count": "1462",
       "duration": "0.000064577s"
      },
      {
       "percentile": 0.978125,
       "count": "1467",
       "duration": "0.000065907s"
      },
      {
       "percentile": 0.98125,
       "count": "1471",
       "duration": "0.000066527s"
      },
      {
       "percentile": 0.984375,
       "count": "1476",
       "duration": "0.000068359s"
      },
      {
       "percentile": 0.9859375,
       "count": "1478",
       "duration": "0.000068835s"
      },
      {
       "percentile": 0.9875,
       "count": "1481",
       "duration": "0.000072091s"
      },
      {
       "percentile": 0.9890625,
       "count": "1483",
       "duration": "0.000073347s"
      },
      {
       "percentile": 0.990625,
       "count": "1485",
       "duration": "0.000077751s"
      },
      {
       "percentile": 0.9921875,
       "count": "1488",
       "duration": "0.000078591s"
      },
      {
       "percentile": 0.99296875,
       "count": "1489",
       "duration": "0.000079371s"
      },
      {
       "percentile": 0.99375,
       "count": "1490",
       "duration": "0.000079539s"
      },
      {
       "percentile": 0.99453125,
       "count": "1491",
       "duration": "0.000080291s"
      },
      {
       "percentile": 0.9953125,
       "count": "1492",
       "duration": "0.000080427s"
      },
      {
       "percentile": 0.99609375,
       "count": "1494",
       "duration": "0.000087087s"
      },
      {
       "percentile": 0.996484375,
       "count": "1494",
       "duration": "0.000087087s"
      },
      {
       "percentile": 0.996875,
       "count": "1495",
       "duration": "0.000087987s"
      },
      {
       "percentile": 0.997265625,
       "count": "1495",
       "duration": "0.000087987s"
      },
      {
       "percentile": 0.99765625,
       "count": "1496",
       "duration": "0.000090287s"
      },
      {
       "percentile": 0.998046875,
       "count": "1497",
       "duration": "0.000092563s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1497",
       "duration": "0.000092563s"
      },
      {
       "percentile": 0.9984375,
       "count": "1497",
       "duration": "0.000092563s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1497",
       "duration": "0.000092563s"
      },
      {
       "percentile": 0.998828125,
       "count": "1498",
       "duration": "0.000101615s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1498",
       "duration": "0.000101615s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1498",
       "duration": "0.000101615s"
      },
      {
       "percentile": 0.99921875,
       "count": "1498",
       "duration": "0.000101615s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1498",
       "duration": "0.000101615s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1499",
       "duration": "0.000185247s"
      },
      {
       "percentile": 1,
       "count": "1499",
       "duration": "0.000185247s"
      }
     ],
     "mean": "0.000060399s",
     "pstdev": "0.000004275s"
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
     "count": "1499",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000061495s"
      },
      {
       "percentile": 0.1,
       "count": "150",
       "duration": "0.000062979s"
      },
      {
       "percentile": 0.2,
       "count": "300",
       "duration": "0.000063289s"
      },
      {
       "percentile": 0.3,
       "count": "452",
       "duration": "0.000063537s"
      },
      {
       "percentile": 0.4,
       "count": "600",
       "duration": "0.000063769s"
      },
      {
       "percentile": 0.5,
       "count": "751",
       "duration": "0.000064043s"
      },
      {
       "percentile": 0.55,
       "count": "826",
       "duration": "0.000064157s"
      },
      {
       "percentile": 0.6,
       "count": "902",
       "duration": "0.000064263s"
      },
      {
       "percentile": 0.65,
       "count": "976",
       "duration": "0.000064419s"
      },
      {
       "percentile": 0.7,
       "count": "1051",
       "duration": "0.000064573s"
      },
      {
       "percentile": 0.75,
       "count": "1125",
       "duration": "0.000064751s"
      },
      {
       "percentile": 0.775,
       "count": "1163",
       "duration": "0.000064893s"
      },
      {
       "percentile": 0.8,
       "count": "1200",
       "duration": "0.000065023s"
      },
      {
       "percentile": 0.825,
       "count": "1237",
       "duration": "0.000065195s"
      },
      {
       "percentile": 0.85,
       "count": "1275",
       "duration": "0.000065403s"
      },
      {
       "percentile": 0.875,
       "count": "1313",
       "duration": "0.000065655s"
      },
      {
       "percentile": 0.8875,
       "count": "1334",
       "duration": "0.000065779s"
      },
      {
       "percentile": 0.9,
       "count": "1350",
       "duration": "0.000065991s"
      },
      {
       "percentile": 0.9125,
       "count": "1368",
       "duration": "0.000066151s"
      },
      {
       "percentile": 0.925,
       "count": "1387",
       "duration": "0.000066371s"
      },
      {
       "percentile": 0.9375,
       "count": "1406",
       "duration": "0.000066779s"
      },
      {
       "percentile": 0.94375,
       "count": "1415",
       "duration": "0.000067011s"
      },
      {
       "percentile": 0.95,
       "count": "1426",
       "duration": "0.000067171s"
      },
      {
       "percentile": 0.95625,
       "count": "1434",
       "duration": "0.000067443s"
      },
      {
       "percentile": 0.9625,
       "count": "1444",
       "duration": "0.000068019s"
      },
      {
       "percentile": 0.96875,
       "count": "1453",
       "duration": "0.000068407s"
      },
      {
       "percentile": 0.971875,
       "count": "1457",
       "duration": "0.000068799s"
      },
      {
       "percentile": 0.975,
       "count": "1462",
       "duration": "0.000069255s"
      },
      {
       "percentile": 0.978125,
       "count": "1467",
       "duration": "0.000070135s"
      },
      {
       "percentile": 0.98125,
       "count": "1471",
       "duration": "0.000070879s"
      },
      {
       "percentile": 0.984375,
       "count": "1476",
       "duration": "0.000072587s"
      },
      {
       "percentile": 0.9859375,
       "count": "1478",
       "duration": "0.000072875s"
      },
      {
       "percentile": 0.9875,
       "count": "1481",
       "duration": "0.000076219s"
      },
      {
       "percentile": 0.9890625,
       "count": "1483",
       "duration": "0.000078167s"
      },
      {
       "percentile": 0.990625,
       "count": "1485",
       "duration": "0.000082027s"
      },
      {
       "percentile": 0.9921875,
       "count": "1488",
       "duration": "0.000082875s"
      },
      {
       "percentile": 0.99296875,
       "count": "1489",
       "duration": "0.000083515s"
      },
      {
       "percentile": 0.99375,
       "count": "1490",
       "duration": "0.000083915s"
      },
      {
       "percentile": 0.99453125,
       "count": "1491",
       "duration": "0.000084547s"
      },
      {
       "percentile": 0.9953125,
       "count": "1492",
       "duration": "0.000087479s"
      },
      {
       "percentile": 0.99609375,
       "count": "1494",
       "duration": "0.000092039s"
      },
      {
       "percentile": 0.996484375,
       "count": "1494",
       "duration": "0.000092039s"
      },
      {
       "percentile": 0.996875,
       "count": "1495",
       "duration": "0.000094475s"
      },
      {
       "percentile": 0.997265625,
       "count": "1495",
       "duration": "0.000094475s"
      },
      {
       "percentile": 0.99765625,
       "count": "1496",
       "duration": "0.000095739s"
      },
      {
       "percentile": 0.998046875,
       "count": "1497",
       "duration": "0.000096847s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1497",
       "duration": "0.000096847s"
      },
      {
       "percentile": 0.9984375,
       "count": "1497",
       "duration": "0.000096847s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1497",
       "duration": "0.000096847s"
      },
      {
       "percentile": 0.998828125,
       "count": "1498",
       "duration": "0.000105859s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1498",
       "duration": "0.000105859s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1498",
       "duration": "0.000105859s"
      },
      {
       "percentile": 0.99921875,
       "count": "1498",
       "duration": "0.000105859s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1498",
       "duration": "0.000105859s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1499",
       "duration": "0.000189575s"
      },
      {
       "percentile": 1,
       "count": "1499",
       "duration": "0.000189575s"
      }
     ],
     "mean": "0.000064625s",
     "pstdev": "0.000004355s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "1509"
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
     "value": "245967"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "90540"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "1509"
    }
   ],
   "execution_duration": "15.000000418s"
  },
  {
   "name": "worker_7",
   "statistics": [
    {
     "count": "1499",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000001827s"
      },
      {
       "percentile": 0.1,
       "count": "153",
       "duration": "0.000001942s"
      },
      {
       "percentile": 0.2,
       "count": "307",
       "duration": "0.000001970s"
      },
      {
       "percentile": 0.3,
       "count": "451",
       "duration": "0.000001990s"
      },
      {
       "percentile": 0.4,
       "count": "603",
       "duration": "0.000002008s"
      },
      {
       "percentile": 0.5,
       "count": "755",
       "duration": "0.000002026s"
      },
      {
       "percentile": 0.55,
       "count": "829",
       "duration": "0.000002036s"
      },
      {
       "percentile": 0.6,
       "count": "907",
       "duration": "0.000002048s"
      },
      {
       "percentile": 0.65,
       "count": "979",
       "duration": "0.000002061s"
      },
      {
       "percentile": 0.7,
       "count": "1054",
       "duration": "0.000002071s"
      },
      {
       "percentile": 0.75,
       "count": "1131",
       "duration": "0.000002090s"
      },
      {
       "percentile": 0.775,
       "count": "1166",
       "duration": "0.000002099s"
      },
      {
       "percentile": 0.8,
       "count": "1204",
       "duration": "0.000002109s"
      },
      {
       "percentile": 0.825,
       "count": "1242",
       "duration": "0.000002118s"
      },
      {
       "percentile": 0.85,
       "count": "1279",
       "duration": "0.000002132s"
      },
      {
       "percentile": 0.875,
       "count": "1312",
       "duration": "0.000002147s"
      },
      {
       "percentile": 0.8875,
       "count": "1333",
       "duration": "0.000002156s"
      },
      {
       "percentile": 0.9,
       "count": "1354",
       "duration": "0.000002165s"
      },
      {
       "percentile": 0.9125,
       "count": "1370",
       "duration": "0.000002174s"
      },
      {
       "percentile": 0.925,
       "count": "1391",
       "duration": "0.000002186s"
      },
      {
       "percentile": 0.9375,
       "count": "1407",
       "duration": "0.000002196s"
      },
      {
       "percentile": 0.94375,
       "count": "1415",
       "duration": "0.000002205s"
      },
      {
       "percentile": 0.95,
       "count": "1425",
       "duration": "0.000002212s"
      },
      {
       "percentile": 0.95625,
       "count": "1434",
       "duration": "0.000002229s"
      },
      {
       "percentile": 0.9625,
       "count": "1444",
       "duration": "0.000002240s"
      },
      {
       "percentile": 0.96875,
       "count": "1455",
       "duration": "0.000002256s"
      },
      {
       "percentile": 0.971875,
       "count": "1457",
       "duration": "0.000002259s"
      },
      {
       "percentile": 0.975,
       "count": "1462",
       "duration": "0.000002271s"
      },
      {
       "percentile": 0.978125,
       "count": "1467",
       "duration": "0.000002275s"
      },
      {
       "percentile": 0.98125,
       "count": "1471",
       "duration": "0.000002280s"
      },
      {
       "percentile": 0.984375,
       "count": "1477",
       "duration": "0.000002294s"
      },
      {
       "percentile": 0.9859375,
       "count": "1478",
       "duration": "0.000002296s"
      },
      {
       "percentile": 0.9875,
       "count": "1481",
       "duration": "0.000002315s"
      },
      {
       "percentile": 0.9890625,
       "count": "1483",
       "duration": "0.000002320s"
      },
      {
       "percentile": 0.990625,
       "count": "1485",
       "duration": "0.000002334s"
      },
      {
       "percentile": 0.9921875,
       "count": "1488",
       "duration": "0.000002397s"
      },
      {
       "percentile": 0.99296875,
       "count": "1489",
       "duration": "0.000002405s"
      },
      {
       "percentile": 0.99375,
       "count": "1490",
       "duration": "0.000002407s"
      },
      {
       "percentile": 0.99453125,
       "count": "1491",
       "duration": "0.000002456s"
      },
      {
       "percentile": 0.9953125,
       "count": "1492",
       "duration": "0.000002468s"
      },
      {
       "percentile": 0.99609375,
       "count": "1494",
       "duration": "0.000002575s"
      },
      {
       "percentile": 0.996484375,
       "count": "1494",
       "duration": "0.000002575s"
      },
      {
       "percentile": 0.996875,
       "count": "1495",
       "duration": "0.000002591s"
      },
      {
       "percentile": 0.997265625,
       "count": "1495",
       "duration": "0.000002591s"
      },
      {
       "percentile": 0.99765625,
       "count": "1496",
       "duration": "0.000002678s"
      },
      {
       "percentile": 0.998046875,
       "count": "1497",
       "duration": "0.000002873s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1497",
       "duration": "0.000002873s"
      },
      {
       "percentile": 0.9984375,
       "count": "1497",
       "duration": "0.000002873s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1497",
       "duration": "0.000002873s"
      },
      {
       "percentile": 0.998828125,
       "count": "1498",
       "duration": "0.000005134s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1498",
       "duration": "0.000005134s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1498",
       "duration": "0.000005134s"
      },
      {
       "percentile": 0.99921875,
       "count": "1498",
       "duration": "0.000005134s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1498",
       "duration": "0.000005134s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1499",
       "duration": "0.000008100s"
      },
      {
       "percentile": 1,
       "count": "1499",
       "duration": "0.000008100s"
      }
     ],
     "mean": "0.000002049s",
     "pstdev": "0.000000200s"
    },
    {
     "count": "1499",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000080575s"
      },
      {
       "percentile": 0.1,
       "count": "150",
       "duration": "0.000082099s"
      },
      {
       "percentile": 0.2,
       "count": "302",
       "duration": "0.000082519s"
      },
      {
       "percentile": 0.3,
       "count": "452",
       "duration": "0.000082799s"
      },
      {
       "percentile": 0.4,
       "count": "600",
       "duration": "0.000083011s"
      },
      {
       "percentile": 0.5,
       "count": "751",
       "duration": "0.000083231s"
      },
      {
       "percentile": 0.55,
       "count": "825",
       "duration": "0.000083351s"
      },
      {
       "percentile": 0.6,
       "count": "901",
       "duration": "0.000083459s"
      },
      {
       "percentile": 0.65,
       "count": "976",
       "duration": "0.000083591s"
      },
      {
       "percentile": 0.7,
       "count": "1050",
       "duration": "0.000083715s"
      },
      {
       "percentile": 0.75,
       "count": "1126",
       "duration": "0.000083875s"
      },
      {
       "percentile": 0.775,
       "count": "1162",
       "duration": "0.000083983s"
      },
      {
       "percentile": 0.8,
       "count": "1200",
       "duration": "0.000084079s"
      },
      {
       "percentile": 0.825,
       "count": "1237",
       "duration": "0.000084199s"
      },
      {
       "percentile": 0.85,
       "count": "1277",
       "duration": "0.000084391s"
      },
      {
       "percentile": 0.875,
       "count": "1312",
       "duration": "0.000084595s"
      },
      {
       "percentile": 0.8875,
       "count": "1332",
       "duration": "0.000084687s"
      },
      {
       "percentile": 0.9,
       "count": "1350",
       "duration": "0.000084819s"
      },
      {
       "percentile": 0.9125,
       "count": "1369",
       "duration": "0.000085023s"
      },
      {
       "percentile": 0.925,
       "count": "1387",
       "duration": "0.000085179s"
      },
      {
       "percentile": 0.9375,
       "count": "1406",
       "duration": "0.000085735s"
      },
      {
       "percentile": 0.94375,
       "count": "1415",
       "duration": "0.000086079s"
      },
      {
       "percentile": 0.95,
       "count": "1425",
       "duration": "0.000086471s"
      },
      {
       "percentile": 0.95625,
       "count": "1434",
       "duration": "0.000086963s"
      },
      {
       "percentile": 0.9625,
       "count": "1443",
       "duration": "0.000087603s"
      },
      {
       "percentile": 0.96875,
       "count": "1453",
       "duration": "0.000088563s"
      },
      {
       "percentile": 0.971875,
       "count": "1457",
       "duration": "0.000089015s"
      },
      {
       "percentile": 0.975,
       "count": "1462",
       "duration": "0.000089483s"
      },
      {
       "percentile": 0.978125,
       "count": "1467",
       "duration": "0.000090951s"
      },
      {
       "percentile": 0.98125,
       "count": "1471",
       "duration": "0.000091915s"
      },
      {
       "percentile": 0.984375,
       "count": "1476",
       "duration": "0.000093747s"
      },
      {
       "percentile": 0.9859375,
       "count": "1478",
       "duration": "0.000095363s"
      },
      {
       "percentile": 0.9875,
       "count": "1481",
       "duration": "0.000098875s"
      },
      {
       "percentile": 0.9890625,
       "count": "1483",
       "duration": "0.000100275s"
      },
      {
       "percentile": 0.990625,
       "count": "1485",
       "duration": "0.000102963s"
      },
      {
       "percentile": 0.9921875,
       "count": "1488",
       "duration": "0.000105103s"
      },
      {
       "percentile": 0.99296875,
       "count": "1489",
       "duration": "0.000107083s"
      },
      {
       "percentile": 0.99375,
       "count": "1490",
       "duration": "0.000107151s"
      },
      {
       "percentile": 0.99453125,
       "count": "1491",
       "duration": "0.000107219s"
      },
      {
       "percentile": 0.9953125,
       "count": "1492",
       "duration": "0.000114615s"
      },
      {
       "percentile": 0.99609375,
       "count": "1494",
       "duration": "0.000130055s"
      },
      {
       "percentile": 0.996484375,
       "count": "1494",
       "duration": "0.000130055s"
      },
      {
       "percentile": 0.996875,
       "count": "1495",
       "duration": "0.000156975s"
      },
      {
       "percentile": 0.997265625,
       "count": "1495",
       "duration": "0.000156975s"
      },
      {
       "percentile": 0.99765625,
       "count": "1496",
       "duration": "0.000169263s"
      },
      {
       "percentile": 0.998046875,
       "count": "1497",
       "duration": "0.000173647s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1497",
       "duration": "0.000173647s"
      },
      {
       "percentile": 0.9984375,
       "count": "1497",
       "duration": "0.000173647s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1497",
       "duration": "0.000173647s"
      },
      {
       "percentile": 0.998828125,
       "count": "1498",
       "duration": "0.000214887s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1498",
       "duration": "0.000214887s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1498",
       "duration": "0.000214887s"
      },
      {
       "percentile": 0.99921875,
       "count": "1498",
       "duration": "0.000214887s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1498",
       "duration": "0.000214887s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1499",
       "duration": "0.000221855s"
      },
      {
       "percentile": 1,
       "count": "1499",
       "duration": "0.000221855s"
      }
     ],
     "mean": "0.000084023s",
     "pstdev": "0.000006832s"
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
     "count": "1499",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000085079s"
      },
      {
       "percentile": 0.1,
       "count": "150",
       "duration": "0.000086371s"
      },
      {
       "percentile": 0.2,
       "count": "300",
       "duration": "0.000086795s"
      },
      {
       "percentile": 0.3,
       "count": "452",
       "duration": "0.000087071s"
      },
      {
       "percentile": 0.4,
       "count": "602",
       "duration": "0.000087299s"
      },
      {
       "percentile": 0.5,
       "count": "752",
       "duration": "0.000087531s"
      },
      {
       "percentile": 0.55,
       "count": "825",
       "duration": "0.000087659s"
      },
      {
       "percentile": 0.6,
       "count": "901",
       "duration": "0.000087775s"
      },
      {
       "percentile": 0.65,
       "count": "976",
       "duration": "0.000087915s"
      },
      {
       "percentile": 0.7,
       "count": "1050",
       "duration": "0.000088075s"
      },
      {
       "percentile": 0.75,
       "count": "1126",
       "duration": "0.000088255s"
      },
      {
       "percentile": 0.775,
       "count": "1162",
       "duration": "0.000088351s"
      },
      {
       "percentile": 0.8,
       "count": "1200",
       "duration": "0.000088451s"
      },
      {
       "percentile": 0.825,
       "count": "1238",
       "duration": "0.000088607s"
      },
      {
       "percentile": 0.85,
       "count": "1276",
       "duration": "0.000088839s"
      },
      {
       "percentile": 0.875,
       "count": "1314",
       "duration": "0.000089019s"
      },
      {
       "percentile": 0.8875,
       "count": "1331",
       "duration": "0.000089123s"
      },
      {
       "percentile": 0.9,
       "count": "1350",
       "duration": "0.000089303s"
      },
      {
       "percentile": 0.9125,
       "count": "1368",
       "duration": "0.000089487s"
      },
      {
       "percentile": 0.925,
       "count": "1387",
       "duration": "0.000089791s"
      },
      {
       "percentile": 0.9375,
       "count": "1406",
       "duration": "0.000090295s"
      },
      {
       "percentile": 0.94375,
       "count": "1415",
       "duration": "0.000090751s"
      },
      {
       "percentile": 0.95,
       "count": "1425",
       "duration": "0.000090979s"
      },
      {
       "percentile": 0.95625,
       "count": "1434",
       "duration": "0.000091367s"
      },
      {
       "percentile": 0.9625,
       "count": "1443",
       "duration": "0.000092199s"
      },
      {
       "percentile": 0.96875,
       "count": "1453",
       "duration": "0.000093647s"
      },
      {
       "percentile": 0.971875,
       "count": "1457",
       "duration": "0.000093735s"
      },
      {
       "percentile": 0.975,
       "count": "1462",
       "duration": "0.000094567s"
      },
      {
       "percentile": 0.978125,
       "count": "1467",
       "duration": "0.000095463s"
      },
      {
       "percentile": 0.98125,
       "count": "1471",
       "duration": "0.000096203s"
      },
      {
       "percentile": 0.984375,
       "count": "1476",
       "duration": "0.000097967s"
      },
      {
       "percentile": 0.9859375,
       "count": "1478",
       "duration": "0.000100315s"
      },
      {
       "percentile": 0.9875,
       "count": "1481",
       "duration": "0.000103363s"
      },
      {
       "percentile": 0.9890625,
       "count": "1483",
       "duration": "0.000104679s"
      },
      {
       "percentile": 0.990625,
       "count": "1485",
       "duration": "0.000107275s"
      },
      {
       "percentile": 0.9921875,
       "count": "1488",
       "duration": "0.000110055s"
      },
      {
       "percentile": 0.99296875,
       "count": "1489",
       "duration": "0.000111519s"
      },
      {
       "percentile": 0.99375,
       "count": "1490",
       "duration": "0.000111675s"
      },
      {
       "percentile": 0.99453125,
       "count": "1491",
       "duration": "0.000119019s"
      },
      {
       "percentile": 0.9953125,
       "count": "1492",
       "duration": "0.000124003s"
      },
      {
       "percentile": 0.99609375,
       "count": "1494",
       "duration": "0.000134327s"
      },
      {
       "percentile": 0.996484375,
       "count": "1494",
       "duration": "0.000134327s"
      },
      {
       "percentile": 0.996875,
       "count": "1495",
       "duration": "0.000161367s"
      },
      {
       "percentile": 0.997265625,
       "count": "1495",
       "duration": "0.000161367s"
      },
      {
       "percentile": 0.99765625,
       "count": "1496",
       "duration": "0.000173711s"
      },
      {
       "percentile": 0.998046875,
       "count": "1497",
       "duration": "0.000177951s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1497",
       "duration": "0.000177951s"
      },
      {
       "percentile": 0.9984375,
       "count": "1497",
       "duration": "0.000177951s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1497",
       "duration": "0.000177951s"
      },
      {
       "percentile": 0.998828125,
       "count": "1498",
       "duration": "0.000219415s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1498",
       "duration": "0.000219415s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1498",
       "duration": "0.000219415s"
      },
      {
       "percentile": 0.99921875,
       "count": "1498",
       "duration": "0.000219415s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1498",
       "duration": "0.000219415s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1499",
       "duration": "0.000226447s"
      },
      {
       "percentile": 1,
       "count": "1499",
       "duration": "0.000226447s"
      }
     ],
     "mean": "0.000088378s",
     "pstdev": "0.000006894s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "1509"
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
     "value": "245967"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "90540"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "1509"
    }
   ],
   "execution_duration": "15.000000868s"
  },
  {
   "name": "global",
   "statistics": [
    {
     "count": "11992",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000001738s"
      },
      {
       "percentile": 0.1,
       "count": "1241",
       "duration": "0.000001935s"
      },
      {
       "percentile": 0.2,
       "count": "2425",
       "duration": "0.000001973s"
      },
      {
       "percentile": 0.3,
       "count": "3667",
       "duration": "0.000002003s"
      },
      {
       "percentile": 0.4,
       "count": "4828",
       "duration": "0.000002031s"
      },
      {
       "percentile": 0.5,
       "count": "6027",
       "duration": "0.000002062s"
      },
      {
       "percentile": 0.55,
       "count": "6641",
       "duration": "0.000002078s"
      },
      {
       "percentile": 0.6,
       "count": "7221",
       "duration": "0.000002095s"
      },
      {
       "percentile": 0.65,
       "count": "7813",
       "duration": "0.000002113s"
      },
      {
       "percentile": 0.7,
       "count": "8398",
       "duration": "0.000002132s"
      },
      {
       "percentile": 0.75,
       "count": "9012",
       "duration": "0.000002154s"
      },
      {
       "percentile": 0.775,
       "count": "9334",
       "duration": "0.000002165s"
      },
      {
       "percentile": 0.8,
       "count": "9603",
       "duration": "0.000002177s"
      },
      {
       "percentile": 0.825,
       "count": "9930",
       "duration": "0.000002191s"
      },
      {
       "percentile": 0.85,
       "count": "10195",
       "duration": "0.000002205s"
      },
      {
       "percentile": 0.875,
       "count": "10501",
       "duration": "0.000002222s"
      },
      {
       "percentile": 0.8875,
       "count": "10643",
       "duration": "0.000002231s"
      },
      {
       "percentile": 0.9,
       "count": "10801",
       "duration": "0.000002242s"
      },
      {
       "percentile": 0.9125,
       "count": "10957",
       "duration": "0.000002254s"
      },
      {
       "percentile": 0.925,
       "count": "11102",
       "duration": "0.000002266s"
      },
      {
       "percentile": 0.9375,
       "count": "11254",
       "duration": "0.000002280s"
      },
      {
       "percentile": 0.94375,
       "count": "11328",
       "duration": "0.000002289s"
      },
      {
       "percentile": 0.95,
       "count": "11397",
       "duration": "0.000002300s"
      },
      {
       "percentile": 0.95625,
       "count": "11475",
       "duration": "0.000002312s"
      },
      {
       "percentile": 0.9625,
       "count": "11544",
       "duration": "0.000002323s"
      },
      {
       "percentile": 0.96875,
       "count": "11621",
       "duration": "0.000002341s"
      },
      {
       "percentile": 0.971875,
       "count": "11655",
       "duration": "0.000002348s"
      },
      {
       "percentile": 0.975,
       "count": "11695",
       "duration": "0.000002360s"
      },
      {
       "percentile": 0.978125,
       "count": "11730",
       "duration": "0.000002372s"
      },
      {
       "percentile": 0.98125,
       "count": "11769",
       "duration": "0.000002387s"
      },
      {
       "percentile": 0.984375,
       "count": "11805",
       "duration": "0.000002397s"
      },
      {
       "percentile": 0.9859375,
       "count": "11824",
       "duration": "0.000002406s"
      },
      {
       "percentile": 0.9875,
       "count": "11845",
       "duration": "0.000002416s"
      },
      {
       "percentile": 0.9890625,
       "count": "11863",
       "duration": "0.000002425s"
      },
      {
       "percentile": 0.990625,
       "count": "11880",
       "duration": "0.000002436s"
      },
      {
       "percentile": 0.9921875,
       "count": "11900",
       "duration": "0.000002449s"
      },
      {
       "percentile": 0.99296875,
       "count": "11908",
       "duration": "0.000002456s"
      },
      {
       "percentile": 0.99375,
       "count": "11918",
       "duration": "0.000002473s"
      },
      {
       "percentile": 0.99453125,
       "count": "11927",
       "duration": "0.000002484s"
      },
      {
       "percentile": 0.9953125,
       "count": "11936",
       "duration": "0.000002506s"
      },
      {
       "percentile": 0.99609375,
       "count": "11946",
       "duration": "0.000002553s"
      },
      {
       "percentile": 0.996484375,
       "count": "11950",
       "duration": "0.000002562s"
      },
      {
       "percentile": 0.996875,
       "count": "11955",
       "duration": "0.000002588s"
      },
      {
       "percentile": 0.997265625,
       "count": "11960",
       "duration": "0.000002608s"
      },
      {
       "percentile": 0.99765625,
       "count": "11964",
       "duration": "0.000002626s"
      },
      {
       "percentile": 0.998046875,
       "count": "11969",
       "duration": "0.000002669s"
      },
      {
       "percentile": 0.9982421875,
       "count": "11971",
       "duration": "0.000002672s"
      },
      {
       "percentile": 0.9984375,
       "count": "11974",
       "duration": "0.000002754s"
      },
      {
       "percentile": 0.9986328125,
       "count": "11976",
       "duration": "0.000002834s"
      },
      {
       "percentile": 0.998828125,
       "count": "11978",
       "duration": "0.000002880s"
      },
      {
       "percentile": 0.9990234375,
       "count": "11981",
       "duration": "0.000003275s"
      },
      {
       "percentile": 0.99912109375,
       "count": "11982",
       "duration": "0.000003335s"
      },
      {
       "percentile": 0.99921875,
       "count": "11983",
       "duration": "0.000005134s"
      },
      {
       "percentile": 0.99931640625,
       "count": "11984",
       "duration": "0.000006842s"
      },
      {
       "percentile": 0.9994140625,
       "count": "11985",
       "duration": "0.000006880s"
      },
      {
       "percentile": 0.99951171875,
       "count": "11987",
       "duration": "0.000007184s"
      },
      {
       "percentile": 0.999560546875,
       "count": "11987",
       "duration": "0.000007184s"
      },
      {
       "percentile": 0.999609375,
       "count": "11988",
       "duration": "0.000007186s"
      },
      {
       "percentile": 0.999658203125,
       "count": "11988",
       "duration": "0.000007186s"
      },
      {
       "percentile": 0.99970703125,
       "count": "11989",
       "duration": "0.000007878s"
      },
      {
       "percentile": 0.999755859375,
       "count": "11990",
       "duration": "0.000008100s"
      },
      {
       "percentile": 0.9997802734375,
       "count": "11990",
       "duration": "0.000008100s"
      },
      {
       "percentile": 0.9998046875,
       "count": "11990",
       "duration": "0.000008100s"
      },
      {
       "percentile": 0.9998291015625,
       "count": "11990",
       "duration": "0.000008100s"
      },
      {
       "percentile": 0.999853515625,
       "count": "11991",
       "duration": "0.000012629s"
      },
      {
       "percentile": 0.9998779296875,
       "count": "11991",
       "duration": "0.000012629s"
      },
      {
       "percentile": 0.99989013671875,
       "count": "11991",
       "duration": "0.000012629s"
      },
      {
       "percentile": 0.99990234375,
       "count": "11991",
       "duration": "0.000012629s"
      },
      {
       "percentile": 0.99991455078125,
       "count": "11991",
       "duration": "0.000012629s"
      },
      {
       "percentile": 0.9999267578125,
       "count": "11992",
       "duration": "0.000024929s"
      },
      {
       "percentile": 1,
       "count": "11992",
       "duration": "0.000024929s"
      }
     ],
     "mean": "0.000002084s",
     "pstdev": "0.000000292s"
    },
    {
     "count": "11992",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000056611s"
      },
      {
       "percentile": 0.1,
       "count": "1203",
       "duration": "0.000058733s"
      },
      {
       "percentile": 0.2,
       "count": "2399",
       "duration": "0.000059153s"
      },
      {
       "percentile": 0.3,
       "count": "3600",
       "duration": "0.000059605s"
      },
      {
       "percentile": 0.4,
       "count": "4799",
       "duration": "0.000060223s"
      },
      {
       "percentile": 0.5,
       "count": "5999",
       "duration": "0.000074327s"
      },
      {
       "percentile": 0.55,
       "count": "6596",
       "duration": "0.000075527s"
      },
      {
       "percentile": 0.6,
       "count": "7199",
       "duration": "0.000076935s"
      },
      {
       "percentile": 0.65,
       "count": "7797",
       "duration": "0.000082015s"
      },
      {
       "percentile": 0.7,
       "count": "8397",
       "duration": "0.000082663s"
      },
      {
       "percentile": 0.75,
       "count": "8996",
       "duration": "0.000083207s"
      },
      {
       "percentile": 0.775,
       "count": "9295",
       "duration": "0.000083487s"
      },
      {
       "percentile": 0.8,
       "count": "9596",
       "duration": "0.000083787s"
      },
      {
       "percentile": 0.825,
       "count": "9896",
       "duration": "0.000084183s"
      },
      {
       "percentile": 0.85,
       "count": "10194",
       "duration": "0.000084911s"
      },
      {
       "percentile": 0.875,
       "count": "10494",
       "duration": "0.000085687s"
      },
      {
       "percentile": 0.8875,
       "count": "10646",
       "duration": "0.000086011s"
      },
      {
       "percentile": 0.9,
       "count": "10793",
       "duration": "0.000086283s"
      },
      {
       "percentile": 0.9125,
       "count": "10943",
       "duration": "0.000086527s"
      },
      {
       "percentile": 0.925,
       "count": "11094",
       "duration": "0.000086799s"
      },
      {
       "percentile": 0.9375,
       "count": "11243",
       "duration": "0.000087087s"
      },
      {
       "percentile": 0.94375,
       "count": "11319",
       "duration": "0.000087267s"
      },
      {
       "percentile": 0.95,
       "count": "11393",
       "duration": "0.000087467s"
      },
      {
       "percentile": 0.95625,
       "count": "11470",
       "duration": "0.000087655s"
      },
      {
       "percentile": 0.9625,
       "count": "11543",
       "duration": "0.000087959s"
      },
      {
       "percentile": 0.96875,
       "count": "11618",
       "duration": "0.000088427s"
      },
      {
       "percentile": 0.971875,
       "count": "11655",
       "duration": "0.000088767s"
      },
      {
       "percentile": 0.975,
       "count": "11693",
       "duration": "0.000089135s"
      },
      {
       "percentile": 0.978125,
       "count": "11730",
       "duration": "0.000089723s"
      },
      {
       "percentile": 0.98125,
       "count": "11768",
       "duration": "0.000090755s"
      },
      {
       "percentile": 0.984375,
       "count": "11805",
       "duration": "0.000092935s"
      },
      {
       "percentile": 0.9859375,
       "count": "11824",
       "duration": "0.000095363s"
      },
      {
       "percentile": 0.9875,
       "count": "11843",
       "duration": "0.000098175s"
      },
      {
       "percentile": 0.9890625,
       "count": "11861",
       "duration": "0.000101615s"
      },
      {
       "percentile": 0.990625,
       "count": "11880",
       "duration": "0.000105235s"
      },
      {
       "percentile": 0.9921875,
       "count": "11899",
       "duration": "0.000111255s"
      },
      {
       "percentile": 0.99296875,
       "count": "11908",
       "duration": "0.000118547s"
      },
      {
       "percentile": 0.99375,
       "count": "11918",
       "duration": "0.000123023s"
      },
      {
       "percentile": 0.99453125,
       "count": "11927",
       "duration": "0.000130203s"
      },
      {
       "percentile": 0.9953125,
       "count": "11936",
       "duration": "0.000135807s"
      },
      {
       "percentile": 0.99609375,
       "count": "11946",
       "duration": "0.000153159s"
      },
      {
       "percentile": 0.996484375,
       "count": "11950",
       "duration": "0.000156975s"
      },
      {
       "percentile": 0.996875,
       "count": "11955",
       "duration": "0.000170263s"
      },
      {
       "percentile": 0.997265625,
       "count": "11960",
       "duration": "0.000180935s"
      },
      {
       "percentile": 0.99765625,
       "count": "11964",
       "duration": "0.000184263s"
      },
      {
       "percentile": 0.998046875,
       "count": "11969",
       "duration": "0.000197975s"
      },
      {
       "percentile": 0.9982421875,
       "count": "11971",
       "duration": "0.000207855s"
      },
      {
       "percentile": 0.9984375,
       "count": "11974",
       "duration": "0.000217751s"
      },
      {
       "percentile": 0.9986328125,
       "count": "11976",
       "duration": "0.000219855s"
      },
      {
       "percentile": 0.998828125,
       "count": "11978",
       "duration": "0.000226863s"
      },
      {
       "percentile": 0.9990234375,
       "count": "11981",
       "duration": "0.000238991s"
      },
      {
       "percentile": 0.99912109375,
       "count": "11982",
       "duration": "0.000244007s"
      },
      {
       "percentile": 0.99921875,
       "count": "11983",
       "duration": "0.000246351s"
      },
      {
       "percentile": 0.99931640625,
       "count": "11984",
       "duration": "0.000269247s"
      },
      {
       "percentile": 0.9994140625,
       "count": "11985",
       "duration": "0.000286735s"
      },
      {
       "percentile": 0.99951171875,
       "count": "11987",
       "duration": "0.000299471s"
      },
      {
       "percentile": 0.999560546875,
       "count": "11987",
       "duration": "0.000299471s"
      },
      {
       "percentile": 0.999609375,
       "count": "11988",
       "duration": "0.000311327s"
      },
      {
       "percentile": 0.999658203125,
       "count": "11988",
       "duration": "0.000311327s"
      },
      {
       "percentile": 0.99970703125,
       "count": "11989",
       "duration": "0.000380783s"
      },
      {
       "percentile": 0.999755859375,
       "count": "11990",
       "duration": "0.000393135s"
      },
      {
       "percentile": 0.9997802734375,
       "count": "11990",
       "duration": "0.000393135s"
      },
      {
       "percentile": 0.9998046875,
       "count": "11990",
       "duration": "0.000393135s"
      },
      {
       "percentile": 0.9998291015625,
       "count": "11990",
       "duration": "0.000393135s"
      },
      {
       "percentile": 0.999853515625,
       "count": "11991",
       "duration": "0.000461263s"
      },
      {
       "percentile": 0.9998779296875,
       "count": "11991",
       "duration": "0.000461263s"
      },
      {
       "percentile": 0.99989013671875,
       "count": "11991",
       "duration": "0.000461263s"
      },
      {
       "percentile": 0.99990234375,
       "count": "11991",
       "duration": "0.000461263s"
      },
      {
       "percentile": 0.99991455078125,
       "count": "11991",
       "duration": "0.000461263s"
      },
      {
       "percentile": 0.9999267578125,
       "count": "11992",
       "duration": "0.000511711s"
      },
      {
       "percentile": 1,
       "count": "11992",
       "duration": "0.000511711s"
      }
     ],
     "mean": "0.000071930s",
     "pstdev": "0.000016456s"
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
     "count": "11992",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000060781s"
      },
      {
       "percentile": 0.1,
       "count": "1203",
       "duration": "0.000063161s"
      },
      {
       "percentile": 0.2,
       "count": "2407",
       "duration": "0.000063617s"
      },
      {
       "percentile": 0.3,
       "count": "3599",
       "duration": "0.000064079s"
      },
      {
       "percentile": 0.4,
       "count": "4799",
       "duration": "0.000064729s"
      },
      {
       "percentile": 0.5,
       "count": "5997",
       "duration": "0.000078707s"
      },
      {
       "percentile": 0.55,
       "count": "6597",
       "duration": "0.000079939s"
      },
      {
       "percentile": 0.6,
       "count": "7196",
       "duration": "0.000081475s"
      },
      {
       "percentile": 0.65,
       "count": "7798",
       "duration": "0.000086383s"
      },
      {
       "percentile": 0.7,
       "count": "8396",
       "duration": "0.000086999s"
      },
      {
       "percentile": 0.75,
       "count": "8997",
       "duration": "0.000087547s"
      },
      {
       "percentile": 0.775,
       "count": "9294",
       "duration": "0.000087839s"
      },
      {
       "percentile": 0.8,
       "count": "9598",
       "duration": "0.000088187s"
      },
      {
       "percentile": 0.825,
       "count": "9895",
       "duration": "0.000088643s"
      },
      {
       "percentile": 0.85,
       "count": "10196",
       "duration": "0.000089531s"
      },
      {
       "percentile": 0.875,
       "count": "10494",
       "duration": "0.000090415s"
      },
      {
       "percentile": 0.8875,
       "count": "10645",
       "duration": "0.000090715s"
      },
      {
       "percentile": 0.9,
       "count": "10794",
       "duration": "0.000090987s"
      },
      {
       "percentile": 0.9125,
       "count": "10946",
       "duration": "0.000091267s"
      },
      {
       "percentile": 0.925,
       "count": "11093",
       "duration": "0.000091535s"
      },
      {
       "percentile": 0.9375,
       "count": "11247",
       "duration": "0.000091859s"
      },
      {
       "percentile": 0.94375,
       "count": "11318",
       "duration": "0.000092015s"
      },
      {
       "percentile": 0.95,
       "count": "11393",
       "duration": "0.000092203s"
      },
      {
       "percentile": 0.95625,
       "count": "11468",
       "duration": "0.000092427s"
      },
      {
       "percentile": 0.9625,
       "count": "11543",
       "duration": "0.000092795s"
      },
      {
       "percentile": 0.96875,
       "count": "11618",
       "duration": "0.000093351s"
      },
      {
       "percentile": 0.971875,
       "count": "11655",
       "duration": "0.000093687s"
      },
      {
       "percentile": 0.975,
       "count": "11693",
       "duration": "0.000094211s"
      },
      {
       "percentile": 0.978125,
       "count": "11730",
       "duration": "0.000094627s"
      },
      {
       "percentile": 0.98125,
       "count": "11768",
       "duration": "0.000095739s"
      },
      {
       "percentile": 0.984375,
       "count": "11805",
       "duration": "0.000097963s"
      },
      {
       "percentile": 0.9859375,
       "count": "11824",
       "duration": "0.000100315s"
      },
      {
       "percentile": 0.9875,
       "count": "11843",
       "duration": "0.000102775s"
      },
      {
       "percentile": 0.9890625,
       "count": "11861",
       "duration": "0.000106551s"
      },
      {
       "percentile": 0.990625,
       "count": "11880",
       "duration": "0.000111119s"
      },
      {
       "percentile": 0.9921875,
       "count": "11899",
       "duration": "0.000118067s"
      },
      {
       "percentile": 0.99296875,
       "count": "11908",
       "duration": "0.000123243s"
      },
      {
       "percentile": 0.99375,
       "count": "11918",
       "duration": "0.000129123s"
      },
      {
       "percentile": 0.99453125,
       "count": "11927",
       "duration": "0.000135367s"
      },
      {
       "percentile": 0.9953125,
       "count": "11936",
       "duration": "0.000140823s"
      },
      {
       "percentile": 0.99609375,
       "count": "11946",
       "duration": "0.000158351s"
      },
      {
       "percentile": 0.996484375,
       "count": "11951",
       "duration": "0.000161367s"
      },
      {
       "percentile": 0.996875,
       "count": "11955",
       "duration": "0.000174711s"
      },
      {
       "percentile": 0.997265625,
       "count": "11960",
       "duration": "0.000185663s"
      },
      {
       "percentile": 0.99765625,
       "count": "11964",
       "duration": "0.000188559s"
      },
      {
       "percentile": 0.998046875,
       "count": "11969",
       "duration": "0.000202791s"
      },
      {
       "percentile": 0.9982421875,
       "count": "11971",
       "duration": "0.000212375s"
      },
      {
       "percentile": 0.9984375,
       "count": "11974",
       "duration": "0.000222295s"
      },
      {
       "percentile": 0.9986328125,
       "count": "11976",
       "duration": "0.000224463s"
      },
      {
       "percentile": 0.998828125,
       "count": "11978",
       "duration": "0.000231279s"
      },
      {
       "percentile": 0.9990234375,
       "count": "11981",
       "duration": "0.000243455s"
      },
      {
       "percentile": 0.99912109375,
       "count": "11982",
       "duration": "0.000248639s"
      },
      {
       "percentile": 0.99921875,
       "count": "11983",
       "duration": "0.000251007s"
      },
      {
       "percentile": 0.99931640625,
       "count": "11984",
       "duration": "0.000273647s"
      },
      {
       "percentile": 0.9994140625,
       "count": "11985",
       "duration": "0.000291455s"
      },
      {
       "percentile": 0.99951171875,
       "count": "11987",
       "duration": "0.000304031s"
      },
      {
       "percentile": 0.999560546875,
       "count": "11987",
       "duration": "0.000304031s"
      },
      {
       "percentile": 0.999609375,
       "count": "11988",
       "duration": "0.000316303s"
      },
      {
       "percentile": 0.999658203125,
       "count": "11988",
       "duration": "0.000316303s"
      },
      {
       "percentile": 0.99970703125,
       "count": "11989",
       "duration": "0.000385551s"
      },
      {
       "percentile": 0.999755859375,
       "count": "11990",
       "duration": "0.000398063s"
      },
      {
       "percentile": 0.9997802734375,
       "count": "11990",
       "duration": "0.000398063s"
      },
      {
       "percentile": 0.9998046875,
       "count": "11990",
       "duration": "0.000398063s"
      },
      {
       "percentile": 0.9998291015625,
       "count": "11990",
       "duration": "0.000398063s"
      },
      {
       "percentile": 0.999853515625,
       "count": "11991",
       "duration": "0.000466111s"
      },
      {
       "percentile": 0.9998779296875,
       "count": "11991",
       "duration": "0.000466111s"
      },
      {
       "percentile": 0.99989013671875,
       "count": "11991",
       "duration": "0.000466111s"
      },
      {
       "percentile": 0.99990234375,
       "count": "11991",
       "duration": "0.000466111s"
      },
      {
       "percentile": 0.99991455078125,
       "count": "11991",
       "duration": "0.000466111s"
      },
      {
       "percentile": 0.9999267578125,
       "count": "11992",
       "duration": "0.000516191s"
      },
      {
       "percentile": 1,
       "count": "11992",
       "duration": "0.000516191s"
      }
     ],
     "mean": "0.000076439s",
     "pstdev": "0.000016499s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "12072"
    },
    {
     "name": "cluster_manager.cluster_added",
     "value": "8"
    },
    {
     "name": "default.total_match_count",
     "value": "8"
    },
    {
     "name": "membership_change",
     "value": "8"
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
     "value": "8"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "1967736"
    },
    {
     "name": "upstream_cx_total",
     "value": "8"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "724320"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "8"
    },
    {
     "name": "upstream_rq_total",
     "value": "12072"
    }
   ],
   "execution_duration": "15.000000540s"
  }
 ],
 "timestamp": "2019-11-12T13:40:49.507742520Z"
}
