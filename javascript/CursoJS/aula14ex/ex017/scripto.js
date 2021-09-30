function gerartabuada() {
    
    
    var numero = document.getElementById('number')
    var tabuada = document.getElementById('seltabe')

        if (numero.value.length == 0){
        window.alert(`Por favor, digite um numero`)
        }   else{
            
            //Converter o numero digitado de string para int
            var nd = Number(numero.value)
            var cc = 1
            //
            
            tabuada.innerHTML = '' //Retirando os digitos da tabuada anteriror
                
                while (cc <= 10){
                    var item = document.createElement('option')
                    item.text = `${nd} x ${cc} = ${nd*cc}`
                    item.value = `tabuada${cc}`
                    tabuada.appendChild(item)
                    cc++
                }
            }
              

}
