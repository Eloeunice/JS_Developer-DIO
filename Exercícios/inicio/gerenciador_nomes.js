/**Descrição:
 Crie uma função que receba um array de nomes e retorne um novo array com os nomes formatados em maiúsculas e sem espaços extras.
Requisitos:
Use os métodos de string (trim e toUpperCase).
Use map para criar o novo array. */

function retornarNovaLista(array){
    const novaLista = array.map((i) => i.toUpperCase().trim())
    console.log(novaLista)
}

const lista = ['elo   ', 'duda', 'Maria joaquina', 'joao']
retornarNovaLista(lista)