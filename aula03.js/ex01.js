class Carro{
    marca;
    cor;
    gastoMedio;

    constructor (marca,cor,gastoMedio){
        this.marca = marca,
        this.cor = cor
        this.gastoMedio = gastoMedio
    }
    gastoCombustível(preco = 5){
        return this.gastoMedio * preco
    }
    descrever(){
        return `O carro é da marca ${this.marca}, é da cor ${this.cor} e tem o gasto de combustivel R$${this.gastoCombustível()}`
    }
}

const carro1 = new Carro('fiat','rosa', 10)
const carro2 = new Carro('wolsk','preto', 30)
console.log(carro1.descrever())