function carregar() {
    
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    /*
    var data = new Date()
    var hora = data.getHours()
    */
   var hora = 20

    msg.innerHTML = `Agora sao ${hora} horas`
    if (hora >= 6 && hora < 12){
        img.src = '../images/manha.png'
        document.body.style.background = `#d6a8ae`
    }else if (hora > 12 && hora <18 ){
        img.src = `../images/tarde.png`
        document.body.style.background = '#b3ae9e'
    }else {
        img.src = `../images/noite.png`
        document.body.style.background = '#1b3446'
    }
}