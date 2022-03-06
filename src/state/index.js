import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

function user(state = { name: "", userId: "" }, action) {
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

function privateChat(state = { current: null, active: [] }, action) {
  switch (action.type) {
    case "SET_PRIVATE_CHAT":
      state.current = action.payload;
      return { ...state };
    case "OPEN_CHAT": {
      const hasOpenChat = state.active.findIndex(
        (user) => user.id === action.payload.id
      );
      if (hasOpenChat === -1) state.active = [...state.active, action.payload];
      return { ...state };
    }
    case "CLOSE_CHAT": {
      const tmpActive = [...state.active];
      tmpActive.splice(
        state.active.findIndex((user) => user.id === action.payload),
        1
      );
      state.active = [...tmpActive];
      state.current = null;
      return { ...state };
    }
    default:
      return state;
  }
}

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["privateChat"],
};

const rootReducer = combineReducers({ user, privateChat });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
