import React from "react";
import "./style.css";
import API from "../utils/API";
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
    this.setState({
      employeeSorted: this.state.order
        ? this.state.employees.sort((x, y) => {
            if (x.name.first < y.name.first) return -1;
            if (x.name.first > y.name.first) return 1;
            return 0;
          })
        : this.state.employees.reverse((x, y) => {
            if (x.name.first < y.name.first) return 1;
            if (x.name.first > y.name.first) return -1;
            return 0;
          }),
      order: !this.state.order,
    });
  };

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    console.log("click");
    event.preventDefault();
    this.searchEmployee(this.state.search);
    this.setState({
      search: "",
    });
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
        <TableHeader handleSort={this.handleSort} />

        <div>
          {this.state.employeesFiltered.length > 0 ? (
            <div>
              {
                (this,
                state,
                employeesFiltered.map((employee, key) => (
                  <ResultsList
                    picture={employee.picture.large}
                    name={employee.name.first + " " + employee.name.last}
                    phone={employee.phone}
                    email={employee.email}
                    dob={employee.dob}
                    key={key}
                  />
                )))
              }
            </div>
          ) : (
            <div>
              {this.state.employees.map((employee, key) => (
                <ResultsList
                  picture={employee.picture.large}
                  name={employee.name.first + " " + employee.name.last}
                  phone={employee.phone}
                  email={employee.email}
                  dob={employee.dob}
                  key={key}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default EmployeeContainer;
