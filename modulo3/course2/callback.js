// CALLBACKS -> chamar a função de volta em outra função 

function calcular(x,operacao,y){
    console.log(operacao(x,y)) 
}

function somar(x,y){
    return x + y
}

function multiplicar(x,y){
    return x * y
}

calcular(10,somar,50)

