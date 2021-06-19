import { connect } from "react-redux";
import EmployeeTable from "./EmployeeTable";
import React from "react";
import { getAllEmployeesBypage } from "../actions/employeeAction";
import _ from "lodash";

class ViewEmployees extends React.Component {
  componentDidMount() {
    this.props.dispatch(getAllEmployeesBypage(1, 5));
  }

  setData = (pageNumber, pageLimit, employeeName='') => {
    this.props.dispatch(getAllEmployeesBypage(pageNumber, pageLimit, employeeName));
  };

  render() {
    const {
      error,
      isLoading,
      employeeList,
      TotalPages,
      TotalEmployeesCount,
      currentPage,
      pageLimit,
      searchKey
    } = this.props;
    return (
      <EmployeeTable
        data={employeeList}
        pageLimit={pageLimit}
        setData={this.setData}
        totalPages={TotalPages}
        currentPage={currentPage}
        TotalRows={TotalEmployeesCount}
        searchKey={searchKey}
      />
    );
  }
}

const mapStateToProps = (state, props) => {

  return {
    employeeList: state.employeeReducer.employeeList,
    error: state.employeeReducer.error,
    isLoading: state.employeeReducer.isLoading,
    TotalPages: state.employeeReducer.totalPages,
    TotalEmployeesCount: state.employeeReducer.totalEmployeesCount,
    currentPage: state.employeeReducer.currentPage,
    pageLimit: state.employeeReducer.pageLimit,
    searchKey: state.employeeReducer.searchKey
  };
};

export default connect(mapStateToProps)(ViewEmployees);
