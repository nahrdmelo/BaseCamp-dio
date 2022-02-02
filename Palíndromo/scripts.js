/*criar uma função que recebe dois numeros como parametros  
function comparaNumeros(num1, num2) {
    const saoIguais = num1 === num2; para conferir se os numeros são iguais 
    const soma = num1 + num2;  confira se a soma dos numeros é maior que 10 ou menor que 20 */

    /*retorne a string dizendo "OS NUMEROS NUM1 e NUM2 NÃO/SÃO IGUAIS. SUA SOMA É <SOMA>, QUE É MAIOR/MENOR QUE 10 E MAIOR/MENOR QUE 20"*/
    /* OPÇÃO 1 COM IF if(saoIguais) {
        return "São iguais" ;
    }
    return "Não são iguais"; */

    /*OPÇÃO 2 COM IF TERNÁRIO: 
    return saoIguais ? "São iguais" : "não são iguais"; 

} */


function comparaNumeros (num1, num2) {
    if (!num1 || !num2) return "Defina dois números!";

    const primeiraFrase = criarPrimeiraFrase (num1, num2);
    const segundaFrase = criarSegundaFrase (num1, num2);

    return `${primeiraFrase} ${segundaFrase}`
}

function criarPrimeiraFrase(num1, num2) {
    let saoIguais = '';

    if(num1 !== num2) {
        saoIguais = 'não';
    }
    return `Os número ${num1} e ${num2} ${saoIguais} são iguais.`
}

function criarSegundaFrase(num1, num2){
    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10 ;
    const compara20 = soma > 20 ;

    if(compara10) {
        resultado10 = 'maior';
    }

    if(compara20) {
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`

}

console.log(comparaNumeros());