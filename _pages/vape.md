---
layout: portfolio
title: Venutian Atmospheric Probe Explorer
date: 2017-09-06 8:00:00
permalink: "/vape/"
progress: 70
---


<style>
td {
    background-color: #e4e4e4;
}

th:nth-child(2) {
    background-color: #c5a573;
}
th:nth-child(3) {
    background-color: #2d3982;
}
th:nth-child(4) {
    background-color: #fd845d;
}
th:nth-child(5) {
    background-color: #a7a7a7;
}
</style>

### Introduction
Oh yes, that name is definitely intentional. VAPE is cool right? Well this has everything to do with clouds, except there made out of actually poisonous sulfuric acid. This is my "bare minimum engineering approach" research into what a low cost, sustained Venutian Atmosopheric Probe Explorer (VAPE) might look like.

<br>

So after building model rockets, high altitude balloons, quadcopters, robots and whatever else I decided I purse a much bigger concept I've been thinking a lot about. Despite the fact that Mars has been the focus of most of humanities exploration goals, Venus has some amazing longer term qualities that really fascinate me. If I just showed you a table, you might even scratch your head on the Mars missions.

<br>

<div class="scroll-table" markdown="1">

| Property | Venus | Earth | Mars | Moon |
| -------- | ----- | ----- | ---- | ---- |
| Gravitational Force (m/s<sup>2</sup>) | 8.87 | 9.81 | 3.71 | 1.62 |
| Atmosphere | Yes | Yes | Barely | No |
| Solar Energy | Loads | Some | Less | Some |
| Optimal Travel Time | 3 months | You're Here | 6 months | 3 days |
| Magnetosphere | Some | Loads | Some | None |
| Year Length |

</div>

<br>

Just a quick foray into Space Engine demonstrates how different the amount of light each planet receives. In terms of human math, more sunlight equals more energy. You can clearly see Venus gets about twice as much sunlight as the Martians, and no this isn't playing with angles; probes sent to Mars have 4 times more solar panels.

<br>
Venus
![Venus](/assets/img/portfolio/vape/venus.png)

<br>
Mars
![Mars](/assets/img/portfolio/vape/mars.png)

<br>

Unfortunatly, there is a simple rational argument for Mars is the target: Venus is a living hell at the moment. With surface temperatures exceeding 800* Celcius and pressure exceeding 92 Earth Atmospheres, humans walking on our sister planet just isn't happening anytime soon.

<br>

| Property | Venus | Earth | Mars | Moon |
| -------- | ----- | ----- | ---- | ---- |
| Day Length | 8.87 | 9.81 | 3.71 | 1.62 |

<br>

### Goals
- ultra low cost
- open source
    - design
    - hardware
    - software
- launchable on low cost rocket
- sustained as long as possible in atmosphere
- buildable

<br>

### Background Research
- HAVOC
- Soviet Landers

<br>

### Concept
![size comparison](/assets/img/portfolio/vape/size-comp.png)

<br>

`pip3 install vpython`

```python
from vpython import *
import math

scene.width = 1920
scene.height = 1080

### Soviet Balloons
volume = 4/3 * math.pi * (1.75 ** 3)
sphere(pos=vector(-10, 0, 0), radius=1.75, color=color.red)
label(pos=vector(-10, 4, 0), text="Soviet Balloon\nVolume: %0.3f" % volume)

### 25 kg sphere
radius = 1.814
volume = 4/3 * math.pi * (radius ** 3)
sphere(pos=vector(-5, 0, 0), radius=radius)
label(pos=vector(-5, -3, 0), text="25 kg Sphere\nVolume: %0.3f" % volume)

### 25 kg ellipsoid
length = 5.305
width = 4
height = 2.5
volume = 4/3 * math.pi * (length/2) * (width/2) * (height/2)
ellipsoid(pos=vector(0, 0, 0), length=length, height=height, width=width, color=color.blue, axis=vector(0, 0, 1))
label(pos=vector(0, 4, 0), text="25 kg Ellipsoid Front\nVolume: %0.3f" % volume)
ellipsoid(pos=vector(5, 0, 0), length=length, height=height, width=width, color=color.blue, axis=vector(1, 0, 0))
label(pos=vector(5, -3, 0), text="25 kg Ellipsoid Side")
ellipsoid(pos=vector(10, 0, 0), length=length, height=height, width=width, color=color.blue, axis=vector(0, 1, 0))
label(pos=vector(10, 4, 0), text="25 kg Ellipsoid Top")
```

<br>

### Design
![CAD](/assets/img/portfolio/vape/cad.png)

<br>

### CFD
![cfd 4](/assets/img/portfolio/vape/cfd-4.png)
<br>
![cfd 5](/assets/img/portfolio/vape/cfd-5.png)
<br>
![cfd 6](/assets/img/portfolio/vape/cfd-6.png)
<br>
![cfd 7](/assets/img/portfolio/vape/cfd-7.png)
