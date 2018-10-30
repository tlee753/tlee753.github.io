---
layout: portfolio
title: Rocket Interception
date: 2017-04-06
permalink: "/rocket-interception/"
progress: 30
---


With space fairing payloads being more commonplace then ever before, continuing to diminish the cost per launch is critical. In order to prevent loss of valuable rocket components and increase reusability, I've decided to research the idea of intercepting parts before hitting the bottom of the ocean.

<br>

This is a fairly involved project as it requires the building of model rockets, quad copters, and potentially high altitude balloons from a hardware standpoint, and some highly advanced control software for autonomous communication and interception. My objective for the project is to launch a model rocket to roughly 1000 feet, deploy a parachute, communicate is location and environment attributes live to a quadcopter, and then be intercepted by said custom built quadcopter(s) during the rocket's decent.

<br>

### Rocket Modeling
The first step is designing a rocket that will meet my functional requirements given the weight of the rocket's payload while also being extremely reusable. Here I've created a preliminary mock up and run simulations to ensure I achieve at least the 1000 feet (with insurance) apogee I feel is neccessary to ensure probable likelyhood of capture.
![Openrocket View](/assets/img/portfolio/rocket-interception/openrocket-1.png)
<br>
![Simulation](/assets/img/portfolio/rocket-interception/openrocket-2.png)
<br>

### Rocket Core
The rocket core is the brain of the rocket, specially designed to be as light as possible and separate from the main rocket body upon secondary charge detonation. My current design houses a Raspberry Pi Zero W microcontroller, barometer, temperature sensor, gyroscope, accelerometer, magnotometer, microphone, camera, RF transceiver, power regulator, and of course a recharable battery cell. I've also decided from past rocketry experience to design my own board in order to vastly reduce complexity, ensure component modularity for debugging, add a bit of structural rigidity, and, as always, reduce overall weight.
<br><br>

### Schematic
![Schematic](/assets/img/portfolio/rocket-interception/schematic.jpg)
<br>

### PCB Design
Top Layer
![Top Layer](/assets/img/portfolio/rocket-interception/pcb-0.jpg)
<br>
Bottom Layer
![Bottom Layer](/assets/img/portfolio/rocket-interception/pcb-1.jpg)
<br>
Silk Screen
![Silk Screen](/assets/img/portfolio/rocket-interception/pcb-2.jpg)
<br>

### Rapid Prototype
To get a true understanding of my dimensioning, I (extremely) quickly fabricated a prototype, a concept I've used many times to help shake out any simple ideas or problems I might be overlooking. In this case, I can tell my rocket's outer diameter can be shrunken down (better for rocket aerodynamics). 
<br> 
![Prototype](/assets/img/portfolio/rocket-interception/prototype.jpg)
<br>

### Radio Transmission Test
Radio transmission testing using software defined radio (SDR) to ensure packets are being broadcast
![Radio 1](/assets/img/portfolio/rocket-interception/radio-1.jpg)
<br>
Transmit/Receive test between ground station and rocket core
![Radio 2](/assets/img/portfolio/rocket-interception/radio-2.png)
<br>


### Flight Software
Easily the most difficult part of the project is the control software neccessary for interception; after all it is a complex object moving quickly towards the ground, not to mention wind effects. Due to this constraint, a sophisticated feedback system will need to be built that accounts for the rocket's communicated variables and the sensory input of the quadcopter(s). This is definitely a work in progress but I will likely start with PID control loops I've written for robotics and continue on to a state space controller.

<a class="button" href="https://github.com/tlee753/rocketry">
Github
</a>

### Quadcopter(s), High Altitude Balloons, and Beyond
There is still much hardware to be built and much code to write but the future is bright. At the moment I have several theories for precisely how the quadcopter(s) will intercept the rocket; it will likely be some combination of IR transmitters, GPS tracking, and OpenCV object recognition paired with live correspondence of the environment variables to the interceptor. My current quadcopter design will be a heavily modified racing drone to ensure high speed and manueverability. Given the large amount of weight of the intercept payload, it is likely I will build several drones and coordinate them during capture.

<br>

To continue to extend the project and satisfy my curiosity, I also envision launching a high altitude balloon and intercepting the payload on the way down before it lands on private property, or worse, power lines. 

<br>

Each day on the project continues to be a enlightening endeavor and I'm excited to see what more I will discover...