import React, { Component } from 'react'
import './AddNotificationForm.css'
import TextNotificationForm from './NotificationFormTypes/TextNotificationForm'
import PromotionNotificationForm from './NotificationFormTypes/PromotionNotificationForm'
import BonusNotificationForm from './NotificationFormTypes/BonusNotificationForm'

export default class AddNotificationForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showInfo: false,
            type: '',
            title: '',
            text: '',
            link: '',
            expires: '',
            image: '',
            bonus: '',
            notValid: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleFormChange = this.handleFormChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit() {
        if (this.validateForm()) {
            let notification = {}
            let id = new Date().getUTCMilliseconds()
            notification['id'] = id
            for (let key in this.state) {
                if (key !== 'showInfo') {
                    if (this.state[key]) {
                        notification[key] = this.state[key]
                    }
                }
            }
            this.props.addNotification(notification)
            this.props.hideAddForm()
            this.props.showNotifications()
        } else {
            this.setState({
                notValid: true
            })
        }
    }
    validateForm() {
        let inputs = document.querySelectorAll('input')
        for (let i = 0; i < inputs.length; i++) {
            if (!inputs[i].value && inputs[i].name !== 'expires') {
                return false
            }
        }
        return true
    }
    handleFormChange(event) {
        const value = event.target.value
        const name = event.target.name
        this.setState({
            [name]: value
        })
    }
    handleChange(event) {

        let newType = event.target.value
        if (newType && newType !== 'Type') {
            this.showInfoForm(newType)
        } else if (newType === 'Type') {
            this.hideInfo(newType)
        }
    }
    showInfoForm(val) {
        this.setState({
            type: val,
            showInfo: true
        })
    }
    hideInfo(newType) {
        this.setState({
            type: newType,
            showInfo: false
        })
    }

    renderInfo() {
        let show = this.state.showInfo
        if (show) {
            return (
                <div >
                    <input type='text' placeholder='Title' className='form-control' name='title' onChange={this.handleFormChange} value={this.state.title} />
                    {{
                        text: <TextNotificationForm handleFormChange={this.handleFormChange} value={this.state.text} />,
                        bonus: <BonusNotificationForm handleFormChange={this.handleFormChange} bonus={this.state.bonus} />,
                        Promotion: <PromotionNotificationForm handleFormChange={this.handleFormChange} link={this.state.link} image={this.state.image} />
                    }[this.state.type]}
                    <input type='number' min='0' placeholder='Expires...(not required)' className='form-control' name='expires' onChange={this.handleFormChange} value={this.state.expires} />
                    {this.state.notValid && <span>Please fill in the form</span>}
                    <button className='btn btn-default' id='button' onClick={this.handleSubmit}>Add</button>
                </div>

            )
        } else {
            return null
        }
    }
    render() {
        return (
            <div className='well'>
                <span>Add Notification</span>
                <div className='row'>
                    <select className="form-control" onChange={this.handleChange}>
                        <option defaultValue='type'>Type</option>
                        <option value='text'>Text</option>
                        <option value='bonus'>Bonus</option>
                        <option value='Promotion'>Promotion</option>
                    </select>
                    {this.state.showInfo && this.renderInfo()}
                </div>
            </div>
        )
    }
}