import { createStore } from "redux";

function name(state = "", action) {
  switch (action.type) {
    case "CHANGE_NAME":
      return action.payload;
    default:
      return state;
  }
}

export const store = createStore(name, "senza nome");
