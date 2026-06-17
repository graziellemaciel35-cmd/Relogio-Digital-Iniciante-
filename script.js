const horasEl = document.getElementById('horas');
const minutosEl = document.getElementById('minutos');
const segundosEl = document.getElementById('segundos');

function atualizarRelogio() {
    const agora = new Date();

    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    horas = horas < 10 ? `0${horas}` : horas;
    minutos = minutos < 10 ? `0${minutos}` : minutos;
    segundos = segundos < 10 ? `0${segundos}` : segundos;

    horasEl.textContent = horas;
    minutosEl.textContent = minutos;
    segundosEl.textContent = segundos;
}

setInterval(atualizarRelogio, 1000);

atualizarRelogio();