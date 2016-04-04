<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <title>Buscando Titulo</title>
</head>
<body>
<?php
  include("../var.php");
  $conexion=mysql_connect($server,$user,$pass) or die("Problemas en la conexion");
  mysql_select_db($database,$conexion) or die("Problemas en la selección de la base de datos");
  $registros=mysql_query("select * from ejerciciotb
                        where titulo='$_REQUEST[titulo]'",$conexion) or die("Problemas en el select:".mysql_error());
  if ($regtitulo=mysql_fetch_array($registros)){
  ?>
  <form action="actualiza02.php" method="post">
    <input type="hidden" name="idviejo" value="<?php echo $regtitulo['id'] ?>">
    <input type="hidden" name="tituloviejo" value="<?php echo $regtitulo['titulo'] ?>">
    <input type="hidden" name="contenidoviejo" value="<?php echo $regtitulo['contenido'] ?>">
    <br>
    <input type="submit" value="Modificar">
  </form>
<?php
}
else
  echo "No existe un titulo con ese nombre";
?>
</body>
</html>
