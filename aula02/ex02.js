let precoNormal = 50
let formaPagamento = 1

/* 1 = Debito
2 = Dinheiro ou pix
3 = 2x
4 = 3x ou +*/ 
function precoFinal (precoNormal, formaPagamento) {
    let precoComDesconto = 0
    if (formaPagamento == 1){
         precoComDesconto = precoNormal - (precoNormal * 0.1)
        return `O preço com desconto é de R$ ${precoComDesconto.toFixed(2)}`

    } else if (formaPagamento == 2){
         precoComDesconto = precoNormal - (precoNormal * 0.15)
        return `O preço com desconto é de R$ ${precoComDesconto.toFixed(2)}`

    }else if(formaPagamento == 3 ){
        return `O preço é de R$ ${precoNormal.toFixed(2)}`

    }else{
        let juros = 0.1
        let precoComJuros = precoNormal + (precoNormal * juros)
        return `O preço com juros é de R$ ${precoComJuros.toFixed(2)}`
    }
    return precoComDesconto
}

console.log(precoFinal(45,2))