var minuto = zeroLeft(30, 2);
var segundo = zeroLeft(0, 2);

document.getElementById("spanTimer").innerHTML = `Tempo restante: ${minuto}:${segundo}`;
// Update the count down every 1 second
var x = setInterval(function () {

  segundo = (segundo > 0) ? segundo -= 1 : 0;

  document.getElementById("spanTimer").innerHTML = `Tempo restante: ${zeroLeft(minuto, 2)}:${zeroLeft(segundo, 2)}`;

  if (segundo === 0) {
    minuto -= 1;
    segundo = 60;
    alerta();
  }

  // If the count down is over, write some text 
  if (minuto < 0) {
    clearInterval(x);
    document.getElementById("spanTimer").innerHTML = "00:00";
    tempoEsgotado();
  }
}, 1000);

function alerta() {

  var divTimer = document.getElementById('divTimer');

  if (minuto <= 5) {
    divTimer.style.backgroundColor = '#fd6118';
  } else if (minuto <= 10) {
    divTimer.style.backgroundColor = '#fcf978';
  }
}

function tempoEsgotado() {

  fimProva(false);

}