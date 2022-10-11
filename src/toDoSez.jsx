import ToDo from "./toDo";

const ToDoSez = (props) => {


    return (
        <div className="toDoSez">
            <ToDo textToDo={props.inputValue} />
        </div>
    );
}

export default ToDoSez;