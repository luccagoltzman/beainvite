(function () {
  var WHATSAPP_DUVIDA = WhatsAppConvite.link(WhatsAppConvite.mensagens.duvida);
  var WHATSAPP_CONFIRMACAO = WhatsAppConvite.link(
    WhatsAppConvite.mensagens.confirmar
  );
  var WHATSAPP_SENHA = WhatsAppConvite.link(WhatsAppConvite.mensagens.senha);
  var MAPS =
    "https://www.google.com/maps?q=Av.+S%C3%A3o+Carlos,+04+-+Olho+D%27agua,+S%C3%A3o+Lu%C3%ADs+-+MA,+65065-420";

  var FAQ = [
    {
      pergunta: "Quando é o baile?",
      resposta:
        "O baile será no dia <strong>22 de agosto de 2026</strong>, um sábado. Anote na agenda!",
    },
    {
      pergunta: "Qual o horário?",
      resposta:
        "O horário ainda será confirmado. Assim que tivermos a informação, atualizaremos o convite. Qualquer dúvida, <a href=\"" +
        WHATSAPP_DUVIDA +
        '" target="_blank" rel="noopener noreferrer">fale conosco pelo WhatsApp</a>.',
    },
    {
      pergunta: "Onde será o evento?",
      resposta:
        'O evento será na <strong>Av. São Carlos, 04</strong>, bairro Olho D\'água, São Luís – MA. <a href="' +
        MAPS +
        '" target="_blank" rel="noopener noreferrer">Abrir no Google Maps</a>',
    },
    {
      pergunta: "Qual o traje?",
      resposta:
        "O traje solicitado é <strong>esporte fino</strong>. Vista-se com elegância para celebrar essa noite especial!",
    },
    {
      pergunta: "Qual o valor da senha?",
      resposta:
        "O valor da senha é <strong>R$ 180,00</strong> por convidado. Como os custos da cerimônia são altos, esse valor ajuda a tornar a celebração possível. Para mais informações sobre pagamento, <a href=\"" +
        WHATSAPP_SENHA +
        '" target="_blank" rel="noopener noreferrer">entre em contato pelo WhatsApp</a>.',
    },
    {
      pergunta: "Como confirmar presença?",
      resposta:
        'Para confirmar sua presença, clique no botão <strong>"Confirmar presença"</strong> no convite ou fale diretamente pelo <a href="' +
        WHATSAPP_CONFIRMACAO +
        '" target="_blank" rel="noopener noreferrer">WhatsApp</a>.',
    },
    {
      pergunta: "De quem é a formatura?",
      resposta:
        "Este é o convite do baile de formatura da <strong>Enf. Beatriz Gusmão</strong>, formanda em Enfermagem pela turma de 2026.",
    },
  ];

  var iconeChat =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">' +
    '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>' +
    "</svg>";

  var iconeWhatsApp =
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
    '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>' +
    "</svg>";

  document.body.insertAdjacentHTML(
    "beforeend",
    '<div class="chatbot" id="chatbot">' +
      '<div class="chatbot__painel" id="chatbot-painel" role="dialog" aria-label="Dúvidas frequentes" aria-hidden="true">' +
      '<header class="chatbot__cabecalho">' +
      "<div>" +
      '<p class="chatbot__titulo">Dúvidas frequentes</p>' +
      '<p class="chatbot__subtitulo">Escolha uma pergunta abaixo</p>' +
      "</div>" +
      '<button class="chatbot__fechar" id="chatbot-fechar" type="button" aria-label="Fechar">&times;</button>' +
      "</header>" +
      '<div class="chatbot__mensagens" id="chatbot-mensagens"></div>' +
      '<div class="chatbot__perguntas" id="chatbot-perguntas"></div>' +
      '<a class="chatbot__whatsapp" href="' +
      WHATSAPP_DUVIDA +
      '" target="_blank" rel="noopener noreferrer">' +
      iconeWhatsApp +
      "Falar no WhatsApp" +
      "</a>" +
      "</div>" +
      '<button class="chatbot__botao" id="chatbot-botao" type="button" aria-label="Abrir dúvidas frequentes" aria-expanded="false">' +
      iconeChat +
      "</button>" +
      "</div>"
  );

  var painel = document.getElementById("chatbot-painel");
  var botao = document.getElementById("chatbot-botao");
  var fechar = document.getElementById("chatbot-fechar");
  var mensagens = document.getElementById("chatbot-mensagens");
  var perguntasEl = document.getElementById("chatbot-perguntas");
  var aberto = false;

  function rolarParaBaixo() {
    mensagens.scrollTop = mensagens.scrollHeight;
  }

  function adicionarMensagem(texto, tipo) {
    var div = document.createElement("div");
    div.className = "chatbot__msg chatbot__msg--" + tipo;
    div.innerHTML = texto;
    mensagens.appendChild(div);
    rolarParaBaixo();
    return div;
  }

  function mostrarDigitando() {
    var div = document.createElement("div");
    div.className = "chatbot__digitando";
    div.id = "chatbot-digitando";
    div.innerHTML = "<span></span><span></span><span></span>";
    mensagens.appendChild(div);
    rolarParaBaixo();
    return div;
  }

  function removerDigitando() {
    var el = document.getElementById("chatbot-digitando");
    if (el) el.remove();
  }

  function renderPerguntas() {
    perguntasEl.innerHTML = "";
    FAQ.forEach(function (item, index) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chatbot__pergunta";
      btn.textContent = item.pergunta;
      btn.addEventListener("click", function () {
        responder(index, btn);
      });
      perguntasEl.appendChild(btn);
    });
  }

  function responder(index, btn) {
    var item = FAQ[index];
    if (!item || btn.disabled) return;

    btn.disabled = true;
    adicionarMensagem(item.pergunta, "usuario");

    var digitando = mostrarDigitando();

    setTimeout(function () {
      removerDigitando();
      adicionarMensagem(item.resposta, "bot");
    }, 700);
  }

  function abrirPainel() {
    aberto = true;
    painel.classList.add("chatbot__painel--aberto");
    painel.setAttribute("aria-hidden", "false");
    botao.setAttribute("aria-expanded", "true");

    if (!mensagens.children.length) {
      adicionarMensagem(
        "Olá! Sou a assistente do convite da Beatriz. Como posso ajudar?",
        "bot"
      );
    }
  }

  function fecharPainel() {
    aberto = false;
    painel.classList.remove("chatbot__painel--aberto");
    painel.setAttribute("aria-hidden", "true");
    botao.setAttribute("aria-expanded", "false");
  }

  botao.addEventListener("click", function () {
    if (aberto) {
      fecharPainel();
    } else {
      abrirPainel();
    }
  });

  fechar.addEventListener("click", fecharPainel);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && aberto) fecharPainel();
  });

  document.addEventListener("click", function (e) {
    if (!aberto) return;
    if (!document.getElementById("chatbot").contains(e.target)) {
      fecharPainel();
    }
  });

  renderPerguntas();
})();
