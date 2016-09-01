/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
var app = angular.module('myApp', []);


app.controller('myController', function($scope) {
  
  $scope.precioUno;
  $scope.precioDos;
  $scope.precioTres;


	$scope.Sumar = function() 
	{
		var total = parseInt($scope.precioUno) + parseInt($scope.precioDos) + parseInt($scope.precioTres);
		alert(total);
	}
	$scope.Promedio = function() 
	{
		var dividendo = 0;
		if($scope.precioUno!="") {
			dividendo++;
		}
		if($scope.precioDos!="") {
			dividendo++;
		}
		if($scope.precioTres!="") {
			dividendo++;
		}
		var total = parseInt($scope.precioUno) + parseInt($scope.precioDos) + parseInt($scope.precioTres);
		total=total/dividendo;
		alert(total);
	}
	$scope.PrecioFinal=function() 
	{
		var total = parseFloat($scope.precioUno) + parseFloat($scope.precioDos) + parseFloat($scope.precioTres);
		total = total*1.21;
		alert(total);
	}

});

