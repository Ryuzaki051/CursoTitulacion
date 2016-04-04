<?php
include("var.php");

$conn = @mysql_connect($server,$user,$pass);
if (!$conn) {
	die('No se puede establecer conexion: ' . mysql_error());
}
mysql_select_db($database, $conn);

?>