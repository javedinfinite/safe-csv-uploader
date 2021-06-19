import { connect } from 'react-redux';
import CsvTable from "./Table";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {getAllEmployeesBypage} from '../actions/employeeAction'
import _ from 'lodash'

// const setData = () =>{
//   this.props.dispatch(getAllEmployeesBypage(2, 20))
// }

class ViewEmployees extends React.Component {

  componentDidMount() {
    this.props.dispatch(getAllEmployeesBypage(1, 5))
  }
  

  setData = (pageNumber, pageLimit) =>{
    this.props.dispatch(getAllEmployeesBypage(pageNumber, pageLimit))
  }
  

  render() {

    const { error, isLoading, employeeList, TotalPages, TotalEmployeesCount, currentPage, pageLimit} = this.props;
     return (<CsvTable data={employeeList} pageLimit={pageLimit} setData={this.setData} totalPages={TotalPages} currentPage={currentPage} TotalRows={TotalEmployeesCount} />) 


    }
};


const mapStateToProps = (state, props) => {
    // if(!_.isEmpty(state.employeeReducer))
    //   console.log("from viewemployees..............",state.employeeReducer.pageLimit)
  return {
    employeeList: state.employeeReducer.employeeList,
    error:  state.employeeReducer.error,
    isLoading: state.employeeReducer.isLoading,
    TotalPages: state.employeeReducer.totalPages,
    TotalEmployeesCount: state.employeeReducer.totalEmployeesCount,
    currentPage: state.employeeReducer.currentPage,
    pageLimit: state.employeeReducer.pageLimit,
     
  };
};

export default connect(mapStateToProps)(ViewEmployees);



