function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Natalia', 'Admin');
usuarios.set('Pedro', 'Admin');
usuarios.set('Carol', 'User');
usuarios.set('Elias', 'User');

console.log(getAdmins(usuarios));