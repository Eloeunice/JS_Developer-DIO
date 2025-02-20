/** Descrição:
 Crie um programa que receba um array de palavras e retorne um array contendo apenas as palavras que são palíndromos.
Requisitos:
Adicione um método ao protótipo de String para verificar se uma palavra é um palíndromo.
Use filter para filtrar os palíndromos.*/

function verificarPalindromo(lista){
    let palindromos = []
        // percorrer itens do array
            for(item in lista){
                for( let i = 0; i < item.length; i--){
                    let novaPalavra = item[i]
                } if(novaPalavra = lista){
                    palindromos.push(novaPalavra)
                }
            }
            // percorrer palavras do item e armazenando numa variável
             //comparar a variavel com o item inicial 
             // se for igual vai pro novo array
        console.log(novaPalavra)
    }


const lista = ["Oto","Maria","ovo","Lucia"]
verificarPalindromo(lista)