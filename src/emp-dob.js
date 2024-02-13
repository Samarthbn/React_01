import React from 'react';
import './emp-dob.css'

function EmpDob({ DOB }) {
  const year = DOB.getFullYear();
  const month = DOB.toLocaleString('en-US', { month: 'long' });
  const day = DOB.toLocaleString('en-US', { day: '2-digit' });
  return (
    <div className="emp-date-box">
      <div className='emp-dob-month'> {month}</div>
      <div className='emp-dob-year'> {year} </div>
      <div className='emp-dob-day'> {day} </div>
    </div>
  );
}

export default EmpDob;
