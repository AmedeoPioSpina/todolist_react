export const removeToDoFunc = (e) => {
    const toDoElement = e.target.closest(".toDo")
    toDoElement.remove();
}