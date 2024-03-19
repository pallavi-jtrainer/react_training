// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import TodosList from './components/Todos-List';
import {Routes, Route, Link} from 'react-router-dom';
import AddTodo from './components/AddTodo';

// import Counter from './components/ClassComponentDemo';
// import UpdateDemo from './components/ComponentUpdatingPhase';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar nav-expand navbar-dark bg-dark text-white">
          <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/todos"} className='nav-link'>All Todos</Link>
              </li>
              <li className="nav-item">
                <Link to={'/add'} className='nav-link'>
                  Add Todo
                </Link>
                </li>
          </div>
        </nav>
        <div>
          <Routes>
            <Route path='/' element={<TodosList/>}/>
            <Route path='/todos' element={<TodosList/>}/>
            <Route path='/add' element={<AddTodo/>}/>
          </Routes>
        </div>
        <div>
          
        </div>
        {/* <Counter/> */}
        {/* <UpdateDemo /> */}
      </div>
    )
  }
}

export default App;
