// import combine reducers from redux
import { combineReducers } from 'redux'

// import reducers from reducers folder
import todos from './todos'
import loading from './loading'
import goals from './goals'

// export combine reducers passing in an object 
// with the reducers
export default combineReducers({
    todos,
    loading,
    goals
})