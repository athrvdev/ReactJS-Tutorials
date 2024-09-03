import React from 'react'
import './App.css'
import Button from './components/Button'
import {BsFillFileEarmarkPostFill} from 'react-icons/bs'
import {FaUserAlt, FaLink} from 'react-icons/fa'
import {BiCommentDetail} from 'react-icons/bi'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {
  const[ dataType, setDataType] = useState("");
  const[items, setItems] = useState();

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${dataType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [dataType])

  return (
    <>
      <h1>Fetching Data from JSONPlaceholder <a href="https://jsonplaceholder.typicode.com/"><FaLink /></a></h1>
    <div>
      <Button onBtnClick={()=>setDataType("Posts")} text={"Posts"} icon={<BsFillFileEarmarkPostFill />} btnClass={"btn"} />
      <Button onBtnClick={()=>setDataType("Users")} text={"Users"} icon={<FaUserAlt />} btnClass={"btn"} />
      <Button onBtnClick={()=>setDataType("Comments")} text={"Comments"} icon={<BiCommentDetail />} btnClass={"btn"} />
    </div>
    <div>
      {!dataType ? <h4>Select from above what you want to see!</h4> : <h3>{dataType.toUpperCase()}</h3> }
    </div>
      <div>
        {!items ? null :
        <div className="card-grid">
         {items.map((item, index)=>{
          return (
            <div key={index} className='card'> 
              {item.id && <h4>{item.id}</h4>} 
              {item.name && <h3>{item.name}</h3>}
              {item.title && <h4>{item.title}</h4>}
              {item.body && <p>{item.body}</p>}
              {item.email && <small>{item.email}</small>}
            </div>
          )
        })}
        </div>
        }
      </div>
    </>
  )
}

export default App