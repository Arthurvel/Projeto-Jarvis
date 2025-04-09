
//camada de regra de négocio
// o ideal não é chamar o banco de dados direto :)

import * as historyRepo from "./repository"

// não fiz validação pois não acredito que seje necessário validar, se um report já existe, já que a ideia é "baixar" um report sempre que quiser
export function createHistory (history){
    historyRepo.createHistory(history);
    return history;
}

export function listHistory(){
    return historyRepo.listHistory();
}

export function vizualizeHistory(id){
    return reportRepo.findOneReport(id);
}

export const updateReport = (id, newReport) => {
    reportRepo.updateReport(id, newReport);
}

export function deleteReport(id){
    reportRepo.destroyReport(id);
}