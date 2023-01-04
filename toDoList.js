const prompt = require("prompt-sync")({ sigint: true});

let toDo = [];
let progres = [];
let done = [];

function addList() {
    item = prompt("votre tache");
    toDo.push(item);
    return toDo;
}

function move() {
    id = prompt("quel élément déplacer ?");
    array = prompt("depuis ?");
    arrayTo = prompt("vers ?");
    arrayTo.push(array[id]);
    array.splice (id, 1);
    return arrayTo, array;
}

function deleteItem(array, id) {
    id = prompt("quel élément supprimer ?");
    array = prompt("de quel liste ?");
    id < array.length && array.splice(id, 1);
    return array;
}

function showArray(array) {
    return console.log(array);   
}

function help() {

}

function toDoList () {
    let instruction = ""
    while (instruction !== "q") {
    instruction = prompt("instruction ?", "help");
    instruction === "help" && help();
    instruction === "add" && addList();
    instruction === "move" && move();
    instruction === "delete" && deleteItem();
    instruction === "show to do" && showArray(toDo);
    instruction === "show in progress" && showArray(progres);
    instruction === "show done" && showArray(done);
    }
}

console.log(toDoList());