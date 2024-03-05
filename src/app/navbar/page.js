"use client"
import React, { useState } from "react";
import { Button } from "flowbite-react";

const Navbar = ({ setBatch, setStartDate, setEndDate, batches }) => {
  const [startDate, setStartDateLocal] = useState("");
  const [endDate, setEndDateLocal] = useState("");

  const handleStartDateChange = (e) => {
    setStartDateLocal(e.target.value);
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDateLocal(e.target.value);
    setEndDate(e.target.value);
  };

  return (
    <div className="flex flex-col mx-auto py-8 items-center">
      <Button.Group outline>
        {batches.map((batch) => (
          <Button key={batch} onClick={() => setBatch(batch)}>
            {batch}
          </Button>
        ))}
      </Button.Group>
      <div className="flex justify-center mt-4">
        <div className="mr-4">
          <h4>From:</h4>
          <input className = "rounded-lg" type="date" value={startDate} onChange={handleStartDateChange} />
        </div>
        <div>
          <h4>To:</h4>
          <input className = "rounded-lg"  type="date" value={endDate} onChange={handleEndDateChange} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
