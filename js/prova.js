var totalQuestoes = 26; // Total de questões na prova
var numQuestao = 1;
var respostas = [];
var questao = [];

var questoes = getQuestoes();

var divPrincipal = document.getElementById('divPrincipal');
var listaAlternativas = document.getElementById('listaAlternativas');
var divRodape = document.getElementById('divRodape');
var divDisciplina = document.getElementById('divDisciplina');

var buttonProximo = document.createElement('button');
buttonProximo.setAttribute('class', 'btn btn-primary');
buttonProximo.appendChild(document.createTextNode('Salvar resposta'));

function render() {

  questao = questoes.filter(function (valor) {
    return valor.numero === numQuestao;
  });

  if (questao[0].imagem.length === 0) {
    drawForm(false);
  } else {
    drawForm(true);
  }

  getDisciplina();

}

function drawForm(image) {

  divPrincipal.innerHTML = '';
  divDisciplina.innerHTML = '';
  listaAlternativas.innerHTML = '';
  let classCol = (image === true) ? 'form-group col-6' : 'form-group col-12';

  let divRow1 = document.createElement('div');
  divRow1.style.minHeight = '10%';
  divRow1.style.backgroundColor = '#e5e5e5';
  divRow1.style.borderRadius = '10px';
  divRow1.style.padding = '10px';
  divRow1.style.fontWeight = '500';

  let divRow2 = document.createElement('div');
  divRow2.style.margin = '0px';
  divRow2.style.padding = '0px';
  divRow2.style.maxHeight = '55vh';
  divRow2.setAttribute('class', 'form-row')

  let divCol1 = document.createElement('div');
  divCol1.style.margin = '0px';
  divCol1.style.padding = '0px';
  divCol1.style.backgroundColor = '#fff';
  divCol1.setAttribute('class', classCol);

  let divCol2 = document.createElement('div');
  divCol2.style.margin = '0px';
  divCol2.style.padding = '10px';
  divCol2.style.backgroundColor = 'white';
  divCol2.setAttribute('class', classCol);

  divRow2.appendChild(divCol1);

  if (image)
    divRow2.appendChild(divCol2);

  divPrincipal.appendChild(divRow1);
  divPrincipal.appendChild(divRow2);

  divRow1.appendChild(getQuestao());//Renderiza a questão 
  divCol1.appendChild(getAlternativas(questao));  //Renderiza as alternativas
  divCol2.appendChild(getImagem(questao)); //Renderiza a imagem

  divRodape.appendChild(buttonProximo);

}

function getDisciplina() {

  divDisciplina.appendChild(document.createTextNode(`Disciplina: ${questao[0].disciplina}`));

}

function getQuestao() {

  let divQuestao = document.createElement('div');

  if (questao[0].questao.length > 1) {

    questao[0].questao.forEach(function (valor, index) {
      let pa = document.createElement('p');
      pa.appendChild(document.createTextNode(valor));
      divQuestao.appendChild(pa);
    });
  } else {
    divQuestao.appendChild(document.createTextNode(questao[0].questao));
  }
  return divQuestao;
}

function getAlternativas(questao) {

  questao[0].opcoes.forEach(function (valor, index) {

    var radioAlt = document.createElement('input');
    radioAlt.setAttribute('type', 'radio');
    radioAlt.setAttribute('name', 'radioResposta');
    radioAlt.setAttribute('value', index);
    radioAlt.style.width = '18px';
    radioAlt.style.height = '18px';
    radioAlt.style.marginRight = '10px';
    radioAlt.style.marginTop = '-1px'; //Para alinhar o radio com o texto
    radioAlt.style.verticalAlign = 'middle'; //Para alinhar o radio com o texto

    let listaAlt = document.createElement('li');       
    listaAlt.appendChild(radioAlt);
    listaAlt.appendChild(document.createTextNode(valor));

    listaAlternativas.appendChild(listaAlt);
  });

  return listaAlternativas;
}

function getImagem(questao) {
  let url = './img/provas/02/';
  let image = document.createElement('img');

  image.setAttribute('src', `${url}${questao[0].imagem}`);
  image.style.height = '250px';
  image.style.width = '400px';
  return image;
}

buttonProximo.onclick = () => {
  let obj = [];

  try {
    let radioSel = document.querySelector('input[name=radioResposta]:checked'); //Recupera a resposta selecionada
    obj = [numQuestao, questao[0].especifica, questao[0].correta, parseInt(radioSel.value)]; //[numeroQuestão, especifica, respostaCorreta, respostaCandidato]

    respostas.push(obj);

    if (numQuestao <= totalQuestoes) {
      numQuestao += 1;
    } else {
      return;
    }

    if (numQuestao <= totalQuestoes)
      render();

    if (numQuestao > totalQuestoes) {
      fimProva(true);
    }

  } catch (err) {
    bloquearJanela(1, "<i class='fa fa-exclamation-triangle' aria-hidden='true'></i>&nbsp;&nbsp;Selecione uma resposta!");
    setTimeout($.unblockUI, 2000);
  }
};

function fimProva(respCompleta) {
  buttonProximo.remove();
  divRodape.remove();
  divPrincipal.innerHTML = '';
  divPrincipal.style.backgroundColor = '#e5f2ff';
  divPrincipal.style.textAlign = 'center';
  divPrincipal.style.width = '600px';

  var buttonEnviarProva = document.createElement('button');
  buttonEnviarProva.appendChild(document.createTextNode('Finalizar prova'));
  buttonEnviarProva.setAttribute('class', 'btn btn-success');
  buttonEnviarProva.style.width = '200px';

  var divFinal = document.createElement('div');
  divFinal.style.fontWeight = '600';

  if (respCompleta) {
    divFinal.setAttribute('class', 'alert alert-primary');
    divFinal.appendChild(document.createTextNode('Prova concluída! Clique no botão abaixo para finalizar'));
  } else {
    divFinal.setAttribute('class', 'alert alert-warning');
    divFinal.appendChild(document.createTextNode('Tempo esgotado! Clique no botão abaixo para finalizar'));
  }

  divPrincipal.appendChild(divFinal);
  divPrincipal.appendChild(buttonEnviarProva);

  buttonEnviarProva.onclick = () => {
    minuto = 60;
    let divTimer = document.getElementById('divTimer');
    divTimer.remove();
    divDisciplina.innerHTML = '';
    
    let inicio = localStorage.getItem('inicio');

    $.ajax({
      method: "POST",
      url: "candidato/enviarRespostas.php",
      data: {
        'inicio': inicio,
        'respostas': JSON.stringify(respostas)
      },
      cache: false,
      dataType: "json",
      success: function (data) {
        setTimeout($.unblockUI, 0);
        confirmarEnvioRespostas(data);
      },
      beforeSend: function () {
        bloquearJanela(0, "Enviando respostas...");
      },
      error: function (data) {
        bloquearJanela(3, "<i class='fa fa-exclamation-triangle' aria-hidden='true'></i>&nbsp;&nbsp;Erro ao enviar as respostas!");
        setTimeout($.unblockUI, 2000);
      }
    });
  };
}

function confirmarEnvioRespostas(data) {

  divPrincipal.innerHTML = '';

  let divAlerta = document.createElement('div');
  let divMensagem = document.createElement('div');
  let btnFinalizar = document.createElement('button');
  btnFinalizar.setAttribute('class', 'btn btn-danger');
  btnFinalizar.appendChild(document.createTextNode('Finalizar'));
  btnFinalizar.style.width = '150px';
  btnFinalizar.style.marginTop = '50px';

  divAlerta.setAttribute('id', 'divAlerta');
  divAlerta.style.fontWeight = '600';
  divMensagem.style.fontWeight = '600';

  if (data === 1) {
    mensagemFinal();
  } else {
    divAlerta.setAttribute('class', 'alert alert-danger');
    divAlerta.appendChild(document.createTextNode('Não foi possível enviar as respostas!'));
    divMensagem.appendChild(document.createTextNode('Por favor, reporte esse erro para a nossa equipe via e-mail: oportunidade@ammeconsultoria.com.br'));
    divPrincipal.appendChild(divAlerta);
    divPrincipal.appendChild(divMensagem);
    divPrincipal.appendChild(btnFinalizar);
    divPrincipal.style.backgroundColor = '#ffefe9';
    divPrincipal.style.width = '600px';
  }
  btnFinalizar.onclick = () => { location.href = "index.html" };
}

function mensagemFinal() {

  divPrincipal.innerHTML = '';
  divPrincipal.style.backgroundColor = '#abdbab';
  divPrincipal.style.width = '600px';

  let divMensagem = document.createElement('div');

  let txtTitle = document.createElement('h2');
  txtTitle.appendChild(document.createTextNode('Parabéns!!!'));
  txtTitle.style.marginBottom = '40px';

  let text = document.createElement('p');
  text.appendChild(document.createTextNode('Você concluiu esta etapa do processo. Fique atento ao seu e-mail. Em breve entraremos em contato.'));
  text.style.fontSize = '18px';
  text.style.fontWeight = '600';

  let btnSair = document.createElement('button');
  btnSair.appendChild(document.createTextNode('Sair'));
  btnSair.setAttribute('class', 'btn btn-success');
  btnSair.style.width = '150px';
  btnSair.style.marginTop = '50px';

  divMensagem.appendChild(txtTitle);
  divMensagem.appendChild(text);
  divMensagem.appendChild(btnSair);
  divPrincipal.appendChild(divMensagem);

  btnSair.onclick = () => {
    location.href = "index.html";
  }
}

render();