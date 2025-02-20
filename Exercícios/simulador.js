
const PromessaConsulta = new Promise((resolve, reject) => {
    setTimeout(function trazerArray(){
        const vendas = [
            { produto: "Camiseta", quantidade: 10, preco: 25 },
            { produto: "Boné", quantidade: 5, preco: 20 },
            { produto: "Jaqueta", quantidade: 2, preco: 100 },
          ]
          resolve(vendas)
    },2000 )
})

const menorPreco = async () => {
    await PromessaConsulta
    const lista = vendas.forEach(vendas[i].preco < 50 ? lista.push(vendas[i]): null)
    console.log(lista)
} // nao sei pe nao retorna a lista

PromessaConsulta.then((value) => {console.log(value)})

