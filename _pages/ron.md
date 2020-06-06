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

<button id="cmon">C'Mon</button>
<button>Cut That Out</button>
<button>Woo Hoo</button>
<button>Foul</button>
<button>Brian</button>
<button>Andrew</button>
<button>Bob</button>
<button>Ya</button>
<button>No</button>
<button>More</button>
<button>Hit the Ball</button>
<button>Good Job</button>
<button>C'Mon</button>

</div>

---
<br>

<script>
    const sound = new Audio();
    const button = document.getElementById("cmon");
    button.addEventListener("click", playSound);

    function playSound() {
        console.log("playing audio");
        sound.src = '/assets/audio/temp.mp3'
        sound.play()
    }
</script>