function verificar() {
   //DATA E ANO  
    var data =new Date()
    var ano = data.getFullYear()

   //VARIAVEIS
    var formularioano = window.document.getElementById('txtano')
    
    var res = document.querySelector('div#res')
        if (formularioano.value.length == 0 || Number(formularioano.value) > ano || (formularioano.value.length < 4)){
            window.alert('Erro')
             
        }else if (formularioano.value.length < 4) {
            window.alert('Erro')
        }else {
            var fsex = document.getElementsByName(`radsex`)
            var idade = ano - Number(formularioano.value)
            //res.innerHTML = `A sua idade e: ${idade} anos`
            var genero = ''
            
            if (fsex[0].checked) {
                genero = 'Homem'
            } else if (fsex[1].checked){
                genero = 'Mulher'
            }
            res.style.textAlign = `center`
            res.innerHTML = `Voce e ${genero} com ${idade} anos`
        }



}