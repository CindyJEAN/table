import React, { useEffect, useState } from "react";
import "./table.css";
import employees from "../employees.json";


export function Table() {
  const headCells = [
    { label: "First Name", data: "firstName" },
    { label: "Last Name", data: "lastName" },
    { label: "Start Date", data: "startDate" },
    { label: "Department", data: "department" },
    { label: "Date of Birth", data: "dateOfBirth" },
    { label: "Street", data: "street" },
    { label: "City", data: "city" },
    { label: "State", data: "state" },
    { label: "Zip Code", data: "zipCode" },
  ];
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   if (data === null) {
  //     setData(employees);
  //   }
  // }, []);

  return (
    <table>
      <thead>
        <tr>
          {headCells.map((headCell, index) => (
            <th key={index}>{headCell.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* {employees.map((employee, employeeIndex) => (
          <tr key={employeeIndex}>
            {Object.keys(employee).map((cell, cellIndex) => (
              <td key={cellIndex}>{employee[cell]}</td>
            ))}
          </tr>
        ))} */}
      </tbody>
    </table>
  );
}

