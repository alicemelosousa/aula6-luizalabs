const rLine = require('readline-sync')


const tempC = rLine.questionFloat(`Digite uma temperatura em Celsius \n`);



function converterTemperatura (temp) { //preciso passar o parametro
    const tempF = ((9*temp)/5)+32;
    console.log(`A temperatura em Fº é ${tempF}`);
    
}

converterTemperatura(tempC)