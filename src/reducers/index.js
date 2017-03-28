import { combineReducers } from 'redux'
import notifications from './notify'
import showAddForm from './addForm'
import showNotifications from './notificationList'
const rootReducer = combineReducers({ notifications , showAddForm, showNotifications })

export default rootReducer