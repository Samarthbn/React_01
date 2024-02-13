import React from 'react';
import EmpDob from "./emp-dob";
import './emp-data.css'

function EmpData({ employee }) {
  const { name, DOB, exp } = employee;
  return (
    <div className='emp-data'>
      <div className="emp-details">
        <div className='emp-name'> {name} </div>
        <div className='emp-dob'> <EmpDob DOB={DOB} /> </div>
        <div className='emp-exp'> {exp} </div>
      </div>
    </div>
  );
}
export default EmpData;