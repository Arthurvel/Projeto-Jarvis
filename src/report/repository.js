

//Report 

export function createReport(report){
    setReport(report);
}
export function findAllReport (){
     return getReport();
}

export function findOneReport (id){
     return getReport([id-1]);
}

export function updateReport (id, newReport){
    let report = report();
    report[id-1] = newReport;
}

export function destroyReport (id){
    let report = report();
    report.splice(id-1, 1);
}

