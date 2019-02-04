---
layout: portfolio
title: Autonomous Robotics
date: 2017-09-06 8:00:00
permalink: "/autonomous-robotics/"
progress: 90
---


The Institute of Electric and Electrical Engineers helps professional engineers further their careers and
for the next generation, well, begin theirs. Each year the Southeastern conference releases a robotics hardware
competition for those willing to overcome complex challenges. As an active member of the student chapter at
Georgia Tech, I am fortunate enough to work with some of the brightest minds on campus from broad spectrum
of disciplines, and together we scratch build a cargo bot over the course of a year (and an all nighter in a
hotel room in Norfolk, Virginia).

<br>

After serving as Mechanical Lead during my 1st year at Tech, I am now serving as president of the hardware team
and consequently on the IEEE executive board at Georgia Tech. This years [competition](http://ewh.ieee.org/reg/3/southeastcon2018/index.html)
features a pirate theme expedition in which the best navigation [software](https://github.com/GaTech-IEEE-Hardware/2018)
will almost certainly win the competition. Therefore, the major focus is on writing precise [PID controllers](https://en.wikipedia.org/wiki/PID_controller), 
implementing a two methods of localization (quadrature encoders and i2c distance sensor array), and possibly some 
embedded linux PRU communication...

<br>

### 2018 Southeastcon Robot CAD model
![Autonomous Robotics 1](/assets/img/portfolio/autonomous-robotics/autonomous-robotics-1.png)

### 2019 SoutheastCon Robot
The goal of this project was to create a single board robot capable of interfacing with four motors including encoder feedback. A single board allows for a clean setup, reducing probability of errors during competition. The issue is the neccesity for a high level linux machine to make decision needing to be paried with a low level real time controller, in our case, the Beagle Bone Blue Programmable Real Time Units.

This project is interfaced with a software gui over the internet or via adhoc wifi. There is also a live streamed webcam so this robot can be completely controlled from anywhere in the world.

<br>

![robotics-1](/assets/img/portfolio/robotics/robotics-1.jpg)

<br>

### Mechanical
The structure of this robot is based around the Southeastcon 2019 design paraeters. It was CAD'd in Onshape and the frame was laser cut with spare acryllic. The timing belt pulleys were 3D printed to ensure locking fits on teh bearings and keyed to fit the motor.
![robotics-2](/assets/img/portfolio/robotics/robotics-2.png)
![robotics-3](/assets/img/portfolio/robotics/robotics-3.png)
![robotics-4](/assets/img/portfolio/robotics/robotics-4.jpg)
![robotics-6](/assets/img/portfolio/robotics/robotics-6.jpg)
![robotics-5](/assets/img/portfolio/robotics/robotics-5.jpg)

<br>

### PRU State Space Controller
The Programmable Real Time units on the Beagle Bone Blue operate at 200 MHz which more than enough to poll several brushless DC motor encoders (roughly 3600 counts per rotation of the motor). The encoder controller is a state space controller programmed via a file from the linux kernel, tuned appropriately to the motors.
![robotics-7](/assets/img/portfolio/robotics/robotics-7.png)
![robotics-8](/assets/img/portfolio/robotics/robotics-8.png)
![robotics-9](/assets/img/portfolio/robotics/robotics-9.png)

<br>

### Software
The software to control the robot is written using Electron which is a javascript based chromium web app running in a desktop window. The interface to the camera is a live stream web app running on the beagle bone ported into the GUI and the speed control options for each motor use ssh-keys to authenticate a signal file transfer (which is then interpretted by the PRU).
![robotics-10](/assets/img/portfolio/robotics/robotics-10.png)
