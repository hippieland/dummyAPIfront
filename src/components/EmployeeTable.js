import React from "react";

const EmployeeTable = ({ employeeData }) => {
    return (
        <div>
            <h2>Dummy Employees</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>SALARY</th>
                        <th>AGE</th>
                        <th>PROFILE IMAGE</th>
                        <th>YEARLY SALARY</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeData.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.employee_name}</td>
                            <td>{employee.employee_salary}</td>
                            <td>{employee.employee_age}</td>
                            <td>{employee.profile_image}</td>
                            <td>{employee.employee_yearly_salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EmployeeTable;