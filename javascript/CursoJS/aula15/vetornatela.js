
let valores = [3, 4 ,6, 1, 5, 6, 7, 8, 2]
valores.sort()


/*
for(let pos=0; pos < valores.length; pos++){
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}
*/

for(let pos in valores){
    console.log(`A posicao ${pos} tem o valor ${valores[pos]}`)
}

