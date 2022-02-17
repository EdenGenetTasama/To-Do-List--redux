import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import storeAll from "./redux/store";
import Todo from './components/Todos/todo';
import Users from './components/Users/users';

function App() {
  return (
    <div className="App">
      <Provider store={storeAll}>
      <Todo/>
      <Users/>
      </Provider>
    </div>
  );
}

export default App;
