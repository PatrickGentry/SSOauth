window.BENCHMARK_DATA = {
  "lastUpdate": 1690835298200,
  "repoUrl": "https://github.com/AzureAD/microsoft-authentication-library-for-python",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "committer": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "distinct": true,
          "id": "3d7cfb0f94e148c514dab170455bdb35b71d5e02",
          "message": "Use vanilla git command to publish",
          "timestamp": "2023-07-29T15:32:03-07:00",
          "tree_id": "624895a2f13ae17cd516aef3f01bc666780abd16",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/3d7cfb0f94e148c514dab170455bdb35b71d5e02"
        },
        "date": 1690670039287,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_hit",
            "value": 34030.11240869917,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010809977509376026",
            "extra": "mean: 29.38573895936848 usec\nrounds: 11186"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23630.645516600933,
            "unit": "iter/sec",
            "range": "stddev: 0.000003192653222418667",
            "extra": "mean: 42.317929880395475 usec\nrounds: 20080"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_hit",
            "value": 746.8004758102776,
            "unit": "iter/sec",
            "range": "stddev: 0.00001944893456239702",
            "extra": "mean: 1.3390457456725657 msec\nrounds: 751"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23695.610180218206,
            "unit": "iter/sec",
            "range": "stddev: 0.000001874504593713623",
            "extra": "mean: 42.20190965307277 usec\nrounds: 19724"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_miss",
            "value": 7630.724927891385,
            "unit": "iter/sec",
            "range": "stddev: 0.000017559467166946328",
            "extra": "mean: 131.04914794462815 usec\nrounds: 6374"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6935.964144015228,
            "unit": "iter/sec",
            "range": "stddev: 0.000018359870006536114",
            "extra": "mean: 144.17606251077018 usec\nrounds: 5855"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_miss",
            "value": 673.0620293435167,
            "unit": "iter/sec",
            "range": "stddev: 0.000029783853280479337",
            "extra": "mean: 1.48574716207861 msec\nrounds: 654"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 6827.615039278727,
            "unit": "iter/sec",
            "range": "stddev: 0.00001797239158016403",
            "extra": "mean: 146.46402795809072 usec\nrounds: 5079"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "committer": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "distinct": true,
          "id": "8ed61e9d1dca18760db97b53f90b416917a429a7",
          "message": "Do not run benchmark in matrix",
          "timestamp": "2023-07-29T15:53:29-07:00",
          "tree_id": "da99ba69ebda5b9005e994f69a2aaf7192bf4cca",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/8ed61e9d1dca18760db97b53f90b416917a429a7"
        },
        "date": 1690671398662,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_hit",
            "value": 34135.62250920954,
            "unit": "iter/sec",
            "range": "stddev: 9.572619386751023e-7",
            "extra": "mean: 29.294910316347895 usec\nrounds: 10236"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23151.003956619144,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010377350230142023",
            "extra": "mean: 43.194671033438624 usec\nrounds: 20534"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_hit",
            "value": 668.3612124629099,
            "unit": "iter/sec",
            "range": "stddev: 0.000010152209091874527",
            "extra": "mean: 1.4961969386508858 msec\nrounds: 652"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 23062.705399971182,
            "unit": "iter/sec",
            "range": "stddev: 0.000001500287878974986",
            "extra": "mean: 43.36004742970222 usec\nrounds: 20367"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_miss",
            "value": 8206.922332122947,
            "unit": "iter/sec",
            "range": "stddev: 0.000018413488113040616",
            "extra": "mean: 121.84835673244665 usec\nrounds: 6610"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7352.232496705283,
            "unit": "iter/sec",
            "range": "stddev: 0.000017922074598120608",
            "extra": "mean: 136.01310900439083 usec\nrounds: 6330"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_miss",
            "value": 619.5530113995497,
            "unit": "iter/sec",
            "range": "stddev: 0.00002439858844106065",
            "extra": "mean: 1.6140668862879597 msec\nrounds: 598"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7239.102061034979,
            "unit": "iter/sec",
            "range": "stddev: 0.00001860609111086352",
            "extra": "mean: 138.13867957223266 usec\nrounds: 6173"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "committer": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "distinct": true,
          "id": "7b1030f35bbb8f2a4c4f4ca3fe41a99b2b69aa28",
          "message": "Add benchmark action and publish it to gh-pages\n\nExperimenting not using GPO\n\nUse vanilla git command to publish\n\nDo not run benchmark in matrix",
          "timestamp": "2023-07-29T16:08:39-07:00",
          "tree_id": "ac92391893e44239683b133d90893116c5965a70",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/7b1030f35bbb8f2a4c4f4ca3fe41a99b2b69aa28"
        },
        "date": 1690672314069,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_hit",
            "value": 38300.00446908366,
            "unit": "iter/sec",
            "range": "stddev: 9.844864177972842e-7",
            "extra": "mean: 26.109657527774313 usec\nrounds: 14772"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 25432.31211238378,
            "unit": "iter/sec",
            "range": "stddev: 0.0000011708989949636449",
            "extra": "mean: 39.32005849806589 usec\nrounds: 19881"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_hit",
            "value": 708.227935920858,
            "unit": "iter/sec",
            "range": "stddev: 0.000008565503474902845",
            "extra": "mean: 1.411974802575066 msec\nrounds: 699"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 25094.141899800547,
            "unit": "iter/sec",
            "range": "stddev: 0.000001504690572239288",
            "extra": "mean: 39.84993804502031 usec\nrounds: 19724"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_miss",
            "value": 8381.326031342443,
            "unit": "iter/sec",
            "range": "stddev: 0.000017168041008957286",
            "extra": "mean: 119.31286245880942 usec\nrounds: 7605"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7549.621837084086,
            "unit": "iter/sec",
            "range": "stddev: 0.00001677801479869199",
            "extra": "mean: 132.45696560428425 usec\nrounds: 7123"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_miss",
            "value": 654.1390254452017,
            "unit": "iter/sec",
            "range": "stddev: 0.00002351268380147235",
            "extra": "mean: 1.5287270153610055 msec\nrounds: 651"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 7475.141370943885,
            "unit": "iter/sec",
            "range": "stddev: 0.000016963040090045192",
            "extra": "mean: 133.77673416144773 usec\nrounds: 6440"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "committer": {
            "email": "rayluo@microsoft.com",
            "name": "Ray Luo",
            "username": "rayluo"
          },
          "distinct": true,
          "id": "dcc037e896caaec12e6dc4a4bbce7b0839c893c8",
          "message": "Adjust detection calculation",
          "timestamp": "2023-07-31T13:24:58-07:00",
          "tree_id": "6c2a91ae450a170b821004251fcc6adf62fa1937",
          "url": "https://github.com/AzureAD/microsoft-authentication-library-for-python/commit/dcc037e896caaec12e6dc4a4bbce7b0839c893c8"
        },
        "date": 1690835297039,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_hit",
            "value": 26441.900847859742,
            "unit": "iter/sec",
            "range": "stddev: 0.000029502158953191036",
            "extra": "mean: 37.81876370211644 usec\nrounds: 6623"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_hit",
            "value": 18825.9366460408,
            "unit": "iter/sec",
            "range": "stddev: 0.00003279940597170719",
            "extra": "mean: 53.118207014167645 usec\nrounds: 10835"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_hit",
            "value": 630.03215458433,
            "unit": "iter/sec",
            "range": "stddev: 0.00023790991072829339",
            "extra": "mean: 1.587220577114449 msec\nrounds: 603"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_hit",
            "value": 18477.27689001512,
            "unit": "iter/sec",
            "range": "stddev: 0.00003115064299044735",
            "extra": "mean: 54.12052901260505 usec\nrounds: 11495"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1_token_per_tenant_and_cache_miss",
            "value": 5721.806453768691,
            "unit": "iter/sec",
            "range": "stddev: 0.00008474731544681337",
            "extra": "mean: 174.76998008930306 usec\nrounds: 5374"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5473.837115873423,
            "unit": "iter/sec",
            "range": "stddev: 0.00005907852562473156",
            "extra": "mean: 182.68720439271547 usec\nrounds: 5054"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_1_tenant_with_1000_tokens_per_tenant_and_cache_miss",
            "value": 583.5040485033944,
            "unit": "iter/sec",
            "range": "stddev: 0.00022934836837647027",
            "extra": "mean: 1.7137841675046797 msec\nrounds: 597"
          },
          {
            "name": "tests/test_benchmark.py::test_cca_many_tenants_with_10_tokens_per_tenant_and_cache_miss",
            "value": 5222.333157668937,
            "unit": "iter/sec",
            "range": "stddev: 0.00009153096628777019",
            "extra": "mean: 191.48529398809254 usec\nrounds: 4990"
          }
        ]
      }
    ]
  }
}