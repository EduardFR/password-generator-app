interface characterType {
  active: boolean;
}

interface payloadType {
  name: string;
  active: boolean;
}

interface CharacterStateType {
  upper: characterType;
  lower: characterType;
  numbers: characterType;
  symbols: characterType;
}

interface actionType {
  type: string;
  payload: payloadType;
}

const defaultState: CharacterStateType = {
  upper: {
    active: true,
  },
  lower: {
    active: false,
  },
  numbers: {
    active: false,
  },
  symbols: {
    active: false,
  },
};

const GET_TYPE_VALUE = "GET_TYPE_VALUE";

export const CharacterTypeReducer = (
  state = defaultState,
  action: actionType
): CharacterStateType => {
  switch (action.type) {
    case GET_TYPE_VALUE:
      let key = action.payload.name as keyof typeof state;
      state[key] = { active: action.payload.active };

      return {
        ...state,
      };

    default:
      return state;
  }
};

export const getTypeValueAction = (payload: payloadType) => ({
  type: GET_TYPE_VALUE,
  payload,
});
