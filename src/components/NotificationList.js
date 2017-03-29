import React, { Component } from 'react'
import Notification from './Notification'
import './NotificationList.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class NotificationList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: []
        }
    }
    render() {
        return (
            <div className='row myrow'>
                <ReactCSSTransitionGroup
                    transitionName='notification'
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {this.state.list.filter(notification => notification.type !== 'bonus').map((notification, i) => (
                        <Notification info={notification} key={i} delete={this.props.deleteNotification} edit={this.props.editNotification} />
                    ))}
                </ReactCSSTransitionGroup>
            </div>
        )
    }

    componentWillMount() {
        this.props.fetchNotifications()
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('test')
        let newNotifications = nextProps.notifications.notifications
        console.log(nextState)
        if (this.state.list.length !== newNotifications.length) {
            this.setState({
                list: newNotifications
            })
        }
    }
}
