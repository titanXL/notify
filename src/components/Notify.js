import React, { Component } from 'react'
import './Notify.css'
import Menu from './Menu'
import AddNotificationForm from './AddNotificationForm'
import NotificationList from './NotificationList'
export default class Notify extends Component {
    render() {
        const addNotificationsOpen = this.props.notifications.showAddForm.show
        const showNotifications = this.props.notifications.showNotifications.show
        return (
            <div id='top'>
                <div className='row'>
                    <Menu {...this.props} />
                </div>
                <div>
                    {addNotificationsOpen && <AddNotificationForm {...this.props} />}

                </div>
                {showNotifications && <NotificationList {...this.props} />}
            </div>
        )
    }
    
  componentWillMount() {
        this.props.fetchNotifications()
    }
    
}