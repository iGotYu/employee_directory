import React from "react";
import "./style.css";

import Moment from "react-moment";

function ResultsList(props) {
  return (
    <tr>
      <td>
        <img alt="" src={props.picture} key={props.id}></img>
      </td>
      <td onClick={props.handleSort}>{props.first}</td>
      <td>{props.last}</td>
      <td>{props.name}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.id}</td>
      <td>
        <Moment className="text-center" format="MM/DD/YYY">
          {props.dob}
        </Moment>
      </td>
    </tr>
  );
}

export default ResultsList;
