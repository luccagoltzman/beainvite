(function () {
  var body = document.body;
  var convite = document.querySelector(".convite");
  var PAUSA = 100;
  var REDUZ = 1900;
  var finalizado = false;

  if (!convite || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    body.classList.remove("intro-cheia");
    body.classList.add("intro-concluida", "intro-finalizada");
    return;
  }

  function finalizarIntro() {
    if (finalizado) return;
    finalizado = true;

    var first = convite.getBoundingClientRect();

    body.classList.remove("intro-reduzindo");
    body.classList.add("intro-concluida");

    var last = convite.getBoundingClientRect();
    var dx = first.left - last.left;
    var dy = first.top - last.top;
    var scale = first.width / last.width;

    if (Math.abs(dx) < 2 && Math.abs(dy) < 2 && Math.abs(scale - 1) < 0.02) {
      body.classList.add("intro-finalizada");
      return;
    }

    convite.style.transformOrigin = "top left";
    convite.style.transform =
      "translate(" + dx + "px, " + dy + "px) scale(" + scale + ")";

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        convite.style.transition =
          "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)";
        convite.style.transform = "";
      });
    });

    convite.addEventListener("transitionend", function onMoveEnd(e) {
      if (e.propertyName !== "transform") return;
      convite.removeEventListener("transitionend", onMoveEnd);
      convite.style.transition = "";
      convite.style.transformOrigin = "";
      body.classList.add("intro-finalizada");
    });
  }

  setTimeout(function () {
    body.classList.remove("intro-cheia");
    body.classList.add("intro-reduzindo");

    var resizeDone = false;

    function onResizeEnd(e) {
      if (e.propertyName !== "width" && e.propertyName !== "height") return;
      if (resizeDone) return;
      resizeDone = true;
      convite.removeEventListener("transitionend", onResizeEnd);
      finalizarIntro();
    }

    convite.addEventListener("transitionend", onResizeEnd);
    setTimeout(finalizarIntro, REDUZ + 150);
  }, PAUSA);
})();
