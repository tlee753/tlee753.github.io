---
layout: post
title: Code
date: 2017-03-20 12:00:00
category: Utility
permalink: "/code/"
---

### FFMPEG Command Line Trim Video
```bash
ffmpeg -i orig.file -ss 00:00:30 -t 00:00:05 -vcodec copy -acodec copy new.file
```

### Fib Test
```python
import time
startTime = time.time()

def fib(n):
    if n <= 1: return 1
    return fib(n - 1) + fib(n-2)

print(fib(40))
print("%s sec" % (time.time() - startTime))
```

### Rename
```shell
# lower-case
rename 'y/A-Z/a-z/' *

# swap spaces for lines
rename 'y/ /-/' *
```

