//primeira aula do node.js
//ao executar colocar 'node.js script.js' no terminal

const rLine = require('readline');

const rl = rLine.createInterface ({ //rl é uma variavel responsavel pela interface criada
    input: process.stdin,
    output: process.stdout
});

// => significa que é uma arrow function, retornar valores s/ ser necessário usar o return

rl.question(`Qual o seu nome`, (nome) => {
    console.log(`Olá ${nome}`)
    rl.close() //sem chamar a função close, o programa fica rodadando eternamente
})

rl.on('close', () => {
    console.log('Obrigada, volte sempre!')
})