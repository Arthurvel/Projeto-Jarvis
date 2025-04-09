import * as userService from "./service.js";

export function createUser(req, res){
    try {
        const user = userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({"msg":":("});
    }
}

export function listUser(req, res){
    const user = userService.listUser();
    res.status(201).json(user);
}

export function vizualizeUser(req, res){
    const user = userService.vizualizeUser((req.params.id)-1);
    res.status(201).json(user);
}

export function updateUser(req, res){
    userService.updateUser(parserInt(req.params.id)-1, req.body);
    res.status(204).send();
}

export function deleteUser(req, res){
    userService.deleteUser(parserInt(req.params.id)-1, req.body);
    res.status(204).send();
}
