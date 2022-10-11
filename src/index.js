import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./style.css";
import InputSez from "./inputSez";

const ToDoList = () => {

    return(
        <div className="toDoList">

            <InputSez />
            
        </div>
    );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<ToDoList />);