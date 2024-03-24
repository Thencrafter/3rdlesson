import {createStore, combineReducers} from 'redux'
import profReducer from './profReducer.js'



let reducers = combineReducers({
        profilePage: profReducer
    }) 
let store = createStore(reducers)
export default store