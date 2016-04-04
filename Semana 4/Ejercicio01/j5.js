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
	atrasURL:"images/diana-atras.png",
	atrasOK:false,
	velocidad:20,
	mizqURL:"images/diana-izq.png",
	mizqOK:false,
	velocidad:20,
	mderURL:"images/diana-der.png",
	mderOK:false,
	velocidad:20
};


var personaje2={
	x:400,
	y:200,
	lizfURL:"images/liz.png",
	lizfOK:false,
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

	personaje1.atras=new Image();
	personaje1.atras.src=personaje1.atrasURL;
	personaje1.atras.onload=confirmarAtras;

	personaje1.mizq=new Image();
	personaje1.mizq.src=personaje1.mizqURL;
	personaje1.mizq.onload=confirmarmizq;

	personaje1.mder=new Image();
	personaje1.mder.src=personaje1.mderURL;
	personaje1.mder.onload=confirmarmder;


	personaje2.lizf=new Image();
	personaje2.lizf.src=personaje2.lizfURL;
	personaje2.lizf.onload=confirmarlizf;


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
	//se asigna el codigo a una variable que representa la direccion del personaje
	direccion=codigo;
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

function confirmarAtras(){
	personaje1.atrasOK=true;
	dibujar();
}

function confirmarmder(){
	personaje1.mderOK=true;
	dibujar();
}

function confirmarmizq(){
	personaje1.mizqOK=true;
	dibujar();
}

//Personaje no 2
function confirmarlizf(){
	personaje1.lizfOK=true;
	dibujar();
}




function dibujar(){
	if(fondo.imagenOK==true)
	{
		tablero.drawImage(fondo.imagen,0,0);
	}

	var personaje1Dir=personaje1.frente;

	if(personaje1.frenteOK && personaje1.atrasOK)
	{
		if(direccion==teclas.ARRIBA){
			personaje1Dir=personaje1.atras;
		}
		if(direccion==teclas.ABAJO){
			personaje1Dir=personaje1.frente;
		}
		if(personaje1.mizqOK && personaje1.mderOK){
			if(direccion==teclas.IZQ){
				personaje1Dir=personaje1.mizq;
			}
			if(direccion==teclas.DER){
				personaje1Dir=personaje1.mder;
			}
			tablero.drawImage(personaje1Dir,personaje1.x,personaje1.y);

		}

		
	}
	tablero.drawImage(personaje2.lizf,personaje2.x,personaje2.y);



}

		