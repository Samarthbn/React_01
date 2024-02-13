import React from 'react';
import EmpData from "./emp-data";

const employees = [
  { id: "emp1", name: "samarth bn", DOB: new Date(2001, 12, 21), exp: '2 Years' },
  { id: "emp2", name: "akash hr", DOB: new Date(2002, 12, 18), exp: '1 Years' }, 
  { id: "emp3", name: "vivek s", DOB: new Date(2003, 9, 6), exp: '5 Years' },
];

function EmpDet() {
  return (
    <div>
      <h1> EMPLOYEE DETAILS </h1>
      {employees.map(employee => <EmpData key={employee.id} employee={employee} />)}
    </div>
  );
}

export default EmpDet;