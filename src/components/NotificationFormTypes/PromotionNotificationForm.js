import React from 'react'
const PromotionNotificationForm = ({handleFormChange,link,image})=>{
    return(
        <div>
            <input type='text' maxLength='140' placeholder='Link' className='form-control' name='link' onChange={handleFormChange} value={link} />
            <input type='text'  placeholder='Image' className='form-control' name='image' onChange={handleFormChange} value={image} />
        </div>
    )
}

export default PromotionNotificationForm