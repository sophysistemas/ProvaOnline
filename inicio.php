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
  <link href="css/inicio.css" rel="stylesheet">

  <title>AMME Consultoria</title>
  <link rel="icon" type="image/ico" href="sistema/assets/img/favicon.ico" />

</head>

<body>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">
      <img src="img/system/logoHead.png" />&nbsp;&nbsp; <span>Ambiente virtual AMME</span>
      </a>
  </nav>

  <div class="container pt-4" id="divPrincipal">  
    <h3>Olá <?php echo $_SESSION['nome'] ?>,</h3>

    <span>Bem vindo ao nosso ambiente virtual onde você realizará a prova objetiva. Esta é uma etapa importante do processo seletivo do qual você está participando.</span>
    <span>Esteja atento às seguintes recomendações:</span>
    
    <h4 class="mt-3">Recomendações para a prova:</h4>
    <ul>
      <li>A prova é composta de 26 questões de múltipla escolha.</li>
      <li>O tempo para a realização da prova é de <b>30 minutos</b> contados a partir do momento em que você clicar no botão "Iniciar prova".</li>
      <li>Você terá apenas uma chance de responder a cada questão. Após salvar a resposta não será possível mudá-la.</li>
      <li>Durante a realização da prova <b>NÃO</b> clique no botão voltar, <b>NÃO</b> feche, minimize, atualize ou abra uma nova aba no seu navegador sob o risco de perder as respostas salvas.</li>
      <li>Esta etapa é eliminatória e monitorada eletronicamente.</li>
    </ul>
    <div>
      <strong>Siga em frente e boa sorte!!!</strong>
    </div>
    <br>
    <div class="mt-2 text-center">
      <button class="btn btn-info" id="btnIniciar">Inciar prova</button>
    </div>
    
  </div>

  <script src="js/inicio.js"></script>
</body>

</html>