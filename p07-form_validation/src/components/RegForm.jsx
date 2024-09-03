import React, { useEffect, useRef, useState } from 'react'
import Alert from './Alert'

const RegForm = ({}) => {

    const inputName = useRef(null);
    const inputEmail = useRef(null);
    const inputPassword = useRef(null);

    useEffect(()=>{
        inputName.current.focus();
    }, [])

    const [values, setValues] = useState({
        userName : '',
        email: '',
        password : ''
    })

    const [submit, setSubmit] = useState(false);
    const [validated, setvalidated] = useState(false);

    const handleNameChange = (e) =>{
        setValues({
            ...values, userName: e.target.value
        });
        console.log((values))
    }
    const handleEmailChange = (e) =>{
        setValues({
            ...values, email: e.target.value
        })
        console.log((values))
    }
    const handlePasswordChange = (e) =>{
        setValues({
            ...values, password: e.target.value
        })
        console.log((values))
    }

    const handleForm =(e) =>{
        e.preventDefault();
        if(!values.userName){
            inputName.current.focus();
        }
        else if(!values.email){
            inputEmail.current.focus();
        }
        else if(!values.password){
            inputPassword.current.focus();
        }
        setSubmit(true);
        if(values.userName && values.email && values.password){
            setvalidated(true);
        }
    }

  return (

    <>
    { submit && validated ?
    (<>
            <Alert delay={true} delayTime={5000} text={"Registration Successful"} />
            <h1>Welcome {values.userName}</h1>
    </>)
    : <div className='container' style={{
        display:'grid',
        placeItems: 'center'
    }}>
        
        <form onSubmit={handleForm} >
            <h2>Register Here</h2>
            <div className='form-group'>
                <input ref={inputName} type="text" placeholder='Enter your name'
                value={values.userName}
                onChange={handleNameChange}
                />
                {submit && !values.userName ? <label className='form-label'>Please enter your name</label> : null}
            </div>
            <div className='form-group'>
                <input ref={inputEmail} type="email" placeholder='Enter your email' 
                value={values.email}
                onChange={handleEmailChange}
                />
                {submit && !values.email ? <label className='form-label'>Please enter your email</label> : null}
            </div>
            <div className='form-group'>
                <input ref={inputPassword} type="password" placeholder='Enter your password'
                value={values.password}
                onChange={handlePasswordChange}
                />
                {submit && !values.password ?<label className='form-label'>Please enter your password</label> : null}
            </div>
            <button className='form-button' >Register</button>
        </form>
    </div>}
    </>
  )
}

export default RegForm