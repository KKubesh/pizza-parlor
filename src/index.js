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

//sagas
const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
    console.log('root saga loaded');
    yield takeEvery('GET_MENU', getMenuSaga);

}
function* getMenuSaga(action){
    try{
        console.log('in getMenuSaga')
    }catch(error){
        console.log('an error in getMenuSaga ', error);
    }
}

//reducers
const orderReducer = (state=[], action)=>{
    console.log('order reducer loaded');
    return state
}


//store
const store = createStore(
    combineReducers({
        orderReducer
    }),
    applyMiddleware(sagaMiddleware),
    applyMiddleware(logger)

)

sagaMiddleware.run(rootSaga);

ReactDOM.render( <Provider store = {store}>< App /></Provider>, document.getElementById('root'));
registerServiceWorker();
