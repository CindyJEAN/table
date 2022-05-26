import React, { useEffect, useState } from "react";
import "./table.css";
import employees from "../employees.json";
// async function getData() {
//   const fetchedData = await fetcher(
//     "https://api.mockaroo.com/api/bf9f9b10?count=10&key=f4b6d6b0"
//   );
//   return fetchedData;
// }

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


function Table() {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (data === null) {
      setData(employees);
    }
  }, []);
  console.log(data);

  

  return (
    <table>
      <thead>
        <tr>
          {headCells.map((headCell, index) => (
            <th key={index}>{headCell.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>{employees.map((employee, employeeIndex) => (
        <tr key={employeeIndex}>
          {Object.keys(employee).map((cell, cellIndex) => (
            <td key={cellIndex}>{employee[cell]}</td>
          ))}
        </tr>

      ))}</tbody>
    </table>
  );
}

export default Table;
