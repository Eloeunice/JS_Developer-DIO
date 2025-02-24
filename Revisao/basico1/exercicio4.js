var temperaturaCelsius = 37

function converterParaFahrenheit(){
    let temperaturaFahrenheit =  (temperaturaCelsius * 1.80) + 32
    return temperaturaFahrenheit
}

console.log(converterParaFahrenheit(temperaturaCelsius))