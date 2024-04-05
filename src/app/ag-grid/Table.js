import React, { useEffect, useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react"; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { Spinner } from "flowbite-react";

const Table = () => {
  const [attendanceData, setAttendanceData] = useState(null);
  const [selectedClass, setSelectedClass] = useState("All");
  const [selectedDate, setSelectedDate] = useState("");
  const [username, setUsername] = useState("");
  const [rowData, setRowData] = useState(null);

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
          college: "KMIT",
        }),
      };

      const response = await fetch(
        "http://localhost:5000/api/details/table-details",
        requestBody
      );
      const data = await response.json();
      setRowData(data);
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

  const [columnDefs, setColumnDefs] = useState([
    // {
    //   field: 'make',
    // //   checkboxSelection: true,
    // //   editable: true,
    //   cellEditor: 'agSelectCellEditor',
    //   cellEditorParams: {
    //     values: [
    //      "class",
    //      "Date",
    //      "user_name",
    //      "total_time"
    //     ],
    //   },
    // },
    { field: "Class", flex: 2 },
    { field: "Date", flex: 2, filter: "agNumberColumnFilter" },
    { field: "Student ID", flex: 2 },
    {
      field: "Total Time in Class",
      flex: 2,
    },
  ]);

  const defaultColDef = useMemo(() => {
    return {
      filter: "agTextColumnFilter",
      floatingFilter: true,
    };
  }, []);

  return (
    <div className="ag-theme-quartz w-3/4 mx-auto pt-2">
      <div className="px-4 mx-auto text-center py-1">
        <p className=" py-4 text-center flex mx-auto justify-center text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          Search for attendance
        </p>
      </div>
      {rowData ? (
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          rowSelection="multiple"
          suppressRowClickSelection={true}
          pagination={true}
          paginationPageSize={20}
          paginationPageSizeSelector={[200, 500, 1000]}
        />
      ) : (
        <div className="flex flex-col mx-auto items-center justify-center">
          <Spinner />
          <p className="pt-5">Loading details...</p>
        </div>
      )}
    </div>
  );
};

export default Table;
