import React, { Component } from 'react'
import Notification from './Notification'
import './NotificationList.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class NotificationList extends Component {
    render() {
        let list = this.props.notifications.notifications
        return (
            <div className='row myrow'>
                <ReactCSSTransitionGroup
                    transitionName='notification'
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {list.filter(notification => notification.type !== 'bonus').map((notification, i) => (
                        <Notification info={notification} key={i} delete={this.props.deleteNotification} edit={this.props.editNotification} />
                    ))}
                </ReactCSSTransitionGroup>

            </div>
        )
    }
}
