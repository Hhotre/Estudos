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
            var img = document.createElement('img')
            img.setAttribute(`id`, `foto`)
            
            if (fsex[0].checked) {
                genero = 'Homem'
                if (idade >= 0 && idade <10){
                    //crianca
                    img.setAttribute(`src`, `../images/recortadas/1.png`)
                } else if (idade < 21){
                    //jovem
                    img.setAttribute(`src`, `../images/recortadas/2.png`)
                } else if (idade < 50) {
                    //adulto
                    img.setAttribute(`src`, `../images/recortadas/3.png`)
                } else {
                    //idoso
                    img.setAttribute(`src`, `../images/recortadas/4.png`)
                }
           
           
            } else if (fsex[1].checked){
                genero = 'Mulher'
                if (idade >= 0 && idade <10){
                    //crianca
                    img.setAttribute('src', '../images/recortadas/5.png')
                } else if (idade < 21){
                    //jovem
                    img.setAttribute('src', '../images/recortadas/6.png')
                } else if (idade <50) {
                    //adulta
                    img.setAttribute('src', '../images/recortadas/7.png')
                } else {
                    //idosa
                    img.setAttribute('src', '../images/recortadas/8.png')
                }
            }
            res.style.textAlign = `center`
            res.innerHTML = `Voce e ${genero} com ${idade} anos`
            res.appendChild(img)
        }



}