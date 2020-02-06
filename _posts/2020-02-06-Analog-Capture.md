---
layout: post
title: Analog Capture 
date: 2020-02-06 12:00
tags: tech
category: Tech
thumbnail: ../blog/analog-capture.png
---


# Analog Capture
At some point it became time to convert old family videos on VHS/VCR to digital, and well, it turned out to be a rabbit hole that can go as deep as you want it to. I was looking for a low-cost, ultra-simple, good enough solution because lets be honest, the extra 1% in details isn't worth the extra hundreds you could spend building a professional studio or hiring a professinal studio for a lot of this content. (By all means, get your wedding tape done professinally!)

<br>

In terms of low-cost hardware, I used this [10$ usb stick from Amazon](https://www.amazon.com/Jancane-USB-Audio-Video-Converter/dp/B07NPFJJ7K/ref=asc_df_B07NPFJJ7K/?tag=hyprod-20&linkCode=df0&hvadid=343187928868&hvpos=1o1&hvnetw=g&hvrand=14806862553366141929&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9010753&hvtargid=pla-847531773077&psc=1&tag=&ref=&adgrpid=68968886357&hvpone=&hvptwo=&hvadid=343187928868&hvpos=1o1&hvnetw=g&hvrand=14806862553366141929&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9010753&hvtargid=pla-847531773077) because it was cheap, could be primed, and because I think a lot of these adapters are really the exact same model from 2005. In terms of software, well, I started out with Windows but grew sick of it so I compiled a dead simple, easy modifiable, single bash file to run when capturing.

### ffmpeg Script
`sudo apt install ffmpeg`
<br><br>
Save the following script as `capture.sh`
<br><br>
`chmod +x capture.sh`
<br><br>
`./capture.sh` to begin capture, `q` to stop
<br>

```bash
ffmpeg \                                                                        
-f v4l2 \
-standard NTSC \
-thread_queue_size 512 \
-i /dev/video0 \
-f alsa \
-thread_queue_size 512 \
-i default \
-c:v libx264 \
-crf 18 \
-r 29.97 \
-s 720x480 \
-vf "yadif=1" \
-pixel_format yuyv422 \
-pix_fmt yuv420p \
-b:a 392k \
-channels 2 \ 
-c:a aac \
movie.mp4
```

### Results Comparison
This is a quick side by side showing the stock windows capture program that comes with the stick on the left, and my custom `ffmpeg` script on the right.
<video width="100%" controls>
published: true
    <source src="/assets/img/blog/analog-comp.mp4" type="video/mp4">
    Your broswer does not support the video tag.
</video>

### Links I Followed
#### - [Oldskool PC Youtube Video](https://www.youtube.com/watch?v=sn_TDa9zY1c)
The best place to start, he explains what hardware to use, how to use `Virtual Dub`, and how video compression/interlacing works. Excellent tool for learning, but when I tried and subsequently used `Virtual Dub 2`, I couldn't get the video to look cleanly and compression formats were missing, which is why I switched to Linux.
#### - [Technology Connections Youtube Video](https://www.youtube.com/watch?v=ZC5Zr3NC2PY)
Great video discussing a fairly simple way to capture analog video, I think mine is simpler and lower in cost, but I absolutely agree with his points - keep it simple, straightforward, and just go for something good enough or you'll spend eternity on useless imperceptible details.
#### - [Jessecar96 Github](https://github.com/Jessecar96/analog-capture)
Awesome Github script that I just couldn't get to work on Windows, but I pulled a lot of my script from his command. Great job detailing the arguments too, I would follow suite but I don't really know what I am talking about so...
#### - [Gordon Lesti Article](https://gordonlesti.com/digitize-a-vhs-tape-with-ffmpeg-and-easycap-on-linux/)
Another great article on how to use these low cost analog capture devices wtih `ffmpeg`. I borrowed the arguments that were Linux specific.
#### - [Bionazgul Medium Article](https://medium.com/@bionazgul/the-adventures-of-converting-vhs-tapes-to-mp4-using-easycap-and-ffmpeg-to-create-a-christmas-f12364bfefe1)
One last article that details `ffmpeg` on Linux. I think I borrowed most everything from here except the set duration versus pressing `q` to stop capture.

<br>