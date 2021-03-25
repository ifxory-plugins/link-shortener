function navigateTopFrame(url) {
  var win = window.open();
  win.document.write('<iframe src="' + url  + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
  window.open('', '_self', '');
  window.close();
}
// navigateTopFrame("https://vk.com/app7794757#/?post=547927697");
window.location.replace("https://vk.com/app7794757#/?post=547927697");
