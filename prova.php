<?php
if (!isset($_SESSION)) {
    session_start();
}
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link href="css/bootstrap.min.css" rel="stylesheet">
  <link href="css/navbar.css" rel="stylesheet">
  <link href="css/estilo.css" rel="stylesheet">
  <link href="css/prova.css" rel="stylesheet">

  <title>AMME Consultoria</title>
  <link rel="icon" type="image/ico" href="sistema/assets/img/favicon.ico" />
</head>

<body>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
      <img src="img/system/logoHead.png" />&nbsp;&nbsp; <span>Ambiente virtual AMME - <small><?php echo $_SESSION['nome'] ?></small></span>
    </a>

    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
      <div class="navbar-nav ml-auto mr-4 text-center" id="divTimer">
        <!-- <span>Tempo restante</span> -->
        <span id="spanTimer"></span>
      </div>
    </div>
  </nav>

  <div id="divDisciplina"></div>

  <div class="container" id="divPrincipal">
    <ul id="listaAlternativas"></ul>
    
  </div>

  <div class="container" id="divRodape"></div>

  <!-- <footer class="footer"></footer> -->

  <script type="text/javascript" src="sistema/js/jquery-3.1.1.min.js"></script>
  <script type="text/javascript" src="sistema/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="sistema/js/bloqueioAjax.js"></script>
  <script type="text/javascript" src="sistema/js/jquery.blockUI.js"></script>
  <script type="text/javascript" src="sistema/js/zeroLeft.js"></script>

  <script type="text/javascript" src="js/questoes.js"></script>
  <script type="text/javascript" src="js/prova.js"></script>
  <script type="text/javascript" src="js/prova.timer.js"></script>

</body>

</html>