
function renderDados(arrayData, idProcesso) {
  
  let data = arrayData.filter(reg => reg.idProcesso === idProcesso);

  let indice = calcularAssistencia(data[0].total, data[0].respsim);

  let nomeEmpresa = document.getElementById('nomeEmpresa');
  nomeEmpresa.innerHTML = '';
  nomeEmpresa.appendChild(document.createTextNode(data[0].empresa));

  let inicio = document.getElementById('inicio');
  inicio.innerHTML = '';
  inicio.appendChild(document.createTextNode(data[0].inicio));

  let fim = document.getElementById('fim');
  fim.innerHTML = '';
  fim.appendChild(document.createTextNode(data[0].fim));

  let situacao = document.getElementById('situacao');
  situacao.innerHTML = '';
  situacao.appendChild(document.createTextNode(data[0].situacao));

  let totalInscritos = document.getElementById('totalInscritos');
  totalInscritos.innerHTML = '';
  totalInscritos.appendChild(document.createTextNode(data[0].total));

  let respondidas = document.getElementById('respondidas');
  respondidas.innerHTML = '';
  respondidas.appendChild(document.createTextNode(data[0].respsim));

  let naoRespondidas = document.getElementById('naoRespondidas');
  naoRespondidas.innerHTML = '';
  naoRespondidas.appendChild(document.createTextNode(data[0].respnao));

  let assistencia = document.getElementById('indiceAssistencia');
  assistencia.innerHTML = '';
  assistencia.appendChild(document.createTextNode(indice + '%'));

  let totalQ = document.getElementById('totalQuestoes');
  totalQ.innerHTML = '';
  totalQ.appendChild(document.createTextNode(getTotalQuestoes())); // funcao contida no arquivos questoes.js

  let totalQE = document.getElementById('totalQuestoesEspecificas');
  totalQE.innerHTML = '';
  totalQE.appendChild(document.createTextNode(getTotalQuestoesEspecificas()));

}

function calcularAssistencia(total, resp) {
  let res = (resp / total) * 100;
  return res.toFixed(0);
}