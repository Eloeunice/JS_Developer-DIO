// CALLBACKS E PROMISES

//programação assincrona

//PROMISES (pending, fullfilled, rejected)

const doSomethingPromise = () => new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('Primeiro dado')
    },1000)
})

const doOtherThingPromise = () => new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve('Segundo dado')
    },1000)
})

Promise.race([doSomethingPromise], [doOtherThingPromise]).then(data => {console.log(data)})

// fetch ()  faz requisições

fetch('/JS_Developer/ES6/rest.js', {
    method: post
})
    .then(responseStream => responseStream.json())
    .then(data => console.log(data))
    .catch(err => { console.log('ERRO -> ',err)})


