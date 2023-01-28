interface characterType {
  name: string;
  value: boolean;
}

interface defaultStateType {
  upper: characterType;
  lower: characterType;
  numbers: characterType;
  symbols: characterType;
}

interface actionType {
  type: string;
  payload: characterType;
}

const defaultState: defaultStateType = {
  upper: {
    name: "Include Uppercase Letters",
    value: true,
  },
  lower: {
    name: "Include Lowercase Letters",
    value: false,
  },
  numbers: {
    name: "Include Numbers",
    value: false,
  },
  symbols: {
    name: "Include Symbols",
    value: false,
  },
};

const GET_TYPE_VALUE = "GET_TYPE_VALUE";

export const CharacterTypeReducer = (
  state = defaultState,
  action: actionType
): defaultStateType => {
  switch (action.type) {
    case GET_TYPE_VALUE:
      let key = action.payload.name as keyof typeof state;
      state[key] = { name: state[key].name, value: action.payload.value };

      return {
        ...state,
      };

    default:
      return state;
  }
};

export const getTypeValueAction = (payload: characterType) => ({
  type: GET_TYPE_VALUE,
  payload,
});
