setTimeout(cargar, 1000);




























function asignarElo(promediofinal, Division){
    
    alert("El MMR promedio es " + promediofinal + " y tu división es " + Division)
}

function cargar (){
    let mmrArray = []
    let mmr = 0
    let cantidadpartidas = parseInt(prompt("Ingrese el numero de partidas por las cuales quiera calcular el MMR"))
    let promedio = 0

    for(let i=1; i<=cantidadpartidas; i++){
        mmr = parseInt(prompt("Ingrese el MMR"))
        mmrArray.push(mmr)
    };

    mmrArray.forEach(function(elemento){
        promedio = promedio + elemento
    })

    promedio = promedio / mmrArray.length


    if (promedio>=0 && promedio<=1000){
    
        asignarElo(promedio, "Bronze");
    
        
    }else if (promedio>1000 && promedio<=2000){
    
        asignarElo(promedio, "Plata");
    
    }else if (promedio>2000 && promedio<=3000){
            
        asignarElo(promedio, "Oro");
    
    }else if (promedio>3000 && promedio<=4000){
    
        asignarElo(promedio, "Platino");
    
    }else if (promedio>4000){
    
        asignarElo(promedio, "Diamante");
    
    }else {
        alert("El MMR no es valido")
    }

}