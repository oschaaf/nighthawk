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
  "requests_per_second": 200,
  "connections": 10,
  "duration": "10s",
  "timeout": "30s",
  "h2": true,
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
       "duration": "0.000002409s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000002758s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000002866s"
      },
      {
       "percentile": 0.3,
       "count": "599",
       "duration": "0.000002958s"
      },
      {
       "percentile": 0.4,
       "count": "799",
       "duration": "0.000003045s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000003145s"
      },
      {
       "percentile": 0.55,
       "count": "1096",
       "duration": "0.000003201s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000003256s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000003324s"
      },
      {
       "percentile": 0.7,
       "count": "1394",
       "duration": "0.000003403s"
      },
      {
       "percentile": 0.75,
       "count": "1494",
       "duration": "0.000003492s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000003554s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000003612s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000003704s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000003791s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000003984s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000004297s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000005024s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000005243s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000005350s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000005473s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000005524s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000005573s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000005627s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000005694s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000005753s"
      },
      {
       "percentile": 0.971875,
       "count": "1936",
       "duration": "0.000005789s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000005810s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000005862s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000005895s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000005911s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000006004s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000006042s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000006100s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000006214s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000006260s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000006309s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000006370s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000006441s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000006718s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000006966s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000006967s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000006967s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000007295s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000007443s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000007455s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000007455s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000007455s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000007928s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000007928s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000008669s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000008669s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000008669s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000008669s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000008669s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000014083s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000014083s"
      }
     ],
     "mean": "0.000003411s",
     "pstdev": "0.000000880s"
    },
    {
     "count": "1990",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000200087s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000208511s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000211831s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000214359s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000216623s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000218863s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000219879s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000221143s"
      },
      {
       "percentile": 0.65,
       "count": "1295",
       "duration": "0.000222327s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000223711s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.000225127s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000225815s"
      },
      {
       "percentile": 0.8,
       "count": "1594",
       "duration": "0.000226719s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000227423s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000228343s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000229271s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000229711s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000230423s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000231047s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000232111s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000233231s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000234335s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000235863s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000237231s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000238959s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000240527s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000242263s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000243023s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000244935s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000247071s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000249175s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000252167s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000252967s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000255847s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000257623s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000259407s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000262207s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000262799s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000268127s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000421151s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000438063s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000441295s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000441295s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000444543s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000448287s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000451871s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000451871s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000451871s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000455871s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000455871s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000459967s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000459967s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000459967s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000459967s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000459967s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000462655s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000462655s"
      }
     ],
     "mean": "0.000220736s",
     "pstdev": "0.000018468s"
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
       "duration": "0.000223263s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000235863s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000239359s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000241639s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000243503s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000245175s"
      },
      {
       "percentile": 0.55,
       "count": "1097",
       "duration": "0.000246127s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000246943s"
      },
      {
       "percentile": 0.65,
       "count": "1295",
       "duration": "0.000247791s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000248759s"
      },
      {
       "percentile": 0.75,
       "count": "1494",
       "duration": "0.000249791s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000250319s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000250935s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000251503s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000252295s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000253359s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000254031s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000254679s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000255455s"
      },
      {
       "percentile": 0.925,
       "count": "1842",
       "duration": "0.000256615s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000258071s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000259239s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000260639s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000262735s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000268255s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000270975s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000272143s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000273471s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000274191s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000276207s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000278527s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000281071s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000284943s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000288799s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000291583s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000293919s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000296031s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000296495s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000300607s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000474191s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000478767s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000480639s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000480639s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000481919s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000483151s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000485327s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000485327s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000485327s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000486607s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000486607s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000487919s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000487919s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000487919s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000487919s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000487919s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000489711s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000489711s"
      }
     ],
     "mean": "0.000246817s",
     "pstdev": "0.000019180s"
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
     "name": "upstream_cx_http2_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "114303"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "26079"
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
   "name": "worker_1",
   "statistics": [
    {
     "count": "1990",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000002252s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000002590s"
      },
      {
       "percentile": 0.2,
       "count": "399",
       "duration": "0.000002690s"
      },
      {
       "percentile": 0.3,
       "count": "599",
       "duration": "0.000002771s"
      },
      {
       "percentile": 0.4,
       "count": "799",
       "duration": "0.000002850s"
      },
      {
       "percentile": 0.5,
       "count": "996",
       "duration": "0.000002916s"
      },
      {
       "percentile": 0.55,
       "count": "1097",
       "duration": "0.000002970s"
      },
      {
       "percentile": 0.6,
       "count": "1197",
       "duration": "0.000003012s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000003064s"
      },
      {
       "percentile": 0.7,
       "count": "1395",
       "duration": "0.000003131s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.000003201s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000003252s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000003297s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000003355s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000003441s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000003614s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000003807s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000005082s"
      },
      {
       "percentile": 0.9125,
       "count": "1817",
       "duration": "0.000005345s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000005419s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000005517s"
      },
      {
       "percentile": 0.94375,
       "count": "1881",
       "duration": "0.000005552s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000005578s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000005639s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000005684s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000005728s"
      },
      {
       "percentile": 0.971875,
       "count": "1936",
       "duration": "0.000005777s"
      },
      {
       "percentile": 0.975,
       "count": "1942",
       "duration": "0.000005796s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000005813s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000005845s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000005880s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000005946s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000005967s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000005997s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000006071s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000006137s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000006180s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000006197s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000006230s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000006264s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000006551s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000006823s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000006823s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000006913s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000008569s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000008680s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000008680s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000008680s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000011329s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000011329s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000012927s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000012927s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000012927s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000012927s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000012927s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000013588s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000013588s"
      }
     ],
     "mean": "0.000003212s",
     "pstdev": "0.000000950s"
    },
    {
     "count": "1990",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000259783s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000275871s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000279103s"
      },
      {
       "percentile": 0.3,
       "count": "598",
       "duration": "0.000282239s"
      },
      {
       "percentile": 0.4,
       "count": "797",
       "duration": "0.000284975s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000287503s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000288863s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000290175s"
      },
      {
       "percentile": 0.65,
       "count": "1295",
       "duration": "0.000291343s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000292815s"
      },
      {
       "percentile": 0.75,
       "count": "1494",
       "duration": "0.000294271s"
      },
      {
       "percentile": 0.775,
       "count": "1544",
       "duration": "0.000295295s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000296319s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000297663s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000299263s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000301919s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000303711s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000306255s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000338799s"
      },
      {
       "percentile": 0.925,
       "count": "1842",
       "duration": "0.000421343s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000430399s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000433599s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000436735s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000439391s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000443839s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000448095s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000451087s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000453007s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000455183s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000458927s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000468527s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000485071s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000489967s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000494415s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000501183s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000509791s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000512447s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000513871s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000514591s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000515935s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000517391s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000520031s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000520031s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000522031s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000523679s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000526079s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000526079s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000526079s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000529183s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000529183s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000533439s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000533439s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000533439s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000533439s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000533439s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000535903s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000535903s"
      }
     ],
     "mean": "0.000300337s",
     "pstdev": "0.000046629s"
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
       "duration": "0.000294639s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000303167s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000305743s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000307759s"
      },
      {
       "percentile": 0.4,
       "count": "797",
       "duration": "0.000309551s"
      },
      {
       "percentile": 0.5,
       "count": "998",
       "duration": "0.000311407s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000312287s"
      },
      {
       "percentile": 0.6,
       "count": "1196",
       "duration": "0.000313327s"
      },
      {
       "percentile": 0.65,
       "count": "1295",
       "duration": "0.000314399s"
      },
      {
       "percentile": 0.7,
       "count": "1394",
       "duration": "0.000315631s"
      },
      {
       "percentile": 0.75,
       "count": "1495",
       "duration": "0.000317343s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000318063s"
      },
      {
       "percentile": 0.8,
       "count": "1593",
       "duration": "0.000319151s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000320479s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000322335s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000324943s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000326751s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000329471s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000374015s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000447599s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000454607s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000457711s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000460655s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000464351s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000468543s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000472303s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000474607s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000476783s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000479039s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000483119s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000490671s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000528255s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000531551s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000535007s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000536927s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000539423s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000542175s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000543551s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000545407s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000546559s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000548575s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000549887s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000549887s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000551583s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000553279s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000554783s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000554783s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000554783s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000556319s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000556319s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000558175s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000558175s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000558175s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000558175s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000558175s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000560127s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000560127s"
      }
     ],
     "mean": "0.000325252s",
     "pstdev": "0.000047065s"
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
     "name": "upstream_cx_http2_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "114303"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "26079"
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
   "execution_duration": "10.000000164s"
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
       "duration": "0.000002278s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000002723s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000002830s"
      },
      {
       "percentile": 0.3,
       "count": "599",
       "duration": "0.000002907s"
      },
      {
       "percentile": 0.4,
       "count": "799",
       "duration": "0.000002984s"
      },
      {
       "percentile": 0.5,
       "count": "996",
       "duration": "0.000003070s"
      },
      {
       "percentile": 0.55,
       "count": "1098",
       "duration": "0.000003109s"
      },
      {
       "percentile": 0.6,
       "count": "1199",
       "duration": "0.000003159s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000003214s"
      },
      {
       "percentile": 0.7,
       "count": "1395",
       "duration": "0.000003268s"
      },
      {
       "percentile": 0.75,
       "count": "1494",
       "duration": "0.000003361s"
      },
      {
       "percentile": 0.775,
       "count": "1544",
       "duration": "0.000003401s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000003462s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000003541s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000003633s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000003774s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000004147s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000005623s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000005838s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000005943s"
      },
      {
       "percentile": 0.9375,
       "count": "1867",
       "duration": "0.000006027s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000006065s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000006125s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000006168s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000006236s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000006288s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000006330s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000006353s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000006397s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000006457s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000006568s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000006615s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000006688s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000006762s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000006807s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000006920s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000007085s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000007090s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000007204s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000007310s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000007881s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000008010s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000008010s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000008069s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000008299s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000008327s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000008327s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000008327s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000008511s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000008511s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000010701s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000010701s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000010701s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000010701s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000010701s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000013906s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000013906s"
      }
     ],
     "mean": "0.000003403s",
     "pstdev": "0.000001054s"
    },
    {
     "count": "1990",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000324447s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000332767s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000335695s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000338431s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000341215s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000343759s"
      },
      {
       "percentile": 0.55,
       "count": "1096",
       "duration": "0.000345183s"
      },
      {
       "percentile": 0.6,
       "count": "1196",
       "duration": "0.000346447s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000347823s"
      },
      {
       "percentile": 0.7,
       "count": "1394",
       "duration": "0.000348991s"
      },
      {
       "percentile": 0.75,
       "count": "1494",
       "duration": "0.000350351s"
      },
      {
       "percentile": 0.775,
       "count": "1544",
       "duration": "0.000350959s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000351631s"
      },
      {
       "percentile": 0.825,
       "count": "1643",
       "duration": "0.000352479s"
      },
      {
       "percentile": 0.85,
       "count": "1693",
       "duration": "0.000353215s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000354175s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000354895s"
      },
      {
       "percentile": 0.9,
       "count": "1792",
       "duration": "0.000355471s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000356015s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000357039s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000358239s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000358671s"
      },
      {
       "percentile": 0.95,
       "count": "1892",
       "duration": "0.000359407s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000360335s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000361519s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000364047s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000366079s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000367663s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000373151s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000385647s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000398447s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000467759s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000471711s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000475007s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000477135s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000478847s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000481071s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000482607s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000484815s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000485343s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000487247s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000487311s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000487311s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000488767s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000489023s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000496751s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000496751s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000496751s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000510063s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000510063s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000511983s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000511983s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000511983s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000511983s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000511983s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000528287s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000528287s"
      }
     ],
     "mean": "0.000346019s",
     "pstdev": "0.000019233s"
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
       "duration": "0.000355327s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000362687s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000364847s"
      },
      {
       "percentile": 0.3,
       "count": "598",
       "duration": "0.000366671s"
      },
      {
       "percentile": 0.4,
       "count": "797",
       "duration": "0.000368271s"
      },
      {
       "percentile": 0.5,
       "count": "996",
       "duration": "0.000369743s"
      },
      {
       "percentile": 0.55,
       "count": "1097",
       "duration": "0.000370575s"
      },
      {
       "percentile": 0.6,
       "count": "1195",
       "duration": "0.000371359s"
      },
      {
       "percentile": 0.65,
       "count": "1296",
       "duration": "0.000372223s"
      },
      {
       "percentile": 0.7,
       "count": "1394",
       "duration": "0.000373039s"
      },
      {
       "percentile": 0.75,
       "count": "1494",
       "duration": "0.000374047s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000374623s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000375215s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000375935s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000376799s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000377839s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000378335s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000378959s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000379743s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000380815s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000381999s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000382783s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000383839s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000385727s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000387727s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000391247s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000395007s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000403295s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000411999s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000417423s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000424479s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000497471s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000499935s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000502447s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000504143s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000506863s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000508319s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000508447s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000511375s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000543775s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000548895s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000550431s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000550431s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000551711s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000553887s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000556415s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000556415s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000556415s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000557727s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000557727s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000559007s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000559007s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000559007s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000559007s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000559007s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000560607s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000560607s"
      }
     ],
     "mean": "0.000372787s",
     "pstdev": "0.000019948s"
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
     "name": "upstream_cx_http2_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "114303"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "26079"
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
   "execution_duration": "10.000000004s"
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
       "duration": "0.000002433s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000002853s"
      },
      {
       "percentile": 0.2,
       "count": "401",
       "duration": "0.000002963s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000003061s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000003145s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000003240s"
      },
      {
       "percentile": 0.55,
       "count": "1098",
       "duration": "0.000003293s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000003345s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000003406s"
      },
      {
       "percentile": 0.7,
       "count": "1395",
       "duration": "0.000003489s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.000003546s"
      },
      {
       "percentile": 0.775,
       "count": "1544",
       "duration": "0.000003613s"
      },
      {
       "percentile": 0.8,
       "count": "1593",
       "duration": "0.000003690s"
      },
      {
       "percentile": 0.825,
       "count": "1643",
       "duration": "0.000003770s"
      },
      {
       "percentile": 0.85,
       "count": "1693",
       "duration": "0.000003870s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000004010s"
      },
      {
       "percentile": 0.8875,
       "count": "1769",
       "duration": "0.000004283s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000005451s"
      },
      {
       "percentile": 0.9125,
       "count": "1817",
       "duration": "0.000005890s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000006042s"
      },
      {
       "percentile": 0.9375,
       "count": "1867",
       "duration": "0.000006131s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000006200s"
      },
      {
       "percentile": 0.95,
       "count": "1893",
       "duration": "0.000006246s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000006315s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000006367s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000006443s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000006472s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000006499s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000006538s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000006600s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000006638s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000006647s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000006682s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000006754s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000006787s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000006822s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000006932s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000006967s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000007044s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000007147s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000007265s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000007499s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000007499s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000008092s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000008149s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000008734s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000008734s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000008734s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000010705s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000010705s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000012533s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000012533s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000012533s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000012533s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000012533s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000015617s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000015617s"
      }
     ],
     "mean": "0.000003560s",
     "pstdev": "0.000001052s"
    },
    {
     "count": "1990",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000340959s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000353887s"
      },
      {
       "percentile": 0.2,
       "count": "399",
       "duration": "0.000357055s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000359871s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000362719s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000365503s"
      },
      {
       "percentile": 0.55,
       "count": "1096",
       "duration": "0.000366799s"
      },
      {
       "percentile": 0.6,
       "count": "1195",
       "duration": "0.000368303s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000369599s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000370943s"
      },
      {
       "percentile": 0.75,
       "count": "1494",
       "duration": "0.000372431s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000373183s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000374015s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000374815s"
      },
      {
       "percentile": 0.85,
       "count": "1693",
       "duration": "0.000375679s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000376991s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000377871s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000378767s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000379935s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000381903s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000384687s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000387327s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000390559s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000394639s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000398783s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000403263s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000407119s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000412319s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000419135s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000596799s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000623743s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.001236607s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.001245375s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.001252031s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.001259327s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.001267135s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.001272767s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.001275263s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.001279423s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.001348287s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.001352191s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.001354751s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.001354751s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.001357503s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.001360127s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.001363391s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.001363391s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.001363391s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.001365887s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.001365887s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.001368831s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.001368831s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.001368831s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.001368831s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.001368831s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.001370687s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.001370687s"
      }
     ],
     "mean": "0.000381216s",
     "pstdev": "0.000114450s"
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
       "duration": "0.000371727s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000384783s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000387263s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000389359s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000391087s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000392911s"
      },
      {
       "percentile": 0.55,
       "count": "1096",
       "duration": "0.000393663s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000394671s"
      },
      {
       "percentile": 0.65,
       "count": "1295",
       "duration": "0.000395743s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000396671s"
      },
      {
       "percentile": 0.75,
       "count": "1494",
       "duration": "0.000397903s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000398479s"
      },
      {
       "percentile": 0.8,
       "count": "1593",
       "duration": "0.000399215s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000400031s"
      },
      {
       "percentile": 0.85,
       "count": "1694",
       "duration": "0.000401007s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000402319s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000403423s"
      },
      {
       "percentile": 0.9,
       "count": "1792",
       "duration": "0.000404159s"
      },
      {
       "percentile": 0.9125,
       "count": "1817",
       "duration": "0.000405695s"
      },
      {
       "percentile": 0.925,
       "count": "1842",
       "duration": "0.000408207s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000413999s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000418431s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000422047s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000425631s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000430207s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000434735s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000439023s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000442575s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000451343s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000650111s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000666143s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.001267519s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.001271935s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.001276799s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.001291327s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.001295999s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.001299711s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.001301311s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.001304639s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.001380287s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.001384127s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.001385791s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.001385791s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.001387135s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.001388799s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.001390207s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.001390207s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.001390207s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.001391615s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.001391615s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.001393279s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.001393279s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.001393279s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.001393279s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.001393279s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.001395519s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.001395519s"
      }
     ],
     "mean": "0.000409421s",
     "pstdev": "0.000114605s"
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
     "name": "upstream_cx_http2_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "114303"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "26079"
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
   "execution_duration": "10.000000474s"
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
       "duration": "0.000002272s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000002610s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000002718s"
      },
      {
       "percentile": 0.3,
       "count": "598",
       "duration": "0.000002816s"
      },
      {
       "percentile": 0.4,
       "count": "797",
       "duration": "0.000002892s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000002986s"
      },
      {
       "percentile": 0.55,
       "count": "1098",
       "duration": "0.000003035s"
      },
      {
       "percentile": 0.6,
       "count": "1195",
       "duration": "0.000003088s"
      },
      {
       "percentile": 0.65,
       "count": "1296",
       "duration": "0.000003144s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000003207s"
      },
      {
       "percentile": 0.75,
       "count": "1494",
       "duration": "0.000003301s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000003347s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000003425s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000003496s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000003606s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000003755s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000003955s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000005117s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000005322s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000005428s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000005488s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000005527s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000005557s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000005634s"
      },
      {
       "percentile": 0.9625,
       "count": "1917",
       "duration": "0.000005690s"
      },
      {
       "percentile": 0.96875,
       "count": "1929",
       "duration": "0.000005772s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000005796s"
      },
      {
       "percentile": 0.975,
       "count": "1942",
       "duration": "0.000005824s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000005845s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000005874s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000005946s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000005991s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000006023s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000006059s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000006130s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000006260s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000006277s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000006295s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000006374s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000006511s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000006563s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000006570s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000006570s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000006633s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000006664s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000006805s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000006805s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000006805s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000007466s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000007466s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000007594s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000007594s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000007594s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000007594s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000007594s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000013717s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000013717s"
      }
     ],
     "mean": "0.000003261s",
     "pstdev": "0.000000907s"
    },
    {
     "count": "1990",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000196831s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000203743s"
      },
      {
       "percentile": 0.2,
       "count": "399",
       "duration": "0.000206487s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000208815s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000211231s"
      },
      {
       "percentile": 0.5,
       "count": "996",
       "duration": "0.000213391s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000214415s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000215471s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000216551s"
      },
      {
       "percentile": 0.7,
       "count": "1394",
       "duration": "0.000217735s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.000218783s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000219295s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000220007s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000220503s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000221207s"
      },
      {
       "percentile": 0.875,
       "count": "1744",
       "duration": "0.000222151s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000222431s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000222807s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000223351s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000223935s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000224647s"
      },
      {
       "percentile": 0.94375,
       "count": "1880",
       "duration": "0.000225063s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000225711s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000226183s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000227423s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000229063s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000232135s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000237215s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000246271s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000348607s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000355631s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000359903s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000361935s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000367391s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000460655s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000463295s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000465359s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000465439s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000467439s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000467471s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000469359s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000469695s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000469695s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000471215s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000471999s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000473935s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000473935s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000473935s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000476783s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000476783s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000479263s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000479263s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000479263s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000479263s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000479263s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000480319s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000480319s"
      }
     ],
     "mean": "0.000217164s",
     "pstdev": "0.000030005s"
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
       "duration": "0.000221079s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000230807s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000233183s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000235103s"
      },
      {
       "percentile": 0.4,
       "count": "797",
       "duration": "0.000236967s"
      },
      {
       "percentile": 0.5,
       "count": "996",
       "duration": "0.000238655s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000239551s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000240463s"
      },
      {
       "percentile": 0.65,
       "count": "1295",
       "duration": "0.000241335s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000242231s"
      },
      {
       "percentile": 0.75,
       "count": "1494",
       "duration": "0.000243175s"
      },
      {
       "percentile": 0.775,
       "count": "1546",
       "duration": "0.000243767s"
      },
      {
       "percentile": 0.8,
       "count": "1593",
       "duration": "0.000244215s"
      },
      {
       "percentile": 0.825,
       "count": "1643",
       "duration": "0.000244967s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000245639s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000246447s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000246903s"
      },
      {
       "percentile": 0.9,
       "count": "1794",
       "duration": "0.000247551s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000248063s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000248959s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000249711s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000250687s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000251415s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000252623s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000254743s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000259423s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000264175s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000267551s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000272975s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000374895s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000382959s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000401167s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000420383s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000424447s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000477503s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000490415s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000492031s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000492303s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000493679s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000494895s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000496287s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000496415s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000496415s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000497727s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000498047s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000499487s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000499487s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000499487s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000499727s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000499727s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000500831s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000500831s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000500831s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000500831s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000500831s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000502511s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000502511s"
      }
     ],
     "mean": "0.000242933s",
     "pstdev": "0.000030541s"
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
     "name": "upstream_cx_http2_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "114303"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "26079"
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
   "execution_duration": "10.000001210s"
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
       "duration": "0.000002226s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000002526s"
      },
      {
       "percentile": 0.2,
       "count": "399",
       "duration": "0.000002624s"
      },
      {
       "percentile": 0.3,
       "count": "598",
       "duration": "0.000002707s"
      },
      {
       "percentile": 0.4,
       "count": "801",
       "duration": "0.000002786s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000002874s"
      },
      {
       "percentile": 0.55,
       "count": "1097",
       "duration": "0.000002918s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000002967s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000003027s"
      },
      {
       "percentile": 0.7,
       "count": "1394",
       "duration": "0.000003098s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.000003170s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000003213s"
      },
      {
       "percentile": 0.8,
       "count": "1593",
       "duration": "0.000003282s"
      },
      {
       "percentile": 0.825,
       "count": "1643",
       "duration": "0.000003361s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000003466s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000003640s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000003854s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000004935s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000005043s"
      },
      {
       "percentile": 0.925,
       "count": "1842",
       "duration": "0.000005160s"
      },
      {
       "percentile": 0.9375,
       "count": "1867",
       "duration": "0.000005233s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000005292s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000005365s"
      },
      {
       "percentile": 0.95625,
       "count": "1904",
       "duration": "0.000005409s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000005445s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000005501s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000005548s"
      },
      {
       "percentile": 0.975,
       "count": "1942",
       "duration": "0.000005631s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000005679s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000005706s"
      },
      {
       "percentile": 0.984375,
       "count": "1960",
       "duration": "0.000005735s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000005759s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000005822s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000005846s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000005894s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000005909s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000005968s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000006031s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000006094s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000006259s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000006728s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000006978s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000006978s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000007340s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000007768s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000009575s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000009575s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000009575s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000010581s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000010581s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000011167s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000011167s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000011167s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000011167s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000011167s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000011941s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000011941s"
      }
     ],
     "mean": "0.000003146s",
     "pstdev": "0.000000898s"
    },
    {
     "count": "1990",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000262095s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000402783s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000407471s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000410799s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000413839s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000416607s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000417839s"
      },
      {
       "percentile": 0.6,
       "count": "1195",
       "duration": "0.000419231s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000420591s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000421855s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.000423503s"
      },
      {
       "percentile": 0.775,
       "count": "1545",
       "duration": "0.000424351s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000425071s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000426127s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000427215s"
      },
      {
       "percentile": 0.875,
       "count": "1743",
       "duration": "0.000428735s"
      },
      {
       "percentile": 0.8875,
       "count": "1768",
       "duration": "0.000429359s"
      },
      {
       "percentile": 0.9,
       "count": "1792",
       "duration": "0.000430367s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000431247s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000432399s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000433567s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000434591s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000435215s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000436447s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000438127s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000440047s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000441519s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000468079s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000486607s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000494847s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000501967s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000548735s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000554879s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000560927s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000578143s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000583935s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000588191s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000590527s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000593823s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000655295s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000671711s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000674239s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000674239s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000679487s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000681951s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000685375s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000685375s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000685375s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000704287s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000704287s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000706367s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000706367s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000706367s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000706367s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000706367s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000710271s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000710271s"
      }
     ],
     "mean": "0.000412293s",
     "pstdev": "0.000043152s"
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
       "duration": "0.000290351s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000429919s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000433999s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000436591s"
      },
      {
       "percentile": 0.4,
       "count": "797",
       "duration": "0.000438847s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000440895s"
      },
      {
       "percentile": 0.55,
       "count": "1096",
       "duration": "0.000441951s"
      },
      {
       "percentile": 0.6,
       "count": "1196",
       "duration": "0.000442975s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000444127s"
      },
      {
       "percentile": 0.7,
       "count": "1394",
       "duration": "0.000445311s"
      },
      {
       "percentile": 0.75,
       "count": "1494",
       "duration": "0.000446687s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000447519s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000448223s"
      },
      {
       "percentile": 0.825,
       "count": "1644",
       "duration": "0.000449343s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000450319s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000451663s"
      },
      {
       "percentile": 0.8875,
       "count": "1768",
       "duration": "0.000452495s"
      },
      {
       "percentile": 0.9,
       "count": "1792",
       "duration": "0.000453151s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000454047s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000454991s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000456367s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000457327s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000458095s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000459295s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000461647s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000463199s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000465503s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000508751s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000519231s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000527935s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000536159s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000574431s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000578879s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000583327s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000603615s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000607903s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000610591s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000611807s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000614911s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000728415s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000732415s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000733951s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000733951s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000735327s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000736767s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000745183s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000745183s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000745183s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000746527s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000746527s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000747839s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000747839s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000747839s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000747839s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000747839s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000749439s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000749439s"
      }
     ],
     "mean": "0.000437291s",
     "pstdev": "0.000043789s"
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
     "name": "upstream_cx_http2_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "114303"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "26079"
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
   "execution_duration": "10.000000626s"
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
       "duration": "0.000002325s"
      },
      {
       "percentile": 0.1,
       "count": "201",
       "duration": "0.000002723s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000002831s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000002929s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000003016s"
      },
      {
       "percentile": 0.5,
       "count": "997",
       "duration": "0.000003125s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000003179s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000003232s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000003308s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000003376s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.000003490s"
      },
      {
       "percentile": 0.775,
       "count": "1544",
       "duration": "0.000003558s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000003620s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000003680s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000003781s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000003993s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000004222s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000005070s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000005254s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000005340s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000005437s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000005493s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000005550s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000005580s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000005625s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000005681s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000005713s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000005719s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000005766s"
      },
      {
       "percentile": 0.98125,
       "count": "1954",
       "duration": "0.000005793s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000005861s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000005901s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000005915s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000005930s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000005968s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000006044s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000006071s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000006106s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000006219s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000006254s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000006359s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000006566s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000006566s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000006614s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000006985s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000007450s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000007450s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000007450s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000007847s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000007847s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000011431s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000011431s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000011431s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000011431s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000011431s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000023951s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000023951s"
      }
     ],
     "mean": "0.000003388s",
     "pstdev": "0.000000963s"
    },
    {
     "count": "1990",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000201543s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000209103s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000211751s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000214487s"
      },
      {
       "percentile": 0.4,
       "count": "798",
       "duration": "0.000217023s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000219639s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000220943s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000222351s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000223911s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000227695s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.000475471s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000479071s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000482031s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000484863s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000487695s"
      },
      {
       "percentile": 0.875,
       "count": "1743",
       "duration": "0.000490207s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000491311s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000492559s"
      },
      {
       "percentile": 0.9125,
       "count": "1817",
       "duration": "0.000494143s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000495199s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000496559s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000497439s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000498479s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000499759s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000500879s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000502847s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000503951s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000505151s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000505599s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000507727s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000510047s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000512735s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000515871s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000522287s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000553791s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000562655s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000570143s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000573919s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000580255s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000591103s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000596991s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000599071s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000599071s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000601471s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000604191s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000606783s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000606783s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000606783s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000611455s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000611455s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000613759s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000613759s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000613759s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000613759s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000613759s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000617823s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000617823s"
      }
     ],
     "mean": "0.000291296s",
     "pstdev": "0.000123345s"
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
       "duration": "0.000221479s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000232679s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000236471s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000239503s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000242615s"
      },
      {
       "percentile": 0.5,
       "count": "996",
       "duration": "0.000245495s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000247255s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000248903s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000251031s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000256495s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.000505439s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000507903s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000509711s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000511551s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000513071s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000514703s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000515519s"
      },
      {
       "percentile": 0.9,
       "count": "1792",
       "duration": "0.000516351s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000517487s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000518623s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000519935s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000520911s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000521855s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000522607s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000523743s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000525279s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000526399s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000527231s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000528383s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000530591s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000535583s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000538943s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000542943s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000547167s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000601439s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000605823s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000609791s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000611199s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000614303s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000644831s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000648287s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000649567s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000649567s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000650911s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000652287s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000653695s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000653695s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000653695s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000655071s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000655071s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000656351s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000656351s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000656351s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000656351s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000656351s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000657983s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000657983s"
      }
     ],
     "mean": "0.000317028s",
     "pstdev": "0.000124013s"
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
     "name": "upstream_cx_http2_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "114303"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "26079"
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
   "execution_duration": "10.000000433s"
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
       "duration": "0.000002200s"
      },
      {
       "percentile": 0.1,
       "count": "202",
       "duration": "0.000002590s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000002759s"
      },
      {
       "percentile": 0.3,
       "count": "598",
       "duration": "0.000002939s"
      },
      {
       "percentile": 0.4,
       "count": "799",
       "duration": "0.000003096s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000003251s"
      },
      {
       "percentile": 0.55,
       "count": "1096",
       "duration": "0.000003340s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000003427s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000003530s"
      },
      {
       "percentile": 0.7,
       "count": "1395",
       "duration": "0.000003647s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.000003770s"
      },
      {
       "percentile": 0.775,
       "count": "1544",
       "duration": "0.000003849s"
      },
      {
       "percentile": 0.8,
       "count": "1593",
       "duration": "0.000003948s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000004093s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000004241s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000004505s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000004819s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000004975s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000005127s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000005241s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000005346s"
      },
      {
       "percentile": 0.94375,
       "count": "1880",
       "duration": "0.000005402s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000005430s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000005506s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000005615s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000005674s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000005705s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000005744s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000005788s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000005824s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000005899s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000005929s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000005960s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000006004s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000006038s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000006212s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000006284s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000006372s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000006612s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000006673s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000007941s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000009181s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000009181s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000009216s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000009801s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000009850s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000009850s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000009850s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000009917s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000009917s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000021917s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000021917s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000021917s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000021917s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000021917s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000029289s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000029289s"
      }
     ],
     "mean": "0.000003495s",
     "pstdev": "0.000001161s"
    },
    {
     "count": "1990",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000395727s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000404031s"
      },
      {
       "percentile": 0.2,
       "count": "399",
       "duration": "0.000407535s"
      },
      {
       "percentile": 0.3,
       "count": "599",
       "duration": "0.000411007s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000414175s"
      },
      {
       "percentile": 0.5,
       "count": "996",
       "duration": "0.000417151s"
      },
      {
       "percentile": 0.55,
       "count": "1096",
       "duration": "0.000418655s"
      },
      {
       "percentile": 0.6,
       "count": "1195",
       "duration": "0.000419999s"
      },
      {
       "percentile": 0.65,
       "count": "1295",
       "duration": "0.000421407s"
      },
      {
       "percentile": 0.7,
       "count": "1394",
       "duration": "0.000422591s"
      },
      {
       "percentile": 0.75,
       "count": "1495",
       "duration": "0.000424031s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000424751s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000425439s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000426543s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000427439s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000428703s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000429551s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000430463s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000431247s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000432751s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000435023s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000435647s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000437103s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000438399s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000440447s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000443295s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000447471s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000467823s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000480911s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000488031s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000504943s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000510223s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000512831s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000516735s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000520927s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000525727s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000534943s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000537279s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000540031s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000561151s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000566399s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000568991s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000568991s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000590015s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000593535s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000596479s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000596479s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000596479s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000602143s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000602143s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000611167s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000611167s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000611167s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000611167s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000611167s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000632223s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000632223s"
      }
     ],
     "mean": "0.000419385s",
     "pstdev": "0.000019962s"
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
       "duration": "0.000422655s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000433791s"
      },
      {
       "percentile": 0.2,
       "count": "401",
       "duration": "0.000436287s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000438111s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000439855s"
      },
      {
       "percentile": 0.5,
       "count": "999",
       "duration": "0.000441599s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000442399s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000443327s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000444335s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000445439s"
      },
      {
       "percentile": 0.75,
       "count": "1494",
       "duration": "0.000446831s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000447615s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000448511s"
      },
      {
       "percentile": 0.825,
       "count": "1643",
       "duration": "0.000449503s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000450799s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000452479s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000453663s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000454703s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000455855s"
      },
      {
       "percentile": 0.925,
       "count": "1842",
       "duration": "0.000457311s"
      },
      {
       "percentile": 0.9375,
       "count": "1867",
       "duration": "0.000459423s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000460639s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000461983s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000463423s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000465695s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000469279s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000472127s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000490479s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000513695s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000522879s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000532095s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000551807s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000555903s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000560255s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000575103s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000579551s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000582143s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000583455s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000587007s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000643999s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000647807s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000649407s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000649407s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000650847s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000652255s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000654431s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000654431s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000654431s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000655839s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000655839s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000657247s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000657247s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000657247s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000657247s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000657247s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000658879s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000658879s"
      }
     ],
     "mean": "0.000445505s",
     "pstdev": "0.000022054s"
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
     "name": "upstream_cx_http2_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "114303"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "26079"
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
   "execution_duration": "10.000000524s"
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
       "duration": "0.000002198s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000002629s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000002885s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000003120s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000003359s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000003625s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000003772s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000003932s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000004112s"
      },
      {
       "percentile": 0.7,
       "count": "1394",
       "duration": "0.000004285s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.000004469s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000004584s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000004666s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000004817s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000004949s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000005070s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000005116s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000005190s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000005266s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000005336s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000005399s"
      },
      {
       "percentile": 0.94375,
       "count": "1880",
       "duration": "0.000005437s"
      },
      {
       "percentile": 0.95,
       "count": "1892",
       "duration": "0.000005489s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000005522s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000005585s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000005670s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000005709s"
      },
      {
       "percentile": 0.975,
       "count": "1942",
       "duration": "0.000005749s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000005777s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000005850s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000005930s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000006034s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000006117s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000006131s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000006185s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000006476s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000006539s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000006661s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000006706s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000006711s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000006765s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000006843s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000006843s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000006901s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000006998s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000007036s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000007036s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000007036s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000009402s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000009402s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000012418s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000012418s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000012418s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000012418s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000012418s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000013220s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000013220s"
      }
     ],
     "mean": "0.000003798s",
     "pstdev": "0.000001006s"
    },
    {
     "count": "1990",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000971743s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000995647s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.001004223s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.001010847s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.001016383s"
      },
      {
       "percentile": 0.5,
       "count": "996",
       "duration": "0.001022591s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.001025471s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.001028223s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.001030911s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.001033855s"
      },
      {
       "percentile": 0.75,
       "count": "1494",
       "duration": "0.001037439s"
      },
      {
       "percentile": 0.775,
       "count": "1544",
       "duration": "0.001039199s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.001041759s"
      },
      {
       "percentile": 0.825,
       "count": "1643",
       "duration": "0.001044063s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.001046847s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.001049727s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.001051583s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.001054143s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.001056447s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.001059327s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.001063295s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.001065599s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.001070399s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.001075391s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.001084159s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.001093311s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.001100159s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.001119231s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.001133311s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.001144127s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.001157183s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.001173439s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.001177471s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.001180479s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.001291583s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.001299519s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.001311615s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.001314431s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.001319231s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.001758975s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.001761855s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.001771135s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.001771135s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.001782975s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.001786623s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.001789887s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.001789887s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.001789887s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.001795775s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.001795775s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.001808639s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.001808639s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.001808639s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.001808639s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.001808639s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.001820543s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.001820543s"
      }
     ],
     "mean": "0.001029884s",
     "pstdev": "0.000063154s"
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
       "duration": "0.000995935s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.001023935s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.001032447s"
      },
      {
       "percentile": 0.3,
       "count": "598",
       "duration": "0.001039711s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.001045407s"
      },
      {
       "percentile": 0.5,
       "count": "997",
       "duration": "0.001050239s"
      },
      {
       "percentile": 0.55,
       "count": "1097",
       "duration": "0.001052927s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.001055487s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.001058623s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.001061695s"
      },
      {
       "percentile": 0.75,
       "count": "1497",
       "duration": "0.001065215s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.001066943s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.001068863s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.001071231s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.001073535s"
      },
      {
       "percentile": 0.875,
       "count": "1743",
       "duration": "0.001076735s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.001078271s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.001080191s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.001082815s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.001086143s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.001091391s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.001094655s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.001098303s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.001102719s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.001109439s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.001117247s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.001134399s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.001158079s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.001167423s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.001172543s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.001180607s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.001193343s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.001209279s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.001214335s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.001330175s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.001335103s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.001338303s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.001339839s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.001343999s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.001830271s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.001834943s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.001836799s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.001836799s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.001838655s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.001840255s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.001842751s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.001842751s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.001842751s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.001844287s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.001844287s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.001847551s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.001847551s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.001847551s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.001847551s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.001847551s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.001850239s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.001850239s"
      }
     ],
     "mean": "0.001058086s",
     "pstdev": "0.000064794s"
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
     "name": "upstream_cx_http2_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "114303"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "26079"
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
   "execution_duration": "10.000000994s"
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
       "duration": "0.000002261s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000002697s"
      },
      {
       "percentile": 0.2,
       "count": "399",
       "duration": "0.000002906s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000003075s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000003247s"
      },
      {
       "percentile": 0.5,
       "count": "996",
       "duration": "0.000003428s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000003499s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000003586s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000003694s"
      },
      {
       "percentile": 0.7,
       "count": "1394",
       "duration": "0.000003832s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.000003978s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000004049s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000004145s"
      },
      {
       "percentile": 0.825,
       "count": "1643",
       "duration": "0.000004278s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000004428s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000004717s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000004891s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000005s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000005074s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000005143s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000005212s"
      },
      {
       "percentile": 0.94375,
       "count": "1880",
       "duration": "0.000005247s"
      },
      {
       "percentile": 0.95,
       "count": "1892",
       "duration": "0.000005303s"
      },
      {
       "percentile": 0.95625,
       "count": "1904",
       "duration": "0.000005348s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000005416s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000005466s"
      },
      {
       "percentile": 0.971875,
       "count": "1936",
       "duration": "0.000005497s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000005530s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000005581s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000005663s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000005709s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000005764s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000005812s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000005894s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000005952s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000006068s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000006124s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000006223s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000006974s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000007111s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000007813s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000008258s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000008258s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000008590s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000009048s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000009618s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000009618s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000009618s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000014315s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000014315s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000016824s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000016824s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000016824s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000016824s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000016824s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000021101s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000021101s"
      }
     ],
     "mean": "0.000003616s",
     "pstdev": "0.000001013s"
    },
    {
     "count": "1990",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000971647s"
      },
      {
       "percentile": 0.1,
       "count": "201",
       "duration": "0.000993951s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.001002079s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.001007743s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.001013247s"
      },
      {
       "percentile": 0.5,
       "count": "997",
       "duration": "0.001018911s"
      },
      {
       "percentile": 0.55,
       "count": "1097",
       "duration": "0.001021471s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.001023967s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.001026847s"
      },
      {
       "percentile": 0.7,
       "count": "1394",
       "duration": "0.001030079s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.001033951s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.001036159s"
      },
      {
       "percentile": 0.8,
       "count": "1593",
       "duration": "0.001038879s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.001041087s"
      },
      {
       "percentile": 0.85,
       "count": "1693",
       "duration": "0.001043775s"
      },
      {
       "percentile": 0.875,
       "count": "1743",
       "duration": "0.001046463s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.001048511s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.001050623s"
      },
      {
       "percentile": 0.9125,
       "count": "1818",
       "duration": "0.001053183s"
      },
      {
       "percentile": 0.925,
       "count": "1843",
       "duration": "0.001055487s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.001058815s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.001060543s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.001062527s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.001065151s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.001067839s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.001075263s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.001078079s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.001150783s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.001169023s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.001183231s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.001191039s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.001195711s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.001200191s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.001210495s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.001272767s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.001280319s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.001283455s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.001283839s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.001288575s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.001735231s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.001739583s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.001742015s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.001742015s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.001755455s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.001760319s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.001764159s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.001764159s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.001764159s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.001772031s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.001772031s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.001774399s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.001774399s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.001774399s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.001774399s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.001774399s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.001789759s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.001789759s"
      }
     ],
     "mean": "0.001026820s",
     "pstdev": "0.000061947s"
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
       "duration": "0.000997791s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.001022495s"
      },
      {
       "percentile": 0.2,
       "count": "399",
       "duration": "0.001029343s"
      },
      {
       "percentile": 0.3,
       "count": "598",
       "duration": "0.001035327s"
      },
      {
       "percentile": 0.4,
       "count": "797",
       "duration": "0.001040351s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.001044959s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.001047327s"
      },
      {
       "percentile": 0.6,
       "count": "1198",
       "duration": "0.001050047s"
      },
      {
       "percentile": 0.65,
       "count": "1297",
       "duration": "0.001053439s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.001056575s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.001060287s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.001062335s"
      },
      {
       "percentile": 0.8,
       "count": "1594",
       "duration": "0.001064319s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.001066623s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.001069695s"
      },
      {
       "percentile": 0.875,
       "count": "1743",
       "duration": "0.001073279s"
      },
      {
       "percentile": 0.8875,
       "count": "1769",
       "duration": "0.001075135s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.001076735s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.001078911s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.001081983s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.001085887s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.001087807s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.001090431s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.001093055s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.001096255s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.001099711s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.001102015s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.001186751s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.001196735s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.001226559s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.001232511s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.001235967s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.001238271s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.001242111s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.001296959s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.001314303s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.001317375s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.001318719s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.001322367s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.001802559s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.001807999s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.001809727s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.001809727s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.001811391s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.001812863s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.001815231s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.001815231s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.001815231s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.001817407s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.001817407s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.001819071s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.001819071s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.001819071s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.001819071s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.001819071s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.001821119s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.001821119s"
      }
     ],
     "mean": "0.001054189s",
     "pstdev": "0.000063813s"
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
     "name": "upstream_cx_http2_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "114303"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "26079"
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
   "execution_duration": "10.000000832s"
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
       "duration": "0.000002390s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000002877s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000003134s"
      },
      {
       "percentile": 0.3,
       "count": "598",
       "duration": "0.000003330s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000003535s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000003723s"
      },
      {
       "percentile": 0.55,
       "count": "1096",
       "duration": "0.000003835s"
      },
      {
       "percentile": 0.6,
       "count": "1195",
       "duration": "0.000003934s"
      },
      {
       "percentile": 0.65,
       "count": "1295",
       "duration": "0.000004037s"
      },
      {
       "percentile": 0.7,
       "count": "1395",
       "duration": "0.000004158s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.000004316s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000004408s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000004517s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000004627s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000004749s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000005028s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000005306s"
      },
      {
       "percentile": 0.9,
       "count": "1792",
       "duration": "0.000005416s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000005554s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000005673s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000005760s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000005822s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000005894s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000005945s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000006056s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000006138s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000006221s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000006241s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000006283s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000006340s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000006423s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000006577s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000006633s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000006715s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000006791s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000006873s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000007621s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000008798s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000008811s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000009633s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000011540s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000012783s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000012783s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000014001s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000014224s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000015714s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000015714s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000015714s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000015936s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000015936s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000019061s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000019061s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000019061s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000019061s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000019061s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000027739s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000027739s"
      }
     ],
     "mean": "0.000003954s",
     "pstdev": "0.000001264s"
    },
    {
     "count": "1990",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000979615s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.001020223s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.001029087s"
      },
      {
       "percentile": 0.3,
       "count": "598",
       "duration": "0.001035103s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.001039807s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.001044223s"
      },
      {
       "percentile": 0.55,
       "count": "1096",
       "duration": "0.001046687s"
      },
      {
       "percentile": 0.6,
       "count": "1195",
       "duration": "0.001049407s"
      },
      {
       "percentile": 0.65,
       "count": "1297",
       "duration": "0.001052223s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.001055039s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.001058111s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.001059839s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.001061503s"
      },
      {
       "percentile": 0.825,
       "count": "1643",
       "duration": "0.001063231s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.001065727s"
      },
      {
       "percentile": 0.875,
       "count": "1743",
       "duration": "0.001068735s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.001070527s"
      },
      {
       "percentile": 0.9,
       "count": "1792",
       "duration": "0.001072511s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.001074751s"
      },
      {
       "percentile": 0.925,
       "count": "1842",
       "duration": "0.001077439s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.001080959s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.001083391s"
      },
      {
       "percentile": 0.95,
       "count": "1893",
       "duration": "0.001085439s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.001087423s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.001089791s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.001093951s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.001096831s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.001155327s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.001171455s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.001177663s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.001194815s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.001204607s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.001211007s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.001228223s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.001362623s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.001371519s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.001379519s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.001383103s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.001389119s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.001783359s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.001796095s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.001800127s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.001800127s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.001813183s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.001816191s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.001818943s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.001818943s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.001818943s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.001831167s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.001831167s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.001835135s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.001835135s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.001835135s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.001835135s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.001835135s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.001849087s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.001849087s"
      }
     ],
     "mean": "0.001051996s",
     "pstdev": "0.000064360s"
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
       "duration": "0.001011743s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.001051071s"
      },
      {
       "percentile": 0.2,
       "count": "402",
       "duration": "0.001058751s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.001064319s"
      },
      {
       "percentile": 0.4,
       "count": "797",
       "duration": "0.001069375s"
      },
      {
       "percentile": 0.5,
       "count": "996",
       "duration": "0.001073727s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.001075647s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.001077695s"
      },
      {
       "percentile": 0.65,
       "count": "1295",
       "duration": "0.001079743s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.001081983s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.001084607s"
      },
      {
       "percentile": 0.775,
       "count": "1544",
       "duration": "0.001086207s"
      },
      {
       "percentile": 0.8,
       "count": "1596",
       "duration": "0.001088255s"
      },
      {
       "percentile": 0.825,
       "count": "1643",
       "duration": "0.001090495s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.001093759s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.001097407s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.001099455s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.001101183s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.001103679s"
      },
      {
       "percentile": 0.925,
       "count": "1842",
       "duration": "0.001106431s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.001109119s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.001110463s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.001111871s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.001114111s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.001116543s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.001120191s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.001122431s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.001190335s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.001214783s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.001219647s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.001227903s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.001273919s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.001278975s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.001284351s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.001402687s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.001408127s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.001411519s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.001412991s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.001417535s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.001863551s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.001868031s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.001870207s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.001870207s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.001871615s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.001873215s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.001875711s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.001875711s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.001875711s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.001877247s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.001877247s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.001879295s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.001879295s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.001879295s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.001879295s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.001879295s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.001881343s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.001881343s"
      }
     ],
     "mean": "0.001081213s",
     "pstdev": "0.000066815s"
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
     "name": "upstream_cx_http2_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "114303"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "26079"
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
   "execution_duration": "10.000000547s"
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
       "duration": "0.000002516s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000003034s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000003175s"
      },
      {
       "percentile": 0.3,
       "count": "598",
       "duration": "0.000003279s"
      },
      {
       "percentile": 0.4,
       "count": "797",
       "duration": "0.000003392s"
      },
      {
       "percentile": 0.5,
       "count": "996",
       "duration": "0.000003504s"
      },
      {
       "percentile": 0.55,
       "count": "1097",
       "duration": "0.000003562s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000003627s"
      },
      {
       "percentile": 0.65,
       "count": "1295",
       "duration": "0.000003692s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000003779s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.000003884s"
      },
      {
       "percentile": 0.775,
       "count": "1544",
       "duration": "0.000003941s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000004009s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000004079s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000004212s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000004414s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000004600s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000005352s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000005547s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000005677s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000005772s"
      },
      {
       "percentile": 0.94375,
       "count": "1880",
       "duration": "0.000005799s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000005836s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000005881s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000005951s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000006019s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000006040s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000006065s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000006122s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000006145s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000006195s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000006208s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000006228s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000006244s"
      },
      {
       "percentile": 0.990625,
       "count": "1973",
       "duration": "0.000006291s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000006352s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000006415s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000006475s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000006504s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000006507s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000006601s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000006708s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000006708s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000006763s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000006833s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000006925s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000006925s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000006925s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000007484s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000007484s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000008198s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000008198s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000008198s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000008198s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000008198s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000008764s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000008764s"
      }
     ],
     "mean": "0.000003738s",
     "pstdev": "0.000000835s"
    },
    {
     "count": "1990",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000267055s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000338543s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000349679s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000465695s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000472415s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000476415s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000478719s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000480863s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000482767s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000484831s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.000487247s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000488079s"
      },
      {
       "percentile": 0.8,
       "count": "1593",
       "duration": "0.000489311s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000490335s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000491439s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000492479s"
      },
      {
       "percentile": 0.8875,
       "count": "1768",
       "duration": "0.000493151s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000493887s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000494463s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000495199s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000496351s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000496799s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000497327s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000498063s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000498895s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000499599s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000500239s"
      },
      {
       "percentile": 0.975,
       "count": "1942",
       "duration": "0.000501407s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000501695s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000503215s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000504447s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000506303s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000508639s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000513727s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000536863s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000547263s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000551807s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000554271s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000559551s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000562335s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000565183s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000566783s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000566783s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000569663s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000572095s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000575391s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000575391s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000575391s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000579391s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000579391s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000582079s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000582079s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000582079s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000582079s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000582079s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000584031s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000584031s"
      }
     ],
     "mean": "0.000445287s",
     "pstdev": "0.000063862s"
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
       "duration": "0.000293567s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000366847s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000374559s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000495343s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000503007s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000506303s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000507679s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000508991s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000510143s"
      },
      {
       "percentile": 0.7,
       "count": "1396",
       "duration": "0.000511327s"
      },
      {
       "percentile": 0.75,
       "count": "1494",
       "duration": "0.000512527s"
      },
      {
       "percentile": 0.775,
       "count": "1544",
       "duration": "0.000513359s"
      },
      {
       "percentile": 0.8,
       "count": "1593",
       "duration": "0.000513871s"
      },
      {
       "percentile": 0.825,
       "count": "1643",
       "duration": "0.000514767s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000515423s"
      },
      {
       "percentile": 0.875,
       "count": "1743",
       "duration": "0.000516543s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000516831s"
      },
      {
       "percentile": 0.9,
       "count": "1793",
       "duration": "0.000517615s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000518207s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000519007s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000519727s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000520431s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000520959s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000521711s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000522431s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000523679s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000524671s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000525471s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000526559s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000528415s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000529887s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000531999s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000535263s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000539711s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000577343s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000581951s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000584991s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000586303s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000590399s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000598911s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000602303s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000603775s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000603775s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000605247s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000606879s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000608287s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000608287s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000608287s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000609663s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000609663s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000611167s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000611167s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000611167s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000611167s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000611167s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000613023s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000613023s"
      }
     ],
     "mean": "0.000472929s",
     "pstdev": "0.000063528s"
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
     "name": "upstream_cx_http2_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "114303"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "26079"
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
   "execution_duration": "10.000000009s"
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
       "duration": "0.000002170s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000002627s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000002801s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000002958s"
      },
      {
       "percentile": 0.4,
       "count": "797",
       "duration": "0.000003155s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000003348s"
      },
      {
       "percentile": 0.55,
       "count": "1096",
       "duration": "0.000003458s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000003580s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000003717s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000003833s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.000004017s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000004103s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000004196s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000004309s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000004480s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000004751s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000004937s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000005076s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000005148s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000005216s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000005315s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000005374s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000005404s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000005457s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000005512s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000005590s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000005657s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000005693s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000005731s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000005812s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000005877s"
      },
      {
       "percentile": 0.9859375,
       "count": "1964",
       "duration": "0.000005895s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000005951s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000006080s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000006123s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000006168s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000006203s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000006257s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000006718s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000007011s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000008296s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000008874s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000008874s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000009505s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000010764s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000011512s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000011512s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000011512s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000012205s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000012205s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000014343s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000014343s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000014343s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000014343s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000014343s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000030756s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000030756s"
      }
     ],
     "mean": "0.000003593s",
     "pstdev": "0.000001153s"
    },
    {
     "count": "1990",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000985663s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.001020639s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.001031327s"
      },
      {
       "percentile": 0.3,
       "count": "599",
       "duration": "0.001037663s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.001042591s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.001047743s"
      },
      {
       "percentile": 0.55,
       "count": "1096",
       "duration": "0.001050239s"
      },
      {
       "percentile": 0.6,
       "count": "1195",
       "duration": "0.001052863s"
      },
      {
       "percentile": 0.65,
       "count": "1295",
       "duration": "0.001055231s"
      },
      {
       "percentile": 0.7,
       "count": "1395",
       "duration": "0.001057727s"
      },
      {
       "percentile": 0.75,
       "count": "1497",
       "duration": "0.001060607s"
      },
      {
       "percentile": 0.775,
       "count": "1546",
       "duration": "0.001062143s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.001063999s"
      },
      {
       "percentile": 0.825,
       "count": "1643",
       "duration": "0.001065791s"
      },
      {
       "percentile": 0.85,
       "count": "1693",
       "duration": "0.001067903s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.001070271s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.001071615s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.001073151s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.001074751s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.001077119s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.001079679s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.001081727s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.001084479s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.001086911s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.001093247s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.001104255s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.001166847s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.001182079s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.001193343s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.001227327s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.001242687s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.001248703s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.001252351s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.001260543s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.001331327s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.001337023s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.001339071s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.001340351s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.001346303s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.001745535s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.001757375s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.001759807s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.001759807s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.001769855s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.001772415s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.001781887s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.001781887s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.001781887s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.001792575s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.001792575s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.001793791s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.001793791s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.001793791s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.001793791s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.001793791s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.001806719s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.001806719s"
      }
     ],
     "mean": "0.001054613s",
     "pstdev": "0.000062911s"
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
       "duration": "0.001015519s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.001049855s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.001057407s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.001064959s"
      },
      {
       "percentile": 0.4,
       "count": "797",
       "duration": "0.001070719s"
      },
      {
       "percentile": 0.5,
       "count": "998",
       "duration": "0.001075327s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.001077375s"
      },
      {
       "percentile": 0.6,
       "count": "1199",
       "duration": "0.001079743s"
      },
      {
       "percentile": 0.65,
       "count": "1297",
       "duration": "0.001082047s"
      },
      {
       "percentile": 0.7,
       "count": "1395",
       "duration": "0.001084543s"
      },
      {
       "percentile": 0.75,
       "count": "1497",
       "duration": "0.001087231s"
      },
      {
       "percentile": 0.775,
       "count": "1544",
       "duration": "0.001088575s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.001089919s"
      },
      {
       "percentile": 0.825,
       "count": "1644",
       "duration": "0.001091711s"
      },
      {
       "percentile": 0.85,
       "count": "1694",
       "duration": "0.001093695s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.001095743s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.001097279s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.001098367s"
      },
      {
       "percentile": 0.9125,
       "count": "1817",
       "duration": "0.001100223s"
      },
      {
       "percentile": 0.925,
       "count": "1842",
       "duration": "0.001102527s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.001105087s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.001107263s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.001109951s"
      },
      {
       "percentile": 0.95625,
       "count": "1904",
       "duration": "0.001114047s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.001118783s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.001127167s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.001225919s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.001231167s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.001238463s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.001266047s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.001273791s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.001276927s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.001280127s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.001284991s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.001351615s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.001371391s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.001374719s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.001376063s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.001379967s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.001818815s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.001824255s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.001825919s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.001825919s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.001827327s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.001828991s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.001831231s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.001831231s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.001831231s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.001832895s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.001832895s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.001834431s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.001834431s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.001834431s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.001834431s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.001834431s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.001836351s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.001836351s"
      }
     ],
     "mean": "0.001082069s",
     "pstdev": "0.000064997s"
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
     "name": "upstream_cx_http2_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "114303"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "26079"
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
   "execution_duration": "10.000000539s"
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
       "duration": "0.000002240s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000002667s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000002809s"
      },
      {
       "percentile": 0.3,
       "count": "598",
       "duration": "0.000002926s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000003035s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000003138s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000003192s"
      },
      {
       "percentile": 0.6,
       "count": "1195",
       "duration": "0.000003256s"
      },
      {
       "percentile": 0.65,
       "count": "1295",
       "duration": "0.000003328s"
      },
      {
       "percentile": 0.7,
       "count": "1396",
       "duration": "0.000003401s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.000003486s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000003547s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000003608s"
      },
      {
       "percentile": 0.825,
       "count": "1643",
       "duration": "0.000003681s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000003793s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000004034s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000004323s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000004829s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000004977s"
      },
      {
       "percentile": 0.925,
       "count": "1842",
       "duration": "0.000005066s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000005133s"
      },
      {
       "percentile": 0.94375,
       "count": "1881",
       "duration": "0.000005165s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000005199s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000005235s"
      },
      {
       "percentile": 0.9625,
       "count": "1917",
       "duration": "0.000005275s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000005342s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000005390s"
      },
      {
       "percentile": 0.975,
       "count": "1942",
       "duration": "0.000005438s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000005449s"
      },
      {
       "percentile": 0.98125,
       "count": "1954",
       "duration": "0.000005510s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000005533s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000005563s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000005620s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000005638s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000005716s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000005778s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000005834s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000005843s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000005979s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000006021s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000006464s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000006762s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000006762s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000006922s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000007661s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000009180s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000009180s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000009180s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000010086s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000010086s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000010491s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000010491s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000010491s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000010491s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000010491s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000014055s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000014055s"
      }
     ],
     "mean": "0.000003355s",
     "pstdev": "0.000000830s"
    },
    {
     "count": "1990",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000201527s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000315711s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000327855s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000453887s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000458735s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000462895s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000464927s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000466911s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000468735s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000470735s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.000472671s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000473519s"
      },
      {
       "percentile": 0.8,
       "count": "1594",
       "duration": "0.000474399s"
      },
      {
       "percentile": 0.825,
       "count": "1643",
       "duration": "0.000475295s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000476191s"
      },
      {
       "percentile": 0.875,
       "count": "1743",
       "duration": "0.000477487s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000477983s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000478719s"
      },
      {
       "percentile": 0.9125,
       "count": "1817",
       "duration": "0.000480015s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000481087s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000483935s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000485615s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000487407s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000490047s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000492703s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000494831s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000495311s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000497471s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000501407s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000504751s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000509903s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000514975s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000517999s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000520351s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000524415s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000530623s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000536063s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000536735s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000540095s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000540415s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000551647s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000553759s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000553759s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000557535s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000559839s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000562335s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000562335s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000562335s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000564639s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000564639s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000568479s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000568479s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000568479s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000568479s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000568479s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000570527s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000570527s"
      }
     ],
     "mean": "0.000423972s",
     "pstdev": "0.000080329s"
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
       "duration": "0.000220559s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000343311s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000351487s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000483647s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000487183s"
      },
      {
       "percentile": 0.5,
       "count": "997",
       "duration": "0.000489487s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000490575s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000491583s"
      },
      {
       "percentile": 0.65,
       "count": "1295",
       "duration": "0.000492623s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000493711s"
      },
      {
       "percentile": 0.75,
       "count": "1494",
       "duration": "0.000494863s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000495455s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000496175s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000497071s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000497967s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000499679s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000500719s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000502287s"
      },
      {
       "percentile": 0.9125,
       "count": "1817",
       "duration": "0.000504447s"
      },
      {
       "percentile": 0.925,
       "count": "1842",
       "duration": "0.000506767s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000509247s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000510783s"
      },
      {
       "percentile": 0.95,
       "count": "1892",
       "duration": "0.000512063s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000513343s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000514911s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000516991s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000519439s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000522111s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000525407s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000532959s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000541279s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000550015s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000552063s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000554783s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000556543s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000558911s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000560447s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000560703s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000563903s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000578495s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000581759s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000583199s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000583199s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000584511s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000585823s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000587359s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000587359s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000587359s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000588735s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000588735s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000590111s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000590111s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000590111s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000590111s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000590111s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000591999s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000591999s"
      }
     ],
     "mean": "0.000449304s",
     "pstdev": "0.000080364s"
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
     "name": "upstream_cx_http2_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "114303"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "26079"
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
   "execution_duration": "10.000000957s"
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
       "duration": "0.000002303s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000002636s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000002746s"
      },
      {
       "percentile": 0.3,
       "count": "603",
       "duration": "0.000002831s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000002909s"
      },
      {
       "percentile": 0.5,
       "count": "999",
       "duration": "0.000002983s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000003021s"
      },
      {
       "percentile": 0.6,
       "count": "1201",
       "duration": "0.000003077s"
      },
      {
       "percentile": 0.65,
       "count": "1297",
       "duration": "0.000003134s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000003197s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.000003267s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000003329s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000003385s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000003469s"
      },
      {
       "percentile": 0.85,
       "count": "1694",
       "duration": "0.000003586s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000003720s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000003898s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000005168s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000005354s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000005463s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000005538s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000005584s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000005629s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000005675s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000005740s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000005843s"
      },
      {
       "percentile": 0.971875,
       "count": "1936",
       "duration": "0.000005860s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000005902s"
      },
      {
       "percentile": 0.978125,
       "count": "1948",
       "duration": "0.000005920s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000005956s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000006019s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000006071s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000006106s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000006195s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000006231s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000006288s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000006291s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000006331s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000006420s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000006491s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000006573s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000006621s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000006621s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000006767s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000006782s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000007145s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000007145s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000007145s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000007443s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000007443s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000007682s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000007682s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000007682s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000007682s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000007682s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000012641s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000012641s"
      }
     ],
     "mean": "0.000003271s",
     "pstdev": "0.000000912s"
    },
    {
     "count": "1990",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000193351s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000201887s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000204759s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000207215s"
      },
      {
       "percentile": 0.4,
       "count": "797",
       "duration": "0.000209503s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000211647s"
      },
      {
       "percentile": 0.55,
       "count": "1097",
       "duration": "0.000212759s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000213871s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000214895s"
      },
      {
       "percentile": 0.7,
       "count": "1394",
       "duration": "0.000216071s"
      },
      {
       "percentile": 0.75,
       "count": "1494",
       "duration": "0.000217247s"
      },
      {
       "percentile": 0.775,
       "count": "1544",
       "duration": "0.000217935s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000218455s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000219191s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000219967s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000220583s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000221071s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000221575s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000222175s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000222839s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000223559s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000224039s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000224783s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000225415s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000226527s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000228487s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000230727s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000233335s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000235871s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000239055s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000243343s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000246775s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000251479s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000253951s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000257239s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000261471s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000263871s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000265871s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000268495s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000370543s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000375071s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000378735s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000378735s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000383487s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000386911s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000389039s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000389039s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000389039s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000393615s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000393615s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000396607s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000396607s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000396607s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000396607s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000396607s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000403279s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000403279s"
      }
     ],
     "mean": "0.000212978s",
     "pstdev": "0.000015089s"
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
       "duration": "0.000217015s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000228335s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000231191s"
      },
      {
       "percentile": 0.3,
       "count": "598",
       "duration": "0.000233319s"
      },
      {
       "percentile": 0.4,
       "count": "797",
       "duration": "0.000235143s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000236871s"
      },
      {
       "percentile": 0.55,
       "count": "1096",
       "duration": "0.000237751s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.000238631s"
      },
      {
       "percentile": 0.65,
       "count": "1294",
       "duration": "0.000239607s"
      },
      {
       "percentile": 0.7,
       "count": "1393",
       "duration": "0.000240479s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.000241519s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000242175s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000242687s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000243431s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000244319s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000245223s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.000245767s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000246575s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000247119s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000248271s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000249383s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000250151s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000251255s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000251935s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000254407s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000256127s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000258263s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000260447s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000263631s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000267615s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000272655s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000277103s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000280735s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000286687s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000291855s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000295263s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000297903s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000299583s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000303247s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000422479s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000426575s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000428495s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000428495s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000430015s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000431263s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000433407s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000433407s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000433407s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000434943s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000434943s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000436367s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000436367s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000436367s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000436367s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000436367s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000438223s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000438223s"
      }
     ],
     "mean": "0.000238541s",
     "pstdev": "0.000016423s"
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
     "name": "upstream_cx_http2_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "114303"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "26079"
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
   "execution_duration": "10.000000510s"
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
       "duration": "0.000002252s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000002696s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000002866s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000003049s"
      },
      {
       "percentile": 0.4,
       "count": "796",
       "duration": "0.000003215s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000003389s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.000003464s"
      },
      {
       "percentile": 0.6,
       "count": "1196",
       "duration": "0.000003565s"
      },
      {
       "percentile": 0.65,
       "count": "1295",
       "duration": "0.000003671s"
      },
      {
       "percentile": 0.7,
       "count": "1394",
       "duration": "0.000003793s"
      },
      {
       "percentile": 0.75,
       "count": "1494",
       "duration": "0.000003915s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.000003986s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.000004086s"
      },
      {
       "percentile": 0.825,
       "count": "1642",
       "duration": "0.000004223s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.000004412s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.000004626s"
      },
      {
       "percentile": 0.8875,
       "count": "1768",
       "duration": "0.000004910s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.000005143s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.000005281s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.000005496s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.000005585s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.000005666s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.000005739s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.000005794s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.000005888s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.000005958s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.000006002s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.000006057s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.000006092s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.000006169s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.000006208s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.000006261s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.000006352s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.000006453s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.000006474s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.000006530s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.000006541s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.000006596s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.000006659s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.000006683s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.000007004s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.000008055s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.000008055s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.000008507s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.000009065s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.000010509s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.000010509s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.000010509s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.000011183s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.000011183s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.000018375s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.000018375s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.000018375s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.000018375s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.000018375s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.000038045s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.000038045s"
      }
     ],
     "mean": "0.000003634s",
     "pstdev": "0.000001268s"
    },
    {
     "count": "1990",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000965279s"
      },
      {
       "percentile": 0.1,
       "count": "199",
       "duration": "0.000979679s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.000985087s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.000989439s"
      },
      {
       "percentile": 0.4,
       "count": "797",
       "duration": "0.000993119s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.000996639s"
      },
      {
       "percentile": 0.55,
       "count": "1097",
       "duration": "0.000998687s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.001000607s"
      },
      {
       "percentile": 0.65,
       "count": "1295",
       "duration": "0.001002847s"
      },
      {
       "percentile": 0.7,
       "count": "1394",
       "duration": "0.001005503s"
      },
      {
       "percentile": 0.75,
       "count": "1494",
       "duration": "0.001008447s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.001009919s"
      },
      {
       "percentile": 0.8,
       "count": "1592",
       "duration": "0.001011551s"
      },
      {
       "percentile": 0.825,
       "count": "1643",
       "duration": "0.001013759s"
      },
      {
       "percentile": 0.85,
       "count": "1694",
       "duration": "0.001015711s"
      },
      {
       "percentile": 0.875,
       "count": "1742",
       "duration": "0.001017983s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.001019295s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.001020991s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.001022687s"
      },
      {
       "percentile": 0.925,
       "count": "1841",
       "duration": "0.001025119s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.001027775s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.001029471s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.001032159s"
      },
      {
       "percentile": 0.95625,
       "count": "1903",
       "duration": "0.001037343s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.001042431s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.001055423s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.001064959s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.001114687s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.001124479s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.001147135s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.001167103s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.001178943s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.001187327s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.001194111s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.001310591s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.001319679s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.001329215s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.001333567s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.001337727s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.001699903s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.001704383s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.001708863s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.001708863s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.001718399s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.001728831s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.001731455s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.001731455s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.001731455s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.001736063s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.001736063s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.001739903s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.001739903s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.001739903s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.001739903s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.001739903s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.001757439s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.001757439s"
      }
     ],
     "mean": "0.001005726s",
     "pstdev": "0.000061106s"
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
       "duration": "0.000995775s"
      },
      {
       "percentile": 0.1,
       "count": "202",
       "duration": "0.001008959s"
      },
      {
       "percentile": 0.2,
       "count": "398",
       "duration": "0.001012671s"
      },
      {
       "percentile": 0.3,
       "count": "597",
       "duration": "0.001015775s"
      },
      {
       "percentile": 0.4,
       "count": "798",
       "duration": "0.001018847s"
      },
      {
       "percentile": 0.5,
       "count": "995",
       "duration": "0.001022367s"
      },
      {
       "percentile": 0.55,
       "count": "1095",
       "duration": "0.001024383s"
      },
      {
       "percentile": 0.6,
       "count": "1194",
       "duration": "0.001026559s"
      },
      {
       "percentile": 0.65,
       "count": "1295",
       "duration": "0.001028863s"
      },
      {
       "percentile": 0.7,
       "count": "1394",
       "duration": "0.001031391s"
      },
      {
       "percentile": 0.75,
       "count": "1493",
       "duration": "0.001034399s"
      },
      {
       "percentile": 0.775,
       "count": "1543",
       "duration": "0.001035807s"
      },
      {
       "percentile": 0.8,
       "count": "1593",
       "duration": "0.001037311s"
      },
      {
       "percentile": 0.825,
       "count": "1643",
       "duration": "0.001039103s"
      },
      {
       "percentile": 0.85,
       "count": "1692",
       "duration": "0.001040959s"
      },
      {
       "percentile": 0.875,
       "count": "1744",
       "duration": "0.001043359s"
      },
      {
       "percentile": 0.8875,
       "count": "1767",
       "duration": "0.001044735s"
      },
      {
       "percentile": 0.9,
       "count": "1791",
       "duration": "0.001045983s"
      },
      {
       "percentile": 0.9125,
       "count": "1816",
       "duration": "0.001047743s"
      },
      {
       "percentile": 0.925,
       "count": "1842",
       "duration": "0.001049855s"
      },
      {
       "percentile": 0.9375,
       "count": "1866",
       "duration": "0.001052991s"
      },
      {
       "percentile": 0.94375,
       "count": "1879",
       "duration": "0.001055615s"
      },
      {
       "percentile": 0.95,
       "count": "1891",
       "duration": "0.001058367s"
      },
      {
       "percentile": 0.95625,
       "count": "1904",
       "duration": "0.001062207s"
      },
      {
       "percentile": 0.9625,
       "count": "1916",
       "duration": "0.001070143s"
      },
      {
       "percentile": 0.96875,
       "count": "1928",
       "duration": "0.001082623s"
      },
      {
       "percentile": 0.971875,
       "count": "1935",
       "duration": "0.001096703s"
      },
      {
       "percentile": 0.975,
       "count": "1941",
       "duration": "0.001135167s"
      },
      {
       "percentile": 0.978125,
       "count": "1947",
       "duration": "0.001155007s"
      },
      {
       "percentile": 0.98125,
       "count": "1953",
       "duration": "0.001183423s"
      },
      {
       "percentile": 0.984375,
       "count": "1959",
       "duration": "0.001192127s"
      },
      {
       "percentile": 0.9859375,
       "count": "1963",
       "duration": "0.001248447s"
      },
      {
       "percentile": 0.9875,
       "count": "1966",
       "duration": "0.001252607s"
      },
      {
       "percentile": 0.9890625,
       "count": "1969",
       "duration": "0.001256895s"
      },
      {
       "percentile": 0.990625,
       "count": "1972",
       "duration": "0.001349311s"
      },
      {
       "percentile": 0.9921875,
       "count": "1975",
       "duration": "0.001354367s"
      },
      {
       "percentile": 0.99296875,
       "count": "1977",
       "duration": "0.001358015s"
      },
      {
       "percentile": 0.99375,
       "count": "1978",
       "duration": "0.001359551s"
      },
      {
       "percentile": 0.99453125,
       "count": "1980",
       "duration": "0.001363775s"
      },
      {
       "percentile": 0.9953125,
       "count": "1981",
       "duration": "0.001770111s"
      },
      {
       "percentile": 0.99609375,
       "count": "1983",
       "duration": "0.001774207s"
      },
      {
       "percentile": 0.996484375,
       "count": "1984",
       "duration": "0.001775743s"
      },
      {
       "percentile": 0.996875,
       "count": "1984",
       "duration": "0.001775743s"
      },
      {
       "percentile": 0.997265625,
       "count": "1985",
       "duration": "0.001777279s"
      },
      {
       "percentile": 0.99765625,
       "count": "1986",
       "duration": "0.001778495s"
      },
      {
       "percentile": 0.998046875,
       "count": "1987",
       "duration": "0.001780415s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1987",
       "duration": "0.001780415s"
      },
      {
       "percentile": 0.9984375,
       "count": "1987",
       "duration": "0.001780415s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1988",
       "duration": "0.001781823s"
      },
      {
       "percentile": 0.998828125,
       "count": "1988",
       "duration": "0.001781823s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1989",
       "duration": "0.001783359s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1989",
       "duration": "0.001783359s"
      },
      {
       "percentile": 0.99921875,
       "count": "1989",
       "duration": "0.001783359s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1989",
       "duration": "0.001783359s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1989",
       "duration": "0.001783359s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1990",
       "duration": "0.001785919s"
      },
      {
       "percentile": 1,
       "count": "1990",
       "duration": "0.001785919s"
      }
     ],
     "mean": "0.001032773s",
     "pstdev": "0.000063409s"
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
     "name": "upstream_cx_http2_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "114303"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "26079"
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
   "execution_duration": "10.000000119s"
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
       "duration": "0.000002170s"
      },
      {
       "percentile": 0.1,
       "count": "3195",
       "duration": "0.000002669s"
      },
      {
       "percentile": 0.2,
       "count": "6385",
       "duration": "0.000002815s"
      },
      {
       "percentile": 0.3,
       "count": "9561",
       "duration": "0.000002936s"
      },
      {
       "percentile": 0.4,
       "count": "12746",
       "duration": "0.000003058s"
      },
      {
       "percentile": 0.5,
       "count": "15927",
       "duration": "0.000003188s"
      },
      {
       "percentile": 0.55,
       "count": "17522",
       "duration": "0.000003261s"
      },
      {
       "percentile": 0.6,
       "count": "19114",
       "duration": "0.000003347s"
      },
      {
       "percentile": 0.65,
       "count": "20704",
       "duration": "0.000003444s"
      },
      {
       "percentile": 0.7,
       "count": "22292",
       "duration": "0.000003559s"
      },
      {
       "percentile": 0.75,
       "count": "23890",
       "duration": "0.000003699s"
      },
      {
       "percentile": 0.775,
       "count": "24678",
       "duration": "0.000003788s"
      },
      {
       "percentile": 0.8,
       "count": "25474",
       "duration": "0.000003902s"
      },
      {
       "percentile": 0.825,
       "count": "26276",
       "duration": "0.000004044s"
      },
      {
       "percentile": 0.85,
       "count": "27064",
       "duration": "0.000004250s"
      },
      {
       "percentile": 0.875,
       "count": "27860",
       "duration": "0.000004576s"
      },
      {
       "percentile": 0.8875,
       "count": "28258",
       "duration": "0.000004841s"
      },
      {
       "percentile": 0.9,
       "count": "28656",
       "duration": "0.000005079s"
      },
      {
       "percentile": 0.9125,
       "count": "29055",
       "duration": "0.000005227s"
      },
      {
       "percentile": 0.925,
       "count": "29452",
       "duration": "0.000005367s"
      },
      {
       "percentile": 0.9375,
       "count": "29856",
       "duration": "0.000005491s"
      },
      {
       "percentile": 0.94375,
       "count": "30049",
       "duration": "0.000005550s"
      },
      {
       "percentile": 0.95,
       "count": "30249",
       "duration": "0.000005623s"
      },
      {
       "percentile": 0.95625,
       "count": "30449",
       "duration": "0.000005695s"
      },
      {
       "percentile": 0.9625,
       "count": "30650",
       "duration": "0.000005775s"
      },
      {
       "percentile": 0.96875,
       "count": "30846",
       "duration": "0.000005858s"
      },
      {
       "percentile": 0.971875,
       "count": "30945",
       "duration": "0.000005900s"
      },
      {
       "percentile": 0.975,
       "count": "31047",
       "duration": "0.000005960s"
      },
      {
       "percentile": 0.978125,
       "count": "31145",
       "duration": "0.000006024s"
      },
      {
       "percentile": 0.98125,
       "count": "31243",
       "duration": "0.000006087s"
      },
      {
       "percentile": 0.984375,
       "count": "31344",
       "duration": "0.000006180s"
      },
      {
       "percentile": 0.9859375,
       "count": "31393",
       "duration": "0.000006218s"
      },
      {
       "percentile": 0.9875,
       "count": "31443",
       "duration": "0.000006263s"
      },
      {
       "percentile": 0.9890625,
       "count": "31494",
       "duration": "0.000006326s"
      },
      {
       "percentile": 0.990625,
       "count": "31542",
       "duration": "0.000006398s"
      },
      {
       "percentile": 0.9921875,
       "count": "31592",
       "duration": "0.000006498s"
      },
      {
       "percentile": 0.99296875,
       "count": "31617",
       "duration": "0.000006563s"
      },
      {
       "percentile": 0.99375,
       "count": "31641",
       "duration": "0.000006620s"
      },
      {
       "percentile": 0.99453125,
       "count": "31666",
       "duration": "0.000006706s"
      },
      {
       "percentile": 0.9953125,
       "count": "31691",
       "duration": "0.000006782s"
      },
      {
       "percentile": 0.99609375,
       "count": "31716",
       "duration": "0.000006966s"
      },
      {
       "percentile": 0.996484375,
       "count": "31729",
       "duration": "0.000007090s"
      },
      {
       "percentile": 0.996875,
       "count": "31742",
       "duration": "0.000007443s"
      },
      {
       "percentile": 0.997265625,
       "count": "31753",
       "duration": "0.000007661s"
      },
      {
       "percentile": 0.99765625,
       "count": "31766",
       "duration": "0.000008149s"
      },
      {
       "percentile": 0.998046875,
       "count": "31778",
       "duration": "0.000008734s"
      },
      {
       "percentile": 0.9982421875,
       "count": "31785",
       "duration": "0.000009065s"
      },
      {
       "percentile": 0.9984375,
       "count": "31791",
       "duration": "0.000009575s"
      },
      {
       "percentile": 0.9986328125,
       "count": "31797",
       "duration": "0.000009917s"
      },
      {
       "percentile": 0.998828125,
       "count": "31803",
       "duration": "0.000010705s"
      },
      {
       "percentile": 0.9990234375,
       "count": "31809",
       "duration": "0.000011512s"
      },
      {
       "percentile": 0.99912109375,
       "count": "31813",
       "duration": "0.000012418s"
      },
      {
       "percentile": 0.99921875,
       "count": "31816",
       "duration": "0.000012783s"
      },
      {
       "percentile": 0.99931640625,
       "count": "31819",
       "duration": "0.000013588s"
      },
      {
       "percentile": 0.9994140625,
       "count": "31822",
       "duration": "0.000014001s"
      },
      {
       "percentile": 0.99951171875,
       "count": "31825",
       "duration": "0.000014224s"
      },
      {
       "percentile": 0.999560546875,
       "count": "31827",
       "duration": "0.000014343s"
      },
      {
       "percentile": 0.999609375,
       "count": "31828",
       "duration": "0.000015617s"
      },
      {
       "percentile": 0.999658203125,
       "count": "31830",
       "duration": "0.000015936s"
      },
      {
       "percentile": 0.99970703125,
       "count": "31831",
       "duration": "0.000016824s"
      },
      {
       "percentile": 0.999755859375,
       "count": "31833",
       "duration": "0.000019061s"
      },
      {
       "percentile": 0.9997802734375,
       "count": "31834",
       "duration": "0.000021101s"
      },
      {
       "percentile": 0.9998046875,
       "count": "31834",
       "duration": "0.000021101s"
      },
      {
       "percentile": 0.9998291015625,
       "count": "31835",
       "duration": "0.000021917s"
      },
      {
       "percentile": 0.999853515625,
       "count": "31836",
       "duration": "0.000023951s"
      },
      {
       "percentile": 0.9998779296875,
       "count": "31837",
       "duration": "0.000027739s"
      },
      {
       "percentile": 0.99989013671875,
       "count": "31837",
       "duration": "0.000027739s"
      },
      {
       "percentile": 0.99990234375,
       "count": "31837",
       "duration": "0.000027739s"
      },
      {
       "percentile": 0.99991455078125,
       "count": "31838",
       "duration": "0.000029289s"
      },
      {
       "percentile": 0.9999267578125,
       "count": "31838",
       "duration": "0.000029289s"
      },
      {
       "percentile": 0.99993896484375,
       "count": "31839",
       "duration": "0.000030756s"
      },
      {
       "percentile": 0.999945068359375,
       "count": "31839",
       "duration": "0.000030756s"
      },
      {
       "percentile": 0.999951171875,
       "count": "31839",
       "duration": "0.000030756s"
      },
      {
       "percentile": 0.999957275390625,
       "count": "31839",
       "duration": "0.000030756s"
      },
      {
       "percentile": 0.99996337890625,
       "count": "31839",
       "duration": "0.000030756s"
      },
      {
       "percentile": 0.999969482421875,
       "count": "31840",
       "duration": "0.000038045s"
      },
      {
       "percentile": 1,
       "count": "31840",
       "duration": "0.000038045s"
      }
     ],
     "mean": "0.000003490s",
     "pstdev": "0.000001041s"
    },
    {
     "count": "31840",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000193351s"
      },
      {
       "percentile": 0.1,
       "count": "3185",
       "duration": "0.000213263s"
      },
      {
       "percentile": 0.2,
       "count": "6368",
       "duration": "0.000223135s"
      },
      {
       "percentile": 0.3,
       "count": "9553",
       "duration": "0.000319807s"
      },
      {
       "percentile": 0.4,
       "count": "12736",
       "duration": "0.000358591s"
      },
      {
       "percentile": 0.5,
       "count": "15920",
       "duration": "0.000415055s"
      },
      {
       "percentile": 0.55,
       "count": "17513",
       "duration": "0.000426399s"
      },
      {
       "percentile": 0.6,
       "count": "19105",
       "duration": "0.000468399s"
      },
      {
       "percentile": 0.65,
       "count": "20698",
       "duration": "0.000485343s"
      },
      {
       "percentile": 0.7,
       "count": "22289",
       "duration": "0.000983391s"
      },
      {
       "percentile": 0.75,
       "count": "23881",
       "duration": "0.001001503s"
      },
      {
       "percentile": 0.775,
       "count": "24677",
       "duration": "0.001008895s"
      },
      {
       "percentile": 0.8,
       "count": "25473",
       "duration": "0.001015871s"
      },
      {
       "percentile": 0.825,
       "count": "26268",
       "duration": "0.001022431s"
      },
      {
       "percentile": 0.85,
       "count": "27065",
       "duration": "0.001029087s"
      },
      {
       "percentile": 0.875,
       "count": "27867",
       "duration": "0.001035487s"
      },
      {
       "percentile": 0.8875,
       "count": "28260",
       "duration": "0.001038431s"
      },
      {
       "percentile": 0.9,
       "count": "28658",
       "duration": "0.001041567s"
      },
      {
       "percentile": 0.9125,
       "count": "29058",
       "duration": "0.001044927s"
      },
      {
       "percentile": 0.925,
       "count": "29457",
       "duration": "0.001048479s"
      },
      {
       "percentile": 0.9375,
       "count": "29857",
       "duration": "0.001052415s"
      },
      {
       "percentile": 0.94375,
       "count": "30052",
       "duration": "0.001054463s"
      },
      {
       "percentile": 0.95,
       "count": "30248",
       "duration": "0.001056639s"
      },
      {
       "percentile": 0.95625,
       "count": "30449",
       "duration": "0.001059007s"
      },
      {
       "percentile": 0.9625,
       "count": "30648",
       "duration": "0.001061503s"
      },
      {
       "percentile": 0.96875,
       "count": "30849",
       "duration": "0.001064575s"
      },
      {
       "percentile": 0.971875,
       "count": "30950",
       "duration": "0.001066559s"
      },
      {
       "percentile": 0.975,
       "count": "31044",
       "duration": "0.001068607s"
      },
      {
       "percentile": 0.978125,
       "count": "31148",
       "duration": "0.001071295s"
      },
      {
       "percentile": 0.98125,
       "count": "31245",
       "duration": "0.001074431s"
      },
      {
       "percentile": 0.984375,
       "count": "31345",
       "duration": "0.001078719s"
      },
      {
       "percentile": 0.9859375,
       "count": "31394",
       "duration": "0.001081023s"
      },
      {
       "percentile": 0.9875,
       "count": "31442",
       "duration": "0.001085055s"
      },
      {
       "percentile": 0.9890625,
       "count": "31492",
       "duration": "0.001090239s"
      },
      {
       "percentile": 0.990625,
       "count": "31542",
       "duration": "0.001102335s"
      },
      {
       "percentile": 0.9921875,
       "count": "31592",
       "duration": "0.001160447s"
      },
      {
       "percentile": 0.99296875,
       "count": "31617",
       "duration": "0.001173887s"
      },
      {
       "percentile": 0.99375,
       "count": "31642",
       "duration": "0.001182079s"
      },
      {
       "percentile": 0.99453125,
       "count": "31666",
       "duration": "0.001194175s"
      },
      {
       "percentile": 0.9953125,
       "count": "31691",
       "duration": "0.001227327s"
      },
      {
       "percentile": 0.99609375,
       "count": "31716",
       "duration": "0.001253887s"
      },
      {
       "percentile": 0.996484375,
       "count": "31729",
       "duration": "0.001272767s"
      },
      {
       "percentile": 0.996875,
       "count": "31741",
       "duration": "0.001289151s"
      },
      {
       "percentile": 0.997265625,
       "count": "31753",
       "duration": "0.001317439s"
      },
      {
       "percentile": 0.99765625,
       "count": "31766",
       "duration": "0.001338623s"
      },
      {
       "percentile": 0.998046875,
       "count": "31778",
       "duration": "0.001362623s"
      },
      {
       "percentile": 0.9982421875,
       "count": "31785",
       "duration": "0.001371519s"
      },
      {
       "percentile": 0.9984375,
       "count": "31791",
       "duration": "0.001699903s"
      },
      {
       "percentile": 0.9986328125,
       "count": "31797",
       "duration": "0.001731455s"
      },
      {
       "percentile": 0.998828125,
       "count": "31803",
       "duration": "0.001742015s"
      },
      {
       "percentile": 0.9990234375,
       "count": "31809",
       "duration": "0.001758975s"
      },
      {
       "percentile": 0.99912109375,
       "count": "31813",
       "duration": "0.001761855s"
      },
      {
       "percentile": 0.99921875,
       "count": "31816",
       "duration": "0.001771135s"
      },
      {
       "percentile": 0.99931640625,
       "count": "31819",
       "duration": "0.001774399s"
      },
      {
       "percentile": 0.9994140625,
       "count": "31822",
       "duration": "0.001783359s"
      },
      {
       "percentile": 0.99951171875,
       "count": "31825",
       "duration": "0.001789759s"
      },
      {
       "percentile": 0.999560546875,
       "count": "31827",
       "duration": "0.001792575s"
      },
      {
       "percentile": 0.999609375,
       "count": "31828",
       "duration": "0.001793791s"
      },
      {
       "percentile": 0.999658203125,
       "count": "31830",
       "duration": "0.001796095s"
      },
      {
       "percentile": 0.99970703125,
       "count": "31831",
       "duration": "0.001800127s"
      },
      {
       "percentile": 0.999755859375,
       "count": "31833",
       "duration": "0.001808639s"
      },
      {
       "percentile": 0.9997802734375,
       "count": "31834",
       "duration": "0.001813183s"
      },
      {
       "percentile": 0.9998046875,
       "count": "31834",
       "duration": "0.001813183s"
      },
      {
       "percentile": 0.9998291015625,
       "count": "31835",
       "duration": "0.001816191s"
      },
      {
       "percentile": 0.999853515625,
       "count": "31836",
       "duration": "0.001818943s"
      },
      {
       "percentile": 0.9998779296875,
       "count": "31837",
       "duration": "0.001820543s"
      },
      {
       "percentile": 0.99989013671875,
       "count": "31837",
       "duration": "0.001820543s"
      },
      {
       "percentile": 0.99990234375,
       "count": "31837",
       "duration": "0.001820543s"
      },
      {
       "percentile": 0.99991455078125,
       "count": "31838",
       "duration": "0.001831167s"
      },
      {
       "percentile": 0.9999267578125,
       "count": "31838",
       "duration": "0.001831167s"
      },
      {
       "percentile": 0.99993896484375,
       "count": "31839",
       "duration": "0.001835135s"
      },
      {
       "percentile": 0.999945068359375,
       "count": "31839",
       "duration": "0.001835135s"
      },
      {
       "percentile": 0.999951171875,
       "count": "31839",
       "duration": "0.001835135s"
      },
      {
       "percentile": 0.999957275390625,
       "count": "31839",
       "duration": "0.001835135s"
      },
      {
       "percentile": 0.99996337890625,
       "count": "31839",
       "duration": "0.001835135s"
      },
      {
       "percentile": 0.999969482421875,
       "count": "31840",
       "duration": "0.001849087s"
      },
      {
       "percentile": 1,
       "count": "31840",
       "duration": "0.001849087s"
      }
     ],
     "mean": "0.000552483s",
     "pstdev": "0.000338346s"
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
       "duration": "0.000217015s"
      },
      {
       "percentile": 0.1,
       "count": "3184",
       "duration": "0.000238767s"
      },
      {
       "percentile": 0.2,
       "count": "6371",
       "duration": "0.000248783s"
      },
      {
       "percentile": 0.3,
       "count": "9552",
       "duration": "0.000346223s"
      },
      {
       "percentile": 0.4,
       "count": "12739",
       "duration": "0.000387967s"
      },
      {
       "percentile": 0.5,
       "count": "15923",
       "duration": "0.000440175s"
      },
      {
       "percentile": 0.55,
       "count": "17512",
       "duration": "0.000449615s"
      },
      {
       "percentile": 0.6,
       "count": "19104",
       "duration": "0.000493359s"
      },
      {
       "percentile": 0.65,
       "count": "20696",
       "duration": "0.000511679s"
      },
      {
       "percentile": 0.7,
       "count": "22288",
       "duration": "0.001012223s"
      },
      {
       "percentile": 0.75,
       "count": "23882",
       "duration": "0.001028543s"
      },
      {
       "percentile": 0.775,
       "count": "24677",
       "duration": "0.001036319s"
      },
      {
       "percentile": 0.8,
       "count": "25472",
       "duration": "0.001043423s"
      },
      {
       "percentile": 0.825,
       "count": "26271",
       "duration": "0.001050047s"
      },
      {
       "percentile": 0.85,
       "count": "27065",
       "duration": "0.001056575s"
      },
      {
       "percentile": 0.875,
       "count": "27864",
       "duration": "0.001063039s"
      },
      {
       "percentile": 0.8875,
       "count": "28264",
       "duration": "0.001066495s"
      },
      {
       "percentile": 0.9,
       "count": "28659",
       "duration": "0.001069823s"
      },
      {
       "percentile": 0.9125,
       "count": "29057",
       "duration": "0.001073087s"
      },
      {
       "percentile": 0.925,
       "count": "29452",
       "duration": "0.001076095s"
      },
      {
       "percentile": 0.9375,
       "count": "29850",
       "duration": "0.001079423s"
      },
      {
       "percentile": 0.94375,
       "count": "30054",
       "duration": "0.001081279s"
      },
      {
       "percentile": 0.95,
       "count": "30250",
       "duration": "0.001083263s"
      },
      {
       "percentile": 0.95625,
       "count": "30452",
       "duration": "0.001085631s"
      },
      {
       "percentile": 0.9625,
       "count": "30650",
       "duration": "0.001088255s"
      },
      {
       "percentile": 0.96875,
       "count": "30845",
       "duration": "0.001091519s"
      },
      {
       "percentile": 0.971875,
       "count": "30947",
       "duration": "0.001093503s"
      },
      {
       "percentile": 0.975,
       "count": "31046",
       "duration": "0.001095615s"
      },
      {
       "percentile": 0.978125,
       "count": "31147",
       "duration": "0.001098239s"
      },
      {
       "percentile": 0.98125,
       "count": "31245",
       "duration": "0.001101119s"
      },
      {
       "percentile": 0.984375,
       "count": "31343",
       "duration": "0.001105215s"
      },
      {
       "percentile": 0.9859375,
       "count": "31394",
       "duration": "0.001108287s"
      },
      {
       "percentile": 0.9875,
       "count": "31442",
       "duration": "0.001111551s"
      },
      {
       "percentile": 0.9890625,
       "count": "31492",
       "duration": "0.001116543s"
      },
      {
       "percentile": 0.990625,
       "count": "31542",
       "duration": "0.001131007s"
      },
      {
       "percentile": 0.9921875,
       "count": "31592",
       "duration": "0.001190335s"
      },
      {
       "percentile": 0.99296875,
       "count": "31617",
       "duration": "0.001215359s"
      },
      {
       "percentile": 0.99375,
       "count": "31641",
       "duration": "0.001228671s"
      },
      {
       "percentile": 0.99453125,
       "count": "31666",
       "duration": "0.001240703s"
      },
      {
       "percentile": 0.9953125,
       "count": "31691",
       "duration": "0.001270463s"
      },
      {
       "percentile": 0.99609375,
       "count": "31716",
       "duration": "0.001283391s"
      },
      {
       "percentile": 0.996484375,
       "count": "31729",
       "duration": "0.001298623s"
      },
      {
       "percentile": 0.996875,
       "count": "31741",
       "duration": "0.001328255s"
      },
      {
       "percentile": 0.997265625,
       "count": "31753",
       "duration": "0.001349503s"
      },
      {
       "percentile": 0.99765625,
       "count": "31766",
       "duration": "0.001372863s"
      },
      {
       "percentile": 0.998046875,
       "count": "31778",
       "duration": "0.001391615s"
      },
      {
       "percentile": 0.9982421875,
       "count": "31785",
       "duration": "0.001408127s"
      },
      {
       "percentile": 0.9984375,
       "count": "31791",
       "duration": "0.001770111s"
      },
      {
       "percentile": 0.9986328125,
       "count": "31797",
       "duration": "0.001780415s"
      },
      {
       "percentile": 0.998828125,
       "count": "31803",
       "duration": "0.001807999s"
      },
      {
       "percentile": 0.9990234375,
       "count": "31809",
       "duration": "0.001818815s"
      },
      {
       "percentile": 0.99912109375,
       "count": "31813",
       "duration": "0.001824255s"
      },
      {
       "percentile": 0.99921875,
       "count": "31816",
       "duration": "0.001828991s"
      },
      {
       "percentile": 0.99931640625,
       "count": "31820",
       "duration": "0.001832895s"
      },
      {
       "percentile": 0.9994140625,
       "count": "31822",
       "duration": "0.001834943s"
      },
      {
       "percentile": 0.99951171875,
       "count": "31825",
       "duration": "0.001838655s"
      },
      {
       "percentile": 0.999560546875,
       "count": "31827",
       "duration": "0.001842751s"
      },
      {
       "percentile": 0.999609375,
       "count": "31828",
       "duration": "0.001844287s"
      },
      {
       "percentile": 0.999658203125,
       "count": "31830",
       "duration": "0.001850239s"
      },
      {
       "percentile": 0.99970703125,
       "count": "31831",
       "duration": "0.001863551s"
      },
      {
       "percentile": 0.999755859375,
       "count": "31833",
       "duration": "0.001868031s"
      },
      {
       "percentile": 0.9997802734375,
       "count": "31834",
       "duration": "0.001870207s"
      },
      {
       "percentile": 0.9998046875,
       "count": "31834",
       "duration": "0.001870207s"
      },
      {
       "percentile": 0.9998291015625,
       "count": "31835",
       "duration": "0.001871615s"
      },
      {
       "percentile": 0.999853515625,
       "count": "31836",
       "duration": "0.001873215s"
      },
      {
       "percentile": 0.9998779296875,
       "count": "31837",
       "duration": "0.001875711s"
      },
      {
       "percentile": 0.99989013671875,
       "count": "31837",
       "duration": "0.001875711s"
      },
      {
       "percentile": 0.99990234375,
       "count": "31837",
       "duration": "0.001875711s"
      },
      {
       "percentile": 0.99991455078125,
       "count": "31838",
       "duration": "0.001877247s"
      },
      {
       "percentile": 0.9999267578125,
       "count": "31838",
       "duration": "0.001877247s"
      },
      {
       "percentile": 0.99993896484375,
       "count": "31839",
       "duration": "0.001879295s"
      },
      {
       "percentile": 0.999945068359375,
       "count": "31839",
       "duration": "0.001879295s"
      },
      {
       "percentile": 0.999951171875,
       "count": "31839",
       "duration": "0.001879295s"
      },
      {
       "percentile": 0.999957275390625,
       "count": "31839",
       "duration": "0.001879295s"
      },
      {
       "percentile": 0.99996337890625,
       "count": "31839",
       "duration": "0.001879295s"
      },
      {
       "percentile": 0.999969482421875,
       "count": "31840",
       "duration": "0.001881343s"
      },
      {
       "percentile": 1,
       "count": "31840",
       "duration": "0.001881343s"
      }
     ],
     "mean": "0.000579134s",
     "pstdev": "0.000339354s"
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
     "name": "upstream_cx_http2_total",
     "value": "16"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "1828848"
    },
    {
     "name": "upstream_cx_total",
     "value": "16"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "417264"
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
   "execution_duration": "10.000000551s"
  }
 ],
 "timestamp": "2019-11-12T13:55:55.574885005Z"
}
