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

<button onclick="playSound('c-mon')">C'Mon</button>
<button onclick="playSound('cut-that-out')">Cut That Out</button>
<button onclick="playSound('woo-hoo')">Woo Hoo</button>
<button onclick="playSound('foul')">Foul</button>
<button onclick="playSound('brian')">Brian</button>
<button onclick="playSound('andrew')">Andrew</button>
<button onclick="playSound('bob')">Bob</button>
<button onclick="playSound('ya')">Ya</button>
<button onclick="playSound('no')">No</button>
<button onclick="playSound('more')">More</button>
<button onclick="playSound('hit-the-ball')">Hit the Ball</button>
<button onclick="playSound('good-job')">Good Job</button>
<button onclick="playSound('yeet')">Yeet</button>
<button onclick="playSound('go')">Go</button>
<button onclick="playSound('get-that')">Get That</button>

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