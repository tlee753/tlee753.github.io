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
- Etcher: utility for burning ISO files to flash drives
- Live CD: Bootable linux operating system on the flashdrive once it has been burnt
- Drive: a physical piece of equipment that has memory and can store files (hard drive, solid state drive, flash drive, sd card...)
- Partition: a virtual block of memory on a drive, there are several types of partitions
- GParted: common linux program used to manage partitions
- Disk Management: Windows utility used to manage partitions
- Grub (v2): The common linux boot manager (code that selects which OS to boot)

### Partition types
- Primary: You can only have 4 of these on a drive
- Logical: A primary partition that allows you to divide it into as many new partitions as space allows
- Extended: ^^

</section>


<section markdown="1">

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

</section>

<section markdown="1">

### GT Software Mirror
- Just in case you happen to be near Atlanta :)
- [Mirror](http://www.gtlib.gatech.edu/)

### ISO Writing Software
- Etcher is a cross platform (Windows, MAC, Linux) software utility to write ISO files (operating system images) to external media (flashdrives)
- [Etcher](https://etcher.io)
- You will need to either have an operating system installed already (probably Windows) or use another computer to burn an ISO to the flashdrive
- For each Linux OS you will have to burn the corresponding ISO to the flashdrive

</section>

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
- I personally recommend running the default installation (erase all and install) as a sort of base OS in case something goes wrong with the logical partition but you don't need to
- If you choose to install a base linux OS, its home partition will be separate from the rest if you choose to create a separate home partition (again, good in the event something goes wrong)
- Open GParted either from the Live CD or your recently installed OS (partitioning software program)

</section>


<section markdown="1">

<section markdown="1">
# Partitioning
---

### With Windows
- Windows will initially come with 2-3 partitions (recovery partition isn't always there)
- Each of these partitions are primary partitions so you will want to create a logical partition for you linux OS's
- Start by shrinking your main Windows partition (C:// drive, largest partition) to create space for linux
- Go ahead and write this change (makes debugging errors easier if any arise)

|Drive Overview|
|--------------|
|EFI (FAT32) (~100MB)|Windows Recovery (NTFS) (~500MB)|Windows (NTFS) (~60+GB)|Logical Partition (~60+GB)|
|--------------------|--------------------------------|-----------------------|--------------------------|

- Within the logical partition, create a `Swap Space` the size of your RAM
- Next, create `Ext4` drives in the logical partition for each of the linux operating systems you want to install
- If you want to create a shared home partition (read more on the next slide) create another `Ext4` partition and set the mount point to `/home`

|Logical Partition View|
|----------------------|
|Swap Space (~8-16GB)|Linux OS 1 (Ext4) (~20+GB)|Linux OS 2 (Ext4) (~20+GB)|Linux OS 3... (Ext4) (~20+GB)|Home Partition (Ext4) (~20+GB)|
|--------------------|--------------------------|--------------------------|-----------------------------|------------------------------|

</section>

<section markdown="1">

### Without Windows
- If you didn't install a base linux operating system you won't have the two primary partitions Swap Space and Linux OS 1
- The steps are basically the same as with Windows at this point, you simply are creating a logical partition and allocating space for each additional linux OS
- Shrink your main OS partition to make space for more distros
- Create a logical partition in the newly created space
- Go ahead and write this change (makes debugging errors easier if any arise)

|Drive Overview|
|--------------|
|EFI (FAT32) (~100MB)|Swap Space (~8-16GB)|Linux OS 1 (Ext4) (~20+GB)|Logical Partition (~60+GB)|
|--------------------|--------------------|--------------------------|--------------------------|

- You don't need to create additional `Swap Space` as you already have a partition made
- Create `Ext4` drives in the logical partition for each of the linux operating systems you want to install
- If you want to create a shared home partition (read more on the next slide) create another `Ext4` partition and set the mount point to `/home`

|Logical Partition View|
|----------------------|
|Linux OS 2 (Ext4) (~20+GB)|Linux OS 3 (Ext4) (~20+GB)|Linux OS 4... (Ext4) (~20+GB)|Optional Home Partition (Ext4) (~20+GB)|
|--------------------------|--------------------------|-----------------------------|---------------------------------------|

</section>

</section>


<section markdown="1">

# Shared Home Partition
---

- Linux operating systems can share the same home partition (usually wrapped up in the operating system partition)
- This tends to work best with similar operating systems (Ubuntu and Mint)
- This won't work with Windows although you can still access your Windows data from any linux distribution
- I very much enjoy using a shared home partiton as I don't have to think about where my data is when I load a different operating system
- To do so, simply create another `Ext4` partition and remember to set the mount point to `/home` during installation
- I tend to put this partition at the end so I can use the rest of the available space on my drive for home (personal data being the biggest variable in terms of storage on a PC)
- With each subsequent distribution installation, select the home partition you made and set mount point to `/home`

</section>


<section markdown="1">

# Installation
---

- First, write the ISO file to the flashdrive using Etcher and then boot the Live CD
- Upon installation of a linux distribution, you will arrive at a menu where you can select how/where you want to install the distro
- After the initial linux install (only if you followed the "without Windows" tutorial), select the `Advanced Options` option
- Your partitions have already been made at this point, you just have to select the proper partitions and install (it helps to write down what is going where)

### Partition Selection
1. Select the `EFI` partition and use as `EFI Boot`, this will override the initial Windows boot manager with grub if you had Windows to start
2. Select the `Swap Space` partition and choose to use it as `Swap Space` if the distro hasn't already figured it out2
3. Next, select the `Ext4` partition you want to install your OS on and set mount point as `/`
4. Finally, if you opted to create a shared home partition select the partition and set the mount point as `/home`

</section>


<section markdown="1">

# Ending Notes
---
- You can use Yumi-boot or another equivalent to install several distros to one flashdrive (you'll need more than 4GB)
- Arch (and some other distro's like Gentoo) is bit more difficult to install correctly, you need to follow an Arch Installation tutorial and think carefully at each step
- run `sudo update-grub` in a linux terminal to detect new operating systems if it doesn't do so for you (typical for Arch)
- Enjoy your new multi-boot system

</section>


