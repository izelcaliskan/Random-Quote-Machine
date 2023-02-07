import { configureStore, combineReducers } from '@reduxjs/toolkit'

const defaultState = {
  login: false
};

const myReducer = (state = defaultState, action) => {
  // Change code below this line
  return action.type == 'LOGIN' ? { login: true } : state;
  // Change code above this line
};


const combinedReducers = combineReducers({
  my: myReducer
});

export default configureStore({
  reducer: combinedReducers
})
