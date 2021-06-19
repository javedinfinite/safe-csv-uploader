import Actions from "../actionConstants/employeeActionConstants";

const initialState = {
  employeeList: [],
  isLoading: false,
  selectedEmployee: {},
  uploadStatus: false,
  totalPages: 0,
  totalEmployeesCount: 0,
  currentPage: 0,
  limit: 5,
  error: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.EMPLOYEES_REQUESTED:
      return {
        ...state,
        error: "",
        employeeList: [],
        isLoading: true,
      };
    case Actions.EMPLOYEES_RECEIVED:
      return {
        ...state,
        error: "",
        employeeList: action.payload.employeeList.data || [],
        selectedEmployee: action.payload.employeeList.data[0] || {},
        totalPages: action.payload.employeeList.totalPages,
        totalEmployeesCount: action.payload.employeeList.total,
        currentPage: action.payload.employeeList.currentPage,
        pageLimit: action.payload.employeeList.limit,
        isLoading: false,
      };
    case Actions.EMPLOYEES_ERROR:
      return {
        ...state,
        error:
          action.error || "Something went wrong while fetching employees list",
        isLoading: false,
      };
    case Actions.CSV_UPLOAD_REQUESTED:
      return {
        ...state,
        error: action.error || "",
        uploadStatus: false,
        isLoading: false,
      };
    case Actions.CSV_UPLOAD_RECEIVED:
      return {
        ...state,
        error: "",
        uploadStatus: action.payload.uploadStatus.success || false,
        isLoading: false,
      };
    case Actions.CSV_UPLOAD_ERROR:
      return {
        ...state,
        error: action.error || "Something went wrong while uploading csv",
        isLoading: false,
      };
    default:
      return state;
  }
};
