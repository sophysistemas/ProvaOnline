
var listaProcessos = document.getElementById('listaProcessos');
getProcessos(0);

function getProcessos(idProcesso) {

  $.ajax({
    method: "POST",
    url: "../processo/controller/getDadosProcesso.php",
    data: { 'idProcesso': 0 },
    cache: false,
    dataType: "json",
    success: function (data) {
      listaProcessos.innerHTML = '';
      criarListaProcessos(data);
    },
    beforeSend: function () {
      carregandoResultado('<i class="fas fa-spinner"></i> Carregando...', '#B2DA20');
    },
    error: function (data) {
      carregandoResultado('<i class="fas fa-exclamation-triangle"></i> Erro ao carregar os processos', 'red');
    }
  });
}

function carregandoResultado(msg, cor) {
  listaProcessos.innerHTML = msg;
  listaProcessos.style.color = cor;
  listaProcessos.style.paddingTop = '100px';
  listaProcessos.setAttribute('class', 'text-center');
}

function criarListaProcessos(data) {

  listaProcessos.innerHTML = '';
  listaProcessos.style.paddingTop = '30px';

  data.forEach((element) => {
    let divProc = document.createElement('div');
    divProc.setAttribute('class', 'btn-group btn-group-toggle');
    divProc.setAttribute('data-toggle', 'buttons');
    
    let labelProc = document.createElement('label');
    labelProc.setAttribute('class', 'btn btn-info active');

    let inputProc = document.createElement('input');
    inputProc.setAttribute('type', 'radio');
    inputProc.setAttribute('name', 'options');
    inputProc.setAttribute('value', element.idProcesso);

    labelProc.appendChild(inputProc);
    labelProc.appendChild(document.createTextNode(element.empresa));
    divProc.appendChild(labelProc);

    listaProcessos.appendChild(divProc);

    inputProc.onchange = () => {
      renderDados(data, inputProc.value); //Funcao criada no script dados.js
      getResultados(inputProc.value); //Funcao criada no script resulados.js
    }
  });
  atualizarForm(data);
}

//Carrega os dados na abertura do formulario
function atualizarForm(data) {

  if (data.length > 0) {
    getResultados(data[0].idProcesso); //Funcao criada no script resulados.js
    renderDados(data, data[0].idProcesso); //Funcao criada no script dados.js
  }
}