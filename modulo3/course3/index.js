const fs = require('fs') // lib pra ler arquivo
const path = require('path') // passar caminho do arquivo

const filePath = path.resolve(__dirname,'tarefas.csv')

const promessaLeitura = fs.promises.readFile(filePath) // ler o arquivo como uma promise

/*promessaLeitura.then((arquivo) => {
    console.log(arquivo.toString('utf8'))
}).catch((error => {console.log('Deu ruim' + error)
})).finally(() => {console.log('acabou')}) */

// await retira a complexidade do callback, por trás dele é toda essa estrutura anterior 

async function buscarArquivo() {
    try {const promessaLeitura = await fs.promises.readFile(filePath) // ler o arquivo como uma promise
        const textoDoArquivo = arquivo.toString('utf8') // transforma o arquivo em string e guarda numa variável
        console.log(textoDoArquivo)
    } 
    catch(error) { console.log(error)} 
    finally {console.log('finalizou')}}
    

buscarArquivo