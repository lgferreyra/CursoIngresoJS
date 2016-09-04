/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

 var app = angular.module('myApp', []);


app.controller('myController', function($scope) {
  
	$scope.CalcularPrecio = function() 
	{
		var precio = parseInt($scope.cantidad)*35;

		if(parseInt($scope.cantidad)>=6){
			precio = precio / 2;
		}
		else if(parseInt($scope.cantidad)==5) {
			if($scope.marca=="argentinaLuz") {
				precio = precio * 0.6;
			}
			else {
				precio = precio * 0.7;
			}
		}
		else if(parseInt($scope.cantidad)==4) {
			if($scope.marca=="argentinaLuz" || $scope.marca=="felipeLamparas") {
				precio = precio * 0.75;
			}
			else {
				precio = precio * 0.8;
			}
		} else if(parseInt($scope.cantidad)==3) {
			if($scope.marca=="argentinaLuz") {
				precio = precio * 0.85;
			}
			else if($scope.marca=="felipeLamparas") {
				precio = precio * 0.9;
			}
			else {
				precio = precio * 0.95;
			}
		}

		if(parseInt($scope.cantidad)>2 && precio>120) {
			var iibb = precio * 0.1;
			precio = precio + iibb;
			alert("Usted pago $" + iibb + " de IIBB.");
		}

		$scope.precioDescuento = precio;
	}
});

