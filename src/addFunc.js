import ToDo from "./toDo";

export const addFunc = () => {
    const addBtn = document.querySelector(".addToDoBtn");
    const inputValue = document.querySelector("input").value;

    if(inputValue.split(" ") !== ""){
        return inputValue;
    }
}