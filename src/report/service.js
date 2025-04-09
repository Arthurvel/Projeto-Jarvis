
//camada de regra de négocio
// o ideal não é chamar o banco de dados direto :)

import * as reportRepo from "./repository"

// não fiz validação pois não acredito que seje necessário validar, se um report já existe, já que a ideia é "baixar" um report sempre que quiser
export function createReport ( report){
    reportRepo.createReport(report);
    return report;
}

export function listReport(){
    return reportRepo.listReport();
}

export function vizualizeReport(id){
    return reportRepo.findOneReport(id);
}

export const updateReport = (id, newReport) =>{
    reportRepo.updateReport(id, newReport);
}

export function deleteReport(id){
    reportRepo.destroyReport(id);
}