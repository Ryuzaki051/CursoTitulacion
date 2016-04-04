var dibujo,lienzo,numLineas,btnNumLineas;

function inicio(){

	numLineas=document.getElementById("numlineas");

	btnNumLineas=document.getElementById("clickLineas");

	btnNumLineas.addEventListener("click",dibujarGrilla);


	dibujo=document.getElementById("areatrabajo");
	lienzo=dibujo.getContext("2d");

	lienzo.beginPath();
	lienzo.strokeStyle="#00F";
	lienzo.fillStyle="#00F";



	lienzo.closePath();
	lienzo.stroke();
	lienzo.fill();
	
}

function dibujarGrilla(){
	var cantidadLineas=Number(numLineas.value);
	var ancho=300;
	var alto=300;
	var linea;
	var distanciaEntreLineas=ancho/cantidadLineas;
	var limiteX=ancho/distanciaEntreLineas;
	var limiteY=alto/distanciaEntreLineas;

	for(linea=0;linea<=limiteX; linea++){
		punto=(linea*distanciaEntreLineas);
		lienzo.beginPath();
		lienzo.strokeStyle="#AAA";
		lienzo.moveTo(punto,0);
		lienzo.lineTo(punto,ancho);
		lienzo.stroke();
		lienzo.closePath();
	}
	for(linea=0;linea<= limiteY;linea++){
		punto=(linea*distanciaEntreLineas);
		lienzo.beginPath();
		lienzo.strokeStyle="#AAA";
		lienzo.moveTo(0,punto);
		lienzo.lineTo(alto,punto);
		lienzo.stroke();
		lienzo.closePath();
	}
}