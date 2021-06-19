import axios from "axios";

const baseUrl = "http://localhost:5000/";

export const getAllEmployeesBypageApi = (pageNumber, pageLimit, employeeName) => {
  return axios.get(
    baseUrl +
      "api/employee?pageNumber=" +
      pageNumber +
      "&pageLimit=" +
      pageLimit + 
      "&employeeName=" + 
      employeeName
  );
};

export const uploadCsvApi = (formData) => {
  return axios.post(baseUrl + "api/employee", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
