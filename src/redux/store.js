import { combineReducers, createStore } from "redux";
import { ticketsReducer } from "./Tickets/reducer";

const rootReducers = combineReducers({
  ticketsReducer: ticketsReducer,
});

const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
