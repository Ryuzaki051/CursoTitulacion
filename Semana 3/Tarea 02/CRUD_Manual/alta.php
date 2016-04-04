<!Doctype html>
<html>
<head>
	<meta charset="utf-8" />
	<title></title>
</head>
<body>
	<?php
		include("../var.php");
			$conexion=mysql_connect($server,$user,$pass) or die("Problemas en la conexion");
			mysql_select_db($database,$conexion) or
  			die("Problemas en la seleccion de la base de datos");

			mysql_query("insert into ejerciciotb(id,titulo,contenido) 
				values ('$_REQUEST[id]','$_REQUEST[titulo]','$_REQUEST[contenido]')", $conexion) or
  			die("Problemas en el select".mysql_error());
			mysql_close($conexion);
			echo "El nuevo tema $_REQUEST[titulo] fue dado de alta.";
	?>

</body>
</html>