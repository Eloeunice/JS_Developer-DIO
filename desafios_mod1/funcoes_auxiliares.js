const entradas = [1100]
 let i = 0 
 
 function gets(){
    const valor = entradas[i];
    i++;
    return valor;}

function print(texto){
    console.log(texto);}


function calculoSalario(salario, beneficio){
    let imposto = null
    if (salario <= 1100){imposto = 0.05} 
    else if(salario > 1100 && salario <= 2500){imposto = 0.10}
    else if(salario > 2500){imposto = 0.15}

    const novoSalario = (salario - (salario * imposto)) + beneficio
    return novoSalario
}

module.exports = {gets, print, calculoSalario}
