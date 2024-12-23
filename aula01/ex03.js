let precoNormal = 50
let formaPagamento = 'Débito'

if (formaPagamento == 'Débito'){
    let precoComDesconto = precoNormal - (precoNormal * 0.1)
    console.log(`O preço com desconto é de R$ ${precoComDesconto.toFixed(2)}`)

} else if (formaPagamento == 'Dinheiro' || formaPagamento == 'PIX'){
    let precoComDesconto = precoNormal - (precoNormal * 0.15)
    console.log(`O preço com desconto é de R$ ${precoComDesconto.toFixed(2)}`)

}else if(formaPagamento == '2x'){
    console.log(`O preço é de R$ ${precoNormal.toFixed(2)}`)

}else{
    let juros = 0.1
    let precoComJuros = precoNormal + (precoNormal * juros)
    console.log(`O preço com juros é de R$ ${precoComJuros.toFixed(2)}`)
}