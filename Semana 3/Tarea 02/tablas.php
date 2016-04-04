<!doctype html>

<?php 
    include("conn.php");

    $consulta=mysql_query("select id,titulo,contenido from ejerciciotb") or 
    die("Problemas de conexion en la consulta".mysql_error());
?>

<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Tarea - Tablas</title>
<link rel="shortcut icon" href="../../icon/bleach01.ico" type="image/x-icon" />
      <link rel="stylesheet" type="text/css" href="css/easyui.css">
        <link rel="stylesheet" type="text/css" href="css/icon.css">
        <link rel="stylesheet" type="text/css" href="css/demo.css">
        <script type="text/javascript" src="js/jquery.min.js"></script>
        <script type="text/javascript" src="js/jquery.easyui.min.js"></script>
        <link rel="stylesheet" type="text/css" href="noticrud/css/main.css">
</head>
<body> 

        <h2 id="htitle">Tablas Basicas</h2>
        <p class="hsubtitule">Para poder modificar los datos, favor de dar clic <a class="aregistro" href="crud.php">aqui.</a></p>
        <div style="margin:20px 0 10px 0;"></div>
        <div id="tabps">
        <div class="easyui-tabs" style="width:70%;height:350px">

           <?php
                $filas=0;
                while($reg=mysql_fetch_array($consulta)){
                    $filas++;
                    echo "<div title=\"".$filas." ".$reg['titulo']."\" style=\"padding:10px\">
                        <p>".$reg['contenido']."</p>
                
                    </div>";

            }

            ?>

        </div>
        </div>

</body>
</html>