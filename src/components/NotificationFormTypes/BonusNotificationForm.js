import React from 'react'
const BonusNotificationForm = ({handleFormChange, bonus})=>{
    return(
        <input type='text' maxLength='140' placeholder='Bonus' className='form-control' name='bonus' onChange={handleFormChange} value={bonus} />
    )
}

export default BonusNotificationForm