import { call, put, takeEvery } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'
import * as Api from './Api'

function* fetchNotificationsSaga(action) {
    try {
        const notifications = yield call(Api.fetchNotificationsFromAPI)
        yield put({ type: 'FETCH_NOTIFICATIONS_SUCCESS', notifications })
    } catch (e) {
        yield put({ type: 'FETCH_NOTIFICATIONS_FAILED', message: e.message })
    }
}

function* AddNotificationSaga(action) {
    try {
        let newNotification = action.notification
        yield call(Api.AddNotificationAPI, action.notification)
        yield put({ type: 'ADD_NOTIFICATION_SUCCESS', newNotification })
    } catch (e) {
        yield put({ type: 'ADD_NOTIFICATION_FAILED', message: e.message })
    }
}

function* DeleteNotificationSaga(action) {
    console.log('expired')
    try {
        let id = action.id
        let deletedId = yield call(Api.DeleteNotificationAPI, id)
        yield put({ type: 'DELETE_NOTIFICATION_SUCCESS', deletedId })
    } catch (e) {
        yield put({ type: 'DELETE_NOTIFICATION_FAILED', message: e.message })
    }
}

function* EditNotificationSaga(action){
    try{
        let editedNotification = action.notification
        yield call(Api.EditNotificationAPI, editedNotification)
        yield put({type:'EDIT_NOTIFICATION_SUCCESS', editedNotification})
    } catch(e){
        yield put({type:'EDIT_NOTIFICATION_FAILED', message: e.mesa })
    }
}

function* mySaga() {
    yield [
        takeEvery('FETCH_NOTIFICATIONS', fetchNotificationsSaga),
        takeEvery('ADD_NOTIFICATION', AddNotificationSaga),
        takeEvery('DELETE_NOTIFICATION', DeleteNotificationSaga),
        takeEvery('EDIT_NOTIFICATION',EditNotificationSaga)
    ]
}

export default mySaga