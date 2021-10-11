algoritmo "idadecomif"
var
   anoatual, anonasc, idade: inteiro
inicio
      Escreval("Em que ano nos estamos? ")
      leia(anoatual)
      Escreval("Em que ano eu nasci? ")
      leia(anonasc)
      idade <- anoatual-anonasc
      Escreval("Voce tem ",idade, " anos.")
      Se (idade >= 21) entao
         Escreval ("Voce e de maior")
         senao
         Escreval ("Voce e de menor")
      fimse
fimalgoritmo