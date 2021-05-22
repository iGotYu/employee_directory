import React from "react";
import "./style.css";

export default function Table(props) {
  return (
    <table className="p-5 text-center" id="table-header">
      <thead>
        <tr>
          <th>Image</th>
          <th onClick={props.handleSort}>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>DOB</th>
        </tr>
      </thead>
    </table>
  );
}
