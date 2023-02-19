var boton = document.createElement("button");
boton.innerHTML = "CONTACTO";

var divContacto = document.getElementsByClassName("contacto")[0];
divContacto.appendChild(boton);

boton.addEventListener ("click", function() {
  window.location.href = "mailto:jrodri67@gmail.com";
});
