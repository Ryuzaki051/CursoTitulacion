//Ahorcado.js pgr.js

var palabra="Tamarindo";
var hombre;
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
	var canvas=document.getElementById("c");
	canvas.width=500;
	canvas.height=400;
	var contexto=canvas.getContext("2d");
	hombre=new Ahorcado(contexto);

	//hombre.trazar()
}