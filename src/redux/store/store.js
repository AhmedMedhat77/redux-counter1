import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import counterReducer from "../reducers/countReducers";
import hamadaReducer from "../reducers/countReducers";

const root_reducer = combineReducers({
  count: counterReducer,
  hamda: hamadaReducer,
});

const store = configureStore({
  reducer: root_reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
