var tablero;
var direccion; //identifica la direccion segun la tecla

var teclas={
	ARRIBA:38,
	ABAJO:40,
	IZQ:37,
	DER:39
};
//COLOCANDO LA IMAGEN DE FONDO EN EL OBJETO
var fondo={
	imagenURL:"images/fondo.png",
	imagenOK:false
};

//colocando al 1er personaje
var personaje1={
	x:100,
	y:100,
	frenteURL:"images/diana-frente.png",
	frenteOK:false,
	velocidad:20
};


function inicio(){
	var canvas=document.getElementById("imagenFondo");
	tablero=canvas.getContext("2d");

	//confirmar fondo
	fondo.imagen=new Image();
	fondo.imagen.src=fondo.imagenURL;
	fondo.imagen.onload=confirmarFondo;

	//confirmar 1er personaje
	personaje1.frente=new Image();
	personaje1.frente.src=personaje1.frenteURL;
	personaje1.frente.onload=confirmarFrente;

	//llama un evento del teclado
	document.addEventListener("keydown",teclado);
}


function teclado(datos){
	//console.log(datos.keyCode);
	var codigo=datos.keyCode;
	if(codigo==teclas.ARRIBA)
	{
		personaje1.y-=personaje1.velocidad;
	}
	if(codigo==teclas.ABAJO)
	{
		personaje1.y+=personaje1.velocidad;
	}
	if(codigo==teclas.IZQ){
		personaje1.x-=personaje1.velocidad;
	}
	if(codigo==teclas.DER){
		personaje1.x+=personaje1.velocidad;
	}
	dibujar();
}

function confirmarFondo(){
	fondo.imagenOK=true;
	dibujar();
}

function confirmarFrente(){
	personaje1.frenteOK=true;
	dibujar();
}


function dibujar(){
	if(fondo.imagenOK==true)
	{
		tablero.drawImage(fondo.imagen,0,0);
	}
	if(personaje1.frenteOK)
	{
		tablero.drawImage(personaje1.frente,personaje1.x,personaje1.y);

	}
}