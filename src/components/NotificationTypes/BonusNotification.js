import React from 'react'
const BonusNotification = ({editing, bonus})=>{
    return(
        <span><input type='text' defaultValue={bonus} readOnly={editing} id='requirement' /></span>
    )
}

export default BonusNotification