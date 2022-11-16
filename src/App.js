import React from 'react'
import {useState, useMemo} from 'react'
import { Link, Outlet } from "react-router-dom";
import { UserContext } from './UserContext';
import './App.css';
import gif from './images/giphy-unscreen.gif' 
function App() {

  let getUrl = () => {
    if(window.location.href === 'http://localhost:3000/'){
      return true
    }
    return false
  }

  let [user, setUser] = useState('');

  let providerValue = useMemo(() => ({ user, setUser}), [user, setUser])

  return (
    
      <div className="container-fluid">
      <nav className="navbar">
        <div className="container-fluid">
        

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className='l' to="/login">{user? 'Sign out': 'Sign in'}</Link>
            </li>
            <li className="nav-item">
                <Link className='l' to="/home">Home</Link>
            </li>
          </ul>
          
        </div>
      
        
      </nav>
      { !user?
        <div className='row'>
        <div className='col-3'></div>
        <div className='col-6'>
        <h1>Hi there! please sign in to continue</h1>
        <p>Username === chandan</p><p> Password === chandan</p>
        <img src={gif} />
        </div>
      </div>: ''  
      }
      
        
      <UserContext.Provider value={providerValue}>
        <Outlet />
      </UserContext.Provider>
        
      </div>
    
  )
}

export default App