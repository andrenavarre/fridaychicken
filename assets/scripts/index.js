window.onload = function(){
  var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    autoplay: true,
    path: 'data.json'
  })
}