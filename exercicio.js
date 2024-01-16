console.log('Dados dos personagens:')

class Personagem{
    constructor(nome, sobrenome, idade){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
    info(){
        console.log(`Nome:${this.nome} ${this.sobrenome}, idade:${this.idade}`)
    }
}
class Trabalhador extends Personagem{
    constructor(nome, sobrenome, idade, trabalho, salario) {
        super(nome, sobrenome, idade);
        this.trabalho = trabalho;
        this.salario = salario;
    } 
    info(){
        console.log(`Nome: ${this.nome} ${this.sobrenome}, idade:${this.idade}. Cargo: ${this.trabalho}, salario: ${this.salario}`)
    }
}
class Estudante extends Personagem{
    constructor(nome, sobrenome, idade, curso){
        super(nome, sobrenome, idade);
        this.curso = curso
    }
    info(){
        console.log(`Nome: ${this.nome} ${this.sobrenome}, idade:${this.idade}. Curso: ${this.curso}`)
    }
}

const personagem1 = new Personagem('Arthur','Morgan', 36);
personagem1.info();

const personagem2 = new Trabalhador('James','Bond', 38, 'Agente secreto', 20000);
personagem2.info();

const personagem3 = new Estudante('Peter', 'Parker', 17, 'Ensino Médio');
personagem3.info();