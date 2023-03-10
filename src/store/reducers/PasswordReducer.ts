interface passwordStateType {
  value: string;
}

interface actionType {
  type: string;
  payload: any;
}

const defaultState: passwordStateType = {
  value: "",
};

const GET_PASSWORD_VALUE = "GET_PASSWORD_VALUE";

export const PasswordReducer = (
  state = defaultState,
  action: actionType
): passwordStateType => {
  switch (action.type) {
    case GET_PASSWORD_VALUE:
      return { ...state, value: action.payload };

    default:
      return state;
  }
};

export const getPasswordValueAction = (payload: string) => ({
  type: GET_PASSWORD_VALUE,
  payload,
});
