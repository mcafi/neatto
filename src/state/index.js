import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

function user(state, action) {
  switch (action.type) {
    case "CHANGE_NAME":
      state.name = action.payload;
      return { ...state };
    case "SET_USER_ID":
      state.userId = action.payload;
      return { ...state };
    default:
      return state;
  }
}

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, user);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
