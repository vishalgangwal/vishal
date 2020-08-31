import React from 'react';
import './login.css';

function loginpage(){
    return(
        <form className="form1">
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <input type="submit" />  
          
        </form> 
    );
}

export default loginpage;