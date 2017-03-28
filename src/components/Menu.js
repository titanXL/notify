import React, { Component } from 'react'
import './Menu.css'
export default class Menu extends Component {
    constructor(props) {
        super(props)
        this.handleAddClick = this.handleAddClick.bind(this)
        this.handleShowClick = this.handleShowClick.bind(this)
    }
    handleAddClick(e) {
        this.props.showAddForm()
        this.props.hideNotifications()
    }
    handleShowClick() {
        this.props.hideAddForm()
        this.props.showNotifications()
    }
    render() {
        let length = this.props.notifications.notifications.filter(notification => notification.type !=='bonus').length
        return (
            <div>
                <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2'>
                    <span className="glyphicon glyphicon-cloud" onClick={this.handleShowClick}>
                        <span className="badge">{length}</span>
                    </span>
                </div>
                <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2'>
                    <button type="button" className="btn btn-info btn-circle btn-lg" onClick={this.handleAddClick}><i className="glyphicon glyphicon-plus"></i></button>
                </div>
            </div>
        )
    }
}
