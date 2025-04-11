
//camada de regra de négocio
// o ideal não é chamar o banco de dados direto :)

import * as userRepo from "./repository.js"

// não fiz validação pois não acredito que seje necessário validar, se um report já existe, já que a ideia é "baixar" um report sempre que quiser
export function createUser ( user){
    userRepo.createUser(user);
    return user;
}

export function listUser(){
    return userRepo.listUser();
}

export function vizualizeUser(id){
    return userRepo.findOneUser(id);
}

export const updateUser = (id, newUser) =>{
    userRepo.updateUser(id, newUser);
}

export function deleteUser(id){
    userRepo.destroyUser(id);
}