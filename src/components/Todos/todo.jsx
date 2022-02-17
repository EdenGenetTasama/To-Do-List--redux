import { connect } from "react-redux";

const Todo =(props)=>{

    return(
        <div>
           {props.todos.map((item,i)=>
               <p>{item.title}</p>
           )}
        </div>
    )
}

export default connect((state)=>({todos: state.todos}))(Todo);