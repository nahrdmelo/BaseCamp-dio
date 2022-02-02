function filtraPares(array){
    return array.filter(callback);
}

function callback(item){
    return item % 2 === 0;
}

const meuArray = [ 1, 7, 23, 8, 60, 20];

console.log(filtraPares(meuArray));

