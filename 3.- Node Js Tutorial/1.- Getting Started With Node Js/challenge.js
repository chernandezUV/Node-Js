const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa el 1er Numero :  ', (answer1) => {
    rl.question('Ingresa el 2do Numero :  ', (answer2) => {
        var result = (+answer1) + (+answer2);
        console.log(`La suma es:  ${result}`);
        rl.close();
    });
});