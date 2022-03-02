import { createStore } from "redux";

function user(state, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      state.name = action.payload;
      return {...state}
    default:
      return state;
  }
}

export const store = createStore(user, {name: "", online: true});
