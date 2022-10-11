import { addFunc } from "./addFunc";
import ToDoSez from "./toDoSez";

const InputSez = () => {

    return(
        <>
            <div className="inputSez">

                <form>

                    <input type="text" />
                    <button className="addToDoBtn" onClick={ (e) => {inputValue = addFunc(e)} }>Add</button>
                    
                </form>

            </div>

            <ToDoSez inputValue={test}/>
        </>
    );
}

export default InputSez;