const maiorValor = 100;
const menorValor = 20;
const campoMaiorValor = document.querySelector("#maior-valor");
const campoMenorValor = document.querySelector("#menor-valor");
const elementoChute = document.getElementById("chute");

const campoBox=document.querySelector(".box");
const numeroAleatorio=gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return menorValor + parseInt(Math.random()*(maiorValor-menorValor+1))    ;
}

campoMaiorValor.innerHTML=maiorValor;
campoMenorValor.innerHTML=menorValor;

console.log("Numero Secreto:", numeroAleatorio);