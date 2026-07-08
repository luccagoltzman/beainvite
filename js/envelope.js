(function () {
  var btn = document.getElementById("abrir-envelope");
  var conteudo = document.querySelector(".pagina-envelope__conteudo");
  var abrindo = false;

  btn.addEventListener("click", function () {
    if (abrindo) return;
    abrindo = true;

    btn.classList.add("is-opening");
    btn.disabled = true;
    conteudo.classList.add("is-fading");

    setTimeout(function () {
      window.location.href = "convite.html";
    }, 1100);
  });
})();
