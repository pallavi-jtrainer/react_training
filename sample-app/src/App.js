// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Books from './components/Books';
import AddBook from './components/AddBook';
import Searchbooks from './components/SearchBooks';
import RegistrationPage from './components/RegisterPage';
//import Navbar from './components/NavBar';

function App() {
  const [data, setData] = React.useState([
    {
        id: 1,
        title: 'Book1',
        price: 320
    },
    {
        id: 2,
        title: 'Book2',
        price: 340
    },
    {
        id: 3,
        title: 'Book3',
        price: 240
    },
    {
        id: 4,
        title: 'Book4',
        price: 400
    }
]);
  return (
    <div className="App container">
      <div className='card'>
        <Searchbooks books={data} setData={setData}/>
        <div className='card-body'>
          <Books books={data}/>
          <AddBook setData={setData}/>
          {/* <RegistrationPage/> */}
        </div>
      </div>
      {/* <Navbar/> */}
      
    </div>
  );
}

export default App;
