import React, {useEffect, useState} from "react";

function Registration() {
    const [data, setData] = useState([]); //store the employees data

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [country, setCountry] = useState("");
    const [salary, setSalary] = useState("");

    const [reqId, setReqId] = useState("");
    const [reqName, setReqName] = useState("");
    const [reqCountry, setReqCountry] = useState("");
    const [reqSalary, setReqSalary] = useState("");

    const [btnText, setBtnText] = useState("Submit");

    const [enabled, setEnabled] = useState(false);
    
    useEffect(()=>{
        getData()
    }, [])

    const getData = () => {
        fetch("http://localhost:8090/Employees")
        .then((response) => response.json())
        .then((result) => {
            setData(result)
        })
    }

    const Validate = () => {
        if(id.trim() === "") setReqId("required")
        else if(name.trim() === "") setReqName("required")
        else if(country.trim() === "") setReqCountry("required")
        else if(salary.trim() === "") setReqSalary("required")
        else return true
    }

    const ResetForm = () => {
        setId("");
        setName("");
        setCountry("");
        setSalary("");
    }

    const ResetErrorMessage = () => {
        setReqId("");
        setReqName("");
        setReqCountry("");
        setReqSalary("");
    }

    const updateRecord = (item) => {
        setId(item.id)
        setName(item.name)
        setCountry(item.country)
        setSalary(item.salary)
        setBtnText("Update")
        setEnabled(true)
    }

    const Register = (e) => {
        e.preventDefault();

        ResetErrorMessage();

        if(Validate()) {
            if(btnText === "Submit") {
                
                // document.getElementById("id").disabled = false;
                // document.getElementById("name").disabled = false;
                fetch("http://localhost:8090/Employees", {
                    method: 'POST',
                    body: JSON.stringify({
                        id: id,
                        name: name,
                        country: country,
                        salary: salary
                    }),
                    headers: {
                        'Content-type': 'application/json'
                    }
                }).then((response) => response.json())
                .then((result) => {
                    console.log(result)
                    alert("Record Inserted")
                    getData()
                    ResetForm()
                    ResetErrorMessage()
                })
            }
            else {
                // document.getElementById("id").disabled = true;
                // document.getElementById("name").disabled = true;
                fetch("http://localhost:8090/Employees/" + id, {
                    method: 'PUT',
                    body: JSON.stringify({
                        name: name,
                        country: country,
                        salary: salary
                    }),
                    headers: {
                        'Content-type': 'application/json'
                    }
                }).then((response) => response.json())
                .then((result) => {
                    console.log(result)
                    alert("Record Updated")
                    getData()
                    ResetForm()
                    ResetErrorMessage()
                    setBtnText("Submit")
                    setEnabled(false)
                })
            }
        }
    }

    const deleteRecord = (id) => {
        fetch("http://localhost:8090/Employees/" + id, {
            method: 'DELETE'
        }).then((response) => response.json())
        .then((result) => {
            alert("Record Deleted")
            getData()
        })
    }

    return (
        <div>
            <h2>CRUD Operations</h2>
            <div style={{width: '40%', float: 'left', marginLeft: '10%'}}>
                <table className="table table-striped">
                    <thead className="table-dark">
                        <tr>
                            <th>Employee Id</th>
                            <th>Employee Name</th>
                            <th>Country</th>
                            <th>Salary</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data ? data.map((item, index) => 
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.country}</td>
                                <td>{item.salary}</td>
                                <td>
                                    <button className="btn btn-warning"
                                        onClick={(e) => {updateRecord(item)}}>
                                        Edit
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-danger"
                                        onClick={(e) => {deleteRecord(item.id)}}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ): null}
                    </tbody>
                </table>
            </div>
            <div style={{float: 'right', width: '40%', marginRight: '60px'}}>
                <form onSubmit={Register}>
                    <table className="table">
                        <thead className="table-dark">
                            <tr>
                                <th colSpan={2}>
                                    <center>Employee Registration Form</center>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><b>ID: </b></td>
                                <td>
                                    <input type="number" value={id} id="id" 
                                     name="id" className="form-control" 
                                     onChange={(e) => setId(e.target.value)}
                                     disabled = {enabled}/>
                                     <br/>
                                     {reqId === "required" && <span className="text-red">Please Enter Id</span>}
                                </td>
                            </tr>
                            <tr>
                                <td><b>NAME: </b></td>
                                <td>
                                    <input type="text" value={name} id="name" 
                                     name="name" className="form-control"
                                     onChange={(e) => setName(e.target.value)}
                                     disabled = {enabled}/>
                                     <br/>
                                     {reqName === "required" && <span className="text-red">Please Enter Name</span>}
                                </td>
                            </tr>
                            <tr>
                                <td><b>COUNTRY: </b></td>
                                <td>
                                    {/* <input type="text" value={country} id="country" 
                                     name="country" className="form-control" /> */}
                                     <select name="country" className="form-control"
                                        value={country} 
                                        onChange={(e) => setCountry(e.target.value)}>
                                        <option value="">Select Country</option>
                                        <option value="India">India</option>
                                        <option value="US">US</option>
                                     </select>
                                     <br/>
                                     {reqCountry === "required" && <span className="text-red">Please select a country</span>}
                                </td>
                            </tr>
                            <tr>
                                <td><b>SALARY: </b></td>
                                <td>
                                    <input type="number" value={salary} id="salary" 
                                     name="salary" className="form-control" 
                                     onChange={(e) => setSalary(e.target.value)}/>
                                     <br/>
                                     {reqSalary === "required" && <span className="text-red">Please enter salary</span>}
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <button className="btn btn-success" type="submit">{btnText}</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
        
    )
}

export default Registration