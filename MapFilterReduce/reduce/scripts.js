function somaNumeros(array) {
   return array.reduce(function(prev, current){
        return prev + current;
    })
}

const array = [1, 2,];

console.log(somaNumeros(array));


//Lista de preços


const lista = [
    {
        nome: 'sabão em pó',
        preco: 20,
    },
    {
        nome: 'cereal',
        preco: 13,
    },
    {
        nome: 'toalha',
        preco: 50,
    },
    {
        nome: 'pão',
        preco: 7,
    },
];

const saldoDisponivel = 100

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index){
        console.log('rodada', index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));
