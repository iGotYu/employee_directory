import React from "react";
import "./style.css";
import API from "../../utils/API";
import Header from "../Header/Header";
import ResultsList from "../ResultsList/ResultsList";
import Search from "../Search/Search";

class EmployeeContainer extends React.Component {
  state = {
    search: "",
    employees: [],
    employeesFiltered: [],
    error: "",
    employeeSorted: [],
    order: false
  };

  componentDidMount() {
    API.getRandomEmp()
      .then((res) => {
        this.setState({
          employees: res.data.results,
          employeesFiltered: res.data.results,
        });
      })
      .catch((err) => console.log(err));
  }

  handleReload = (event) => {
    event.preventDefault();
    this.componentDidMount();
    this.setState({
      search: "",
    });
  };

  searchEmployee = (firstName) => {
    const tempFiltered = this.state.employees.filter((employee) => {
      if (employee.name.first.includes(firstName)) {
        return employee;
      } else if (employee.name.first.includes(!firstName)) {
        return employee;
      }
      return false;
    });
    this.setState({
      employeesFiltered: tempFiltered,
    });
  };

  sortEmployees = () => {

    console.log("********sort working ...");

    this.setState({
      employeesFiltered: 
      
      this.state.order
        ? this.state.employeesFiltered.sort((x, y) => {
            if (x.name.first < y.name.first) return -1;
            if (x.name.first > y.name.first) return 1;
            return 0;
          })
        : this.state.employeesFiltered.reverse((x, y) => {
            if (x.name.first < y.name.first) return 1;
            if (x.name.first > y.name.first) return -1;
            return 0;
          }),

      order: !this.state.order,
    });
  };

  handleInputChange = (event) => {
    //const name = event.target.name;
    const value = event.target.value.toLowerCase();

    const tempFiltered = this.state.employees.filter(
      (employee) => employee.name.first.toLowerCase().indexOf(value) > -1
    );

    this.setState({
      employeesFiltered: [...tempFiltered],
    });
  };

  // handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   const value = event.target.value.toLowerCase();
  //   const tempFiltered = this.state.employees.filter(
  //     (employee) => employee.name.first.toLowerCase().indexOf(value) > -1
  //   );

  //   this.setState({
  //     employeesFiltered: [...tempFiltered],
  //   });
  // };

  renderRenderTableRow = () => {
    let result = null;

    if (this.state.employeesFiltered.length > 0) {
      result = this.state.employeesFiltered.map((employee, key) => (
        <ResultsList
          picture={employee.picture.large}
          name={employee.name.first + " " + employee.name.last}
          phone={employee.phone}
          email={employee.email}
          dob={employee.dob}
          key={key}
        />
      ));
    }

    return result;
  };

  render() {
    return (
      <div>
        <Header />
        <Search
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          handleReload={this.handleReload}
          search={this.state.search}
        />
        <Header />

        <table className="p-4 text-center" id="results-list">
          <thead>
            <tr>
              <th>Image</th>
              <th onClick={this.sortEmployees}>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>DOB</th>
            </tr>
          </thead>
          <tbody>{this.renderRenderTableRow()}</tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeContainer;
