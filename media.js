const rLine = require('readline-sync')


const nome = rLine.question(`Qual seu nome? \n`);

//atenção para o parseFloat, ja que vamos fazer o calculo da média. E as respostas do usuário precisam ser interpretadas como numero


const n1 = parseFloat(rLine.question(`Qual foi sua primeira nota? \n`));
const n2 = parseFloat(rLine.question(`Qual foi sua segunda nota? \n`));
const n3 = parseFloat(rLine.question(`Qual foi sua terceira nota? \n`));

const media = (n1+n2+n3)/3;

var ixibirMedia = function () { 
    
    console.log(`${nome} sua média foi ${media.toFixed(2)}`);
    if (media >= 7) {
        console.log("Aprovada")
    } else if (media >= 5 && media < 7) {
        console.log("Recuperação")
    } else {
        console.log("Reprovada")
    }
  
}


ixibirMedia()