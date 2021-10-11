algoritmo "estudantemedia"
var
   nota1, nota2, nota3, media: real
   aluno: caractere
inicio
   escreval("          ---------- ")
   escreval(" Escola Javali Anarcocapitalista ")
   escreval("---------------------------------")
   escreval("Qual o nome do Estudante? ")
   leia(aluno)
   escreval("Insira uma Nota: ")
   leia(nota1)
   escreval("Insira uma Nota: ")
   leia(nota2)
   escreval("Insira uma Nota: ")
   leia(nota3)

   escreval("------------------")
   media <- (nota1+nota2+nota3)/3
   escreval(" Media do aluno: ",media:3:1)
   se (media >= 7) entao
      Escreval(" Estudante Aprovado")
   senao
      se (media >=5) e (media <=6) entao
         escreval("Estudante em Recuperacao")
      senao
         escreval(" Estudante Reprovado")
      fimse
   fimse
fimalgoritmo