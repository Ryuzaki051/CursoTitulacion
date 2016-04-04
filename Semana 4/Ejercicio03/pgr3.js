// Este juego escoje 10 palabras al azar
//Ahorcado.js pgr.js
//var palabra="Alex";
var hombre,l,espacio;

var words=["leon","chocolate","libro","Matematicas","caramelo","avion",
"murcielago","Ferrocarril","lampara","hamburguesa"];

var min=0, max=9;
function rango(min,max){
	var numero=Math.floor(Math.random()*(max-min+1)+min);
	return numero;
}


var palabra=words[rango(0,9)];


//clase ahorcado
var Ahorcado=function(con)
{
	this.contexto=con;
	this.maximo=5;
	this.intentos=0;
	this.vivo=true;

	this.dibujar();
}

Ahorcado.prototype.dibujar=function()
{
	var dibujo=this.contexto;

	//dibujando el poste
	dibujo.beginPath();
	dibujo.moveTo(150,100);
	dibujo.lineTo(150,50);
	dibujo.lineTo(400,50);
	dibujo.lineTo(400,350);
	dibujo.lineWidth=10;
	dibujo.strokeStyle="#000";
	dibujo.stroke();

	dibujo.closePath();

	if(this.intentos>0)
	{
		//intento 1=rostro
		dibujo.beginPath();
		dibujo.arc(150,140,40,0,Math.PI*2,false);
		dibujo.strokeStyle="#F00";
		dibujo.lineWidth=5;
		dibujo.stroke();
		dibujo.closePath();
	}
	if(this.intentos>1){
		//intento=2 torso
		dibujo.beginPath();
		dibujo.moveTo(150,180);
		dibujo.lineTo(150,250);
		dibujo.strokeStyle="#F00";
		dibujo.lineWidth=5;
		dibujo.stroke();
		dibujo.closePath();

			if(this.intentos>2)
			{
				dibujo.beginPath();
				dibujo.moveTo(120,220);
				dibujo.lineTo(150,180);
				dibujo.lineTo(180,220);
				dibujo.strokeStyle="#F00";
				dibujo.lineWidth=5;
				dibujo.stroke();
				dibujo.closePath();

						if(this.intentos>3)
						{
							dibujo.beginPath();
							dibujo.moveTo(120,290);
							dibujo.lineTo(150,250);
							dibujo.lineTo(180,290);
							dibujo.strokeStyle="#F00";
							dibujo.lineWidth=5;
							dibujo.stroke();
							dibujo.closePath();

								if(this.intentos>4)
								{
									dibujo.beginPath();
									//ojo izquierdo
									dibujo.moveTo(125,120);
									dibujo.lineTo(145,145);
									dibujo.moveTo(145,120);
									dibujo.lineTo(125,145);

									//ojo derecho
									dibujo.moveTo(155,120);
									dibujo.lineTo(175,145);
									dibujo.moveTo(175,120);
									dibujo.lineTo(155,145);

									dibujo.strokeStyle="blue";
									dibujo.lineWidth=5;
									dibujo.stroke();
									dibujo.closePath();
								}
						}
			}
	}
}

Ahorcado.prototype.trazar=function()
{
	this.intentos++;
	if(this.intentos>=this.maximo){
		this.vivo=false;
	}

	this.dibujar();
}

function iniciar()
{
	l=document.getElementById("letra");
	var b=document.getElementById("boton");
	var canvas=document.getElementById("c");
	canvas.width=500;
	canvas.height=400;
	var contexto=canvas.getContext("2d");
	hombre=new Ahorcado(contexto);

	//hombre.trazar()

	palabra=palabra.toUpperCase();
	espacio=new Array(palabra.length);
	b.addEventListener("click",agregarLetra);
	mostrarPista(espacio);
}

function agregarLetra()
{
	var letra=l.value;
	letra=letra.toUpperCase();
	mostrarPalabra(palabra,hombre,letra);
}

function mostrarPalabra(palabra,ahorcado,letra)
{
	var encontrado=false;
	letra=letra.toUpperCase();
	for(p in palabra)
	{
		if(letra==palabra[p]){
			espacio[p]=letra;
			encontrado=true;
		}
	}
	mostrarPista(espacio);

	if(!encontrado)
	{
		ahorcado.trazar();
	}
	if(!ahorcado.vivo)
	{
		alert("You Lose! Press F5 for play again");
	}
}

function mostrarPista(espacio)
{
	var pista=document.getElementById("pista");
	var texto="";
	var i;
	var largo = espacio.length;

	for(i=0;i<largo;i++){
		if(espacio[i]!=undefined)
		{
			texto=texto+espacio[i]+" ";
		}
		else
		{
			texto+="_ ";
		}
	}
	pista.innerText=texto;

}