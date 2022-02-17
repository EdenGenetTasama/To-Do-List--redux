

export const TodoAction=(text)=>{
    return (dispatch)=>{
        const todo = {title: text , isLog: true};
        dispatch({type: "ADD_TODO" , payload: todo});
    }
};