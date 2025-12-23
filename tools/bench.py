#!/usr/bin/env python3

import sys
import time
from collections import Counter
import httpx

def measure():
  slash = httpx.get("http://localhost:8787")
  e_slash = slash.elapsed.total_seconds()
  nf = httpx.get("http://localhost:8787/abc/123")
  e_nf = nf.elapsed.total_seconds()
  return (e_slash,e_nf)

stats = []
for i in range(sys.maxsize):
  stats.append(measure())
  t = len([ True for s in stats if s[0] > s[1] ])
  a = len(stats)
  p = (t/a) * 100
  print(f"{time.asctime()}: {str(p):<20}")
  time.sleep(2)

