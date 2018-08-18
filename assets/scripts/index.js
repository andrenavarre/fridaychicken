var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'data.json'
  });

anim.addEventListener("enterFrame", function (animation) {
  if (animation.currentTime > (anim.totalFrames - 10)) {
     anim.pause();
  }
});