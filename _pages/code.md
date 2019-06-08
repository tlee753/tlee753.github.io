---
layout: post
title: Code
date: 2017-03-20 12:00:00
category: Utility
permalink: "/code/"
---

### Slack Dark Theme
- Append the following code to this file in Slack App on your system

`app.asar.unpacked/src/static/ssb-interop.js`

```js
document.addEventListener('DOMContentLoaded', function() {
 $.ajax({
   url: 'https://cdn.rawgit.com/laCour/slack-night-mode/master/css/raw/black.css',
   success: function(css) {
     $("<style></style>").appendTo('head').html(css);
   }
 });
});
```

### FFMPEG Command Line Trim Video
```bash
ffmpeg -ss 00:00:30 -i orginalfile -t 00:00:05 -vcodec copy -acodec copy newfile
```

