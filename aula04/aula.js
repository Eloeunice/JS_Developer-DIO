const alunos = ['Joao', 'Vitor', 'Marina']
alunos.push('Renan')
alunos[4] = 'Vinicius'
alunos.pop()  // remove ultimo item

alunos.shift() // remove o primeiro item do array

console.log(alunos[0])
for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i])
    
}

const nome =  'Eloiza Eunice Ferreira De Almeida'
for (let i = 0; i < nome.length; i++) {
    console.log(nome[i])
    
}