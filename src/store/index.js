
// Importamos o applyMiddleware do redux
import {createStore,combineReducers, applyMiddleware} from 'redux';

// Mostrando para o nosso store, qual middleware iremos usar
import createSagaMiddleware from 'redux-saga';

import todos from './reducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(combineReducers({
    todos,
}),
    
   applyMiddleware(sagaMiddleware);


);

export default store