import React from 'react'

const Button = ({text, icon, btnClass, onBtnClick}) => {
  return (
    <button onClick={()=>onBtnClick()} className={btnClass}>{icon} {text ? text : "Click"}</button>
  )
}

export default Button