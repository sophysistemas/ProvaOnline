var btnEntrar = document.getElementById('btnEntrar');
var inputCpf = document.getElementById('inputCpf');
var spanAlerta = document.getElementById('spnAlerta');

spanAlerta.innerHTML = '';

btnEntrar.onclick = () => {
  if (inputCpf.value.length === 0) {
    spanAlerta.innerHTML = 'Digite o e-mail';
    inputCpf.focus();
  } else {
    logar();
  }
}

function logar() {

  let cpf = $("#inputCpf").val();
  //let cpf = replaceCharacter($("#inputCpf").val(), '.', ''); //retira os pontos
  //cpf = replaceCharacter(cpf, '-', ''); //Remove o ifen
  var iniciada = localStorage.getItem('inicio') || false;

  $.ajax({
    method: "POST",
    url: "candidato/login.php",
    data: {
      'cpf': cpf
    },
    cache: false,
    dataType: "json",
    success: function (data) {
      setTimeout($.unblockUI, 0);
      //location.href = "inicio.php";
      if (data == 0) {
        spanAlerta.innerHTML = 'Não há processos abertos. Verifique o prazo.';
      } else if (data == 1) {
        spanAlerta.innerHTML = 'E-mail não cadastrado para essa etapa';
      } else if (data == 2) {
        spanAlerta.innerHTML = 'Você já realizou essa etapa';
      } else if (data == 3) {
        if (iniciada) {
          spanAlerta.innerHTML = 'Você já realizou essa etapa';
          alertaBloqueio();
        } else {
          location.href = "inicio.php";
        }
      }
    },
    beforeSend: function () {
      bloquearJanela(0, "Validando e-mail...");
    },
    error: function (data) {
      bloquearJanela(3, "<i class='fa fa-exclamation-triangle' aria-hidden='true'></i>&nbsp;&nbsp;Erro ao validar o e-mail!");
      setTimeout($.unblockUI, 2000);
    }
  });
}

function alertaBloqueio() {

  document.getElementById('inputCpf').style.visibility = 'hidden';
  document.getElementById('btnEntrar').style.visibility = 'hidden';
  document.getElementById('spnAlerta').innerHTML = '';

  let quebraLinha = document.createElement('br');

  let divAlerta = document.getElementById('divAlerta');
  divAlerta.innerHTML = '';
  divAlerta.style.color = '#ffff00';

  let pAlerta1 = document.createElement('span');
  pAlerta1.appendChild(document.createTextNode('Ao que parece você já tentou realizar a prova.'));
  divAlerta.appendChild(pAlerta1);

  divAlerta.appendChild(quebraLinha);

  let pAlerta2 = document.createElement('span');
  pAlerta2.appendChild(document.createTextNode('Se houve algum problema, entre em contato através do e-mail'));
  divAlerta.appendChild(pAlerta2);

  let pAlerta3 = document.createElement('p');
  pAlerta3.appendChild(document.createTextNode('oportunidade@ammeconsultoria.com.br'));
  divAlerta.appendChild(pAlerta3);

}	