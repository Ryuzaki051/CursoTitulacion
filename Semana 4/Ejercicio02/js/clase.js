//clase: definicion de un objeto

var Mascota=function(n,v){
	this.nombre=n;
	this.voz=v;
}

Mascota.prototype.hablar= function()
{
	alert(this.nombre+" dice: "+this.voz);	
}

//objeto de la clase mascota
var perro=new Mascota("rocco","woowf");
var gato=new Mascota("nibe","meoof");

//crear clase que defina un objeto pelicula
//metodo: descripcion

//gato.hablar();