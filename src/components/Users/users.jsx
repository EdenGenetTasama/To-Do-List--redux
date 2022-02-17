import { connect } from 'react-redux';


const Users=(props) =>{
  return (
    <div>Users: {props.user[0].userName}</div>
    // <div>{console.log(props.user)}</div>
  )
}

export default  connect((state)=>({user: state.user}))(Users);