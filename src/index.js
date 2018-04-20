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
    yield takeEvery('GET_ORDER', getListOrderSaga);
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
        yield call(axios.post, '/api/pizza/order', action.payload)
    }catch(error){
        console.log('an error in addOrderSaga');
    }
}

//get orderList saga
function* getListOrderSaga(action){
    const orderList = yield call(axios.get, 'api/pizza/order')
    yield put({
        type: 'ORDER_LIST',
        payload: orderList.data
    })
}

//------reducers-------
//keeps track of previos orders for order
const orderList = (state = [{
        id: 1,
        customer_name: 'blah',
        order_total: 934,
        time_of_order: '24:12'
    }, {
        id: 2,
        customer_name: 'blah',
        order_total: 934,
        time_of_order: '24:12'
    }], action) => {
    console.log('order reducer loaded');
    switch(action.state){
        case 'ORDER_LIST':
            return action.payload;
        default: 
            return state;
    }
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
//order list for checkout
const newOrderReducer = (state = [{ id: 234, name: 'blah', description: 'asdf', cost: 19.99 }, { id: 987, name: 'blah', description: 'asdf', cost: 19.99 }], action)=>{
    switch(action.type){
        case 'NEW_ORDER':
            return [...state, action.payload];
        case 'REMOVE_ORDER':
            return state.filter((order)=>{
                return order.id !== action.payload.id
            })
        default:
            return state;
    }
}


//store
const store = createStore(
    combineReducers({
        orderList,
        menuReducer,
        newOrderReducer
    }),
    applyMiddleware(sagaMiddleware),
    applyMiddleware(logger)

)

sagaMiddleware.run(rootSaga);

ReactDOM.render( <Provider store = {store}>< App /></Provider>, document.getElementById('root'));
registerServiceWorker();
