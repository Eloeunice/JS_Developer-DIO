/** Descrição:
 Crie um programa que receba um array de palavras e retorne um array contendo apenas as palavras que são palíndromos.
Requisitos:
Adicione um método ao protótipo de String para verificar se uma palavra é um palíndromo.
Use filter para filtrar os palíndromos.*/

function verificarPalindromo(lista){
    let palindromos = lista.filter(palavra =>{
            const palavraNormalizada = palavra.toLowerCase()
             let novaPalavra = ""
                for( let i = palavraNormalizada.length - 1; i >= 0; i--){
                    novaPalavra += palavraNormalizada[i]
                } 
                return novaPalavra == palavraNormalizada
            }
        )
        console.log(palindromos)
    }

             
const lista = ["Oto","Maria","ovo","Lucia"]
verificarPalindromo(lista)