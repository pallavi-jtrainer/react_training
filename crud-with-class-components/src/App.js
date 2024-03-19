// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

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
              <li className="nav-item">All Todos</li>
              <li className="nav-item">Add Todo</li>
          </div>
        </nav>
      </div>
    )
  }
}

export default App;
