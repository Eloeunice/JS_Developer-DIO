//  **Média de Notas**: Peça três notas ao usuário, calcule a média e informe se ele foi aprovado (média maior ou igual a 7).

function informarAprovacao(nota1,nota2,nota3){
    let media = (nota1 + nota2 + nota3) / 3
    if (media < 7){
        console.log("O aluno está reprovado")
    } else{
        console.log("O Aluno foi aprovado!")
    }
    
}
informarAprovacao(5,10,10)