interface defaultStateType {
  value: number;
}

interface actionType {
  type: string;
  payload: any;
}

const defaultState: defaultStateType = {
  value: 5,
};

const GET_LENGTH_VALUE = "GET_LENGTH_VALUE";

export const CharacterLengthReducer = (
  state = defaultState,
  action: actionType
): defaultStateType => {
  switch (action.type) {
    case GET_LENGTH_VALUE:
      return { ...state, value: action.payload };

    default:
      return state;
  }
};

export const getLengthValueAction = (payload: number) => ({
  type: GET_LENGTH_VALUE,
  payload,
});
