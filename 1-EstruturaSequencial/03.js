import readline from 'readline'
import process from 'process'

const rl = readline.createInterface({    
    input : process.stdin,
    output : process.stdout
});

let soma = 0

rl.question("Informe um número: ", (num1) => {
    rl.question("Informe outro número: ", (num2) => {
        if (!isNaN(num1) && !isNaN(num2)) {
            soma = Number(num1) + Number(num2)
            console.log(`A soma dos dois números é: ${soma}`);
        } else {
            console.log("Números não foram informados");
        }
        rl.close();
    })
});