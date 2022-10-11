const ToDo = (props) => {
    return (

        <div className="toDo">
        <p>
            {props.textToDo}
        </p>
        <button className="deleteBtn">
            <img src={require("./images/icons8-elimina-per-sempre-60.png")} />
        </button>
    </div>

    );
}

export default ToDo;