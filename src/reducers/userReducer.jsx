const INITIAL_STATE = {
  dataBase: [],
  isLoading: true,
  solicitation: [],
  status: [],
  innerSize: {},
  users: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'RESPONSE':
      return {
        ...state, dataBase: [...action.payload],
      };
    case 'USERS':
      return {
        ...state, users: [...action.payload],
      };
    case 'INNER_SIZE':
      return {
        ...state, innerSize: { ...action.payload },
      };
    case 'LOADER':
      return {
        ...state, isLoading: !state.isLoading,
      };
    case 'SOLICITATION':
      return {
        ...state, solicitation: [...action.payload],
      };
    case 'STATUS':
      return {
        ...state, status: [...action.payload],
      };
    default:
      return state;
  }
};

export default userReducer;
