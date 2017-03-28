import notificationsData from '../data'
function notifications(state = [], action) {
    switch (action.type) {
        case 'FETCH_NOTIFICATIONS_SUCCESS':
            let newState = action.notifications.data
            console.log(newState)
            return newState.concat(state)

        case 'FETCH_NOTIFICATIONS_FAILED':
            return state
        case 'DELETE_NOTIFICATION_SUCCESS':
            let notificationId = JSON.parse(action['deletedId']['config']['data'])
            let toDelete = notificationId['id']
            let index = -1
            for (let i = 0; i < state.length; i++) {
                if (state[i].id === toDelete) {
                    index = i
                }
            }

            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ]

        case 'DELETE_NOTIFICATION_FAILED':
            return state
        case 'EDIT_NOTIFICATION_SUCCESS':
            let notification = action.editedNotification
            let id = action.editedNotification.id
            let indexNotification = state.findIndex(notification => notification.id === Number(id))
            return [
                ...state.slice(0, indexNotification),
                notification,
                ...state.slice(indexNotification + 1)
            ]
        case 'EDIT_NOTIFICATION_FAILED':
            return state
        case 'ADD_NOTIFICATION_SUCCESS':
            
            return [
                action.newNotification,
                ...state
            ]
        case 'ADD_NOTIFICATION_FAIL':
            return state
        default:
            return state
    }
}

export default notifications