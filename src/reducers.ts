import { combineReducers, createStore } from 'redux'

import dummyReducer from './containers/Dummy/reducer'

const rootReducer = combineReducers({
  dummy: dummyReducer,
})

export default rootReducer
