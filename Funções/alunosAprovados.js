const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1b'
    },
    {
        nome: 'Sofia',
        nota: 9,
        turma: '1b'
    },
    {
        nome: 'Paulo',
        nota: 6,
        turma: '2c'
    },
    {
        nome: 'Miguel',
        nota: 2,
        turma: '2c'
    },
];

function AlunosAprovados(array, media) {
    let aprovados = [];

    for(let i = 0; i < array.length; i++){

      const {nota, nome} = array[i];

        if(nota >= media) {
            aprovados.push(nome,nota);
        }
    }
    return aprovados;
}

console.log(AlunosAprovados(alunos, 7));