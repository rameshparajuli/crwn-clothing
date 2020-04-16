import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import logger from "redux-logger"; // logger for middleware
import storage from "redux-persist/lib/storage";

import rootReducer from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(thunk, ...middlewares)
);

const persistor = persistStore(store);

export { store, persistor };
