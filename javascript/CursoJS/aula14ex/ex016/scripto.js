function contando(){
    var inicio = document.getElementById('inc')
    var final = document.getElementById('fin')
    var passo = document.getElementById('pass')
    var resultado = document.getElementById('res')

    if(inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0){
        resultado.innerHTML = 'Impossivel contar'
    } else {
        resultado.innerHTML = 'Contando: <br>'
        
        //De String para Int// 
        var inicion = Number(inicio.value)
        var finaln = Number(final.value)
        var passon = Number(passo.value)
        if (passon <= 0){
            window.alert(`Passo Invalido. Considerando valor 1`)
            passon = 1
        }
        if (inicion < finaln){
            
            // Contagem crescente
            for(var c = inicion; c <= finaln; c += passon){
                resultado.innerHTML += `${c}  \u{1f449}`
            }
        }else {
            // Contagem regressiva
            for (var c = inicion; c>= finaln; c-= passon){
                resultado.innerHTML += ` ${c} \u{1f449}`
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }

}



//start end paz jump == res

/*

function contando(){
    var start = document.getElementById('inc')
    var end = document.getElementById('fin')
    var paz = document.getElementById('pass')
    var res = document.getElementById('result')
    
    result.innerHTML = `Resultado:${res}`
    if (start > 1){

    } else if (end <500){

    }else if(start ++ <end) {

    }
    res.innerHTML = (res)
    }      
}

*/
