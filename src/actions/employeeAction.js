import Actions from "../actionConstants/employeeActionConstants";
import { getAllEmployeesBypageApi, uploadCsvApi } from "../apis";

export const getAllEmployeesBypage = (pageNumber, pageLimit, employeeName='') => {
  return async (dispatch) => {
    dispatch({ type: Actions.EMPLOYEES_REQUESTED });

    try {
      let response = await getAllEmployeesBypageApi(pageNumber, pageLimit, employeeName);
      dispatch({
        type: Actions.EMPLOYEES_RECEIVED,
        payload: { employeeList: response.data },
      });
    } catch (e) {
      dispatch({
        type: Actions.EMPLOYEES_ERROR,
        error: "API to get employee list is failed with error : " + e,
      });
    }
  };
};

export const uploadCsv = (formData) => {
  return async (dispatch) => {
    dispatch({ type: Actions.CSV_UPLOAD_REQUESTED });
    try {
      let response = await uploadCsvApi(formData);
      if (response.data.success)
        // window.location = window.location.origin + "/#/viewEmployees";
      dispatch({
        type: Actions.CSV_UPLOAD_RECEIVED,
        payload: { uploadStatus: response.data },
      });
    } catch (e) {
      dispatch({
        type: Actions.CSV_UPLOAD_ERROR,
        error: "API to upload employees is failed with error : " + e,
      });
    }
  };
};

export const setSearchKey = (searchKey) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'SET_SEARCH_KEY',
        payload: { searchKey: searchKey },
      });
    } catch (e) {
       console.log('something went wrong while setting search key')
    }
  };
};
