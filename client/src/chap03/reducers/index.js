import {combineReducers} from "redux";
import {ADD} from "../actions";

const initState = {
  str: 'react'
}

const data = (state = initState, action) => {
  switch (action.type) {
    case ADD:
      return {
        str: state.str + '200'
      }
    default:
      return state
  }
}

const App = combineReducers({data})

export default App;