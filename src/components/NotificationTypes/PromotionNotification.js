import React from 'react'

const PromotionNotification = (link, image, editing,)=>{
    return(
        <div className='col-xs-2'><a href={link} ><img src={image} alt='img' className='img center-block' id='image' /></a>{!editing && <input type='text' defaultValue={link} id='link'/>}</div>
    )
}

export default PromotionNotification