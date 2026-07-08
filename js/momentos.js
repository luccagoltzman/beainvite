var MOMENTOS_VIDEO = [
  {
    tempo: 0,
    titulo: "Tudo começa assim…",
    legenda: "O primeiro segundo já entrega o clima.",
  },
  {
    tempo: 1.5,
    titulo: "O momento exato",
    legenda: "Aqui é onde a mágica (ou o caos) acontece.",
  },
  {
    tempo: 3.0,
    titulo: "O final que ninguém esperava",
    legenda: "Pausa aqui se quiser ver de novo.",
  },
];

(function () {
  var video = document.getElementById("video-momentos");
  var grade = document.getElementById("momentos-grade");
  if (!video || !grade) return;

  function formatarTempo(segundos) {
    var min = Math.floor(segundos / 60);
    var seg = Math.floor(segundos % 60);
    var dec = Math.round((segundos % 1) * 10);
    if (dec > 0 && min === 0) {
      return "0:" + String(Math.floor(segundos)).padStart(2, "0") + "." + dec;
    }
    return String(min).padStart(2, "0") + ":" + String(seg).padStart(2, "0");
  }

  function irParaMomento(segundos, card) {
    video.currentTime = segundos;
    video.play();

    grade.querySelectorAll(".momento-card").forEach(function (c) {
      c.classList.remove("momento-card--ativo");
    });
    if (card) card.classList.add("momento-card--ativo");

    video.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  MOMENTOS_VIDEO.forEach(function (momento) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "momento-card";
    btn.innerHTML =
      '<p class="momento-card__tempo">' +
      formatarTempo(momento.tempo) +
      "</p>" +
      '<p class="momento-card__titulo">' +
      momento.titulo +
      "</p>" +
      '<p class="momento-card__legenda">' +
      momento.legenda +
      "</p>";

    btn.addEventListener("click", function () {
      irParaMomento(momento.tempo, btn);
    });

    grade.appendChild(btn);
  });

  video.addEventListener("loadedmetadata", function () {
    var duracao = video.duration;
    MOMENTOS_VIDEO.forEach(function (m, i) {
      if (m.tempo >= duracao && duracao > 0) {
        var cards = grade.querySelectorAll(".momento-card");
        if (cards[i]) cards[i].style.display = "none";
      }
    });
  });
})();
