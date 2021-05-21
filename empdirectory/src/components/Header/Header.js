import React from "react";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <h1 className="text-center">Employee Directory </h1>
      <p className="text-center">
        Click on column headers to filter by table heading or use the search box
        to narrow your results
      </p>
    </header>
  );
}

export default Header;
