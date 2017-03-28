import React from 'react'
const TextNotificationForm = ({handleFormChange, text})=>{
    return(
        <input type='text' maxLength='140' placeholder='Text' className='form-control' name='text' onChange={handleFormChange} value={text} />
    )
}

export default TextNotificationForm