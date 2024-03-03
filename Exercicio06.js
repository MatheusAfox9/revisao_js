for (let numero = 1; numero <= 100; numero++) {
    // Verifica múltiplos de 3 e 5
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log("FizzBuzz");
    }
    // Verifica múltiplos de 3
    else if (numero % 3 === 0) {
        console.log("Fizz");
    }
    // Verifica múltiplos de 5
    else if (numero % 5 === 0) {
        console.log("Buzz");
    }
    // Imprime o número se não for múltiplo de 3 nem de 5
    else {
        console.log(numero);
    }
}
