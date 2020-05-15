<?php
session_start();

$resp = $_SESSION['resultados'];

echo json_encode($resp);
