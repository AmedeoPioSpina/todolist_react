export const addFunc = (e) => {
    const addBtn = document.querySelector(".addToDoBtn");
    const inputValue = document.querySelector("input").value;
    e.preventDefault();

    if(inputValue.split(" ") !== ""){
       return inputValue
    }
}