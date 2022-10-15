import { removeToDoFunc } from "./removeToDoFunc.js";

const ToDo = ({value}, {index}) => {

    
    return (

        <div className="toDo" key={index}>
            <p>
                {value}
            </p>
            <button className="deleteBtn" onClick={(e) => {removeToDoFunc(e);}}>
                <img src={require("./images/icons8-elimina-per-sempre-60.png")} />
            </button>
        </div>

    );
}

export default ToDo;