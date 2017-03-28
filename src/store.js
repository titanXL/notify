import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers/index'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const defaultState = {
    notifications: [
    ],
    showAddForm: { show: false},
    showNotifications: { show: false}
    
}

const store = createStore(rootReducer, defaultState, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mySaga)
export default store