/** Descrição:
 Receba um array de objetos representando produtos e crie uma função que calcule o valor total de cada produto (quantidade * preco) e 
 retorne apenas os produtos cujo total seja maior que 50.
Requisitos:
Use map para calcular o valor total.
Use filter para selecionar produtos.*/

function valorTotalProdutos(lista){
    //calcular o valor total de cada produto
    let valorTotal = lista.map((i) => i.quantidade * i.preco)
    let menor50 = valorTotal.filter((i) => i > 50 )
    console.log(menor50)
}

let produtos = [
    { produto: "Camiseta", quantidade: 10, preco: 25 },
    { produto: "Boné", quantidade: 5, preco: 20 },
    { produto: "Jaqueta", quantidade: 2, preco: 100 },
  ]

valorTotalProdutos(produtos)
  