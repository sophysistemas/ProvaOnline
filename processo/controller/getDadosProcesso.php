<?php

require_once '../../sistema/Conexao.class.php';
require_once '../model/ProcessoDAO.class.php';

$idProcesso = $_POST['idProcesso'];

$pd = new ProcessoDAO();

echo json_encode($pd->getProcessos($idProcesso));
