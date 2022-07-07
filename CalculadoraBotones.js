let pantalla = document.getElementById("pantalla");
let uno = document.getElementById("1");
let dos = document.getElementById("2");
let tres = document.getElementById("3");
let cuatro = document.getElementById("4");
let cinco = document.getElementById("5");
let seis = document.getElementById("6");
let siete = document.getElementById("7");
let ocho = document.getElementById("8");
let nueve = document.getElementById("9");
let cero = document.getElementById("0");
let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let multiplicacion = document.getElementById("multiplicacion");
let division = document.getElementById("division");
let igual = document.getElementById("igual");
let punto = document.getElementById("punto");
let borrar = document.getElementById("borrar");

uno.onclick = function(){
    pantalla.value += "1";
}
dos.onclick = function(){
    pantalla.value += "2";
}
tres.onclick = function(){  
    pantalla.value += "3";
}
cuatro.onclick = function(){    
    pantalla.value += "4";
}
cinco.onclick = function(){
    pantalla.value += "5";
}
seis.onclick = function(){
    pantalla.value += "6";
}
siete.onclick = function(){
    pantalla.value += "7";
}
ocho.onclick = function(){
    pantalla.value += "8";
}
nueve.onclick = function(){
    pantalla.value += "9";
}
cero.onclick = function(){
    pantalla.value += "0";
}
punto.onclick = function(){
    pantalla.value += ".";
}
borrar.onclick = function(){
    pantalla.value = "";
}
suma.onclick = function(){
    pantalla.value += "+";
}
resta.onclick = function(){
    pantalla.value += "-";
}
multiplicacion.onclick = function(){
    pantalla.value += "*";
}
division.onclick = function(){
    pantalla.value += "/";
}
igual.onclick = function(){
    pantalla.value = eval(pantalla.value);
}
