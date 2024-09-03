import React, { useEffect, useState } from 'react'
import './App.css'
import Blog from './components/Blog'
import { ThemeContext, themes } from './context/theme-context'

const App = () => {
  const [theme, setTheme] = useState(themes.light)

  function changeTheme(){
    if(theme === themes.dark){
      setTheme(themes.light);
    }
    else{
      setTheme(themes.dark)
    }
  }

  useEffect(()=>{
    const docBody = document.body;

    switch(theme){
      case themes.light :
        docBody.classList.remove("bg-dark");
        docBody.classList.remove("text-light");
        docBody.classList.add("bg-light");
        docBody.classList.add("text-dark");
        break;
      case themes.dark :
        docBody.classList.remove("bg-light");
        docBody.classList.remove("text-dark");
        docBody.classList.add("bg-dark");
        docBody.classList.add("text-light");
        break;
    }

  }, [theme])

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      <h1>Light and Dark mode Tutorial</h1>
      <Blog  />
    </ThemeContext.Provider>
  )
}

export default App

// createContext is used to create a kind of a global variable which can be accessedd by any component, we must export a const variable  = createContext() then to access the context, we must create a wrapper with the same variable name like in this case <ThemeContext.Provider > where ThemeContext is the const variable name and .Povider is the property that tells react that this is where the context will be passed from.
//to access the context in any component you can import useContext and pass the useContext to a variable and pass the ThemeContext in useContext like useContext(ThemeContext) 