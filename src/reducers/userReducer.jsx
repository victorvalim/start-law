const INITIAL_STATE = {
  dataBase: [],
  isLoading: true,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'RESPONSE':
      return {
        ...state, dataBase: { ...action.payload },
      };
    case 'LOADER':
      return {
        ...state, isLoading: !state.isLoading,
      };
    default:
      return state;
  }
};

export default userReducer;
