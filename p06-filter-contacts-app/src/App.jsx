import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import ContactsData from './assets/Data.json'
import Card from './components/Card'

const App = () => {

  const inputEl = useRef(null);

  const [searchContact, setSearchContact] = useState(null);

  const handleSearch = (e)=>{
    setTimeout(()=>setSearchContact(e.target.value), 1500);
 }

  useEffect(()=>{
    inputEl.current.focus();
  }, [])

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <h1>Filter Contacts by Name </h1>
      <input 
        type='text' 
        placeholder='Search by first name' 
        className=''
        style={{
          padding: '6px',
          marginBottom: '2rem',
        }}
        ref={inputEl}
        onChange={handleSearch}
        />

        <section style={{
          display: 'flex',
          gap: 15,
          maxWidth: '1600px',
          margin: 'auto',
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}
        >

          {
            ContactsData.filter((contact)=>{
              if(searchContact === ""){
                return contact;
              }
              else if(contact.first_name.toLocaleLowerCase().includes(searchContact.toLocaleLowerCase())){
                return contact;
              }
            }).map((contact, index)=>(
              <Card name={contact.first_name}
                    lastName={contact.last_name}
                    email={contact.email}
                    phone={contact.phone}
                    username={contact.user_name}
                    key={index}
                    />
            ))
          }

        </section>
    </div>
  )
}

export default App