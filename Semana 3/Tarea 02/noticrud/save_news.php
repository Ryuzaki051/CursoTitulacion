<?php

$id = htmlspecialchars($_REQUEST['id']);
$titulo = htmlspecialchars($_REQUEST['titulo']);
$contenido = htmlspecialchars($_REQUEST['contenido']);

include '../conn.php';

$sql = "insert into ejerciciotb(id,titulo,contenido) values('$id','$titulo','$contenido')";
$result = @mysql_query($sql);
if ($result){
	echo json_encode(array(
		'id' => $id,
		'titulo' => $titulo,
		'contenido' => $contenido
	));
} else {
	echo json_encode(array('errorMsg'=>'Ocurrio un error al guardar.'));
}
?>