/* Crie uma classe para representar pessoas
Para cada oessia teremos os atributos nome, peso e altura
As pessoas devem ter a capacidade de dizer o valor de seu IMC (IMC = peso / altura * altura)
Instancie uma pessoa chamada Jose que tenha 70 kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC
 */

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }

    calcularImc(){
        return this.peso / (this.altura * this.altura)
    }
}

const Jose = new Pessoa('Jose', 70, 1.75)
console.log(Jose, Jose.calcularImc())