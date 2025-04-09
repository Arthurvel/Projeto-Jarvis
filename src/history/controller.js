import * as historyService from "./service.js";

export function createHistory(req, res){
    try {
        const history = historyService.createHistory(req.body);
        res.status(201).json(history);
    } catch (error) {
        res.status(400).json({"msg":":("});
    }
}

export function listHistory(req, res){
    const history = historyService.listHistory();
    res.status(201).json(history);
}

export function vizualizeHistory(req, res){
    const history = historyService.vizualizeHistory((req.params.id)-1);
    res.status(201).json(history);
}

export function updateHistory(req, res){
    historyService.updateHistory(parserInt(req.params.id)-1, req.body);
    res.status(204).send();
}

export function deleteHistory(req, res){
    historyService.deleteHistory(parserInt(req.params.id)-1, req.body);
    res.status(204).send();
}
