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
```bash
# lower-case
rename 'y/A-Z/a-z/' *

# swap spaces for dashes
rename 'y/ /-/' *
```

### Capture
```bash
rm tmp.jpg
ffmpeg -f video4linux2 -s 640x480 -i /dev/video0 -ss 0:0:2 -frames 1 tmp.jpg
```
