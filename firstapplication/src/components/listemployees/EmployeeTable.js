import React from "react";
import EmployeeTableHeader from "./EmployeeHeader";
import EmployeeTableBody from "./EmployeeBody";

export default function EmployeeTable() {
    return (
        <div>
            <table className="table table-striped">
                <EmployeeTableHeader/>
                <EmployeeTableBody />
            </table>
        </div>
        
    );
}