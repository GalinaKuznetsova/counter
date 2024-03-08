import {  thunk } from 'redux-thunk';
import { counterReducer } from './counter-reducer';
import { applyMiddleware, combineReducers,  legacy_createStore} from 'redux';

import { loadState, saveState } from '../utils/localstorage-utils';

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    counter: counterReducer
 
})
// непосредственно создаём store

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>



export const store = legacy_createStore(rootReducer, loadState(),applyMiddleware(thunk));

store.subscribe(()=>{
    saveState({
        counter:store.getState().counter
    })
})



// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store;