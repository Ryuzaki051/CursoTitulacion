<?php

$id = intval($_REQUEST['id']);
$titulo = htmlspecialchars($_REQUEST['titulo']);
$contenido = htmlspecialchars($_REQUEST['contenido']);

include '../conn.php';

$sql = "update ejerciciotb set id='$id',titulo='$titulo',contenido='$contenido' where id=$id";
$result = @mysql_query($sql);
if ($result){
	echo json_encode(array(
		'id' => $id,
		'titulo' => $titulo,
		'contenido' => $contenido
	));
} else {
	echo json_encode(array('errorMsg'=>'Ocurrio algun error al actualizar.'));
}
?>