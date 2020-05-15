<?php

class ProcessoDAO
{
    public function getProcessos($idProcesso)
    {
        try {
            $con = Conexao::conectar();
    
            $sql = "CALL sel_get_processos($idProcesso);";
            mysqli_set_charset($con, "utf8"); //formato de datos utf8
    
            if (!$result = mysqli_query($con, $sql)) {
                die();
            } //se ocorre um erro na conexao, cancela o programa
    
            $rowdata = array(); //se cria um array
            $i=0;

            //guarda em um array multidimensional somente os campos nome e resposta da consulta
            while ($row = mysqli_fetch_array($result)) {
                $rowdata[$i]['idProcesso'] = $row[0];
                $rowdata[$i]['empresa'] = $row[1];
                $rowdata[$i]['inicio'] = $row[2];
                $rowdata[$i]['fim'] = $row[3];
                $rowdata[$i]['situacao'] = $row[4];
                $rowdata[$i]['total'] = $row[5];
                $rowdata[$i]['respsim'] = $row[6];
                $rowdata[$i]['respnao'] = $row[7];
                $i++;
            }
            //Desconecta
            Conexao::desconectar($con);
        } catch (PDOException $pe) {
            die("Error occurred:" . $pe->getMessage());
        }
        return $rowdata;
    }
}
