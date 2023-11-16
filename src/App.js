import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeSearch from './components/EmployeeSearch';
import EmployeeTable from './components/EmployeeTable';
import './App.css';
//Logo taken from https://bigbuckclub.com/become-a-partner/dummy-logo-2/
import logo from 'C:/Users/sanch/dummy-frontend/src/dummy.png';


function App() {
  
  const [employeeData, setEmployeeData] = useState([]);

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img
            src={logo}
            alt="Logo"
            style={{ width: '100px', marginRight: '40px' }} 
          />
          Dummy API
        </a>
      </nav>
      <main>
        <EmployeeSearch setEmployeeData={setEmployeeData} />
        <EmployeeTable employeeData={employeeData} />
      </main>
    </div>
  );
}

export default App;
