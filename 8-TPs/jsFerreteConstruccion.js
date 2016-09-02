/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
var app = angular.module('myApp', []);


app.controller('myController', function($scope) {
  
	$scope.Rectangulo = function() 
	{
		var total = (parseInt($scope.largo)*2) + (parseInt($scope.ancho)*2);
		alert(total*3);
	}
	$scope.Circulo = function() 
	{
		var total = (parseInt($scope.radio)*2)*3.14;
		alert(total*3);
	}
	$scope.Materiales = function() 
	{
		var totalMetrosCuadrados = parseInt($scope.largo)*parseInt($scope.ancho);
		alert("Cemento: " + (totalMetrosCuadrados*2) + ". Cal: " + (totalMetrosCuadrados*3) + ".");
	}

});