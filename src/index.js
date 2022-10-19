import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./style.css";
import { useState } from "react";
import ToDo from "./toDo";

const ToDoList = () => {

    const [toDo, setToDo] = useState("");
    const [whatToDoList, setWhatToDoList] = useState([]);

    const handleChange = (e) => {
        setToDo(e.target.value);
    }

    const handleClick = () => {
        const replacedToDo = toDo.replaceAll(" ", "");
        if(replacedToDo.length!== 0){
            setWhatToDoList( prevState => [...prevState, toDo]);
            setToDo("");
        }
    }

    return(
        <div className="toDoList">

            <div className="inputSez">
                <input type="text" onChange={(e) => handleChange(e)} value={toDo} />
                <button className="addToDoBtn" onClick={ () => handleClick()}>Add</button>
            </div>

            <div className="toDoSez">
                {whatToDoList.map((el, index)=>{
                    return <ToDo key={index} value={el} setWhatToDoList={() => setWhatToDoList(prevState => prevState.filter((el, ind) => ind!==index))}/>
                })}
            </div>

        </div>
    );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<ToDoList />);