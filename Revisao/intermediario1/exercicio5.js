// 5. **Contagem Regressiva**: Peça um número e faça uma contagem regressiva até 0.

function regressiva(num) {
    setTimeout(() => {
        for (num; num >= 0; num--) {
            console.log(num)
        }
    }, 2000 * num) 
}

regressiva(4)