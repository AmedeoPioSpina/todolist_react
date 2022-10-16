const ToDo = ({value}, {index}) => {

    const handleClick = (e) => {
        const toDoElement = e.target.closest(".toDo")
        toDoElement.remove();
    }

    return (

        <div className="toDo" key={index}>
            <p>
                {value}
            </p>
            <button className="deleteBtn" onClick={(e) => handleClick(e)}>
                <img src={require("./images/icons8-elimina-per-sempre-60.png")} />
            </button>
        </div>

    );
}

export default ToDo;