---
layout: portfolio
title: Venusian Atmospheric Probe Explorer
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
Oh yes, that name is definitely intentional. VAPE is cool right? Well this has everything to do with clouds, except there made out of  poisonous sulfuric acid. This is my "bare minimum engineering approach" research into what a low cost, sustained Venusian Atmosopheric Probe Explorer (VAPE) might look like.

<br>

So after building model rockets, high altitude balloons, quadcopters, robots, etc, I decided I purse a much bigger concept I've been thinking about a lot. Despite the fact that Mars has been the focus of most of humanities exploration goals, Venus has some amazing longer term qualities that really fascinate me. If I just showed you a table, you might even scratch your head on the Mars missions.

<br>

<div class="scroll-table" markdown="1">

| Property | Venus | Earth | Mars | Moon |
| -------- | ----- | ----- | ---- | ---- |
| Gravitational Force (m/s<sup>2</sup>) | 8.87 | 9.81 | 3.71 | 1.62 |
| Solar Energy (Watts/m<sup>2</sup>) | 2613 | 1368 | 590 | 1368 |
| Travel Time (Earth Days) | 145.964 | - | 258.676 | ~3 |
| Velocity for Hohmann Orbit From Earth Orbit (km/s) | 2.5 | - | 2.9 | - |
| Time Between Launch Windows (Earth Years) | 1.599 | - | 2.135 | - |
| Year Length (Earth Days) | 224.7 | 365 | 687 | - |
| Average Distance from Earth (AU) | 1.135 | - | 1.693 | 0.00257 |
| Average Round Trip Comm Time | 18.3 min | - | 28.2 min | 2.6 sec |
| Surface Atmospheric Pressure (atm) | 93 | 1 | 0.006 | 0 |
| Magnetosphere | None | Loads | None | None |

</div>

<br>
### Distance Calculations

`pip install scipy`

```python
import math
from scipy import special
from scipy import constants

# Constants
auToMeters = 149597870700 # ~150 million kilometers
earthMoonDist = 385000600 # Earth to Moon in meters
earthAU = 1 # distance from Earth to Sun in AU
venusAU = 0.722
marsAU = 1.524

# Average distance between two approximately circularly orbiting objects
def averageDistance(r1, r2):
    x = (2 * math.sqrt(r1*r2)) / (r1 + r2)
    return (2 / math.pi) * (r1 + r2) * special.ellipe(x**2)

# Average time for round trip signal at speed of light
def averageRoundTripTime(dist):
    metersDist = dist * auToMeters
    travelTime = metersDist / constants.speed_of_light
    return 2 * travelTime

# Earth - Venus
earthVenusDist = averageDistance(earthAU, venusAU)
earthVenusTime = averageRoundTripTime(earthVenusDist)
print("Average Earth to Venus Distance: %0.3f AU" % earthVenusDist)
print("Average Earth to Venus Round Trip Time: %d seconds\n" % earthVenusTime)

# Earth - Mars
earthMarsDist = averageDistance(earthAU, marsAU)
earthMarsTime = averageRoundTripTime(earthMarsDist)
print("Average Earth to Mars Distance: %0.3f AU" % earthMarsDist)
print("Average Earth to Mars Round Trip Time: %d seconds\n" % earthMarsTime)

# Earth - Moon
earthMoonDist = float(earthMoonDist) / auToMeters
earthMoonTime = averageRoundTripTime(earthMoonDist)
print("Average Earth to Moon Distance: %0.9f AU" % earthMoonDist)
print("Average Earth to Moon Round Trip Time: %0.3f seconds" % earthMoonTime)
```

```
Average Earth to Venus Distance: 1.135 AU
Average Earth to Venus Round Trip Time: 1133 seconds

Average Earth to Mars Distance: 1.693 AU
Average Earth to Mars Round Trip Time: 1689 seconds

Average Earth to Moon Distance: 0.002573570 AU
Average Earth to Moon Round Trip Time: 2.568 seconds
```
*Interesting note that Mercury is actually the closest planet on average to Earth at 1.038 AU, in fact on average Mercury is the closest to every planet

<br>

### Solar Energy Analysis

Just a quick foray into Space Engine demonstrates how different the amount of light each planet receives. In terms of human math, more sunlight equals more energy. You can clearly see Venus gets about twice as much sunlight as the Martians, and no this isn't playing with angles; probes sent to Mars have 4 times more solar panels (inverse square law for light).

<br>
Venus
![Venus](/assets/img/portfolio/vape/venus.png)

<br>
Mars
![Mars](/assets/img/portfolio/vape/mars.png)

<br>

Unfortunatly, there is a simple rational argument for Mars is the target: Venus is a living hell at the moment. With surface temperatures exceeding 800* Celcius and pressure exceeding 92 Earth Atmospheres, humans walking on our sister planet just isn't happening anytime soon.

<br>

<div class="scroll-table" markdown="1">

| Property | Venus | Earth | Mars | Moon |
| -------- | ----- | ----- | ---- | ---- |
| Siddereal Day Length | 243.025 days | 24 hours | 
| Solar Day Length | 116.75 days | 24 hours | 
| Year Length |
| Average Surface Temperature (°Celcius) | 462 | 14 | -63 | 107 / -153 |
| Surface Atmospheric Pressure (atm) | 93 | 1 | 0.006 | 0 |

</div>

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
