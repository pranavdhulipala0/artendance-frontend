"use client"
import React, { useState, useEffect } from 'react';
import { Button, ButtonGroup, Table, Pagination, Datepicker, Badge } from 'flowbite-react';

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
      let requestBody = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          className: selectedClass === 'All' ? undefined : selectedClass,
          username,
        }),
      };

      // Include date in the request body if selectedDate is not empty
      if (selectedDate) {
        requestBody.body.date = new Date(selectedDate).toISOString().split('T')[0];
      }

      const response = await fetch('/api/search', requestBody);
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

  const isPresent = (totalTime) => {
    const halfTime = 4; // Assuming half time is 4 hours
    const totalTimeHours = millisecondsToHours(totalTime);
    return totalTimeHours >= halfTime;
  };

  const getStatusBadgeStyle = (isPresent) => {
    if (isPresent) {
      return {
        background: 'rgb(145 254 159 / 47%)',
        color: 'green',
        boxShadow: '0px 13px 20px 0px #80808029',
      };
    } else {
      return {
        background: '#ffadad8f',
        color: 'red',
        boxShadow: '0px 13px 20px 0px #80808029',
      };
    }
  };
  
  const renderAttendanceRows = () => {
    return attendanceData.map((entry, index) => (
      <tr key={index}>
        <td>{entry.user_name}</td>
        <td>{millisecondsToHours(entry.total_time)}</td>
        <td>
          <Badge style={getStatusBadgeStyle(isPresent(entry.total_time))}>
            {isPresent(entry.total_time) ? 'Present' : 'Absent'}
          </Badge>
        </td>
      </tr>
    ));
  };

  return (
    <div className="container text-center mt-5 align-items-center">
      <h2 style={{ fontSize: '24px', color: '#333' }}>Search Attendance</h2>
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
        {/* <Datepicker
          label="Select Date"
          onChange={(date) => setSelectedDate(date)}
        /> */}
        
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
          <h2 style={{ fontSize: '20px', color: '#555' }}>Attendance Details:</h2>
          <Table style={{ width: '40%', margin: '0 auto' }}> {/* Adjusted table width and center alignment */}
            <thead>
              <tr>
                <th style={{ width: '33.33%' }}>Roll Number</th> {/* Adjusted column width */}
                <th style={{ width: '33.33%' }}>Total Time (hours)</th> {/* Adjusted column width */}
                <th style={{ width: '0.5%' }}>Status</th> {/* Adjusted column width */}
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
