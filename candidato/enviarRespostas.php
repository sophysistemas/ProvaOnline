<?php
session_start();

require_once '../sistema/Conexao.class.php';
require_once 'CandidatoDAO.class.php';

$cd = new CandidatoDAO();

$idProcesso = $_SESSION['idProcesso'];
$idCandidato = $_SESSION['idCandidato'];
$inicio = $_POST['inicio'];
$data = $_POST['respostas'];

echo $cd->enviarRespostas($idProcesso, $idCandidato, $inicio, $data);
