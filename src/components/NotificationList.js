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
        this.handleSocket = this.handleSocket.bind(this)
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
                        <Notification info={notification} key={i} delete={this.props.deleteNotification} edit={this.props.editNotification} handleSocket={this.handleSocket}/>
                    ))}
                </ReactCSSTransitionGroup>
            </div>
        )
    }

    handleSocket(id, expires){
        let info = {id, expires}
        this.props.socket.emit('server/startExpiration',info)
    }
    componentDidMount () {
        this.props.socket.on('expired',(id)=>{
            this.props.deleteNotification(id)
        })
    }
    
    componentWillMount() {
        this.props.fetchNotifications()
    }

    componentWillUpdate(nextProps, nextState) {
        let newNotifications = nextProps.notifications.notifications
        if (this.state.list.length !== newNotifications.length) {
            this.setState({
                list: newNotifications
            })
        }
    }
}
