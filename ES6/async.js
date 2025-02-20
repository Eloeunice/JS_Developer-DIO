// ASYNC /AWAIT
//criar promises de forma mais simples

const outraPromessa = () => new Promise ((resolve,reject)=> {
    setTimeout(()=> {resolve(console.log('Esta á outra promessa'))}, 1000)
})

const funcaoSimples = async () => {
    await outraPromessa()
    return 'Hello'
}

funcaoSimples().then(data => {
    console.log(data)
})

// EventEmitter

const EventEmitter = require('events')

