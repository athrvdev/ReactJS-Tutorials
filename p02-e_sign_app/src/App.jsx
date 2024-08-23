import React, { useState } from 'react';
import './App.css';

const App = () => {

  const[name, setName] = useState("Your Name");
  const[date, setDate] = useState("DoB");

  function updateName(e){
    let text = e.target.value;
    if(text){
      setName(text.toUpperCase());
    }
    else setName("Your Name");
  }
  function updateDate(e){
    let textDate = e.target.value;
    if(textDate){
      setDate(textDate);
    }
    else setDate("DoB");
  }

  return (
    
    <div id="root">

      <h1 >{name}</h1>
      <h4 >{date}</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi facilis provident porro minus magnam debitis cumque praesentium temporibus suscipit, est, iste voluptatem omnis dignissimos quasi quas alias doloremque repudiandae totam.</p>

      <div style={{
        display: "flex",
        justifyContent: 'space-between',
        position: 'absolute',
        bottom: "40px",
        left: "50%",
        transform: "translateX(-50%)"
      }}>
        <span>
          <label htmlFor='name'>Your name: </label>
          <input onChange={updateName} id='name' type="text"></input>
        </span>
        <span>
          <label htmlFor='date'>Date: </label>
          <input onChange={updateDate} id="date" type="date"></input>
        </span>
      </div>
    </div>
  )
}

export default App