let numero = parseInt(prompt("Ingrese un numero "))

for(let i=1; i<=10; i++){
    let resultado = numero*i
    alert(`${numero} x ${i} = ${resultado}`)

};

let cantidadpartidas = parseInt(prompt("Ingrese el numero de partidas por las cuales quiera calcular el MMR"))
let mmr = 0
let mmrfinal = 0

for(let i=1; i<=cantidadpartidas; i++){


    mmr = parseInt(prompt("Ingrese el MMR"))
    mmrfinal = mmrfinal + mmr

};

let promedio = mmrfinal/cantidadpartidas

if (promedio>=0 && promedio<=1000){

    alert(`El MMR promedio es ${promedio} y tu division es BRONCE`)

    
}else if (promedio>1000 && promedio<=2000){
    
        alert(`El MMR promedio es ${promedio} y tu division es PLATA`)

}else if (promedio>2000 && promedio<=3000){
        
            alert(`El MMR promedio es ${promedio} y tu division es ORO`)

}else if (promedio>3000 && promedio<=4000){

    alert(`El MMR promedio es ${promedio} y tu division es PLATINO`)

}else if (promedio>4000){

    alert(`El MMR promedio es ${promedio} y tu division es DIAMANTE`)

}else {
    alert("El MMR no es valido")
}
    


