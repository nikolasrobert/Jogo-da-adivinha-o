let numerosSorteados = []
exibirMensagemInicial();
let numeroSecreto = gerarNumeroAleatorio();
let quantidadeDeTentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random()* 10 + 1);
    
    let listaQuantidadeElementos = numerosSorteados.length
    
    if (numerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio()
    } else {
        numerosSorteados.push(numeroEscolhido)
        console.log(numerosSorteados)
        return numeroEscolhido
    }
    
}

function limparCampo() {
    tentativaUsuario = document.querySelector("input")
    tentativaUsuario.value = ""
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo();
    tentativas =1;
    exibirMensagemInicial()
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e 10')
}

function verificaChute() {
    let tentativaUsuario = document.querySelector('input').value
    
    if (tentativaUsuario == numeroSecreto) {
        let palavraTentativa = quantidadeDeTentativas == 1? "tentativa": "tentativas";
        let mensagemTentativa = `Você utilizou ${quantidadeDeTentativas} ${palavraTentativa}.`
        exibirTextoNaTela(`h1`,`Você acertou!`);
        exibirTextoNaTela(`p`, `${mensagemTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {   
        if (tentativaUsuario > numeroSecreto) {
            exibirTextoNaTela(`h1`,`Você errou!`)
            exibirTextoNaTela(`p`, `O número secreto é menor.`)   
        } if (tentativaUsuario < numeroSecreto) {
            exibirTextoNaTela(`h1`,`Você errou!`)
            exibirTextoNaTela(`p`, `O número secreto é maior.`)
        }
        quantidadeDeTentativas++
    }
}

