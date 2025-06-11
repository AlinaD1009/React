import { applyMiddleware, legacy_createStore, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { countReducer } from './redusers/counter.reduser';
import { usersReducer } from './redusers/users.reduser';


const allReducers = combineReducers({
    count: countReducer,
    users: usersReducer
})

export const myStore = legacy_createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)))