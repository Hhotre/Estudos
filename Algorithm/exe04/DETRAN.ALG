algoritmo "Detran"
var
   anoatual, anodenasc, idade: inteiro
inicio
      Escreval("DEPARTAMENTO DE TRANSITO")
      Escreval("------------------------")
      Escreval("  Informe o ano atual (yyyy): ")
      leia(anoatual)
      Escreval("  Informe sua data de nascimento (yyyy): ")
      leia(anodenasc)
      idade <- (anoatual-anodenasc)
      
      Escreval("---- RESULTADO ----")
      Escreval(" IDADE: ",idade)
      se (idade >= 18) entao
         Escreval(" Apto para tirar a carteira de motorista")
         senao
              Escreval(" Inapto para tirar a carteira de motorista")
      fimse
fimalgoritmo