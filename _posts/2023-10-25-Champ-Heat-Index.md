---
layout: post
title: Champion Heat Index
date: 2023-10-25 12:00
tags: sports
category: Sports
thumbnail: ../blog/horseshoe.jpg
---

<style>
    .nation {
        fill: #666;
    }
    .states {
        fill: none;
        stroke: #fff;
        stroke-linejoin: round;
    }
    .hexagon {
        stroke: #fff;
    }
</style>

<script src="/assets/js/d3-v7.js"></script>
<script src="/assets/js/d3-hexbin-v0.2.js"></script>
<script src="/assets/js/topojson-v2.js"></script>

# Champion Heat Index

So this is a fun little idea thats been noodling around, I was curious where the best place to live is geographically to see pro sports championships. Obviously New York and Los Angeles have literally double the number of teams as anyone else but thats not the point, I just want to know where the hottest sports cities are...

<br>

I wanted a championship to always provide a city with some score, albeit with more recent ones counting for more, so I decide on a simple inversion of years since championship. So the current champions in any sport will get a score of `1 / 1 = 1` while a championship 50 years ago would provide `1 / 50 = 0.02` points to a city's heat index. Stil counts for something, it will always be greater than `0` but you can see how strong the receny bias is.

<br>

This quickly divulged into figuring out which city is the current pro sports champion based the combined scores of all pro sports championships in each city. A champion of champions if you will. Spoilers, as of writing this its currently `Los Angeles` with a score of `3.303`.

<br>

Numbers are fun, but the whole goal is to look at geography and see where I need to move to. I dusted off the trusty old D3 (now on version 7!) and mapped out the scores. Also, soooorry Canada, your data isn't in the Alber's topographical map I used...

<br>

The redder the better, and Los Angeles sticks out like a sore thumb. The East Coast Titans of New York and Boston perpetual remain high with some out-in-the-plains cities overperforming recently. The midwest fascinated me as well, because while there aren't any super hot cities, they are a lot of champions throughout history in the rust belt.

<div id="champ-map"></div>

Now to break down the data further. This is a chart of every city that has ever won a championship and the current points distribution across the five major sports. Keep in mind that a current year champion in a sport will get 1 full point, so you can easily pick out the current winners (Las Vegas in hockey, Denver in basketball).

<br>

I found it interesting that the only cities to have won in every sport are New York, Los Angeles, Chicago, and DC - although Denver, Boston, Toronto, and St. Louis are quite close. It also tickles me that New York has such a high baseball score despite not having won a world series since the 2009 Yankees...

<div id="champ-index"></div>

Finally, I thought it would be interesting to see historically who has held the crown of Pro sports champion, so I ran the calculations for each year.

<br>

You can really see some sports eras in the data - the Yankees multi-decade chokehold on baseball, the 60's Boston Celtics, and the recent dominance of Los Angeles across a number of sports. Of course you would expect to see New York and Los Angeles on top most years but the occasional generational dynasty in a smaller city has made it to the top.

<br>

If your city was currently champion in every sport, you would of course have a minimum score of 5, but no city has ever achieved that. New York's `4.469` in 1955 is the peak anyone has accomplished, all the more impressive given that soccer and football weren't pro enough yet for my data.

<br>

In recent times, Los Angeles has seen a number of spikes with a peak during the Shaq-Kobe Laker era of `4.380` in 2002. Los Angeles has really done well across the board in the modern age, compared to New York's Bronx-Bombing to the top.

<div id="champ-history"></div>

<script>
var wiw = document.getElementsByClassName("post-content")[0].offsetWidth;
var wih = window.innerHeight - 200;

const margin = {top: 30, right: 30, bottom: 130, left: 40};
const width = wiw - margin.left - margin.right;
const height = wih - margin.top - margin.bottom;

// CHAMP MAP
const svg = d3.select("#champ-map")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", width*680/1000 + margin.top + margin.bottom)
        .attr("viewBox", "0 0 1000 680")
        .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

var color = d3.scaleSequential([3.5, 0], d3.interpolateSpectral);

var hexbin = d3.hexbin()
    .extent([[0, 0], [width, height]])
    .radius(10);

var radius = d3.scaleSqrt()
    .domain([0, 12])
    .range([0, 10]);

var projection = d3.geoAlbersUsa()
    .scale(1280)
    .translate([480, 300]);

var path = d3.geoPath();

const us = d3.json("/assets/js/us-10m-v1.json");
const walmarts = d3.csv("/assets/js/champ-heat-map.csv", function typeWalmart(d) {
    var p = projection(d);
    d[0] = p[0];
    d[1] = p[1];
    return d;
});

Promise.all([us, walmarts]).then((values) => {
    svg.append("path")
        .datum(topojson.feature(values[0], values[0].objects.nation))
        .attr("class", "nation")
        .attr("color", "green")
        .attr("d", path);

    svg.append("path")
        .datum(topojson.mesh(values[0], values[0].objects.states, function(a, b) { return a !== b; }))
        .attr("class", "states")
        .attr("d", path);

    svg.append("g")
        .attr("class", "hexagon")
        .selectAll("path")
        .data(hexbin(values[1]).sort(function(a, b) { return b.length - a.length; }))
        .enter()
            .append("path")
                .attr("d", function(d) { return hexbin.hexagon(radius(12)); })
                .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; })
                .attr("fill", function(d) { return color(d[0].Score); });
})

// CHAMP INDEX
const cisvg = d3.select("#champ-index")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

d3.csv("/assets/js/champ-heat-index.csv").then(function(data) {
    const subgroups = data.columns.slice(2)
    const groups = data.map(d => (d.City))

    const x = d3.scaleBand()
        .range([0, width])
        .domain(groups)
        .padding([0.2]);

    const y = d3.scaleLinear()
        .domain([0, 5])
        .range([height, 0]);

    const color = d3.scaleOrdinal()
        .domain(subgroups)
        .range(["purple", "blue", "green", "orange", "red"])

    const stackedData = d3.stack()
        .keys(subgroups)
        (data)

    cisvg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x).tickSizeOuter(0))
        .selectAll("text")
        .attr("transform", "translate(-16,8) rotate(-90)")
        .style("font-family", "Century Gothic, sans-serif")
        .style("font-size", "16px")
        .style("text-anchor", "end");

    cisvg.append("g")
        .call(d3.axisLeft(y))
        .style("font-family", "Century Gothic, sans-serif")
        .style("font-size", "16px");

    cisvg.append("g")
        .selectAll("g")
        .data(stackedData)
        .join("g")
            .attr("fill", d => color(d.key))
            .selectAll("rect")
            .data(d => d)
            .join("rect")
                .attr("x", d => x(d.data.City))
                .attr("y", d => y(d[1]))
                .attr("width", x.bandwidth())
                .attr("height", d => y(d[0]) - y(d[1]))

    cisvg.append('g')
        .attr('class', 'y axis-grid')
        .call(d3.axisLeft(y).tickSize(-width).tickFormat('').ticks(10))
        .style("color", "white")
        .attr("stroke-width", "2px");

    cisvg.append("rect").attr("x", 20).attr("y", 20).attr("width", 110).attr("height", 180).style("fill", "white")
    cisvg.append("circle").attr("cx", 50).attr("cy", 50).attr("r", 10).style("fill", "red")
    cisvg.append("circle").attr("cx", 50).attr("cy", 80).attr("r", 10).style("fill", "orange")
    cisvg.append("circle").attr("cx", 50).attr("cy", 110).attr("r", 10).style("fill", "green")
    cisvg.append("circle").attr("cx", 50).attr("cy", 140).attr("r", 10).style("fill", "blue")
    cisvg.append("circle").attr("cx", 50).attr("cy", 170).attr("r", 10).style("fill", "purple")
    cisvg.append("text").attr("x", 65).attr("y", 57).text("NHL").style("font-size", "20px").style("font-family", "Century Gothic, sans-serif")
    cisvg.append("text").attr("x", 65).attr("y", 87).text("MLS").style("font-size", "20px").style("font-family", "Century Gothic, sans-serif")
    cisvg.append("text").attr("x", 65).attr("y", 117).text("NBA").style("font-size", "20px").style("font-family", "Century Gothic, sans-serif")
    cisvg.append("text").attr("x", 65).attr("y", 147).text("NFL").style("font-size", "20px").style("font-family", "Century Gothic, sans-serif")
    cisvg.append("text").attr("x", 65).attr("y", 177).text("MLB").style("font-size", "20px").style("font-family", "Century Gothic, sans-serif")
})

// CHAMP HISTORY
const chsvg = d3.select("#champ-history")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

d3.csv("/assets/js/champ-heat-history.csv").then(function(data) {
    const x = d3.scaleBand()
        .range([0, width])
        .domain(data.map(d => d.Year))
        .padding(0.2);

    const y = d3.scaleLinear()
        .domain([0, 5])
        .range([height, 0]);

    chsvg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(x).tickSizeOuter(0))
        .selectAll("text")
        .style("display", function(x){
            if (x % 2 == 1) { return "none" }
        })
        .attr("transform", "translate(-16,8) rotate(-90)")
        .style("font-family", "Century Gothic, sans-serif")
        .style("font-size", "16px")
        .style("text-anchor", "end");

    chsvg.append("g")
        .call(d3.axisLeft(y))
        .style("font-family", "Century Gothic, sans-serif")
        .style("font-size", "16px");

    chsvg.selectAll("mybar")
        .data(data)
        .join("rect")
        .attr("x", d => x(d.Year))
        .attr("y", d => y(d.Score))
        .attr("width", x.bandwidth())
        .attr("height", d => height - y(d.Score))
        .style("fill", function(d){
            if (d.City == "Boston") { return "red" }
            else if (d.City == "New York") { return "orange" }
            else if (d.City == "Philadelphia") { return "forestgreen" }
            else if (d.City == "Chicago") { return "lightblue" }
            else if (d.City == "Los Angeles") { return "blue" }
            else if (d.City == "Montreal") { return "purple" }
            else { return "gray" }
        })

    chsvg.append('g')
        .attr('class', 'y axis-grid')
        .call(d3.axisLeft(y).tickSize(-width).tickFormat('').ticks(10))
        .style("color", "white")
        .attr("stroke-width", "2px");

    chsvg.append("rect").attr("x", 20).attr("y", 20).attr("width", 175).attr("height", 240).style("fill", "white")
    chsvg.append("circle").attr("cx", 50).attr("cy", 50).attr("r", 10).style("fill", "red")
    chsvg.append("circle").attr("cx", 50).attr("cy", 80).attr("r", 10).style("fill", "orange")
    chsvg.append("circle").attr("cx", 50).attr("cy", 110).attr("r", 10).style("fill", "forestgreen")
    chsvg.append("circle").attr("cx", 50).attr("cy", 140).attr("r", 10).style("fill", "lightblue")
    chsvg.append("circle").attr("cx", 50).attr("cy", 170).attr("r", 10).style("fill", "blue")
    chsvg.append("circle").attr("cx", 50).attr("cy", 200).attr("r", 10).style("fill", "purple")
    chsvg.append("circle").attr("cx", 50).attr("cy", 230).attr("r", 10).style("fill", "gray")
    chsvg.append("text").attr("x", 65).attr("y", 57).text("Boston").style("font-size", "20px").style("font-family", "Century Gothic, sans-serif")
    chsvg.append("text").attr("x", 65).attr("y", 87).text("New York").style("font-size", "20px").style("font-family", "Century Gothic, sans-serif")
    chsvg.append("text").attr("x", 65).attr("y", 117).text("Philadelphia").style("font-size", "20px").style("font-family", "Century Gothic, sans-serif")
    chsvg.append("text").attr("x", 65).attr("y", 147).text("Chicago").style("font-size", "20px").style("font-family", "Century Gothic, sans-serif")
    chsvg.append("text").attr("x", 65).attr("y", 177).text("Los Angeles").style("font-size", "20px").style("font-family", "Century Gothic, sans-serif")
    chsvg.append("text").attr("x", 65).attr("y", 207).text("Montreal").style("font-size", "20px").style("font-family", "Century Gothic, sans-serif")
    chsvg.append("text").attr("x", 65).attr("y", 237).text("Other").style("font-size", "20px").style("font-family", "Century Gothic, sans-serif")
})
</script>

### Parsed Data
Should anyone care to spot check my data :)

<div class="scroll-table" markdown="1">

| Year | MLB | NFL | NBA | MLS | NHL |
| ---- | --- | --- | --- | --- | --- |
| 1903 | Boston |  |  |  |  |
| 1904 |  |  |  |  |  |
| 1905 | New York |  |  |  |  |
| 1906 | Chicago |  |  |  |  |
| 1907 | Chicago |  |  |  |  |
| 1908 | Chicago |  |  |  |  |
| 1909 | Pittsburg |  |  |  |  |
| 1910 | Philadelphia |  |  |  |  |
| 1911 | Philadelphia |  |  |  |  |
| 1912 | Boston |  |  |  |  |
| 1913 | Philadelphia |  |  |  |  |
| 1914 | Boston |  |  |  |  |
| 1915 | Boston |  |  |  |  |
| 1916 | Boston |  |  |  |  |
| 1917 | Chicago |  |  |  |  |
| 1918 | Boston |  |  |  |  |
| 1919 | Cincinatti |  |  |  |  |
| 1920 | Cleveland |  |  |  |  |
| 1921 | New York |  |  |  |  |
| 1922 | New York |  |  |  |  |
| 1923 | New York |  |  |  |  |
| 1924 | DC |  |  |  |  |
| 1925 | Pittsburg |  |  |  |  |
| 1926 | St. Louis |  |  |  |  |
| 1927 | New York |  |  |  | Ottawa |
| 1928 | New York |  |  |  | New York |
| 1929 | Philadelphia |  |  |  | Boston |
| 1930 | Philadelphia |  |  |  | Montreal |
| 1931 | St. Louis |  |  |  | Montreal |
| 1932 | New York |  |  |  | Toronto |
| 1933 | New York |  |  |  | New York |
| 1934 | St. Louis |  |  |  | Chicago |
| 1935 | Detroit |  |  |  | Montreal |
| 1936 | New York |  |  |  | Detroit |
| 1937 | New York |  |  |  | Detroit |
| 1938 | New York |  |  |  | Chicago |
| 1939 | New York |  |  |  | Boston |
| 1940 | Cincinatti |  |  |  | New York |
| 1941 | New York |  |  |  | Boston |
| 1942 | St. Louis |  |  |  | Toronto |
| 1943 | New York |  |  |  | Detroit |
| 1944 | St. Louis |  |  |  | Montreal |
| 1945 | Detroit |  |  |  | Toronto |
| 1946 | St. Louis |  |  |  | Montreal |
| 1947 | New York |  | Philadelphia |  | Toronto |
| 1948 | Cleveland |  | Baltimore |  | Toronto |
| 1949 | New York |  | Minneapolis |  | Toronto |
| 1950 | New York |  | Minneapolis |  | Detroit |
| 1951 | New York |  | Rochester |  | Toronto |
| 1952 | New York |  | Minneapolis |  | Detroit |
| 1953 | New York |  | Minneapolis |  | Montreal |
| 1954 | New York |  | Minneapolis |  | Detroit |
| 1955 | New York |  | New York |  | Detroit |
| 1956 | New York |  | Philadelphia |  | Montreal |
| 1957 | Milwaukee |  | Boston |  | Montreal |
| 1958 | New York |  | St. Louis |  | Montreal |
| 1959 | Los Angeles |  | Boston |  | Montreal |
| 1960 | Pittsburg |  | Boston |  | Montreal |
| 1961 | New York |  | Boston |  | Chicago |
| 1962 | New York |  | Boston |  | Toronto |
| 1963 | Los Angeles |  | Boston |  | Toronto |
| 1964 | St. Louis |  | Boston |  | Toronto |
| 1965 | Los Angeles |  | Boston |  | Montreal |
| 1966 | Baltimore |  | Boston |  | Montreal |
| 1967 | St. Louis | Green Bay | Philadelphia |  | Toronto |
| 1968 | Detroit | Green Bay | Boston |  | Montreal |
| 1969 | New York | New York | Boston |  | Montreal |
| 1970 | Baltimore | Kansas City | New York |  | Boston |
| 1971 | Pittsburg | Baltimore | Milwaukee |  | Montreal |
| 1972 | Oakland | Dallas | Los Angeles |  | Boston |
| 1973 | Oakland | Miami | New York |  | Montreal |
| 1974 | Oakland | Miami | Boston |  | Philadelphia |
| 1975 | Cincinatti | Pittsburg | Oakland |  | Philadelphia |
| 1976 | Cincinatti | Pittsburg | Boston |  | Montreal |
| 1977 | New York | Oakland | Portland |  | Montreal |
| 1978 | New York | Dallas | DC |  | Montreal |
| 1979 | Pittsburg | Pittsburg | Seattle |  | Montreal |
| 1980 | Philadelphia | Pittsburg | Los Angeles |  | New York |
| 1981 | Los Angeles | Oakland | Boston |  | New York |
| 1982 | St. Louis | San Francisco | Los Angeles |  | New York |
| 1983 | Baltimore | DC | Philadelphia |  | New York |
| 1984 | Detroit | Los Angeles | Boston |  | Edmonton |
| 1985 | Kansas City | San Francisco | Los Angeles |  | Edmonton |
| 1986 | New York | Chicago | Boston |  | Montreal |
| 1987 | Minneapolis | New York | Los Angeles |  | Edmonton |
| 1988 | Los Angeles | DC | Los Angeles |  | Edmonton |
| 1989 | Oakland | San Francisco | Detroit |  | Calgary |
| 1990 | Cincinatti | San Francisco | Detroit |  | Edmonton |
| 1991 | Minneapolis | New York | Chicago |  | Pittsburg |
| 1992 | Toronto | DC | Chicago |  | Pittsburg |
| 1993 | Toronto | Dallas | Chicago |  | Montreal |
| 1994 |  | Dallas | Houston |  | New York |
| 1995 | Atlanta | San Francisco | Houston |  | Newark |
| 1996 | New York | Dallas | Chicago | DC | Denver |
| 1997 | Miami | Green Bay | Chicago | DC | Detroit |
| 1998 | New York | Denver | Chicago | Chicago | Detroit |
| 1999 | New York | Denver | San Antonio | DC | Dallas |
| 2000 | New York | St. Louis | Los Angeles | Kansas City | Newark |
| 2001 | Phoenix | Baltimore | Los Angeles | San Jose | Denver |
| 2002 | Los Angeles | Boston | Los Angeles | Los Angeles | Detroit |
| 2003 | Miami | Tampa Bay | San Antonio | San Jose | Newark |
| 2004 | Boston | Boston | Detroit | DC | Tampa Bay |
| 2005 | Chicago | Boston | San Antonio | Los Angeles |  |
| 2006 | St. Louis | Pittsburg | Miami | Houston | Raleigh |
| 2007 | Boston | Indianapolis | San Antonio | Houston | Los Angeles |
| 2008 | Philadelphia | New York | Boston | Columbus | Detroit |
| 2009 | New York | Pittsburg | Los Angeles | Salt Lake City | Pittsburg |
| 2010 | San Francisco | New Orleans | Los Angeles | Denver | Chicago |
| 2011 | St. Louis | Green Bay | Dallas | Los Angeles | Boston |
| 2012 | San Francisco | New York | Miami | Los Angeles | Los Angeles |
| 2013 | Boston | Baltimore | Miami | Kansas City | Chicago |
| 2014 | San Francisco | Seattle | San Antonio | Los Angeles | Los Angeles |
| 2015 | Kansas City | Boston | Oakland | Portland | Chicago |
| 2016 | Chicago | Denver | Cleveland | Seattle | Pittsburg |
| 2017 | Houston | Boston | Oakland | Toronto | Pittsburg |
| 2018 | Boston | Philadelphia | Oakland | Atlanta | DC |
| 2019 | DC | Boston | Toronto | Seattle | St. Louis |
| 2020 | Los Angeles | Kansas City | Los Angeles | Columbus | Tampa Bay |
| 2021 | Atlanta | Tampa Bay | Milwaukee | New York | Tampa Bay |
| 2022 | Houston | Los Angeles | San Francisco | Los Angeles | Denver |
| 2023 |  | Kansas City | Denver |  | Las Vegas |

</div>

### Sources
- MLB
  - Championship Inaugural Year: 1903
  - [Wikipedia World Series Champions](https://en.wikipedia.org/wiki/List_of_World_Series_champions)
- NFL
  - Championship Inaugural Year: 1967
  - [Wikipedia Super Bowl Champions](https://en.wikipedia.org/wiki/List_of_Super_Bowl_champions)
- NBA
  - Championship Inaugural Year: 1947
  - [Wikipedia NBA Champions](https://en.wikipedia.org/wiki/List_of_NBA_champions)
- MLS
  - Championship Inaugural Year: 1996
  - [Wikipedia MLS Cup Champions](https://en.wikipedia.org/wiki/MLS_Cup)
- NHL
  - Championship Inaugural Year: 1927
  - [Wikipedia Stanley CUp Champions](https://en.wikipedia.org/wiki/List_of_Stanley_Cup_champions)
