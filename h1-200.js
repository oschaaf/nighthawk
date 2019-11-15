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
     "count": "1999",
     "id": "benchmark_http_client.queue_to_connect",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000001761s"
      },
      {
       "percentile": 0.1,
       "count": "203",
       "duration": "0.000002040s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000002117s"
      },
      {
       "percentile": 0.3,
       "count": "606",
       "duration": "0.000002191s"
      },
      {
       "percentile": 0.4,
       "count": "801",
       "duration": "0.000002254s"
      },
      {
       "percentile": 0.5,
       "count": "1001",
       "duration": "0.000002318s"
      },
      {
       "percentile": 0.55,
       "count": "1103",
       "duration": "0.000002350s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000002393s"
      },
      {
       "percentile": 0.65,
       "count": "1303",
       "duration": "0.000002428s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000002474s"
      },
      {
       "percentile": 0.75,
       "count": "1502",
       "duration": "0.000002524s"
      },
      {
       "percentile": 0.775,
       "count": "1552",
       "duration": "0.000002556s"
      },
      {
       "percentile": 0.8,
       "count": "1601",
       "duration": "0.000002585s"
      },
      {
       "percentile": 0.825,
       "count": "1652",
       "duration": "0.000002615s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000002648s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000002695s"
      },
      {
       "percentile": 0.8875,
       "count": "1776",
       "duration": "0.000002718s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000002744s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000002776s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000002810s"
      },
      {
       "percentile": 0.9375,
       "count": "1876",
       "duration": "0.000002836s"
      },
      {
       "percentile": 0.94375,
       "count": "1888",
       "duration": "0.000002862s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000002888s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000002902s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000002932s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000002957s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000002975s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000003003s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000003012s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000003030s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000003087s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000003103s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000003115s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000003129s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000003140s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000003156s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000003157s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000003174s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000003194s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000003197s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000003211s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000003211s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000003225s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000003237s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000003279s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000003364s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000003364s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000003364s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1998",
       "duration": "0.000003420s"
      },
      {
       "percentile": 0.998828125,
       "count": "1998",
       "duration": "0.000003420s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000003420s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000003420s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000003420s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000003420s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000003420s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000003551s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000003551s"
      }
     ],
     "mean": "0.000002359s",
     "pstdev": "0.000000277s"
    },
    {
     "count": "1999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000055713s"
      },
      {
       "percentile": 0.1,
       "count": "202",
       "duration": "0.000057069s"
      },
      {
       "percentile": 0.2,
       "count": "401",
       "duration": "0.000057365s"
      },
      {
       "percentile": 0.3,
       "count": "603",
       "duration": "0.000057573s"
      },
      {
       "percentile": 0.4,
       "count": "801",
       "duration": "0.000057751s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000057947s"
      },
      {
       "percentile": 0.55,
       "count": "1101",
       "duration": "0.000058029s"
      },
      {
       "percentile": 0.6,
       "count": "1201",
       "duration": "0.000058123s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000058221s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000058331s"
      },
      {
       "percentile": 0.75,
       "count": "1501",
       "duration": "0.000058445s"
      },
      {
       "percentile": 0.775,
       "count": "1551",
       "duration": "0.000058501s"
      },
      {
       "percentile": 0.8,
       "count": "1602",
       "duration": "0.000058571s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000058647s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000058743s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000058857s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000058911s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000058981s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000059069s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000059157s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000059297s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000059389s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000059453s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000059565s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000059655s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000059787s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000059925s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000060189s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000060429s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000060541s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000060827s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000061053s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000061427s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000061639s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000061891s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000062059s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000062345s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000063291s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000073283s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000074327s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000079403s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000079403s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000080103s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000085319s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000087195s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000110587s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000110587s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000110587s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000143247s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000143247s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000168735s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000168735s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000168735s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000168735s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000168735s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000233943s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000233943s"
      }
     ],
     "mean": "0.000058296s",
     "pstdev": "0.000005382s"
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
       "duration": "0.000059981s"
      },
      {
       "percentile": 0.1,
       "count": "201",
       "duration": "0.000061297s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000061627s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000061879s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000062081s"
      },
      {
       "percentile": 0.5,
       "count": "1001",
       "duration": "0.000062251s"
      },
      {
       "percentile": 0.55,
       "count": "1103",
       "duration": "0.000062349s"
      },
      {
       "percentile": 0.6,
       "count": "1201",
       "duration": "0.000062457s"
      },
      {
       "percentile": 0.65,
       "count": "1301",
       "duration": "0.000062569s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000062679s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000062817s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000062903s"
      },
      {
       "percentile": 0.8,
       "count": "1601",
       "duration": "0.000062977s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000063079s"
      },
      {
       "percentile": 0.85,
       "count": "1701",
       "duration": "0.000063183s"
      },
      {
       "percentile": 0.875,
       "count": "1752",
       "duration": "0.000063321s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000063397s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000063493s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000063557s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000063707s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000063831s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000063939s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000064057s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000064145s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000064323s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000064523s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000064725s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000064905s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000065025s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000065331s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000065595s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000065667s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000066071s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000066291s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000066407s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000066735s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000067063s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000067763s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000077811s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000078599s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000084151s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000084151s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000085507s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000089663s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000091207s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000114919s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000114919s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000114919s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000147727s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000147727s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000172879s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000172879s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000172879s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000172879s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000172879s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000238255s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000238255s"
      }
     ],
     "mean": "0.000062645s",
     "pstdev": "0.000005399s"
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
     "name": "upstream_cx_http1_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "327467"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "120540"
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
   "execution_duration": "10.000000392s"
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
       "duration": "0.000001616s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000002006s"
      },
      {
       "percentile": 0.2,
       "count": "402",
       "duration": "0.000002097s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000002169s"
      },
      {
       "percentile": 0.4,
       "count": "801",
       "duration": "0.000002232s"
      },
      {
       "percentile": 0.5,
       "count": "1002",
       "duration": "0.000002292s"
      },
      {
       "percentile": 0.55,
       "count": "1102",
       "duration": "0.000002324s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000002364s"
      },
      {
       "percentile": 0.65,
       "count": "1301",
       "duration": "0.000002407s"
      },
      {
       "percentile": 0.7,
       "count": "1402",
       "duration": "0.000002449s"
      },
      {
       "percentile": 0.75,
       "count": "1501",
       "duration": "0.000002493s"
      },
      {
       "percentile": 0.775,
       "count": "1552",
       "duration": "0.000002521s"
      },
      {
       "percentile": 0.8,
       "count": "1601",
       "duration": "0.000002552s"
      },
      {
       "percentile": 0.825,
       "count": "1651",
       "duration": "0.000002590s"
      },
      {
       "percentile": 0.85,
       "count": "1703",
       "duration": "0.000002634s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000002664s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000002683s"
      },
      {
       "percentile": 0.9,
       "count": "1802",
       "duration": "0.000002716s"
      },
      {
       "percentile": 0.9125,
       "count": "1827",
       "duration": "0.000002749s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000002776s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000002806s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000002832s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000002848s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000002872s"
      },
      {
       "percentile": 0.9625,
       "count": "1926",
       "duration": "0.000002908s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000002934s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000002963s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000002975s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000002995s"
      },
      {
       "percentile": 0.98125,
       "count": "1963",
       "duration": "0.000003014s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000003024s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000003028s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000003081s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000003119s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000003162s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000003190s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000003202s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000003247s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000003289s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000003293s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000003308s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000003308s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000003318s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000003380s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000003396s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000003558s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000003558s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000003558s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000003650s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000003650s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000003684s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000003684s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000003684s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000003684s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000003684s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000012796s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000012796s"
      }
     ],
     "mean": "0.000002337s",
     "pstdev": "0.000000366s"
    },
    {
     "count": "1999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000056509s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000057863s"
      },
      {
       "percentile": 0.2,
       "count": "402",
       "duration": "0.000058249s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000058531s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000058813s"
      },
      {
       "percentile": 0.5,
       "count": "1001",
       "duration": "0.000059063s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000059187s"
      },
      {
       "percentile": 0.6,
       "count": "1201",
       "duration": "0.000059347s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000059487s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000059635s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000059799s"
      },
      {
       "percentile": 0.775,
       "count": "1551",
       "duration": "0.000059905s"
      },
      {
       "percentile": 0.8,
       "count": "1602",
       "duration": "0.000059989s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000060103s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000060229s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000060353s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000060415s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000060497s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000060605s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000060771s"
      },
      {
       "percentile": 0.9375,
       "count": "1876",
       "duration": "0.000060909s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000060981s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000061117s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000061267s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000061495s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000061669s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000061805s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000062023s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000062341s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000062833s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000063357s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000063843s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000064417s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000064883s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000066143s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000068559s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000069335s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000069487s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000071351s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000071927s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000078639s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000078639s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000082439s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000083311s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000083847s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000101883s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000101883s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000101883s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000116171s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000116171s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000136215s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000136215s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000136215s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000136215s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000136215s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000175111s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000175111s"
      }
     ],
     "mean": "0.000059398s",
     "pstdev": "0.000003878s"
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
       "duration": "0.000060747s"
      },
      {
       "percentile": 0.1,
       "count": "201",
       "duration": "0.000062149s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000062583s"
      },
      {
       "percentile": 0.3,
       "count": "601",
       "duration": "0.000062901s"
      },
      {
       "percentile": 0.4,
       "count": "803",
       "duration": "0.000063209s"
      },
      {
       "percentile": 0.5,
       "count": "1001",
       "duration": "0.000063501s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000063653s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000063793s"
      },
      {
       "percentile": 0.65,
       "count": "1301",
       "duration": "0.000063951s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000064115s"
      },
      {
       "percentile": 0.75,
       "count": "1501",
       "duration": "0.000064289s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000064389s"
      },
      {
       "percentile": 0.8,
       "count": "1601",
       "duration": "0.000064497s"
      },
      {
       "percentile": 0.825,
       "count": "1651",
       "duration": "0.000064623s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000064765s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000064909s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000065019s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000065115s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000065251s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000065373s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000065521s"
      },
      {
       "percentile": 0.94375,
       "count": "1888",
       "duration": "0.000065607s"
      },
      {
       "percentile": 0.95,
       "count": "1901",
       "duration": "0.000065823s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000065959s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000066143s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000066451s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000066595s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000066767s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000066927s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000067335s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000068215s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000068503s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000069175s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000069451s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000072219s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000073647s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000073699s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000075915s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000076491s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000076635s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000082991s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000082991s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000088235s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000088443s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000088695s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000106439s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000106439s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000106439s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000120559s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000120559s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000140975s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000140975s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000140975s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000140975s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000140975s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000179847s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000179847s"
      }
     ],
     "mean": "0.000063836s",
     "pstdev": "0.000003940s"
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
     "name": "upstream_cx_http1_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "327467"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "120540"
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
   "execution_duration": "10.000001072s"
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
       "duration": "0.000001788s"
      },
      {
       "percentile": 0.1,
       "count": "201",
       "duration": "0.000002011s"
      },
      {
       "percentile": 0.2,
       "count": "403",
       "duration": "0.000002071s"
      },
      {
       "percentile": 0.3,
       "count": "602",
       "duration": "0.000002118s"
      },
      {
       "percentile": 0.4,
       "count": "807",
       "duration": "0.000002165s"
      },
      {
       "percentile": 0.5,
       "count": "1002",
       "duration": "0.000002211s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000002234s"
      },
      {
       "percentile": 0.6,
       "count": "1202",
       "duration": "0.000002263s"
      },
      {
       "percentile": 0.65,
       "count": "1305",
       "duration": "0.000002292s"
      },
      {
       "percentile": 0.7,
       "count": "1401",
       "duration": "0.000002324s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000002356s"
      },
      {
       "percentile": 0.775,
       "count": "1554",
       "duration": "0.000002374s"
      },
      {
       "percentile": 0.8,
       "count": "1601",
       "duration": "0.000002391s"
      },
      {
       "percentile": 0.825,
       "count": "1651",
       "duration": "0.000002411s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000002433s"
      },
      {
       "percentile": 0.875,
       "count": "1751",
       "duration": "0.000002463s"
      },
      {
       "percentile": 0.8875,
       "count": "1776",
       "duration": "0.000002481s"
      },
      {
       "percentile": 0.9,
       "count": "1802",
       "duration": "0.000002501s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000002517s"
      },
      {
       "percentile": 0.925,
       "count": "1852",
       "duration": "0.000002538s"
      },
      {
       "percentile": 0.9375,
       "count": "1876",
       "duration": "0.000002566s"
      },
      {
       "percentile": 0.94375,
       "count": "1888",
       "duration": "0.000002576s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000002587s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000002606s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000002616s"
      },
      {
       "percentile": 0.96875,
       "count": "1938",
       "duration": "0.000002649s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000002665s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000002684s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000002706s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000002735s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000002744s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000002763s"
      },
      {
       "percentile": 0.9875,
       "count": "1976",
       "duration": "0.000002785s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000002803s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000002835s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000002855s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000002861s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000002871s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000002883s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000002890s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000002916s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000002916s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000002923s"
      },
      {
       "percentile": 0.997265625,
       "count": "1995",
       "duration": "0.000002932s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000002932s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000002939s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000002939s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000002939s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000002976s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000002976s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000003010s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000003010s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000003010s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000003010s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000003010s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000003025s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000003025s"
      }
     ],
     "mean": "0.000002237s",
     "pstdev": "0.000000194s"
    },
    {
     "count": "1999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000104279s"
      },
      {
       "percentile": 0.1,
       "count": "201",
       "duration": "0.000161247s"
      },
      {
       "percentile": 0.2,
       "count": "402",
       "duration": "0.000161775s"
      },
      {
       "percentile": 0.3,
       "count": "602",
       "duration": "0.000162199s"
      },
      {
       "percentile": 0.4,
       "count": "801",
       "duration": "0.000162647s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000163007s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000163207s"
      },
      {
       "percentile": 0.6,
       "count": "1201",
       "duration": "0.000163415s"
      },
      {
       "percentile": 0.65,
       "count": "1302",
       "duration": "0.000163575s"
      },
      {
       "percentile": 0.7,
       "count": "1403",
       "duration": "0.000163799s"
      },
      {
       "percentile": 0.75,
       "count": "1501",
       "duration": "0.000164079s"
      },
      {
       "percentile": 0.775,
       "count": "1552",
       "duration": "0.000164223s"
      },
      {
       "percentile": 0.8,
       "count": "1601",
       "duration": "0.000164359s"
      },
      {
       "percentile": 0.825,
       "count": "1652",
       "duration": "0.000164527s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000164751s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000164983s"
      },
      {
       "percentile": 0.8875,
       "count": "1776",
       "duration": "0.000165111s"
      },
      {
       "percentile": 0.9,
       "count": "1801",
       "duration": "0.000165223s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000165415s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000165679s"
      },
      {
       "percentile": 0.9375,
       "count": "1876",
       "duration": "0.000165983s"
      },
      {
       "percentile": 0.94375,
       "count": "1888",
       "duration": "0.000166167s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000166527s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000166647s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000167151s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000167935s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000168543s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000169463s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000170111s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000170495s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000172023s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000172863s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000178087s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000185103s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000197047s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000201031s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000201279s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000202135s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000210671s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000214063s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000234223s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000234223s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000244551s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000250615s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000297327s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000348479s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000348479s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000348479s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000451807s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000451807s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000526719s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000526719s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000526719s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000526719s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000526719s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000544159s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000544159s"
      }
     ],
     "mean": "0.000164196s",
     "pstdev": "0.000015239s"
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
       "duration": "0.000108583s"
      },
      {
       "percentile": 0.1,
       "count": "206",
       "duration": "0.000165559s"
      },
      {
       "percentile": 0.2,
       "count": "402",
       "duration": "0.000166015s"
      },
      {
       "percentile": 0.3,
       "count": "601",
       "duration": "0.000166479s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000166935s"
      },
      {
       "percentile": 0.5,
       "count": "1004",
       "duration": "0.000167335s"
      },
      {
       "percentile": 0.55,
       "count": "1102",
       "duration": "0.000167503s"
      },
      {
       "percentile": 0.6,
       "count": "1201",
       "duration": "0.000167695s"
      },
      {
       "percentile": 0.65,
       "count": "1302",
       "duration": "0.000167919s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000168151s"
      },
      {
       "percentile": 0.75,
       "count": "1502",
       "duration": "0.000168423s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000168551s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000168719s"
      },
      {
       "percentile": 0.825,
       "count": "1652",
       "duration": "0.000168879s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000169127s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000169327s"
      },
      {
       "percentile": 0.8875,
       "count": "1776",
       "duration": "0.000169447s"
      },
      {
       "percentile": 0.9,
       "count": "1801",
       "duration": "0.000169591s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000169799s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000170103s"
      },
      {
       "percentile": 0.9375,
       "count": "1876",
       "duration": "0.000170415s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000170535s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000170791s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000171063s"
      },
      {
       "percentile": 0.9625,
       "count": "1926",
       "duration": "0.000171623s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000172463s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000172959s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000173775s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000174559s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000175159s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000176703s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000177367s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000183287s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000189879s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000201895s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000205223s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000205599s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000206479s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000214991s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000218415s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000238783s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000238783s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000251399s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000254919s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000302063s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000352799s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000352799s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000352799s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000456559s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000456559s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000530815s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000530815s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000530815s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000530815s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000530815s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000548383s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000548383s"
      }
     ],
     "mean": "0.000168513s",
     "pstdev": "0.000015255s"
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
     "name": "upstream_cx_http1_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "327467"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "120540"
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
   "execution_duration": "10.000001036s"
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
       "duration": "0.000001801s"
      },
      {
       "percentile": 0.1,
       "count": "209",
       "duration": "0.000001956s"
      },
      {
       "percentile": 0.2,
       "count": "405",
       "duration": "0.000002005s"
      },
      {
       "percentile": 0.3,
       "count": "602",
       "duration": "0.000002042s"
      },
      {
       "percentile": 0.4,
       "count": "805",
       "duration": "0.000002078s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000002115s"
      },
      {
       "percentile": 0.55,
       "count": "1105",
       "duration": "0.000002134s"
      },
      {
       "percentile": 0.6,
       "count": "1203",
       "duration": "0.000002156s"
      },
      {
       "percentile": 0.65,
       "count": "1302",
       "duration": "0.000002177s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000002202s"
      },
      {
       "percentile": 0.75,
       "count": "1501",
       "duration": "0.000002226s"
      },
      {
       "percentile": 0.775,
       "count": "1551",
       "duration": "0.000002240s"
      },
      {
       "percentile": 0.8,
       "count": "1604",
       "duration": "0.000002254s"
      },
      {
       "percentile": 0.825,
       "count": "1652",
       "duration": "0.000002266s"
      },
      {
       "percentile": 0.85,
       "count": "1704",
       "duration": "0.000002292s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000002311s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000002329s"
      },
      {
       "percentile": 0.9,
       "count": "1802",
       "duration": "0.000002348s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000002366s"
      },
      {
       "percentile": 0.925,
       "count": "1852",
       "duration": "0.000002385s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000002402s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000002420s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000002432s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000002449s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000002465s"
      },
      {
       "percentile": 0.96875,
       "count": "1938",
       "duration": "0.000002484s"
      },
      {
       "percentile": 0.971875,
       "count": "1944",
       "duration": "0.000002493s"
      },
      {
       "percentile": 0.975,
       "count": "1952",
       "duration": "0.000002512s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000002516s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000002532s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000002540s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000002559s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000002580s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000002610s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000002622s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000002663s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000002666s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000002697s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000002728s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000002729s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000002754s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000002754s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000002758s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000002772s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000002820s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000002847s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000002847s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000002847s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000002864s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000002864s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000002948s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000002948s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000002948s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000002948s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000002948s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000003007s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000003007s"
      }
     ],
     "mean": "0.000002137s",
     "pstdev": "0.000000158s"
    },
    {
     "count": "1999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000056509s"
      },
      {
       "percentile": 0.1,
       "count": "201",
       "duration": "0.000094707s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000095279s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000095611s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000095859s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000096071s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000096187s"
      },
      {
       "percentile": 0.6,
       "count": "1203",
       "duration": "0.000096307s"
      },
      {
       "percentile": 0.65,
       "count": "1303",
       "duration": "0.000096419s"
      },
      {
       "percentile": 0.7,
       "count": "1405",
       "duration": "0.000096535s"
      },
      {
       "percentile": 0.75,
       "count": "1501",
       "duration": "0.000096663s"
      },
      {
       "percentile": 0.775,
       "count": "1551",
       "duration": "0.000096743s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000096835s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000096943s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000097067s"
      },
      {
       "percentile": 0.875,
       "count": "1752",
       "duration": "0.000097171s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000097251s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000097335s"
      },
      {
       "percentile": 0.9125,
       "count": "1826",
       "duration": "0.000097435s"
      },
      {
       "percentile": 0.925,
       "count": "1851",
       "duration": "0.000097555s"
      },
      {
       "percentile": 0.9375,
       "count": "1877",
       "duration": "0.000097727s"
      },
      {
       "percentile": 0.94375,
       "count": "1888",
       "duration": "0.000097779s"
      },
      {
       "percentile": 0.95,
       "count": "1902",
       "duration": "0.000097843s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000097923s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000098015s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000098199s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000098291s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000098391s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000098559s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000098731s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000098903s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000099023s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000099271s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000099847s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000100063s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000100143s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000100303s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000100791s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000101375s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000102135s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000102891s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000102891s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000104715s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000108047s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000122443s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000129851s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000129851s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000129851s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000188639s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000188639s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000198199s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000198199s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000198199s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000198199s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000198199s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000212623s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000212623s"
      }
     ],
     "mean": "0.000094980s",
     "pstdev": "0.000008288s"
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
       "duration": "0.000060639s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000098855s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000099363s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000099727s"
      },
      {
       "percentile": 0.4,
       "count": "801",
       "duration": "0.000099955s"
      },
      {
       "percentile": 0.5,
       "count": "1002",
       "duration": "0.000100191s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000100295s"
      },
      {
       "percentile": 0.6,
       "count": "1201",
       "duration": "0.000100431s"
      },
      {
       "percentile": 0.65,
       "count": "1301",
       "duration": "0.000100543s"
      },
      {
       "percentile": 0.7,
       "count": "1402",
       "duration": "0.000100679s"
      },
      {
       "percentile": 0.75,
       "count": "1501",
       "duration": "0.000100835s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000100907s"
      },
      {
       "percentile": 0.8,
       "count": "1601",
       "duration": "0.000100991s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000101107s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000101219s"
      },
      {
       "percentile": 0.875,
       "count": "1751",
       "duration": "0.000101355s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000101443s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000101539s"
      },
      {
       "percentile": 0.9125,
       "count": "1828",
       "duration": "0.000101687s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000101795s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000101947s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000102011s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000102127s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000102223s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000102379s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000102619s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000102707s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000102803s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000102895s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000103095s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000103439s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000103543s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000104111s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000104227s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000104275s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000104931s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000104995s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000105399s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000106307s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000106599s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000107187s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000107187s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000108955s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000113179s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000126991s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000133743s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000133743s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000133743s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000192935s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000192935s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000202119s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000202119s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000202119s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000202119s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000202119s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000216607s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000216607s"
      }
     ],
     "mean": "0.000099133s",
     "pstdev": "0.000008274s"
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
     "name": "upstream_cx_http1_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "327467"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "120540"
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
   "execution_duration": "10.000000409s"
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
       "duration": "0.000001675s"
      },
      {
       "percentile": 0.1,
       "count": "202",
       "duration": "0.000001922s"
      },
      {
       "percentile": 0.2,
       "count": "402",
       "duration": "0.000001978s"
      },
      {
       "percentile": 0.3,
       "count": "604",
       "duration": "0.000002027s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000002081s"
      },
      {
       "percentile": 0.5,
       "count": "1003",
       "duration": "0.000002135s"
      },
      {
       "percentile": 0.55,
       "count": "1101",
       "duration": "0.000002161s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000002190s"
      },
      {
       "percentile": 0.65,
       "count": "1301",
       "duration": "0.000002218s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000002249s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000002285s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000002306s"
      },
      {
       "percentile": 0.8,
       "count": "1601",
       "duration": "0.000002324s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000002349s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000002376s"
      },
      {
       "percentile": 0.875,
       "count": "1752",
       "duration": "0.000002409s"
      },
      {
       "percentile": 0.8875,
       "count": "1776",
       "duration": "0.000002425s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000002443s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000002459s"
      },
      {
       "percentile": 0.925,
       "count": "1852",
       "duration": "0.000002477s"
      },
      {
       "percentile": 0.9375,
       "count": "1876",
       "duration": "0.000002510s"
      },
      {
       "percentile": 0.94375,
       "count": "1889",
       "duration": "0.000002522s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000002536s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000002562s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000002583s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000002613s"
      },
      {
       "percentile": 0.971875,
       "count": "1944",
       "duration": "0.000002636s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000002646s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000002667s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000002684s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000002712s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000002724s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000002753s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000002773s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000002783s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000002791s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000002800s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000002812s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000002819s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000002826s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000002902s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000002902s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000002912s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000002963s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000003032s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000003041s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000003041s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000003041s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000003143s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000003143s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000003153s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000003153s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000003153s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000003153s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000003153s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000003926s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000003926s"
      }
     ],
     "mean": "0.000002161s",
     "pstdev": "0.000000213s"
    },
    {
     "count": "1999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000075099s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000086127s"
      },
      {
       "percentile": 0.2,
       "count": "401",
       "duration": "0.000086919s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000087423s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000087931s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000088615s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000089259s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000091495s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000115747s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000123211s"
      },
      {
       "percentile": 0.75,
       "count": "1502",
       "duration": "0.000125107s"
      },
      {
       "percentile": 0.775,
       "count": "1551",
       "duration": "0.000125415s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000125795s"
      },
      {
       "percentile": 0.825,
       "count": "1651",
       "duration": "0.000126091s"
      },
      {
       "percentile": 0.85,
       "count": "1701",
       "duration": "0.000126383s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000126667s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000126859s"
      },
      {
       "percentile": 0.9,
       "count": "1801",
       "duration": "0.000126963s"
      },
      {
       "percentile": 0.9125,
       "count": "1826",
       "duration": "0.000127115s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000127327s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000127587s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000127703s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000127867s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000128063s"
      },
      {
       "percentile": 0.9625,
       "count": "1926",
       "duration": "0.000128331s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000128503s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000128635s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000128903s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000129135s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000129543s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000130339s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000130991s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000131999s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000133175s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000134991s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000140455s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000142103s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000160031s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000161471s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000161511s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000167223s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000167223s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000170631s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000172447s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000174527s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000187111s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000187111s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000187111s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000197791s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000197791s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000211095s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000211095s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000211095s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000211095s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000211095s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000296863s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000296863s"
      }
     ],
     "mean": "0.000101798s",
     "pstdev": "0.000019922s"
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
       "duration": "0.000079139s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000090291s"
      },
      {
       "percentile": 0.2,
       "count": "403",
       "duration": "0.000091039s"
      },
      {
       "percentile": 0.3,
       "count": "601",
       "duration": "0.000091511s"
      },
      {
       "percentile": 0.4,
       "count": "802",
       "duration": "0.000092035s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000092743s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000093499s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000096063s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000119811s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000127463s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000129251s"
      },
      {
       "percentile": 0.775,
       "count": "1551",
       "duration": "0.000129591s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000129931s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000130171s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000130459s"
      },
      {
       "percentile": 0.875,
       "count": "1751",
       "duration": "0.000130827s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000130955s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000131095s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000131239s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000131439s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000131631s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000131735s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000131999s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000132199s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000132359s"
      },
      {
       "percentile": 0.96875,
       "count": "1939",
       "duration": "0.000132695s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000132767s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000132951s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000133135s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000133567s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000134159s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000135655s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000136415s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000138103s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000139023s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000144823s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000148511s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000164095s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000165503s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000165831s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000171791s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000171791s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000174535s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000176367s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000178527s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000191175s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000191175s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000191175s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000201767s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000201767s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000215575s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000215575s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000215575s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000215575s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000215575s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000301087s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000301087s"
      }
     ],
     "mean": "0.000105916s",
     "pstdev": "0.000019930s"
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
     "name": "upstream_cx_http1_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "327467"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "120540"
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
   "execution_duration": "10.000000425s"
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
       "duration": "0.000001698s"
      },
      {
       "percentile": 0.1,
       "count": "201",
       "duration": "0.000001917s"
      },
      {
       "percentile": 0.2,
       "count": "402",
       "duration": "0.000001980s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000002041s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000002096s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000002147s"
      },
      {
       "percentile": 0.55,
       "count": "1106",
       "duration": "0.000002170s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000002196s"
      },
      {
       "percentile": 0.65,
       "count": "1303",
       "duration": "0.000002226s"
      },
      {
       "percentile": 0.7,
       "count": "1401",
       "duration": "0.000002264s"
      },
      {
       "percentile": 0.75,
       "count": "1502",
       "duration": "0.000002294s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000002317s"
      },
      {
       "percentile": 0.8,
       "count": "1602",
       "duration": "0.000002347s"
      },
      {
       "percentile": 0.825,
       "count": "1651",
       "duration": "0.000002371s"
      },
      {
       "percentile": 0.85,
       "count": "1701",
       "duration": "0.000002400s"
      },
      {
       "percentile": 0.875,
       "count": "1751",
       "duration": "0.000002439s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000002467s"
      },
      {
       "percentile": 0.9,
       "count": "1801",
       "duration": "0.000002490s"
      },
      {
       "percentile": 0.9125,
       "count": "1826",
       "duration": "0.000002507s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000002526s"
      },
      {
       "percentile": 0.9375,
       "count": "1877",
       "duration": "0.000002566s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000002585s"
      },
      {
       "percentile": 0.95,
       "count": "1901",
       "duration": "0.000002599s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000002613s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000002656s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000002686s"
      },
      {
       "percentile": 0.971875,
       "count": "1944",
       "duration": "0.000002698s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000002711s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000002722s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000002735s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000002761s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000002775s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000002801s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000002818s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000002856s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000002899s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000002906s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000002916s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000002930s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000003021s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000003031s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000003031s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000003041s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000003059s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000003106s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000003173s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000003173s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000003173s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000003291s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000003291s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000003376s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000003376s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000003376s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000003376s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000003376s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000003396s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000003396s"
      }
     ],
     "mean": "0.000002176s",
     "pstdev": "0.000000228s"
    },
    {
     "count": "1999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000058285s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000059687s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000060009s"
      },
      {
       "percentile": 0.3,
       "count": "602",
       "duration": "0.000060263s"
      },
      {
       "percentile": 0.4,
       "count": "801",
       "duration": "0.000060463s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000060643s"
      },
      {
       "percentile": 0.55,
       "count": "1102",
       "duration": "0.000060741s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000060835s"
      },
      {
       "percentile": 0.65,
       "count": "1302",
       "duration": "0.000060939s"
      },
      {
       "percentile": 0.7,
       "count": "1401",
       "duration": "0.000061035s"
      },
      {
       "percentile": 0.75,
       "count": "1502",
       "duration": "0.000061151s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000061205s"
      },
      {
       "percentile": 0.8,
       "count": "1602",
       "duration": "0.000061265s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000061339s"
      },
      {
       "percentile": 0.85,
       "count": "1701",
       "duration": "0.000061427s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000061525s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000061589s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000061659s"
      },
      {
       "percentile": 0.9125,
       "count": "1826",
       "duration": "0.000061743s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000061869s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000062037s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000062173s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000062779s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000063909s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000096555s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000097491s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000097795s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000097951s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000098087s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000098463s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000098839s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000098971s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000099187s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000099275s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000099511s"
      },
      {
       "percentile": 0.9921875,
       "count": "1985",
       "duration": "0.000100047s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000100047s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000101027s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000103563s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000104135s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000112031s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000112031s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000112691s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000114535s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000150279s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000161039s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000161039s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000161039s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000194887s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000194887s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000267343s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000267343s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000267343s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000267343s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000267343s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000277247s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000277247s"
      }
     ],
     "mean": "0.000062403s",
     "pstdev": "0.000010718s"
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
       "duration": "0.000062403s"
      },
      {
       "percentile": 0.1,
       "count": "201",
       "duration": "0.000063895s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000064203s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000064437s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000064627s"
      },
      {
       "percentile": 0.5,
       "count": "1001",
       "duration": "0.000064827s"
      },
      {
       "percentile": 0.55,
       "count": "1103",
       "duration": "0.000064927s"
      },
      {
       "percentile": 0.6,
       "count": "1205",
       "duration": "0.000065025s"
      },
      {
       "percentile": 0.65,
       "count": "1301",
       "duration": "0.000065123s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000065235s"
      },
      {
       "percentile": 0.75,
       "count": "1501",
       "duration": "0.000065345s"
      },
      {
       "percentile": 0.775,
       "count": "1551",
       "duration": "0.000065403s"
      },
      {
       "percentile": 0.8,
       "count": "1602",
       "duration": "0.000065463s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000065547s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000065651s"
      },
      {
       "percentile": 0.875,
       "count": "1753",
       "duration": "0.000065779s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000065839s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000065979s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000066087s"
      },
      {
       "percentile": 0.925,
       "count": "1851",
       "duration": "0.000066243s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000066495s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000067051s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000067579s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000068395s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000101031s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000101771s"
      },
      {
       "percentile": 0.971875,
       "count": "1944",
       "duration": "0.000102087s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000102295s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000102555s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000102795s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000103343s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000103435s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000103559s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000103947s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000104283s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000104671s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000104831s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000105459s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000107691s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000108483s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000118615s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000118615s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000118887s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000118983s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000154351s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000165503s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000165503s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000165503s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000198855s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000198855s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000271663s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000271663s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000271663s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000271663s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000271663s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000281135s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000281135s"
      }
     ],
     "mean": "0.000066617s",
     "pstdev": "0.000010759s"
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
     "name": "upstream_cx_http1_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "327467"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "120540"
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
   "execution_duration": "10.000000506s"
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
       "duration": "0.000001745s"
      },
      {
       "percentile": 0.1,
       "count": "201",
       "duration": "0.000001966s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000002032s"
      },
      {
       "percentile": 0.3,
       "count": "601",
       "duration": "0.000002081s"
      },
      {
       "percentile": 0.4,
       "count": "801",
       "duration": "0.000002135s"
      },
      {
       "percentile": 0.5,
       "count": "1005",
       "duration": "0.000002188s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000002216s"
      },
      {
       "percentile": 0.6,
       "count": "1202",
       "duration": "0.000002243s"
      },
      {
       "percentile": 0.65,
       "count": "1310",
       "duration": "0.000002275s"
      },
      {
       "percentile": 0.7,
       "count": "1403",
       "duration": "0.000002308s"
      },
      {
       "percentile": 0.75,
       "count": "1501",
       "duration": "0.000002346s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000002366s"
      },
      {
       "percentile": 0.8,
       "count": "1602",
       "duration": "0.000002392s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000002418s"
      },
      {
       "percentile": 0.85,
       "count": "1701",
       "duration": "0.000002444s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000002475s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000002497s"
      },
      {
       "percentile": 0.9,
       "count": "1801",
       "duration": "0.000002517s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000002532s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000002573s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000002594s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000002609s"
      },
      {
       "percentile": 0.95,
       "count": "1902",
       "duration": "0.000002634s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000002654s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000002693s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000002714s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000002728s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000002749s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000002794s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000002824s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000002867s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000002893s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000002939s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000003035s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000003139s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000003468s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000003540s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000003596s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000003625s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000003742s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000003807s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000003807s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000003814s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000003875s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000003889s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000003950s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000003950s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000003950s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000004055s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000004055s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000004283s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000004283s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000004283s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000004283s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000004283s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000005s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000005s"
      }
     ],
     "mean": "0.000002228s",
     "pstdev": "0.000000261s"
    },
    {
     "count": "1999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000080431s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000108103s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000108947s"
      },
      {
       "percentile": 0.3,
       "count": "601",
       "duration": "0.000109463s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000110031s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000111803s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000116159s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000116807s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000117187s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000117711s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000118287s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000118775s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000119903s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000123311s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000124175s"
      },
      {
       "percentile": 0.875,
       "count": "1751",
       "duration": "0.000124655s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000124851s"
      },
      {
       "percentile": 0.9,
       "count": "1801",
       "duration": "0.000125083s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000125335s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000125647s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000125927s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000126063s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000126215s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000126511s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000126919s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000127307s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000127583s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000128215s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000130103s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000135543s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000136887s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000138111s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000142407s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000143351s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000144727s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000146327s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000146399s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000146623s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000148943s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000158231s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000175527s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000175527s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000209135s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000219735s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000220255s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000228847s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000228847s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000228847s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000358239s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000358239s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000465407s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000465407s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000465407s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000465407s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000465407s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000620479s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000620479s"
      }
     ],
     "mean": "0.000115031s",
     "pstdev": "0.000017619s"
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
       "duration": "0.000084615s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000112263s"
      },
      {
       "percentile": 0.2,
       "count": "402",
       "duration": "0.000113099s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000113655s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000114247s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000116327s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000120395s"
      },
      {
       "percentile": 0.6,
       "count": "1201",
       "duration": "0.000121039s"
      },
      {
       "percentile": 0.65,
       "count": "1301",
       "duration": "0.000121491s"
      },
      {
       "percentile": 0.7,
       "count": "1401",
       "duration": "0.000121967s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000122647s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000123227s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000124463s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000127587s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000128471s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000129015s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000129199s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000129495s"
      },
      {
       "percentile": 0.9125,
       "count": "1826",
       "duration": "0.000129795s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000130051s"
      },
      {
       "percentile": 0.9375,
       "count": "1876",
       "duration": "0.000130315s"
      },
      {
       "percentile": 0.94375,
       "count": "1888",
       "duration": "0.000130467s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000130679s"
      },
      {
       "percentile": 0.95625,
       "count": "1913",
       "duration": "0.000130991s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000131271s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000131847s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000132199s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000132599s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000134879s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000139959s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000142263s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000143615s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000149095s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000150175s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000151127s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000152887s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000153311s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000154031s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000157047s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000162503s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000180383s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000180383s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000213591s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000223951s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000224479s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000233031s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000233031s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000233031s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000362351s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000362351s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000469807s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000469807s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000469807s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000469807s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000469807s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000624447s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000624447s"
      }
     ],
     "mean": "0.000119319s",
     "pstdev": "0.000017691s"
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
     "name": "upstream_cx_http1_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "327467"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "120540"
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
   "execution_duration": "10.000000525s"
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
       "duration": "0.000001654s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000001818s"
      },
      {
       "percentile": 0.2,
       "count": "401",
       "duration": "0.000001878s"
      },
      {
       "percentile": 0.3,
       "count": "601",
       "duration": "0.000001926s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000001966s"
      },
      {
       "percentile": 0.5,
       "count": "1003",
       "duration": "0.000002017s"
      },
      {
       "percentile": 0.55,
       "count": "1101",
       "duration": "0.000002040s"
      },
      {
       "percentile": 0.6,
       "count": "1203",
       "duration": "0.000002066s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000002096s"
      },
      {
       "percentile": 0.7,
       "count": "1402",
       "duration": "0.000002128s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000002165s"
      },
      {
       "percentile": 0.775,
       "count": "1551",
       "duration": "0.000002188s"
      },
      {
       "percentile": 0.8,
       "count": "1601",
       "duration": "0.000002210s"
      },
      {
       "percentile": 0.825,
       "count": "1653",
       "duration": "0.000002233s"
      },
      {
       "percentile": 0.85,
       "count": "1703",
       "duration": "0.000002254s"
      },
      {
       "percentile": 0.875,
       "count": "1752",
       "duration": "0.000002292s"
      },
      {
       "percentile": 0.8875,
       "count": "1776",
       "duration": "0.000002304s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000002316s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000002336s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000002366s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000002399s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000002410s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000002423s"
      },
      {
       "percentile": 0.95625,
       "count": "1913",
       "duration": "0.000002445s"
      },
      {
       "percentile": 0.9625,
       "count": "1926",
       "duration": "0.000002461s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000002484s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000002506s"
      },
      {
       "percentile": 0.975,
       "count": "1951",
       "duration": "0.000002552s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000002566s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000002602s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000002658s"
      },
      {
       "percentile": 0.9859375,
       "count": "1972",
       "duration": "0.000002669s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000002683s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000002695s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000002707s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000002747s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000002750s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000002773s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000002782s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000002789s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000002829s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000002829s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000002892s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000002894s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000002896s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000002904s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000002904s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000002904s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000002965s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000002965s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000002972s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000002972s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000002972s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000002972s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000002972s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000003092s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000003092s"
      }
     ],
     "mean": "0.000002051s",
     "pstdev": "0.000000205s"
    },
    {
     "count": "1999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000064359s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000076347s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000076875s"
      },
      {
       "percentile": 0.3,
       "count": "601",
       "duration": "0.000077367s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000077879s"
      },
      {
       "percentile": 0.5,
       "count": "1001",
       "duration": "0.000078667s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000086667s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000090275s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000114895s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000115619s"
      },
      {
       "percentile": 0.75,
       "count": "1501",
       "duration": "0.000116159s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000116387s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000116731s"
      },
      {
       "percentile": 0.825,
       "count": "1651",
       "duration": "0.000117015s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000117395s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000117987s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000118539s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000122155s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000126023s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000126655s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000127283s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000127463s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000127675s"
      },
      {
       "percentile": 0.95625,
       "count": "1913",
       "duration": "0.000128007s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000128267s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000128487s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000128583s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000128715s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000128855s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000128943s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000129135s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000129219s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000129711s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000129939s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000130059s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000130551s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000133039s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000148887s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000150991s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000151671s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000157879s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000157879s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000160087s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000161343s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000163887s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000177239s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000177239s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000177239s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000187351s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000187351s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000199871s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000199871s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000199871s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000199871s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000199871s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000286767s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000286767s"
      }
     ],
     "mean": "0.000094693s",
     "pstdev": "0.000021316s"
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
       "duration": "0.000068483s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000080339s"
      },
      {
       "percentile": 0.2,
       "count": "402",
       "duration": "0.000080859s"
      },
      {
       "percentile": 0.3,
       "count": "601",
       "duration": "0.000081371s"
      },
      {
       "percentile": 0.4,
       "count": "802",
       "duration": "0.000081891s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000082823s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000090811s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000094351s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000118931s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000119639s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000120195s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000120479s"
      },
      {
       "percentile": 0.8,
       "count": "1601",
       "duration": "0.000120759s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000121095s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000121479s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000122043s"
      },
      {
       "percentile": 0.8875,
       "count": "1776",
       "duration": "0.000122923s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000126375s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000130107s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000130827s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000131399s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000131599s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000131807s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000132015s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000132271s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000132631s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000132687s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000132791s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000133047s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000133175s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000133463s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000133615s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000134151s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000134503s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000134719s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000136039s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000137151s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000153255s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000155311s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000155623s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000162199s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000162199s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000164207s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000165991s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000167751s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000181239s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000181239s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000181239s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000192103s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000192103s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000203879s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000203879s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000203879s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000203879s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000203879s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000290975s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000290975s"
      }
     ],
     "mean": "0.000098753s",
     "pstdev": "0.000021342s"
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
     "name": "upstream_cx_http1_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "327467"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "120540"
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
   "execution_duration": "10.000000608s"
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
       "duration": "0.000001666s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000001926s"
      },
      {
       "percentile": 0.2,
       "count": "401",
       "duration": "0.000001998s"
      },
      {
       "percentile": 0.3,
       "count": "603",
       "duration": "0.000002055s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000002107s"
      },
      {
       "percentile": 0.5,
       "count": "1003",
       "duration": "0.000002155s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000002181s"
      },
      {
       "percentile": 0.6,
       "count": "1203",
       "duration": "0.000002207s"
      },
      {
       "percentile": 0.65,
       "count": "1301",
       "duration": "0.000002240s"
      },
      {
       "percentile": 0.7,
       "count": "1401",
       "duration": "0.000002269s"
      },
      {
       "percentile": 0.75,
       "count": "1501",
       "duration": "0.000002306s"
      },
      {
       "percentile": 0.775,
       "count": "1552",
       "duration": "0.000002332s"
      },
      {
       "percentile": 0.8,
       "count": "1601",
       "duration": "0.000002351s"
      },
      {
       "percentile": 0.825,
       "count": "1653",
       "duration": "0.000002369s"
      },
      {
       "percentile": 0.85,
       "count": "1704",
       "duration": "0.000002400s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000002427s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000002448s"
      },
      {
       "percentile": 0.9,
       "count": "1802",
       "duration": "0.000002472s"
      },
      {
       "percentile": 0.9125,
       "count": "1826",
       "duration": "0.000002498s"
      },
      {
       "percentile": 0.925,
       "count": "1851",
       "duration": "0.000002517s"
      },
      {
       "percentile": 0.9375,
       "count": "1876",
       "duration": "0.000002538s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000002554s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000002561s"
      },
      {
       "percentile": 0.95625,
       "count": "1913",
       "duration": "0.000002587s"
      },
      {
       "percentile": 0.9625,
       "count": "1926",
       "duration": "0.000002613s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000002625s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000002649s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000002664s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000002683s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000002694s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000002720s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000002725s"
      },
      {
       "percentile": 0.9875,
       "count": "1976",
       "duration": "0.000002742s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000002751s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000002758s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000002782s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000002787s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000002803s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000002812s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000002817s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000002826s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000002826s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000002854s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000002869s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000002880s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000002944s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000002944s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000002944s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000002946s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000002946s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000002970s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000002970s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000002970s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000002970s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000002970s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000003167s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000003167s"
      }
     ],
     "mean": "0.000002180s",
     "pstdev": "0.000000211s"
    },
    {
     "count": "1999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000059559s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000061423s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000061927s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000062595s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000122175s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000123375s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000123679s"
      },
      {
       "percentile": 0.6,
       "count": "1203",
       "duration": "0.000123979s"
      },
      {
       "percentile": 0.65,
       "count": "1301",
       "duration": "0.000124243s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000124539s"
      },
      {
       "percentile": 0.75,
       "count": "1502",
       "duration": "0.000124927s"
      },
      {
       "percentile": 0.775,
       "count": "1551",
       "duration": "0.000125103s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000125367s"
      },
      {
       "percentile": 0.825,
       "count": "1652",
       "duration": "0.000125523s"
      },
      {
       "percentile": 0.85,
       "count": "1701",
       "duration": "0.000125711s"
      },
      {
       "percentile": 0.875,
       "count": "1751",
       "duration": "0.000125907s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000126011s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000126103s"
      },
      {
       "percentile": 0.9125,
       "count": "1826",
       "duration": "0.000126215s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000126375s"
      },
      {
       "percentile": 0.9375,
       "count": "1876",
       "duration": "0.000126539s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000126663s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000126847s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000127091s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000127219s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000127415s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000127451s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000127567s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000127807s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000128075s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000128427s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000129035s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000129315s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000129779s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000130707s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000132543s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000133679s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000136087s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000140503s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000145135s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000148183s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000148183s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000149383s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000155575s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000159847s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000164135s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000164135s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000164135s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000175759s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000175759s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000199319s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000199319s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000199319s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000199319s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000199319s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000200175s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000200175s"
      }
     ],
     "mean": "0.000100703s",
     "pstdev": "0.000030814s"
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
       "duration": "0.000063745s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000065575s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000066119s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000066775s"
      },
      {
       "percentile": 0.4,
       "count": "802",
       "duration": "0.000126439s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000127599s"
      },
      {
       "percentile": 0.55,
       "count": "1102",
       "duration": "0.000127903s"
      },
      {
       "percentile": 0.6,
       "count": "1202",
       "duration": "0.000128171s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000128411s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000128767s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000129123s"
      },
      {
       "percentile": 0.775,
       "count": "1553",
       "duration": "0.000129355s"
      },
      {
       "percentile": 0.8,
       "count": "1601",
       "duration": "0.000129571s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000129743s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000129947s"
      },
      {
       "percentile": 0.875,
       "count": "1752",
       "duration": "0.000130115s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000130207s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000130339s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000130451s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000130603s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000130815s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000130987s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000131159s"
      },
      {
       "percentile": 0.95625,
       "count": "1914",
       "duration": "0.000131399s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000131575s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000131807s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000131863s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000132055s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000132375s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000132543s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000133031s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000133471s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000133599s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000134055s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000134919s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000136727s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000138271s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000140327s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000144911s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000149519s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000152567s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000152567s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000153807s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000159831s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000164319s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000168359s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000168359s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000168359s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000180095s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000180095s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000203607s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000203607s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000203607s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000203607s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000203607s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000206375s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000206375s"
      }
     ],
     "mean": "0.000104919s",
     "pstdev": "0.000030840s"
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
     "name": "upstream_cx_http1_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "327467"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "120540"
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
   "execution_duration": "10.000000988s"
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
       "duration": "0.000001654s"
      },
      {
       "percentile": 0.1,
       "count": "202",
       "duration": "0.000001926s"
      },
      {
       "percentile": 0.2,
       "count": "405",
       "duration": "0.000001997s"
      },
      {
       "percentile": 0.3,
       "count": "602",
       "duration": "0.000002048s"
      },
      {
       "percentile": 0.4,
       "count": "801",
       "duration": "0.000002097s"
      },
      {
       "percentile": 0.5,
       "count": "1001",
       "duration": "0.000002140s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000002166s"
      },
      {
       "percentile": 0.6,
       "count": "1204",
       "duration": "0.000002191s"
      },
      {
       "percentile": 0.65,
       "count": "1302",
       "duration": "0.000002219s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000002248s"
      },
      {
       "percentile": 0.75,
       "count": "1504",
       "duration": "0.000002287s"
      },
      {
       "percentile": 0.775,
       "count": "1551",
       "duration": "0.000002303s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000002322s"
      },
      {
       "percentile": 0.825,
       "count": "1654",
       "duration": "0.000002343s"
      },
      {
       "percentile": 0.85,
       "count": "1701",
       "duration": "0.000002369s"
      },
      {
       "percentile": 0.875,
       "count": "1752",
       "duration": "0.000002400s"
      },
      {
       "percentile": 0.8875,
       "count": "1779",
       "duration": "0.000002418s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000002438s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000002464s"
      },
      {
       "percentile": 0.925,
       "count": "1852",
       "duration": "0.000002484s"
      },
      {
       "percentile": 0.9375,
       "count": "1877",
       "duration": "0.000002508s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000002516s"
      },
      {
       "percentile": 0.95,
       "count": "1902",
       "duration": "0.000002538s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000002549s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000002578s"
      },
      {
       "percentile": 0.96875,
       "count": "1940",
       "duration": "0.000002592s"
      },
      {
       "percentile": 0.971875,
       "count": "1944",
       "duration": "0.000002601s"
      },
      {
       "percentile": 0.975,
       "count": "1951",
       "duration": "0.000002629s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000002645s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000002669s"
      },
      {
       "percentile": 0.984375,
       "count": "1969",
       "duration": "0.000002695s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000002706s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000002729s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000002748s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000002761s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000002822s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000002823s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000002836s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000002904s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000002965s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000002974s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000002974s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000003004s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000003016s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000003089s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000003161s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000003161s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000003161s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000003361s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000003361s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000004166s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000004166s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000004166s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000004166s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000004166s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000006527s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000006527s"
      }
     ],
     "mean": "0.000002170s",
     "pstdev": "0.000000229s"
    },
    {
     "count": "1999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000195215s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000198295s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000199031s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000199551s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000199943s"
      },
      {
       "percentile": 0.5,
       "count": "1005",
       "duration": "0.000200335s"
      },
      {
       "percentile": 0.55,
       "count": "1103",
       "duration": "0.000200527s"
      },
      {
       "percentile": 0.6,
       "count": "1201",
       "duration": "0.000200735s"
      },
      {
       "percentile": 0.65,
       "count": "1302",
       "duration": "0.000200983s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000201223s"
      },
      {
       "percentile": 0.75,
       "count": "1503",
       "duration": "0.000201511s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000201671s"
      },
      {
       "percentile": 0.8,
       "count": "1602",
       "duration": "0.000201879s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000202055s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000202295s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000202551s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000202727s"
      },
      {
       "percentile": 0.9,
       "count": "1801",
       "duration": "0.000202951s"
      },
      {
       "percentile": 0.9125,
       "count": "1826",
       "duration": "0.000203199s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000203495s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000203935s"
      },
      {
       "percentile": 0.94375,
       "count": "1889",
       "duration": "0.000204183s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000204335s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000204543s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000205031s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000206063s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000206679s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000207743s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000208471s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000208967s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000210703s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000211295s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000217567s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000221719s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000234551s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000241487s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000242295s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000244103s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000333631s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000337183s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000392495s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000392495s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000410079s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000411167s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000427183s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000451391s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000451391s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000451391s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000595967s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000595967s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000727167s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000727167s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000727167s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000727167s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000727167s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000988127s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000988127s"
      }
     ],
     "mean": "0.000202413s",
     "pstdev": "0.000026298s"
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
       "duration": "0.000199423s"
      },
      {
       "percentile": 0.1,
       "count": "201",
       "duration": "0.000202511s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000203263s"
      },
      {
       "percentile": 0.3,
       "count": "603",
       "duration": "0.000203775s"
      },
      {
       "percentile": 0.4,
       "count": "802",
       "duration": "0.000204159s"
      },
      {
       "percentile": 0.5,
       "count": "1001",
       "duration": "0.000204559s"
      },
      {
       "percentile": 0.55,
       "count": "1102",
       "duration": "0.000204743s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000204943s"
      },
      {
       "percentile": 0.65,
       "count": "1303",
       "duration": "0.000205215s"
      },
      {
       "percentile": 0.7,
       "count": "1402",
       "duration": "0.000205431s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000205735s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000205943s"
      },
      {
       "percentile": 0.8,
       "count": "1602",
       "duration": "0.000206119s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000206351s"
      },
      {
       "percentile": 0.85,
       "count": "1701",
       "duration": "0.000206567s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000206863s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000207039s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000207279s"
      },
      {
       "percentile": 0.9125,
       "count": "1826",
       "duration": "0.000207543s"
      },
      {
       "percentile": 0.925,
       "count": "1852",
       "duration": "0.000207887s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000208191s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000208391s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000208607s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000208863s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000209487s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000210503s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000210895s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000212087s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000212727s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000213607s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000214935s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000215527s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000221919s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000231471s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000238719s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000245671s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000246575s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000248391s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000337759s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000341391s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000396767s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000396767s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000414463s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000417439s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000431231s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000455631s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000455631s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000455631s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000600383s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000600383s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000731263s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000731263s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000731263s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000731263s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000731263s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000992383s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000992383s"
      }
     ],
     "mean": "0.000206650s",
     "pstdev": "0.000026315s"
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
     "name": "upstream_cx_http1_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "327467"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "120540"
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
   "execution_duration": "9.999999961s"
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
       "duration": "0.000001685s"
      },
      {
       "percentile": 0.1,
       "count": "201",
       "duration": "0.000002004s"
      },
      {
       "percentile": 0.2,
       "count": "403",
       "duration": "0.000002078s"
      },
      {
       "percentile": 0.3,
       "count": "603",
       "duration": "0.000002136s"
      },
      {
       "percentile": 0.4,
       "count": "801",
       "duration": "0.000002181s"
      },
      {
       "percentile": 0.5,
       "count": "1005",
       "duration": "0.000002228s"
      },
      {
       "percentile": 0.55,
       "count": "1105",
       "duration": "0.000002250s"
      },
      {
       "percentile": 0.6,
       "count": "1201",
       "duration": "0.000002273s"
      },
      {
       "percentile": 0.65,
       "count": "1302",
       "duration": "0.000002301s"
      },
      {
       "percentile": 0.7,
       "count": "1402",
       "duration": "0.000002337s"
      },
      {
       "percentile": 0.75,
       "count": "1502",
       "duration": "0.000002376s"
      },
      {
       "percentile": 0.775,
       "count": "1553",
       "duration": "0.000002395s"
      },
      {
       "percentile": 0.8,
       "count": "1601",
       "duration": "0.000002420s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000002442s"
      },
      {
       "percentile": 0.85,
       "count": "1701",
       "duration": "0.000002467s"
      },
      {
       "percentile": 0.875,
       "count": "1751",
       "duration": "0.000002492s"
      },
      {
       "percentile": 0.8875,
       "count": "1776",
       "duration": "0.000002507s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000002540s"
      },
      {
       "percentile": 0.9125,
       "count": "1827",
       "duration": "0.000002561s"
      },
      {
       "percentile": 0.925,
       "count": "1851",
       "duration": "0.000002587s"
      },
      {
       "percentile": 0.9375,
       "count": "1876",
       "duration": "0.000002618s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000002629s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000002642s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000002655s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000002672s"
      },
      {
       "percentile": 0.96875,
       "count": "1938",
       "duration": "0.000002708s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000002721s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000002738s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000002752s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000002770s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000002789s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000002803s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000002833s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000002843s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000002866s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000002911s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000002913s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000002925s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000003014s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000003016s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000003031s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000003031s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000003035s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000003070s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000003076s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000003080s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000003080s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000003080s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000003096s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000003096s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000003193s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000003193s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000003193s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000003193s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000003193s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000003282s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000003282s"
      }
     ],
     "mean": "0.000002253s",
     "pstdev": "0.000000211s"
    },
    {
     "count": "1999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000077443s"
      },
      {
       "percentile": 0.1,
       "count": "201",
       "duration": "0.000109395s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000116167s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000117011s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000118595s"
      },
      {
       "percentile": 0.5,
       "count": "1001",
       "duration": "0.000123323s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000123699s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000123983s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000124267s"
      },
      {
       "percentile": 0.7,
       "count": "1402",
       "duration": "0.000124555s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000124911s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000125087s"
      },
      {
       "percentile": 0.8,
       "count": "1601",
       "duration": "0.000125267s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000125463s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000125675s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000126003s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000126211s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000126447s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000126691s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000127127s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000127943s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000128967s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000130819s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000131647s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000132839s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000133647s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000134287s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000135039s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000135543s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000136391s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000138295s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000142879s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000143711s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000144079s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000144871s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000145575s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000145583s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000149991s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000162495s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000165287s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000217655s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000217655s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000230415s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000234999s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000236087s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000272687s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000272687s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000272687s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000375279s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000375279s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000482895s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000482895s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000482895s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000482895s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000482895s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000629407s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000629407s"
      }
     ],
     "mean": "0.000121579s",
     "pstdev": "0.000017824s"
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
       "duration": "0.000081555s"
      },
      {
       "percentile": 0.1,
       "count": "201",
       "duration": "0.000113679s"
      },
      {
       "percentile": 0.2,
       "count": "402",
       "duration": "0.000120455s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000121275s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000122923s"
      },
      {
       "percentile": 0.5,
       "count": "1001",
       "duration": "0.000127623s"
      },
      {
       "percentile": 0.55,
       "count": "1102",
       "duration": "0.000127975s"
      },
      {
       "percentile": 0.6,
       "count": "1201",
       "duration": "0.000128307s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000128587s"
      },
      {
       "percentile": 0.7,
       "count": "1401",
       "duration": "0.000128903s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000129255s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000129411s"
      },
      {
       "percentile": 0.8,
       "count": "1603",
       "duration": "0.000129631s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000129871s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000130115s"
      },
      {
       "percentile": 0.875,
       "count": "1751",
       "duration": "0.000130463s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000130647s"
      },
      {
       "percentile": 0.9,
       "count": "1801",
       "duration": "0.000130815s"
      },
      {
       "percentile": 0.9125,
       "count": "1826",
       "duration": "0.000131119s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000131743s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000132615s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000133599s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000135431s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000136511s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000137615s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000138223s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000138911s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000139527s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000140279s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000141095s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000144039s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000147471s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000148543s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000148839s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000149535s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000150087s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000150335s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000154351s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000166567s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000170103s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000222191s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000222191s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000234887s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000239151s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000240479s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000276975s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000276975s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000276975s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000379311s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000379311s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000487311s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000487311s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000487311s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000487311s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000487311s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000633471s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000633471s"
      }
     ],
     "mean": "0.000125910s",
     "pstdev": "0.000017854s"
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
     "name": "upstream_cx_http1_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "327467"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "120540"
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
   "execution_duration": "10.000000848s"
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
       "duration": "0.000001696s"
      },
      {
       "percentile": 0.1,
       "count": "205",
       "duration": "0.000001879s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000001917s"
      },
      {
       "percentile": 0.3,
       "count": "606",
       "duration": "0.000001952s"
      },
      {
       "percentile": 0.4,
       "count": "801",
       "duration": "0.000001980s"
      },
      {
       "percentile": 0.5,
       "count": "1007",
       "duration": "0.000002010s"
      },
      {
       "percentile": 0.55,
       "count": "1107",
       "duration": "0.000002027s"
      },
      {
       "percentile": 0.6,
       "count": "1204",
       "duration": "0.000002040s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000002058s"
      },
      {
       "percentile": 0.7,
       "count": "1403",
       "duration": "0.000002078s"
      },
      {
       "percentile": 0.75,
       "count": "1504",
       "duration": "0.000002102s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000002112s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000002123s"
      },
      {
       "percentile": 0.825,
       "count": "1655",
       "duration": "0.000002139s"
      },
      {
       "percentile": 0.85,
       "count": "1703",
       "duration": "0.000002153s"
      },
      {
       "percentile": 0.875,
       "count": "1752",
       "duration": "0.000002168s"
      },
      {
       "percentile": 0.8875,
       "count": "1777",
       "duration": "0.000002179s"
      },
      {
       "percentile": 0.9,
       "count": "1801",
       "duration": "0.000002191s"
      },
      {
       "percentile": 0.9125,
       "count": "1826",
       "duration": "0.000002202s"
      },
      {
       "percentile": 0.925,
       "count": "1852",
       "duration": "0.000002212s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000002229s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000002238s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000002249s"
      },
      {
       "percentile": 0.95625,
       "count": "1913",
       "duration": "0.000002257s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000002273s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000002287s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000002299s"
      },
      {
       "percentile": 0.975,
       "count": "1951",
       "duration": "0.000002308s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000002316s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000002325s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000002337s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000002341s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000002354s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000002369s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000002376s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000002383s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000002390s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000002392s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000002426s"
      },
      {
       "percentile": 0.9953125,
       "count": "1991",
       "duration": "0.000002435s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000002444s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000002444s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000002446s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000002477s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000002491s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000002498s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000002498s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000002498s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000002512s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000002512s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000002641s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000002641s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000002641s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000002641s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000002641s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000002652s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000002652s"
      }
     ],
     "mean": "0.000002024s",
     "pstdev": "0.000000125s"
    },
    {
     "count": "1999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000107935s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000176279s"
      },
      {
       "percentile": 0.2,
       "count": "404",
       "duration": "0.000176871s"
      },
      {
       "percentile": 0.3,
       "count": "605",
       "duration": "0.000177295s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000177703s"
      },
      {
       "percentile": 0.5,
       "count": "1001",
       "duration": "0.000178055s"
      },
      {
       "percentile": 0.55,
       "count": "1102",
       "duration": "0.000178247s"
      },
      {
       "percentile": 0.6,
       "count": "1202",
       "duration": "0.000178431s"
      },
      {
       "percentile": 0.65,
       "count": "1306",
       "duration": "0.000178607s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000178759s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000178951s"
      },
      {
       "percentile": 0.775,
       "count": "1555",
       "duration": "0.000179071s"
      },
      {
       "percentile": 0.8,
       "count": "1601",
       "duration": "0.000179199s"
      },
      {
       "percentile": 0.825,
       "count": "1652",
       "duration": "0.000179327s"
      },
      {
       "percentile": 0.85,
       "count": "1701",
       "duration": "0.000179471s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000179679s"
      },
      {
       "percentile": 0.8875,
       "count": "1777",
       "duration": "0.000179783s"
      },
      {
       "percentile": 0.9,
       "count": "1805",
       "duration": "0.000179887s"
      },
      {
       "percentile": 0.9125,
       "count": "1826",
       "duration": "0.000179999s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000180159s"
      },
      {
       "percentile": 0.9375,
       "count": "1877",
       "duration": "0.000180319s"
      },
      {
       "percentile": 0.94375,
       "count": "1889",
       "duration": "0.000180391s"
      },
      {
       "percentile": 0.95,
       "count": "1901",
       "duration": "0.000180511s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000180623s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000180815s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000181095s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000181215s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000181447s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000181967s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000182535s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000182895s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000183103s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000184279s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000186583s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000188471s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000191991s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000193327s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000197759s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000204799s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000205655s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000220583s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000220583s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000223279s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000237975s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000263583s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000343823s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000343823s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000343823s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000410895s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000410895s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000542751s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000542751s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000542751s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000542751s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000542751s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000803327s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000803327s"
      }
     ],
     "mean": "0.000178951s",
     "pstdev": "0.000017792s"
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
       "duration": "0.000112359s"
      },
      {
       "percentile": 0.1,
       "count": "202",
       "duration": "0.000180367s"
      },
      {
       "percentile": 0.2,
       "count": "402",
       "duration": "0.000180959s"
      },
      {
       "percentile": 0.3,
       "count": "603",
       "duration": "0.000181391s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000181783s"
      },
      {
       "percentile": 0.5,
       "count": "1003",
       "duration": "0.000182127s"
      },
      {
       "percentile": 0.55,
       "count": "1106",
       "duration": "0.000182311s"
      },
      {
       "percentile": 0.6,
       "count": "1204",
       "duration": "0.000182487s"
      },
      {
       "percentile": 0.65,
       "count": "1302",
       "duration": "0.000182655s"
      },
      {
       "percentile": 0.7,
       "count": "1403",
       "duration": "0.000182831s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000183055s"
      },
      {
       "percentile": 0.775,
       "count": "1552",
       "duration": "0.000183159s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000183303s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000183439s"
      },
      {
       "percentile": 0.85,
       "count": "1703",
       "duration": "0.000183599s"
      },
      {
       "percentile": 0.875,
       "count": "1751",
       "duration": "0.000183775s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000183863s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000183991s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000184127s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000184295s"
      },
      {
       "percentile": 0.9375,
       "count": "1876",
       "duration": "0.000184479s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000184583s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000184663s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000184751s"
      },
      {
       "percentile": 0.9625,
       "count": "1926",
       "duration": "0.000185167s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000185335s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000185455s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000185959s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000186495s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000186831s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000187103s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000187767s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000188511s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000190567s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000192655s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000196103s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000197439s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000201839s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000209007s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000209551s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000224751s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000224751s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000229551s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000242135s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000267759s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000348335s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000348335s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000348335s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000415055s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000415055s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000546911s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000546911s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000546911s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000546911s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000546911s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000807487s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000807487s"
      }
     ],
     "mean": "0.000183050s",
     "pstdev": "0.000017802s"
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
     "name": "upstream_cx_http1_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "327467"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "120540"
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
   "execution_duration": "10.000000043s"
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
       "duration": "0.000001660s"
      },
      {
       "percentile": 0.1,
       "count": "202",
       "duration": "0.000001876s"
      },
      {
       "percentile": 0.2,
       "count": "403",
       "duration": "0.000001941s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000001993s"
      },
      {
       "percentile": 0.4,
       "count": "803",
       "duration": "0.000002045s"
      },
      {
       "percentile": 0.5,
       "count": "1001",
       "duration": "0.000002092s"
      },
      {
       "percentile": 0.55,
       "count": "1103",
       "duration": "0.000002116s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000002143s"
      },
      {
       "percentile": 0.65,
       "count": "1302",
       "duration": "0.000002179s"
      },
      {
       "percentile": 0.7,
       "count": "1401",
       "duration": "0.000002207s"
      },
      {
       "percentile": 0.75,
       "count": "1502",
       "duration": "0.000002240s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000002263s"
      },
      {
       "percentile": 0.8,
       "count": "1603",
       "duration": "0.000002289s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000002310s"
      },
      {
       "percentile": 0.85,
       "count": "1705",
       "duration": "0.000002341s"
      },
      {
       "percentile": 0.875,
       "count": "1753",
       "duration": "0.000002369s"
      },
      {
       "percentile": 0.8875,
       "count": "1777",
       "duration": "0.000002381s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000002396s"
      },
      {
       "percentile": 0.9125,
       "count": "1827",
       "duration": "0.000002418s"
      },
      {
       "percentile": 0.925,
       "count": "1851",
       "duration": "0.000002442s"
      },
      {
       "percentile": 0.9375,
       "count": "1877",
       "duration": "0.000002468s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000002485s"
      },
      {
       "percentile": 0.95,
       "count": "1902",
       "duration": "0.000002498s"
      },
      {
       "percentile": 0.95625,
       "count": "1914",
       "duration": "0.000002517s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000002536s"
      },
      {
       "percentile": 0.96875,
       "count": "1939",
       "duration": "0.000002556s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000002563s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000002586s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000002604s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000002619s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000002630s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000002651s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000002667s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000002699s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000002735s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000002755s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000002763s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000002808s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000002846s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000002848s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000002890s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000002890s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000002912s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000002927s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000002987s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000003025s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000003025s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000003025s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000003129s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000003129s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000003253s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000003253s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000003253s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000003253s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000003253s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000003369s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000003369s"
      }
     ],
     "mean": "0.000002120s",
     "pstdev": "0.000000211s"
    },
    {
     "count": "1999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000104763s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000162055s"
      },
      {
       "percentile": 0.2,
       "count": "403",
       "duration": "0.000162863s"
      },
      {
       "percentile": 0.3,
       "count": "601",
       "duration": "0.000163839s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000165215s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000172863s"
      },
      {
       "percentile": 0.55,
       "count": "1102",
       "duration": "0.000173191s"
      },
      {
       "percentile": 0.6,
       "count": "1203",
       "duration": "0.000173455s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000173727s"
      },
      {
       "percentile": 0.7,
       "count": "1403",
       "duration": "0.000173975s"
      },
      {
       "percentile": 0.75,
       "count": "1503",
       "duration": "0.000174239s"
      },
      {
       "percentile": 0.775,
       "count": "1555",
       "duration": "0.000174415s"
      },
      {
       "percentile": 0.8,
       "count": "1601",
       "duration": "0.000174543s"
      },
      {
       "percentile": 0.825,
       "count": "1652",
       "duration": "0.000174703s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000174871s"
      },
      {
       "percentile": 0.875,
       "count": "1753",
       "duration": "0.000175063s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000175135s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000175223s"
      },
      {
       "percentile": 0.9125,
       "count": "1827",
       "duration": "0.000175391s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000175535s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000175727s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000175847s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000176031s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000176151s"
      },
      {
       "percentile": 0.9625,
       "count": "1926",
       "duration": "0.000176319s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000176463s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000176591s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000176879s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000177199s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000177575s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000177871s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000177919s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000179359s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000179727s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000182487s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000186687s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000186935s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000192991s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000198543s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000200599s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000211871s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000211871s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000218183s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000226647s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000259727s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000317839s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000317839s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000317839s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000399535s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000399535s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000531775s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000531775s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000531775s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000531775s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000531775s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000799935s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000799935s"
      }
     ],
     "mean": "0.000170307s",
     "pstdev": "0.000018583s"
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
       "duration": "0.000108895s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000166055s"
      },
      {
       "percentile": 0.2,
       "count": "401",
       "duration": "0.000166911s"
      },
      {
       "percentile": 0.3,
       "count": "603",
       "duration": "0.000167831s"
      },
      {
       "percentile": 0.4,
       "count": "801",
       "duration": "0.000169383s"
      },
      {
       "percentile": 0.5,
       "count": "1002",
       "duration": "0.000176871s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000177231s"
      },
      {
       "percentile": 0.6,
       "count": "1203",
       "duration": "0.000177535s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000177823s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000178095s"
      },
      {
       "percentile": 0.75,
       "count": "1502",
       "duration": "0.000178359s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000178503s"
      },
      {
       "percentile": 0.8,
       "count": "1601",
       "duration": "0.000178631s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000178791s"
      },
      {
       "percentile": 0.85,
       "count": "1701",
       "duration": "0.000178967s"
      },
      {
       "percentile": 0.875,
       "count": "1752",
       "duration": "0.000179175s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000179239s"
      },
      {
       "percentile": 0.9,
       "count": "1802",
       "duration": "0.000179351s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000179479s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000179671s"
      },
      {
       "percentile": 0.9375,
       "count": "1876",
       "duration": "0.000179847s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000179991s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000180183s"
      },
      {
       "percentile": 0.95625,
       "count": "1913",
       "duration": "0.000180351s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000180495s"
      },
      {
       "percentile": 0.96875,
       "count": "1938",
       "duration": "0.000180703s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000180767s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000181087s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000181439s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000181687s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000182015s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000182279s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000183335s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000184671s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000186591s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000190999s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000192383s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000196895s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000202399s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000204543s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000217887s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000217887s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000222087s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000230623s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000264191s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000321727s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000321727s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000321727s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000403359s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000403359s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000535647s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000535647s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000535647s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000535647s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000535647s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000804095s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000804095s"
      }
     ],
     "mean": "0.000174384s",
     "pstdev": "0.000018593s"
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
     "name": "upstream_cx_http1_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "327467"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "120540"
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
   "execution_duration": "10.000000014s"
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
       "duration": "0.000001806s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000002028s"
      },
      {
       "percentile": 0.2,
       "count": "405",
       "duration": "0.000002104s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000002157s"
      },
      {
       "percentile": 0.4,
       "count": "804",
       "duration": "0.000002210s"
      },
      {
       "percentile": 0.5,
       "count": "1006",
       "duration": "0.000002268s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000002293s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000002315s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000002343s"
      },
      {
       "percentile": 0.7,
       "count": "1401",
       "duration": "0.000002376s"
      },
      {
       "percentile": 0.75,
       "count": "1504",
       "duration": "0.000002418s"
      },
      {
       "percentile": 0.775,
       "count": "1551",
       "duration": "0.000002438s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000002463s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000002488s"
      },
      {
       "percentile": 0.85,
       "count": "1702",
       "duration": "0.000002505s"
      },
      {
       "percentile": 0.875,
       "count": "1751",
       "duration": "0.000002538s"
      },
      {
       "percentile": 0.8875,
       "count": "1779",
       "duration": "0.000002552s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000002571s"
      },
      {
       "percentile": 0.9125,
       "count": "1828",
       "duration": "0.000002594s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000002613s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000002641s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000002666s"
      },
      {
       "percentile": 0.95,
       "count": "1901",
       "duration": "0.000002681s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000002710s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000002728s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000002747s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000002758s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000002784s"
      },
      {
       "percentile": 0.978125,
       "count": "1957",
       "duration": "0.000002796s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000002814s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000002836s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000002846s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000002856s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000002878s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000002890s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000002908s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000002917s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000002925s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000002962s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000002967s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000002979s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000002979s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000002980s"
      },
      {
       "percentile": 0.997265625,
       "count": "1995",
       "duration": "0.000003075s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000003075s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000003085s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000003085s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000003085s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000003086s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000003086s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000003099s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000003099s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000003099s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000003099s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000003099s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000003354s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000003354s"
      }
     ],
     "mean": "0.000002286s",
     "pstdev": "0.000000216s"
    },
    {
     "count": "1999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000091307s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000108539s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000109355s"
      },
      {
       "percentile": 0.3,
       "count": "603",
       "duration": "0.000110151s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000115651s"
      },
      {
       "percentile": 0.5,
       "count": "1001",
       "duration": "0.000117147s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000117487s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000117867s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000118231s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000119131s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000123503s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000124055s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000124391s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000124579s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000124935s"
      },
      {
       "percentile": 0.875,
       "count": "1751",
       "duration": "0.000125203s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000125371s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000125579s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000125795s"
      },
      {
       "percentile": 0.925,
       "count": "1851",
       "duration": "0.000126047s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000126315s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000126515s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000126819s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000126959s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000127371s"
      },
      {
       "percentile": 0.96875,
       "count": "1938",
       "duration": "0.000127855s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000128083s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000128555s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000129023s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000130395s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000132167s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000134127s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000134743s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000135863s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000136327s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000137303s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000142207s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000143207s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000145359s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000149943s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000155431s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000155431s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000221271s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000222383s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000227023s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000259767s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000259767s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000259767s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000367327s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000367327s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000473375s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000473375s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000473375s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000473375s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000473375s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000613087s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000613087s"
      }
     ],
     "mean": "0.000116921s",
     "pstdev": "0.000017531s"
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
       "duration": "0.000096635s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000112791s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000113587s"
      },
      {
       "percentile": 0.3,
       "count": "601",
       "duration": "0.000114451s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000119875s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000121419s"
      },
      {
       "percentile": 0.55,
       "count": "1101",
       "duration": "0.000121795s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000122139s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000122623s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000123571s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000127875s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000128439s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000128747s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000129071s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000129339s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000129619s"
      },
      {
       "percentile": 0.8875,
       "count": "1777",
       "duration": "0.000129775s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000129991s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000130195s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000130459s"
      },
      {
       "percentile": 0.9375,
       "count": "1876",
       "duration": "0.000130775s"
      },
      {
       "percentile": 0.94375,
       "count": "1888",
       "duration": "0.000131023s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000131215s"
      },
      {
       "percentile": 0.95625,
       "count": "1914",
       "duration": "0.000131527s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000131767s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000132415s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000132703s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000132943s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000133775s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000134703s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000136663s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000138407s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000139847s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000140327s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000141487s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000147327s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000147375s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000147983s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000149631s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000154239s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000159431s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000159431s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000225583s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000226727s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000230959s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000264287s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000264287s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000264287s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000371327s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000371327s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000477615s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000477615s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000477615s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000477615s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000477615s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000617183s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000617183s"
      }
     ],
     "mean": "0.000121248s",
     "pstdev": "0.000017558s"
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
     "name": "upstream_cx_http1_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "327467"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "120540"
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
   "execution_duration": "10.000000586s"
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
       "duration": "0.000001576s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000001782s"
      },
      {
       "percentile": 0.2,
       "count": "401",
       "duration": "0.000001848s"
      },
      {
       "percentile": 0.3,
       "count": "601",
       "duration": "0.000001900s"
      },
      {
       "percentile": 0.4,
       "count": "806",
       "duration": "0.000001949s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000001998s"
      },
      {
       "percentile": 0.55,
       "count": "1102",
       "duration": "0.000002024s"
      },
      {
       "percentile": 0.6,
       "count": "1206",
       "duration": "0.000002050s"
      },
      {
       "percentile": 0.65,
       "count": "1302",
       "duration": "0.000002080s"
      },
      {
       "percentile": 0.7,
       "count": "1402",
       "duration": "0.000002113s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000002147s"
      },
      {
       "percentile": 0.775,
       "count": "1552",
       "duration": "0.000002167s"
      },
      {
       "percentile": 0.8,
       "count": "1601",
       "duration": "0.000002191s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000002219s"
      },
      {
       "percentile": 0.85,
       "count": "1701",
       "duration": "0.000002247s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000002280s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000002296s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000002315s"
      },
      {
       "percentile": 0.9125,
       "count": "1826",
       "duration": "0.000002343s"
      },
      {
       "percentile": 0.925,
       "count": "1852",
       "duration": "0.000002376s"
      },
      {
       "percentile": 0.9375,
       "count": "1876",
       "duration": "0.000002402s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000002414s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000002431s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000002449s"
      },
      {
       "percentile": 0.9625,
       "count": "1926",
       "duration": "0.000002482s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000002515s"
      },
      {
       "percentile": 0.971875,
       "count": "1944",
       "duration": "0.000002552s"
      },
      {
       "percentile": 0.975,
       "count": "1951",
       "duration": "0.000002566s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000002576s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000002612s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000002637s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000002649s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000002664s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000002671s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000002685s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000002747s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000002754s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000002794s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000002798s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000002809s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000002822s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000002822s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000002870s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000002934s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000002942s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000002962s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000002962s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000002962s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000003195s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000003195s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000003403s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000003403s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000003403s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000003403s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000003403s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000003649s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000003649s"
      }
     ],
     "mean": "0.000002031s",
     "pstdev": "0.000000222s"
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
       "duration": "0.000096187s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000096615s"
      },
      {
       "percentile": 0.3,
       "count": "605",
       "duration": "0.000096887s"
      },
      {
       "percentile": 0.4,
       "count": "806",
       "duration": "0.000097115s"
      },
      {
       "percentile": 0.5,
       "count": "1001",
       "duration": "0.000097359s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000097483s"
      },
      {
       "percentile": 0.6,
       "count": "1201",
       "duration": "0.000097599s"
      },
      {
       "percentile": 0.65,
       "count": "1302",
       "duration": "0.000097735s"
      },
      {
       "percentile": 0.7,
       "count": "1402",
       "duration": "0.000097887s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000098067s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000098171s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000098299s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000098491s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000098795s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000099203s"
      },
      {
       "percentile": 0.8875,
       "count": "1776",
       "duration": "0.000099431s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000099731s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000100463s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000101171s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000109339s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000109695s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000109939s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000110171s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000110551s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000110903s"
      },
      {
       "percentile": 0.971875,
       "count": "1944",
       "duration": "0.000111007s"
      },
      {
       "percentile": 0.975,
       "count": "1951",
       "duration": "0.000111167s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000111643s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000113071s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000113839s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000117303s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000117855s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000118183s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000119427s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000120007s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000120131s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000123535s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000125895s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000126243s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000138103s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000138103s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000142183s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000166207s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000209367s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000211535s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000211535s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000211535s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000237767s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000237767s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000350175s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000350175s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000350175s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000350175s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000350175s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000604607s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000604607s"
      }
     ],
     "mean": "0.000098485s",
     "pstdev": "0.000014494s"
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
       "duration": "0.000073587s"
      },
      {
       "percentile": 0.1,
       "count": "202",
       "duration": "0.000100131s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000100583s"
      },
      {
       "percentile": 0.3,
       "count": "601",
       "duration": "0.000100847s"
      },
      {
       "percentile": 0.4,
       "count": "801",
       "duration": "0.000101119s"
      },
      {
       "percentile": 0.5,
       "count": "1002",
       "duration": "0.000101347s"
      },
      {
       "percentile": 0.55,
       "count": "1101",
       "duration": "0.000101471s"
      },
      {
       "percentile": 0.6,
       "count": "1202",
       "duration": "0.000101587s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000101743s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000101895s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000102083s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000102207s"
      },
      {
       "percentile": 0.8,
       "count": "1601",
       "duration": "0.000102379s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000102615s"
      },
      {
       "percentile": 0.85,
       "count": "1700",
       "duration": "0.000102887s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000103247s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000103523s"
      },
      {
       "percentile": 0.9,
       "count": "1801",
       "duration": "0.000103979s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000104591s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000105411s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000113411s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000113947s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000114135s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000114375s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000114819s"
      },
      {
       "percentile": 0.96875,
       "count": "1938",
       "duration": "0.000115039s"
      },
      {
       "percentile": 0.971875,
       "count": "1944",
       "duration": "0.000115219s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000115323s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000115667s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000116995s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000118355s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000121851s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000122239s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000122563s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000123299s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000124315s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000124595s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000128163s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000130219s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000130879s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000142047s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000142047s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000146047s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000170543s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000213191s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000215239s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000215239s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000215239s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000242823s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000242823s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000353919s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000353919s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000353919s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000353919s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000353919s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000608319s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000608319s"
      }
     ],
     "mean": "0.000102499s",
     "pstdev": "0.000014512s"
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
     "name": "upstream_cx_http1_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "327467"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "120540"
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
   "execution_duration": "10.000000737s"
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
       "duration": "0.000001639s"
      },
      {
       "percentile": 0.1,
       "count": "202",
       "duration": "0.000001907s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000001989s"
      },
      {
       "percentile": 0.3,
       "count": "600",
       "duration": "0.000002050s"
      },
      {
       "percentile": 0.4,
       "count": "803",
       "duration": "0.000002102s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000002157s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000002188s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000002225s"
      },
      {
       "percentile": 0.65,
       "count": "1302",
       "duration": "0.000002255s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000002289s"
      },
      {
       "percentile": 0.75,
       "count": "1502",
       "duration": "0.000002332s"
      },
      {
       "percentile": 0.775,
       "count": "1554",
       "duration": "0.000002355s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000002378s"
      },
      {
       "percentile": 0.825,
       "count": "1650",
       "duration": "0.000002400s"
      },
      {
       "percentile": 0.85,
       "count": "1701",
       "duration": "0.000002430s"
      },
      {
       "percentile": 0.875,
       "count": "1750",
       "duration": "0.000002467s"
      },
      {
       "percentile": 0.8875,
       "count": "1779",
       "duration": "0.000002484s"
      },
      {
       "percentile": 0.9,
       "count": "1802",
       "duration": "0.000002505s"
      },
      {
       "percentile": 0.9125,
       "count": "1825",
       "duration": "0.000002525s"
      },
      {
       "percentile": 0.925,
       "count": "1851",
       "duration": "0.000002543s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000002566s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000002580s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000002598s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000002617s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000002640s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000002683s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000002704s"
      },
      {
       "percentile": 0.975,
       "count": "1951",
       "duration": "0.000002712s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000002718s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000002747s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000002764s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000002792s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000002808s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000002810s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000002820s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000002838s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000002869s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000002871s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000002930s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000002939s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000002955s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000002955s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000002958s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000002965s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000003003s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000003054s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000003054s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000003054s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000003100s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000003100s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000003254s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000003254s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000003254s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000003254s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000003254s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000003305s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000003305s"
      }
     ],
     "mean": "0.000002189s",
     "pstdev": "0.000000231s"
    },
    {
     "count": "1999",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000092783s"
      },
      {
       "percentile": 0.1,
       "count": "200",
       "duration": "0.000162055s"
      },
      {
       "percentile": 0.2,
       "count": "400",
       "duration": "0.000162647s"
      },
      {
       "percentile": 0.3,
       "count": "601",
       "duration": "0.000163151s"
      },
      {
       "percentile": 0.4,
       "count": "800",
       "duration": "0.000163791s"
      },
      {
       "percentile": 0.5,
       "count": "1003",
       "duration": "0.000164679s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000165487s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000172855s"
      },
      {
       "percentile": 0.65,
       "count": "1301",
       "duration": "0.000173543s"
      },
      {
       "percentile": 0.7,
       "count": "1401",
       "duration": "0.000173927s"
      },
      {
       "percentile": 0.75,
       "count": "1500",
       "duration": "0.000174335s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000174599s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000174799s"
      },
      {
       "percentile": 0.825,
       "count": "1651",
       "duration": "0.000175039s"
      },
      {
       "percentile": 0.85,
       "count": "1702",
       "duration": "0.000175223s"
      },
      {
       "percentile": 0.875,
       "count": "1752",
       "duration": "0.000175415s"
      },
      {
       "percentile": 0.8875,
       "count": "1776",
       "duration": "0.000175527s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000175655s"
      },
      {
       "percentile": 0.9125,
       "count": "1826",
       "duration": "0.000175791s"
      },
      {
       "percentile": 0.925,
       "count": "1851",
       "duration": "0.000175935s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000176111s"
      },
      {
       "percentile": 0.94375,
       "count": "1888",
       "duration": "0.000176223s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000176351s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000176471s"
      },
      {
       "percentile": 0.9625,
       "count": "1925",
       "duration": "0.000176743s"
      },
      {
       "percentile": 0.96875,
       "count": "1938",
       "duration": "0.000176935s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000177071s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000177279s"
      },
      {
       "percentile": 0.978125,
       "count": "1956",
       "duration": "0.000177423s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000177575s"
      },
      {
       "percentile": 0.984375,
       "count": "1968",
       "duration": "0.000177879s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000178079s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000178271s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000178975s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000180095s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000181119s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000181375s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000187639s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000191687s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000193519s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000210463s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000210463s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000219679s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000234471s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000252231s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000333615s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000333615s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000333615s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000407743s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000407743s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000539903s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000539903s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000539903s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000539903s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000539903s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000792191s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000792191s"
      }
     ],
     "mean": "0.000168944s",
     "pstdev": "0.000018769s"
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
       "duration": "0.000096799s"
      },
      {
       "percentile": 0.1,
       "count": "201",
       "duration": "0.000166199s"
      },
      {
       "percentile": 0.2,
       "count": "401",
       "duration": "0.000166815s"
      },
      {
       "percentile": 0.3,
       "count": "601",
       "duration": "0.000167319s"
      },
      {
       "percentile": 0.4,
       "count": "801",
       "duration": "0.000167991s"
      },
      {
       "percentile": 0.5,
       "count": "1000",
       "duration": "0.000168887s"
      },
      {
       "percentile": 0.55,
       "count": "1100",
       "duration": "0.000169871s"
      },
      {
       "percentile": 0.6,
       "count": "1200",
       "duration": "0.000177039s"
      },
      {
       "percentile": 0.65,
       "count": "1300",
       "duration": "0.000177751s"
      },
      {
       "percentile": 0.7,
       "count": "1400",
       "duration": "0.000178239s"
      },
      {
       "percentile": 0.75,
       "count": "1501",
       "duration": "0.000178647s"
      },
      {
       "percentile": 0.775,
       "count": "1550",
       "duration": "0.000178895s"
      },
      {
       "percentile": 0.8,
       "count": "1600",
       "duration": "0.000179119s"
      },
      {
       "percentile": 0.825,
       "count": "1651",
       "duration": "0.000179367s"
      },
      {
       "percentile": 0.85,
       "count": "1701",
       "duration": "0.000179575s"
      },
      {
       "percentile": 0.875,
       "count": "1752",
       "duration": "0.000179807s"
      },
      {
       "percentile": 0.8875,
       "count": "1775",
       "duration": "0.000179935s"
      },
      {
       "percentile": 0.9,
       "count": "1800",
       "duration": "0.000180015s"
      },
      {
       "percentile": 0.9125,
       "count": "1826",
       "duration": "0.000180135s"
      },
      {
       "percentile": 0.925,
       "count": "1850",
       "duration": "0.000180279s"
      },
      {
       "percentile": 0.9375,
       "count": "1875",
       "duration": "0.000180479s"
      },
      {
       "percentile": 0.94375,
       "count": "1887",
       "duration": "0.000180591s"
      },
      {
       "percentile": 0.95,
       "count": "1900",
       "duration": "0.000180695s"
      },
      {
       "percentile": 0.95625,
       "count": "1912",
       "duration": "0.000180935s"
      },
      {
       "percentile": 0.9625,
       "count": "1928",
       "duration": "0.000181215s"
      },
      {
       "percentile": 0.96875,
       "count": "1937",
       "duration": "0.000181391s"
      },
      {
       "percentile": 0.971875,
       "count": "1943",
       "duration": "0.000181559s"
      },
      {
       "percentile": 0.975,
       "count": "1950",
       "duration": "0.000181695s"
      },
      {
       "percentile": 0.978125,
       "count": "1957",
       "duration": "0.000181895s"
      },
      {
       "percentile": 0.98125,
       "count": "1962",
       "duration": "0.000182127s"
      },
      {
       "percentile": 0.984375,
       "count": "1969",
       "duration": "0.000182647s"
      },
      {
       "percentile": 0.9859375,
       "count": "1971",
       "duration": "0.000182743s"
      },
      {
       "percentile": 0.9875,
       "count": "1975",
       "duration": "0.000183271s"
      },
      {
       "percentile": 0.9890625,
       "count": "1978",
       "duration": "0.000183895s"
      },
      {
       "percentile": 0.990625,
       "count": "1981",
       "duration": "0.000184495s"
      },
      {
       "percentile": 0.9921875,
       "count": "1984",
       "duration": "0.000185135s"
      },
      {
       "percentile": 0.99296875,
       "count": "1985",
       "duration": "0.000185807s"
      },
      {
       "percentile": 0.99375,
       "count": "1987",
       "duration": "0.000191575s"
      },
      {
       "percentile": 0.99453125,
       "count": "1989",
       "duration": "0.000195519s"
      },
      {
       "percentile": 0.9953125,
       "count": "1990",
       "duration": "0.000197751s"
      },
      {
       "percentile": 0.99609375,
       "count": "1992",
       "duration": "0.000214407s"
      },
      {
       "percentile": 0.996484375,
       "count": "1992",
       "duration": "0.000214407s"
      },
      {
       "percentile": 0.996875,
       "count": "1993",
       "duration": "0.000225839s"
      },
      {
       "percentile": 0.997265625,
       "count": "1994",
       "duration": "0.000238751s"
      },
      {
       "percentile": 0.99765625,
       "count": "1995",
       "duration": "0.000256647s"
      },
      {
       "percentile": 0.998046875,
       "count": "1996",
       "duration": "0.000338591s"
      },
      {
       "percentile": 0.9982421875,
       "count": "1996",
       "duration": "0.000338591s"
      },
      {
       "percentile": 0.9984375,
       "count": "1996",
       "duration": "0.000338591s"
      },
      {
       "percentile": 0.9986328125,
       "count": "1997",
       "duration": "0.000411983s"
      },
      {
       "percentile": 0.998828125,
       "count": "1997",
       "duration": "0.000411983s"
      },
      {
       "percentile": 0.9990234375,
       "count": "1998",
       "duration": "0.000544031s"
      },
      {
       "percentile": 0.99912109375,
       "count": "1998",
       "duration": "0.000544031s"
      },
      {
       "percentile": 0.99921875,
       "count": "1998",
       "duration": "0.000544031s"
      },
      {
       "percentile": 0.99931640625,
       "count": "1998",
       "duration": "0.000544031s"
      },
      {
       "percentile": 0.9994140625,
       "count": "1998",
       "duration": "0.000544031s"
      },
      {
       "percentile": 0.99951171875,
       "count": "1999",
       "duration": "0.000796223s"
      },
      {
       "percentile": 1,
       "count": "1999",
       "duration": "0.000796223s"
      }
     ],
     "mean": "0.000173181s",
     "pstdev": "0.000018797s"
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
     "name": "upstream_cx_http1_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "327467"
    },
    {
     "name": "upstream_cx_total",
     "value": "1"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "120540"
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
   "execution_duration": "10.000000285s"
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
       "duration": "0.000001576s"
      },
      {
       "percentile": 0.1,
       "count": "3216",
       "duration": "0.000001914s"
      },
      {
       "percentile": 0.2,
       "count": "6413",
       "duration": "0.000001985s"
      },
      {
       "percentile": 0.3,
       "count": "9599",
       "duration": "0.000002042s"
      },
      {
       "percentile": 0.4,
       "count": "12863",
       "duration": "0.000002097s"
      },
      {
       "percentile": 0.5,
       "count": "16059",
       "duration": "0.000002151s"
      },
      {
       "percentile": 0.55,
       "count": "17647",
       "duration": "0.000002179s"
      },
      {
       "percentile": 0.6,
       "count": "19232",
       "duration": "0.000002209s"
      },
      {
       "percentile": 0.65,
       "count": "20807",
       "duration": "0.000002240s"
      },
      {
       "percentile": 0.7,
       "count": "22411",
       "duration": "0.000002275s"
      },
      {
       "percentile": 0.75,
       "count": "23991",
       "duration": "0.000002314s"
      },
      {
       "percentile": 0.775,
       "count": "24801",
       "duration": "0.000002337s"
      },
      {
       "percentile": 0.8,
       "count": "25591",
       "duration": "0.000002360s"
      },
      {
       "percentile": 0.825,
       "count": "26403",
       "duration": "0.000002388s"
      },
      {
       "percentile": 0.85,
       "count": "27191",
       "duration": "0.000002418s"
      },
      {
       "percentile": 0.875,
       "count": "28006",
       "duration": "0.000002454s"
      },
      {
       "percentile": 0.8875,
       "count": "28419",
       "duration": "0.000002475s"
      },
      {
       "percentile": 0.9,
       "count": "28791",
       "duration": "0.000002495s"
      },
      {
       "percentile": 0.9125,
       "count": "29204",
       "duration": "0.000002517s"
      },
      {
       "percentile": 0.925,
       "count": "29587",
       "duration": "0.000002546s"
      },
      {
       "percentile": 0.9375,
       "count": "30000",
       "duration": "0.000002580s"
      },
      {
       "percentile": 0.94375,
       "count": "30185",
       "duration": "0.000002597s"
      },
      {
       "percentile": 0.95,
       "count": "30392",
       "duration": "0.000002618s"
      },
      {
       "percentile": 0.95625,
       "count": "30592",
       "duration": "0.000002641s"
      },
      {
       "percentile": 0.9625,
       "count": "30796",
       "duration": "0.000002669s"
      },
      {
       "percentile": 0.96875,
       "count": "30989",
       "duration": "0.000002702s"
      },
      {
       "percentile": 0.971875,
       "count": "31086",
       "duration": "0.000002720s"
      },
      {
       "percentile": 0.975,
       "count": "31188",
       "duration": "0.000002740s"
      },
      {
       "percentile": 0.978125,
       "count": "31285",
       "duration": "0.000002758s"
      },
      {
       "percentile": 0.98125,
       "count": "31386",
       "duration": "0.000002786s"
      },
      {
       "percentile": 0.984375,
       "count": "31485",
       "duration": "0.000002818s"
      },
      {
       "percentile": 0.9859375,
       "count": "31535",
       "duration": "0.000002832s"
      },
      {
       "percentile": 0.9875,
       "count": "31588",
       "duration": "0.000002855s"
      },
      {
       "percentile": 0.9890625,
       "count": "31635",
       "duration": "0.000002876s"
      },
      {
       "percentile": 0.990625,
       "count": "31685",
       "duration": "0.000002903s"
      },
      {
       "percentile": 0.9921875,
       "count": "31737",
       "duration": "0.000002932s"
      },
      {
       "percentile": 0.99296875,
       "count": "31760",
       "duration": "0.000002948s"
      },
      {
       "percentile": 0.99375,
       "count": "31785",
       "duration": "0.000002967s"
      },
      {
       "percentile": 0.99453125,
       "count": "31811",
       "duration": "0.000002995s"
      },
      {
       "percentile": 0.9953125,
       "count": "31838",
       "duration": "0.000003021s"
      },
      {
       "percentile": 0.99609375,
       "count": "31860",
       "duration": "0.000003035s"
      },
      {
       "percentile": 0.996484375,
       "count": "31872",
       "duration": "0.000003076s"
      },
      {
       "percentile": 0.996875,
       "count": "31885",
       "duration": "0.000003098s"
      },
      {
       "percentile": 0.997265625,
       "count": "31897",
       "duration": "0.000003119s"
      },
      {
       "percentile": 0.99765625,
       "count": "31911",
       "duration": "0.000003153s"
      },
      {
       "percentile": 0.998046875,
       "count": "31922",
       "duration": "0.000003189s"
      },
      {
       "percentile": 0.9982421875,
       "count": "31928",
       "duration": "0.000003202s"
      },
      {
       "percentile": 0.9984375,
       "count": "31935",
       "duration": "0.000003247s"
      },
      {
       "percentile": 0.9986328125,
       "count": "31941",
       "duration": "0.000003289s"
      },
      {
       "percentile": 0.998828125,
       "count": "31947",
       "duration": "0.000003318s"
      },
      {
       "percentile": 0.9990234375,
       "count": "31953",
       "duration": "0.000003376s"
      },
      {
       "percentile": 0.99912109375,
       "count": "31956",
       "duration": "0.000003396s"
      },
      {
       "percentile": 0.99921875,
       "count": "31960",
       "duration": "0.000003468s"
      },
      {
       "percentile": 0.99931640625,
       "count": "31963",
       "duration": "0.000003551s"
      },
      {
       "percentile": 0.9994140625,
       "count": "31966",
       "duration": "0.000003615s"
      },
      {
       "percentile": 0.99951171875,
       "count": "31969",
       "duration": "0.000003650s"
      },
      {
       "percentile": 0.999560546875,
       "count": "31970",
       "duration": "0.000003684s"
      },
      {
       "percentile": 0.999609375,
       "count": "31972",
       "duration": "0.000003763s"
      },
      {
       "percentile": 0.999658203125,
       "count": "31974",
       "duration": "0.000003814s"
      },
      {
       "percentile": 0.99970703125,
       "count": "31975",
       "duration": "0.000003875s"
      },
      {
       "percentile": 0.999755859375,
       "count": "31977",
       "duration": "0.000003926s"
      },
      {
       "percentile": 0.9997802734375,
       "count": "31977",
       "duration": "0.000003926s"
      },
      {
       "percentile": 0.9998046875,
       "count": "31978",
       "duration": "0.000003950s"
      },
      {
       "percentile": 0.9998291015625,
       "count": "31979",
       "duration": "0.000004055s"
      },
      {
       "percentile": 0.999853515625,
       "count": "31980",
       "duration": "0.000004166s"
      },
      {
       "percentile": 0.9998779296875,
       "count": "31981",
       "duration": "0.000004283s"
      },
      {
       "percentile": 0.99989013671875,
       "count": "31981",
       "duration": "0.000004283s"
      },
      {
       "percentile": 0.99990234375,
       "count": "31981",
       "duration": "0.000004283s"
      },
      {
       "percentile": 0.99991455078125,
       "count": "31982",
       "duration": "0.000005s"
      },
      {
       "percentile": 0.9999267578125,
       "count": "31982",
       "duration": "0.000005s"
      },
      {
       "percentile": 0.99993896484375,
       "count": "31983",
       "duration": "0.000006527s"
      },
      {
       "percentile": 0.999945068359375,
       "count": "31983",
       "duration": "0.000006527s"
      },
      {
       "percentile": 0.999951171875,
       "count": "31983",
       "duration": "0.000006527s"
      },
      {
       "percentile": 0.999957275390625,
       "count": "31983",
       "duration": "0.000006527s"
      },
      {
       "percentile": 0.99996337890625,
       "count": "31983",
       "duration": "0.000006527s"
      },
      {
       "percentile": 0.999969482421875,
       "count": "31984",
       "duration": "0.000012796s"
      },
      {
       "percentile": 1,
       "count": "31984",
       "duration": "0.000012796s"
      }
     ],
     "mean": "0.000002184s",
     "pstdev": "0.000000247s"
    },
    {
     "count": "31984",
     "id": "benchmark_http_client.request_to_response",
     "percentiles": [
      {
       "percentile": 0,
       "count": "1",
       "duration": "0.000055713s"
      },
      {
       "percentile": 0.1,
       "count": "3199",
       "duration": "0.000059329s"
      },
      {
       "percentile": 0.2,
       "count": "6397",
       "duration": "0.000062201s"
      },
      {
       "percentile": 0.3,
       "count": "9596",
       "duration": "0.000095191s"
      },
      {
       "percentile": 0.4,
       "count": "12794",
       "duration": "0.000098215s"
      },
      {
       "percentile": 0.5,
       "count": "15995",
       "duration": "0.000116319s"
      },
      {
       "percentile": 0.55,
       "count": "17592",
       "duration": "0.000118595s"
      },
      {
       "percentile": 0.6,
       "count": "19191",
       "duration": "0.000124359s"
      },
      {
       "percentile": 0.65,
       "count": "20791",
       "duration": "0.000126131s"
      },
      {
       "percentile": 0.7,
       "count": "22390",
       "duration": "0.000161487s"
      },
      {
       "percentile": 0.75,
       "count": "23993",
       "duration": "0.000163095s"
      },
      {
       "percentile": 0.775,
       "count": "24793",
       "duration": "0.000163871s"
      },
      {
       "percentile": 0.8,
       "count": "25590",
       "duration": "0.000165159s"
      },
      {
       "percentile": 0.825,
       "count": "26389",
       "duration": "0.000173439s"
      },
      {
       "percentile": 0.85,
       "count": "27190",
       "duration": "0.000174743s"
      },
      {
       "percentile": 0.875,
       "count": "27987",
       "duration": "0.000176399s"
      },
      {
       "percentile": 0.8875,
       "count": "28390",
       "duration": "0.000177231s"
      },
      {
       "percentile": 0.9,
       "count": "28786",
       "duration": "0.000177935s"
      },
      {
       "percentile": 0.9125,
       "count": "29188",
       "duration": "0.000178631s"
      },
      {
       "percentile": 0.925,
       "count": "29591",
       "duration": "0.000179519s"
      },
      {
       "percentile": 0.9375,
       "count": "29985",
       "duration": "0.000197759s"
      },
      {
       "percentile": 0.94375,
       "count": "30186",
       "duration": "0.000198671s"
      },
      {
       "percentile": 0.95,
       "count": "30387",
       "duration": "0.000199311s"
      },
      {
       "percentile": 0.95625,
       "count": "30585",
       "duration": "0.000199735s"
      },
      {
       "percentile": 0.9625,
       "count": "30787",
       "duration": "0.000200111s"
      },
      {
       "percentile": 0.96875,
       "count": "30986",
       "duration": "0.000200495s"
      },
      {
       "percentile": 0.971875,
       "count": "31085",
       "duration": "0.000200695s"
      },
      {
       "percentile": 0.975,
       "count": "31186",
       "duration": "0.000200935s"
      },
      {
       "percentile": 0.978125,
       "count": "31288",
       "duration": "0.000201183s"
      },
      {
       "percentile": 0.98125,
       "count": "31385",
       "duration": "0.000201431s"
      },
      {
       "percentile": 0.984375,
       "count": "31487",
       "duration": "0.000201767s"
      },
      {
       "percentile": 0.9859375,
       "count": "31537",
       "duration": "0.000201967s"
      },
      {
       "percentile": 0.9875,
       "count": "31588",
       "duration": "0.000202191s"
      },
      {
       "percentile": 0.9890625,
       "count": "31637",
       "duration": "0.000202431s"
      },
      {
       "percentile": 0.990625,
       "count": "31685",
       "duration": "0.000202727s"
      },
      {
       "percentile": 0.9921875,
       "count": "31736",
       "duration": "0.000203199s"
      },
      {
       "percentile": 0.99296875,
       "count": "31760",
       "duration": "0.000203455s"
      },
      {
       "percentile": 0.99375,
       "count": "31785",
       "duration": "0.000203879s"
      },
      {
       "percentile": 0.99453125,
       "count": "31810",
       "duration": "0.000204303s"
      },
      {
       "percentile": 0.9953125,
       "count": "31835",
       "duration": "0.000204967s"
      },
      {
       "percentile": 0.99609375,
       "count": "31860",
       "duration": "0.000207159s"
      },
      {
       "percentile": 0.996484375,
       "count": "31873",
       "duration": "0.000208879s"
      },
      {
       "percentile": 0.996875,
       "count": "31885",
       "duration": "0.000210463s"
      },
      {
       "percentile": 0.997265625,
       "count": "31897",
       "duration": "0.000214063s"
      },
      {
       "percentile": 0.99765625,
       "count": "31910",
       "duration": "0.000221271s"
      },
      {
       "percentile": 0.998046875,
       "count": "31922",
       "duration": "0.000234471s"
      },
      {
       "percentile": 0.9982421875,
       "count": "31928",
       "duration": "0.000237975s"
      },
      {
       "percentile": 0.9984375,
       "count": "31935",
       "duration": "0.000250615s"
      },
      {
       "percentile": 0.9986328125,
       "count": "31941",
       "duration": "0.000272687s"
      },
      {
       "percentile": 0.998828125,
       "count": "31947",
       "duration": "0.000332063s"
      },
      {
       "percentile": 0.9990234375,
       "count": "31953",
       "duration": "0.000348479s"
      },
      {
       "percentile": 0.99912109375,
       "count": "31956",
       "duration": "0.000367327s"
      },
      {
       "percentile": 0.99921875,
       "count": "31960",
       "duration": "0.000407743s"
      },
      {
       "percentile": 0.99931640625,
       "count": "31963",
       "duration": "0.000411167s"
      },
      {
       "percentile": 0.9994140625,
       "count": "31966",
       "duration": "0.000451807s"
      },
      {
       "percentile": 0.99951171875,
       "count": "31969",
       "duration": "0.000482895s"
      },
      {
       "percentile": 0.999560546875,
       "count": "31970",
       "duration": "0.000526719s"
      },
      {
       "percentile": 0.999609375,
       "count": "31972",
       "duration": "0.000539903s"
      },
      {
       "percentile": 0.999658203125,
       "count": "31974",
       "duration": "0.000544159s"
      },
      {
       "percentile": 0.99970703125,
       "count": "31975",
       "duration": "0.000595967s"
      },
      {
       "percentile": 0.999755859375,
       "count": "31977",
       "duration": "0.000613087s"
      },
      {
       "percentile": 0.9997802734375,
       "count": "31977",
       "duration": "0.000613087s"
      },
      {
       "percentile": 0.9998046875,
       "count": "31978",
       "duration": "0.000620479s"
      },
      {
       "percentile": 0.9998291015625,
       "count": "31979",
       "duration": "0.000629407s"
      },
      {
       "percentile": 0.999853515625,
       "count": "31980",
       "duration": "0.000727167s"
      },
      {
       "percentile": 0.9998779296875,
       "count": "31981",
       "duration": "0.000792191s"
      },
      {
       "percentile": 0.99989013671875,
       "count": "31981",
       "duration": "0.000792191s"
      },
      {
       "percentile": 0.99990234375,
       "count": "31981",
       "duration": "0.000792191s"
      },
      {
       "percentile": 0.99991455078125,
       "count": "31982",
       "duration": "0.000799935s"
      },
      {
       "percentile": 0.9999267578125,
       "count": "31982",
       "duration": "0.000799935s"
      },
      {
       "percentile": 0.99993896484375,
       "count": "31983",
       "duration": "0.000803327s"
      },
      {
       "percentile": 0.999945068359375,
       "count": "31983",
       "duration": "0.000803327s"
      },
      {
       "percentile": 0.999951171875,
       "count": "31983",
       "duration": "0.000803327s"
      },
      {
       "percentile": 0.999957275390625,
       "count": "31983",
       "duration": "0.000803327s"
      },
      {
       "percentile": 0.99996337890625,
       "count": "31983",
       "duration": "0.000803327s"
      },
      {
       "percentile": 0.999969482421875,
       "count": "31984",
       "duration": "0.000988127s"
      },
      {
       "percentile": 1,
       "count": "31984",
       "duration": "0.000988127s"
      }
     ],
     "mean": "0.000119319s",
     "pstdev": "0.000047116s"
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
       "duration": "0.000059981s"
      },
      {
       "percentile": 0.1,
       "count": "3200",
       "duration": "0.000063713s"
      },
      {
       "percentile": 0.2,
       "count": "6397",
       "duration": "0.000066495s"
      },
      {
       "percentile": 0.3,
       "count": "9596",
       "duration": "0.000099299s"
      },
      {
       "percentile": 0.4,
       "count": "12795",
       "duration": "0.000102339s"
      },
      {
       "percentile": 0.5,
       "count": "15994",
       "duration": "0.000120499s"
      },
      {
       "percentile": 0.55,
       "count": "17593",
       "duration": "0.000122963s"
      },
      {
       "percentile": 0.6,
       "count": "19192",
       "duration": "0.000128635s"
      },
      {
       "percentile": 0.65,
       "count": "20791",
       "duration": "0.000130415s"
      },
      {
       "percentile": 0.7,
       "count": "22391",
       "duration": "0.000165655s"
      },
      {
       "percentile": 0.75,
       "count": "23997",
       "duration": "0.000167303s"
      },
      {
       "percentile": 0.775,
       "count": "24791",
       "duration": "0.000168087s"
      },
      {
       "percentile": 0.8,
       "count": "25588",
       "duration": "0.000169455s"
      },
      {
       "percentile": 0.825,
       "count": "26391",
       "duration": "0.000177567s"
      },
      {
       "percentile": 0.85,
       "count": "27188",
       "duration": "0.000178943s"
      },
      {
       "percentile": 0.875,
       "count": "27987",
       "duration": "0.000180575s"
      },
      {
       "percentile": 0.8875,
       "count": "28389",
       "duration": "0.000181343s"
      },
      {
       "percentile": 0.9,
       "count": "28790",
       "duration": "0.000182039s"
      },
      {
       "percentile": 0.9125,
       "count": "29186",
       "duration": "0.000182687s"
      },
      {
       "percentile": 0.925,
       "count": "29586",
       "duration": "0.000183631s"
      },
      {
       "percentile": 0.9375,
       "count": "29987",
       "duration": "0.000201911s"
      },
      {
       "percentile": 0.94375,
       "count": "30186",
       "duration": "0.000202871s"
      },
      {
       "percentile": 0.95,
       "count": "30386",
       "duration": "0.000203511s"
      },
      {
       "percentile": 0.95625,
       "count": "30586",
       "duration": "0.000203951s"
      },
      {
       "percentile": 0.9625,
       "count": "30789",
       "duration": "0.000204335s"
      },
      {
       "percentile": 0.96875,
       "count": "30988",
       "duration": "0.000204711s"
      },
      {
       "percentile": 0.971875,
       "count": "31086",
       "duration": "0.000204903s"
      },
      {
       "percentile": 0.975,
       "count": "31187",
       "duration": "0.000205167s"
      },
      {
       "percentile": 0.978125,
       "count": "31285",
       "duration": "0.000205383s"
      },
      {
       "percentile": 0.98125,
       "count": "31386",
       "duration": "0.000205671s"
      },
      {
       "percentile": 0.984375,
       "count": "31485",
       "duration": "0.000206007s"
      },
      {
       "percentile": 0.9859375,
       "count": "31535",
       "duration": "0.000206255s"
      },
      {
       "percentile": 0.9875,
       "count": "31585",
       "duration": "0.000206455s"
      },
      {
       "percentile": 0.9890625,
       "count": "31635",
       "duration": "0.000206703s"
      },
      {
       "percentile": 0.990625,
       "count": "31685",
       "duration": "0.000207071s"
      },
      {
       "percentile": 0.9921875,
       "count": "31735",
       "duration": "0.000207543s"
      },
      {
       "percentile": 0.99296875,
       "count": "31760",
       "duration": "0.000207879s"
      },
      {
       "percentile": 0.99375,
       "count": "31786",
       "duration": "0.000208175s"
      },
      {
       "percentile": 0.99453125,
       "count": "31810",
       "duration": "0.000208559s"
      },
      {
       "percentile": 0.9953125,
       "count": "31835",
       "duration": "0.000209303s"
      },
      {
       "percentile": 0.99609375,
       "count": "31860",
       "duration": "0.000211719s"
      },
      {
       "percentile": 0.996484375,
       "count": "31872",
       "duration": "0.000212943s"
      },
      {
       "percentile": 0.996875,
       "count": "31885",
       "duration": "0.000214495s"
      },
      {
       "percentile": 0.997265625,
       "count": "31897",
       "duration": "0.000218415s"
      },
      {
       "percentile": 0.99765625,
       "count": "31910",
       "duration": "0.000225879s"
      },
      {
       "percentile": 0.998046875,
       "count": "31922",
       "duration": "0.000238751s"
      },
      {
       "percentile": 0.9982421875,
       "count": "31928",
       "duration": "0.000242823s"
      },
      {
       "percentile": 0.9984375,
       "count": "31935",
       "duration": "0.000254919s"
      },
      {
       "percentile": 0.9986328125,
       "count": "31941",
       "duration": "0.000276975s"
      },
      {
       "percentile": 0.998828125,
       "count": "31947",
       "duration": "0.000336383s"
      },
      {
       "percentile": 0.9990234375,
       "count": "31953",
       "duration": "0.000352799s"
      },
      {
       "percentile": 0.99912109375,
       "count": "31956",
       "duration": "0.000371327s"
      },
      {
       "percentile": 0.99921875,
       "count": "31960",
       "duration": "0.000411983s"
      },
      {
       "percentile": 0.99931640625,
       "count": "31963",
       "duration": "0.000417439s"
      },
      {
       "percentile": 0.9994140625,
       "count": "31966",
       "duration": "0.000456559s"
      },
      {
       "percentile": 0.99951171875,
       "count": "31969",
       "duration": "0.000487311s"
      },
      {
       "percentile": 0.999560546875,
       "count": "31970",
       "duration": "0.000530815s"
      },
      {
       "percentile": 0.999609375,
       "count": "31972",
       "duration": "0.000544031s"
      },
      {
       "percentile": 0.999658203125,
       "count": "31974",
       "duration": "0.000548383s"
      },
      {
       "percentile": 0.99970703125,
       "count": "31975",
       "duration": "0.000600383s"
      },
      {
       "percentile": 0.999755859375,
       "count": "31977",
       "duration": "0.000617183s"
      },
      {
       "percentile": 0.9997802734375,
       "count": "31977",
       "duration": "0.000617183s"
      },
      {
       "percentile": 0.9998046875,
       "count": "31978",
       "duration": "0.000624447s"
      },
      {
       "percentile": 0.9998291015625,
       "count": "31979",
       "duration": "0.000633471s"
      },
      {
       "percentile": 0.999853515625,
       "count": "31980",
       "duration": "0.000731263s"
      },
      {
       "percentile": 0.9998779296875,
       "count": "31981",
       "duration": "0.000796223s"
      },
      {
       "percentile": 0.99989013671875,
       "count": "31981",
       "duration": "0.000796223s"
      },
      {
       "percentile": 0.99990234375,
       "count": "31981",
       "duration": "0.000796223s"
      },
      {
       "percentile": 0.99991455078125,
       "count": "31982",
       "duration": "0.000804095s"
      },
      {
       "percentile": 0.9999267578125,
       "count": "31982",
       "duration": "0.000804095s"
      },
      {
       "percentile": 0.99993896484375,
       "count": "31983",
       "duration": "0.000807487s"
      },
      {
       "percentile": 0.999945068359375,
       "count": "31983",
       "duration": "0.000807487s"
      },
      {
       "percentile": 0.999951171875,
       "count": "31983",
       "duration": "0.000807487s"
      },
      {
       "percentile": 0.999957275390625,
       "count": "31983",
       "duration": "0.000807487s"
      },
      {
       "percentile": 0.99996337890625,
       "count": "31983",
       "duration": "0.000807487s"
      },
      {
       "percentile": 0.999969482421875,
       "count": "31984",
       "duration": "0.000992383s"
      },
      {
       "percentile": 1,
       "count": "31984",
       "duration": "0.000992383s"
      }
     ],
     "mean": "0.000123536s",
     "pstdev": "0.000047102s"
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
     "name": "upstream_cx_http1_total",
     "value": "16"
    },
    {
     "name": "upstream_cx_rx_bytes_total",
     "value": "5239472"
    },
    {
     "name": "upstream_cx_total",
     "value": "16"
    },
    {
     "name": "upstream_cx_tx_bytes_total",
     "value": "1928640"
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
   "execution_duration": "10.000000527s"
  }
 ],
 "timestamp": "2019-11-12T13:52:12.292090927Z"
}
