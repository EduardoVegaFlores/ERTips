
let dato1 = 0
let dato2 = 0

do {
    dato1 = Number(prompt("Digite el valor 1"))
    console.log(dato1);
    if (isNaN(dato1)) {
        alert("Ingrese un numero por favor")
    }
}while(isNaN(dato1));

do {
    dato2 = Number(prompt("Digite el valor 2"))
    if (isNaN(dato2)) {
        alert("Ingrese un numero por favor")
    }
}while(isNaN(dato2));

let valor = prompt("Escriba una funcion matematica: \n- suma\n- resta\n- multiplicacion\n- division")

funcionMatematica(valor,dato1,dato2)

function funcionMatematica(valor, dato1, dato2) {
    switch (valor) {
        case 'suma':
            alert("Respuesta: "+(dato1+dato2))
            break;
        case 'resta':
            alert("Respuesta: "+(dato1-dato2))
            break;
        case 'multiplicacion':
            alert("Respuesta: "+(dato1*dato2))
            break;
        case 'division':
            alert("Respuesta: "+(dato1/dato2))
            break;
        default:
            alert("Error en la escritura de la funcion matematica")
            break;
    }
}