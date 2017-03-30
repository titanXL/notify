import React, { Component } from 'react'
import './Notify.css'
import Menu from './Menu'
import AddNotificationForm from './AddNotificationForm'
import NotificationList from './NotificationList'
import io from 'socket.io-client'

export default class Notify extends Component {
    constructor(props){
        super(props)
        this.socket =io('http://localhost:3001')
    }
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
                {showNotifications && <NotificationList {...this.props} socket={this.socket}/>}
            </div>
        )
    }
   
    
  componentWillMount() {
        this.props.fetchNotifications()
    }
    
}