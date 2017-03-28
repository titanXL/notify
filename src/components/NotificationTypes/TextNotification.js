import React from 'react'
const TextNotification = ({editing, defaultValue})=>{
    return(
        <span><input type='text' defaultValue={defaultValue} readOnly={editing} id='text' id='text' /></span>
    )
}

export default TextNotification