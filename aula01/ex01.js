// Média do Aluno

let nota1 = 9
let nota2 = 6
let nota3 = 9
let media = (nota1 + nota2 + nota3) / 3

if (media < 5 ){ 
    console.log(`Sua media foi ${media}. REPROVADO!`)

} else if (media >= 5 && media <= 7 ) {
    console.log(`Sua media foi ${media}. RECUPERAÇÃO!`)
} else if (media > 7) {
    console.log(`Sua media foi ${media}. APROVADO!`)
 
}