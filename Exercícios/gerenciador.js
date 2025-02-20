
class Usuario {
    constructor(nome,email,ativo){
    nome = this.nome
    email = this.email
    ativo = this.ativo
    }

    ativarDesativarEmail(ativo){
        if (ativo == true){
            return false
        }
    }
}

const Marcos = new Usuario('a','a',true)

const [Jorge, Maria, Helena] = [new Usuario('Jorge', 'jorge@gmail.com', true),new Usuario('Maria','maria@gmail',true),new Usuario('Helena','helena@gmail',false)]
console.log(Marcos)