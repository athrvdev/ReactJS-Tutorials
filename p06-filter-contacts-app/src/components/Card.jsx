import React from 'react'

const Card = ({
    name,
    lastName,
    email,
    phone,
    username,
    cardColor = ""
}) => {

    const cardStyles = {
        width: '250px',
        height: 'fit-content',
        borderRadius: '1em',
        backgroundColor: '#242424',
        color: 'rgba(255,255,255, 0.67)',
        textAlign: 'left',
        boxShadow: '2px 1px 3px #242424',
        listStyle: 'none',
        padding: '0px 0px 30px 25px',
        transition: 'all 0.3s',
        textOverflow: 'clip'
    }

  return (
    <ul className='card' style={cardStyles}>
        <div style={{
            backgroundColor: 'rgba(255,255,255, 0.87)',
            color: '#242424',
            borderRadius: '0.7em 0.7em 0 0',
            marginLeft: '-25px',
            marginBottom: '20px',
            padding: '20px',
            fontSize: '1.3em',
            textAlign: 'center',
            fontWeight: 'bold'
        }}>{name}</div>
        <li>Last Name: {lastName}</li>
        <i style={{textAlign: 'left',}}>Email: {email}</i>
        <li>Phone: {phone}</li>
        <li>Username: {username}</li>
    </ul>
  )
}

export default Card