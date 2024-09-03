import React, {useEffect, useRef, useState} from 'react'
import './App.css'
import ProgressBar from './components/ProgressBar'

const App = () => {
  
  const [status, setStatus] = useState({
    ui: 55,
    projects: 90,   
    jfs: 33,
  })
  const [completed, setCompleted]= useState(5); 
  
  const projectData =[
    {bgColor: "#7633f9", completed: status.ui},
    {bgColor: "#28a745", completed: status.projects},
    {bgColor: "#dc3545", completed: status.jfs},
  ]

  function changeHandler(e, id){
    setStatus({...status, id : e.target.value});
  }

  const uiInput = useRef(null);

  useEffect(()=>{
    uiInput.current.focus();
    setInterval(()=>{
      setCompleted(Math.floor(Math.random()* 100) + 1);
    }, 2000)
  
  }, [])

  return (
    <>
      <h1>Progress Bar for tracking project progress</h1>
      <div className='input-fields' style={{
        justifySelf:'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',

      }}>
         <span>
          <label htmlFor={'ui'} > UI/UX </label>
          <input value={status.ui} ref={uiInput} onChange={(e)=> setStatus({
            ...status, ui : e.target.value
          })} id={'ui'} type='number' />
    </span>
    <span>
          <label htmlFor={'projects'} > Projects </label>
          <input value={status.projects} onChange={(e)=> setStatus({
            ...status, projects : e.target.value
          })} id={'projects'} type='number' />
    </span>
    <span>
          <label htmlFor={'jfs'} > Java Full Stack </label>
          <input value={status.jfs} onChange={(e)=> setStatus({
            ...status, jfs : e.target.value
          })} id={'jfs'} type='number' />
    </span>
        
      </div>
      
{
  projectData.map((value, index)=>(
    <ProgressBar val={value.completed} bgColor={value.bgColor} key={index} />
  ))
}
<ProgressBar val={completed} bgColor={completed < 50 ? "#dc3545" : "#28a745"} />
    </>
  )
}

export default App