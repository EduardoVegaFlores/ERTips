// let numero = parseInt(prompt("Ingrese un numero "))

// for(let i=1; i<=10; i++){
//     let resultado = numero*i
//     alert(`${numero} x ${i} = ${resultado}`)

// };

setTimeout(cargar, 1000);

function asignarElo(promediofinal, Division){
    
    alert("El MMR promedio es " + promediofinal + " y tu división es " + Division)
}

function cargar (){
    let cantidadpartidas = parseInt(prompt("Ingrese el numero de partidas por las cuales quiera calcular el MMR"))
    let mmr = 0
    let mmrfinal = 0
    
    function sumammrfinal() {
        mmrfinal = mmrfinal + mmr
    }
    
    
    for(let i=1; i<=cantidadpartidas; i++){
    
    
        mmr = parseInt(prompt("Ingrese el MMR"))
        sumammrfinal()
    
    };
    
    let promedio = mmrfinal/cantidadpartidas
    let promediofinal = Math.round(promedio)
    

    
    if (promedio>=0 && promedio<=1000){
    
        asignarElo(promediofinal, "Bronze");
    
        
    }else if (promedio>1000 && promedio<=2000){
    
        asignarElo(promediofinal, "Plata");
    
    }else if (promedio>2000 && promedio<=3000){
            
        asignarElo(promediofinal, "Oro");
    
    }else if (promedio>3000 && promedio<=4000){
    
        asignarElo(promediofinal, "Platino");
    
    }else if (promedio>4000){
    
        asignarElo(promediofinal, "Diamante");
    
    }else {
        alert("El MMR no es valido")
    }
        
}




