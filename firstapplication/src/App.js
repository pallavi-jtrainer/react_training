// import logo from './logo.svg';
import './App.css';
import BooksTable from './components/listallbooks/BooksTable';
// import EmployeeTableBody from './components/listemployees/EmployeeBody';
// import EmployeeTableHeader from './components/listemployees/EmployeeHeader';
import EmployeeTable from './components/listemployees/EmployeeTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BooksTable />
        {/* <EmployeeTable /> */}
        {/* <EmployeeTableHeader />
        <EmployeeTableBody /> */}
      </header>
    </div>
  );
}

export default App;
