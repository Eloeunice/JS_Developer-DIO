// SYMBOLS E ITERATORS

const uniqueId = Symbol('Botao') // identificador unico

// Well Known Symbols

Symbol.iterator
Symbol.split
Symbol.toStringTag

const arr = [1,2,3,4]

const it = arr[Symbol.iterator]() // ta iterando sobre cada item do array uma vez de cada

while (true){
    let {value, done} = it.next()
    if(done){
        break
    }
    console.log(value)
}

for (let value of arr) {
    console.log(value)
}

// GENERATORS
// controlar o fluxo de uma função

function* hello(){
    console.log('Hello')
    yield 1
    console.log('From')
    yield 2
    console.log('Function')
}

// pausamos a execução da função, dividindo ela em partes
const it2 = hello()
console.log(it2.next())
console.log(it2.next())