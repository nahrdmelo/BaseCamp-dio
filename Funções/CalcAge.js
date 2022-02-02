function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: 'Maria',
    idade: 30
}
const pessoa2 = {
    nome: 'João',
    idade: 26
}
const pessoa3 = {
    nome: 'Fiona',
    idade: 7
}

console.log(calculaIdade.call(pessoa1, 20));