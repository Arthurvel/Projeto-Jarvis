

//history 

export function createHistory(history){
    setHistory(history);
}

export function findAllHisotry (){
     return getHistory ();
}

export function findOneHistory(id){
     return getHistory ([id-1]);
}

export function updateHistory (id, newHistory){
    let history = history ();
    history[id-1] = newHistory;
}

export function destroyHistory (id){
    let history = history ();
    history.splice(id-1, 1);
}