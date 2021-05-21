import React from "react";
import "./style.css";

import Moment from "react-moment";

function ResultsList(props) {
  return (
    <table className="p-4 text-center" id="results-list">
      <tbody>
        <tr>
          <td>
            <img alt="" src={props.picture} key={props.id}></img>
          </td>
          <td>{prop.first}</td>
          <td>{prop.last}</td>
          <td>{prop.name}</td>
          <td>{prop.phone}</td>
          <td>{prop.email}</td>
          <td>{prop.id}</td>
          <td>
            <Moment className="text-center" format="MM/DD/YYY">
              {props.dob}
            </Moment>
          </td>
        </tr>
      </tbody>
    </table>
  );
}


export default ResultsList;
