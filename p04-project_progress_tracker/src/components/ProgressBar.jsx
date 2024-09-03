import React, { useEffect } from 'react'

const ProgressBar = ({val, bgColor}) => {

    const containerStyles = {
        height : '25px',
        backgroundColor: '#e0e0de',
        borderRadius: 50,
        margin: 50,
        width: '100%',
    }
    const fillerStyles = {
        backgroundColor:  bgColor,
        width: `${val}%`,
        borderRadius: 'inherit',
        transition: "width 1s ease-in-out"
    }
    const labelStyles={
        padding: '15px',
        margin : '10px',
        color: '#fff',
    }
//you can add additional logic here the endure the filler never runs out of the container
   return (
    <div style={containerStyles}>
        <div style={fillerStyles}>
            <span style={labelStyles}>{`${val}%`}</span>
        </div>
    </div>
  )
}

export default ProgressBar