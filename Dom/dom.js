function dodeliKlasu() {
  document.querySelector("ul:nth-of-type(2)").className = "backgroundColor ";
}
function selektujSveLi() {
  var l = document.querySelectorAll("li");

  for (var i = 0; i < l.length; i++) {
    l[i].className = "backgroundColor2 padding";
  }
}

function trecaLista() {
  var treci = document.querySelectorAll("ul:nth-of-type(3) li");
  for (var i = 0; i < treci.length; i++) {
    treci[i].className = "backgroundColor3 padding";
  }
}

dodeliKlasu();

selektujSveLi();

trecaLista();
