import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./style.css";
import ToDo from "./toDo";

let historyValues = [];

const ToDoList = () => {

    const [toDo, setToDo] = React.useState("");
    const [whatToDoList, setWhatToDoList] = React.useState([]);

    const handleChange = (e) => {
        setToDo(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        if(toDo.replaceAll(" ", "").length!== 0){ 
            setWhatToDoList( curr => [...curr, toDo]);
            setToDo("");
        }
    }

    return(
        <div className="toDoList">

            <div className="inputSez">

                <form>

                    <input type="text" onChange={e => handleChange(e)} value={toDo} />
                    <button className="addToDoBtn" onClick={ (e) => handleClick(e)}>Add</button>
                
                </form>

            </div>

            <div className="toDoSez">

                {whatToDoList.map((el, index)=>{
                    return <ToDo key={index} value={el} />
                })}

            </div>

        </div>
    );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<ToDoList />);