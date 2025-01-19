// CALLBACKS E PROMISES

//programação assincrona

//PROMISES (pending, fullfilled, rejected)

const Promessa = new Promise((resolve,reject) => {
    resolve(console.log('FOI'))
})

Promessa.then(data => console.log(data)).catch(error => console.log(error))