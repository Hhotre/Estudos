algoritmo "IMC"
var
   massa, altura, IMC: real
inicio
   Escreval("Qual seu peso(kg)? ")
   leia(massa)
   Escreval("Qual sua altura (M)? ")
   leia(altura)
   IMC <- massa/(altura^2)
   Se (IMC>= 18.5) e (IMC<= 25) entao
      Escreval("O seu IMC e de ",IMC:5:2," esta dentro da media")
   senao
      Escreval(" O seu IMC e de ",IMC:5:2," esta fora da medida, se cuide!")
   fimse
fimalgoritmo