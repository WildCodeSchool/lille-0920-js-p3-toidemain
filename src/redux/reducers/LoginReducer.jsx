const initialState = {
  id: "",
  email: "",
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, ...action.user };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};

export default LoginReducer;
