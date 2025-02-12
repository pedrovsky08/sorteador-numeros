//começar pelas funções

function aplicarEstilos() {
    // Seleciona o elemento
    let elemento = document.getElementById('meuElemento');

    // Aplica estilos
    elemento.style.fontFamily = 'Inter, sans-serif'; 
    elemento.style.fontSize = '24px';
    elemento.style.fontWeight = '700'; 
}

function mostrarNumero(id, texto) {
    let resultado = document.getElementById(id);
    resultado.innerHTML = texto;

    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        sorteados.push(numero);
    }
    alert (sorteados)

    mostrarNumero('resultado', `Números sorteados: ${sorteados}`);
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random()* (max - min + 1)) + min;
}



