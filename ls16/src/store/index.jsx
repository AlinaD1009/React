import { legacy_createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension'
import { counterReducer } from './reducers/counter';



export const myStoreNew = legacy_createStore(counterReducer, composeWithDevTools());