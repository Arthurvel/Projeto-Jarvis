import * as reportService from "./service.js";

export function createReport(req, res){
    try {
        const report = reportService.createReport(req.body);
        res.status(201).json(report);
    } catch (error) {
        res.status(400).json({"msg":":("});
    }
}

export function listReport(req, res){
    const report = reportService.listReport();
    res.status(201).json(report);
}

export function vizualizeReport(req, res){
    const report = reportService.vizualizeReport((req.params.id)-1);
    res.status(201).json(report);
}

export function updateReport(req, res){
    reportService.updateReport(parserInt(req.params.id)-1, req.body);
    res.status(204).send();
}

export function deleteReport(req, res){
    reportService.deleteReport(parserInt(req.params.id)-1, req.body);
    res.status(204).send();
}
