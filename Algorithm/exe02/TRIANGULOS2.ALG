algoritmo "Triangulos"
var
   L1, L2, L3: Inteiro
   EQ, ES, TRI: Logico
inicio
      Escreva("Digite o primeiro lado do triangulo: ")
      Leia(L1)
      Escreva("Digite o segundo lado do triangulo: ")
      Leia(L2)
      Escreva("Digite o terceiro e ultimo lado do triangulo: ")
      Leia(L3)
      TRI <- (L1 < L2+L3) e (L2 < L1+L3) e (L3 < L1+L2)
      EQ <- (L1 = L2) e (L2 = L3)
      ES <- (L1 <> L2) e (L2 <> L3) e (L1 <> L3)
      Escreval (" O triangulo e EQUILATERO? ", EQ)
      Escreval (" O triangulo e ESCALENO? ", ES)
      Escreval (" Pode formar um TRIANGULO? ", TRI)
fimalgoritmo