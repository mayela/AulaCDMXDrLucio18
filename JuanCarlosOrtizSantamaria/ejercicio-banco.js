alert("Bancomer solicita tus datos laborales para otorgarte un cr�dito");

var datos = new Object()
	datos.empresa = "";
	datos.rfc = "";
	datos.salario = 0;
	datos.fechaIngreso = "";

datos.empresa = prompt("�Cu�l es el nombre de la empresa?");
datos.rfc = prompt("Ingresa tu RFC")
datos.salario = parseInt(prompt("�Cu�l es tu salario actual?"))
datos.fechaIngreso = prompt("�En qu� fecha ingresaste a trabajar?")

if (datos.salario >= 15000){
	alert("Cr�dito aprobado");
} else {
 	alert("Cr�dito rechazado")}; 

document.write(
	"\nDatos de la empresa: " + datos.empresa + 
"\nRFC" + datos.rfc + 
"\nSalario: " + datos.salario +
"\nFecha de ingreso: " + datos.fechaIngreso);

