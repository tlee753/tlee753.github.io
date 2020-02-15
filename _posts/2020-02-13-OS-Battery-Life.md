---
layout: post
title: OS Battery Life 
date: 2020-02-13 12:00
tags: tech
category: Tech
thumbnail: ../blog/os-battery-life.jpg
---


# OS Battery Life
I've seen plenty of people on the internet discussing battery life savings by operating system, but its always by wattage or how the battery life "feels". Well, thats great an all but here in the real world, what matters is the time you can spend using the laptop until the battery gives out and you forgot to save your presentation.

<br>

So anyways, I've been wanting to test this for awhile and finally got a blank laptop to upgrade for someone. In return for an ssd, I got a week to flash operating systems on the little bugger, charge it up, and run it into the ground.

<br>

### Testing Methodology

I decided to run two tests per operating system, one with it idling on the desktop until it dies and one rather glorious one where I load up ["10 hours of drinking water"](https://www.youtube.com/watch?v=-EZr-JdzeoI) on Youtube to see how much torture the OS can endure.

<br>

I kept everything as stock as possible for each OS, stock browsers (Edge on Windows, Firefox on Ubuntu/Arch), default wallpaper, connected to the same WiFi - only really changing the power settings such that the screen/system would stay on the whole time. I know there are things out there like `TLP` for Linux but I wanted to keep it simple. You can always go mad tuning things but this is just curiousity test to me to see if Linux or a lighter distro would show evidence of providing some extra juice.

| Laptop | Toshiba Portege R705-P35 |

<br>

### Ugly Table

| OS | Idle | Youtube |
| ---- | ---- | ------- |
| Windows | 6:54:12 | 3:21:11 |
| Ubuntu | 7:20:29 | 2:54:55 |
| Arch + i3 | 7:15:19 | 3:19:16 |


### Beautiful D3 Bar Graph
<script src="//d3js.org/d3.v4.min.js"></script>
<div id="time-chart" style="margin: 0 auto; overflow-x: scroll;"></div>
<script>
var data = [{ "opersys": "Arch + i3 (Youtube)", "time": 3.32, "color": "#168fcb"}, { "opersys": "Arch + i3 (Idle)", "time": 7.25, "color": "#168fcb" }, { "opersys": "Ubuntu (YouTube)", "time": 2.92, "color": "#d84614" }, { "opersys": "Ubuntu (Idle)", "time": 7.33, "color": "#d84614" }, { "opersys": "Windows (YouTube)", "time": 3.35, "color": "#66ccfd" }, { "opersys": "Windows (Idle)", "time": 6.92, "color": "#66ccfd" }];
var margin = { top: 20, right: 20, bottom: 60, left: 160 },
    width = 960 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;
var y = d3.scaleBand()
    .range([height, 0])
    .padding(0.1);
var x = d3.scaleLinear()
    .range([0, width]);
var svg = d3.select("#time-chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
data.forEach(function (d) {
    d.time = +d.time;
});
x.domain([0, d3.max(data, function (d) { return d.time; })])
y.domain(data.map(function (d) { return d.opersys; }));
svg.selectAll(".bar")
    .data(data)
    .enter().append("rect")
    .attr("width", function (d) { return x(d.time); })
    .attr("y", function (d) { return y(d.opersys); })
    .attr("fill", function (d) { return d.color })
    .attr("height", y.bandwidth());
svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));
svg.append("g")
    .call(d3.axisLeft(y));
  svg.append("text")             
      .attr("transform",
            "translate(" + (width/2) + " ," + (height + margin.top + 20) + ")")
      .style("text-anchor", "middle")
      .text("Hours");
</script>

<br>

### Conclusion
I have to admit, as scientfic as I tried to be, there are still some variables at play. I controlled where the laptop sat relative to the WiFi, lowered the screen brightness all the way on every OS, and kept a reasonably similar temperature in the room, but without repeated trials and a device without mechanical parts (this one had a CPU fan), I really would only consider this a proof of concept (*shoutout Mythbusters*).

<br>

I thought for years that something super light like Arch + i3 windows manager would save battery life but alas it looks like the best thing to do is just lower your screen brightness, regardless of OS.

<br>