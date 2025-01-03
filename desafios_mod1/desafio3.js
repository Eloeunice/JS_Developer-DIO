/* Calcule e imrprima o salario
    entradas: valor bruto do salario, adicional dos beneficios

    cálculo do salario:
        - valor bruto do salario - percetnual de imporsto mediante a faixa salarial + adicional dos beneficios
        IMPOSTO
        - De 0 a 1100 - 5%
        - De 1100.01 a 2500 - 10%
        - Maior que 2500 - 15%

*/
const {gets, print, calculoSalario} = require('./funcoes_auxiliares')
console.log(calculoSalario(1100,200))