"use client";
import React, { useState, useEffect } from "react";
import {
  Button,
  ButtonGroup,
  Table,
  Pagination,
  Badge,
  Spinner,
} from "flowbite-react"; // Assuming flowbite-react provides tailwind compatible components

const StudentSearch = () => {
  const [attendanceData, setAttendanceData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [selectedClass, setSelectedClass] = useState("All");
  const [selectedDate, setSelectedDate] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    fetchData();
  }, [selectedClass, selectedDate, username]);

  const fetchData = async () => {
    try {
      let requestBody = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          className: selectedClass === "All" ? undefined : selectedClass,
          username,
        }),
      };

      // Include date in the request body if selectedDate is not empty
      if (selectedDate !== "") {
        requestBody.body = {
          ...requestBody.body,
          date: new Date(selectedDate).toISOString().split("T")[0],
        };
      }

      const response = await fetch("/api/search", requestBody);
      const data = await response.json();
      setAttendanceData(data);
    } catch (error) {
      console.error("Error fetching attendance data:", error);
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
        background: "rgb(145 254 159 / 47%)",
        color: "green",
        boxShadow: "0px 13px 20px 0px #80808029",
      };
    } else {
      return {
        background: "#ffadad8f",
        color: "red",
        boxShadow: "0px 13px 20px 0px #80808029",
      };
    }
  };

  const renderAttendanceRows = () => {
    return (
      <Table.Body className="">
        {attendanceData.map((entry, index) => (
          <Table.Row key={index} className="pt-3 ">
            <Table.Cell className="px-8">{entry.user_name}</Table.Cell>
            <Table.Cell className="p-2">
              {millisecondsToHours(entry.total_time)}
            </Table.Cell>
            <Table.Cell className="pl-28">
              <Badge style={getStatusBadgeStyle(isPresent(entry.total_time))}>
                {isPresent(entry.total_time) ? "Present" : "Absent"}
              </Badge>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    );
  };

  return (
    <div className="container mx-auto text-center mt-5">
      <h2 className="text-3xl text-gray-800 mb-4">Search Attendance</h2>
      <div className="flex justify-center flex-col items-center space-x-4 mb-4">
        <ButtonGroup monotone>
          {/* Button group for class selection */}
          <Button
            onClick={() => setSelectedClass("All")}
            className={selectedClass === "All" ? "active" : ""}
          >
            All
          </Button>
          <Button
            onClick={() => setSelectedClass("Elite")}
            className={selectedClass === "Elite" ? "active" : ""}
          >
            Elite
          </Button>
          <Button
            onClick={() => setSelectedClass("FSA")}
            className={selectedClass === "FSA" ? "active" : ""}
          >
            FSA
          </Button>
          
        </ButtonGroup>
        {/* Datepicker for single date selection */}
        {/* <Datepicker
          label="Select Date"
          onChange={(date) => setSelectedDate(date)}
        /> */}
        <input
          type="text"
          className="my-3 rounded-md"
          placeholder="Search for student..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {/* <Button className="btn-primary mt-3 text-center" onClick={fetchData}>Search</Button> */}
      </div>
      {!attendanceData && (
        <div className="pt-10">
          <Spinner />
          <p className="mt-3">Fetching details</p>
        </div>
      )}
      {attendanceData && attendanceData.length > 0 && (
  <div className="mt-5">
    <h2 style={{ fontSize: "20px", color: "#555" }} className="py-2">
      Attendance Details:
    </h2>
    <div className="flex flex-col justify-center">
      <div className="flex flex-col mx-auto">
        <Table className="w-full">
          <Table.Head>
            <tr>
              <Table.HeadCell className="w-1/3">Roll Number</Table.HeadCell>
              <Table.HeadCell className="w-1/3">Total Time (minutes)</Table.HeadCell>
              <Table.HeadCell className="w-1/3">Status</Table.HeadCell>
            </tr>
          </Table.Head>
          <tbody>{renderAttendanceRows()}</tbody>
        </Table>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default StudentSearch;
