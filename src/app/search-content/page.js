"use client";
import React, { useState, useEffect } from "react";
import SideBar from "../sidebar/page.js";
import Student from "../student/page.js";
import Table from "../ag-grid/Table.js";

const SearchContent = () => {
  const college = "KMIT";
  const batches = ["Elite", "FSA"];
  const [selectedBatch, setSelectedBatch] = useState("Elite");

  return (
    <>
      <div className="flex flex-col-2 ">
        <SideBar />
        {/* <Student /> */}
        
        <Table />
      </div>
    </>
  );
};

export default SearchContent;
