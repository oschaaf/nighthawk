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
  "requests_per_second": 200,
  "connections": 10,
  "duration": "10s",
  "timeout": "30s",
  "h2": false,
  "concurrency": "16",
  "prefetch_connections": true,
  "burst_size": 10,
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
     "count": "1990",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000001131s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000001420s"
      },
      {
       "percentile": 0.2,
       "count": "403",
       "duration": "0.000001527s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000001593s"
      },
      {
       "percentile": 0.4,
       "count": "797",
       "duration": "0.000001668s"
      },
      {
       "percentile": 0.5,
       "count": "996",
       "duration": "0.000001743s"
      },
      {
       "percentile": 0.55,
       "count": "1097",
       "duration": "0.000001783s"
      },
      {
       "percentile": 0.6,
       "count": "1196",
       "duration": "0.000001825s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000001869s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000001924s"
      },
      {
       "percentile": 0.75,
       "count": "1495",
       "duration": "0.000001989s"
      },
      {
       "percentile": 0.775,
       "count": "1545",
       "duration": "0.000002021s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000002069s"
      },
      {
       "percentile": 0.825,
       "count": "1644",
       "duration": "0.000002127s"
      },
      {
       "percentile": 0.85,
       "count": "1693",
       "duration": "0.000002202s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000002294s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000002395s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000002522s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000002632s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000002679s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000002773s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000002796s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000002832s"
      },
      {
       "percentile": 0.95625,
       "count": "1904",
       "duration": "0.000002873s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000002917s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000002944s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000002962s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000002990s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000003029s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000003080s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000003125s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000003151s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000003218s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000003247s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000003288s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000003386s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000003420s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000003425s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000003492s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000003514s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000003645s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000003807s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000003807s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000004696s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000007119s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000008454s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000008454s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000008454s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000009647s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000009647s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000011417s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000011417s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000011417s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000011417s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000011417s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000013728s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000013728s"
      }
     ],
     "mean": "0.000001864s",
     "pstdev": "0.000000607s"
    },
    {
     "count": "1990",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000110995s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000147463s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000225847s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000356607s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000464639s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000584831s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000643295s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000702271s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000752191s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000797919s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.000849759s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000877279s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000914975s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000965087s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.001001919s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.001030751s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.001047327s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.001057791s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.001072639s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.001096831s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.001113919s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.001122687s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.001136703s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.001149887s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.001161279s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.001168127s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.001174783s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.001182527s"
      },
      {
       "percentile": 0.978125,
       "count": "1948",
       "duration": "0.001187967s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.001193279s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.001205503s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.001217855s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.001220031s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.001224767s"
      },
      {
       "percentile": 0.990625,
       "count": "1973",
       "duration": "0.001230975s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.001233407s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.001237055s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.001238271s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.001243583s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.001245759s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.001272127s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.001294527s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.001294527s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.001298303s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.001369727s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.001379711s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.001379711s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.001379711s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.001385535s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.001385535s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.001394111s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.001394111s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.001394111s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.001394111s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.001394111s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.001399871s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.001399871s"
      }
     ],
     "mean": "0.000593313s",
     "pstdev": "0.000330255s"
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
     "count": "1990",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000116231s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000155847s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000235007s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000371199s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000483119s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000603519s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000667135s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000723423s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000773215s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000816991s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.000868063s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000893759s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000933727s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000986943s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.001021823s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.001051583s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.001068223s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.001082879s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.001098303s"
      },
      {
       "percentile": 0.925,
       "count": "1842",
       "duration": "0.001120959s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.001138367s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.001147455s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.001160447s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.001172415s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.001185343s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.001192191s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.001198143s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.001204607s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.001211647s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.001219839s"
      },
      {
       "percentile": 0.984375,
       "count": "1960",
       "duration": "0.001236223s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.001241279s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.001246143s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.001249471s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.001253567s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.001258175s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.001258943s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.001259519s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.001262847s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.001267391s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.001281343s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.001306559s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.001306559s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.001330367s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.001379903s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.001387263s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.001387263s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.001387263s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.001398527s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.001398527s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.001409535s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.001409535s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.001409535s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.001409535s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.001409535s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.001420095s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.001420095s"
      }
     ],
     "mean": "0.000609649s",
     "pstdev": "0.000335300s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "2000"
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
     "value": "10"
    },
    {
     "name": "upstream_cx_overflow",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "326000"
    },
    {
     "name": "upstream_cx_total",
     "value": "10"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "120000"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "2000"
    }
   ],
   "execution_duration": "10.000000047s"
  },
  {
   "name": "worker_1",
   "statistics": [
    {
     "count": "1990",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000001081s"
      },
      {
       "percentile": 0.1,
       "count": "202",
       "duration": "0.000001280s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000001349s"
      },
      {
       "percentile": 0.3,
       "count": "602",
       "duration": "0.000001403s"
      },
      {
       "percentile": 0.4,
       "count": "799",
       "duration": "0.000001450s"
      },
      {
       "percentile": 0.5,
       "count": "999",
       "duration": "0.000001501s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000001531s"
      },
      {
       "percentile": 0.6,
       "count": "1195",
       "duration": "0.000001561s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000001588s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000001628s"
      },
      {
       "percentile": 0.75,
       "count": "1496",
       "duration": "0.000001675s"
      },
      {
       "percentile": 0.775,
       "count": "1545",
       "duration": "0.000001703s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000001743s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000001777s"
      },
      {
       "percentile": 0.85,
       "count": "1693",
       "duration": "0.000001832s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000001904s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000001989s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000002571s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000002658s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000002688s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000002740s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000002765s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000002793s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000002815s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000002841s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000002859s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000002881s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000002894s"
      },
      {
       "percentile": 0.978125,
       "count": "1948",
       "duration": "0.000002913s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000002944s"
      },
      {
       "percentile": 0.984375,
       "count": "1960",
       "duration": "0.000002969s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000002978s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000002994s"
      },
      {
       "percentile": 0.9890625,
       "count": "1970",
       "duration": "0.000003s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000003019s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000003032s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000003065s"
      },
      {
       "percentile": 0.99375,
       "count": "1979",
       "duration": "0.000003077s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000003087s"
      },
      {
       "percentile": 0.9953125,
       "count": "1982",
       "duration": "0.000003101s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000003112s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000003302s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000003302s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000005129s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000007048s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000007201s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000007201s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000007201s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000007405s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000007405s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000008517s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000008517s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000008517s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000008517s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000008517s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000011215s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000011215s"
      }
     ],
     "mean": "0.000001644s",
     "pstdev": "0.000000555s"
    },
    {
     "count": "1990",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000094535s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000213911s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000336255s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000455103s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000529631s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000639007s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000697567s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000749183s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000789919s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000819327s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.000848831s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000860319s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000871135s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000882143s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000906815s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000930367s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000937375s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000941503s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000946527s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000950239s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000954175s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000956223s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000958399s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000959647s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000963359s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000965727s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000966591s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000968671s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000970911s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000972479s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000974399s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000975967s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000979071s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000979615s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000983775s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000994591s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.001004831s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.001009439s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.001012863s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.001018335s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.001025663s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.001026111s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.001026111s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.001027295s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.001067455s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.001652927s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.001652927s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.001652927s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.001668927s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.001668927s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.001668991s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.001668991s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.001668991s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.001668991s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.001668991s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.001858623s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.001858623s"
      }
     ],
     "mean": "0.000612511s",
     "pstdev": "0.000267423s"
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
     "count": "1990",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000099879s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000231735s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000346367s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000468751s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000545471s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000649087s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000709247s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000762783s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000804703s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000835807s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.000865151s"
      },
      {
       "percentile": 0.775,
       "count": "1544",
       "duration": "0.000875487s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000884639s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000896863s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000920031s"
      },
      {
       "percentile": 0.875,
       "count": "1743",
       "duration": "0.000948287s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000953855s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000958047s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000962751s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000966751s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000971071s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000973055s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000975263s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000978463s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000980671s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000982463s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000983935s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000984735s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000986975s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000989759s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000992063s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000994175s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000996127s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000999711s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.001004831s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.001010463s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.001017247s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.001018111s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.001027647s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.001028575s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.001032351s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.001039775s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.001039775s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.001042111s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.001075263s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.001709951s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.001709951s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.001709951s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.001728511s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.001728511s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.001738367s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.001738367s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.001738367s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.001738367s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.001738367s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.001864447s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.001864447s"
      }
     ],
     "mean": "0.000627727s",
     "pstdev": "0.000267070s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "2000"
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
     "value": "10"
    },
    {
     "name": "upstream_cx_overflow",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "326000"
    },
    {
     "name": "upstream_cx_total",
     "value": "10"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "120000"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "2000"
    }
   ],
   "execution_duration": "10.000000883s"
  },
  {
   "name": "worker_2",
   "statistics": [
    {
     "count": "1990",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000001072s"
      },
      {
       "percentile": 0.1,
       "count": "201",
       "duration": "0.000001388s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000001470s"
      },
      {
       "percentile": 0.3,
       "count": "602",
       "duration": "0.000001539s"
      },
      {
       "percentile": 0.4,
       "count": "798",
       "duration": "0.000001593s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000001646s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000001682s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000001712s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000001747s"
      },
      {
       "percentile": 0.7,
       "count": "1394",
       "duration": "0.000001793s"
      },
      {
       "percentile": 0.75,
       "count": "1494",
       "duration": "0.000001851s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000001879s"
      },
      {
       "percentile": 0.8,
       "count": "1599",
       "duration": "0.000001914s"
      },
      {
       "percentile": 0.825,
       "count": "1643",
       "duration": "0.000001952s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000002026s"
      },
      {
       "percentile": 0.875,
       "count": "1743",
       "duration": "0.000002135s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000002262s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000002517s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000002618s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000002693s"
      },
      {
       "percentile": 0.9375,
       "count": "1867",
       "duration": "0.000002742s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000002773s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000002805s"
      },
      {
       "percentile": 0.95625,
       "count": "1904",
       "duration": "0.000002826s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000002860s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000002911s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000002928s"
      },
      {
       "percentile": 0.975,
       "count": "1943",
       "duration": "0.000002946s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000002955s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000002979s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000003027s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000003053s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000003087s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000003122s"
      },
      {
       "percentile": 0.990625,
       "count": "1973",
       "duration": "0.000003142s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000003167s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000003186s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000003202s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000003243s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000003260s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000003575s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000003697s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000003697s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000004324s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000006072s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000006496s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000006496s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000006496s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000006507s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000006507s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000006969s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000006969s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000006969s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000006969s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000006969s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000010271s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000010271s"
      }
     ],
     "mean": "0.000001772s",
     "pstdev": "0.000000505s"
    },
    {
     "count": "1990",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000090603s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000186647s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000265231s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000403215s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000552447s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000641695s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000682975s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000735327s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000806079s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000873983s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.000927199s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000955071s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000987903s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.001014495s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.001034239s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.001060159s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.001073087s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.001090623s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.001111295s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.001118911s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.001126655s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.001133375s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.001140479s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.001142655s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.001145855s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.001147967s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.001149759s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.001151167s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.001152639s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.001153471s"
      },
      {
       "percentile": 0.984375,
       "count": "1960",
       "duration": "0.001155647s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.001157695s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.001158207s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.001158911s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.001159551s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.001160319s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.001161535s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.001162431s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.001165823s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.001168191s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.001169151s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.001169663s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.001169663s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.001178495s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.001184255s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.001197823s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.001197823s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.001197823s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.001212543s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.001212543s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.001225663s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.001225663s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.001225663s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.001225663s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.001225663s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.001228287s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.001228287s"
      }
     ],
     "mean": "0.000634939s",
     "pstdev": "0.000329056s"
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
     "count": "1990",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000105055s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000205511s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000283935s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000427823s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000569535s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000657311s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000698783s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000751327s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000821759s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000886495s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.000937791s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000971679s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000999871s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.001024415s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.001046751s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.001069503s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.001085759s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.001099967s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.001120575s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.001128255s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.001137535s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.001143103s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.001153279s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.001157887s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.001160447s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.001163519s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.001165439s"
      },
      {
       "percentile": 0.975,
       "count": "1942",
       "duration": "0.001167551s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.001169151s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.001170303s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.001172543s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.001174015s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.001174591s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.001174847s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.001175615s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.001177407s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.001177727s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.001178047s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.001179199s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.001180671s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.001185727s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.001187711s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.001187711s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.001194687s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.001207679s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.001210303s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.001210303s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.001210303s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.001219455s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.001219455s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.001234815s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.001234815s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.001234815s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.001234815s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.001234815s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.001246975s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.001246975s"
      }
     ],
     "mean": "0.000650697s",
     "pstdev": "0.000327570s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "2000"
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
     "value": "10"
    },
    {
     "name": "upstream_cx_overflow",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "326000"
    },
    {
     "name": "upstream_cx_total",
     "value": "10"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "120000"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "2000"
    }
   ],
   "execution_duration": "10.000000442s"
  },
  {
   "name": "worker_3",
   "statistics": [
    {
     "count": "1990",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000001233s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000001501s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000001603s"
      },
      {
       "percentile": 0.3,
       "count": "598",
       "duration": "0.000001672s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000001738s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000001808s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000001839s"
      },
      {
       "percentile": 0.6,
       "count": "1195",
       "duration": "0.000001877s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000001924s"
      },
      {
       "percentile": 0.7,
       "count": "1397",
       "duration": "0.000001980s"
      },
      {
       "percentile": 0.75,
       "count": "1494",
       "duration": "0.000002045s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000002078s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000002125s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000002195s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000002264s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000002393s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000002548s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000002622s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000002724s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000002802s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000002842s"
      },
      {
       "percentile": 0.94375,
       "count": "1880",
       "duration": "0.000002871s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000002896s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000002930s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000002990s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000003066s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000003101s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000003111s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000003137s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000003157s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000003183s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000003263s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000003277s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000003295s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000003335s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000003369s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000003399s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000003477s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000003592s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000003638s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000003709s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000003729s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000003729s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000004209s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000007178s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000007607s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000007607s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000007607s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000007806s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000007806s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000009042s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000009042s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000009042s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000009042s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000009042s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000021467s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000021467s"
      }
     ],
     "mean": "0.000001937s",
     "pstdev": "0.000000669s"
    },
    {
     "count": "1990",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000116423s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000200831s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000259079s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000310095s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000409407s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000533951s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000582623s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000645823s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000705887s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000770495s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.000868031s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000926655s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000960543s"
      },
      {
       "percentile": 0.825,
       "count": "1643",
       "duration": "0.000982047s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.001018463s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.001054655s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.001072383s"
      },
      {
       "percentile": 0.9,
       "count": "1792",
       "duration": "0.001091647s"
      },
      {
       "percentile": 0.9125,
       "count": "1817",
       "duration": "0.001101887s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.001111999s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.001127039s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.001144319s"
      },
      {
       "percentile": 0.95,
       "count": "1892",
       "duration": "0.001153919s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.001165759s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.001172607s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.001179071s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.001187327s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.001193855s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.001200447s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.001207167s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.001222463s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.001224063s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.001227199s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.001236095s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.001239039s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.001241215s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.001246591s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.001247935s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.001251327s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.001252479s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.001256959s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.001257663s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.001257663s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.001262719s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.001267071s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.001268223s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.001268223s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.001268223s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.001295679s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.001295679s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.001314239s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.001314239s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.001314239s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.001314239s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.001314239s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.001327743s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.001327743s"
      }
     ],
     "mean": "0.000586930s",
     "pstdev": "0.000328759s"
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
     "count": "1990",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000121843s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000206359s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000269199s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000322959s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000422319s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000551679s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000601983s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000665343s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000728287s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000794303s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.000891551s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000949663s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000986239s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.001003999s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.001044095s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.001079807s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.001097023s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.001115519s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.001126463s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.001139775s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.001153663s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.001170879s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.001178943s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.001189887s"
      },
      {
       "percentile": 0.9625,
       "count": "1917",
       "duration": "0.001198335s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.001204991s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.001212735s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.001218367s"
      },
      {
       "percentile": 0.978125,
       "count": "1948",
       "duration": "0.001225279s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.001230335s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.001248447s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.001251903s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.001252351s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.001256767s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.001260991s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.001264511s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.001267775s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.001272063s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.001272703s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.001275775s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.001283711s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.001286591s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.001286591s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.001287359s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.001288895s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.001294399s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.001294399s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.001294399s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.001320383s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.001320383s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.001338239s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.001338239s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.001338239s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.001338239s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.001338239s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.001343167s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.001343167s"
      }
     ],
     "mean": "0.000603919s",
     "pstdev": "0.000334891s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "2000"
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
     "value": "10"
    },
    {
     "name": "upstream_cx_overflow",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "326000"
    },
    {
     "name": "upstream_cx_total",
     "value": "10"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "120000"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "2000"
    }
   ],
   "execution_duration": "10.000000016s"
  },
  {
   "name": "worker_4",
   "statistics": [
    {
     "count": "1990",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000001049s"
      },
      {
       "percentile": 0.1,
       "count": "202",
       "duration": "0.000001266s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000001331s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000001386s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000001436s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000001489s"
      },
      {
       "percentile": 0.55,
       "count": "1097",
       "duration": "0.000001511s"
      },
      {
       "percentile": 0.6,
       "count": "1195",
       "duration": "0.000001542s"
      },
      {
       "percentile": 0.65,
       "count": "1298",
       "duration": "0.000001574s"
      },
      {
       "percentile": 0.7,
       "count": "1398",
       "duration": "0.000001611s"
      },
      {
       "percentile": 0.75,
       "count": "1494",
       "duration": "0.000001652s"
      },
      {
       "percentile": 0.775,
       "count": "1545",
       "duration": "0.000001675s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000001706s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000001740s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000001792s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000001900s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000002043s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000002368s"
      },
      {
       "percentile": 0.9125,
       "count": "1817",
       "duration": "0.000002435s"
      },
      {
       "percentile": 0.925,
       "count": "1842",
       "duration": "0.000002486s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000002515s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000002531s"
      },
      {
       "percentile": 0.95,
       "count": "1892",
       "duration": "0.000002555s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000002572s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000002598s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000002622s"
      },
      {
       "percentile": 0.971875,
       "count": "1937",
       "duration": "0.000002634s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000002646s"
      },
      {
       "percentile": 0.978125,
       "count": "1948",
       "duration": "0.000002678s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000002692s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000002728s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000002751s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000002768s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000002808s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000002838s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000002872s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000002908s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000002953s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000002986s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000003033s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000003126s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000003226s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000003226s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000006896s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000006916s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000006922s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000006922s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000006922s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000007368s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000007368s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000008824s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000008824s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000008824s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000008824s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000008824s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000008841s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000008841s"
      }
     ],
     "mean": "0.000001606s",
     "pstdev": "0.000000503s"
    },
    {
     "count": "1990",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000130559s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.001216703s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.001254975s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.001272575s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.001287359s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.001299391s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.001304959s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.001310783s"
      },
      {
       "percentile": 0.65,
       "count": "1295",
       "duration": "0.001316223s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.001321535s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.001327167s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.001329663s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.001333375s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.001338879s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.001344831s"
      },
      {
       "percentile": 0.875,
       "count": "1743",
       "duration": "0.001351167s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.001352895s"
      },
      {
       "percentile": 0.9,
       "count": "1792",
       "duration": "0.001355647s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.001358911s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.001362943s"
      },
      {
       "percentile": 0.9375,
       "count": "1867",
       "duration": "0.001366079s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.001368127s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.001369663s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.001372735s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.001375935s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.001378431s"
      },
      {
       "percentile": 0.971875,
       "count": "1936",
       "duration": "0.001379711s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.001381375s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.001385279s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.001387967s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.001394943s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.001400319s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.001402815s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.001409535s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.001414591s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.001438655s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.001456767s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.001463231s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.001478015s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.001851135s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.002310655s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.002313599s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.002313599s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.002317695s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.002319231s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.002326143s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.002326143s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.002326143s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.002326911s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.002326911s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.002335487s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.002335487s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.002335487s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.002335487s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.002335487s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.002335871s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.002335871s"
      }
     ],
     "mean": "0.001246808s",
     "pstdev": "0.000217749s"
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
     "count": "1990",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000154527s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.001221503s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.001261759s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.001281151s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.001297727s"
      },
      {
       "percentile": 0.5,
       "count": "999",
       "duration": "0.001312383s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.001319167s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.001325887s"
      },
      {
       "percentile": 0.65,
       "count": "1296",
       "duration": "0.001332095s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.001338687s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.001344895s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.001348415s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.001351935s"
      },
      {
       "percentile": 0.825,
       "count": "1644",
       "duration": "0.001359807s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.001364735s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.001370623s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.001372031s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.001374079s"
      },
      {
       "percentile": 0.9125,
       "count": "1817",
       "duration": "0.001378751s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.001382271s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.001386303s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.001388543s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.001390527s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.001392639s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.001396479s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.001399295s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.001400767s"
      },
      {
       "percentile": 0.975,
       "count": "1942",
       "duration": "0.001401919s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.001405567s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.001408319s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.001413631s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.001420863s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.001422527s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.001425599s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.001437375s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.001452863s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.001476287s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.001484927s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.001504063s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.001857151s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.002337535s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.002348287s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.002348287s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.002359167s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.002367103s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.002379135s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.002379135s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.002379135s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.002386559s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.002386559s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.002398207s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.002398207s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.002398207s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.002398207s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.002398207s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.002405503s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.002405503s"
      }
     ],
     "mean": "0.001261573s",
     "pstdev": "0.000216514s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "2000"
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
     "value": "10"
    },
    {
     "name": "upstream_cx_overflow",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "326000"
    },
    {
     "name": "upstream_cx_total",
     "value": "10"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "120000"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "2000"
    }
   ],
   "execution_duration": "10.000000176s"
  },
  {
   "name": "worker_5",
   "statistics": [
    {
     "count": "1990",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000000985s"
      },
      {
       "percentile": 0.1,
       "count": "202",
       "duration": "0.000001100s"
      },
      {
       "percentile": 0.2,
       "count": "401",
       "duration": "0.000001137s"
      },
      {
       "percentile": 0.3,
       "count": "602",
       "duration": "0.000001163s"
      },
      {
       "percentile": 0.4,
       "count": "798",
       "duration": "0.000001187s"
      },
      {
       "percentile": 0.5,
       "count": "997",
       "duration": "0.000001211s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000001224s"
      },
      {
       "percentile": 0.6,
       "count": "1197",
       "duration": "0.000001241s"
      },
      {
       "percentile": 0.65,
       "count": "1295",
       "duration": "0.000001258s"
      },
      {
       "percentile": 0.7,
       "count": "1396",
       "duration": "0.000001278s"
      },
      {
       "percentile": 0.75,
       "count": "1494",
       "duration": "0.000001298s"
      },
      {
       "percentile": 0.775,
       "count": "1544",
       "duration": "0.000001311s"
      },
      {
       "percentile": 0.8,
       "count": "1593",
       "duration": "0.000001331s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000001348s"
      },
      {
       "percentile": 0.85,
       "count": "1694",
       "duration": "0.000001372s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000001429s"
      },
      {
       "percentile": 0.8875,
       "count": "1768",
       "duration": "0.000001483s"
      },
      {
       "percentile": 0.9,
       "count": "1792",
       "duration": "0.000002418s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000002480s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000002507s"
      },
      {
       "percentile": 0.9375,
       "count": "1868",
       "duration": "0.000002538s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000002551s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000002563s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000002584s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000002601s"
      },
      {
       "percentile": 0.96875,
       "count": "1929",
       "duration": "0.000002615s"
      },
      {
       "percentile": 0.971875,
       "count": "1936",
       "duration": "0.000002622s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000002628s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000002641s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000002653s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000002675s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000002693s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000002717s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000002755s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000002775s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000002796s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000002826s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000002857s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000002918s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000003155s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000003395s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000004302s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000004302s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000006448s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000007206s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000007283s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000007283s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000007283s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000010262s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000010262s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000010477s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000010477s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000010477s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000010477s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000010477s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000012220s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000012220s"
      }
     ],
     "mean": "0.000001373s",
     "pstdev": "0.000000610s"
    },
    {
     "count": "1990",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000102015s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000135671s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000168439s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000181519s"
      },
      {
       "percentile": 0.4,
       "count": "797",
       "duration": "0.001985983s"
      },
      {
       "percentile": 0.5,
       "count": "996",
       "duration": "0.002000831s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.002008575s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.002014463s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.002020927s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.002027391s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.002033023s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.002035647s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.002038591s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.002042239s"
      },
      {
       "percentile": 0.85,
       "count": "1694",
       "duration": "0.002046271s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.002050367s"
      },
      {
       "percentile": 0.8875,
       "count": "1768",
       "duration": "0.002052927s"
      },
      {
       "percentile": 0.9,
       "count": "1792",
       "duration": "0.002055359s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.002057855s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.002060799s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.002064127s"
      },
      {
       "percentile": 0.94375,
       "count": "1880",
       "duration": "0.002065279s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.002067775s"
      },
      {
       "percentile": 0.95625,
       "count": "1904",
       "duration": "0.002070847s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.002074687s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.002080191s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.002083967s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.002098815s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.002133887s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.002157183s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.002167807s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.002173567s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.002178559s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.002184319s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.002187007s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.002198271s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.002202879s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.002203903s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.002209407s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.002214527s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.002225919s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.002557183s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.002557183s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.002568063s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.002575615s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.002577407s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.002577407s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.002577407s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.002587647s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.002587647s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.002593023s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.002593023s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.002593023s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.002593023s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.002593023s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.002602495s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.002602495s"
      }
     ],
     "mean": "0.001454163s",
     "pstdev": "0.000867993s"
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
     "count": "1990",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000120199s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000155391s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000191959s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000244367s"
      },
      {
       "percentile": 0.4,
       "count": "798",
       "duration": "0.001993983s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.002010047s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.002017023s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.002024895s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.002031999s"
      },
      {
       "percentile": 0.7,
       "count": "1394",
       "duration": "0.002039935s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.002046079s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.002049343s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.002052479s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.002056575s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.002060607s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.002064639s"
      },
      {
       "percentile": 0.8875,
       "count": "1768",
       "duration": "0.002067391s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.002069503s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.002072959s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.002075583s"
      },
      {
       "percentile": 0.9375,
       "count": "1867",
       "duration": "0.002079935s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.002081279s"
      },
      {
       "percentile": 0.95,
       "count": "1892",
       "duration": "0.002083775s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.002086015s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.002090943s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.002096127s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.002100351s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.002114815s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.002146943s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.002168319s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.002180863s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.002188799s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.002196223s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.002200063s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.002208127s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.002217087s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.002219903s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.002225535s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.002227455s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.002239231s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.002246655s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.002563071s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.002563071s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.002575999s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.002588159s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.002597375s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.002597375s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.002597375s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.002611583s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.002611583s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.002619263s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.002619263s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.002619263s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.002619263s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.002619263s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.002631423s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.002631423s"
      }
     ],
     "mean": "0.001468244s",
     "pstdev": "0.000863649s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "2000"
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
     "value": "10"
    },
    {
     "name": "upstream_cx_overflow",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "326000"
    },
    {
     "name": "upstream_cx_total",
     "value": "10"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "120000"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "2000"
    }
   ],
   "execution_duration": "9.999999955s"
  },
  {
   "name": "worker_6",
   "statistics": [
    {
     "count": "1990",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000001006s"
      },
      {
       "percentile": 0.1,
       "count": "203",
       "duration": "0.000001208s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000001270s"
      },
      {
       "percentile": 0.3,
       "count": "599",
       "duration": "0.000001323s"
      },
      {
       "percentile": 0.4,
       "count": "799",
       "duration": "0.000001369s"
      },
      {
       "percentile": 0.5,
       "count": "998",
       "duration": "0.000001415s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000001439s"
      },
      {
       "percentile": 0.6,
       "count": "1199",
       "duration": "0.000001466s"
      },
      {
       "percentile": 0.65,
       "count": "1295",
       "duration": "0.000001492s"
      },
      {
       "percentile": 0.7,
       "count": "1394",
       "duration": "0.000001518s"
      },
      {
       "percentile": 0.75,
       "count": "1495",
       "duration": "0.000001562s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000001586s"
      },
      {
       "percentile": 0.8,
       "count": "1593",
       "duration": "0.000001606s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000001642s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000001686s"
      },
      {
       "percentile": 0.875,
       "count": "1744",
       "duration": "0.000001738s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000001798s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000002480s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000002545s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000002580s"
      },
      {
       "percentile": 0.9375,
       "count": "1867",
       "duration": "0.000002616s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000002634s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000002658s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000002676s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000002700s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000002719s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000002736s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000002747s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000002784s"
      },
      {
       "percentile": 0.98125,
       "count": "1954",
       "duration": "0.000002801s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000002813s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000002832s"
      },
      {
       "percentile": 0.9875,
       "count": "1967",
       "duration": "0.000002839s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000002852s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000002860s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000002880s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000002887s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000002893s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000002930s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000002939s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000003049s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000003270s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000003270s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000003831s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000005998s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000006205s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000006205s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000006205s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000006516s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000006516s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000006660s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000006660s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000006660s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000006660s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000006660s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000006864s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000006864s"
      }
     ],
     "mean": "0.000001543s",
     "pstdev": "0.000000483s"
    },
    {
     "count": "1990",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.001093503s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.001126783s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.001145663s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.001159999s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.001172415s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.001182847s"
      },
      {
       "percentile": 0.55,
       "count": "1096",
       "duration": "0.001188159s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.001192831s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.001198783s"
      },
      {
       "percentile": 0.7,
       "count": "1395",
       "duration": "0.001203327s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.001209215s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.001212287s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.001216255s"
      },
      {
       "percentile": 0.825,
       "count": "1643",
       "duration": "0.001219263s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.001223423s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.001228159s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.001231487s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.001234047s"
      },
      {
       "percentile": 0.9125,
       "count": "1817",
       "duration": "0.001236543s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.001239103s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.001242431s"
      },
      {
       "percentile": 0.94375,
       "count": "1880",
       "duration": "0.001244031s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.001246079s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.001248895s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.001251903s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.001254655s"
      },
      {
       "percentile": 0.971875,
       "count": "1936",
       "duration": "0.001257407s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.001260799s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.001265343s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.001268287s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.001276159s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.001282303s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.001287295s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.001291455s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.001302015s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.001326015s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.001345791s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.001350783s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.001366079s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.002192895s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.002200575s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.002206719s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.002206719s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.002211327s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.002211583s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.002222847s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.002222847s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.002222847s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.002222975s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.002222975s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.002225023s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.002225023s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.002225023s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.002225023s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.002225023s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.002228223s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.002228223s"
      }
     ],
     "mean": "0.001186868s",
     "pstdev": "0.000083086s"
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
     "count": "1990",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.001098559s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.001133375s"
      },
      {
       "percentile": 0.2,
       "count": "399",
       "duration": "0.001154495s"
      },
      {
       "percentile": 0.3,
       "count": "598",
       "duration": "0.001170943s"
      },
      {
       "percentile": 0.4,
       "count": "798",
       "duration": "0.001184703s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.001198143s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.001204223s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.001210431s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.001216575s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.001222399s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.001228479s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.001231231s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.001235711s"
      },
      {
       "percentile": 0.825,
       "count": "1643",
       "duration": "0.001239487s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.001243135s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.001248575s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.001251071s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.001253695s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.001257663s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.001260543s"
      },
      {
       "percentile": 0.9375,
       "count": "1867",
       "duration": "0.001263871s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.001266367s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.001267967s"
      },
      {
       "percentile": 0.95625,
       "count": "1904",
       "duration": "0.001271039s"
      },
      {
       "percentile": 0.9625,
       "count": "1917",
       "duration": "0.001273983s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.001276543s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.001278783s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.001282047s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.001286207s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.001289535s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.001296575s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.001302655s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.001308735s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.001316543s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.001319743s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.001342719s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.001366719s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.001374655s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.001395455s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.002199039s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.002223103s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.002236671s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.002236671s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.002243967s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.002252031s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.002265471s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.002265471s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.002265471s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.002272255s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.002272255s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.002279679s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.002279679s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.002279679s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.002279679s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.002279679s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.002290431s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.002290431s"
      }
     ],
     "mean": "0.001201450s",
     "pstdev": "0.000086877s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "2000"
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
     "value": "10"
    },
    {
     "name": "upstream_cx_overflow",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "326000"
    },
    {
     "name": "upstream_cx_total",
     "value": "10"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "120000"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "2000"
    }
   ],
   "execution_duration": "10.000000583s"
  },
  {
   "name": "worker_7",
   "statistics": [
    {
     "count": "1990",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000001057s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000001307s"
      },
      {
       "percentile": 0.2,
       "count": "401",
       "duration": "0.000001389s"
      },
      {
       "percentile": 0.3,
       "count": "601",
       "duration": "0.000001450s"
      },
      {
       "percentile": 0.4,
       "count": "802",
       "duration": "0.000001508s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000001574s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000001607s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000001642s"
      },
      {
       "percentile": 0.65,
       "count": "1295",
       "duration": "0.000001680s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000001727s"
      },
      {
       "percentile": 0.75,
       "count": "1494",
       "duration": "0.000001792s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000001827s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000001877s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000001921s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000001989s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000002111s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000002265s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000002352s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000002388s"
      },
      {
       "percentile": 0.925,
       "count": "1842",
       "duration": "0.000002437s"
      },
      {
       "percentile": 0.9375,
       "count": "1867",
       "duration": "0.000002489s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000002510s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000002538s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000002562s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000002582s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000002630s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000002662s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000002680s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000002702s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000002749s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000002791s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000002817s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000002835s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000002902s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000002925s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000003033s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000003045s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000003253s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000004558s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000004804s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000005074s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000007513s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000007513s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000007752s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000007771s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000009720s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000009720s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000009720s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000011548s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000011548s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000012666s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000012666s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000012666s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000012666s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000012666s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000023541s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000023541s"
      }
     ],
     "mean": "0.000001708s",
     "pstdev": "0.000000772s"
    },
    {
     "count": "1990",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000163359s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.001450879s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.001592639s"
      },
      {
       "percentile": 0.3,
       "count": "598",
       "duration": "0.001651647s"
      },
      {
       "percentile": 0.4,
       "count": "798",
       "duration": "0.001711295s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.001773951s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.001807423s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.001835647s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.001870463s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.001900031s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.001934079s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.001947839s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.001964735s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.001987135s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.002001343s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.002017791s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.002027391s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.002036159s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.002042303s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.002048383s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.002053823s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.002059199s"
      },
      {
       "percentile": 0.95,
       "count": "1892",
       "duration": "0.002060735s"
      },
      {
       "percentile": 0.95625,
       "count": "1904",
       "duration": "0.002065343s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.002069119s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.002074367s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.002077439s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.002080831s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.002085887s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.002091903s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.002100351s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.002108927s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.002117247s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.002124927s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.002171903s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.002188543s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.002195839s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.002205055s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.002215935s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.002259583s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.002351487s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.002429055s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.002429055s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.002463359s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.002499199s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.002532735s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.002532735s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.002532735s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.002562303s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.002562303s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.002614527s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.002614527s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.002614527s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.002614527s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.002614527s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.002625279s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.002625279s"
      }
     ],
     "mean": "0.001654453s",
     "pstdev": "0.000501299s"
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
     "count": "1990",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000168055s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.001459839s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.001601919s"
      },
      {
       "percentile": 0.3,
       "count": "598",
       "duration": "0.001662463s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.001724607s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.001789503s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.001823551s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.001854143s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.001888255s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.001920063s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.001954367s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.001968895s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.001986239s"
      },
      {
       "percentile": 0.825,
       "count": "1643",
       "duration": "0.002010687s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.002023551s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.002040127s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.002051839s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.002060991s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.002066687s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.002071615s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.002079039s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.002083839s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.002085567s"
      },
      {
       "percentile": 0.95625,
       "count": "1904",
       "duration": "0.002090175s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.002094719s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.002099967s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.002103295s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.002106495s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.002111231s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.002117759s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.002125567s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.002133375s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.002138879s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.002149503s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.002203903s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.002215167s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.002218239s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.002221183s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.002249983s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.002284287s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.002372351s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.002462591s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.002462591s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.002535423s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.002555647s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.002600831s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.002600831s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.002600831s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.002616703s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.002616703s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.002666495s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.002666495s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.002666495s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.002666495s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.002666495s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.002689279s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.002689279s"
      }
     ],
     "mean": "0.001669728s",
     "pstdev": "0.000506401s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "2000"
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
     "value": "10"
    },
    {
     "name": "upstream_cx_overflow",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "326000"
    },
    {
     "name": "upstream_cx_total",
     "value": "10"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "120000"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "2000"
    }
   ],
   "execution_duration": "10.000000737s"
  },
  {
   "name": "worker_8",
   "statistics": [
    {
     "count": "1990",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000001079s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000001321s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000001397s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000001462s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000001522s"
      },
      {
       "percentile": 0.5,
       "count": "998",
       "duration": "0.000001573s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000001609s"
      },
      {
       "percentile": 0.6,
       "count": "1195",
       "duration": "0.000001649s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000001690s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000001732s"
      },
      {
       "percentile": 0.75,
       "count": "1497",
       "duration": "0.000001799s"
      },
      {
       "percentile": 0.775,
       "count": "1545",
       "duration": "0.000001824s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000001856s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000001897s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000001988s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000002069s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000002179s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000002464s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000002523s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000002575s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000002609s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000002632s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000002663s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000002697s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000002732s"
      },
      {
       "percentile": 0.96875,
       "count": "1929",
       "duration": "0.000002756s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000002767s"
      },
      {
       "percentile": 0.975,
       "count": "1942",
       "duration": "0.000002798s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000002813s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000002875s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000002891s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000002900s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000002930s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000002974s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000003051s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000003145s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000003204s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000003270s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000004333s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000004532s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000007955s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000008355s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000008355s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000008881s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000009897s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000010394s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000010394s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000010394s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000011073s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000011073s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000012280s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000012280s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000012280s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000012280s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000012280s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000012341s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000012341s"
      }
     ],
     "mean": "0.000001723s",
     "pstdev": "0.000000687s"
    },
    {
     "count": "1990",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000153375s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.001462975s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.001598911s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.001663167s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.001724479s"
      },
      {
       "percentile": 0.5,
       "count": "996",
       "duration": "0.001789439s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.001816959s"
      },
      {
       "percentile": 0.6,
       "count": "1195",
       "duration": "0.001851967s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.001877759s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.001913087s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.001939583s"
      },
      {
       "percentile": 0.775,
       "count": "1544",
       "duration": "0.001958015s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.001980031s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.001995455s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.002009087s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.002025279s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.002034879s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.002041727s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.002051071s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.002054527s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.002060415s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.002066175s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.002069759s"
      },
      {
       "percentile": 0.95625,
       "count": "1904",
       "duration": "0.002074495s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.002078591s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.002085311s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.002088767s"
      },
      {
       "percentile": 0.975,
       "count": "1942",
       "duration": "0.002092543s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.002098303s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.002100479s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.002105727s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.002109439s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.002114943s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.002124543s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.002171903s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.002182271s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.002191615s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.002212991s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.002244223s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.002263935s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.002385407s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.002424319s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.002424319s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.002479871s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.002493311s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.002526079s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.002526079s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.002526079s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.002555903s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.002555903s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.002591615s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.002591615s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.002591615s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.002591615s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.002591615s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.002610431s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.002610431s"
      }
     ],
     "mean": "0.001666322s",
     "pstdev": "0.000496250s"
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
     "count": "1990",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000158767s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.001471423s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.001608063s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.001673791s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.001738111s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.001805631s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.001833343s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.001869887s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.001896895s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.001932479s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.001960703s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.001979135s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.002002943s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.002017919s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.002033855s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.002048831s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.002058367s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.002066815s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.002076159s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.002080831s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.002086591s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.002091455s"
      },
      {
       "percentile": 0.95,
       "count": "1892",
       "duration": "0.002096191s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.002100351s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.002104191s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.002111103s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.002114559s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.002119423s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.002124927s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.002125567s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.002131583s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.002136319s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.002141823s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.002155135s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.002198783s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.002213887s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.002221567s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.002239359s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.002282239s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.002289151s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.002454399s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.002468607s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.002468607s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.002527871s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.002553471s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.002593279s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.002593279s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.002593279s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.002597247s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.002597247s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.002631295s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.002631295s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.002631295s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.002631295s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.002631295s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.002670207s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.002670207s"
      }
     ],
     "mean": "0.001682158s",
     "pstdev": "0.000501481s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "2000"
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
     "value": "10"
    },
    {
     "name": "upstream_cx_overflow",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "326000"
    },
    {
     "name": "upstream_cx_total",
     "value": "10"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "120000"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "2000"
    }
   ],
   "execution_duration": "10.000000403s"
  },
  {
   "name": "worker_9",
   "statistics": [
    {
     "count": "1990",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000000990s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000001141s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000001182s"
      },
      {
       "percentile": 0.3,
       "count": "604",
       "duration": "0.000001215s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000001246s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000001274s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000001292s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000001308s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000001330s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000001351s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.000001382s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000001396s"
      },
      {
       "percentile": 0.8,
       "count": "1594",
       "duration": "0.000001419s"
      },
      {
       "percentile": 0.825,
       "count": "1643",
       "duration": "0.000001445s"
      },
      {
       "percentile": 0.85,
       "count": "1693",
       "duration": "0.000001485s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000001546s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000001614s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000002465s"
      },
      {
       "percentile": 0.9125,
       "count": "1817",
       "duration": "0.000002536s"
      },
      {
       "percentile": 0.925,
       "count": "1842",
       "duration": "0.000002567s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000002592s"
      },
      {
       "percentile": 0.94375,
       "count": "1880",
       "duration": "0.000002608s"
      },
      {
       "percentile": 0.95,
       "count": "1893",
       "duration": "0.000002616s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000002636s"
      },
      {
       "percentile": 0.9625,
       "count": "1917",
       "duration": "0.000002656s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000002674s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000002688s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000002698s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000002725s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000002733s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000002747s"
      },
      {
       "percentile": 0.9859375,
       "count": "1964",
       "duration": "0.000002777s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000002792s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000002803s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000002846s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000002871s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000002906s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000002962s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000003211s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000003343s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000003483s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000003941s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000003941s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000006s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000006518s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000006887s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000006887s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000006887s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000007643s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000007643s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000007829s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000007829s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000007829s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000007829s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000007829s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000008692s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000008692s"
      }
     ],
     "mean": "0.000001428s",
     "pstdev": "0.000000539s"
    },
    {
     "count": "1990",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000103455s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000120159s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.001892095s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.002115199s"
      },
      {
       "percentile": 0.4,
       "count": "797",
       "duration": "0.002137599s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.002154623s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.002164095s"
      },
      {
       "percentile": 0.6,
       "count": "1195",
       "duration": "0.002170623s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.002177535s"
      },
      {
       "percentile": 0.7,
       "count": "1398",
       "duration": "0.002183039s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.002189951s"
      },
      {
       "percentile": 0.775,
       "count": "1544",
       "duration": "0.002193279s"
      },
      {
       "percentile": 0.8,
       "count": "1596",
       "duration": "0.002196351s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.002200191s"
      },
      {
       "percentile": 0.85,
       "count": "1693",
       "duration": "0.002204415s"
      },
      {
       "percentile": 0.875,
       "count": "1744",
       "duration": "0.002208511s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.002211327s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.002213375s"
      },
      {
       "percentile": 0.9125,
       "count": "1817",
       "duration": "0.002215679s"
      },
      {
       "percentile": 0.925,
       "count": "1842",
       "duration": "0.002217855s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.002222463s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.002225279s"
      },
      {
       "percentile": 0.95,
       "count": "1893",
       "duration": "0.002227199s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.002228735s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.002235519s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.002241151s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.002279935s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.002297855s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.002313727s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.002323711s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.002333823s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.002344191s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.002349183s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.002359295s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.002365439s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.002550271s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.002558207s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.002559103s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.002578431s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.002580223s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.002680191s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.002700415s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.002700415s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.002710271s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.002720511s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.002732159s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.002732159s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.002732159s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.002737791s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.002737791s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.002750463s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.002750463s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.002750463s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.002750463s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.002750463s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.002755711s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.002755711s"
      }
     ],
     "mean": "0.001760122s",
     "pstdev": "0.000818458s"
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
     "count": "1990",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000109707s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000140231s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.001896959s"
      },
      {
       "percentile": 0.3,
       "count": "598",
       "duration": "0.002127743s"
      },
      {
       "percentile": 0.4,
       "count": "798",
       "duration": "0.002149119s"
      },
      {
       "percentile": 0.5,
       "count": "999",
       "duration": "0.002165503s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.002174207s"
      },
      {
       "percentile": 0.6,
       "count": "1195",
       "duration": "0.002180991s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.002188159s"
      },
      {
       "percentile": 0.7,
       "count": "1395",
       "duration": "0.002194431s"
      },
      {
       "percentile": 0.75,
       "count": "1494",
       "duration": "0.002201599s"
      },
      {
       "percentile": 0.775,
       "count": "1544",
       "duration": "0.002205183s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.002208639s"
      },
      {
       "percentile": 0.825,
       "count": "1643",
       "duration": "0.002212223s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.002217343s"
      },
      {
       "percentile": 0.875,
       "count": "1745",
       "duration": "0.002221567s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.002223743s"
      },
      {
       "percentile": 0.9,
       "count": "1792",
       "duration": "0.002225919s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.002230399s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.002233471s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.002236799s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.002240511s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.002243071s"
      },
      {
       "percentile": 0.95625,
       "count": "1905",
       "duration": "0.002245887s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.002250623s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.002258303s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.002290303s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.002309887s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.002322815s"
      },
      {
       "percentile": 0.98125,
       "count": "1954",
       "duration": "0.002335615s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.002347647s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.002357631s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.002367231s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.002376447s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.002385663s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.002569215s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.002593919s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.002601983s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.002632191s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.002640383s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.002688511s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.002711551s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.002711551s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.002723711s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.002735871s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.002749823s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.002749823s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.002749823s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.002758271s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.002758271s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.002773375s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.002773375s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.002773375s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.002773375s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.002773375s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.002780927s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.002780927s"
      }
     ],
     "mean": "0.001773947s",
     "pstdev": "0.000814870s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "2000"
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
     "value": "10"
    },
    {
     "name": "upstream_cx_overflow",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "326000"
    },
    {
     "name": "upstream_cx_total",
     "value": "10"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "120000"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "2000"
    }
   ],
   "execution_duration": "10.000001020s"
  },
  {
   "name": "worker_10",
   "statistics": [
    {
     "count": "1990",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000001044s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000001286s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000001356s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000001415s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000001466s"
      },
      {
       "percentile": 0.5,
       "count": "1001",
       "duration": "0.000001525s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000001553s"
      },
      {
       "percentile": 0.6,
       "count": "1195",
       "duration": "0.000001590s"
      },
      {
       "percentile": 0.65,
       "count": "1296",
       "duration": "0.000001633s"
      },
      {
       "percentile": 0.7,
       "count": "1394",
       "duration": "0.000001670s"
      },
      {
       "percentile": 0.75,
       "count": "1496",
       "duration": "0.000001722s"
      },
      {
       "percentile": 0.775,
       "count": "1544",
       "duration": "0.000001754s"
      },
      {
       "percentile": 0.8,
       "count": "1593",
       "duration": "0.000001790s"
      },
      {
       "percentile": 0.825,
       "count": "1643",
       "duration": "0.000001839s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000001922s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000002029s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000002148s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000002376s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000002426s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000002470s"
      },
      {
       "percentile": 0.9375,
       "count": "1868",
       "duration": "0.000002505s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000002525s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000002547s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000002564s"
      },
      {
       "percentile": 0.9625,
       "count": "1917",
       "duration": "0.000002594s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000002620s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000002635s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000002648s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000002663s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000002694s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000002726s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000002738s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000002752s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000002822s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000002872s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000002900s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000002988s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000002993s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000003353s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000003908s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000007585s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000009004s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000009004s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000009040s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000009202s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000009209s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000009209s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000009209s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000009507s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000009507s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000010405s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000010405s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000010405s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000010405s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000010405s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000012308s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000012308s"
      }
     ],
     "mean": "0.000001660s",
     "pstdev": "0.000000632s"
    },
    {
     "count": "1990",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000144527s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.001442495s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.001583615s"
      },
      {
       "percentile": 0.3,
       "count": "598",
       "duration": "0.001640959s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.001700095s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.001760959s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.001790463s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.001822847s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.001851007s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.001881087s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.001913919s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.001930239s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.001943679s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.001962175s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.001982335s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.001998847s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.002006271s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.002015231s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.002026111s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.002032191s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.002041023s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.002044287s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.002049023s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.002054207s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.002059455s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.002063359s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.002065343s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.002067711s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.002070271s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.002075711s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.002078399s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.002082687s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.002086015s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.002092031s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.002119551s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.002134143s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.002158463s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.002162943s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.002200831s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.002204031s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.002303231s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.002375423s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.002375423s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.002453503s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.002524927s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.002553599s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.002553599s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.002553599s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.002578431s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.002578431s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.002614783s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.002614783s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.002614783s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.002614783s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.002614783s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.002635263s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.002635263s"
      }
     ],
     "mean": "0.001639695s",
     "pstdev": "0.000500935s"
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
     "count": "1990",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000149351s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.001450943s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.001591679s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.001651327s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.001712383s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.001775039s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.001808447s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.001838527s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.001869247s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.001900223s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.001934719s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.001951615s"
      },
      {
       "percentile": 0.8,
       "count": "1593",
       "duration": "0.001965631s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.001984383s"
      },
      {
       "percentile": 0.85,
       "count": "1693",
       "duration": "0.002004799s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.002021311s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.002029823s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.002038719s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.002049343s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.002056319s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.002065407s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.002069375s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.002074495s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.002078143s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.002084095s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.002087679s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.002089919s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.002093311s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.002095871s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.002100095s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.002102271s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.002108415s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.002111743s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.002117759s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.002143871s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.002162687s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.002185599s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.002190591s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.002236159s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.002242047s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.002324095s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.002401023s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.002401023s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.002490367s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.002563967s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.002619903s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.002619903s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.002619903s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.002633983s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.002633983s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.002658175s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.002658175s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.002658175s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.002658175s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.002658175s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.002705663s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.002705663s"
      }
     ],
     "mean": "0.001654901s",
     "pstdev": "0.000505911s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "2000"
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
     "value": "10"
    },
    {
     "name": "upstream_cx_overflow",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "326000"
    },
    {
     "name": "upstream_cx_total",
     "value": "10"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "120000"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "2000"
    }
   ],
   "execution_duration": "10.000000616s"
  },
  {
   "name": "worker_11",
   "statistics": [
    {
     "count": "1990",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000001070s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000001308s"
      },
      {
       "percentile": 0.2,
       "count": "399",
       "duration": "0.000001385s"
      },
      {
       "percentile": 0.3,
       "count": "599",
       "duration": "0.000001447s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000001503s"
      },
      {
       "percentile": 0.5,
       "count": "996",
       "duration": "0.000001565s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000001595s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000001628s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000001673s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000001721s"
      },
      {
       "percentile": 0.75,
       "count": "1497",
       "duration": "0.000001785s"
      },
      {
       "percentile": 0.775,
       "count": "1544",
       "duration": "0.000001813s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000001856s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000001903s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000001947s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000002067s"
      },
      {
       "percentile": 0.8875,
       "count": "1768",
       "duration": "0.000002151s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000002454s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000002509s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000002547s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000002594s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000002612s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000002639s"
      },
      {
       "percentile": 0.95625,
       "count": "1904",
       "duration": "0.000002655s"
      },
      {
       "percentile": 0.9625,
       "count": "1917",
       "duration": "0.000002683s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000002700s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000002728s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000002737s"
      },
      {
       "percentile": 0.978125,
       "count": "1948",
       "duration": "0.000002756s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000002771s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000002785s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000002801s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000002826s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000002861s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000002901s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000002934s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000003054s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000003127s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000003390s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000003799s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000008378s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000009204s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000009204s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000009950s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000010762s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000011564s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000011564s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000011564s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000012711s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000012711s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000013605s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000013605s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000013605s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000013605s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000013605s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000014135s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000014135s"
      }
     ],
     "mean": "0.000001708s",
     "pstdev": "0.000000734s"
    },
    {
     "count": "1990",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000102787s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.001450175s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.001590143s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.001652351s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.001714495s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.001777407s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.001808319s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.001841087s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.001877183s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.001908351s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.001940991s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.001958591s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.001976639s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.001991679s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.002008127s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.002027519s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.002036863s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.002043391s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.002051199s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.002058879s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.002067775s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.002070079s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.002076607s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.002083007s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.002084607s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.002091455s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.002093823s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.002096575s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.002101375s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.002105855s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.002109823s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.002116991s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.002129279s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.002134911s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.002161919s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.002191359s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.002202239s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.002225535s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.002235519s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.002239615s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.002404735s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.002431103s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.002431103s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.002474239s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.002502655s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.002546047s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.002546047s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.002546047s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.002575743s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.002575743s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.002609791s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.002609791s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.002609791s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.002609791s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.002609791s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.002633855s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.002633855s"
      }
     ],
     "mean": "0.001659692s",
     "pstdev": "0.000501132s"
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
     "count": "1990",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000108227s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.001457599s"
      },
      {
       "percentile": 0.2,
       "count": "399",
       "duration": "0.001598975s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.001663743s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.001727615s"
      },
      {
       "percentile": 0.5,
       "count": "996",
       "duration": "0.001792255s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.001825535s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.001858879s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.001896319s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.001928639s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.001962687s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.001980415s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.001998399s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.002014527s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.002030847s"
      },
      {
       "percentile": 0.875,
       "count": "1743",
       "duration": "0.002050303s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.002061055s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.002067967s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.002075647s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.002083711s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.002092543s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.002095039s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.002102399s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.002107647s"
      },
      {
       "percentile": 0.9625,
       "count": "1917",
       "duration": "0.002109823s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.002116223s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.002118911s"
      },
      {
       "percentile": 0.975,
       "count": "1942",
       "duration": "0.002121727s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.002126207s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.002131839s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.002135679s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.002142335s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.002153215s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.002163199s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.002185343s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.002223231s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.002227967s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.002261119s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.002264447s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.002274687s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.002434943s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.002509055s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.002509055s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.002511871s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.002574975s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.002583295s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.002583295s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.002583295s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.002636415s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.002636415s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.002649343s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.002649343s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.002649343s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.002649343s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.002649343s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.002729855s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.002729855s"
      }
     ],
     "mean": "0.001675065s",
     "pstdev": "0.000506337s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "2000"
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
     "value": "10"
    },
    {
     "name": "upstream_cx_overflow",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "326000"
    },
    {
     "name": "upstream_cx_total",
     "value": "10"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "120000"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "2000"
    }
   ],
   "execution_duration": "10.000000396s"
  },
  {
   "name": "worker_12",
   "statistics": [
    {
     "count": "1990",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000001152s"
      },
      {
       "percentile": 0.1,
       "count": "201",
       "duration": "0.000001362s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000001431s"
      },
      {
       "percentile": 0.3,
       "count": "602",
       "duration": "0.000001501s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000001561s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000001627s"
      },
      {
       "percentile": 0.55,
       "count": "1096",
       "duration": "0.000001663s"
      },
      {
       "percentile": 0.6,
       "count": "1196",
       "duration": "0.000001693s"
      },
      {
       "percentile": 0.65,
       "count": "1295",
       "duration": "0.000001735s"
      },
      {
       "percentile": 0.7,
       "count": "1398",
       "duration": "0.000001785s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.000001836s"
      },
      {
       "percentile": 0.775,
       "count": "1544",
       "duration": "0.000001872s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000001902s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000001950s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000002017s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000002132s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000002275s"
      },
      {
       "percentile": 0.9,
       "count": "1792",
       "duration": "0.000002444s"
      },
      {
       "percentile": 0.9125,
       "count": "1817",
       "duration": "0.000002493s"
      },
      {
       "percentile": 0.925,
       "count": "1844",
       "duration": "0.000002526s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000002561s"
      },
      {
       "percentile": 0.94375,
       "count": "1883",
       "duration": "0.000002585s"
      },
      {
       "percentile": 0.95,
       "count": "1892",
       "duration": "0.000002604s"
      },
      {
       "percentile": 0.95625,
       "count": "1904",
       "duration": "0.000002629s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000002665s"
      },
      {
       "percentile": 0.96875,
       "count": "1930",
       "duration": "0.000002693s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000002723s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000002735s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000002756s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000002772s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000002805s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000002843s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000002887s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000002902s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000002928s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000003014s"
      },
      {
       "percentile": 0.99296875,
       "count": "1978",
       "duration": "0.000003059s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000003059s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000003108s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000003298s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000003331s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000003908s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000003908s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000005500s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000007450s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000009139s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000009139s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000009139s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000009329s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000009329s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000011498s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000011498s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000011498s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000011498s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000011498s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000013848s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000013848s"
      }
     ],
     "mean": "0.000001744s",
     "pstdev": "0.000000588s"
    },
    {
     "count": "1990",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000104923s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.001331135s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.001595135s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.001658623s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.001720383s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.001779967s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.001814463s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.001843455s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.001878783s"
      },
      {
       "percentile": 0.7,
       "count": "1394",
       "duration": "0.001905727s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.001943231s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.001957759s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.001969471s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.001994815s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.002013695s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.002025343s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.002031487s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.002038207s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.002045759s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.002053823s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.002065151s"
      },
      {
       "percentile": 0.94375,
       "count": "1880",
       "duration": "0.002068735s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.002074239s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.002076735s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.002084031s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.002086527s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.002088511s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.002089983s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.002096447s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.002100351s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.002107263s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.002109695s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.002110335s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.002113279s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.002117503s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.002137983s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.002142207s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.002143359s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.002166655s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.002183295s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.002200703s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.002204799s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.002204799s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.002239743s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.002256639s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.002329087s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.002329087s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.002329087s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.002416767s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.002416767s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.002488831s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.002488831s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.002488831s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.002488831s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.002488831s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.002574335s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.002574335s"
      }
     ],
     "mean": "0.001658177s",
     "pstdev": "0.000502410s"
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
     "count": "1990",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000112107s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.001353087s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.001603967s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.001670143s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.001734719s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.001796159s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.001831359s"
      },
      {
       "percentile": 0.6,
       "count": "1195",
       "duration": "0.001862271s"
      },
      {
       "percentile": 0.65,
       "count": "1295",
       "duration": "0.001898431s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.001925183s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.001964863s"
      },
      {
       "percentile": 0.775,
       "count": "1544",
       "duration": "0.001979903s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.001992447s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.002016511s"
      },
      {
       "percentile": 0.85,
       "count": "1693",
       "duration": "0.002036863s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.002049279s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.002056319s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.002063743s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.002070847s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.002079679s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.002090623s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.002094591s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.002099967s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.002102143s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.002109183s"
      },
      {
       "percentile": 0.96875,
       "count": "1929",
       "duration": "0.002113407s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.002114687s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.002117119s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.002121599s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.002126463s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.002134271s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.002135679s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.002136575s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.002140543s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.002143487s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.002165119s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.002168447s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.002172543s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.002189951s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.002203647s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.002229887s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.002233087s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.002233087s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.002265343s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.002278911s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.002353535s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.002353535s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.002353535s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.002443519s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.002443519s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.002518015s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.002518015s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.002518015s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.002518015s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.002518015s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.002651647s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.002651647s"
      }
     ],
     "mean": "0.001673942s",
     "pstdev": "0.000507527s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "2000"
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
     "value": "10"
    },
    {
     "name": "upstream_cx_overflow",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "326000"
    },
    {
     "name": "upstream_cx_total",
     "value": "10"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "120000"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "2000"
    }
   ],
   "execution_duration": "10.000000381s"
  },
  {
   "name": "worker_13",
   "statistics": [
    {
     "count": "1990",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000001082s"
      },
      {
       "percentile": 0.1,
       "count": "202",
       "duration": "0.000001341s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000001408s"
      },
      {
       "percentile": 0.3,
       "count": "599",
       "duration": "0.000001464s"
      },
      {
       "percentile": 0.4,
       "count": "798",
       "duration": "0.000001525s"
      },
      {
       "percentile": 0.5,
       "count": "996",
       "duration": "0.000001588s"
      },
      {
       "percentile": 0.55,
       "count": "1096",
       "duration": "0.000001622s"
      },
      {
       "percentile": 0.6,
       "count": "1202",
       "duration": "0.000001663s"
      },
      {
       "percentile": 0.65,
       "count": "1295",
       "duration": "0.000001707s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000001752s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.000001801s"
      },
      {
       "percentile": 0.775,
       "count": "1544",
       "duration": "0.000001839s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000001876s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000001926s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000001997s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000002104s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000002260s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000002506s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000002580s"
      },
      {
       "percentile": 0.925,
       "count": "1842",
       "duration": "0.000002629s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000002671s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000002688s"
      },
      {
       "percentile": 0.95,
       "count": "1892",
       "duration": "0.000002716s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000002749s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000002767s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000002790s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000002810s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000002830s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000002865s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000002884s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000002907s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000002965s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000003009s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000003029s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000003075s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000003110s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000003277s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000003346s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000003706s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000004464s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000005266s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000006155s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000006155s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000006802s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000007063s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000007511s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000007511s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000007511s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000010366s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000010366s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000014024s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000014024s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000014024s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000014024s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000014024s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000015066s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000015066s"
      }
     ],
     "mean": "0.000001733s",
     "pstdev": "0.000000661s"
    },
    {
     "count": "1990",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000191063s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.001508223s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.001613631s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.001675391s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.001738559s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.001799615s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.001831615s"
      },
      {
       "percentile": 0.6,
       "count": "1195",
       "duration": "0.001862975s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.001895103s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.001925823s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.001958591s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.001974591s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.001997631s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.002013439s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.002028415s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.002040959s"
      },
      {
       "percentile": 0.8875,
       "count": "1768",
       "duration": "0.002050303s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.002057087s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.002065279s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.002072319s"
      },
      {
       "percentile": 0.9375,
       "count": "1867",
       "duration": "0.002079487s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.002083711s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.002086847s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.002090751s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.002095103s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.002099455s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.002101119s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.002103807s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.002109311s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.002113791s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.002118527s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.002123263s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.002133119s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.002161535s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.002174975s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.002209151s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.002217343s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.002222847s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.002280831s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.002354687s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.002460159s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.002511359s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.002511359s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.002515583s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.002574719s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.002598911s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.002598911s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.002598911s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.002617727s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.002617727s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.002644991s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.002644991s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.002644991s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.002644991s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.002644991s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.002649343s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.002649343s"
      }
     ],
     "mean": "0.001683980s",
     "pstdev": "0.000494356s"
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
     "count": "1990",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000196711s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.001515839s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.001623231s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.001687167s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.001752703s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.001817087s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.001848831s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.001881791s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.001913855s"
      },
      {
       "percentile": 0.7,
       "count": "1394",
       "duration": "0.001946815s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.001980415s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.001995519s"
      },
      {
       "percentile": 0.8,
       "count": "1593",
       "duration": "0.002021439s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.002036927s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.002052223s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.002064703s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.002075711s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.002083327s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.002090559s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.002098303s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.002106111s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.002109183s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.002112383s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.002116991s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.002122495s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.002125055s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.002127359s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.002129023s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.002134527s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.002140671s"
      },
      {
       "percentile": 0.984375,
       "count": "1960",
       "duration": "0.002143743s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.002149247s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.002158847s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.002186111s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.002201983s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.002232191s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.002253695s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.002254207s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.002305919s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.002382207s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.002527743s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.002545023s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.002545023s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.002580223s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.002610687s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.002652543s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.002652543s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.002652543s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.002705151s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.002705151s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.002735999s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.002735999s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.002735999s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.002735999s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.002735999s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.002747775s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.002747775s"
      }
     ],
     "mean": "0.001700108s",
     "pstdev": "0.000499666s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "2000"
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
     "value": "10"
    },
    {
     "name": "upstream_cx_overflow",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "326000"
    },
    {
     "name": "upstream_cx_total",
     "value": "10"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "120000"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "2000"
    }
   ],
   "execution_duration": "10.000000566s"
  },
  {
   "name": "worker_14",
   "statistics": [
    {
     "count": "1990",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000001117s"
      },
      {
       "percentile": 0.1,
       "count": "201",
       "duration": "0.000001326s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000001395s"
      },
      {
       "percentile": 0.3,
       "count": "599",
       "duration": "0.000001459s"
      },
      {
       "percentile": 0.4,
       "count": "797",
       "duration": "0.000001523s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000001587s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000001622s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000001656s"
      },
      {
       "percentile": 0.65,
       "count": "1296",
       "duration": "0.000001698s"
      },
      {
       "percentile": 0.7,
       "count": "1395",
       "duration": "0.000001740s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.000001795s"
      },
      {
       "percentile": 0.775,
       "count": "1544",
       "duration": "0.000001823s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000001858s"
      },
      {
       "percentile": 0.825,
       "count": "1643",
       "duration": "0.000001905s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000001965s"
      },
      {
       "percentile": 0.875,
       "count": "1743",
       "duration": "0.000002088s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000002209s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000002304s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000002348s"
      },
      {
       "percentile": 0.925,
       "count": "1842",
       "duration": "0.000002383s"
      },
      {
       "percentile": 0.9375,
       "count": "1867",
       "duration": "0.000002405s"
      },
      {
       "percentile": 0.94375,
       "count": "1880",
       "duration": "0.000002427s"
      },
      {
       "percentile": 0.95,
       "count": "1892",
       "duration": "0.000002448s"
      },
      {
       "percentile": 0.95625,
       "count": "1905",
       "duration": "0.000002465s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000002479s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000002512s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000002527s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000002543s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000002569s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000002597s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000002652s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000002665s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000002707s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000002742s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000002750s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000002841s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000002895s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000002899s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000003065s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000003080s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000004118s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000004306s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000004306s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000007789s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000009444s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000009992s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000009992s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000009992s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000011090s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000011090s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000011470s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000011470s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000011470s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000011470s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000011470s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000015345s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000015345s"
      }
     ],
     "mean": "0.000001697s",
     "pstdev": "0.000000629s"
    },
    {
     "count": "1990",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000114047s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.001443391s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.001593215s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.001657151s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.001717631s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.001779775s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.001810879s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.001841663s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.001874687s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.001903743s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.001938879s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.001951807s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.001967743s"
      },
      {
       "percentile": 0.825,
       "count": "1643",
       "duration": "0.001992575s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.002008575s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.002020479s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.002026943s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.002034687s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.002044095s"
      },
      {
       "percentile": 0.925,
       "count": "1843",
       "duration": "0.002051199s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.002061695s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.002067903s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.002071231s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.002075967s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.002082111s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.002084735s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.002090559s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.002093631s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.002098047s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.002104959s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.002111103s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.002116479s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.002119167s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.002131071s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.002138879s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.002155391s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.002164863s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.002189183s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.002201343s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.002220671s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.002241663s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.002291839s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.002291839s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.002363263s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.002449279s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.002450559s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.002450559s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.002450559s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.002519039s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.002519039s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.002521343s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.002521343s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.002521343s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.002521343s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.002521343s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.002592895s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.002592895s"
      }
     ],
     "mean": "0.001659210s",
     "pstdev": "0.000498133s"
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
     "count": "1990",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000119367s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.001450751s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.001600895s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.001668287s"
      },
      {
       "percentile": 0.4,
       "count": "797",
       "duration": "0.001731775s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.001795455s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.001827903s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.001859007s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.001892479s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.001923583s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.001960063s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.001972479s"
      },
      {
       "percentile": 0.8,
       "count": "1593",
       "duration": "0.001989759s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.002014847s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.002031167s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.002044479s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.002050111s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.002058559s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.002068863s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.002076543s"
      },
      {
       "percentile": 0.9375,
       "count": "1867",
       "duration": "0.002086335s"
      },
      {
       "percentile": 0.94375,
       "count": "1880",
       "duration": "0.002092863s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.002096703s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.002101375s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.002107135s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.002110591s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.002116095s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.002118911s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.002124543s"
      },
      {
       "percentile": 0.98125,
       "count": "1954",
       "duration": "0.002131839s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.002137471s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.002141823s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.002148479s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.002156671s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.002164735s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.002179583s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.002190847s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.002221439s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.002235007s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.002241407s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.002281599s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.002314879s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.002314879s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.002391551s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.002479871s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.002545407s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.002545407s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.002545407s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.002554495s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.002554495s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.002598271s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.002598271s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.002598271s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.002598271s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.002598271s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.002669183s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.002669183s"
      }
     ],
     "mean": "0.001674496s",
     "pstdev": "0.000503282s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "2000"
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
     "value": "10"
    },
    {
     "name": "upstream_cx_overflow",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "326000"
    },
    {
     "name": "upstream_cx_total",
     "value": "10"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "120000"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "2000"
    }
   ],
   "execution_duration": "10.000001003s"
  },
  {
   "name": "worker_15",
   "statistics": [
    {
     "count": "1990",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000001129s"
      },
      {
       "percentile": 0.1,
       "count": "201",
       "duration": "0.000001323s"
      },
      {
       "percentile": 0.2,
       "count": "399",
       "duration": "0.000001391s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000001454s"
      },
      {
       "percentile": 0.4,
       "count": "801",
       "duration": "0.000001508s"
      },
      {
       "percentile": 0.5,
       "count": "998",
       "duration": "0.000001562s"
      },
      {
       "percentile": 0.55,
       "count": "1097",
       "duration": "0.000001598s"
      },
      {
       "percentile": 0.6,
       "count": "1197",
       "duration": "0.000001638s"
      },
      {
       "percentile": 0.65,
       "count": "1296",
       "duration": "0.000001677s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000001716s"
      },
      {
       "percentile": 0.75,
       "count": "1496",
       "duration": "0.000001771s"
      },
      {
       "percentile": 0.775,
       "count": "1544",
       "duration": "0.000001799s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000001836s"
      },
      {
       "percentile": 0.825,
       "count": "1643",
       "duration": "0.000001884s"
      },
      {
       "percentile": 0.85,
       "count": "1693",
       "duration": "0.000001951s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000002061s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000002193s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000002526s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000002574s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000002608s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000002642s"
      },
      {
       "percentile": 0.94375,
       "count": "1880",
       "duration": "0.000002663s"
      },
      {
       "percentile": 0.95,
       "count": "1892",
       "duration": "0.000002678s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000002692s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000002711s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000002747s"
      },
      {
       "percentile": 0.971875,
       "count": "1936",
       "duration": "0.000002756s"
      },
      {
       "percentile": 0.975,
       "count": "1942",
       "duration": "0.000002772s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000002787s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000002801s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000002826s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000002877s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000002896s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000002915s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000002955s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000002998s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000003038s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000003069s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000003317s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000003321s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000004557s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000007801s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000007801s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000007861s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000008454s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000009598s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000009598s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000009598s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000011776s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000011776s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000013837s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000013837s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000013837s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000013837s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000013837s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000019485s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000019485s"
      }
     ],
     "mean": "0.000001712s",
     "pstdev": "0.000000735s"
    },
    {
     "count": "1990",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000163567s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.001449855s"
      },
      {
       "percentile": 0.2,
       "count": "399",
       "duration": "0.001584895s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.001649151s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.001716479s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.001777791s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.001808831s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.001843007s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.001874495s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.001905919s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.001936639s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.001951551s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.001968895s"
      },
      {
       "percentile": 0.825,
       "count": "1643",
       "duration": "0.001989439s"
      },
      {
       "percentile": 0.85,
       "count": "1693",
       "duration": "0.002006271s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.002020991s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.002030527s"
      },
      {
       "percentile": 0.9,
       "count": "1792",
       "duration": "0.002039743s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.002045119s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.002050943s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.002060671s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.002064767s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.002068351s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.002072831s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.002076863s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.002085247s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.002091711s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.002093375s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.002096063s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.002101247s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.002104575s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.002112255s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.002123775s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.002148223s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.002163327s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.002170879s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.002215679s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.002221055s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.002238847s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.002247295s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.002323455s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.002381823s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.002381823s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.002433407s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.002467583s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.002487551s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.002487551s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.002487551s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.002538751s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.002538751s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.002543615s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.002543615s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.002543615s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.002543615s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.002543615s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.002624639s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.002624639s"
      }
     ],
     "mean": "0.001656887s",
     "pstdev": "0.000502047s"
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
     "count": "1990",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000168615s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.001456895s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.001593663s"
      },
      {
       "percentile": 0.3,
       "count": "598",
       "duration": "0.001660799s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.001728703s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.001793407s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.001825535s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.001860095s"
      },
      {
       "percentile": 0.65,
       "count": "1295",
       "duration": "0.001892799s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.001925823s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.001957695s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.001971711s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.001990783s"
      },
      {
       "percentile": 0.825,
       "count": "1643",
       "duration": "0.002011583s"
      },
      {
       "percentile": 0.85,
       "count": "1693",
       "duration": "0.002028991s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.002044991s"
      },
      {
       "percentile": 0.8875,
       "count": "1768",
       "duration": "0.002054143s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.002062847s"
      },
      {
       "percentile": 0.9125,
       "count": "1817",
       "duration": "0.002070079s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.002075903s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.002085695s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.002089407s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.002093311s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.002098175s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.002102527s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.002109311s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.002116095s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.002118143s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.002121855s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.002125951s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.002129279s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.002141183s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.002150271s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.002172159s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.002193407s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.002196735s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.002245759s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.002247551s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.002272639s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.002275327s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.002345727s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.002412159s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.002412159s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.002500479s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.002527615s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.002571519s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.002571519s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.002571519s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.002574463s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.002574463s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.002624767s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.002624767s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.002624767s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.002624767s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.002624767s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.002697215s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.002697215s"
      }
     ],
     "mean": "0.001672328s",
     "pstdev": "0.000507205s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "2000"
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
     "value": "10"
    },
    {
     "name": "upstream_cx_overflow",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "326000"
    },
    {
     "name": "upstream_cx_total",
     "value": "10"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "120000"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "2000"
    }
   ],
   "execution_duration": "10.000000195s"
  },
  {
   "name": "global",
   "statistics": [
    {
     "count": "31840",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000000985s"
      },
      {
       "percentile": 0.1,
       "count": "3202",
       "duration": "0.000001243s"
      },
      {
       "percentile": 0.2,
       "count": "6418",
       "duration": "0.000001335s"
      },
      {
       "percentile": 0.3,
       "count": "9558",
       "duration": "0.000001407s"
      },
      {
       "percentile": 0.4,
       "count": "12745",
       "duration": "0.000001476s"
      },
      {
       "percentile": 0.5,
       "count": "15938",
       "duration": "0.000001546s"
      },
      {
       "percentile": 0.55,
       "count": "17548",
       "duration": "0.000001583s"
      },
      {
       "percentile": 0.6,
       "count": "19147",
       "duration": "0.000001625s"
      },
      {
       "percentile": 0.65,
       "count": "20703",
       "duration": "0.000001669s"
      },
      {
       "percentile": 0.7,
       "count": "22293",
       "duration": "0.000001719s"
      },
      {
       "percentile": 0.75,
       "count": "23880",
       "duration": "0.000001782s"
      },
      {
       "percentile": 0.775,
       "count": "24678",
       "duration": "0.000001818s"
      },
      {
       "percentile": 0.8,
       "count": "25487",
       "duration": "0.000001862s"
      },
      {
       "percentile": 0.825,
       "count": "26281",
       "duration": "0.000001914s"
      },
      {
       "percentile": 0.85,
       "count": "27067",
       "duration": "0.000001990s"
      },
      {
       "percentile": 0.875,
       "count": "27863",
       "duration": "0.000002119s"
      },
      {
       "percentile": 0.8875,
       "count": "28262",
       "duration": "0.000002263s"
      },
      {
       "percentile": 0.9,
       "count": "28658",
       "duration": "0.000002414s"
      },
      {
       "percentile": 0.9125,
       "count": "29054",
       "duration": "0.000002497s"
      },
      {
       "percentile": 0.925,
       "count": "29458",
       "duration": "0.000002555s"
      },
      {
       "percentile": 0.9375,
       "count": "29853",
       "duration": "0.000002603s"
      },
      {
       "percentile": 0.94375,
       "count": "30058",
       "duration": "0.000002629s"
      },
      {
       "percentile": 0.95,
       "count": "30254",
       "duration": "0.000002658s"
      },
      {
       "percentile": 0.95625,
       "count": "30454",
       "duration": "0.000002686s"
      },
      {
       "percentile": 0.9625,
       "count": "30646",
       "duration": "0.000002721s"
      },
      {
       "percentile": 0.96875,
       "count": "30847",
       "duration": "0.000002761s"
      },
      {
       "percentile": 0.971875,
       "count": "30948",
       "duration": "0.000002784s"
      },
      {
       "percentile": 0.975,
       "count": "31045",
       "duration": "0.000002809s"
      },
      {
       "percentile": 0.978125,
       "count": "31144",
       "duration": "0.000002834s"
      },
      {
       "percentile": 0.98125,
       "count": "31246",
       "duration": "0.000002871s"
      },
      {
       "percentile": 0.984375,
       "count": "31343",
       "duration": "0.000002907s"
      },
      {
       "percentile": 0.9859375,
       "count": "31393",
       "duration": "0.000002930s"
      },
      {
       "percentile": 0.9875,
       "count": "31443",
       "duration": "0.000002959s"
      },
      {
       "percentile": 0.9890625,
       "count": "31493",
       "duration": "0.000003s"
      },
      {
       "percentile": 0.990625,
       "count": "31542",
       "duration": "0.000003053s"
      },
      {
       "percentile": 0.9921875,
       "count": "31593",
       "duration": "0.000003119s"
      },
      {
       "percentile": 0.99296875,
       "count": "31618",
       "duration": "0.000003151s"
      },
      {
       "percentile": 0.99375,
       "count": "31641",
       "duration": "0.000003215s"
      },
      {
       "percentile": 0.99453125,
       "count": "31666",
       "duration": "0.000003295s"
      },
      {
       "percentile": 0.9953125,
       "count": "31691",
       "duration": "0.000003395s"
      },
      {
       "percentile": 0.99609375,
       "count": "31716",
       "duration": "0.000003927s"
      },
      {
       "percentile": 0.996484375,
       "count": "31729",
       "duration": "0.000004503s"
      },
      {
       "percentile": 0.996875,
       "count": "31741",
       "duration": "0.000005998s"
      },
      {
       "percentile": 0.997265625,
       "count": "31753",
       "duration": "0.000006802s"
      },
      {
       "percentile": 0.99765625,
       "count": "31766",
       "duration": "0.000007283s"
      },
      {
       "percentile": 0.998046875,
       "count": "31778",
       "duration": "0.000007801s"
      },
      {
       "percentile": 0.9982421875,
       "count": "31786",
       "duration": "0.000008454s"
      },
      {
       "percentile": 0.9984375,
       "count": "31791",
       "duration": "0.000008881s"
      },
      {
       "percentile": 0.9986328125,
       "count": "31797",
       "duration": "0.000009204s"
      },
      {
       "percentile": 0.998828125,
       "count": "31803",
       "duration": "0.000009647s"
      },
      {
       "percentile": 0.9990234375,
       "count": "31809",
       "duration": "0.000010271s"
      },
      {
       "percentile": 0.99912109375,
       "count": "31813",
       "duration": "0.000010477s"
      },
      {
       "percentile": 0.99921875,
       "count": "31816",
       "duration": "0.000011090s"
      },
      {
       "percentile": 0.99931640625,
       "count": "31819",
       "duration": "0.000011470s"
      },
      {
       "percentile": 0.9994140625,
       "count": "31822",
       "duration": "0.000011564s"
      },
      {
       "percentile": 0.99951171875,
       "count": "31825",
       "duration": "0.000012280s"
      },
      {
       "percentile": 0.999560546875,
       "count": "31827",
       "duration": "0.000012341s"
      },
      {
       "percentile": 0.999609375,
       "count": "31828",
       "duration": "0.000012666s"
      },
      {
       "percentile": 0.999658203125,
       "count": "31830",
       "duration": "0.000013605s"
      },
      {
       "percentile": 0.99970703125,
       "count": "31831",
       "duration": "0.000013728s"
      },
      {
       "percentile": 0.999755859375,
       "count": "31833",
       "duration": "0.000013848s"
      },
      {
       "percentile": 0.9997802734375,
       "count": "31834",
       "duration": "0.000014024s"
      },
      {
       "percentile": 0.9998046875,
       "count": "31834",
       "duration": "0.000014024s"
      },
      {
       "percentile": 0.9998291015625,
       "count": "31835",
       "duration": "0.000014135s"
      },
      {
       "percentile": 0.999853515625,
       "count": "31836",
       "duration": "0.000015066s"
      },
      {
       "percentile": 0.9998779296875,
       "count": "31837",
       "duration": "0.000015345s"
      },
      {
       "percentile": 0.99989013671875,
       "count": "31837",
       "duration": "0.000015345s"
      },
      {
       "percentile": 0.99990234375,
       "count": "31837",
       "duration": "0.000015345s"
      },
      {
       "percentile": 0.99991455078125,
       "count": "31838",
       "duration": "0.000019485s"
      },
      {
       "percentile": 0.9999267578125,
       "count": "31838",
       "duration": "0.000019485s"
      },
      {
       "percentile": 0.99993896484375,
       "count": "31839",
       "duration": "0.000021467s"
      },
      {
       "percentile": 0.999945068359375,
       "count": "31839",
       "duration": "0.000021467s"
      },
      {
       "percentile": 0.999951171875,
       "count": "31839",
       "duration": "0.000021467s"
      },
      {
       "percentile": 0.999957275390625,
       "count": "31839",
       "duration": "0.000021467s"
      },
      {
       "percentile": 0.99996337890625,
       "count": "31839",
       "duration": "0.000021467s"
      },
      {
       "percentile": 0.999969482421875,
       "count": "31840",
       "duration": "0.000023541s"
      },
      {
       "percentile": 1,
       "count": "31840",
       "duration": "0.000023541s"
      }
     ],
     "mean": "0.000001678s",
     "pstdev": "0.000000640s"
    },
    {
     "count": "31840",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000090603s"
      },
      {
       "percentile": 0.1,
       "count": "3184",
       "duration": "0.000229071s"
      },
      {
       "percentile": 0.2,
       "count": "6368",
       "duration": "0.000578527s"
      },
      {
       "percentile": 0.3,
       "count": "9552",
       "duration": "0.000975487s"
      },
      {
       "percentile": 0.4,
       "count": "12736",
       "duration": "0.001249855s"
      },
      {
       "percentile": 0.5,
       "count": "15920",
       "duration": "0.001586815s"
      },
      {
       "percentile": 0.55,
       "count": "17513",
       "duration": "0.001649087s"
      },
      {
       "percentile": 0.6,
       "count": "19107",
       "duration": "0.001711295s"
      },
      {
       "percentile": 0.65,
       "count": "20696",
       "duration": "0.001773375s"
      },
      {
       "percentile": 0.7,
       "count": "22290",
       "duration": "0.001836031s"
      },
      {
       "percentile": 0.75,
       "count": "23880",
       "duration": "0.001899007s"
      },
      {
       "percentile": 0.775,
       "count": "24676",
       "duration": "0.001929087s"
      },
      {
       "percentile": 0.8,
       "count": "25472",
       "duration": "0.001959231s"
      },
      {
       "percentile": 0.825,
       "count": "26270",
       "duration": "0.001989183s"
      },
      {
       "percentile": 0.85,
       "count": "27067",
       "duration": "0.002008831s"
      },
      {
       "percentile": 0.875,
       "count": "27861",
       "duration": "0.002028479s"
      },
      {
       "percentile": 0.8875,
       "count": "28260",
       "duration": "0.002037375s"
      },
      {
       "percentile": 0.9,
       "count": "28656",
       "duration": "0.002047487s"
      },
      {
       "percentile": 0.9125,
       "count": "29054",
       "duration": "0.002058687s"
      },
      {
       "percentile": 0.925,
       "count": "29452",
       "duration": "0.002071999s"
      },
      {
       "percentile": 0.9375,
       "count": "29852",
       "duration": "0.002091903s"
      },
      {
       "percentile": 0.94375,
       "count": "30049",
       "duration": "0.002105599s"
      },
      {
       "percentile": 0.95,
       "count": "30248",
       "duration": "0.002121343s"
      },
      {
       "percentile": 0.95625,
       "count": "30447",
       "duration": "0.002138879s"
      },
      {
       "percentile": 0.9625,
       "count": "30648",
       "duration": "0.002154623s"
      },
      {
       "percentile": 0.96875,
       "count": "30847",
       "duration": "0.002169471s"
      },
      {
       "percentile": 0.971875,
       "count": "30945",
       "duration": "0.002175615s"
      },
      {
       "percentile": 0.975,
       "count": "31048",
       "duration": "0.002180991s"
      },
      {
       "percentile": 0.978125,
       "count": "31145",
       "duration": "0.002185855s"
      },
      {
       "percentile": 0.98125,
       "count": "31243",
       "duration": "0.002192639s"
      },
      {
       "percentile": 0.984375,
       "count": "31343",
       "duration": "0.002199167s"
      },
      {
       "percentile": 0.9859375,
       "count": "31393",
       "duration": "0.002202623s"
      },
      {
       "percentile": 0.9875,
       "count": "31444",
       "duration": "0.002206079s"
      },
      {
       "percentile": 0.9890625,
       "count": "31492",
       "duration": "0.002210559s"
      },
      {
       "percentile": 0.990625,
       "count": "31544",
       "duration": "0.002214527s"
      },
      {
       "percentile": 0.9921875,
       "count": "31592",
       "duration": "0.002218879s"
      },
      {
       "percentile": 0.99296875,
       "count": "31617",
       "duration": "0.002223103s"
      },
      {
       "percentile": 0.99375,
       "count": "31642",
       "duration": "0.002227071s"
      },
      {
       "percentile": 0.99453125,
       "count": "31666",
       "duration": "0.002231679s"
      },
      {
       "percentile": 0.9953125,
       "count": "31691",
       "duration": "0.002241663s"
      },
      {
       "percentile": 0.99609375,
       "count": "31716",
       "duration": "0.002303231s"
      },
      {
       "percentile": 0.996484375,
       "count": "31729",
       "duration": "0.002321279s"
      },
      {
       "percentile": 0.996875,
       "count": "31741",
       "duration": "0.002333695s"
      },
      {
       "percentile": 0.997265625,
       "count": "31753",
       "duration": "0.002349823s"
      },
      {
       "percentile": 0.99765625,
       "count": "31766",
       "duration": "0.002404735s"
      },
      {
       "percentile": 0.998046875,
       "count": "31778",
       "duration": "0.002467583s"
      },
      {
       "percentile": 0.9982421875,
       "count": "31785",
       "duration": "0.002502655s"
      },
      {
       "percentile": 0.9984375,
       "count": "31791",
       "duration": "0.002526079s"
      },
      {
       "percentile": 0.9986328125,
       "count": "31797",
       "duration": "0.002550271s"
      },
      {
       "percentile": 0.998828125,
       "count": "31803",
       "duration": "0.002559103s"
      },
      {
       "percentile": 0.9990234375,
       "count": "31809",
       "duration": "0.002575615s"
      },
      {
       "percentile": 0.99912109375,
       "count": "31813",
       "duration": "0.002578431s"
      },
      {
       "percentile": 0.99921875,
       "count": "31816",
       "duration": "0.002587647s"
      },
      {
       "percentile": 0.99931640625,
       "count": "31819",
       "duration": "0.002593023s"
      },
      {
       "percentile": 0.9994140625,
       "count": "31822",
       "duration": "0.002609791s"
      },
      {
       "percentile": 0.99951171875,
       "count": "31825",
       "duration": "0.002614783s"
      },
      {
       "percentile": 0.999560546875,
       "count": "31827",
       "duration": "0.002624639s"
      },
      {
       "percentile": 0.999609375,
       "count": "31828",
       "duration": "0.002625279s"
      },
      {
       "percentile": 0.999658203125,
       "count": "31830",
       "duration": "0.002635263s"
      },
      {
       "percentile": 0.99970703125,
       "count": "31831",
       "duration": "0.002644991s"
      },
      {
       "percentile": 0.999755859375,
       "count": "31833",
       "duration": "0.002680191s"
      },
      {
       "percentile": 0.9997802734375,
       "count": "31834",
       "duration": "0.002700415s"
      },
      {
       "percentile": 0.9998046875,
       "count": "31834",
       "duration": "0.002700415s"
      },
      {
       "percentile": 0.9998291015625,
       "count": "31835",
       "duration": "0.002710271s"
      },
      {
       "percentile": 0.999853515625,
       "count": "31836",
       "duration": "0.002720511s"
      },
      {
       "percentile": 0.9998779296875,
       "count": "31837",
       "duration": "0.002732159s"
      },
      {
       "percentile": 0.99989013671875,
       "count": "31837",
       "duration": "0.002732159s"
      },
      {
       "percentile": 0.99990234375,
       "count": "31837",
       "duration": "0.002732159s"
      },
      {
       "percentile": 0.99991455078125,
       "count": "31838",
       "duration": "0.002737791s"
      },
      {
       "percentile": 0.9999267578125,
       "count": "31838",
       "duration": "0.002737791s"
      },
      {
       "percentile": 0.99993896484375,
       "count": "31839",
       "duration": "0.002750463s"
      },
      {
       "percentile": 0.999945068359375,
       "count": "31839",
       "duration": "0.002750463s"
      },
      {
       "percentile": 0.999951171875,
       "count": "31839",
       "duration": "0.002750463s"
      },
      {
       "percentile": 0.999957275390625,
       "count": "31839",
       "duration": "0.002750463s"
      },
      {
       "percentile": 0.99996337890625,
       "count": "31839",
       "duration": "0.002750463s"
      },
      {
       "percentile": 0.999969482421875,
       "count": "31840",
       "duration": "0.002755711s"
      },
      {
       "percentile": 1,
       "count": "31840",
       "duration": "0.002755711s"
      }
     ],
     "mean": "0.001334629s",
     "pstdev": "0.000664391s"
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
     "count": "31840",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000099879s"
      },
      {
       "percentile": 0.1,
       "count": "3184",
       "duration": "0.000236151s"
      },
      {
       "percentile": 0.2,
       "count": "6368",
       "duration": "0.000593759s"
      },
      {
       "percentile": 0.3,
       "count": "9552",
       "duration": "0.000994495s"
      },
      {
       "percentile": 0.4,
       "count": "12736",
       "duration": "0.001262527s"
      },
      {
       "percentile": 0.5,
       "count": "15920",
       "duration": "0.001595455s"
      },
      {
       "percentile": 0.55,
       "count": "17514",
       "duration": "0.001659967s"
      },
      {
       "percentile": 0.6,
       "count": "19104",
       "duration": "0.001723967s"
      },
      {
       "percentile": 0.65,
       "count": "20696",
       "duration": "0.001788607s"
      },
      {
       "percentile": 0.7,
       "count": "22289",
       "duration": "0.001853439s"
      },
      {
       "percentile": 0.75,
       "count": "23880",
       "duration": "0.001917503s"
      },
      {
       "percentile": 0.775,
       "count": "24677",
       "duration": "0.001949055s"
      },
      {
       "percentile": 0.8,
       "count": "25473",
       "duration": "0.001978623s"
      },
      {
       "percentile": 0.825,
       "count": "26270",
       "duration": "0.002005631s"
      },
      {
       "percentile": 0.85,
       "count": "27066",
       "duration": "0.002027839s"
      },
      {
       "percentile": 0.875,
       "count": "27864",
       "duration": "0.002047743s"
      },
      {
       "percentile": 0.8875,
       "count": "28259",
       "duration": "0.002058367s"
      },
      {
       "percentile": 0.9,
       "count": "28656",
       "duration": "0.002069311s"
      },
      {
       "percentile": 0.9125,
       "count": "29054",
       "duration": "0.002081599s"
      },
      {
       "percentile": 0.925,
       "count": "29453",
       "duration": "0.002095871s"
      },
      {
       "percentile": 0.9375,
       "count": "29851",
       "duration": "0.002115199s"
      },
      {
       "percentile": 0.94375,
       "count": "30051",
       "duration": "0.002125439s"
      },
      {
       "percentile": 0.95,
       "count": "30249",
       "duration": "0.002138239s"
      },
      {
       "percentile": 0.95625,
       "count": "30447",
       "duration": "0.002152319s"
      },
      {
       "percentile": 0.9625,
       "count": "30646",
       "duration": "0.002166271s"
      },
      {
       "percentile": 0.96875,
       "count": "30845",
       "duration": "0.002180095s"
      },
      {
       "percentile": 0.971875,
       "count": "30945",
       "duration": "0.002186623s"
      },
      {
       "percentile": 0.975,
       "count": "31044",
       "duration": "0.002192767s"
      },
      {
       "percentile": 0.978125,
       "count": "31144",
       "duration": "0.002199295s"
      },
      {
       "percentile": 0.98125,
       "count": "31244",
       "duration": "0.002205823s"
      },
      {
       "percentile": 0.984375,
       "count": "31343",
       "duration": "0.002212095s"
      },
      {
       "percentile": 0.9859375,
       "count": "31393",
       "duration": "0.002216703s"
      },
      {
       "percentile": 0.9875,
       "count": "31443",
       "duration": "0.002220671s"
      },
      {
       "percentile": 0.9890625,
       "count": "31492",
       "duration": "0.002223871s"
      },
      {
       "percentile": 0.990625,
       "count": "31542",
       "duration": "0.002230399s"
      },
      {
       "percentile": 0.9921875,
       "count": "31593",
       "duration": "0.002236159s"
      },
      {
       "percentile": 0.99296875,
       "count": "31617",
       "duration": "0.002240767s"
      },
      {
       "percentile": 0.99375,
       "count": "31641",
       "duration": "0.002244991s"
      },
      {
       "percentile": 0.99453125,
       "count": "31666",
       "duration": "0.002253695s"
      },
      {
       "percentile": 0.9953125,
       "count": "31691",
       "duration": "0.002274687s"
      },
      {
       "percentile": 0.99609375,
       "count": "31716",
       "duration": "0.002314879s"
      },
      {
       "percentile": 0.996484375,
       "count": "31729",
       "duration": "0.002335615s"
      },
      {
       "percentile": 0.996875,
       "count": "31741",
       "duration": "0.002356863s"
      },
      {
       "percentile": 0.997265625,
       "count": "31753",
       "duration": "0.002378367s"
      },
      {
       "percentile": 0.99765625,
       "count": "31766",
       "duration": "0.002443519s"
      },
      {
       "percentile": 0.998046875,
       "count": "31778",
       "duration": "0.002527743s"
      },
      {
       "percentile": 0.9982421875,
       "count": "31785",
       "duration": "0.002554623s"
      },
      {
       "percentile": 0.9984375,
       "count": "31791",
       "duration": "0.002574463s"
      },
      {
       "percentile": 0.9986328125,
       "count": "31797",
       "duration": "0.002588159s"
      },
      {
       "percentile": 0.998828125,
       "count": "31803",
       "duration": "0.002600831s"
      },
      {
       "percentile": 0.9990234375,
       "count": "31809",
       "duration": "0.002619263s"
      },
      {
       "percentile": 0.99912109375,
       "count": "31813",
       "duration": "0.002631423s"
      },
      {
       "percentile": 0.99921875,
       "count": "31816",
       "duration": "0.002636415s"
      },
      {
       "percentile": 0.99931640625,
       "count": "31819",
       "duration": "0.002651647s"
      },
      {
       "percentile": 0.9994140625,
       "count": "31822",
       "duration": "0.002658175s"
      },
      {
       "percentile": 0.99951171875,
       "count": "31825",
       "duration": "0.002670207s"
      },
      {
       "percentile": 0.999560546875,
       "count": "31827",
       "duration": "0.002689279s"
      },
      {
       "percentile": 0.999609375,
       "count": "31828",
       "duration": "0.002697215s"
      },
      {
       "percentile": 0.999658203125,
       "count": "31830",
       "duration": "0.002705663s"
      },
      {
       "percentile": 0.99970703125,
       "count": "31831",
       "duration": "0.002711551s"
      },
      {
       "percentile": 0.999755859375,
       "count": "31833",
       "duration": "0.002729855s"
      },
      {
       "percentile": 0.9997802734375,
       "count": "31834",
       "duration": "0.002735871s"
      },
      {
       "percentile": 0.9998046875,
       "count": "31834",
       "duration": "0.002735871s"
      },
      {
       "percentile": 0.9998291015625,
       "count": "31835",
       "duration": "0.002735999s"
      },
      {
       "percentile": 0.999853515625,
       "count": "31836",
       "duration": "0.002747775s"
      },
      {
       "percentile": 0.9998779296875,
       "count": "31837",
       "duration": "0.002749823s"
      },
      {
       "percentile": 0.99989013671875,
       "count": "31837",
       "duration": "0.002749823s"
      },
      {
       "percentile": 0.99990234375,
       "count": "31837",
       "duration": "0.002749823s"
      },
      {
       "percentile": 0.99991455078125,
       "count": "31838",
       "duration": "0.002758271s"
      },
      {
       "percentile": 0.9999267578125,
       "count": "31838",
       "duration": "0.002758271s"
      },
      {
       "percentile": 0.99993896484375,
       "count": "31839",
       "duration": "0.002773375s"
      },
      {
       "percentile": 0.999945068359375,
       "count": "31839",
       "duration": "0.002773375s"
      },
      {
       "percentile": 0.999951171875,
       "count": "31839",
       "duration": "0.002773375s"
      },
      {
       "percentile": 0.999957275390625,
       "count": "31839",
       "duration": "0.002773375s"
      },
      {
       "percentile": 0.99996337890625,
       "count": "31839",
       "duration": "0.002773375s"
      },
      {
       "percentile": 0.999969482421875,
       "count": "31840",
       "duration": "0.002780927s"
      },
      {
       "percentile": 1,
       "count": "31840",
       "duration": "0.002780927s"
      }
     ],
     "mean": "0.001349996s",
     "pstdev": "0.000665795s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "32000"
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
     "value": "160"
    },
    {
     "name": "upstream_cx_overflow",
     "value": "16"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "5216000"
    },
    {
     "name": "upstream_cx_total",
     "value": "160"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "1920000"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "16"
    },
    {
     "name": "upstream_rq_total",
     "value": "32000"
    }
   ],
   "execution_duration": "10.000000463s"
  }
 ],
 "timestamp": "2019-11-12T13:56:13.914939927Z"
}
