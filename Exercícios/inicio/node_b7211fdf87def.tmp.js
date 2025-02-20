/** Descrição:
 Crie um programa que receba um array de palavras e retorne um array contendo apenas as palavras que são palíndromos.
Requisitos:
Adicione um método ao protótipo de String para verificar se uma palavra é um palíndromo.
Use filter para filtrar os palíndromos.*/

function verificarPalindromo(lista){
    let novaLista = lista.forEach(element => {
        for (let i = 0; i < element.length; i--){
            let novoElemento = element[i]
            console.log(novoElemento)
            
        }
        
    });
    
    
}


const lista = ["Oto","Maria","A grama é amarga.","Eu amo demais ovo"]
verificarPalindromo(lista)