<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Dando Baja</title>
</head>
<body>
<?php
  include("../var.php");
  $conexion=mysql_connect($server,$user,$pass) or  die("Problemas en la conexion");
    mysql_select_db($database,$conexion) or die("Problemas en la selección de la base de datos");
  
  $registros=mysql_query("select id,titulo,contenido from ejerciciotb
                        where titulo='$_REQUEST[titulo]'",$conexion) or
                        die("Problemas en el select:".mysql_error());
  
  if ($reg=mysql_fetch_array($registros)){
    mysql_query("delete from ejerciciotb where titulo='$_REQUEST[titulo]'",$conexion) or
    die("Problemas en el select:".mysql_error());
    echo "Se efectuó el borrado del titulo con su contenido.";
  }
  else{
    echo "No existe un titulo con ese nombre.";
  }
  mysql_close($conexion);
?>
</body>
</html>
