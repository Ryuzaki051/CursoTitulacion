function inicio(){

	dibujo=document.getElementById("areatrabajo");
	lienzo=dibujo.getContext("2d");

	lienzo.beginPath();
	lienzo.strokeStyle="#00F";
	lienzo.fillStyle="#00F";

	//lienzo.moveTo(100,100);
	//lienzo.lineTo(200,100);
	lienzo.moveTo(100,400);
	lienzo.lineTo(200,400);

	lienzo.moveTo(200,400);
	lienzo.lineTo(200,350);

	lienzo.moveTo(200,350);
	lienzo.lineTo(300,350);

	lienzo.moveTo(300,350);
	lienzo.lineTo(300,300);

	lienzo.moveTo(300,300);
	lienzo.lineTo(400,300);

	lienzo.moveTo(400,300);
	lienzo.lineTo(400,250);

	lienzo.moveTo(400,250);
	lienzo.lineTo(500,250);

	lienzo.moveTo(500,250);
	lienzo.lineTo(500,200);


	lienzo.closePath();
	lienzo.stroke();
	lienzo.fill();

	lienzo.beginPath();
	lienzo.strokeStyle="#00F";
	lienzo.fillStyle="#00F";

	lienzo.arc(100,100,50,Math.PI*2,false);

	lienzo.closePath();
	lienzo.stroke();
	lienzo.fill();

}