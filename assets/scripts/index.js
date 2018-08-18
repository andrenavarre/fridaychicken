window.onload = function(){
  var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'data.json'
  })
}