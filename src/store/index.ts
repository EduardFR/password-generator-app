import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { CharacterLengthReducer } from "./reducers/CharacterLengthReducer";
import { CharacterTypeReducer } from "./reducers/CharacterTypeReducer";
import { PasswordReducer } from "./reducers/PasswordReducer";

const rootReducer = combineReducers({
  CharacterLength: CharacterLengthReducer,
  CharacterType: CharacterTypeReducer,
  Password: PasswordReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;
