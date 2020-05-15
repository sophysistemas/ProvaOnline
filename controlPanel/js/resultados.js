var totalQuestaoGeral = getTotalQuestoes();
var totalQuestaoEspecifica = getTotalQuestoesEspecificas();
var divListaResultados = document.getElementById('divListaResultados')
var divLista = document.createElement('div');
var divCabecalho = document.createElement('div');

function getResultados(idProcesso) {
  //console.log('G = ' + totalQuestaoGeral + ' | Esp = ' + totalQuestaoEspecifica);
  
  $.ajax({
    method: "GET",
    url: "controller/getResultados.php",
    data: {
      'idProcesso': idProcesso,
      'totalQuestaoGeral': totalQuestaoGeral,
      'totalQuestaoEspecifica': totalQuestaoEspecifica
    },
    cache: false,
    dataType: "json",
    success: function (data) {
      
      calcularTempoMedioResposta(data)
      renderResultados(data);

    },
    beforeSend: function () {
      carregandoResultado('<i class="fas fa-spinner"></i> Carregando...', '#B2DA20');
    },
    error: function (data) {
      carregandoResultado('<i class="fas fa-exclamation-triangle"></i> Erro ao carregar os resultados', 'red');
    }
  });
}

function carregandoResultado(msg, cor) {
  divListaResultados.innerHTML = msg;
  divListaResultados.style.color = cor;
  divListaResultados.style.paddingTop = '100px';
  divListaResultados.setAttribute('class', 'text-center');
  divListaResultados.style.fontSize = '16px';
}

function renderResultados(data) {

  divListaResultados.innerHTML = '';
  divListaResultados.style.paddingTop = '10px';
  divListaResultados.setAttribute('class', 'text-left');
  divListaResultados.style.color = '#adff2f';
  divListaResultados.style.fontSize = '12px';

  renderTituloColunasResultados(data);
 
  data.forEach(element => {

    let tempoResposta = (element.inicio !== null) ? calcularTempoResposta(element.inicio, element.fim) : "0";

    let linha = document.createElement('div');
    linha.setAttribute('class', 'row');
    linha.style.marginTop = '8px';
    linha.style.borderBottom = '1px solid gray';

    linha.onmouseover = () => {
      linha.style.backgroundColor = '#4d4b4b';
    }

    linha.onmouseout = () => {
      linha.style.backgroundColor = '#302e2e';
    }


    let colNome = document.createElement('div');
    colNome.setAttribute('class', 'col-6');
    colNome.appendChild(document.createTextNode(element.nome));

    if (element.igeral !== 'Não respondida') {
      colNome.setAttribute('data-toggle', 'modal');
      colNome.setAttribute('data-target', '#modelId');
      colNome.style.cursor = 'pointer';
      colNome.setAttribute('title', element.idCandidato);
    }

    let colGeral = document.createElement('div');
    colGeral.setAttribute('class', 'col-2 text-right');

    if (element.igeral == 'Não respondida') {
      colGeral.appendChild(document.createTextNode('-'));
    } else {
      colGeral.appendChild(document.createTextNode(element.igeral));
    }

    let colEspec = document.createElement('div');
    colEspec.setAttribute('class', 'col-2 text-right');

    if (element.iespec == 'Não respondida') {
      colEspec.appendChild(document.createTextNode('-'));
    } else {
      colEspec.appendChild(document.createTextNode(element.iespec));
    }

    let colTempo = document.createElement('div');
    colTempo.setAttribute('class', 'col-2 text-center');

    if (element.iespec == 'Não respondida') {
      colTempo.appendChild(document.createTextNode('-'));
    } else {
      colTempo.appendChild(document.createTextNode(tempoResposta));
    }

    linha.appendChild(colNome);
    linha.appendChild(colGeral);
    linha.appendChild(colEspec);
    linha.appendChild(colTempo);

    colNome.onclick = () => {
      if (colNome.title.length > 0) {
        sessionStorage.setItem('idCandidato', colNome.title);
        getRespostas(); //Funcao no arquivo modal.respostas.js
      }
    };

    divListaResultados.appendChild(linha);

  });
}

function renderTituloColunasResultados(data) {

  let linha = document.createElement('div');
  linha.setAttribute('class', 'row');
  linha.style.borderBottom = '1px solid gray';

  let colNome = document.createElement('div');
  colNome.setAttribute('class', 'col-6');
  colNome.style.fontWeight = 'bold';
  colNome.appendChild(document.createTextNode('Nome'));

  let setaEsquerda = document.createElement('i');
  setaEsquerda.setAttribute('class', 'fas fa-caret-down');
  setaEsquerda.style.cursor = 'pointer';
  setaEsquerda.style.padding = '4px';

  let colGeral = document.createElement('div');
  colGeral.setAttribute('class', 'col-2 text-right');
  colGeral.style.fontWeight = 'bold';
  colGeral.appendChild(setaEsquerda);
  colGeral.appendChild(document.createTextNode('Geral'));
  colGeral.style.display = 'flex';

  let setaDireita = document.createElement('i');
  setaDireita.setAttribute('class', 'fas fa-caret-down');
  setaDireita.style.cursor = 'pointer';
  setaDireita.style.padding = '4px';

  let colEspec = document.createElement('div');
  colEspec.setAttribute('class', 'col-2 text-right');
  colEspec.style.fontWeight = 'bold';
  colEspec.appendChild(setaDireita);
  colEspec.appendChild(document.createTextNode('Espc.'));
  colEspec.style.display = 'flex';

  let colTempo = document.createElement('div');
  colTempo.setAttribute('class', 'col-2 text-center');
  colTempo.style.fontWeight = 'bold';
  colTempo.appendChild(document.createTextNode('Tempo minutos'));

  linha.appendChild(colNome);
  linha.appendChild(colGeral);
  linha.appendChild(colEspec);
  linha.appendChild(colTempo);

  divListaResultados.appendChild(linha);

  //Ordena a lista pela nota geral
  setaEsquerda.onclick = function () {
    console.log('ordenar geral');
    
    data.sort(function (a, b) {
      if (a.ageral > b.ageral) {
        return -1;
      }
      if (a.ageral < b.ageral) {
        return 1;
      }
      return 0;
    });
    renderResultados(data);
  };

    //Ordena a lista pela nota especifica 
    setaDireita.onclick = function () {
      data.sort(function (a, b) {
        if (a.aespec > b.aespec) {
          return -1;
        }
        if (a.aespec < b.aespec) {
          return 1;
        }
        return 0;
      });
      renderResultados(data);
    };
}

function calcularTempoResposta(inicio, fim) {

  const data1 = new Date(inicio);
  const data2 = new Date(fim);

  const tempo = ((data2 - data1) / 1000) / 60;
  return Math.round(tempo); //Arredonda para cima
}

function calcularTempoMedioResposta(data) {

  let soma = 0;
  let cont = 0;
  let media = 0;

  data.forEach(e => {

    if (e.inicio !== null) {

      let data1 = new Date(e.inicio);
      let data2 = new Date(e.fim);

      soma += Math.round(((data2 - data1) / 1000) / 60);
      cont++;      
    }
  });

  media = soma / cont;

  let tempo = document.getElementById('tempoResposta');
  tempo.innerHTML = Math.round(media) + ' min';

}