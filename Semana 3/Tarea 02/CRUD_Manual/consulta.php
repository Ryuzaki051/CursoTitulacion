<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" /> 
  <title>Consultando datos</title>
</head>
<body>
<?php

  include("../var.php");
  $conexion=mysql_connect($server,$user,$pass) or die("Problemas en la conexion");
  mysql_select_db($database,$conexion) or die("Problemas en la selección de la base de datos");
  
  $registros=mysql_query("select id,titulo,contenido
                        from ejerciciotb where titulo='$_REQUEST[titulo]'",$conexion) or
  die("Problemas en el select:".mysql_error());
?>

<table border="1">
  <tr>
    <td>Id</td>
    <td>Titulo</td>
    <td>Contenido</td>
  </tr>
  <?php
  if ($reg=mysql_fetch_array($registros)){
    echo "
          <tr>
            <td>".$reg['id']."</td>
            <td>".$reg['titulo']."</td>
            <td>".$reg['contenido']."</td>
          </tr>";
}
  ?>
</table>

<?php mysql_close($conexion); ?>
</body>
</html>
