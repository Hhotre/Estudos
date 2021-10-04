let num = document.getElementById ('formunum')
let list = document.getElementById ('numeroslist')
let res = document.getElementById ('resultado')
let valores = []



function adicionar() {
    if(isNumber(num.value) && !enList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        list.appendChild(item)
        res.innerHTML = ``
        }else {
            window.alert(`Valor invalido`)
        }
        num.value = ''
        num.focus()
}
        function isNumber(n) {
            if(Number (n) >=1 && Number(n) <=100){
                return true
                } else {
                return false
                }

        }
        function enList(n, l) {
            if (l.indexOf(Number(n)) != -1){
                return true
                } else {
                    return false
                }

        }
function finalizar (){
    if (valores.length ==0){
        window.alert(`Adicione pelo menos um valor`)
    } else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for( let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if ( valores[pos] < menor)
                menor = valores[pos]
        }
        
        media = soma / tot
        res.innerHTML = ``
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A media  dos valores digitados e ${media}</p>`
    }
}