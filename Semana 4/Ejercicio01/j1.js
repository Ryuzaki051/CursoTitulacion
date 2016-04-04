//alert("ok");
/*En este ejercicio el javascript no aceptan directorios en el js*/
var tablero;
var fondo={
	imagenURL:"images/fondo.png",
	imagenOK:false
};

function inicio(){
	var canvas=document.getElementById("imagenFondo");
	tablero=canvas.getContext("2d");

	//confirmar fondo
	fondo.imagen=new Image();
	fondo.imagen.src=fondo.imagenURL;
	fondo.imagen.onload=confirmarFondo;
}

function confirmarFondo(){
	fondo.imagenOK=true;
	dibujar();
}
function dibujar(){
	if(fondo.imagenOK==true)
	{
		tablero.drawImage(fondo.imagen,0,0);
	}
}