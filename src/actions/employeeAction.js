import Actions from '../actionConstants/employeeActionConstants';
import {getAllEmployeesBypageApi, uploadCsvApi} from '../apis'

export const getAllEmployeesBypage = (pageNumber, pageLimit) => {
  return async (dispatch) => {
    dispatch({type: Actions.EMPLOYEES_REQUESTED});

    try {

      let response = await getAllEmployeesBypageApi(pageNumber, pageLimit)
      console.log("response from actions........", response)
      dispatch({
        type: Actions.EMPLOYEES_RECEIVED,
        payload: {employeeList: response.data},
      });
    } catch (e) {
      dispatch({
        type: Actions.EMPLOYEES_ERROR,
        error: "API to get employee list is failed with error : "+e,
      });
    }
  };
};


export const uploadCsv = (formData) => {
  return async (dispatch) => {
    dispatch({type: Actions.CSV_UPLOAD_REQUESTED});
    try {
      let response = await uploadCsvApi(formData)
      dispatch({
        type: Actions.CSV_UPLOAD_RECEIVED,
        payload: {uploadStatus: response}, //?
      });
    } catch (e) {
      dispatch({
        type: Actions.CSV_UPLOAD_ERROR,
        error: "API to upload employees is failed with error : "+e,
      });
    }
  };
};