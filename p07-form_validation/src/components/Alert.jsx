import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Alert = ({alertType, text, delay = false, delayTime = 3000}) => {
const [viewAlert, setViewAlert] = useState(true);

const closeAlert = (e)=>{
    e.target.parentElement.classList.add("fadeAlert"); 
    setTimeout(()=>{
        setViewAlert(false);
    }, 500)
}
useEffect(()=>{
    delay && setTimeout(()=>{
        setViewAlert(false);
    }, delayTime)
})

  return (
    <>
    {viewAlert && <div style={{
        backgroundColor: '#242424',
        color: 'white',
        display : 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem',
        borderRadius: '1em',
        position: 'absolute',
        top: '20px',
        width: '400px'
    }} className={`alert alert-${alertType}`}>{text}
        <p style={{
            cursor:'pointer'
        }} onClick={closeAlert}>&times;</p>
    </div>}
    </>
  )
}

export default Alert