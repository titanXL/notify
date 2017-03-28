import React, { Component } from 'react'
import './Notification.css'

class Notification extends Component {
    constructor(props) {
        super(props)
        this.handleMouseEnter = this.handleMouseEnter.bind(this)
        this.handleMouseLeave = this.handleMouseLeave.bind(this)
        this.state = {
            showButtons: false,
            editing: true,
            expires: 0
        }
    }
    componentWillMount() {
        let expires = this.props.info.expires
        if (expires) {
            this.setState({
                expires
            })

        }
    }
    componentDidMount() {
        const expires = this.state.expires
        const id = this.props.info.id
        if (expires !== 0 && expires !== '.') {
            this.startExpiration(expires, id)
        }
    }
    startExpiration(expires, id) {
        this.interval = setTimeout(() => {
            this.handleDeleteClick(id)
        }, expires * 1000)

    }

    renderBody() {
        const { text, requirement, image, link, bonus } = this.props.info

        return (
            <form className="panel-body" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} onSubmit={this.handleEdit.bind(this)} >
                {image && <div className='col-xs-2'><a href={link} ><img src={image} alt='img' className='img center-block' id='image' ref='image' /></a>{!this.state.editing && <input type='text' defaultValue={link} ref='link' id='link' maxLength='140' />}</div>}
                {text && <span><input type='text' maxLength='140' defaultValue={text} readOnly={this.state.editing} id='text' ref='text' /></span>}
                {requirement && <span><input type='text' maxLength='140' defaultValue={requirement} readOnly={this.state.editing} id='requirement' ref='requirement' /></span>}
                {bonus && <span><input type='text' maxLength='140' defaultValue={bonus} readOnly={this.state.editing} id='requirement' ref='bonus' /></span>}
                {this.state.showButtons && this.renderButtons()}
            </form>
        )
    }
    renderButtons() {
        const id = this.props.info.id

        return (
            <div className='buttons'>
                <button type="button" className="btn btn-warning" onClick={this.handleEditClick.bind(this, id)}>edit</button>
                <button type="button" className="btn btn-danger" onClick={this.handleDeleteClick.bind(this, id)}>del</button>
            </div>
        )
    }
    handleEdit(event) {
        event.preventDefault()
        this.setState({
            ...this.state,
            editing: true
        })

        let editedNotification = {}
        let id = this.props.info.id
        editedNotification.id = id
        if (this.props.info.expires) editedNotification.expires = this.props.info.expires

        for (let key in this.refs) {
            if (key !== 'header') {
                editedNotification[key] = this.refs[key].value || this.refs[key].src
            }
        }

        editedNotification.title = this.refs.header.innerHTML

        this.props.edit(editedNotification)
    }
    handleDeleteClick(id) {
        clearInterval(this.interval)
        this.props.delete(id)
    }
    handleEditClick(id, event) {

        if (this.refs.text) this.refs.text.focus()
        if (this.refs.requirement) this.refs.requirement.focus()
        this.setState({
            ...this.state,
            editing: false
        })

    }
    handleMouseEnter(event) {
        let newState = true
        this.setState({
            showButtons: newState
        })
    }
    handleMouseLeave(event) {
        let newState = false

        if (this.refs.link) this.refs.link.blur()
        if (this.refs.text) this.refs.text.blur()
        if (this.refs.requirement) this.refs.requirement.blur()

        this.setState({
            showButtons: newState,
            editing: true
        })
    }
    render() {
        let backgroundColor = this.state.editing ? '#f5f5f5' : 'grey'
        const style = { backgroundColor }
        return (
            <div className='panel panel-default' key={this.props.info.id} >
                <div className="panel-heading" style={style}><h4 ref='header'>{this.props.info.title}</h4></div>
                {this.renderBody()}
            </div>
        )
    }
}

export default Notification