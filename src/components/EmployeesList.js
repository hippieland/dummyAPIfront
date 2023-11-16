import React, {useState, useEffect} from "react";
import axios from "axios";

const EmployeesList = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/employees/yearlySalary')
            .then(response => setEmployees(response.data))
            .catch(error => console.error('Error fetching list of employees'));
    }, []);

    return (
        <div>
            <h2>Employees List</h2>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>
                        {employee.employee_name} - {employee.employee_salary}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeesList;