import React, {useContext}from 'react'
import { ThemeContext } from '../context/theme-context';

const Blog = (  ) => {

    const {theme, changeTheme} = useContext(ThemeContext);
    

  return (
    <div className={'container'}>
        <h2>My blog with {theme} theme</h2>
        <span>
            <button 
                
                className={`${theme === "dark" && "btn-light"} btn`}
                
                onClick={changeTheme}>{theme === "dark" ? "Dark" : "Light"}</button>
        </span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa culpa voluptates optio vero dolor consequatur modi repellendus quam accusantium? Dignissimos tenetur perferendis exercitationem at facilis dolorum voluptas excepturi impedit fugit.</p>
    </div>
  )
}

export default Blog