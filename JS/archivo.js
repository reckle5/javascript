// el bucle termina al ingresar una edad mayor o igual a 18

let edad = parseInt(prompt("Ingrese su Edad"));

while(edad <=17 || isNaN){
    alert("Edad no valida");
    edad= parseInt(prompt("Intente otra vez"));
    
    if(edad >=18){
        alert("Bienvenido/A");
        break;
    }
}