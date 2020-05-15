<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link href="../css/bootstrap.min.css" rel="stylesheet">
  <link href="../css/navbar.css" rel="stylesheet">
  <link href="css/index.css" rel="stylesheet">

  <title>AMME Consultoria</title>
  <link rel="icon" type="image/ico" href="../sistema/assets/img/favicon.ico" />

</head>

<body>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
      <img src="../img/system/logoHead.png" />&nbsp;&nbsp; <strong>Portal AMME</strong> - Processos seletivos
      </a>
  </nav>

  <div class="container-fluid" id="divPrincipal">
  <div class="row">
    <div class="col-sm-3 m-1 mainDivs" id="divListaProcessos"> 
      <strong><i class="fas fa-caret-right"></i>&nbsp; Processos</strong>
      <!-- <span class="aberto">Aberto</span><span class="fechado">Fechado</span> -->
      <div id="listaProcessos"></div>
    </div>
    <div class="col-sm-6 m-1 mainDivs" id="divDados">
      <div class="row rowData">
        <div class="col-8 colData1">
          <p> Empresa: <strong> <span id="nomeEmpresa"></span></strong></p>
          <p>Ínício: <strong> <span id="inicio"></span></strong></p>
          <p>Fim: <strong> <span id="fim"></span></strong></p>
          <p>Situação: <strong> <span id="situacao"></span></strong></p>
        </div>
        <div class="col-4 colData2 text-center">
          <p>Total inscritos</p>
          <p class="dataValue" id="totalInscritos"></p>
        </div>
      </div>

      <div class="row rowData" id="div-prova">
        <div class="col-6 colData3 text-center">
          <p>Provas respondidas</p>
          <p class="dataValue" id="respondidas"></p>
        </div>
        <div class="col-3 colData4 text-center">
          <p>Provas pendentes</p>
          <p class="dataValue" id="naoRespondidas"></p>
        </div>
        <div class="col-3 colData5 text-center">
          <p>Índice de assistência</p>
          <p class="dataValue" id="indiceAssistencia"></p>
        </div>        
      </div>
      
      <div class="row rowData" id="div-dados-prova">
        <div class="col-12 colData6 text-center">
          <div class="row row-titulo-dados-prova">
            <p>Dados da prova</p>
          </div>

          <div class="row row-dados-prova">
            <div class="col-3 colData7 text-center">
              <p>Total de questões</p>
              <p class="dataValue" id="totalQuestoes"></p>
            </div>

            <div class="col-3 colData7 text-center">
              <p>Questões específicas</p>
              <p class="dataValue" id="totalQuestoesEspecificas"></p>
            </div>

            <div class="col-3 colData7 text-center">
              <p>Tempo médio resposta</p>
              <p class="dataValue" id="tempoResposta">
                <!-- calculado pela funcao calcularTempoMedioResposta() no arquivo resultados.js -->
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
    
    <div style="overflow: auto;" class="col-sm-3 m-1 mainDivs" id="divResultado">
      <div class="row">
        <div class="col-6"><strong><i class="fas fa-caret-right"></i>&nbsp; Resultado</strong></div>
        <div class="col-6 text-right"><small>% acertos</small></div>
      </div>
      <div class="mt-3" id="divListaResultados"></div>
    </div>
  </div>
</div>
  <script src="https://kit.fontawesome.com/b9be352f3c.js" crossorigin="anonymous"></script>
  <script type="text/javascript" src="../sistema/js/jquery-3.1.1.min.js"></script>
  <script type="text/javascript" src="../sistema/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="../sistema/js/bootstrap.bundle.js"></script>
  <script type="text/javascript" src="../js/questoes.js"></script>
  <script src="js/processos.js"></script>
  <script src="js/dados.js"></script>
  <script src="js/resultados.js"></script>
  <script src="js/modal.respostas.js"></script>
  <script src="teste.js"></script>
</body>

<!-- Modal -->
<div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title"><i class="fas fa-user"></i> <span id="nomeAluno"></span></h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" id="modalBody">
        <div class="container-fluid" id="divRespostas"></div>
        <div id="divTotal">
          <div class="row linhasTotal">
            <div class="col-3 titulo">Avaliação</div>
            <div class="col-3 titulo text-center">Total questões</div>
            <div class="col-3 titulo text-center">Acertos</div>
            <div class="col-3 titulo text-center">Índice de acertos</div>
          </div>
          <div class="row linhasTotal">
            <div class="col-3">Geral</div>
            <div class="col-3 text-center" id="divTotalGeral"></div>
            <div class="col-3 text-center" id="divAcertoGeral"></div>
            <div class="col-3 text-center" id="divIndiceGeral"></div>
          </div>
          <div class="row linhasTotal">
            <div class="col-3">Específico</div>
            <div class="col-3 text-center" id="divTotalEspec"></div>
            <div class="col-3 text-center" id="divAcertoEspec"></div>
            <div class="col-3 text-center" id="divIndiceEspec"></div>
          </div>
        </div>      
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
      </div>
    </div>
  </div>
</div>
</html>