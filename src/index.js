import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./style.css";
import { addFunc } from "./addFunc";
import ToDo from "./toDo";

let historyValues = [];

const ToDoList = () => {

    const [whatToDoList, setWhatToDoList] = React.useState([]);

    return(
        <div className="toDoList">

            <div className="inputSez">

                <form>

                    <input type="text" />
                    <button className="addToDoBtn" onClick={ (e) => {e.preventDefault(); setWhatToDoList( curr => [...curr, addFunc()]); console.log(whatToDoList)} }>Add</button>
                
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