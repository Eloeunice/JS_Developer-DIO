
function escreverNome (nome){
    return(`Olá, ${nome}!`)

}

escreverNome("Eloiza")

function verificarIdade(idade){
    if(idade >= 18){
        maior = "Você é maior de idade!"
        console.log(maior)
    } else {
        maior = "Você é menor de idade!"
        console.log(maior)
    }
    return maior
}

verificarIdade(19)


