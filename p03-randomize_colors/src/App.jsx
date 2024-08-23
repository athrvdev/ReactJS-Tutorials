import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [bgColor, setBgColor] = useState("fff");
  const [btnColor, setBtnColor] = useState("");
  const [headerColor, setHeaderColor] = useState("black");
  const [dontClick, setDontClick] = useState(true);

  const colorString = "0123456789ABCDEF";
  
  let color;
  function randomizeColor(){
    color = "#";

    for(let i = 0; i < 6; i++){
      color += colorString[Math.floor(Math.random() * 16)];  
    }
    
    return color;
  }

  function handleClick(event){
    setBgColor(randomizeColor());
  }

  return (
    <>
    <div className='container' style={{
      backgroundColor : bgColor 
    }}>
      
      {dontClick ? <><h1
        style={{
          color : headerColor
        }}
      >Randomize Colors</h1>
      
      <button onClick={() => {
        handleClick();
          }}  id='randomizeBtn1'>Bg Color</button>

      <button onClick={() => {
        handleClick();
        setBtnColor(randomizeColor());
          }}
          style={{
            backgroundColor: btnColor
          }}
          id='randomizeBtn2'>Bg + Btn Color</button>

      <button id='randomizeBtn3'
        onClick={() => {
          handleClick();
          setBtnColor(randomizeColor());
          setHeaderColor(randomizeColor());
        }}
        >Change All</button>

      <button onClick={()=>
        {
          setDontClick(false)
            }} id='randomizeBtn4'>Don't</button>
      </> 
    : <>
    <h1>I said DON'T CLICK</h1>
    <button onClick={()=>{
      setDontClick(true);
        } } >Go back</button>
    </>
  }
    </div>

    </>
  )
}

export default App