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
   "benchmark.http_5xx": 0,
   "benchmark.pool_connection_failure": 0,
   "benchmark.http_4xx": 0
  },
  "requests_per_second": 200,
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
     "count": "1999",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000004355s"
      },
      {
       "percentile": 0.1,
       "count": "201",
       "duration": "0.000004595s"
      },
      {
       "percentile": 0.2,
       "count": "401",
       "duration": "0.000004675s"
      },
      {
       "percentile": 0.3,
       "count": "602",
       "duration": "0.000004733s"
      },
      {
       "percentile": 0.4,
       "count": "805",
       "duration": "0.000004785s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000004839s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000004867s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000004898s"
      },
      {
       "percentile": 0.65,
       "count": "1302",
       "duration": "0.000004938s"
      },
      {
       "percentile": 0.7,
       "count": "1402",
       "duration": "0.000004973s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000005009s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000005031s"
      },
      {
       "percentile": 0.8,
       "count": "1601",
       "duration": "0.000005055s"
      },
      {
       "percentile": 0.825,
       "count": "1651",
       "duration": "0.000005085s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000005112s"
      },
      {
       "percentile": 0.875,
       "count": "1751",
       "duration": "0.000005147s"
      },
      {
       "percentile": 0.8875,
       "count": "1776",
       "duration": "0.000005165s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000005184s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000005209s"
      },
      {
       "percentile": 0.925,
       "count": "1851",
       "duration": "0.000005244s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000005280s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000005294s"
      },
      {
       "percentile": 0.95,
       "count": "1901",
       "duration": "0.000005308s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000005334s"
      },
      {
       "percentile": 0.9625,
       "count": "1926",
       "duration": "0.000005357s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000005384s"
      },
      {
       "percentile": 0.971875,
       "count": "1945",
       "duration": "0.000005403s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000005413s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000005445s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000005479s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000005530s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000005535s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000005547s"
      },
      {
       "percentile": 0.9890625,
       "count": "1979",
       "duration": "0.000005564s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000005590s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000005630s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000005648s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000005698s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000005709s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000005716s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000005761s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000005761s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000005763s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000005901s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000005930s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000005988s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000005988s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000005988s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000005997s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000005997s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000006115s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000006115s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000006115s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000006115s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000006115s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000006154s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000006154s"
      }
     ],
     "mean": "0.000004874s",
     "pstdev": "0.000000240s"
    },
    {
     "count": "1999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000068231s"
      },
      {
       "percentile": 0.1,
       "count": "202",
       "duration": "0.000069883s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000070231s"
      },
      {
       "percentile": 0.3,
       "count": "602",
       "duration": "0.000070511s"
      },
      {
       "percentile": 0.4,
       "count": "802",
       "duration": "0.000070771s"
      },
      {
       "percentile": 0.5,
       "count": "1001",
       "duration": "0.000071027s"
      },
      {
       "percentile": 0.55,
       "count": "1102",
       "duration": "0.000071151s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000071299s"
      },
      {
       "percentile": 0.65,
       "count": "1301",
       "duration": "0.000071487s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000071679s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000071871s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000071963s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000072063s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000072203s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000072363s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000072511s"
      },
      {
       "percentile": 0.8875,
       "count": "1776",
       "duration": "0.000072611s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000072715s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000072851s"
      },
      {
       "percentile": 0.925,
       "count": "1852",
       "duration": "0.000073163s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000073531s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000073899s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000074467s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000075179s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000075379s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000075719s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000075835s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000076091s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000076195s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000076463s"
      },
      {
       "percentile": 0.984375,
       "count": "1969",
       "duration": "0.000076991s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000077359s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000077939s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000079083s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000079443s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000083335s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000094963s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000097967s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000119683s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000123871s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000163135s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000163135s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000168671s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000171687s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000177903s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000179255s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000179255s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000179255s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000187479s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000187479s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000193863s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000193863s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000193863s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000193863s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000193863s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000313999s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000313999s"
      }
     ],
     "mean": "0.000071906s",
     "pstdev": "0.000008793s"
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
     "count": "1999",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000075103s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000076907s"
      },
      {
       "percentile": 0.2,
       "count": "401",
       "duration": "0.000077263s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000077555s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000077819s"
      },
      {
       "percentile": 0.5,
       "count": "1003",
       "duration": "0.000078051s"
      },
      {
       "percentile": 0.55,
       "count": "1103",
       "duration": "0.000078195s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000078347s"
      },
      {
       "percentile": 0.65,
       "count": "1302",
       "duration": "0.000078519s"
      },
      {
       "percentile": 0.7,
       "count": "1401",
       "duration": "0.000078675s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000078863s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000078971s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000079103s"
      },
      {
       "percentile": 0.825,
       "count": "1651",
       "duration": "0.000079259s"
      },
      {
       "percentile": 0.85,
       "count": "1701",
       "duration": "0.000079395s"
      },
      {
       "percentile": 0.875,
       "count": "1751",
       "duration": "0.000079575s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000079683s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000079815s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000080115s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000080371s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000080791s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000081319s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000081883s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000082135s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000082447s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000082727s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000082803s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000082947s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000083267s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000083607s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000083947s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000084615s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000084823s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000085787s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000086411s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000090015s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000101763s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000107279s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000127411s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000131239s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000170095s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000170095s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000175391s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000178431s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000185063s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000186351s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000186351s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000186351s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000194407s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000194407s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000200967s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000200967s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000200967s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000200967s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000200967s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000320975s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000320975s"
      }
     ],
     "mean": "0.000078944s",
     "pstdev": "0.000008799s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "2009"
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
     "value": "114839"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "26196"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "2009"
    }
   ],
   "execution_duration": "10.000000378s"
  },
  {
   "name": "worker_1",
   "statistics": [
    {
     "count": "1999",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000004207s"
      },
      {
       "percentile": 0.1,
       "count": "202",
       "duration": "0.000004536s"
      },
      {
       "percentile": 0.2,
       "count": "401",
       "duration": "0.000004646s"
      },
      {
       "percentile": 0.3,
       "count": "604",
       "duration": "0.000004731s"
      },
      {
       "percentile": 0.4,
       "count": "802",
       "duration": "0.000004802s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000004891s"
      },
      {
       "percentile": 0.55,
       "count": "1105",
       "duration": "0.000004942s"
      },
      {
       "percentile": 0.6,
       "count": "1202",
       "duration": "0.000004980s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000005024s"
      },
      {
       "percentile": 0.7,
       "count": "1401",
       "duration": "0.000005071s"
      },
      {
       "percentile": 0.75,
       "count": "1501",
       "duration": "0.000005132s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000005158s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000005189s"
      },
      {
       "percentile": 0.825,
       "count": "1651",
       "duration": "0.000005219s"
      },
      {
       "percentile": 0.85,
       "count": "1701",
       "duration": "0.000005266s"
      },
      {
       "percentile": 0.875,
       "count": "1752",
       "duration": "0.000005315s"
      },
      {
       "percentile": 0.8875,
       "count": "1777",
       "duration": "0.000005341s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000005372s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000005398s"
      },
      {
       "percentile": 0.925,
       "count": "1851",
       "duration": "0.000005432s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000005498s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000005508s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000005537s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000005554s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000005589s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000005621s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000005631s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000005647s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000005697s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000005728s"
      },
      {
       "percentile": 0.984375,
       "count": "1969",
       "duration": "0.000005760s"
      },
      {
       "percentile": 0.9859375,
       "count": "1972",
       "duration": "0.000005789s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000005808s"
      },
      {
       "percentile": 0.9890625,
       "count": "1979",
       "duration": "0.000005850s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000005866s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000005906s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000005919s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000005984s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000006028s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000006033s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000006082s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000006082s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000006091s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000006111s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000006164s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000006226s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000006226s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000006226s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000006244s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000006244s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000006344s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000006344s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000006344s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000006344s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000006344s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000006377s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000006377s"
      }
     ],
     "mean": "0.000004927s",
     "pstdev": "0.000000332s"
    },
    {
     "count": "1999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000075631s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000106587s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000107231s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000108083s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000114187s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000114911s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000115175s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000115455s"
      },
      {
       "percentile": 0.65,
       "count": "1301",
       "duration": "0.000115783s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000116247s"
      },
      {
       "percentile": 0.75,
       "count": "1501",
       "duration": "0.000116859s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000117199s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000117659s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000119239s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000122191s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000122807s"
      },
      {
       "percentile": 0.8875,
       "count": "1776",
       "duration": "0.000123047s"
      },
      {
       "percentile": 0.9,
       "count": "1801",
       "duration": "0.000123203s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000123379s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000123611s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000123807s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000123947s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000124119s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000124203s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000124367s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000124599s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000124683s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000124759s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000124947s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000125215s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000125371s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000125471s"
      },
      {
       "percentile": 0.9875,
       "count": "1976",
       "duration": "0.000125683s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000126215s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000126715s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000127959s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000127983s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000128575s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000130743s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000133839s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000137991s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000137991s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000158263s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000166111s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000179919s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000186647s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000186647s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000186647s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000190191s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000190191s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000248727s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000248727s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000248727s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000248727s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000248727s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000431471s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000431471s"
      }
     ],
     "mean": "0.000114284s",
     "pstdev": "0.000010267s"
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
     "count": "1999",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000084715s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000113435s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000114163s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000115095s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000121143s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000121863s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000122179s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000122547s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000122879s"
      },
      {
       "percentile": 0.7,
       "count": "1402",
       "duration": "0.000123391s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000124051s"
      },
      {
       "percentile": 0.775,
       "count": "1551",
       "duration": "0.000124407s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000124899s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000126523s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000129255s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000129983s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000130151s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000130379s"
      },
      {
       "percentile": 0.9125,
       "count": "1826",
       "duration": "0.000130583s"
      },
      {
       "percentile": 0.925,
       "count": "1851",
       "duration": "0.000130759s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000131103s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000131231s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000131335s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000131495s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000131663s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000131943s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000132023s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000132167s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000132311s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000132631s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000132871s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000132903s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000133295s"
      },
      {
       "percentile": 0.9890625,
       "count": "1979",
       "duration": "0.000134071s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000134815s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000135031s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000135151s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000135543s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000140087s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000141407s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000144911s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000144911s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000165703s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000173463s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000187567s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000193407s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000193407s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000193407s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000197951s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000197951s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000255943s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000255943s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000255943s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000255943s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000255943s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000438895s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000438895s"
      }
     ],
     "mean": "0.000121347s",
     "pstdev": "0.000010341s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "2009"
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
     "value": "114839"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "26196"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "2009"
    }
   ],
   "execution_duration": "10.000000892s"
  },
  {
   "name": "worker_2",
   "statistics": [
    {
     "count": "1999",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000004263s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000004650s"
      },
      {
       "percentile": 0.2,
       "count": "401",
       "duration": "0.000004768s"
      },
      {
       "percentile": 0.3,
       "count": "601",
       "duration": "0.000004863s"
      },
      {
       "percentile": 0.4,
       "count": "802",
       "duration": "0.000004959s"
      },
      {
       "percentile": 0.5,
       "count": "1001",
       "duration": "0.000005051s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000005090s"
      },
      {
       "percentile": 0.6,
       "count": "1202",
       "duration": "0.000005142s"
      },
      {
       "percentile": 0.65,
       "count": "1301",
       "duration": "0.000005191s"
      },
      {
       "percentile": 0.7,
       "count": "1403",
       "duration": "0.000005249s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000005307s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000005337s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000005364s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000005400s"
      },
      {
       "percentile": 0.85,
       "count": "1701",
       "duration": "0.000005449s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000005504s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000005524s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000005561s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000005587s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000005617s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000005664s"
      },
      {
       "percentile": 0.94375,
       "count": "1888",
       "duration": "0.000005683s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000005714s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000005742s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000005777s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000005848s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000005872s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000005904s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000005927s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000005937s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000005950s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000005987s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000006011s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000006052s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000006113s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000006150s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000006161s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000006181s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000006190s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000006197s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000006248s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000006248s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000006287s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000006308s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000006326s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000006338s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000006338s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000006338s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000006406s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000006406s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000006526s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000006526s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000006526s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000006526s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000006526s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000013282s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000013282s"
      }
     ],
     "mean": "0.000005085s",
     "pstdev": "0.000000400s"
    },
    {
     "count": "1999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000105639s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000114627s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000116087s"
      },
      {
       "percentile": 0.3,
       "count": "601",
       "duration": "0.000121175s"
      },
      {
       "percentile": 0.4,
       "count": "801",
       "duration": "0.000122167s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000122639s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000122863s"
      },
      {
       "percentile": 0.6,
       "count": "1201",
       "duration": "0.000123087s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000123247s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000123471s"
      },
      {
       "percentile": 0.75,
       "count": "1501",
       "duration": "0.000123751s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000123871s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000124011s"
      },
      {
       "percentile": 0.825,
       "count": "1651",
       "duration": "0.000124143s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000124327s"
      },
      {
       "percentile": 0.875,
       "count": "1751",
       "duration": "0.000124523s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000124607s"
      },
      {
       "percentile": 0.9,
       "count": "1801",
       "duration": "0.000124739s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000124835s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000124979s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000125211s"
      },
      {
       "percentile": 0.94375,
       "count": "1888",
       "duration": "0.000125283s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000125439s"
      },
      {
       "percentile": 0.95625,
       "count": "1913",
       "duration": "0.000125607s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000125803s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000125971s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000126083s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000126243s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000126611s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000126827s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000127191s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000127379s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000127711s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000128295s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000129683s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000131719s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000132591s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000136023s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000140887s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000141375s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000160783s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000160783s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000166479s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000167143s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000183295s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000189255s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000189255s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000189255s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000203263s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000203263s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000257735s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000257735s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000257735s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000257735s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000257735s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000442159s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000442159s"
      }
     ],
     "mean": "0.000121077s",
     "pstdev": "0.000009842s"
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
     "count": "1999",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000112151s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000121775s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000123239s"
      },
      {
       "percentile": 0.3,
       "count": "601",
       "duration": "0.000128231s"
      },
      {
       "percentile": 0.4,
       "count": "801",
       "duration": "0.000129171s"
      },
      {
       "percentile": 0.5,
       "count": "1003",
       "duration": "0.000129695s"
      },
      {
       "percentile": 0.55,
       "count": "1102",
       "duration": "0.000129947s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000130223s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000130447s"
      },
      {
       "percentile": 0.7,
       "count": "1401",
       "duration": "0.000130687s"
      },
      {
       "percentile": 0.75,
       "count": "1501",
       "duration": "0.000130955s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000131111s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000131263s"
      },
      {
       "percentile": 0.825,
       "count": "1652",
       "duration": "0.000131471s"
      },
      {
       "percentile": 0.85,
       "count": "1701",
       "duration": "0.000131615s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000131863s"
      },
      {
       "percentile": 0.8875,
       "count": "1776",
       "duration": "0.000132023s"
      },
      {
       "percentile": 0.9,
       "count": "1802",
       "duration": "0.000132151s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000132303s"
      },
      {
       "percentile": 0.925,
       "count": "1853",
       "duration": "0.000132479s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000132719s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000132903s"
      },
      {
       "percentile": 0.95,
       "count": "1901",
       "duration": "0.000133143s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000133263s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000133463s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000133687s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000133735s"
      },
      {
       "percentile": 0.975,
       "count": "1951",
       "duration": "0.000133951s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000134071s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000134391s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000135071s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000135207s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000135783s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000135959s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000137231s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000138919s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000139535s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000143663s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000147991s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000157975s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000167831s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000167831s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000174239s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000174487s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000190479s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000196431s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000196431s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000196431s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000209799s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000209799s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000265455s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000265455s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000265455s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000265455s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000265455s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000450271s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000450271s"
      }
     ],
     "mean": "0.000128281s",
     "pstdev": "0.000009905s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "2009"
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
     "value": "114839"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "26196"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "2009"
    }
   ],
   "execution_duration": "10.000000092s"
  },
  {
   "name": "worker_3",
   "statistics": [
    {
     "count": "1999",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000004134s"
      },
      {
       "percentile": 0.1,
       "count": "202",
       "duration": "0.000004440s"
      },
      {
       "percentile": 0.2,
       "count": "401",
       "duration": "0.000004535s"
      },
      {
       "percentile": 0.3,
       "count": "602",
       "duration": "0.000004605s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000004670s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000004728s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000004758s"
      },
      {
       "percentile": 0.6,
       "count": "1202",
       "duration": "0.000004785s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000004813s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000004844s"
      },
      {
       "percentile": 0.75,
       "count": "1501",
       "duration": "0.000004884s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000004900s"
      },
      {
       "percentile": 0.8,
       "count": "1605",
       "duration": "0.000004919s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000004941s"
      },
      {
       "percentile": 0.85,
       "count": "1701",
       "duration": "0.000004969s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000005001s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000005021s"
      },
      {
       "percentile": 0.9,
       "count": "1801",
       "duration": "0.000005036s"
      },
      {
       "percentile": 0.9125,
       "count": "1826",
       "duration": "0.000005054s"
      },
      {
       "percentile": 0.925,
       "count": "1851",
       "duration": "0.000005080s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000005102s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000005115s"
      },
      {
       "percentile": 0.95,
       "count": "1901",
       "duration": "0.000005133s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000005153s"
      },
      {
       "percentile": 0.9625,
       "count": "1926",
       "duration": "0.000005169s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000005186s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000005202s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000005229s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000005261s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000005284s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000005299s"
      },
      {
       "percentile": 0.9859375,
       "count": "1972",
       "duration": "0.000005313s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000005320s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000005325s"
      },
      {
       "percentile": 0.990625,
       "count": "1982",
       "duration": "0.000005355s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000005376s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000005400s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000005412s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000005442s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000005456s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000005508s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000005508s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000005514s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000005531s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000005535s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000005551s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000005551s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000005551s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000005643s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000005643s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000005704s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000005704s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000005704s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000005704s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000005704s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000006404s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000006404s"
      }
     ],
     "mean": "0.000004735s",
     "pstdev": "0.000000236s"
    },
    {
     "count": "1999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000058753s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000060857s"
      },
      {
       "percentile": 0.2,
       "count": "401",
       "duration": "0.000061665s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000094403s"
      },
      {
       "percentile": 0.4,
       "count": "801",
       "duration": "0.000095643s"
      },
      {
       "percentile": 0.5,
       "count": "1001",
       "duration": "0.000096395s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000096847s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000097511s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000100915s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000103643s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000105039s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000110455s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000112655s"
      },
      {
       "percentile": 0.825,
       "count": "1651",
       "duration": "0.000113775s"
      },
      {
       "percentile": 0.85,
       "count": "1702",
       "duration": "0.000114527s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000114983s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000115219s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000115419s"
      },
      {
       "percentile": 0.9125,
       "count": "1826",
       "duration": "0.000115611s"
      },
      {
       "percentile": 0.925,
       "count": "1852",
       "duration": "0.000116019s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000116775s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000117795s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000118923s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000119807s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000121027s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000121579s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000121759s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000121959s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000122135s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000122315s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000122723s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000122831s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000122943s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000123055s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000123375s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000123811s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000123971s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000124239s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000125067s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000131279s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000140431s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000140431s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000147471s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000153935s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000173543s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000176951s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000176951s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000176951s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000180663s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000180663s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000205519s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000205519s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000205519s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000205519s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000205519s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000263855s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000263855s"
      }
     ],
     "mean": "0.000092115s",
     "pstdev": "0.000021416s"
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
     "count": "1999",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000065403s"
      },
      {
       "percentile": 0.1,
       "count": "203",
       "duration": "0.000067735s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000068651s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000101391s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000102559s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000103335s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000103839s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000104463s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000107967s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000110811s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000112203s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000117355s"
      },
      {
       "percentile": 0.8,
       "count": "1601",
       "duration": "0.000119699s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000120831s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000121511s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000122027s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000122199s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000122495s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000122827s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000123235s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000124107s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000124871s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000125979s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000127639s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000128183s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000128663s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000129155s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000129363s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000129603s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000129767s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000130015s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000130195s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000130415s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000130491s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000131175s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000131607s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000131855s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000132087s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000135335s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000138255s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000147487s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000147487s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000154311s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000161159s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000180567s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000183583s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000183583s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000183583s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000187543s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000187543s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000212327s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000212327s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000212327s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000212327s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000212327s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000270863s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000270863s"
      }
     ],
     "mean": "0.000099132s",
     "pstdev": "0.000021494s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "2009"
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
     "value": "114839"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "26196"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "2009"
    }
   ],
   "execution_duration": "10.000001059s"
  },
  {
   "name": "worker_4",
   "statistics": [
    {
     "count": "1999",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000004330s"
      },
      {
       "percentile": 0.1,
       "count": "202",
       "duration": "0.000004656s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000004752s"
      },
      {
       "percentile": 0.3,
       "count": "601",
       "duration": "0.000004838s"
      },
      {
       "percentile": 0.4,
       "count": "803",
       "duration": "0.000004921s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000004996s"
      },
      {
       "percentile": 0.55,
       "count": "1101",
       "duration": "0.000005043s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000005088s"
      },
      {
       "percentile": 0.65,
       "count": "1301",
       "duration": "0.000005135s"
      },
      {
       "percentile": 0.7,
       "count": "1402",
       "duration": "0.000005198s"
      },
      {
       "percentile": 0.75,
       "count": "1501",
       "duration": "0.000005259s"
      },
      {
       "percentile": 0.775,
       "count": "1552",
       "duration": "0.000005294s"
      },
      {
       "percentile": 0.8,
       "count": "1601",
       "duration": "0.000005322s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000005368s"
      },
      {
       "percentile": 0.85,
       "count": "1701",
       "duration": "0.000005414s"
      },
      {
       "percentile": 0.875,
       "count": "1751",
       "duration": "0.000005457s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000005482s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000005507s"
      },
      {
       "percentile": 0.9125,
       "count": "1826",
       "duration": "0.000005545s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000005573s"
      },
      {
       "percentile": 0.9375,
       "count": "1877",
       "duration": "0.000005622s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000005640s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000005665s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000005695s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000005723s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000005755s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000005767s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000005778s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000005813s"
      },
      {
       "percentile": 0.98125,
       "count": "1963",
       "duration": "0.000005832s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000005878s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000005883s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000005902s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000005934s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000005954s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000005985s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000006s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000006058s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000006090s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000006143s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000006200s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000006200s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000006219s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000006304s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000006312s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000006319s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000006319s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000006319s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000006366s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000006366s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000006474s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000006474s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000006474s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000006474s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000006474s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000012337s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000012337s"
      }
     ],
     "mean": "0.000005049s",
     "pstdev": "0.000000373s"
    },
    {
     "count": "1999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000098855s"
      },
      {
       "percentile": 0.1,
       "count": "201",
       "duration": "0.000106359s"
      },
      {
       "percentile": 0.2,
       "count": "401",
       "duration": "0.000106823s"
      },
      {
       "percentile": 0.3,
       "count": "605",
       "duration": "0.000107263s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000107739s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000108731s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000110123s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000114879s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000115511s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000115975s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000116427s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000116787s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000117119s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000117659s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000118291s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000122167s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000122599s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000123007s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000123335s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000123643s"
      },
      {
       "percentile": 0.9375,
       "count": "1876",
       "duration": "0.000123947s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000124067s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000124219s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000124439s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000124639s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000124899s"
      },
      {
       "percentile": 0.971875,
       "count": "1944",
       "duration": "0.000125055s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000125203s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000125487s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000125679s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000126015s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000126155s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000126579s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000127247s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000127475s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000128127s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000128231s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000128471s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000130499s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000135999s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000144983s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000144983s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000150063s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000153263s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000176175s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000195895s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000195895s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000195895s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000198439s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000198439s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000264767s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000264767s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000264767s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000264767s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000264767s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000450383s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000450383s"
      }
     ],
     "mean": "0.000112642s",
     "pstdev": "0.000010869s"
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
     "count": "1999",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000108251s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000113407s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000113871s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000114343s"
      },
      {
       "percentile": 0.4,
       "count": "801",
       "duration": "0.000114919s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000115883s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000117571s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000122179s"
      },
      {
       "percentile": 0.65,
       "count": "1301",
       "duration": "0.000122835s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000123331s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000123863s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000124251s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000124579s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000125119s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000126019s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000129691s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000130127s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000130543s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000130931s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000131239s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000131583s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000131703s"
      },
      {
       "percentile": 0.95,
       "count": "1901",
       "duration": "0.000131895s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000132055s"
      },
      {
       "percentile": 0.9625,
       "count": "1927",
       "duration": "0.000132407s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000132631s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000132911s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000133103s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000133247s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000133511s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000133727s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000133871s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000134527s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000134919s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000135207s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000135751s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000135943s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000136519s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000138247s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000143967s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000155159s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000155159s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000157199s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000160775s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000183663s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000203071s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000203071s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000203071s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000206383s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000206383s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000272223s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000272223s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000272223s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000272223s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000272223s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000458271s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000458271s"
      }
     ],
     "mean": "0.000119927s",
     "pstdev": "0.000011018s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "2009"
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
     "value": "114839"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "26196"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "2009"
    }
   ],
   "execution_duration": "10.000000056s"
  },
  {
   "name": "worker_5",
   "statistics": [
    {
     "count": "1999",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000004219s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000004620s"
      },
      {
       "percentile": 0.2,
       "count": "401",
       "duration": "0.000004745s"
      },
      {
       "percentile": 0.3,
       "count": "603",
       "duration": "0.000004853s"
      },
      {
       "percentile": 0.4,
       "count": "802",
       "duration": "0.000004971s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000005074s"
      },
      {
       "percentile": 0.55,
       "count": "1101",
       "duration": "0.000005133s"
      },
      {
       "percentile": 0.6,
       "count": "1202",
       "duration": "0.000005193s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000005263s"
      },
      {
       "percentile": 0.7,
       "count": "1401",
       "duration": "0.000005336s"
      },
      {
       "percentile": 0.75,
       "count": "1502",
       "duration": "0.000005412s"
      },
      {
       "percentile": 0.775,
       "count": "1552",
       "duration": "0.000005444s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000005485s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000005527s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000005593s"
      },
      {
       "percentile": 0.875,
       "count": "1751",
       "duration": "0.000005653s"
      },
      {
       "percentile": 0.8875,
       "count": "1776",
       "duration": "0.000005690s"
      },
      {
       "percentile": 0.9,
       "count": "1801",
       "duration": "0.000005733s"
      },
      {
       "percentile": 0.9125,
       "count": "1828",
       "duration": "0.000005752s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000005782s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000005831s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000005850s"
      },
      {
       "percentile": 0.95,
       "count": "1901",
       "duration": "0.000005876s"
      },
      {
       "percentile": 0.95625,
       "count": "1913",
       "duration": "0.000005906s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000005958s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000006010s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000006026s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000006038s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000006061s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000006113s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000006127s"
      },
      {
       "percentile": 0.9859375,
       "count": "1972",
       "duration": "0.000006136s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000006160s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000006188s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000006192s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000006216s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000006217s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000006235s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000006279s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000006284s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000006349s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000006349s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000006372s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000006411s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000006422s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000006459s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000006459s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000006459s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000006516s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000006516s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000006549s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000006549s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000006549s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000006549s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000006549s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000010145s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000010145s"
      }
     ],
     "mean": "0.000005129s",
     "pstdev": "0.000000432s"
    },
    {
     "count": "1999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000107779s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000153431s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000157423s"
      },
      {
       "percentile": 0.3,
       "count": "602",
       "duration": "0.000161319s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000162447s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000170807s"
      },
      {
       "percentile": 0.55,
       "count": "1101",
       "duration": "0.000197559s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000198471s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000199471s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000203959s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000205639s"
      },
      {
       "percentile": 0.775,
       "count": "1552",
       "duration": "0.000206127s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000206503s"
      },
      {
       "percentile": 0.825,
       "count": "1651",
       "duration": "0.000206807s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000207167s"
      },
      {
       "percentile": 0.875,
       "count": "1751",
       "duration": "0.000207543s"
      },
      {
       "percentile": 0.8875,
       "count": "1778",
       "duration": "0.000207671s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000207799s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000207991s"
      },
      {
       "percentile": 0.925,
       "count": "1851",
       "duration": "0.000208255s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000208447s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000208543s"
      },
      {
       "percentile": 0.95,
       "count": "1901",
       "duration": "0.000208711s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000208863s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000209159s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000209679s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000209951s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000210223s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000210871s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000212391s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000212607s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000212847s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000213223s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000213431s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000213823s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000214167s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000214295s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000214863s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000215095s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000215279s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000217079s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000217079s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000217359s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000219255s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000220215s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000243751s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000243751s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000243751s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000255159s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000255159s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000305903s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000305903s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000305903s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000305903s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000305903s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000306543s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000306543s"
      }
     ],
     "mean": "0.000179876s",
     "pstdev": "0.000026330s"
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
     "count": "1999",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000114727s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000160319s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000164311s"
      },
      {
       "percentile": 0.3,
       "count": "602",
       "duration": "0.000168695s"
      },
      {
       "percentile": 0.4,
       "count": "801",
       "duration": "0.000169727s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000178415s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000204567s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000205535s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000206439s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000211727s"
      },
      {
       "percentile": 0.75,
       "count": "1501",
       "duration": "0.000213183s"
      },
      {
       "percentile": 0.775,
       "count": "1551",
       "duration": "0.000213623s"
      },
      {
       "percentile": 0.8,
       "count": "1602",
       "duration": "0.000213935s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000214255s"
      },
      {
       "percentile": 0.85,
       "count": "1702",
       "duration": "0.000214583s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000214943s"
      },
      {
       "percentile": 0.8875,
       "count": "1776",
       "duration": "0.000215087s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000215255s"
      },
      {
       "percentile": 0.9125,
       "count": "1827",
       "duration": "0.000215471s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000215631s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000215855s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000215983s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000216215s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000216375s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000216815s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000217199s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000217719s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000218079s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000219071s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000219991s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000220879s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000221159s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000221535s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000221711s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000221863s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000222031s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000222223s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000222647s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000223143s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000223175s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000224247s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000224247s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000225695s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000226951s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000227263s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000258239s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000258239s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000258239s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000262415s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000262415s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000313295s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000313295s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000313295s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000313295s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000313295s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000314175s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000314175s"
      }
     ],
     "mean": "0.000187178s",
     "pstdev": "0.000026402s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "2009"
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
     "value": "114839"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "26196"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "2009"
    }
   ],
   "execution_duration": "10.000000311s"
  },
  {
   "name": "worker_6",
   "statistics": [
    {
     "count": "1999",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000004274s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000004720s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000004865s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000004964s"
      },
      {
       "percentile": 0.4,
       "count": "805",
       "duration": "0.000005071s"
      },
      {
       "percentile": 0.5,
       "count": "1003",
       "duration": "0.000005163s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000005220s"
      },
      {
       "percentile": 0.6,
       "count": "1202",
       "duration": "0.000005273s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000005332s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000005392s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000005470s"
      },
      {
       "percentile": 0.775,
       "count": "1551",
       "duration": "0.000005505s"
      },
      {
       "percentile": 0.8,
       "count": "1601",
       "duration": "0.000005541s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000005590s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000005643s"
      },
      {
       "percentile": 0.875,
       "count": "1751",
       "duration": "0.000005709s"
      },
      {
       "percentile": 0.8875,
       "count": "1776",
       "duration": "0.000005739s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000005765s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000005789s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000005837s"
      },
      {
       "percentile": 0.9375,
       "count": "1876",
       "duration": "0.000005874s"
      },
      {
       "percentile": 0.94375,
       "count": "1889",
       "duration": "0.000005897s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000005932s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000005953s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000006015s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000006038s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000006055s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000006080s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000006096s"
      },
      {
       "percentile": 0.98125,
       "count": "1963",
       "duration": "0.000006127s"
      },
      {
       "percentile": 0.984375,
       "count": "1969",
       "duration": "0.000006162s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000006190s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000006227s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000006245s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000006296s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000006315s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000006321s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000006370s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000006443s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000006446s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000006473s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000006473s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000006532s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000006567s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000006617s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000006620s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000006620s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000006620s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000006648s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000006648s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000006668s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000006668s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000006668s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000006668s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000006668s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000006733s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000006733s"
      }
     ],
     "mean": "0.000005209s",
     "pstdev": "0.000000403s"
    },
    {
     "count": "1999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000068651s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000113587s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000114239s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000114823s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000115527s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000210647s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000212015s"
      },
      {
       "percentile": 0.6,
       "count": "1202",
       "duration": "0.000212527s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000212863s"
      },
      {
       "percentile": 0.7,
       "count": "1404",
       "duration": "0.000213183s"
      },
      {
       "percentile": 0.75,
       "count": "1502",
       "duration": "0.000213479s"
      },
      {
       "percentile": 0.775,
       "count": "1551",
       "duration": "0.000213639s"
      },
      {
       "percentile": 0.8,
       "count": "1602",
       "duration": "0.000213783s"
      },
      {
       "percentile": 0.825,
       "count": "1651",
       "duration": "0.000213959s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000214127s"
      },
      {
       "percentile": 0.875,
       "count": "1752",
       "duration": "0.000214327s"
      },
      {
       "percentile": 0.8875,
       "count": "1776",
       "duration": "0.000214431s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000214527s"
      },
      {
       "percentile": 0.9125,
       "count": "1826",
       "duration": "0.000214719s"
      },
      {
       "percentile": 0.925,
       "count": "1851",
       "duration": "0.000214871s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000215087s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000215175s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000215255s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000215399s"
      },
      {
       "percentile": 0.9625,
       "count": "1926",
       "duration": "0.000215607s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000215927s"
      },
      {
       "percentile": 0.971875,
       "count": "1944",
       "duration": "0.000216103s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000216343s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000216567s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000216711s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000216807s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000216959s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000217647s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000217799s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000218271s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000218671s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000218999s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000219135s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000220007s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000220359s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000221543s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000221543s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000222431s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000223391s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000229567s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000229615s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000229615s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000229615s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000247311s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000247311s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000282079s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000282079s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000282079s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000282079s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000282079s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000310879s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000310879s"
      }
     ],
     "mean": "0.000163788s",
     "pstdev": "0.000050745s"
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
     "count": "1999",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000075635s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000120903s"
      },
      {
       "percentile": 0.2,
       "count": "401",
       "duration": "0.000121479s"
      },
      {
       "percentile": 0.3,
       "count": "601",
       "duration": "0.000122059s"
      },
      {
       "percentile": 0.4,
       "count": "801",
       "duration": "0.000122775s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000218055s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000219335s"
      },
      {
       "percentile": 0.6,
       "count": "1201",
       "duration": "0.000219783s"
      },
      {
       "percentile": 0.65,
       "count": "1301",
       "duration": "0.000220143s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000220511s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000220783s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000220951s"
      },
      {
       "percentile": 0.8,
       "count": "1602",
       "duration": "0.000221103s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000221263s"
      },
      {
       "percentile": 0.85,
       "count": "1701",
       "duration": "0.000221479s"
      },
      {
       "percentile": 0.875,
       "count": "1751",
       "duration": "0.000221695s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000221823s"
      },
      {
       "percentile": 0.9,
       "count": "1802",
       "duration": "0.000221935s"
      },
      {
       "percentile": 0.9125,
       "count": "1826",
       "duration": "0.000222071s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000222247s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000222543s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000222663s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000222807s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000222967s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000223231s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000223607s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000223727s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000223895s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000224023s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000224127s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000224847s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000224943s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000225191s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000225511s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000226111s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000226255s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000226519s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000226631s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000228239s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000228423s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000229247s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000229247s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000229679s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000230975s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000236935s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000237327s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000237327s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000237327s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000255263s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000255263s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000289599s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000289599s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000289599s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000289599s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000289599s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000317759s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000317759s"
      }
     ],
     "mean": "0.000171096s",
     "pstdev": "0.000050796s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "2009"
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
     "value": "114839"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "26196"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "2009"
    }
   ],
   "execution_duration": "10.000000234s"
  },
  {
   "name": "worker_7",
   "statistics": [
    {
     "count": "1999",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000004210s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000004567s"
      },
      {
       "percentile": 0.2,
       "count": "401",
       "duration": "0.000004659s"
      },
      {
       "percentile": 0.3,
       "count": "603",
       "duration": "0.000004750s"
      },
      {
       "percentile": 0.4,
       "count": "802",
       "duration": "0.000004829s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000004898s"
      },
      {
       "percentile": 0.55,
       "count": "1101",
       "duration": "0.000004935s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000004977s"
      },
      {
       "percentile": 0.65,
       "count": "1301",
       "duration": "0.000005018s"
      },
      {
       "percentile": 0.7,
       "count": "1403",
       "duration": "0.000005069s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000005126s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000005155s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000005182s"
      },
      {
       "percentile": 0.825,
       "count": "1651",
       "duration": "0.000005215s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000005247s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000005288s"
      },
      {
       "percentile": 0.8875,
       "count": "1778",
       "duration": "0.000005308s"
      },
      {
       "percentile": 0.9,
       "count": "1801",
       "duration": "0.000005331s"
      },
      {
       "percentile": 0.9125,
       "count": "1826",
       "duration": "0.000005353s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000005369s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000005401s"
      },
      {
       "percentile": 0.94375,
       "count": "1888",
       "duration": "0.000005425s"
      },
      {
       "percentile": 0.95,
       "count": "1901",
       "duration": "0.000005442s"
      },
      {
       "percentile": 0.95625,
       "count": "1914",
       "duration": "0.000005475s"
      },
      {
       "percentile": 0.9625,
       "count": "1926",
       "duration": "0.000005512s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000005537s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000005544s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000005587s"
      },
      {
       "percentile": 0.978125,
       "count": "1957",
       "duration": "0.000005617s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000005652s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000005698s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000005719s"
      },
      {
       "percentile": 0.9875,
       "count": "1977",
       "duration": "0.000005765s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000005768s"
      },
      {
       "percentile": 0.990625,
       "count": "1982",
       "duration": "0.000005801s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000005827s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000005861s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000005877s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000005906s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000005915s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000005940s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000005940s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000005955s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000005972s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000006037s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000006039s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000006039s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000006039s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000006104s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000006104s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000006136s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000006136s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000006136s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000006136s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000006136s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000009251s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000009251s"
      }
     ],
     "mean": "0.000004930s",
     "pstdev": "0.000000316s"
    },
    {
     "count": "1999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000073631s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000093847s"
      },
      {
       "percentile": 0.2,
       "count": "401",
       "duration": "0.000100491s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000100899s"
      },
      {
       "percentile": 0.4,
       "count": "804",
       "duration": "0.000101295s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000101599s"
      },
      {
       "percentile": 0.55,
       "count": "1101",
       "duration": "0.000101751s"
      },
      {
       "percentile": 0.6,
       "count": "1201",
       "duration": "0.000101971s"
      },
      {
       "percentile": 0.65,
       "count": "1301",
       "duration": "0.000102199s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000102427s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000102735s"
      },
      {
       "percentile": 0.775,
       "count": "1552",
       "duration": "0.000102947s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000103243s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000103703s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000105415s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000136455s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000138303s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000140967s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000145719s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000146655s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000147215s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000147455s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000147711s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000148191s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000148711s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000149239s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000149695s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000152575s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000153903s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000155807s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000157375s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000157655s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000158015s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000158471s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000158879s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000159199s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000159247s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000159559s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000161127s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000162743s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000178615s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000178615s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000192295s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000195431s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000208103s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000208383s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000208383s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000208383s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000208719s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000208719s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000212583s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000212583s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000212583s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000212583s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000212583s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000263167s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000263167s"
      }
     ],
     "mean": "0.000106763s",
     "pstdev": "0.000017022s"
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
     "count": "1999",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000080327s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000101099s"
      },
      {
       "percentile": 0.2,
       "count": "402",
       "duration": "0.000107431s"
      },
      {
       "percentile": 0.3,
       "count": "602",
       "duration": "0.000107939s"
      },
      {
       "percentile": 0.4,
       "count": "801",
       "duration": "0.000108303s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000108647s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000108851s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000109071s"
      },
      {
       "percentile": 0.65,
       "count": "1303",
       "duration": "0.000109271s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000109527s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000109879s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000110127s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000110527s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000111251s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000112875s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000143791s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000145287s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000148399s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000152767s"
      },
      {
       "percentile": 0.925,
       "count": "1851",
       "duration": "0.000153703s"
      },
      {
       "percentile": 0.9375,
       "count": "1876",
       "duration": "0.000154367s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000154511s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000154903s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000155367s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000155807s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000156255s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000157159s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000159471s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000161127s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000162879s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000164215s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000164991s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000165199s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000165639s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000165959s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000166127s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000166487s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000166831s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000167831s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000169871s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000185639s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000185639s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000199991s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000202487s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000214879s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000215567s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000215567s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000215567s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000215751s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000215751s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000220263s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000220263s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000220263s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000220263s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000220263s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000270287s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000270287s"
      }
     ],
     "mean": "0.000113859s",
     "pstdev": "0.000017034s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "2009"
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
     "value": "114839"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "26196"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "2009"
    }
   ],
   "execution_duration": "10.000000517s"
  },
  {
   "name": "worker_8",
   "statistics": [
    {
     "count": "1999",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000004118s"
      },
      {
       "percentile": 0.1,
       "count": "206",
       "duration": "0.000004447s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000004531s"
      },
      {
       "percentile": 0.3,
       "count": "603",
       "duration": "0.000004620s"
      },
      {
       "percentile": 0.4,
       "count": "802",
       "duration": "0.000004687s"
      },
      {
       "percentile": 0.5,
       "count": "1002",
       "duration": "0.000004747s"
      },
      {
       "percentile": 0.55,
       "count": "1103",
       "duration": "0.000004787s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000004825s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000004870s"
      },
      {
       "percentile": 0.7,
       "count": "1401",
       "duration": "0.000004914s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000004960s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000004986s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000005014s"
      },
      {
       "percentile": 0.825,
       "count": "1651",
       "duration": "0.000005050s"
      },
      {
       "percentile": 0.85,
       "count": "1701",
       "duration": "0.000005090s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000005127s"
      },
      {
       "percentile": 0.8875,
       "count": "1777",
       "duration": "0.000005148s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000005163s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000005181s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000005218s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000005244s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000005263s"
      },
      {
       "percentile": 0.95,
       "count": "1901",
       "duration": "0.000005288s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000005315s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000005344s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000005369s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000005390s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000005409s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000005427s"
      },
      {
       "percentile": 0.98125,
       "count": "1964",
       "duration": "0.000005442s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000005456s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000005473s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000005501s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000005510s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000005527s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000005561s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000005611s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000005653s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000005684s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000005690s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000005708s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000005708s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000005789s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000005806s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000005817s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000005832s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000005832s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000005832s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000005895s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000005895s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000005918s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000005918s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000005918s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000005918s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000005918s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000006084s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000006084s"
      }
     ],
     "mean": "0.000004784s",
     "pstdev": "0.000000282s"
    },
    {
     "count": "1999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000065851s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000069467s"
      },
      {
       "percentile": 0.2,
       "count": "401",
       "duration": "0.000069891s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000070315s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000071035s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000073883s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000134335s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000134687s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000135031s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000135319s"
      },
      {
       "percentile": 0.75,
       "count": "1502",
       "duration": "0.000135671s"
      },
      {
       "percentile": 0.775,
       "count": "1553",
       "duration": "0.000135855s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000136151s"
      },
      {
       "percentile": 0.825,
       "count": "1651",
       "duration": "0.000136527s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000138015s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000142759s"
      },
      {
       "percentile": 0.8875,
       "count": "1777",
       "duration": "0.000143135s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000143391s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000143703s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000143855s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000144199s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000144383s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000144511s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000144655s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000144895s"
      },
      {
       "percentile": 0.96875,
       "count": "1938",
       "duration": "0.000145031s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000145159s"
      },
      {
       "percentile": 0.975,
       "count": "1951",
       "duration": "0.000145327s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000145407s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000145527s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000145799s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000145847s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000145967s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000146063s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000146351s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000146831s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000146847s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000147463s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000150655s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000151287s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000162527s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000162527s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000188319s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000193495s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000213295s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000215991s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000215991s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000215991s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000220127s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000220127s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000245431s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000245431s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000245431s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000245431s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000245431s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000303599s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000303599s"
      }
     ],
     "mean": "0.000104145s",
     "pstdev": "0.000034643s"
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
     "count": "1999",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000072663s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000076327s"
      },
      {
       "percentile": 0.2,
       "count": "403",
       "duration": "0.000076835s"
      },
      {
       "percentile": 0.3,
       "count": "602",
       "duration": "0.000077315s"
      },
      {
       "percentile": 0.4,
       "count": "801",
       "duration": "0.000077971s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000081487s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000141159s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000141535s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000141919s"
      },
      {
       "percentile": 0.7,
       "count": "1401",
       "duration": "0.000142223s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000142559s"
      },
      {
       "percentile": 0.775,
       "count": "1551",
       "duration": "0.000142767s"
      },
      {
       "percentile": 0.8,
       "count": "1601",
       "duration": "0.000143111s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000143551s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000145039s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000149519s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000150023s"
      },
      {
       "percentile": 0.9,
       "count": "1801",
       "duration": "0.000150279s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000150567s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000150807s"
      },
      {
       "percentile": 0.9375,
       "count": "1876",
       "duration": "0.000151231s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000151351s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000151599s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000151719s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000151895s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000152095s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000152319s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000152583s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000152807s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000152983s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000153279s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000153551s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000154551s"
      },
      {
       "percentile": 0.9890625,
       "count": "1979",
       "duration": "0.000154599s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000154879s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000155319s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000155359s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000155847s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000157847s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000158087s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000169231s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000169231s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000195127s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000200511s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000220679s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000222927s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000222927s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000222927s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000226679s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000226679s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000252223s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000252223s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000252223s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000252223s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000252223s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000309999s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000309999s"
      }
     ],
     "mean": "0.000111083s",
     "pstdev": "0.000034653s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "2009"
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
     "value": "114839"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "26196"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "2009"
    }
   ],
   "execution_duration": "10.000001037s"
  },
  {
   "name": "worker_9",
   "statistics": [
    {
     "count": "1999",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000004256s"
      },
      {
       "percentile": 0.1,
       "count": "201",
       "duration": "0.000004544s"
      },
      {
       "percentile": 0.2,
       "count": "401",
       "duration": "0.000004622s"
      },
      {
       "percentile": 0.3,
       "count": "602",
       "duration": "0.000004686s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000004746s"
      },
      {
       "percentile": 0.5,
       "count": "1003",
       "duration": "0.000004808s"
      },
      {
       "percentile": 0.55,
       "count": "1101",
       "duration": "0.000004833s"
      },
      {
       "percentile": 0.6,
       "count": "1205",
       "duration": "0.000004874s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000004924s"
      },
      {
       "percentile": 0.7,
       "count": "1402",
       "duration": "0.000004963s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000005006s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000005039s"
      },
      {
       "percentile": 0.8,
       "count": "1601",
       "duration": "0.000005076s"
      },
      {
       "percentile": 0.825,
       "count": "1651",
       "duration": "0.000005106s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000005149s"
      },
      {
       "percentile": 0.875,
       "count": "1752",
       "duration": "0.000005198s"
      },
      {
       "percentile": 0.8875,
       "count": "1776",
       "duration": "0.000005217s"
      },
      {
       "percentile": 0.9,
       "count": "1801",
       "duration": "0.000005248s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000005279s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000005327s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000005365s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000005383s"
      },
      {
       "percentile": 0.95,
       "count": "1901",
       "duration": "0.000005409s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000005430s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000005469s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000005511s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000005524s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000005544s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000005559s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000005602s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000005659s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000005688s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000005710s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000005737s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000005753s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000005801s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000005803s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000005822s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000005848s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000005901s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000005978s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000005978s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000005996s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000006012s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000006037s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000006077s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000006077s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000006077s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000006138s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000006138s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000006199s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000006199s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000006199s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000006199s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000006199s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000006579s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000006579s"
      }
     ],
     "mean": "0.000004859s",
     "pstdev": "0.000000289s"
    },
    {
     "count": "1999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000072027s"
      },
      {
       "percentile": 0.1,
       "count": "202",
       "duration": "0.000092359s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000092779s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000093083s"
      },
      {
       "percentile": 0.4,
       "count": "802",
       "duration": "0.000093391s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000093699s"
      },
      {
       "percentile": 0.55,
       "count": "1102",
       "duration": "0.000093911s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000094131s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000094431s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000094995s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000100015s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000101283s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000101951s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000102547s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000103379s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000129247s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000137695s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000138231s"
      },
      {
       "percentile": 0.9125,
       "count": "1826",
       "duration": "0.000138807s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000139671s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000140495s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000141423s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000145751s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000146471s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000147015s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000147815s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000148375s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000148711s"
      },
      {
       "percentile": 0.978125,
       "count": "1957",
       "duration": "0.000149015s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000149543s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000150055s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000150191s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000150903s"
      },
      {
       "percentile": 0.9890625,
       "count": "1979",
       "duration": "0.000151295s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000151407s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000151831s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000151839s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000153703s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000155863s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000158647s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000171743s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000171743s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000184151s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000188303s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000200159s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000200367s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000200367s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000200367s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000201383s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000201383s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000202975s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000202975s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000202975s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000202975s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000202975s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000256199s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000256199s"
      }
     ],
     "mean": "0.000101003s",
     "pstdev": "0.000017437s"
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
     "count": "1999",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000078799s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000099255s"
      },
      {
       "percentile": 0.2,
       "count": "405",
       "duration": "0.000099675s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000099975s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000100283s"
      },
      {
       "percentile": 0.5,
       "count": "1003",
       "duration": "0.000100627s"
      },
      {
       "percentile": 0.55,
       "count": "1103",
       "duration": "0.000100847s"
      },
      {
       "percentile": 0.6,
       "count": "1202",
       "duration": "0.000101087s"
      },
      {
       "percentile": 0.65,
       "count": "1301",
       "duration": "0.000101435s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000102383s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000107083s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000108607s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000109167s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000109823s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000110635s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000136063s"
      },
      {
       "percentile": 0.8875,
       "count": "1776",
       "duration": "0.000144703s"
      },
      {
       "percentile": 0.9,
       "count": "1801",
       "duration": "0.000145207s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000145807s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000146551s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000147583s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000149271s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000152655s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000153943s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000154471s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000155207s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000155663s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000155887s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000156191s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000156727s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000157559s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000157727s"
      },
      {
       "percentile": 0.9875,
       "count": "1976",
       "duration": "0.000158015s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000158135s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000158231s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000158647s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000159007s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000160511s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000163671s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000165503s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000178911s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000178911s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000191399s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000195159s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000207103s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000207487s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000207487s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000207487s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000208087s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000208087s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000210359s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000210359s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000210359s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000210359s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000210359s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000263183s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000263183s"
      }
     ],
     "mean": "0.000108039s",
     "pstdev": "0.000017504s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "2009"
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
     "value": "114839"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "26196"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "2009"
    }
   ],
   "execution_duration": "10.000000117s"
  },
  {
   "name": "worker_10",
   "statistics": [
    {
     "count": "1999",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000004335s"
      },
      {
       "percentile": 0.1,
       "count": "201",
       "duration": "0.000004663s"
      },
      {
       "percentile": 0.2,
       "count": "401",
       "duration": "0.000004768s"
      },
      {
       "percentile": 0.3,
       "count": "604",
       "duration": "0.000004846s"
      },
      {
       "percentile": 0.4,
       "count": "801",
       "duration": "0.000004916s"
      },
      {
       "percentile": 0.5,
       "count": "1003",
       "duration": "0.000004990s"
      },
      {
       "percentile": 0.55,
       "count": "1102",
       "duration": "0.000005024s"
      },
      {
       "percentile": 0.6,
       "count": "1203",
       "duration": "0.000005069s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000005109s"
      },
      {
       "percentile": 0.7,
       "count": "1403",
       "duration": "0.000005158s"
      },
      {
       "percentile": 0.75,
       "count": "1501",
       "duration": "0.000005215s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000005250s"
      },
      {
       "percentile": 0.8,
       "count": "1602",
       "duration": "0.000005279s"
      },
      {
       "percentile": 0.825,
       "count": "1651",
       "duration": "0.000005317s"
      },
      {
       "percentile": 0.85,
       "count": "1702",
       "duration": "0.000005357s"
      },
      {
       "percentile": 0.875,
       "count": "1751",
       "duration": "0.000005405s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000005433s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000005461s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000005492s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000005524s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000005560s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000005576s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000005597s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000005620s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000005651s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000005681s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000005711s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000005730s"
      },
      {
       "percentile": 0.978125,
       "count": "1957",
       "duration": "0.000005751s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000005782s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000005825s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000005845s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000005870s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000005875s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000005933s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000005980s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000005981s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000005998s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000006014s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000006017s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000006039s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000006039s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000006045s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000006052s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000006098s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000006140s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000006140s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000006140s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000006164s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000006164s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000006308s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000006308s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000006308s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000006308s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000006308s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000006330s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000006330s"
      }
     ],
     "mean": "0.000005029s",
     "pstdev": "0.000000312s"
    },
    {
     "count": "1999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000069871s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000073999s"
      },
      {
       "percentile": 0.2,
       "count": "401",
       "duration": "0.000144999s"
      },
      {
       "percentile": 0.3,
       "count": "602",
       "duration": "0.000145511s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000145879s"
      },
      {
       "percentile": 0.5,
       "count": "1003",
       "duration": "0.000146231s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000146367s"
      },
      {
       "percentile": 0.6,
       "count": "1205",
       "duration": "0.000146551s"
      },
      {
       "percentile": 0.65,
       "count": "1301",
       "duration": "0.000146711s"
      },
      {
       "percentile": 0.7,
       "count": "1401",
       "duration": "0.000146887s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000147063s"
      },
      {
       "percentile": 0.775,
       "count": "1551",
       "duration": "0.000147215s"
      },
      {
       "percentile": 0.8,
       "count": "1604",
       "duration": "0.000147335s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000147543s"
      },
      {
       "percentile": 0.85,
       "count": "1701",
       "duration": "0.000147743s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000147983s"
      },
      {
       "percentile": 0.8875,
       "count": "1777",
       "duration": "0.000148095s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000148271s"
      },
      {
       "percentile": 0.9125,
       "count": "1826",
       "duration": "0.000148503s"
      },
      {
       "percentile": 0.925,
       "count": "1851",
       "duration": "0.000148703s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000149055s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000149279s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000149567s"
      },
      {
       "percentile": 0.95625,
       "count": "1913",
       "duration": "0.000149807s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000150103s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000151191s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000152343s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000153079s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000154327s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000156127s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000157559s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000157839s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000158007s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000158327s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000159319s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000159895s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000160287s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000161919s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000164823s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000168103s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000180175s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000180175s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000181903s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000182623s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000185615s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000190135s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000190135s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000190135s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000220527s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000220527s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000241047s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000241047s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000241047s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000241047s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000241047s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000264383s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000264383s"
      }
     ],
     "mean": "0.000138015s",
     "pstdev": "0.000024652s"
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
     "count": "1999",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000076491s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000081527s"
      },
      {
       "percentile": 0.2,
       "count": "401",
       "duration": "0.000151991s"
      },
      {
       "percentile": 0.3,
       "count": "605",
       "duration": "0.000152583s"
      },
      {
       "percentile": 0.4,
       "count": "801",
       "duration": "0.000152967s"
      },
      {
       "percentile": 0.5,
       "count": "1001",
       "duration": "0.000153327s"
      },
      {
       "percentile": 0.55,
       "count": "1106",
       "duration": "0.000153511s"
      },
      {
       "percentile": 0.6,
       "count": "1203",
       "duration": "0.000153655s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000153823s"
      },
      {
       "percentile": 0.7,
       "count": "1403",
       "duration": "0.000154007s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000154271s"
      },
      {
       "percentile": 0.775,
       "count": "1551",
       "duration": "0.000154423s"
      },
      {
       "percentile": 0.8,
       "count": "1601",
       "duration": "0.000154551s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000154759s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000155071s"
      },
      {
       "percentile": 0.875,
       "count": "1752",
       "duration": "0.000155327s"
      },
      {
       "percentile": 0.8875,
       "count": "1777",
       "duration": "0.000155471s"
      },
      {
       "percentile": 0.9,
       "count": "1801",
       "duration": "0.000155631s"
      },
      {
       "percentile": 0.9125,
       "count": "1826",
       "duration": "0.000155799s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000156167s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000156535s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000156751s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000157095s"
      },
      {
       "percentile": 0.95625,
       "count": "1913",
       "duration": "0.000157447s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000157951s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000159207s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000159543s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000160263s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000161479s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000163551s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000164503s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000164807s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000165159s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000165583s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000166511s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000167279s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000168711s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000169319s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000171863s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000175223s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000187295s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000187295s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000188759s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000189879s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000192775s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000197479s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000197479s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000197479s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000227951s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000227951s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000248311s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000248311s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000248311s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000248311s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000248311s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000271567s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000271567s"
      }
     ],
     "mean": "0.000145169s",
     "pstdev": "0.000024653s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "2009"
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
     "value": "114839"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "26196"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "2009"
    }
   ],
   "execution_duration": "10.000000263s"
  },
  {
   "name": "worker_11",
   "statistics": [
    {
     "count": "1999",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000003974s"
      },
      {
       "percentile": 0.1,
       "count": "201",
       "duration": "0.000004479s"
      },
      {
       "percentile": 0.2,
       "count": "401",
       "duration": "0.000004604s"
      },
      {
       "percentile": 0.3,
       "count": "606",
       "duration": "0.000004698s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000004782s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000004868s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000004913s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000004956s"
      },
      {
       "percentile": 0.65,
       "count": "1301",
       "duration": "0.000005008s"
      },
      {
       "percentile": 0.7,
       "count": "1402",
       "duration": "0.000005065s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000005125s"
      },
      {
       "percentile": 0.775,
       "count": "1552",
       "duration": "0.000005158s"
      },
      {
       "percentile": 0.8,
       "count": "1602",
       "duration": "0.000005188s"
      },
      {
       "percentile": 0.825,
       "count": "1651",
       "duration": "0.000005231s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000005277s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000005317s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000005346s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000005371s"
      },
      {
       "percentile": 0.9125,
       "count": "1826",
       "duration": "0.000005411s"
      },
      {
       "percentile": 0.925,
       "count": "1851",
       "duration": "0.000005449s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000005478s"
      },
      {
       "percentile": 0.94375,
       "count": "1888",
       "duration": "0.000005501s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000005534s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000005566s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000005602s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000005639s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000005663s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000005679s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000005693s"
      },
      {
       "percentile": 0.98125,
       "count": "1963",
       "duration": "0.000005721s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000005772s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000005782s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000005810s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000005832s"
      },
      {
       "percentile": 0.990625,
       "count": "1982",
       "duration": "0.000005869s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000005910s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000005916s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000005930s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000005953s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000005963s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000005978s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000005978s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000006021s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000006153s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000006223s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000006342s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000006342s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000006342s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000006516s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000006516s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000006822s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000006822s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000006822s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000006822s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000006822s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000015781s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000015781s"
      }
     ],
     "mean": "0.000004908s",
     "pstdev": "0.000000429s"
    },
    {
     "count": "1999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000068371s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000069935s"
      },
      {
       "percentile": 0.2,
       "count": "402",
       "duration": "0.000070519s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000070991s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000071515s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000115227s"
      },
      {
       "percentile": 0.55,
       "count": "1101",
       "duration": "0.000118315s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000119235s"
      },
      {
       "percentile": 0.65,
       "count": "1301",
       "duration": "0.000119827s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000120879s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000154223s"
      },
      {
       "percentile": 0.775,
       "count": "1553",
       "duration": "0.000154663s"
      },
      {
       "percentile": 0.8,
       "count": "1602",
       "duration": "0.000155023s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000155327s"
      },
      {
       "percentile": 0.85,
       "count": "1702",
       "duration": "0.000155679s"
      },
      {
       "percentile": 0.875,
       "count": "1751",
       "duration": "0.000156119s"
      },
      {
       "percentile": 0.8875,
       "count": "1777",
       "duration": "0.000156375s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000156727s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000157063s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000158127s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000159495s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000159799s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000160247s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000160719s"
      },
      {
       "percentile": 0.9625,
       "count": "1926",
       "duration": "0.000161055s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000161591s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000162007s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000162151s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000162431s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000162743s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000162935s"
      },
      {
       "percentile": 0.9859375,
       "count": "1972",
       "duration": "0.000163231s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000163319s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000163479s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000163783s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000164047s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000164063s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000164559s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000165263s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000165719s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000167207s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000167207s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000168047s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000175943s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000220599s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000228607s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000228607s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000228607s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000281951s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000281951s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000292255s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000292255s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000292255s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000292255s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000292255s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000363167s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000363167s"
      }
     ],
     "mean": "0.000106302s",
     "pstdev": "0.000038238s"
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
     "count": "1999",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000075351s"
      },
      {
       "percentile": 0.1,
       "count": "201",
       "duration": "0.000077071s"
      },
      {
       "percentile": 0.2,
       "count": "402",
       "duration": "0.000077619s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000078027s"
      },
      {
       "percentile": 0.4,
       "count": "801",
       "duration": "0.000078519s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000122583s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000125419s"
      },
      {
       "percentile": 0.6,
       "count": "1201",
       "duration": "0.000126255s"
      },
      {
       "percentile": 0.65,
       "count": "1301",
       "duration": "0.000126927s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000128219s"
      },
      {
       "percentile": 0.75,
       "count": "1501",
       "duration": "0.000161527s"
      },
      {
       "percentile": 0.775,
       "count": "1551",
       "duration": "0.000161879s"
      },
      {
       "percentile": 0.8,
       "count": "1602",
       "duration": "0.000162287s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000162607s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000162959s"
      },
      {
       "percentile": 0.875,
       "count": "1751",
       "duration": "0.000163343s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000163559s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000163911s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000164407s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000165431s"
      },
      {
       "percentile": 0.9375,
       "count": "1876",
       "duration": "0.000166703s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000167023s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000167503s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000168055s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000168431s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000169087s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000169391s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000169703s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000169895s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000170063s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000170679s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000170775s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000171047s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000171127s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000171271s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000171631s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000171695s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000172167s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000173247s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000173287s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000174559s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000174559s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000174879s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000182991s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000227607s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000235935s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000235935s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000235935s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000289231s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000289231s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000299679s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000299679s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000299679s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000299679s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000299679s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000370287s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000370287s"
      }
     ],
     "mean": "0.000113473s",
     "pstdev": "0.000038325s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "2009"
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
     "value": "114839"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "26196"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "2009"
    }
   ],
   "execution_duration": "10.000000362s"
  },
  {
   "name": "worker_12",
   "statistics": [
    {
     "count": "1999",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000004070s"
      },
      {
       "percentile": 0.1,
       "count": "201",
       "duration": "0.000004424s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000004510s"
      },
      {
       "percentile": 0.3,
       "count": "604",
       "duration": "0.000004573s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000004633s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000004694s"
      },
      {
       "percentile": 0.55,
       "count": "1102",
       "duration": "0.000004722s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000004752s"
      },
      {
       "percentile": 0.65,
       "count": "1302",
       "duration": "0.000004792s"
      },
      {
       "percentile": 0.7,
       "count": "1402",
       "duration": "0.000004830s"
      },
      {
       "percentile": 0.75,
       "count": "1501",
       "duration": "0.000004873s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000004898s"
      },
      {
       "percentile": 0.8,
       "count": "1601",
       "duration": "0.000004928s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000004959s"
      },
      {
       "percentile": 0.85,
       "count": "1703",
       "duration": "0.000004987s"
      },
      {
       "percentile": 0.875,
       "count": "1752",
       "duration": "0.000005024s"
      },
      {
       "percentile": 0.8875,
       "count": "1776",
       "duration": "0.000005050s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000005064s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000005085s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000005117s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000005154s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000005167s"
      },
      {
       "percentile": 0.95,
       "count": "1901",
       "duration": "0.000005186s"
      },
      {
       "percentile": 0.95625,
       "count": "1913",
       "duration": "0.000005217s"
      },
      {
       "percentile": 0.9625,
       "count": "1926",
       "duration": "0.000005247s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000005270s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000005280s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000005305s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000005348s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000005381s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000005392s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000005411s"
      },
      {
       "percentile": 0.9875,
       "count": "1976",
       "duration": "0.000005428s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000005431s"
      },
      {
       "percentile": 0.990625,
       "count": "1982",
       "duration": "0.000005454s"
      },
      {
       "percentile": 0.9921875,
       "count": "1985",
       "duration": "0.000005477s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000005477s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000005515s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000005556s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000005581s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000005596s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000005596s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000005667s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000005688s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000005704s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000005723s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000005723s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000005723s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000005785s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000005785s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000006720s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000006720s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000006720s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000006720s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000006720s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000009843s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000009843s"
      }
     ],
     "mean": "0.000004726s",
     "pstdev": "0.000000283s"
    },
    {
     "count": "1999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000067247s"
      },
      {
       "percentile": 0.1,
       "count": "201",
       "duration": "0.000068679s"
      },
      {
       "percentile": 0.2,
       "count": "402",
       "duration": "0.000068983s"
      },
      {
       "percentile": 0.3,
       "count": "605",
       "duration": "0.000069215s"
      },
      {
       "percentile": 0.4,
       "count": "801",
       "duration": "0.000069435s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000069639s"
      },
      {
       "percentile": 0.55,
       "count": "1105",
       "duration": "0.000069747s"
      },
      {
       "percentile": 0.6,
       "count": "1201",
       "duration": "0.000069871s"
      },
      {
       "percentile": 0.65,
       "count": "1304",
       "duration": "0.000069971s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000070107s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000070247s"
      },
      {
       "percentile": 0.775,
       "count": "1553",
       "duration": "0.000070355s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000070439s"
      },
      {
       "percentile": 0.825,
       "count": "1651",
       "duration": "0.000070527s"
      },
      {
       "percentile": 0.85,
       "count": "1703",
       "duration": "0.000070599s"
      },
      {
       "percentile": 0.875,
       "count": "1752",
       "duration": "0.000070695s"
      },
      {
       "percentile": 0.8875,
       "count": "1776",
       "duration": "0.000070751s"
      },
      {
       "percentile": 0.9,
       "count": "1802",
       "duration": "0.000070819s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000070883s"
      },
      {
       "percentile": 0.925,
       "count": "1851",
       "duration": "0.000070975s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000071095s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000071155s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000071247s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000071343s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000071435s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000071523s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000071607s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000071695s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000071779s"
      },
      {
       "percentile": 0.98125,
       "count": "1963",
       "duration": "0.000071967s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000072023s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000072167s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000072327s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000072407s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000072639s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000073027s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000073059s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000073987s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000074811s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000076627s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000091103s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000091103s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000110919s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000112643s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000116439s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000135735s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000135735s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000135735s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000137479s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000137479s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000629183s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000629183s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000629183s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000629183s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000629183s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000696575s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000696575s"
      }
     ],
     "mean": "0.000070450s",
     "pstdev": "0.000019s"
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
     "count": "1999",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000074011s"
      },
      {
       "percentile": 0.1,
       "count": "201",
       "duration": "0.000075403s"
      },
      {
       "percentile": 0.2,
       "count": "403",
       "duration": "0.000075723s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000075943s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000076155s"
      },
      {
       "percentile": 0.5,
       "count": "1003",
       "duration": "0.000076391s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000076499s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000076615s"
      },
      {
       "percentile": 0.65,
       "count": "1304",
       "duration": "0.000076775s"
      },
      {
       "percentile": 0.7,
       "count": "1403",
       "duration": "0.000076919s"
      },
      {
       "percentile": 0.75,
       "count": "1501",
       "duration": "0.000077059s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000077135s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000077231s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000077351s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000077463s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000077603s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000077663s"
      },
      {
       "percentile": 0.9,
       "count": "1801",
       "duration": "0.000077751s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000077827s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000077927s"
      },
      {
       "percentile": 0.9375,
       "count": "1877",
       "duration": "0.000078095s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000078131s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000078239s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000078339s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000078403s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000078555s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000078655s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000078831s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000079303s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000079427s"
      },
      {
       "percentile": 0.984375,
       "count": "1969",
       "duration": "0.000079595s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000079631s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000079683s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000080131s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000080451s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000081027s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000081139s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000081263s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000081975s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000086335s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000098603s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000098603s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000117431s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000119671s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000123767s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000142727s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000142727s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000142727s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000144199s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000144199s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000635967s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000635967s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000635967s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000635967s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000635967s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000703295s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000703295s"
      }
     ],
     "mean": "0.000077246s",
     "pstdev": "0.000019008s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "2009"
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
     "value": "114839"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "26196"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "2009"
    }
   ],
   "execution_duration": "10.000000785s"
  },
  {
   "name": "worker_13",
   "statistics": [
    {
     "count": "1999",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000004206s"
      },
      {
       "percentile": 0.1,
       "count": "201",
       "duration": "0.000004665s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000004779s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000004879s"
      },
      {
       "percentile": 0.4,
       "count": "802",
       "duration": "0.000004992s"
      },
      {
       "percentile": 0.5,
       "count": "1001",
       "duration": "0.000005087s"
      },
      {
       "percentile": 0.55,
       "count": "1104",
       "duration": "0.000005130s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000005192s"
      },
      {
       "percentile": 0.65,
       "count": "1303",
       "duration": "0.000005250s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000005310s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000005373s"
      },
      {
       "percentile": 0.775,
       "count": "1551",
       "duration": "0.000005404s"
      },
      {
       "percentile": 0.8,
       "count": "1601",
       "duration": "0.000005444s"
      },
      {
       "percentile": 0.825,
       "count": "1651",
       "duration": "0.000005498s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000005540s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000005590s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000005631s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000005666s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000005690s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000005719s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000005759s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000005787s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000005816s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000005836s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000005876s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000005901s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000005923s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000005951s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000005981s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000006002s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000006059s"
      },
      {
       "percentile": 0.9859375,
       "count": "1972",
       "duration": "0.000006073s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000006080s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000006121s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000006135s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000006194s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000006197s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000006213s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000006229s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000006241s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000006294s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000006294s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000006349s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000006354s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000006368s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000006405s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000006405s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000006405s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000006423s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000006423s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000006436s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000006436s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000006436s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000006436s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000006436s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000006631s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000006631s"
      }
     ],
     "mean": "0.000005126s",
     "pstdev": "0.000000381s"
    },
    {
     "count": "1999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000115435s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000167799s"
      },
      {
       "percentile": 0.2,
       "count": "401",
       "duration": "0.000168807s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000169503s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000170095s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000175991s"
      },
      {
       "percentile": 0.55,
       "count": "1102",
       "duration": "0.000212215s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000212815s"
      },
      {
       "percentile": 0.65,
       "count": "1302",
       "duration": "0.000213207s"
      },
      {
       "percentile": 0.7,
       "count": "1402",
       "duration": "0.000213575s"
      },
      {
       "percentile": 0.75,
       "count": "1502",
       "duration": "0.000214015s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000214199s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000214415s"
      },
      {
       "percentile": 0.825,
       "count": "1651",
       "duration": "0.000214567s"
      },
      {
       "percentile": 0.85,
       "count": "1703",
       "duration": "0.000214743s"
      },
      {
       "percentile": 0.875,
       "count": "1753",
       "duration": "0.000214935s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000215087s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000215175s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000215287s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000215399s"
      },
      {
       "percentile": 0.9375,
       "count": "1876",
       "duration": "0.000215647s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000215775s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000215903s"
      },
      {
       "percentile": 0.95625,
       "count": "1914",
       "duration": "0.000216103s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000216303s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000216631s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000216743s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000216943s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000217007s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000217127s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000217439s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000217799s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000217887s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000218303s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000218439s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000218943s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000218975s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000219479s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000219647s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000220159s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000220447s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000220447s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000220823s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000222943s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000234695s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000237071s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000237071s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000237071s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000262207s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000262207s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000312047s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000312047s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000312047s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000312047s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000312047s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000322495s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000322495s"
      }
     ],
     "mean": "0.000189677s",
     "pstdev": "0.000026253s"
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
     "count": "1999",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000123007s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000174999s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000175959s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000176695s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000177431s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000183367s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000219391s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000219983s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000220367s"
      },
      {
       "percentile": 0.7,
       "count": "1402",
       "duration": "0.000220759s"
      },
      {
       "percentile": 0.75,
       "count": "1501",
       "duration": "0.000221191s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000221359s"
      },
      {
       "percentile": 0.8,
       "count": "1602",
       "duration": "0.000221511s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000221703s"
      },
      {
       "percentile": 0.85,
       "count": "1701",
       "duration": "0.000221919s"
      },
      {
       "percentile": 0.875,
       "count": "1752",
       "duration": "0.000222127s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000222239s"
      },
      {
       "percentile": 0.9,
       "count": "1801",
       "duration": "0.000222383s"
      },
      {
       "percentile": 0.9125,
       "count": "1827",
       "duration": "0.000222543s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000222719s"
      },
      {
       "percentile": 0.9375,
       "count": "1876",
       "duration": "0.000222951s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000223031s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000223255s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000223407s"
      },
      {
       "percentile": 0.9625,
       "count": "1926",
       "duration": "0.000223703s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000223871s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000224007s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000224167s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000224503s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000224623s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000224991s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000225295s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000225447s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000225551s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000225735s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000226087s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000226391s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000226807s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000227167s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000227199s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000228495s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000228495s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000228671s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000230167s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000241719s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000246847s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000246847s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000246847s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000269359s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000269359s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000318831s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000318831s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000318831s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000318831s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000318831s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000330943s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000330943s"
      }
     ],
     "mean": "0.000196909s",
     "pstdev": "0.000026238s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "2009"
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
     "value": "114839"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "26196"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "2009"
    }
   ],
   "execution_duration": "10.000000925s"
  },
  {
   "name": "worker_14",
   "statistics": [
    {
     "count": "1999",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000004060s"
      },
      {
       "percentile": 0.1,
       "count": "203",
       "duration": "0.000004389s"
      },
      {
       "percentile": 0.2,
       "count": "406",
       "duration": "0.000004447s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000004495s"
      },
      {
       "percentile": 0.4,
       "count": "801",
       "duration": "0.000004538s"
      },
      {
       "percentile": 0.5,
       "count": "1005",
       "duration": "0.000004584s"
      },
      {
       "percentile": 0.55,
       "count": "1101",
       "duration": "0.000004604s"
      },
      {
       "percentile": 0.6,
       "count": "1206",
       "duration": "0.000004628s"
      },
      {
       "percentile": 0.65,
       "count": "1301",
       "duration": "0.000004651s"
      },
      {
       "percentile": 0.7,
       "count": "1401",
       "duration": "0.000004678s"
      },
      {
       "percentile": 0.75,
       "count": "1501",
       "duration": "0.000004706s"
      },
      {
       "percentile": 0.775,
       "count": "1551",
       "duration": "0.000004724s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000004742s"
      },
      {
       "percentile": 0.825,
       "count": "1652",
       "duration": "0.000004760s"
      },
      {
       "percentile": 0.85,
       "count": "1701",
       "duration": "0.000004782s"
      },
      {
       "percentile": 0.875,
       "count": "1751",
       "duration": "0.000004807s"
      },
      {
       "percentile": 0.8875,
       "count": "1776",
       "duration": "0.000004819s"
      },
      {
       "percentile": 0.9,
       "count": "1803",
       "duration": "0.000004834s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000004853s"
      },
      {
       "percentile": 0.925,
       "count": "1851",
       "duration": "0.000004872s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000004895s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000004908s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000004941s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000004967s"
      },
      {
       "percentile": 0.9625,
       "count": "1926",
       "duration": "0.000004996s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000005017s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000005034s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000005045s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000005066s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000005076s"
      },
      {
       "percentile": 0.984375,
       "count": "1969",
       "duration": "0.000005097s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000005123s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000005142s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000005181s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000005214s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000005240s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000005249s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000005300s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000005343s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000005354s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000005391s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000005391s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000005398s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000005461s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000005531s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000005730s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000005730s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000005730s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000005773s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000005773s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000006910s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000006910s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000006910s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000006910s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000006910s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000006933s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000006933s"
      }
     ],
     "mean": "0.000004605s",
     "pstdev": "0.000000202s"
    },
    {
     "count": "1999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000070031s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000071219s"
      },
      {
       "percentile": 0.2,
       "count": "404",
       "duration": "0.000071523s"
      },
      {
       "percentile": 0.3,
       "count": "601",
       "duration": "0.000071747s"
      },
      {
       "percentile": 0.4,
       "count": "801",
       "duration": "0.000071983s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000072191s"
      },
      {
       "percentile": 0.55,
       "count": "1101",
       "duration": "0.000072303s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000072419s"
      },
      {
       "percentile": 0.65,
       "count": "1303",
       "duration": "0.000072563s"
      },
      {
       "percentile": 0.7,
       "count": "1401",
       "duration": "0.000072739s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000072939s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000073047s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000073155s"
      },
      {
       "percentile": 0.825,
       "count": "1653",
       "duration": "0.000073295s"
      },
      {
       "percentile": 0.85,
       "count": "1702",
       "duration": "0.000073467s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000073655s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000073763s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000073951s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000074115s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000074431s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000088015s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000117099s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000118171s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000169559s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000170311s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000170783s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000170927s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000171087s"
      },
      {
       "percentile": 0.978125,
       "count": "1957",
       "duration": "0.000171359s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000171519s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000171687s"
      },
      {
       "percentile": 0.9859375,
       "count": "1972",
       "duration": "0.000171863s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000171895s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000172119s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000172319s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000172575s"
      },
      {
       "percentile": 0.99296875,
       "count": "1986",
       "duration": "0.000172719s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000172727s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000172983s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000173399s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000173703s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000173703s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000174519s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000186671s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000215151s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000216143s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000216143s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000216143s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000220495s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000220495s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000345183s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000345183s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000345183s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000345183s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000345183s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000491087s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000491087s"
      }
     ],
     "mean": "0.000077772s",
     "pstdev": "0.000024018s"
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
     "count": "1999",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000076355s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000077835s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000078127s"
      },
      {
       "percentile": 0.3,
       "count": "602",
       "duration": "0.000078399s"
      },
      {
       "percentile": 0.4,
       "count": "801",
       "duration": "0.000078627s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000078835s"
      },
      {
       "percentile": 0.55,
       "count": "1102",
       "duration": "0.000078955s"
      },
      {
       "percentile": 0.6,
       "count": "1203",
       "duration": "0.000079103s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000079223s"
      },
      {
       "percentile": 0.7,
       "count": "1402",
       "duration": "0.000079423s"
      },
      {
       "percentile": 0.75,
       "count": "1501",
       "duration": "0.000079611s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000079723s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000079863s"
      },
      {
       "percentile": 0.825,
       "count": "1651",
       "duration": "0.000080027s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000080175s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000080419s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000080543s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000080743s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000081047s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000081919s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000094683s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000124039s"
      },
      {
       "percentile": 0.95,
       "count": "1901",
       "duration": "0.000125035s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000176327s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000177135s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000177519s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000177743s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000177959s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000178151s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000178279s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000178639s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000178815s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000179039s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000179111s"
      },
      {
       "percentile": 0.990625,
       "count": "1982",
       "duration": "0.000179159s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000179247s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000179399s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000179991s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000180015s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000180039s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000181247s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000181247s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000182183s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000193135s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000223111s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000224615s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000224615s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000224615s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000227511s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000227511s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000352191s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000352191s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000352191s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000352191s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000352191s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000498239s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000498239s"
      }
     ],
     "mean": "0.000084461s",
     "pstdev": "0.000024078s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "2009"
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
     "value": "114839"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "26196"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "2009"
    }
   ],
   "execution_duration": "10.000000561s"
  },
  {
   "name": "worker_15",
   "statistics": [
    {
     "count": "1999",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000004107s"
      },
      {
       "percentile": 0.1,
       "count": "202",
       "duration": "0.000004542s"
      },
      {
       "percentile": 0.2,
       "count": "402",
       "duration": "0.000004653s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000004749s"
      },
      {
       "percentile": 0.4,
       "count": "801",
       "duration": "0.000004837s"
      },
      {
       "percentile": 0.5,
       "count": "1002",
       "duration": "0.000004921s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000004971s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000005019s"
      },
      {
       "percentile": 0.65,
       "count": "1301",
       "duration": "0.000005080s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000005133s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000005194s"
      },
      {
       "percentile": 0.775,
       "count": "1552",
       "duration": "0.000005231s"
      },
      {
       "percentile": 0.8,
       "count": "1601",
       "duration": "0.000005278s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000005319s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000005369s"
      },
      {
       "percentile": 0.875,
       "count": "1751",
       "duration": "0.000005424s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000005456s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000005503s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000005531s"
      },
      {
       "percentile": 0.925,
       "count": "1851",
       "duration": "0.000005573s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000005628s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000005646s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000005663s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000005696s"
      },
      {
       "percentile": 0.9625,
       "count": "1926",
       "duration": "0.000005737s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000005769s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000005790s"
      },
      {
       "percentile": 0.975,
       "count": "1951",
       "duration": "0.000005817s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000005831s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000005844s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000005883s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000005904s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000005916s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000005939s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000005961s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000005981s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000005988s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000006013s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000006041s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000006066s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000006088s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000006088s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000006124s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000006133s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000006181s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000006202s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000006202s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000006202s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1998",
       "duration": "0.000006204s"
      },
      {
       "percentile": 0.998828125,
       "count": "1998",
       "duration": "0.000006204s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000006204s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000006204s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000006204s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000006204s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000006204s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000006355s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000006355s"
      }
     ],
     "mean": "0.000004975s",
     "pstdev": "0.000000366s"
    },
    {
     "count": "1999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000107151s"
      },
      {
       "percentile": 0.1,
       "count": "202",
       "duration": "0.000151911s"
      },
      {
       "percentile": 0.2,
       "count": "401",
       "duration": "0.000153063s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000154495s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000161095s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000167407s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000196367s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000197087s"
      },
      {
       "percentile": 0.65,
       "count": "1301",
       "duration": "0.000197935s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000198551s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000199191s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000199871s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000202351s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000204663s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000205359s"
      },
      {
       "percentile": 0.875,
       "count": "1751",
       "duration": "0.000205879s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000206087s"
      },
      {
       "percentile": 0.9,
       "count": "1801",
       "duration": "0.000206359s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000206631s"
      },
      {
       "percentile": 0.925,
       "count": "1851",
       "duration": "0.000206927s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000207143s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000207343s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000207431s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000207575s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000207767s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000207903s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000207983s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000208183s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000208375s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000208735s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000208935s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000209111s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000209399s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000209767s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000210175s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000211375s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000211471s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000212287s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000213143s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000213391s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000214143s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000214143s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000214583s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000214615s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000226183s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000227991s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000227991s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000227991s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000245095s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000245095s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000296271s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000296271s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000296271s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000296271s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000296271s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000314927s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000314927s"
      }
     ],
     "mean": "0.000176821s",
     "pstdev": "0.000026922s"
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
     "count": "1999",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000113651s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000158919s"
      },
      {
       "percentile": 0.2,
       "count": "401",
       "duration": "0.000159967s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000161391s"
      },
      {
       "percentile": 0.4,
       "count": "801",
       "duration": "0.000168271s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000175215s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000203527s"
      },
      {
       "percentile": 0.6,
       "count": "1203",
       "duration": "0.000204287s"
      },
      {
       "percentile": 0.65,
       "count": "1301",
       "duration": "0.000204911s"
      },
      {
       "percentile": 0.7,
       "count": "1401",
       "duration": "0.000205567s"
      },
      {
       "percentile": 0.75,
       "count": "1501",
       "duration": "0.000206207s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000206943s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000209735s"
      },
      {
       "percentile": 0.825,
       "count": "1651",
       "duration": "0.000212015s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000212583s"
      },
      {
       "percentile": 0.875,
       "count": "1752",
       "duration": "0.000213055s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000213271s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000213455s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000213711s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000213991s"
      },
      {
       "percentile": 0.9375,
       "count": "1876",
       "duration": "0.000214239s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000214351s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000214519s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000214671s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000214903s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000215047s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000215175s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000215255s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000215503s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000215711s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000216055s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000216471s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000216807s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000217079s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000217503s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000218175s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000218975s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000219647s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000220975s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000221023s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000221559s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000221559s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000221767s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000222039s"
      },
      {
       "percentile": 0.99765625,
       "count": "1996",
       "duration": "0.000234783s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000234783s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000234783s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000234783s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000252199s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000252199s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000302991s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000302991s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000302991s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000302991s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000302991s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000322927s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000322927s"
      }
     ],
     "mean": "0.000183886s",
     "pstdev": "0.000027009s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "2009"
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
     "value": "114839"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "26196"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "1"
    },
    {
     "name": "upstream_rq_total",
     "value": "2009"
    }
   ],
   "execution_duration": "10.000000736s"
  },
  {
   "name": "global",
   "statistics": [
    {
     "count": "31984",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000003974s"
      },
      {
       "percentile": 0.1,
       "count": "3226",
       "duration": "0.000004522s"
      },
      {
       "percentile": 0.2,
       "count": "6402",
       "duration": "0.000004627s"
      },
      {
       "percentile": 0.3,
       "count": "9621",
       "duration": "0.000004714s"
      },
      {
       "percentile": 0.4,
       "count": "12828",
       "duration": "0.000004794s"
      },
      {
       "percentile": 0.5,
       "count": "16008",
       "duration": "0.000004876s"
      },
      {
       "percentile": 0.55,
       "count": "17622",
       "duration": "0.000004924s"
      },
      {
       "percentile": 0.6,
       "count": "19191",
       "duration": "0.000004970s"
      },
      {
       "percentile": 0.65,
       "count": "20829",
       "duration": "0.000005022s"
      },
      {
       "percentile": 0.7,
       "count": "22393",
       "duration": "0.000005078s"
      },
      {
       "percentile": 0.75,
       "count": "24020",
       "duration": "0.000005142s"
      },
      {
       "percentile": 0.775,
       "count": "24806",
       "duration": "0.000005176s"
      },
      {
       "percentile": 0.8,
       "count": "25598",
       "duration": "0.000005215s"
      },
      {
       "percentile": 0.825,
       "count": "26407",
       "duration": "0.000005261s"
      },
      {
       "percentile": 0.85,
       "count": "27196",
       "duration": "0.000005308s"
      },
      {
       "percentile": 0.875,
       "count": "28007",
       "duration": "0.000005362s"
      },
      {
       "percentile": 0.8875,
       "count": "28388",
       "duration": "0.000005391s"
      },
      {
       "percentile": 0.9,
       "count": "28800",
       "duration": "0.000005426s"
      },
      {
       "percentile": 0.9125,
       "count": "29188",
       "duration": "0.000005463s"
      },
      {
       "percentile": 0.925,
       "count": "29589",
       "duration": "0.000005508s"
      },
      {
       "percentile": 0.9375,
       "count": "29985",
       "duration": "0.000005555s"
      },
      {
       "percentile": 0.94375,
       "count": "30186",
       "duration": "0.000005582s"
      },
      {
       "percentile": 0.95,
       "count": "30386",
       "duration": "0.000005615s"
      },
      {
       "percentile": 0.95625,
       "count": "30585",
       "duration": "0.000005650s"
      },
      {
       "percentile": 0.9625,
       "count": "30789",
       "duration": "0.000005690s"
      },
      {
       "percentile": 0.96875,
       "count": "30991",
       "duration": "0.000005733s"
      },
      {
       "percentile": 0.971875,
       "count": "31087",
       "duration": "0.000005752s"
      },
      {
       "percentile": 0.975,
       "count": "31190",
       "duration": "0.000005775s"
      },
      {
       "percentile": 0.978125,
       "count": "31286",
       "duration": "0.000005803s"
      },
      {
       "percentile": 0.98125,
       "count": "31387",
       "duration": "0.000005841s"
      },
      {
       "percentile": 0.984375,
       "count": "31485",
       "duration": "0.000005878s"
      },
      {
       "percentile": 0.9859375,
       "count": "31536",
       "duration": "0.000005902s"
      },
      {
       "percentile": 0.9875,
       "count": "31586",
       "duration": "0.000005929s"
      },
      {
       "percentile": 0.9890625,
       "count": "31635",
       "duration": "0.000005953s"
      },
      {
       "percentile": 0.990625,
       "count": "31686",
       "duration": "0.000005988s"
      },
      {
       "percentile": 0.9921875,
       "count": "31735",
       "duration": "0.000006028s"
      },
      {
       "percentile": 0.99296875,
       "count": "31760",
       "duration": "0.000006044s"
      },
      {
       "percentile": 0.99375,
       "count": "31787",
       "duration": "0.000006073s"
      },
      {
       "percentile": 0.99453125,
       "count": "31811",
       "duration": "0.000006091s"
      },
      {
       "percentile": 0.9953125,
       "count": "31835",
       "duration": "0.000006125s"
      },
      {
       "percentile": 0.99609375,
       "count": "31860",
       "duration": "0.000006156s"
      },
      {
       "percentile": 0.996484375,
       "count": "31872",
       "duration": "0.000006181s"
      },
      {
       "percentile": 0.996875,
       "count": "31885",
       "duration": "0.000006198s"
      },
      {
       "percentile": 0.997265625,
       "count": "31897",
       "duration": "0.000006213s"
      },
      {
       "percentile": 0.99765625,
       "count": "31911",
       "duration": "0.000006244s"
      },
      {
       "percentile": 0.998046875,
       "count": "31922",
       "duration": "0.000006294s"
      },
      {
       "percentile": 0.9982421875,
       "count": "31928",
       "duration": "0.000006308s"
      },
      {
       "percentile": 0.9984375,
       "count": "31935",
       "duration": "0.000006338s"
      },
      {
       "percentile": 0.9986328125,
       "count": "31941",
       "duration": "0.000006354s"
      },
      {
       "percentile": 0.998828125,
       "count": "31947",
       "duration": "0.000006377s"
      },
      {
       "percentile": 0.9990234375,
       "count": "31953",
       "duration": "0.000006422s"
      },
      {
       "percentile": 0.99912109375,
       "count": "31956",
       "duration": "0.000006443s"
      },
      {
       "percentile": 0.99921875,
       "count": "31960",
       "duration": "0.000006473s"
      },
      {
       "percentile": 0.99931640625,
       "count": "31963",
       "duration": "0.000006516s"
      },
      {
       "percentile": 0.9994140625,
       "count": "31966",
       "duration": "0.000006549s"
      },
      {
       "percentile": 0.99951171875,
       "count": "31969",
       "duration": "0.000006617s"
      },
      {
       "percentile": 0.999560546875,
       "count": "31970",
       "duration": "0.000006620s"
      },
      {
       "percentile": 0.999609375,
       "count": "31972",
       "duration": "0.000006648s"
      },
      {
       "percentile": 0.999658203125,
       "count": "31974",
       "duration": "0.000006720s"
      },
      {
       "percentile": 0.99970703125,
       "count": "31975",
       "duration": "0.000006733s"
      },
      {
       "percentile": 0.999755859375,
       "count": "31977",
       "duration": "0.000006910s"
      },
      {
       "percentile": 0.9997802734375,
       "count": "31977",
       "duration": "0.000006910s"
      },
      {
       "percentile": 0.9998046875,
       "count": "31978",
       "duration": "0.000006933s"
      },
      {
       "percentile": 0.9998291015625,
       "count": "31979",
       "duration": "0.000009251s"
      },
      {
       "percentile": 0.999853515625,
       "count": "31980",
       "duration": "0.000009843s"
      },
      {
       "percentile": 0.9998779296875,
       "count": "31981",
       "duration": "0.000010145s"
      },
      {
       "percentile": 0.99989013671875,
       "count": "31981",
       "duration": "0.000010145s"
      },
      {
       "percentile": 0.99990234375,
       "count": "31981",
       "duration": "0.000010145s"
      },
      {
       "percentile": 0.99991455078125,
       "count": "31982",
       "duration": "0.000012337s"
      },
      {
       "percentile": 0.9999267578125,
       "count": "31982",
       "duration": "0.000012337s"
      },
      {
       "percentile": 0.99993896484375,
       "count": "31983",
       "duration": "0.000013282s"
      },
      {
       "percentile": 0.999945068359375,
       "count": "31983",
       "duration": "0.000013282s"
      },
      {
       "percentile": 0.999951171875,
       "count": "31983",
       "duration": "0.000013282s"
      },
      {
       "percentile": 0.999957275390625,
       "count": "31983",
       "duration": "0.000013282s"
      },
      {
       "percentile": 0.99996337890625,
       "count": "31983",
       "duration": "0.000013282s"
      },
      {
       "percentile": 0.999969482421875,
       "count": "31984",
       "duration": "0.000015781s"
      },
      {
       "percentile": 1,
       "count": "31984",
       "duration": "0.000015781s"
      }
     ],
     "mean": "0.000004934s",
     "pstdev": "0.000000374s"
    },
    {
     "count": "31984",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000058753s"
      },
      {
       "percentile": 0.1,
       "count": "3205",
       "duration": "0.000070179s"
      },
      {
       "percentile": 0.2,
       "count": "6397",
       "duration": "0.000071719s"
      },
      {
       "percentile": 0.3,
       "count": "9596",
       "duration": "0.000093303s"
      },
      {
       "percentile": 0.4,
       "count": "12794",
       "duration": "0.000103267s"
      },
      {
       "percentile": 0.5,
       "count": "15997",
       "duration": "0.000114419s"
      },
      {
       "percentile": 0.55,
       "count": "17595",
       "duration": "0.000116019s"
      },
      {
       "percentile": 0.6,
       "count": "19191",
       "duration": "0.000121527s"
      },
      {
       "percentile": 0.65,
       "count": "20790",
       "duration": "0.000124347s"
      },
      {
       "percentile": 0.7,
       "count": "22391",
       "duration": "0.000144247s"
      },
      {
       "percentile": 0.75,
       "count": "23988",
       "duration": "0.000147495s"
      },
      {
       "percentile": 0.775,
       "count": "24789",
       "duration": "0.000152887s"
      },
      {
       "percentile": 0.8,
       "count": "25588",
       "duration": "0.000155695s"
      },
      {
       "percentile": 0.825,
       "count": "26388",
       "duration": "0.000161719s"
      },
      {
       "percentile": 0.85,
       "count": "27187",
       "duration": "0.000168695s"
      },
      {
       "percentile": 0.875,
       "count": "27986",
       "duration": "0.000195431s"
      },
      {
       "percentile": 0.8875,
       "count": "28386",
       "duration": "0.000197943s"
      },
      {
       "percentile": 0.9,
       "count": "28786",
       "duration": "0.000199567s"
      },
      {
       "percentile": 0.9125,
       "count": "29186",
       "duration": "0.000205639s"
      },
      {
       "percentile": 0.925,
       "count": "29586",
       "duration": "0.000207335s"
      },
      {
       "percentile": 0.9375,
       "count": "29986",
       "duration": "0.000211503s"
      },
      {
       "percentile": 0.94375,
       "count": "30188",
       "duration": "0.000212343s"
      },
      {
       "percentile": 0.95,
       "count": "30386",
       "duration": "0.000212783s"
      },
      {
       "percentile": 0.95625,
       "count": "30589",
       "duration": "0.000213143s"
      },
      {
       "percentile": 0.9625,
       "count": "30785",
       "duration": "0.000213447s"
      },
      {
       "percentile": 0.96875,
       "count": "30989",
       "duration": "0.000213791s"
      },
      {
       "percentile": 0.971875,
       "count": "31085",
       "duration": "0.000213975s"
      },
      {
       "percentile": 0.975,
       "count": "31189",
       "duration": "0.000214183s"
      },
      {
       "percentile": 0.978125,
       "count": "31290",
       "duration": "0.000214367s"
      },
      {
       "percentile": 0.98125,
       "count": "31390",
       "duration": "0.000214567s"
      },
      {
       "percentile": 0.984375,
       "count": "31486",
       "duration": "0.000214767s"
      },
      {
       "percentile": 0.9859375,
       "count": "31535",
       "duration": "0.000214879s"
      },
      {
       "percentile": 0.9875,
       "count": "31585",
       "duration": "0.000215055s"
      },
      {
       "percentile": 0.9890625,
       "count": "31637",
       "duration": "0.000215191s"
      },
      {
       "percentile": 0.990625,
       "count": "31686",
       "duration": "0.000215319s"
      },
      {
       "percentile": 0.9921875,
       "count": "31736",
       "duration": "0.000215575s"
      },
      {
       "percentile": 0.99296875,
       "count": "31760",
       "duration": "0.000215775s"
      },
      {
       "percentile": 0.99375,
       "count": "31786",
       "duration": "0.000215927s"
      },
      {
       "percentile": 0.99453125,
       "count": "31811",
       "duration": "0.000216183s"
      },
      {
       "percentile": 0.9953125,
       "count": "31836",
       "duration": "0.000216567s"
      },
      {
       "percentile": 0.99609375,
       "count": "31860",
       "duration": "0.000216807s"
      },
      {
       "percentile": 0.996484375,
       "count": "31872",
       "duration": "0.000216975s"
      },
      {
       "percentile": 0.996875,
       "count": "31885",
       "duration": "0.000217247s"
      },
      {
       "percentile": 0.997265625,
       "count": "31898",
       "duration": "0.000217799s"
      },
      {
       "percentile": 0.99765625,
       "count": "31911",
       "duration": "0.000218407s"
      },
      {
       "percentile": 0.998046875,
       "count": "31922",
       "duration": "0.000219135s"
      },
      {
       "percentile": 0.9982421875,
       "count": "31928",
       "duration": "0.000220007s"
      },
      {
       "percentile": 0.9984375,
       "count": "31935",
       "duration": "0.000220495s"
      },
      {
       "percentile": 0.9986328125,
       "count": "31941",
       "duration": "0.000222431s"
      },
      {
       "percentile": 0.998828125,
       "count": "31947",
       "duration": "0.000229567s"
      },
      {
       "percentile": 0.9990234375,
       "count": "31953",
       "duration": "0.000245095s"
      },
      {
       "percentile": 0.99912109375,
       "count": "31956",
       "duration": "0.000248727s"
      },
      {
       "percentile": 0.99921875,
       "count": "31960",
       "duration": "0.000262207s"
      },
      {
       "percentile": 0.99931640625,
       "count": "31963",
       "duration": "0.000264383s"
      },
      {
       "percentile": 0.9994140625,
       "count": "31966",
       "duration": "0.000282079s"
      },
      {
       "percentile": 0.99951171875,
       "count": "31969",
       "duration": "0.000303599s"
      },
      {
       "percentile": 0.999560546875,
       "count": "31970",
       "duration": "0.000305903s"
      },
      {
       "percentile": 0.999609375,
       "count": "31972",
       "duration": "0.000310879s"
      },
      {
       "percentile": 0.999658203125,
       "count": "31974",
       "duration": "0.000313999s"
      },
      {
       "percentile": 0.99970703125,
       "count": "31975",
       "duration": "0.000314927s"
      },
      {
       "percentile": 0.999755859375,
       "count": "31977",
       "duration": "0.000345183s"
      },
      {
       "percentile": 0.9997802734375,
       "count": "31977",
       "duration": "0.000345183s"
      },
      {
       "percentile": 0.9998046875,
       "count": "31978",
       "duration": "0.000363167s"
      },
      {
       "percentile": 0.9998291015625,
       "count": "31979",
       "duration": "0.000431471s"
      },
      {
       "percentile": 0.999853515625,
       "count": "31980",
       "duration": "0.000442159s"
      },
      {
       "percentile": 0.9998779296875,
       "count": "31981",
       "duration": "0.000450383s"
      },
      {
       "percentile": 0.99989013671875,
       "count": "31981",
       "duration": "0.000450383s"
      },
      {
       "percentile": 0.99990234375,
       "count": "31981",
       "duration": "0.000450383s"
      },
      {
       "percentile": 0.99991455078125,
       "count": "31982",
       "duration": "0.000491087s"
      },
      {
       "percentile": 0.9999267578125,
       "count": "31982",
       "duration": "0.000491087s"
      },
      {
       "percentile": 0.99993896484375,
       "count": "31983",
       "duration": "0.000629183s"
      },
      {
       "percentile": 0.999945068359375,
       "count": "31983",
       "duration": "0.000629183s"
      },
      {
       "percentile": 0.999951171875,
       "count": "31983",
       "duration": "0.000629183s"
      },
      {
       "percentile": 0.999957275390625,
       "count": "31983",
       "duration": "0.000629183s"
      },
      {
       "percentile": 0.99996337890625,
       "count": "31983",
       "duration": "0.000629183s"
      },
      {
       "percentile": 0.999969482421875,
       "count": "31984",
       "duration": "0.000696575s"
      },
      {
       "percentile": 1,
       "count": "31984",
       "duration": "0.000696575s"
      }
     ],
     "mean": "0.000120415s",
     "pstdev": "0.000045167s"
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
     "count": "31984",
     "id": "sequencer.callback",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000065403s"
      },
      {
       "percentile": 0.1,
       "count": "3202",
       "duration": "0.000077127s"
      },
      {
       "percentile": 0.2,
       "count": "6404",
       "duration": "0.000078587s"
      },
      {
       "percentile": 0.3,
       "count": "9599",
       "duration": "0.000100219s"
      },
      {
       "percentile": 0.4,
       "count": "12794",
       "duration": "0.000110495s"
      },
      {
       "percentile": 0.5,
       "count": "15994",
       "duration": "0.000121523s"
      },
      {
       "percentile": 0.55,
       "count": "17593",
       "duration": "0.000123227s"
      },
      {
       "percentile": 0.6,
       "count": "19191",
       "duration": "0.000128627s"
      },
      {
       "percentile": 0.65,
       "count": "20792",
       "duration": "0.000131687s"
      },
      {
       "percentile": 0.7,
       "count": "22391",
       "duration": "0.000151231s"
      },
      {
       "percentile": 0.75,
       "count": "23991",
       "duration": "0.000154759s"
      },
      {
       "percentile": 0.775,
       "count": "24789",
       "duration": "0.000159847s"
      },
      {
       "percentile": 0.8,
       "count": "25588",
       "duration": "0.000162959s"
      },
      {
       "percentile": 0.825,
       "count": "26388",
       "duration": "0.000168951s"
      },
      {
       "percentile": 0.85,
       "count": "27188",
       "duration": "0.000175911s"
      },
      {
       "percentile": 0.875,
       "count": "27986",
       "duration": "0.000202703s"
      },
      {
       "percentile": 0.8875,
       "count": "28386",
       "duration": "0.000204951s"
      },
      {
       "percentile": 0.9,
       "count": "28786",
       "duration": "0.000206575s"
      },
      {
       "percentile": 0.9125,
       "count": "29187",
       "duration": "0.000212975s"
      },
      {
       "percentile": 0.925,
       "count": "29587",
       "duration": "0.000214583s"
      },
      {
       "percentile": 0.9375,
       "count": "29986",
       "duration": "0.000218711s"
      },
      {
       "percentile": 0.94375,
       "count": "30191",
       "duration": "0.000219631s"
      },
      {
       "percentile": 0.95,
       "count": "30387",
       "duration": "0.000220031s"
      },
      {
       "percentile": 0.95625,
       "count": "30591",
       "duration": "0.000220399s"
      },
      {
       "percentile": 0.9625,
       "count": "30785",
       "duration": "0.000220727s"
      },
      {
       "percentile": 0.96875,
       "count": "30986",
       "duration": "0.000221087s"
      },
      {
       "percentile": 0.971875,
       "count": "31087",
       "duration": "0.000221255s"
      },
      {
       "percentile": 0.975,
       "count": "31191",
       "duration": "0.000221423s"
      },
      {
       "percentile": 0.978125,
       "count": "31289",
       "duration": "0.000221623s"
      },
      {
       "percentile": 0.98125,
       "count": "31385",
       "duration": "0.000221823s"
      },
      {
       "percentile": 0.984375,
       "count": "31489",
       "duration": "0.000222047s"
      },
      {
       "percentile": 0.9859375,
       "count": "31537",
       "duration": "0.000222175s"
      },
      {
       "percentile": 0.9875,
       "count": "31586",
       "duration": "0.000222319s"
      },
      {
       "percentile": 0.9890625,
       "count": "31636",
       "duration": "0.000222535s"
      },
      {
       "percentile": 0.990625,
       "count": "31685",
       "duration": "0.000222719s"
      },
      {
       "percentile": 0.9921875,
       "count": "31735",
       "duration": "0.000222975s"
      },
      {
       "percentile": 0.99296875,
       "count": "31760",
       "duration": "0.000223175s"
      },
      {
       "percentile": 0.99375,
       "count": "31785",
       "duration": "0.000223367s"
      },
      {
       "percentile": 0.99453125,
       "count": "31810",
       "duration": "0.000223679s"
      },
      {
       "percentile": 0.9953125,
       "count": "31835",
       "duration": "0.000223935s"
      },
      {
       "percentile": 0.99609375,
       "count": "31860",
       "duration": "0.000224231s"
      },
      {
       "percentile": 0.996484375,
       "count": "31873",
       "duration": "0.000224551s"
      },
      {
       "percentile": 0.996875,
       "count": "31885",
       "duration": "0.000224959s"
      },
      {
       "percentile": 0.997265625,
       "count": "31897",
       "duration": "0.000225327s"
      },
      {
       "percentile": 0.99765625,
       "count": "31910",
       "duration": "0.000225775s"
      },
      {
       "percentile": 0.998046875,
       "count": "31922",
       "duration": "0.000226631s"
      },
      {
       "percentile": 0.9982421875,
       "count": "31928",
       "duration": "0.000227167s"
      },
      {
       "percentile": 0.9984375,
       "count": "31935",
       "duration": "0.000228239s"
      },
      {
       "percentile": 0.9986328125,
       "count": "31941",
       "duration": "0.000229679s"
      },
      {
       "percentile": 0.998828125,
       "count": "31947",
       "duration": "0.000236935s"
      },
      {
       "percentile": 0.9990234375,
       "count": "31953",
       "duration": "0.000252223s"
      },
      {
       "percentile": 0.99912109375,
       "count": "31956",
       "duration": "0.000258239s"
      },
      {
       "percentile": 0.99921875,
       "count": "31960",
       "duration": "0.000269359s"
      },
      {
       "percentile": 0.99931640625,
       "count": "31963",
       "duration": "0.000271567s"
      },
      {
       "percentile": 0.9994140625,
       "count": "31966",
       "duration": "0.000289599s"
      },
      {
       "percentile": 0.99951171875,
       "count": "31969",
       "duration": "0.000309999s"
      },
      {
       "percentile": 0.999560546875,
       "count": "31970",
       "duration": "0.000313295s"
      },
      {
       "percentile": 0.999609375,
       "count": "31972",
       "duration": "0.000317759s"
      },
      {
       "percentile": 0.999658203125,
       "count": "31974",
       "duration": "0.000320975s"
      },
      {
       "percentile": 0.99970703125,
       "count": "31975",
       "duration": "0.000322927s"
      },
      {
       "percentile": 0.999755859375,
       "count": "31977",
       "duration": "0.000352191s"
      },
      {
       "percentile": 0.9997802734375,
       "count": "31977",
       "duration": "0.000352191s"
      },
      {
       "percentile": 0.9998046875,
       "count": "31978",
       "duration": "0.000370287s"
      },
      {
       "percentile": 0.9998291015625,
       "count": "31979",
       "duration": "0.000438895s"
      },
      {
       "percentile": 0.999853515625,
       "count": "31980",
       "duration": "0.000450271s"
      },
      {
       "percentile": 0.9998779296875,
       "count": "31981",
       "duration": "0.000458271s"
      },
      {
       "percentile": 0.99989013671875,
       "count": "31981",
       "duration": "0.000458271s"
      },
      {
       "percentile": 0.99990234375,
       "count": "31981",
       "duration": "0.000458271s"
      },
      {
       "percentile": 0.99991455078125,
       "count": "31982",
       "duration": "0.000498239s"
      },
      {
       "percentile": 0.9999267578125,
       "count": "31982",
       "duration": "0.000498239s"
      },
      {
       "percentile": 0.99993896484375,
       "count": "31983",
       "duration": "0.000635967s"
      },
      {
       "percentile": 0.999945068359375,
       "count": "31983",
       "duration": "0.000635967s"
      },
      {
       "percentile": 0.999951171875,
       "count": "31983",
       "duration": "0.000635967s"
      },
      {
       "percentile": 0.999957275390625,
       "count": "31983",
       "duration": "0.000635967s"
      },
      {
       "percentile": 0.99996337890625,
       "count": "31983",
       "duration": "0.000635967s"
      },
      {
       "percentile": 0.999969482421875,
       "count": "31984",
       "duration": "0.000703295s"
      },
      {
       "percentile": 1,
       "count": "31984",
       "duration": "0.000703295s"
      }
     ],
     "mean": "0.000127502s",
     "pstdev": "0.000045287s"
    }
   ],
   "counters": [
    {
     "name": "benchmark.http_2xx",
     "value": "32144"
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
     "value": "1837424"
    },
    {
     "name": "upstream_cx_total",
     "value": "16"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "419136"
    },
    {
     "name": "upstream_rq_pending_total",
     "value": "16"
    },
    {
     "name": "upstream_rq_total",
     "value": "32144"
    }
   ],
   "execution_duration": "10.000000520s"
  }
 ],
 "timestamp": "2019-11-12T13:52:30.652159572Z"
}
