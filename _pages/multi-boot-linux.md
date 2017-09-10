---
layout: slides
title: Multi-boot Linux
date: 2017-09-07 8:00:00
permalink: "/multi-boot-linux/"
---

<section markdown="1">

# Creating a Multi-boot

### Linux system with or without Windows
---

### What?
- A multi-boot (as I've defined it) is any computer that can boot 3 or more operating systems
- A 2 operating system PC is known as a "dual-boot" and is fairly standard as well as simple to do (Google Ubuntu)

### Why?
- Dual-booting (Windows and Linux) is great for maximizing the capabilities of a personal computer as you can run programs built for each operating system without the overhead of a virtual machine
- But sometimes the linux distro you choose isn't always ideal for the diverse range of linux applications
- Why not?

### Example Use Case
1. I like to run Windows for all the applications that basically require it (CAD, Steam)
2. Ubuntu has been the easiest to use for crypto-mining with wide spread support (drivers) in most linux applications
3. Mint is my favorite operating system which I use as a daily driver and run all my virtual machines (Mac OS) of off
4. Arch is extremely fun to experiment/learn with, I use it for testing desktop environments mostly because the package manager is wonderful

</section>


<section markdown="1">

# Glossary
---

### General
- Distribution (distro): a flavor of linux, a particular linux operating system
- ISO File: disk image file, in our case it will contain an operating system and will be "burned" to a flashdrive
- Drive: a physical piece of equipment that has memory and can store files (hard drive, solid state drive, flash drive, sd card...)
- Partition: a virtual block of memory on a drive, there are several types of partitions
- GParted: common linux program used to manage partitions
- Disk Management: Windows utility used to manage partitions

### Partition types
- Primary: You can only have 4 of these on a drive
- Logical: A primary partition that allows you to divide it into as many new partitions as space allows
- Extended: 

</section>


<section markdown="1">

# Required Materials
---

### Hardware
- A USB flashdrive of 4+ GB's is required

### Software
- Distributions (Linux operating systems to download)

- [Debian](https://www.debian.org/CD/http-ftp/)
- [Ubuntu](https://www.ubuntu.com/download/desktop)
- [Mint](https://www.linuxmint.com/download.php)
- [Arch](https://www.archlinux.org/download/)
- [Manjaro](https://manjaro.org/get-manjaro/)
- [Fedora](https://getfedora.org/)
- [CentOS](https://www.centos.org/download/)

### GT Software Mirror
- Just in case you happen to be near Atlanta :)
- [Mirror](http://www.gtlib.gatech.edu/)

### ISO Writing Software
- Etcher is a cross platform (Windows, MAC, Linux) software utility to write ISO files (operating system images) to external media (flashdrives)
- [Etcher](https://etcher.io)
- You will need to either have an operating system installed already (probably Windows) or use another computer to burn an ISO to the flashdrive



</section>


<section markdown="1">

# Initial Setup
---

### With Windows
- Install Windows (if you haven't already) before you install any linux operating systems as it is easiest to do in this order
- Next, boot a flashdrive containing one of the easier to use distributions (Ubuntu/Mint)
- Open GParted (partitioning software program)
- If you prefer Windows programs, you can also use Windows Disk Managament (default Windows program)

### Without Windows
- Boot a flashdrive containing one of the easier to use distributions (Ubuntu/Mint)
- Open GParted (partitioning software program)

</section>


<section markdown="1">

# Partitioning
---

### With Windows
- Windows will initially come with 2-3 partitions (recovery partition isn't always there)
- Each of these partitions are primary partitions so you will want to create a logical partition for you linux OS's
- Start by shrinking your main Windows partition (C:// drive, largest partition) to create space for linux
- Go ahead and write this change (makes debugging errors easier if any arise)

|EFI (FAT32) (~100MB)|Windows Recovery (NTFS) (~500MB)|Windows (NTFS) (~60+GB)|Logical Partition (~60+GB)|
|--------------------|--------------------------------|-----------------------|--------------------------|

- Within the logical partition, create a swap space the size of your RAM
- Next, create `Ext4` drives in the logical partition for each of the linux operating systems you want to install
- If you want to create a shared home partition (read more on the next slide) create another `Ext4` partition and set the mount point to `/home`

|Swap Space (~8-16GB)|Linux OS 1 (~20+GB)|Linux OS 2 (~20+GB)|Linux OS 3... (~20+GB)|Home Partition (~20+GB)|
|--------------------|-------------------|-------------------|----------------------|-----------------------|

### Without Windows
- 

|EFI(FAT32)(~100MB)|Windows Recovery(NTFS)(~500MB)|Windows(NTFS)(~60+GB)|Logical Partition(~60+GB)|
|------------------|------------------------------|---------------------|-------------------------|


</section>


<section markdown="1">

# Shared Home Partition
---

- Linux operating systems can share the same home partition (usually wrapped up in the operating system partition)
- This tends to work best with similar operating systems (Ubuntu and Mint)
- This won't work with Windows although you can still access your Windows data from any linux distribution
- I very much enjoy using a shared home partiton as I don't have to think about where my data is when I load a different operating system
- To do so, simply create another `Ext4` partition and set mount point to `/home`
- With each subsequent distribution, be select the home partition you made and set mount point to `/home`

</section>


<section markdown="1">

# Ending Notes
---
- You can use Yumi-boot or another equivalent to install several distros to one flashdrive (you'll need more than 4GB)
- Enjoy your new multi-boot system

</section>


