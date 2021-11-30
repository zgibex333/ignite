import { combineReducers } from "redux";
import detailsReducer from "./detailsReducer";
import gamesReducer from "./gamesReducer";

const initState = {
  name: "",
  isLogged: false,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};

const rootReducer = combineReducers({
  games: gamesReducer,
  user: userReducer,
  detail: detailsReducer,
});

export default rootReducer;
