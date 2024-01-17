const alunos = [
    {
        nome: 'João',
        nota: 8,
    },
    {
        nome: 'Mario',
        nota: 3,
    },
    {
        nome: 'Julia',
        nota: 6,
    },
    {
        nome: 'Marcos',
        nota: 5,
    }
];

function alunosAprovados(alunos) {
    const aprovados = alunos.filter((alunos) => alunos.nota >= 6)
    console.log(aprovados)
};
alunosAprovados(alunos);