// Navbar.js
import React, { useState } from 'react';
import { Button } from 'flowbite-react';

const Navbar = ({ setBatch, setStartDate, setEndDate, batches }) => {
  const [startDate, setStartDateLocal] = useState('');
  const [endDate, setEndDateLocal] = useState('');

  const handleStartDateChange = (e) => {
    setStartDateLocal(e.target.value);
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDateLocal(e.target.value);
    setEndDate(e.target.value);
  };

  return (
    <>
      <div className='flex mx-auto py-8 justify-center'>
        <h4>  From: </h4>
        <input type="date" value={startDate} onChange={handleStartDateChange} />
        <h4>To:</h4>
        <input type="date" value={endDate} onChange={handleEndDateChange} />
        <Button.Group outline>
          {batches.map((batch) => (
            <Button key={batch} onClick={() => setBatch(batch)}>{batch}</Button>
          ))}
        </Button.Group>
      </div>
    </>
  );
}

export default Navbar;
