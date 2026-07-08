var WhatsAppConvite = {
  numero: "5598985067570",

  mensagens: {
    confirmar:
      "Olá, Beatriz! Vi seu convite e gostaria de confirmar minha presença no baile de formatura.",
    duvida: "Olá, Beatriz! Tenho uma dúvida sobre o baile de formatura.",
    senha:
      "Olá, Beatriz! Gostaria de mais informações sobre a senha do baile de formatura.",
  },

  link: function (mensagem) {
    return (
      "https://wa.me/" +
      this.numero +
      "?text=" +
      encodeURIComponent(mensagem)
    );
  },
};

(function () {
  var botao = document.querySelector(".pagina-convite__botao");
  if (botao) {
    botao.href = WhatsAppConvite.link(WhatsAppConvite.mensagens.confirmar);
  }
})();
