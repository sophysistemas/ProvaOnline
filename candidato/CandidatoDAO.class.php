<?php

class CandidatoDAO
{
    public function logar($email)
    {
        try {
            $con = Conexao::conectar();
            
            $sql = "Call sel_candidato_login('$email', @res, @vIdCandidato, @vNome, @vIdProcSeletivo);";
            mysqli_set_charset($con, "utf8"); //formato de datos utf8
            
            $res= $con->query($sql);
            
            if ($res == true) {
                $row = $res->fetch_array(MYSQLI_ASSOC);
            }
            
            //Desconecta
            Conexao::desconectar($con);
        } catch (PDOException $pe) {
            die("Error occurred:" . $pe->getMessage());
        }
        return json_encode($row);
    }
    
    public function enviarRespostas($idProcesso, $idCandidato, $inicio, $data)
    {
        $res = false;

        try {
            $con = Conexao::conectar();
            $sql = "CALL sel_resposta_add($idProcesso, $idCandidato, '$inicio', '$data');";
            $res = $con->query($sql);
        } catch (Exception $e) {
            echo 'Erro: '.$e->getMessage();
        }
        return $res;
    }

    public function getResultados($idProcesso)
    {
        try {
            $con = Conexao::conectar();
    
            $sql = "CALL sel_get_resultados($idProcesso);";
            mysqli_set_charset($con, "utf8"); //formato de datos utf8
    
            if (!$result = mysqli_query($con, $sql)) {
                die();
            } //se ocorre um erro na conexao, cancela o programa
    
            $rowdata = array(); //se cria um array
            $i=0;

            //guarda em um array multidimensional somente os campos nome e resposta da consulta
            while ($row = mysqli_fetch_array($result)) {
                $rowdata[$i]['idCandidato'] = $row[0];
                $rowdata[$i]['nome'] = $row[1];
                $rowdata[$i]['resposta'] = $row[2];
                $rowdata[$i]['inicio'] = $row[3];
                $rowdata[$i]['fim'] = $row[4];
                $i++;
            }
            //Desconecta
            Conexao::desconectar($con);
        } catch (PDOException $pe) {
            die("Error occurred:" . $pe->getMessage());
        }
        //echo json_encode($rowdata);
        return $rowdata;
    }
}
