import React from "react";
import "./style.css";
import API from "../utils/API";
import Header from "../Header/Header";
import ResultsList from "../ResultsList/ResultsList";
import Search from "../Search/Search";

class Employee extends React.Component {
    state = {
        search:"",
        employees: [],
        employeesFiltered: [],
        error: "",
        employeeSorted: [],
    };

    componentDidMount(){
        API.getRandomEmp()
        .then((res)=>{
            this.setState({
                employees : res.data.results,
                employeesFiltered: res.data.results,
            });
        })
        .catch((err)=> console.log(err));
    }

    handleReload = (event) => {
        event.preventDefault();
        this.componentDidMount();
        this.setState({
            search:""
        })
    };

    
}