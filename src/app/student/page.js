 // StudentSearch.js
"use client"
// import React, { useState } from 'react';
// import { Datepicker, Pagination, Table, Button } from 'flowbite-react';

// const StudentSearch = () => {
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [selectedStartDate, setSelectedStartDate] = useState('');
//   const [selectedEndDate, setSelectedEndDate] = useState('');
//   const [username, setUsername] = useState('');
//   const [attendanceData, setAttendanceData] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [pageSize, setPageSize] = useState(10);

//   const handleStartDateChange = (date) => {
//     setStartDate(date);
//     setSelectedStartDate(date);
//   };

//   const handleEndDateChange = (date) => {
//     setEndDate(date);
//     setSelectedEndDate(date);
//   };

//   const handleSearch = async () => {
//     try {
//       const response = await fetch('/api/search', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           startDate: startDate,
//           endDate: endDate,
//           username: username,
//         }),
//       });
//       const data = await response.json();
//       setAttendanceData(data);
//     } catch (error) {
//       console.error('Error fetching attendance data:', error);
//     }
//   };

//   const millisecondsToHours = (milliseconds) => {
//     return (milliseconds / (1000 * 60 * 60)).toFixed(2);
//   };

//   return (
//     <div className="container text-center mt-5 align-items-center">
//       <h2>Search Attendance</h2>
//       <Datepicker
//         label="Start Date"
//         onChange={(date) => setStartDate(date)}
//         // placeholder="Select Start Date"
//       />
//       <Datepicker
//         label="End Date"
//         onChange={(date) => setEndDate(date)}
//         // placeholder="Select End Date"
//       />
//       {/* {selectedStartDate && selectedEndDate && (
//         <p className="mt-3">Selected Dates: {selectedStartDate} - {selectedEndDate}</p>
//       )} */}
//       <input
//         type="text"
//         className="form-control mt-3 text-center"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <Button className="btn-primary mt-3 text-center" onClick={handleSearch}>Search</Button>
//       {attendanceData.length > 0 && (
//         <div className="mt-5">
//           <h2>Attendance Details:</h2>
//           <Table>
//             <thead>
//               <tr>
//                 <th>Roll Number</th>
//                 <th>Total Time (hours)</th>
//               </tr>
//             </thead>
//             <tbody>
//               {attendanceData.map((entry, index) => (
//                 <tr key={index}>
//                   <td>{entry.user_name}</td>
//                   <td>{millisecondsToHours(entry.total_time)}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//           <Pagination
//             currentPage={currentPage}
//             totalPages={Math.ceil(attendanceData.length / pageSize)}
//             onChange={setCurrentPage}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default StudentSearch;
// StudentSearch.js
import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Table, Pagination, Datepicker } from 'flowbite-react';

const StudentSearch = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedClass, setSelectedClass] = useState('All');
  const [selectedDate, setSelectedDate] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    fetchData();
  }, [selectedClass, selectedDate, username]);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          className: selectedClass === 'All' ? undefined : selectedClass,
          date: selectedDate ? new Date(selectedDate).toISOString().split('T')[0] : undefined,
          username,
        }),
      });
      const data = await response.json();
      setAttendanceData(data);
    } catch (error) {
      console.error('Error fetching attendance data:', error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

    const millisecondsToHours = (milliseconds) => {
    return (milliseconds / (1000 * 60 * 60)).toFixed(2);
  };
  const renderAttendanceRows = () => {
    return attendanceData.map((entry, index) => (
      <tr key={index}>
        <td>{entry.user_name}</td>
        <td>{millisecondsToHours(entry.total_time)}</td>
      </tr>
    ));
  };

  return (
    <div className="container text-center mt-5 align-items-center">
      <h2>Search Attendance</h2>
      <div className="d-flex justify-content-between align-items-center">
        <ButtonGroup>
          {/* Button group for class selection */}
          <Button onClick={() => setSelectedClass('All')} className={selectedClass === 'All' ? 'active' : ''}>All</Button>
          <Button onClick={() => setSelectedClass('Elite')} className={selectedClass === 'Elite' ? 'active' : ''}>Elite</Button>
          <Button onClick={() => setSelectedClass('FSA')} className={selectedClass === 'FSA' ? 'active' : ''}>FSA</Button>
          <Button onClick={() => setSelectedClass('FSA2')} className={selectedClass === 'FSA2' ? 'active' : ''}>FSA2</Button>
          <Button onClick={() => setSelectedClass('FSB')} className={selectedClass === 'FSB' ? 'active' : ''}>FSB</Button>
        </ButtonGroup>
        
        {/* Datepicker for single date selection */}
        <Datepicker
          label="Select Date"
          onChange={(date) => setSelectedDate(date)}
          
        />
        
        <input
          type="text"
          className="form-control mt-3 text-center"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {/* <Button className="btn-primary mt-3 text-center" onClick={fetchData}>Search</Button> */}
      </div>
      
      {attendanceData.length > 0 && (
        <div className="mt-5">
          <h2>Attendance Details:</h2>
          <Table>
            <thead>
              <tr>
                <th>Roll Number</th>
                <th>Total Time (hours)</th>
              </tr>
            </thead>
            <tbody>
              {renderAttendanceRows()}
            </tbody>
          </Table>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(attendanceData.length / pageSize)}
            onChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default StudentSearch;
