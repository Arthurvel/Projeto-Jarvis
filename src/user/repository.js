

export function createUser (user){
    setUser(user);
}

export function findAllUser (){
     return getUser();
}

export function findOneUser (id){
     return getReport([id-1]);
}

export function updateUser (id, newUser){
    let user = getUser();
    user[id-1] = newUser;
}

export function destroyUser (id){
    let user = getUser();
    user.splice(id-1, 1);
}