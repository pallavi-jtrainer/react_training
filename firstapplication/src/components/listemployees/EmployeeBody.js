import React from "react";

const empList = [
    {id: 1, name: 'Prithvi Raj', role: 'Software Developer'},
    {id: 2, name: 'Tony Stark', role: 'Software Developer'},
    {id: 3, name: 'Clark Kent', role: 'Software Developer'},
    {id: 4, name: 'Bruce Wayne', role: 'QA Engineer'}
];

export default function EmployeeTableBody() {
    function handleEditClick() {
        alert('You clicked Edit button');
        // alert(props);
        // console.log(event.target.elements);
    }

    const contents = empList.map(emp => 
            <tr  key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.role}</td>
                <td>
                    <button className="btn btn-warning" 
                        onClick={handleEditClick}>Edit</button>
                    <button className="btn btn-danger">
                        Delete
                    </button>
                </td>
            </tr>
        );
    return (
        <tbody>
            {contents}
        </tbody>

        // <tbody>
        //     <tr>
        //         <td>1</td>
        //         <td>Prithvi Raj</td>
        //         <td>Software Developer</td>
        //     </tr>
        //     <tr>
        //         <td>2</td>
        //         <td>Tony Stark</td>
        //         <td>Software Developer</td>
        //     </tr>
        //     <tr>
        //         <td>3</td>
        //         <td>Clark Kent</td>
        //         <td>Software Developer</td>
        //     </tr>
        // </tbody>
    );
} 