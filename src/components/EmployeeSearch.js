import React, { useState } from "react";
import axios from "axios";

const EmployeeSearch = ({ setEmployeeData }) => {
    const [ employeeId, setEmployeeId] = useState('');

    const handleSearch = () => {
        const apiUrl = employeeId
        ? `http://localhost:8080/employee/yearlySalary/${employeeId}`
      : 'http://localhost:8080/employees/yearlySalary';

      axios
        .get(apiUrl)
        .then(response => setEmployeeData(response.data))
        .catch(error => console.error('Error fetching employees', error));
    };

    return (
        <div className="my-4">
            <div className="input-group mb-3">
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Enter Employee Id"    
                    value={employeeId}
                    onChange={e => setEmployeeId(e.target.value)}
                />
                <div className="input-group-append">
                    <button className="btn btn-primary"
                            type="button"
                            onClick={handleSearch}>
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmployeeSearch;