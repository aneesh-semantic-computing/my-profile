'use client';
import React, { useState } from 'react'
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";

const SkillMatrix = (skills:any) => {
  // Row Data: The data to be displayed.
 const [rowData, setRowData] = useState(skills);
  
  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "Skill" },
    { field: "Category" },
    { field: "Experience" },
    { field: "Competency" },
    { field: "LastUsed" }
  ]);
 
  return (
    <AgGridReact></AgGridReact>
  )
}

export default SkillMatrix