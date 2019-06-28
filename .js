<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Fibonacci Solver</title>
</head>
<body>
    
</body>
<script>
var sumaPares = 2;
const MAXIMO = 100;

var resultado={
    suma:2,
    numerosPares:[2],
    numerosImpares:[1],
    todos:[1,2]
}
var esPar = function(numero){
    if (numero%2 === 0) {
        return true;
    } else {
        return false;
    }
}
var generadorFibonacci = function(anterior,ultimo){
    if (anterior + ultimo > MAXIMO) {
        return resultado.suma;
    } else {
        nuevo = anterior + ultimo;
        if(esPar(nuevo)){
            resultado.numerosPares.push(nuevo);
            
            resultado.suma += nuevo;
        }
        resultado.numerosImpares.push(nuevo);
        resultado.todos.push(nuevo);
        return generadorFibonacci(ultimo,nuevo);
    }
}
//Prueba con numeros de la serie menores a 100
//serie:  1,2,3,5,8,13,21,34,55,89
//suma pares:  44
console.log("suma de pares de serie Fibonacci: " + generadorFibonacci(1,2));
</script>
</html>
