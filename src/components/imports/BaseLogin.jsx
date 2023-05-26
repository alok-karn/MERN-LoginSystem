import React from 'react'
import { useLocation, useHistory, Link } from 'react-router-dom'


export default function BaseLogin() {

    const location = useLocation();
    const history = useHistory();

    let defaultClass = "nav-link link-btn btn-primary default-bg";
    let active = " active";

    const register = () => { 
        history.push("/register")
        window.location.reload();

    }
    const login = () => {
        history.push("/login")
        // window.location.reload();
       
    }

    const refresh = () => {
        history.push("/")
        // window.location.reload();
    }

  return (
      <div className="col-sm-5 bg-img align-self-center">
          <div className="info">
              <div className="logo clearfix">
                  
                  <Link className="nav-brand" onClick={refresh} to="#">Logo</Link>
                  
              </div>
              <div className="btn-section clearfix">
                  <Link to= '/login' className={location.pathname === "/login" ? defaultClass + active : defaultClass}>Login</Link>
                  <Link to='/register' className={location.pathname === "/register" ? defaultClass + active : defaultClass}>Register</Link>
              </div>
          </div>
    </div>
  )
}
