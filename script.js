/*Desarrolla un programa usando JavaScript y siendo ejecutado desde HTML 
  en el navegador, que permita a partir de tres números enteros indicar: */

function ejecutar (){
var num1 = parseInt(prompt("Inserte el primer número"));
var num2 = parseInt(prompt("Inserte el segundo número"));
var num3 = parseInt(prompt("Inserte el tercer número"));

diferentes(num1,num2,num3);
mayor(num1,num2,num3);
menor(num1,num2,num3);
console.log(media(num1,num2,num3));

}


function diferentes(n1,n2,n3) {
  if (n1!=n2 && n1!= n3 && n2 != n3){ // a. Si son todos diferentes.
    console.log ("Todos los números son diferentes"); 
  }
  else {
    if (n1==n2 && n1== n3 && n2 == n3){
      console.log ("Todos los números son iguales"); // b. Si son todos iguales.
    }
    else console.log ("No todos los numeros son iguales ni todos son diferentes");
  }
}


// c. El mayor.

function mayor(n1,n2,n3) {
  if(n1>=n2 && n1>=n3){
    console.log("El mayor es "+n1);
  }else{
    if(n2>=n1 && n2>=n3){
      console.log("El mayor es "+n2);
    }else{
      console.log("El mayor es "+n3);
    }
  }
}

// d. El menor.

function menor(n1,n2,n3) {
  if(n1<=n2 && n1<=n3){
    console.log("El menor es "+n1);
  }else{
    if(n2<=n1 && n2<=n3){
      console.log("El menor es "+n2);
    } else{
      console.log("El menor es "+n3);
    }
  }
}

// e. La media entre ellos (suma de todos, dividida entre la cantidad de números).

var media = function (n1,n2,n3) {
  return "La media de los numeros es: "+(n1 + n2 + n3) / 3; 
}

/*function media(n1,n2,n3) {
  var med = (n1 + n2 + n3) / 3;  //Otra opcion
  return "La media de los numeros es: "+(n1 + n2 + n3) / 3; 
} */
