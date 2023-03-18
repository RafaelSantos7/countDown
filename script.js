const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const natal = "25 dec 2023"

function countDown() {
    const meuAniversario = new Date(natal)
    const hoje = new Date()

    const segTotal = (meuAniversario - hoje)/1000;

    const finalDias = Math.floor( segTotal / 60 / 60 / 24 );
    const finalhoras = Math.floor( segTotal / 60 / 60 ) % 24;
    const finalMinutos = Math.floor( segTotal / 60 ) % 60;
    const finalSegundos = Math.floor( segTotal ) % 60;

    dia.innerHTML = finalDias
    hora.innerHTML = formatoTempo(finalhoras)
    minuto.innerHTML =  formatoTempo(finalMinutos)
    segundo.innerHTML =  formatoTempo(finalSegundos)
}

function formatoTempo( tempo ) {
    return tempo  < 10? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000);

