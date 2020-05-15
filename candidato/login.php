<?php
session_start();

require_once '../sistema/Conexao.class.php';
require_once 'CandidatoDAO.class.php';

$cd = new CandidatoDAO();

$cpf = $_POST['cpf'];

$res = json_decode($cd->logar($cpf), true);

if ($res["res"] == 3) {
    $_SESSION["idCandidato"] = $res["vIdCandidato"];
    $_SESSION["nome"] = $res["vNome"];
    $_SESSION["idProcesso"] = $res["vIdProcSeletivo"];
} else {
    unset($_SESSION["idCandidato"]);
    unset($_SESSION["nome"]);
    unset($_SESSION["vIdProcSeletivo"]);
}

echo $res["res"];
