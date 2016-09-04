/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var app = angular.module('myApp', []);


app.controller('myController', function($scope) {

	var x = Math.floor((Math.random() * 100) + 1);
	$scope.intentos = 0;
	console.log(x);

	$scope.comenzar = function() 
	{
		x = Math.floor((Math.random() * 100) + 1);
		$scope.intentos = 0;
		console.log(x);
	}
	$scope.verificar = function() 
	{
		if($scope.numero=="" || isNaN($scope.numero)) {
			alert("Ingrese un número para verificar");
		} else {
			$scope.intentos++;
			$scope.numero = parseInt($scope.numero);
			if($scope.numero > x) {
				alert("Se pasó...");
			} else if( $scope.numero < x) {
				alert("Falta...");
			} else {
				alert("Usted es un ganador!!! y en solo " + $scope.intentos + " intentos")
			}
		}
	}

});