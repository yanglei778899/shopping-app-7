(function (win, doc) {
  if (!win.addEventListener) return;
  var html = document.documentElement;

  function setFont() {
    var cliWidth = html.clientWidth;
    if (cliWidth > 750) {
      cliWidth = 750;
    }
    html.style.fontSize = 100 * (cliWidth / 750) + "px";
  }
  win.addEventListener("resize", setFont, false)
  doc.addEventListener("DOMContentloaded", setFont, false)
})(window, document)