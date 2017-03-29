import axios from 'axios'
export function fetchNotificationsFromAPI() {
    return axios.get('/api/notifications', {})
}

export function AddNotificationAPI(notification) {
    console.log('add2')
    return axios.post('/api/addnotification', notification)
}

export function DeleteNotificationAPI(id){
    
    return axios.post('/api/deletenotification',{id})
}

export function EditNotificationAPI(notification){
    return axios.post('/api/editnotification',{notification})
}