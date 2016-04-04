<!Doctype html>
<html lang="es">
<head>
	<meta charset="utf-8" /> 
	<title>Registro modificado</title>
</head>
<body>
<?php
	include("../var.php");
	$conexion=mysql_connect($server,$user,$pass) or die("Problemas en la conexion");
	mysql_select_db("phpfacil",$conexion) or die("Problemas en la selección de la base de datos");
	$registros=mysql_query("update ejerciciotb
                          set id=$_REQUEST[id],titulo=$_REQUEST[titulo],contenido=$_REQUEST[contenido]
                        where titulo='$_REQUEST[tituloviejo]'",$conexion) or
  die("Problemas en el select:".mysql_error());
  echo "El registro del titulo fue modificado con exito";
?>
</body>
</html>
