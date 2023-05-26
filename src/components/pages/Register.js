import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { registerAction } from '../../container/actions'
import BaseLogin from '../imports/BaseLogin'
import RegisterForm from '../imports/RegisterForm'


export default function Register() {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordCheck, setPasswordCheck] = useState("")

  const dispatch = useDispatch()
  const history = useHistory()
  //onform submit click handler

  const handleSubmit = (event) => {
    event.preventDefault()
    const newUser = {
      username,
      email, 
      password,
      passwordCheck
    }
    const user = { username: "admin", email: "admin@gmail.com", password: "admin123", passwordCheck: "admin123" }
    const validate = dispatch(registerAction(user));
    validate
      .then(data => {
        // console.log(data)
        history.push('/login')

      })
      .catch(error => {
        console.log(error)
      })
    // console.table(newUser);
  }

  let registerData = {
    handleSubmit,
    setUsername,
    setEmail,
    setPassword,
    setPasswordCheck
  }

  return (
    <div id="login">
    <div className="container">
      <div className="row login-box">
        
                  <BaseLogin />
          <RegisterForm registerState={ registerData } />

        
      </div>
    </div>
   
  </div>
  )
}
