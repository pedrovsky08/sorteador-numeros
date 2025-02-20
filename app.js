//começar pelas funções
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

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let sorteados = [];
    let numero;

    if (de >= ate) {
        alert('Erro: O número inicial não pode ser maior que o número final. Vefique!');
        reiniciar();
        alterarStatusBotao();
    }

    if (quantidade > (ate - de + 1)) {
        alert('Erro: A quantidade não deve ser maior que o intervalo entre o número inicial e o número final. Verifique!');
        return;
    }

    for (let i = 0; i < quantidade; i++) {
            numero = obterNumeroAleatorio(de, ate);

            while (sorteados.includes(numero)) {
                numero = obterNumeroAleatorio(de, ate);
                alert('Tentando obter número inédito');
            }          

            sorteados.push(numero);
        }

        mostrarNumero('resultado', `Números sorteados: ${sorteados}`);

        alterarStatusBotao();
    }

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar() {
    mostrarNumero('resultado', `Números sorteados: nenhum até agora`);
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    alterarStatusBotao();
}



