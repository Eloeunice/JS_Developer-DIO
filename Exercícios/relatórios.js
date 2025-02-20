/* */

const vendas = [
    { produto: "Camiseta", quantidade: 10, preco: 25 },
    { produto: "Boné", quantidade: 5, preco: 20 },
    { produto: "Jaqueta", quantidade: 2, preco: 100 },
  ];  

function gerarRelatorio(){
    // Calcule o total de vendas de cada produto (quantidade * preço).
        for (i in vendas){
            let totalVendas = vendas[i].quantidade*vendas[i].preco
            console.log(`Produto:${vendas[i].produto}-> ${totalVendas}`) 
         // Gere um array contendo apenas os produtos cuja receita total seja maior que um valor mínimo fornecido como argumento.
            if (totalVendas > 100){ let produtoValoresAltos = []
            produtoValoresAltos.push(totalVendas)
        //Ordene o array resultante por receita em ordem decrescente.
         produtoValoresAltos.sort((a, b) => b - a) 
         console.log(produtoValoresAltos)}
        
}}

gerarRelatorio()

