import {useState} from "react";
import { connect } from "react-redux";
import {TodoAction} from "../../redux/actions/todo-action";


const Todo =(props)=>{
const [text, setText] = useState("");
    return(
        <div>
            <h1>Redux</h1>
           To do list: {props.todos.map((item,i)=>
               <p>{item.title}</p>
           )}
           <input type="text" onChange={(e)=>setText(e.target.value)}/>
           <button type="button" onClick={()=>props.TodoAction(text)}>Change</button>
        </div>
    )
}

export default connect((state)=>({todos: state.todos}) , {TodoAction})(Todo);