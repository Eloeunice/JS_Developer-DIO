/** Descrição:
 Implemente uma função que receba uma string e um caractere e conte quantas vezes o caractere aparece na string.
Requisitos:
Adicione o método ao protótipo de String.
Use um loop (for).*/

function contarCaracteresString(string,caractere){
    let acc = 0
    for (let i = 0; i < string.length; i++ ){
        if(string[i] === caractere){
            acc++
        }
    }
    console.log(caractere,acc)
} 


contarCaracteresString('aleluia','a')