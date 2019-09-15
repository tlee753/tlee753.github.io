---
layout: portfolio
title: Interactive Robotics
date: 2017-09-06 8:00:00
permalink: "/interactive-robotics/"
progress: 100
---

ROS is a open source framework for all types of robotics projects created by Standford and utilized by
people across the globe. I found out about its particularly useful node based interface via a CS research
class in which I was tasked with voice recognition and response in order to launch a multitude of tasks
involving a camera and robotic arm on a Husky robot.

<br>

This project was a tech demo for the system which worked with three nodes:
1) Voice Node (my node): Takes in voice commands and uses CMU sphinx and a dictionary of phrases to decipher commands. THe node also respond with voice commands based on the command it received to notify the user and create a more human interaction.
2) Camera Node: facial tracking and camera movement to maintain tracking
3) Arm Node: arm movement control across several joints including fingers

<br>

The idea is that a user can walk up to the robot and tell it to "look left" or "wave" and the the device does. We further broked down commands into categories of difficulty based on teh complexity of the task. For instance, "say hello" is a simple one node task where as "handshake" requires finding the user and then reaching out toward them. These are color coded in our research report table.

<br>

<a class="button" href="/assets/docs/ROS-Report.pdf">
Research Findings
</a>

<br>

![ROS Tutorial](/assets/img/portfolio/interactive-robotics/tutorial.png)
<br>
![Gazebo](/assets/img/portfolio/interactive-robotics/gazebo.png)
<br>
![Robot](/assets/img/portfolio/interactive-robotics/robot.jpg)
<br>
![Terminal](/assets/img/portfolio/interactive-robotics/terminal.jpg)