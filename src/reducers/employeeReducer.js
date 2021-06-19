import Actions from  '../actionConstants/employeeActionConstants'

const initialState = {
  employeeList: [],
  isLoading: false,
  selectedEmployee: {},
  totalPages:0,
  totalEmployeesCount:0,
  currentPage:0,
  limit:5,
  // NextPage:0,
  // Previouspage:0,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.EMPLOYEES_REQUESTED:
      return {
        ...state,
        error: '',
        employeeList: [],
        isLoading: true,
      };
      case Actions.EMPLOYEES_RECEIVED:
      return {
        ...state,
        error: '',
        employeeList: action.payload.employeeList.data || [],
        selectedEmployee: action.payload.employeeList.data[0] || {},
        totalPages: action.payload.employeeList.totalPages,
        totalEmployeesCount:  action.payload.employeeList.total,
        currentPage:  action.payload.employeeList.currentPage,
        pageLimit:  action.payload.employeeList.limit,
        isLoading: false,
      };
      case Actions.EMPLOYEES_ERROR:
      return {
        ...state,
        error: action.error || 'Something went wrong while fetching employees list',
        isLoading: false,
      };
      // case Actions.EMPLOYEE_REQUESTED:
      // return {
      //   ...state,
      //   error: action.error || '',
      //   selectedEmployee:   {},
      //   isLoading: false,
      // };
      // case Actions.EMPLOYEE_RECEIVED:
      // return {
      //   ...state,
      //   error:  '',
      //   selectedEmployee: action.payload.employeeDetails || {},
      //   isLoading: false,
      // };
      // case Actions.EMPLOYEE_ERROR:
      // return {
      //   ...state,
      //   error: action.error || 'Something went wrong while fetching employee data',
      //   isLoading: false,
      // };
    default:
      return state;
  }
};