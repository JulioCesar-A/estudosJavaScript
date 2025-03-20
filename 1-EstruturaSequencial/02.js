import readline from 'readline'
import process from 'process'

const rl = readline.createInterface({    
    input : process.stdin,
    output : process.stdout
});

rl.question("Informe um número: ", (num) => {
    if (!isNaN(num)) {
        num = Number(num);
        console.log(`O número informado foi ${num}`)
    } else {
        console.log(`Um número não foi informado`);
    }
    rl.close();
});