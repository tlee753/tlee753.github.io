---
layout: post
title: Spiral Particles
date: 2020-01-12 12:00
tags: fun
category: Fun
thumbnail: ../blog/spiral.jpg
---


# Spiral Particles
The spiral nature of galaxies is really fundamentally fascinating from a physical and mathmatical perspective. I've read a bit on why this happens but I've been meaning to write a little particle physics simulation just to experiment. Simply put, the theory goes that if particles exist in a three dimensional environment with a random distribution of locations, gravity will bring the particles into a single plane with a spin.

<br>

Nothing really to the code, its just the universal gravity equation applied to all particles by all particles. The particles are roughly the size and mass of Earth, and given a small random velocity to go with their random position. I also wrote in a simple collision mechanism to "combine" two particles on impact. If you'd like there are also "Force Arrows" you can uncomment to visualize the net forces acting on the particles.

### The Code
`pip3 install vpython`

```python
from vpython import *
from random import random


scene.width = 1920
scene.height = 1080
# scene.range = 1e8
scene.autoscale = 1
# scene.autozoom = 1
scene.autocenter = 1

numParticles = 100
mapBound = 1e8
velBound = 1e4
arrowScalar = 1e-18
gravConstant = 6.674e-11

colors = [color.white, color.magenta, color.cyan, color.green, color.yellow, color.orange, color.red]

class Particle():
    def __init__(self, id):
        self.mass = 1e25
        self.radius = 6.4e6
        self.id = 0
        self.collisions = 0

        self.x = random()*mapBound*2 - mapBound
        self.y = random()*mapBound*2 - mapBound 
        self.z = random()*mapBound*2 - mapBound

        self.xVel = random()*velBound*2 - velBound
        self.yVel = random()*velBound*2 - velBound
        self.zVel = random()*velBound*2 - velBound

        self.velocity = vector(self.xVel, self.yVel, self.zVel)
        self.momentum = self.velocity * self.mass
        
        self.sphere = sphere(pos=vector(self.x, self.y, self.z), radius=self.radius)
        self.forceArrow = arrow(pos=self.sphere.pos, axis=vector(0,0,0), color=color.green)

        self.vecForce = vector(0,0,0)

debree = []
for i in range(numParticles):
    debree.append(Particle(i+1))

deltaT = 10
t = 0
while t < 10000000:
    rate(1000)

    for d1 in debree:
        if d1.mass == 0:
            continue
        d1.vecForce = vector(0, 0, 0)

        for d2 in debree:
            if d2.mass == 0:
                continue
            if d1.sphere.pos == d2.sphere.pos:
                continue
            pos = d1.sphere.pos - d2.sphere.pos
            magPos = mag(pos)
            if magPos < d1.sphere.radius:
                d1.mass += d2.mass
                d1.collisions += d2.collisions + 1
                d1.sphere.color = colors[d1.collisions%len(colors)]
                d2.mass = 0
                d2.sphere.visible = False
                d2.forceArrow.visible = False
                continue
            d1.vecForce += (-gravConstant*d1.mass*d2.mass*(pos/magPos))/(magPos**2) 

        d1.momentum += d1.vecForce*deltaT  
        d1.velocity = d1.momentum/d1.mass 
        d1.sphere.pos += d1.velocity*deltaT
        # d1.forceArrow.pos = d1.sphere.pos
        # d1.forceArrow.axis = d1.vecForce*arrowScalar

    t += deltaT

print("fin")
```

### Results
![Low Velocity](/assets/img/blog/spiral/low-vel.gif)

It amazes me that running this results in this sort of phenomena everytime, the particles start out combining into a single particle with a huge amount of mass which then either collects the nearby particles into orbit or the particle has reached an escape velocity and is heading into the depths of space. The orbiters don't perfectly reflect a planar constraint as I found they acting more like "comets" with long eleptical orbits about the massive particle, but after repeated trials they do generally seem to flatten out.

<br>

Really, for a simple as this is, I'm just stunned at how vast space is. `Space Engine` is a far better visualization of this, but you can see here how quickly things can move away from each other.

<br>

