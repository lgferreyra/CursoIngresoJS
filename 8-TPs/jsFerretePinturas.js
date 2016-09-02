/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
var app = angular.module('myApp', []);


app.controller('myController', function($scope) {
  
	$scope.FahrenheitCentigrados = function() 
	{
		var celcius = parseInt($scope.temperatura) - 32;
		alert($scope.temperatura + " Fahrenheit son " + celcius + " centígrados");
	}
	$scope.CentigradosFahrenheit = function() 
	{
		var fahrenheit = parseInt($scope.temperatura) + 32;
		alert($scope.temperatura + " centígrados son " + fahrenheit + " Fahrenheit");
	}

});