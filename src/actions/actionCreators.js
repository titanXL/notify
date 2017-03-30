export function addNotification(notification) {
    return{
        type:'ADD_NOTIFICATION',
        notification
    }
}

export function editNotification(notification) {
    return{
        type:'EDIT_NOTIFICATION',
        notification
    }
}

export function deleteNotification(id) {
    return {
        type: 'DELETE_NOTIFICATION',
        id
    }
}

export function showNotifications(){
    return{
        type:'SHOW_NOTIFICATIONS'
    }
}
export function hideNotifications(){
    return {
        type: 'HIDE_NOTIFICATIONS'
    }
}
export function showAddForm() {
    return {
        type: 'SHOW_ADD_FORM'
    }
}
export function hideAddForm(){
    return{
        type:'HIDE_ADD_FORM'
    }
}

export function fetchNotifications(notifications){
    return{
        type: 'FETCH_NOTIFICATIONS',
        notifications
    }
}

export function fetchNotificationsInitial(){
    return{
        type:'FETCH_NOTIFICATIONS_INITIAL'

    }
}