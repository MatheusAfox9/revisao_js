class Pessoa {
    constructor(nome, idade, profissao) {
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

    exibirInfo() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Profissao: ${this.profissao}`);
    }
}

// Criar um objeto Pessoa
const pessoa = new Pessoa('Matheus', 30, 'Desenvolvedor');

// Chamar o método exibirInfo do objeto pessoa
pessoa.exibirInfo();
