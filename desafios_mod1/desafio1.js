/*Calculo média do aluno
    < 5 REPROVADO
    >= 5 E < 7 RECUPERAÇÃO
    >= 7 APROVADO
*/

const notas = [7,8,10,3,9]
const soma = notas.reduce((acc, curr) => acc + curr, 0)
const media = soma / notas.length

if(media < 5){
    console.log('REPROVADO')
} else if (media >= 5 && media < 7){
    console.log('RECUPERAÇÃO')
} else if(media >= 7){
    console.log('APROVADO')
}
console.log(media)

