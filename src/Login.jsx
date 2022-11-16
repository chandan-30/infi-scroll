import React from 'react'
import {useContext, useState} from 'react'
import { UserContext } from './UserContext'
import { useNavigate } from 'react-router-dom'


function Login() {
  let {user,setUser} = useContext(UserContext);
  let [uname, setUname] = useState('');
  let [pass, setPass] = useState('');

  let navigate = useNavigate();

  let onUname = (e) => {
      setUname(e.target.value)
  }

  let onPass = (e) => {
    setPass(e.target.value)
}

  let login = async () => {
    if (!user){
      setUname('')
      setPass('')
    }
    return {
      id: 1,
      username: uname,
      password: pass
    }
  }
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-4'></div>
        <div className='col-4'>
          <main style={{ padding: "1rem 0" }}>
        
        {
          !user? 
          <form>

                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">User Name</label>
                    <input type="text" className="form-control" onChange={onUname} value={uname}/>
                    
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={onPass} value={pass}/>
                </div>
                
                
            </form>
            :'' 
          }
        <button type="button" class="btn btn-primary" onClick={

        async () => {
          let userr = await login();
          if(userr.username == 'chandan' && userr.password == 'chandan'){
            setUser(userr.username)
            navigate("/home")
          }
          else{
            setUser('')
          }
        }
        
        }>{user? 'Logout': 'Login'}</button>
    </main>
          </div>
            <div className='col-4'></div>

        </div>
        </div>
  )
}

export default Login