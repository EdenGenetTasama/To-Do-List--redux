import { connect } from 'react-redux';


const Users=(props) =>{
  return (
    <div>Users {console.log(props.state.user)}</div>
  )
}

export default  connect((state)=>({user: state.user}))(Users);