var letras = ['a', 'b', 'c', 'd', 'e'];
var totalQuestoesGeral = getTotalQuestoes();
var totalQuestoesEspecifica = getTotalQuestoesEspecificas();

function renderRespostas(data) {

  let idCandidato = sessionStorage.getItem('idCandidato');
  let res = data.filter(reg => reg.idCandidato == idCandidato);

  renderCabecalho(res);
  renderListaRespostas(res);
  avaliacaoGeral(res)
}

function renderCabecalho(res) {
  let nomeAluno = document.getElementById("nomeAluno");
  nomeAluno.innerHTML = res[0].nome;
}

function renderListaRespostas(res) {
  let divRespostas = document.getElementById('divRespostas');
  divRespostas.innerHTML = '';

  let titulo = document.createElement('div');
  titulo.appendChild(document.createTextNode('Respostas'));
  titulo.style.paddingBottom = '10px';
  titulo.style.fontWeight = '500';
  divRespostas.appendChild(titulo);

  renderTituloLista();

  rs = JSON.parse(res[0].resposta);

  rs.forEach((valor) => {
    let divLinha = document.createElement('div');
    divLinha.setAttribute('class', 'row');
    divLinha.style.backgroundColor = '#f2f2f2';
    divLinha.style.fontSize = '13px';

    let divColQuestao = document.createElement('div');
    divColQuestao.setAttribute('class', 'col-1 text-center');
    divColQuestao.appendChild(document.createTextNode(String(valor[0]).padStart(2, '0')));
    divColQuestao.style.border = '1px solid #cccccc';

    let divColDisciplina = document.createElement('div');
    divColDisciplina.setAttribute('class', 'col-6');
    divColDisciplina.style.border = '1px solid #cccccc';
    divColDisciplina.appendChild(document.createTextNode(getDisciplina(valor[0])));

    let divColA = document.createElement('div');
    divColA.setAttribute('class', 'col-2 text-center');
    divColA.style.border = '1px solid #cccccc';
    divColA.appendChild(document.createTextNode(letras[valor[2]]));

    let divColB = document.createElement('div');
    divColB.setAttribute('class', 'col-2 text-center');
    divColB.style.border = '1px solid #cccccc';
    divColB.appendChild(document.createTextNode(letras[valor[3]]));

    let divColC = document.createElement('div');
    divColC.setAttribute('class', 'col-1 text-center');
    divColC.style.border = '1px solid #cccccc';

    if (valor[2] == valor[3]) {
      divColC.style.color = 'green';
      divColC.innerHTML = '<i class="fas fa-check"></i>';
    } else {
      divColC.style.color = 'red';
      divColC.innerHTML = '<i class="fas fa-times"></i>';
    }

    divLinha.appendChild(divColQuestao);
    divLinha.appendChild(divColDisciplina);
    divLinha.appendChild(divColA);
    divLinha.appendChild(divColB);
    divLinha.appendChild(divColC);
    divRespostas.appendChild(divLinha);
  });
}

function renderTituloLista() {

  let divRowTitulos = document.createElement('div');
  divRowTitulos.setAttribute('class', 'row');
  divRowTitulos.style.border = '1px solid #d8d8d8';
  divRowTitulos.style.fontSize = '14px';
  divRowTitulos.style.fontWeight = '500';
  divRowTitulos.style.backgroundColor = '#d8d8d8';

  let divColTitulo1 = document.createElement('div');
  divColTitulo1.setAttribute('class', 'col-1 text-center');
  divColTitulo1.appendChild(document.createTextNode('#'));

  let divColTitulo2 = document.createElement('div');
  divColTitulo2.setAttribute('class', 'col-6');
  divColTitulo2.appendChild(document.createTextNode('Disciplina'));

  let divColTitulo3 = document.createElement('div');
  divColTitulo3.setAttribute('class', 'col-2 text-center');
  divColTitulo3.appendChild(document.createTextNode('Gabarito'));

  let divColTitulo4 = document.createElement('div');
  divColTitulo4.setAttribute('class', 'col-2 text-center');
  divColTitulo4.appendChild(document.createTextNode('Candidato'));

  let divColTitulo5 = document.createElement('div');
  divColTitulo5.setAttribute('class', 'col-1');

  divRowTitulos.appendChild(divColTitulo1);
  divRowTitulos.appendChild(divColTitulo2);
  divRowTitulos.appendChild(divColTitulo3);
  divRowTitulos.appendChild(divColTitulo4);
  divRowTitulos.appendChild(divColTitulo5);
  divRespostas.appendChild(divRowTitulos);
}
function getDisciplina(num) {
  var questoes = getQuestoes();
  let res = questoes.filter(reg => reg.numero == num);
  return res[0].disciplina;
}

function getRespostas() {
  $.ajax({
    method: "POST",
    url: "controller/getRespostas.php",
    data: {},
    cache: false,
    dataType: "json",
    success: function (data) {
      renderRespostas(data);
    },
    beforeSend: function () {
      //carregandoResultado('<i class="fas fa-spinner"></i> Carregando...', '#B2DA20');
    },
    error: function (data) {
      console.log(`Erro: ${data}`);
      //carregandoResultado('<i class="fas fa-exclamation-triangle"></i> Erro ao carregar os resultados', 'red');
    }
  });
}

function avaliacaoGeral(data) {
  let totalGeral = document.getElementById('divTotalGeral');
  let totalEspec = document.getElementById('divTotalEspec');
  let acertolGeral = document.getElementById('divAcertoGeral');
  let acertolEspec = document.getElementById('divAcertoEspec');
  let indiceGeral = document.getElementById('divIndiceGeral');
  let indiceEspec = document.getElementById('divIndiceEspec');

  totalGeral.innerHTML = '';
  totalEspec.innerHTML = '';
  acertolGeral.innerHTML = '';
  acertolEspec.innerHTML = '';
  indiceGeral.innerHTML = '';
  indiceEspec.innerHTML = '';

  rs = JSON.parse(data[0].resposta);

  let totalAcertoGeral = getTotalAcertos(rs, false);
  let totalAcertoEspec = getTotalAcertos(rs, true);
  let indiceGeralAcertos = (totalAcertoGeral / totalQuestoesGeral * 100).toFixed(0) + '%';
  let indiceEspecAcertos = (totalAcertoEspec / totalQuestoesEspecifica * 100).toFixed(0) + '%';

  totalGeral.appendChild(document.createTextNode(totalQuestoesGeral));
  totalEspec.appendChild(document.createTextNode(totalQuestoesEspecifica));
  acertolGeral.appendChild(document.createTextNode(totalAcertoGeral));
  acertolEspec.appendChild(document.createTextNode(totalAcertoEspec));
  indiceGeral.appendChild(document.createTextNode(indiceGeralAcertos));
  indiceEspec.appendChild(document.createTextNode(indiceEspecAcertos));
}

function getTotalAcertos(res, espec) {

  let rsAcertoGeral = res.filter(reg => reg[2] == reg[3]);

  if (!espec) {
    return rsAcertoGeral.length;
  } else {
    let rsAcertoEspec = rsAcertoGeral.filter(reg => reg[1] == true);
    return rsAcertoEspec.length;
  }
}