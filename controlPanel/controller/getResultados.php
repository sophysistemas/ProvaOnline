<?php
session_start();
    require_once '../../sistema/Conexao.class.php';
    require_once '../../candidato/CandidatoDAO.class.php';

$idProcesso = $_GET['idProcesso'];
$totalQuestaoGeral = $_GET['totalQuestaoGeral'];
$totalQuestaoEspecifica = $_GET['totalQuestaoEspecifica'];

$cd = new CandidatoDAO();
$data = $cd->getResultados($idProcesso);

//echo json_encode($data);
$_SESSION['resultados'] = $data; //Guarda os resultados na sessao para ser recuperado no relatorio individual de resposta no arquivo modal.respostas.js

getResultados($totalQuestaoGeral, $totalQuestaoEspecifica);

function getResultados($totalQuestaoGeral, $totalQuestaoEspecifica)
{
    global $data; //Referencia a variavel global $data
    $res = []; //Armazena os resultados calculados

     for ($i = 0; $i < count($data) ; $i++) {

        $ageral = ($data[$i]["resposta"] === 'Pendente') ? 'Não respondida' : getTotalAcertos($i, false);
        $aespc = ($data[$i]["resposta"] === 'Pendente') ? 'Não respondida' : getTotalAcertos($i, true);
        $iGeral = ($data[$i]["resposta"] === 'Pendente') ? '0%' : calcularIndice($ageral, false, $totalQuestaoGeral, $totalQuestaoEspecifica);
        $iEspec = ($data[$i]["resposta"] === 'Pendente') ? '0%' : calcularIndice($aespc, true, $totalQuestaoGeral, $totalQuestaoEspecifica);

        $arr = [
            'idCandidato' => $data[$i]["idCandidato"],
            'nome' => $data[$i]["nome"],
            'ageral' => $ageral,
            'aespec' => $aespc,
            'igeral' => ($data[$i]["resposta"] === 'Pendente') ? 'Não respondida' : $iGeral.'%',
            'iespec' => ($data[$i]["resposta"] === 'Pendente') ? 'Não respondida' : $iEspec.'%',
            'inicio' => $data[$i]["inicio"],
            'fim' => $data[$i]["fim"]
        ];

        array_push($res, $arr);
    }
    usort($res, ordenarArray('ageral', 'DESC'));//Ordena por ordem de acerto do maior para o menor
    echo json_encode($res);
}

function getTotalAcertos($i, $especifica)
{
    global $data; //Referencia a variavel global $data

    $acertos = 0;
    $rs = json_decode($data[$i]["resposta"]);
    for ($i = 0; $i < count($rs) ; $i++) {
        if ($especifica) { //Avalia somente as questoes da disciplina especifica
            if ($rs[$i][1] == true && $rs[$i][2] === $rs[$i][3]) {
                $acertos++;
            }
        } else { //Avalia todas as questões da prova
            if ($rs[$i][2] === $rs[$i][3]) {
                $acertos++;
            }
        }
    }
    return $acertos;
}

//function calcularIndice($data, $especifica)
function calcularIndice($acertos, $especifica, $totalQuestaoGeral, $totalQuestaoEspecifica)
{

    $total = 0;

   if ($especifica) {
       $total = round(($acertos / $totalQuestaoEspecifica) * 100);
   } else {
    $total = round(($acertos / $totalQuestaoGeral) * 100);
   }

   return $total;
}

function ordenarArray($clave, $orden=null)
{
    //Ordena da maior para a menor quantidade de acertos
    return function ($a, $b) use ($clave,$orden) {
        $result=  ($orden=="DESC") ? strnatcmp($b[$clave], $a[$clave]) :  strnatcmp($a[$clave], $b[$clave]);
        return $result;
    };
}
