import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {
    Provider
} from 'react-redux';
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import {
    takeEvery,
    call,
    put
} from 'redux-saga/effects';
import axios from 'axios';

//----------sagas------------
const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    console.log('root saga loaded');
    yield takeEvery('GET_MENU', getMenuSaga);
    yield takeEvery('ADD_ORDER', addOrderSaga);
}

//api request to server for menulist
//sets it in menureducer state
function* getMenuSaga(action){
    try{
        console.log('in getMenuSaga')
        const pizzaMenu = yield call(axios.get, '/api/pizza');
        yield put({
            type: 'MENU_LIST',
            payload: pizzaMenu.data
        })
    }catch(error){
        console.log('an error in getMenuSaga ', error);
    }
}
//add api server route
function* addOrderSaga(action){
    try{
        console.log('in addOrder saga');
        yield call(axios.post, '/api/pizza', action.payload)
    }catch(error){
        console.log('an error in addOrderSaga');
    }
}

//------reducers-------
//keeps track of orders
const orderReducer = (state=[], action)=>{
    console.log('order reducer loaded');
    return state
}
//sets state to the menu list
const menuReducer = (state=[], action)=>{
    switch(action.type){
        case 'MENU_LIST':
            return action.payload;
        default: 
            return state;
    }
}


//store
const store = createStore(
    combineReducers({
        orderReducer,
        menuReducer
    }),
    applyMiddleware(sagaMiddleware),
    applyMiddleware(logger)

)

sagaMiddleware.run(rootSaga);

ReactDOM.render( <Provider store = {store}>< App /></Provider>, document.getElementById('root'));
registerServiceWorker();
