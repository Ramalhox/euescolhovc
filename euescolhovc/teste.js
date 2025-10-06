const musica = [
    { nome: "Grace", imagem: "assets/gracealbum.jpg" },
    { nome: "N Side", imagem: "assets/nsidealbum.jpg" },
    { nome: "Everybody Here Wants You", imagem: "assets/everybodyalbum.jpg" },
    { nome: "Exit Music (For a Film)", imagem: "assets/exitforamusicalbum.jpg" },
    { nome: "Lover Is a Day", imagem: "assets/loverisadayalbum.jpg" },
    { nome: "Well I Wonder", imagem: "assets/welliwonderalbum.jpg" },
    { nome: "I Know It's Over", imagem: "assets/iknowitsover.jpg" },
    { nome: "Glide", imagem: "assets/glidealbum.jpg" },
    { nome: "Sextape", imagem: "assets/sextapealbum.jpg" },
    { nome: "This Charming Man", imagem: "assets/thischarmingman.jpg" },
    { nome: "Cry", imagem: "assets/cryalbum.jpg" },
    { nome: "Linger", imagem: "assets/lingeralbum.jpg" },
    { nome: "On the Level", imagem: "assets/onthelevel.jpg" },
    { nome: "Comfort Zone", imagem: "assets/comfortzone.jpg" },
];

// Acessa os elementos na página
const botao = document.getElementById("rollButton");
const resultadoElemento = document.getElementById("musicaSorteada");
const imagemElemento = document.getElementById("imagemSorteada");

// Variáveis para a Animação
let intervaloAnimacao;
const duracaoAnimacao = 2000; // 2 segundos de giro

// --- FUNÇÕES DE ANIMAÇÃO ---

function iniciarAnimacao() {
    // 1. Desabilita o botão e atualiza o texto de status
    botao.disabled = true;
    botao.textContent = "Sorteando a música...";
    resultadoElemento.textContent = "Girando, girando...";

    let indiceAtual = 0;
    
    // 2. Inicia a troca rápida de imagens (animação de rolar)
    intervaloAnimacao = setInterval(() => {
        // Altera o 'src' para o próximo anime na lista
        imagemElemento.src = musica[indiceAtual].imagem;
        
        // Loop: vai para o próximo índice ou volta ao início (0)
        indiceAtual = (indiceAtual + 1) % musica.length;
        
        // Garante que a imagem esteja visível (caso não estivesse)
        imagemElemento.style.display = "block"; 
    }, 100); // Troca a imagem a cada 100ms
}

function pararAnimacaoESortear() {
    // 1. Interrompe a troca rápida de imagens
    clearInterval(intervaloAnimacao);
    
    // 2. Sorteia o anime final
    const indiceSorteado = Math.floor(Math.random() * musica.length);
    const musicaSorteada = musica[indiceSorteado];
    
    // 3. Exibe o resultado final
    imagemElemento.src = musicaSorteada.imagem;
    resultadoElemento.textContent = `Música para hoje é: ${musicaSorteada.nome}!`;

    // 4. Adiciona o efeito de zoom (definido no CSS)
    imagemElemento.classList.add('zoom-in');
    
    // 5. Reabilita o botão após um pequeno atraso (para o efeito de zoom)
    setTimeout(() => {
        botao.disabled = false;
        botao.textContent = "Sortear nova música";
        imagemElemento.classList.remove('zoom-in'); // Remove a classe para que o efeito ocorra novamente no próximo clique
    }, 500); // Tempo do efeito de zoom
}

// --- OUvinte DE EVENTOS PRINCIPAL ---
botao.addEventListener("click", function() {
    // Inicia o giro
    iniciarAnimacao();

    // Agenda a parada da animação após a duração definida (3 segundos)
    setTimeout(pararAnimacaoESortear, duracaoAnimacao);
});