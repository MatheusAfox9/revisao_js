// Cria uma lista de números
const numeros = [1, 2, 3, 4, 5];

// Função que dobra o valor de um número
function dobrarNumeros(lista) {
    return lista.map(function(valor) {
        return valor * 2;
    });
}

// Armazena o resultado em uma nova variável
const numerosDobrados = dobrarNumeros(numeros);

// Imprime a nova lista de números dobrados
console.log(numerosDobrados);
