---
layout: default
title: Chess Visualizer
date: 2017-09-06 8:00:00
permalink: "/chess-visualizer/"
---

<section class="portfolio-page" style="background-image: url(/assets/img/portfolio/chess-visualizer/background.jpg);">

<div class="portfolio-content" markdown="1">

### Chess Visualizer

I have been fairly interested in studying alternative methods for deciphering 
the complexities of chess, and one of my more interesting ideas was to develop 
a visual assistant to portray the engagement of each individual piece. I have 
begun doing so first with a pictoral representation to test my hypothesis and 
the validity of the program. I did so using a key position in Fischer's immortal 
versus Bryne played in 1956. The position represents a potential queen sacrifice 
by Fischer and the net results of doing so.

![Midgame](/assets/img/portfolio/chess-visualizer/midgame.jpg)

The program would essentially works as follows:

- if a piece engages a square than it adds a point to that square in favor of its respective color (+1 for white, -1 for black)
- green squares indicate squares that white pieces control, the stronger the green the stronger white's control
- red squares similarly represent a black controlled square
- if no pieces engage a square it remains its default color of white or grey (light or dark squares)
- if pieces from both sides engage a square but it remains neutral (score of 0 still), in other words if a square is under tension, it is colored yellow for illustration purposes

As you can see from this position, Bryne might have an attack on the queen with 
an opportunity to capture (9 points in chess scoring), but he also has an undefended 
bishop (3 points) and undefended rook (5 points). With that in mind, and with the 
further discovery that the bishop can be captured with check, the unprotected black 
knight moving out of danger to capture the rook, and the black queen being protected, 
its not quite the queen exchange it seemed.

<br>

![Endgame](/assets/img/portfolio/chess-visualizer/endgame.jpg)

<br>

Check mates are also interesting to look at as the essence of mate is having an 
unblockable, uncapturable check with no escape squares. Here is the end result 
of Fischer's brilliance. You can clearly see how powerful white's queen is, yet 
the heat map indicates how desolate and useless it is in its current position.

<br>

### Program Backend

I have written the backend code for such a program in Java, which is currently 
in terminal visualization mode. The script accepts a Forsyth-Edwards Notation 
(FEN) string which is then mapped and square values are calculated. For the 
future program, a pgn file (chess game file) will be parsed or developed in a GUI 
and the resulting fen will be sent to the backend for deciphering and illustration.

<br>

[Chess Visualizer Github](https://github.com/tlee753/chess-visualizer)

<br>

### Program Frontend

I have a decent knowledge of Java FX, my favorite GUI development program and am 
increasing my knowledge daily so as to fully implement the program. I will 
definitely be posting my progress to Github so check back soon!

<br>

[Full Program Alpha Build](/assets/docs/Chess-1.1-1.8.jar)

</div>

</section>