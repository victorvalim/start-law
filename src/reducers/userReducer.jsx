const INITIAL_STATE = {
  dataBase: [],
  isLoading: true,
  solicitation: [],
  status: [],
  innerSize: {},
  users: [],
  filtered: [],
  userAndClient: [],
  editInfo: {},
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'RESPONSE':
      return {
        ...state, dataBase: [...action.payload],
      };
    case 'SHOULD_EDIT':
      return {
        ...state, editInfo: { ...state.editInfo, ...action.payload },
      };
    case 'USER_CLIENT':
      return {
        ...state, userAndClient: [...action.payload],
      };
    case 'FILTERED':
      return {
        ...state, filtered: [...action.payload],
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
