algoritmo "semnome"
var
   custo, taxa: real
   compra: caractere
inicio
      Escreval("Oque voce comprou? ")
      leia(compra)
      Escreval("Quanto que custou? ")
      leia(custo)
      custo <- (custo*60)/100)
      Escreval("O seu ",compra," tera uma taxa de",custo," dolares")
fimalgoritmo