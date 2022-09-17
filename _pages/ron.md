---
layout: post
title: Ron Soundboard
date: 2020-06-06
permalink: "/ron/"
category: Misc
---

### Ron Soundboard

---

<div id="ron">

<button onclick="playSound('all-day-guy')">All Day Guy</button>
<button onclick="playSound('andrew')">Andrew</button>
<button onclick="playSound('ball')">Ball</button>
<button onclick="playSound('basketball')">Basketball</button>
<button onclick="playSound('bob')">Bob</button>
<button onclick="playSound('brandon')">Brandon</button>
<button onclick="playSound('brian')">Brian</button>
<button onclick="playSound('bubbles')">Bubbles</button>
<button onclick="playSound('c-mon')">C'Mon</button>
<button onclick="playSound('cavaliers')">Cavaliers</button>
<button onclick="playSound('dog')">Dog</button>
<button onclick="playSound('foul')">Foul</button>
<button onclick="playSound('get-down')">Get Down</button>
<button onclick="playSound('get-in-the-car')">Get in the Car</button>
<button onclick="playSound('get-that')">Get That</button>
<button onclick="playSound('go')">Go</button>
<button onclick="playSound('good-job')">Good Job</button>
<button onclick="playSound('hamburger')">Hamburger</button>
<button onclick="playSound('hit-the-ball')">Hit the Ball</button>
<button onclick="playSound('hot-dog')">Hot Dog</button>
<button onclick="playSound('indians')">Indians</button>
<button onclick="playSound('lets-go')">Let's Go</button>
<button onclick="playSound('more')">More</button>
<button onclick="playSound('no')">No</button>
<button onclick="playSound('oh-man')">Oh Man</button>
<button onclick="playSound('please')">Please</button>
<button onclick="playSound('robert')">Robert</button>
<button onclick="playSound('shoot-that')">Shoot That</button>
<button onclick="playSound('soccer')">Soccer</button>
<button onclick="playSound('stop-that')">Stop That</button>
<button onclick="playSound('tackle')">Tackle</button>
<button onclick="playSound('thank-you')">Thank You</button>
<button onclick="playSound('thats-it')">That's It</button>
<button onclick="playSound('tyler')">Tyler</button>
<button onclick="playSound('uh-oh')">Uh Oh</button>
<button onclick="playSound('what')">What</button>
<button onclick="playSound('woo-hoo')">Woo Hoo</button>
<button onclick="playSound('ya')">Ya</button>
<button onclick="playSound('yeet')">Yeet</button>
<button onclick="playSound('yes-sir')">Yes Sir</button>

<hr>

<button onclick="playSound('cut-that-out')">Cut That Out</button>

</div>


---
<br>

<script>
    const sound = new Audio();

    function playSound(filename) {
        console.log("Playing song: " + filename);
        sound.src = "/assets/audio/" + filename + ".mp3";
        sound.play();
    }
</script>
