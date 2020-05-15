<?php

    class Conexao
    {
        public static function conectar()
        {

            # DEV
            $server = "127.0.0.1";
            $user = "root";
            $pass = "";
            $bd = "db";

            try {
                $conexion = mysqli_connect($server, $user, $pass, $bd);
            } catch (Exception $pe) {
                die("Erro de conexão:" . $pe->getMessage());
            }
            
            return $conexion;
        }

        public static function desconectar($con)
        {
            try {
                mysqli_close($con);
            } catch (PDOException $pe) {
                die("Erro ao desconectar:" . $pe -> getMessage());
            }
        }
    }
