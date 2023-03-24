window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const elementoMensagemChute = document.getElementById("mensagemChute");

const recognition = new SpeechRecognition();
//const campoBox = document.querySelector('.box');
recognition.lang="pt-Br";
recognition.start();

recognition.onresult = (event) => {
    const oQueFoiDito = event.results[0][0].transcript.replace(/\./g, "");
    campoBox.innerHTML = oQueFoiDito;
    console.log(oQueFoiDito);
    if(!verificaSeOChuteFoiValido(oQueFoiDito)) { 
        elementoMensagemChute.innerHTML = "Não é um numero!";
        return;
    }
    if( oQueFoiDito < numeroAleatorio ) elementoMensagemChute.innerHTML = 'O numero secreto é maior <i class="fa-sharp fa-solid fa-arrow-up"></i>';
    if( oQueFoiDito > numeroAleatorio ) elementoMensagemChute.innerHTML = 'O numero secreto é menor <i class="fa-sharp fa-solid fa-arrow-down"></i>';
    if( oQueFoiDito == numeroAleatorio ) { 
        elementoMensagemChute.innerHTML = ' Voce Acertou ! <button id="jogarNovamente" class="button">Jogar Novamente</button>';
        const elementoBotaoJogarNovamente = document.getElementById("jogarNovamente");
        elementoBotaoJogarNovamente.addEventListener("click", () => { window.location.reload() })
    }
};

recognition.onend = () => { recognition.start() };