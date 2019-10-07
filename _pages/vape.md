---
layout: portfolio
title: Venusian Atmospheric Probe Explorer
date: 2019-09-06 8:00:00
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
| Surface Magnetic Field (gauss) | None | 25 - 65 | None | None |

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


### Links to Add / Sources
- [Forbes Mars vs Venus](https://www.forbes.com/sites/quora/2017/10/18/is-venus-a-better-place-to-colonize-than-mars/#668f8b8a5c47)
- [Gas Resistivity](https://www.thoughtco.com/table-of-electrical-resistivity-conductivity-608499)
- [Atmosphere Radiation](http://lasp.colorado.edu/~espoclass/ASTR_5835_2015_Readings_Notes/Titov_Et_Al-EVTP.pdf)
- [Blimp Aerodynamics](https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/media/airship_aerodynamics.pdf)
- [Megellan NASA](https://www2.jpl.nasa.gov/magellan/fact1.html)
- [Densities/Temperatures Venusian Atmosphere](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2012JE004058)
- [Co2 Deep Atmosphere](https://hal.archives-ouvertes.fr/hal-01635402/document)
- [Low Altitude Exploration of Venus Atmosphere](https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/20110016033.pdf)
- [Venus HAVOC Hype Video](https://www.youtube.com/watch?v=0az7DEwG68A&feature=youtu.be)
- [Clouds of Venus Dyamics Uncertainty](https://www.skyandtelescope.com/astronomy-news/venus-clouds-puzzle-scientists/)
- [HAVOC Concept NASA](https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/20160006329.pdf)
    - https://ntrs.nasa.gov/search.jsp?R=20160006329
- [Colonizing Venus](https://www.universetoday.com/130482/how-do-we-colonize-venus/)
- [European Venus Explorer Concept](https://mathscinotes.com/wp-content/uploads/2016/02/02_The-European-Venus-Explorer-EVE-2010-Mission-Proposal_C.-Wilson-1.pdf)
- [Russian Balloon Calcs](https://www.mathscinotes.com/2016/02/floating-habitat-on-venus/)
- [Depth Pressure Calculator](http://www.calctool.org/CALC/other/games/depth_press)
- [Arduino Power Consumption](https://forum.arduino.cc/index.php?topic=50701.0)
- [Raspberry Pi Power Consumption](https://www.jeffgeerling.com/blogs/jeff-geerling/raspberry-pi-zero-power)
- [Batteries](https://www.amazon.com/Batteries-Rechargeable-Non-Button-High-Capacity-Flashlight/dp/B07Y1MDPT9/ref=asc_df_B07XP6BP2L/?tag=&linkCode=df0&hvadid=365896412151&hvpos=1o1&hvnetw=g&hvrand=2824005550531793629&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9010753&hvtargid=pla-819940596628&ref=&adgrpid=73640491182&th=1)
- [Pumpkin Battery](http://www.pumpkininc.com/space/datasheet/710-01640-F_DS_BM_2.pdf)
    - https://www.pumpkinspace.com/store/p198/Intelligent_Protected_Lithium_Battery_Module_with_SoC_Reporting_%28BM_2%29.html
- [NASA GEVS](https://standards.nasa.gov/standard/gsfc/gsfc-std-7000)
- [RC Model](https://www.youtube.com/watch?v=s1w6a8PbIus)
- [Venus Weather Patterns](https://www.universetoday.com/14282/how-long-is-a-day-on-venus/)
- [Mars Composition](https://www.universetoday.com/14702/what-is-mars-made-of/)
- [Hohmann Transfer window speed up](https://www.lpi.usra.edu/meetings/marsconcepts2012/pdf/4181.pdf)
- [Earth to Venus time](http://clowder.net/hop/railroad/EV.htm)
- [Venus Closest Neighbor](https://physicstoday.scitation.org/do/10.1063/PT.6.3.20190312a/full/)
- [Terraforming Venus/Mars](https://slate.com/human-interest/2013/09/outer-space-can-we-make-mars-or-venus-habitable.html)
- [Venusian Atmosphere](https://www.danielyeow.com/2015/venus/)
- [Venus Winds](https://www.universetoday.com/36816/winds-on-venus/)
- [Venus Rain](https://www.wired.com/2013/04/vega-venus-rain/)

- [Voyager RTDs](https://en.wikipedia.org/wiki/MHW-RTG)
- [Venus Express ESA](https://en.wikipedia.org/wiki/Venus_Express)
- [Missions to Venus](https://en.wikipedia.org/wiki/List_of_missions_to_Venus)
- [Venus Atmosphere](https://en.wikipedia.org/wiki/Atmosphere_of_Venus)

- [Automotive OpenFoam Research](http://www.tfd.chalmers.se/~lada/postscript_files/Bastian-Nebenfuhr-OpenFOAM_A_tool_for_predicting_automotive_flow_fields.pdf)
- [K-e Turbulence Models](https://web.stanford.edu/class/me469b/handouts/turbulence.pdf)
- [Flow OpenFoam Tutorial](https://www.youtube.com/watch?v=prP0YcdGmbI)
- [Snappy Hex Mesh](https://www.youtube.com/watch?v=9vCPlMm-KLA)
- [Post Processing](https://www.youtube.com/watch?v=ZxJnOB0Gwn8)
- [Another Snappy Hex Mesh](https://www.youtube.com/watch?v=ObsFQUiVi1U)
- [Salome](https://www.youtube.com/watch?v=1zQbU-E4k1U)
- [Helyx OS Demo](https://www.youtube.com/watch?v=HsJTdXeEGyQ)
- [Russian Helyx STL Tutorial](https://www.youtube.com/watch?v=ozLMor75PA0)
