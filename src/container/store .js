import allReducers from "../reducers/index";
import { createStore } from 'redux';

const store = createStore(
    allReducers
  );

  
window.store = store
export default store;

