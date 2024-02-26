import { useState, useContext } from 'react'
import axios from 'axios'
import { UserContext } from '@/App.jsx'
import { Link } from 'react-router-dom'

export default function Register() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [user, setUser] = useContext(UserContext)

  function setInputFirstname(event) {
    setFirstname(event.target.value)
  }
  function setInputLastname(event) {
    setLastname(event.target.value)
  }
  function setInputUsername(event) {
    setUsername(event.target.value)
  }
  function setInputEmail(event) {
    setEmail(event.target.value)
  }
  function setInputPassword(event) {
    setPassword(event.target.value)
  }
  function setInputPasswordConfirm(event) {
    setPasswordConfirm(event.target.value)
  }

  async function sendForm(event) {
    event.preventDefault()

    const response = axios.post('http://127.0.0.1:8000/api/v1/auth/register/', {
      username: username,
      email: email,
      password: password,
      confirm_password: passwordConfirm,
      first_name: firstname,
      last_name: lastname
    })
      .then((res) => {
        console.log(res)
        setUser(true)
      })
      .catch((error) => {
        if (error.response) {
          console.error('Authentication failed. Server responded with:', error.response.data)
        } else if (error.request) {
          console.error('No response received from the server. Is the server running?')
        } else {
          console.error('Error setting up the request:', error.message)
        }
      })
  }

  return(
    <div>
      <div>
        <form onSubmit={sendForm} method='post'>
          <h2>Register</h2>
          <label htmlFor="firstname">Firstname: </label>
          <input onChange={setFirstname} type="text" name="firstname" placeholder="enter your firstname" />
          <label htmlFor="lastname">Lastname: </label>
          <input onChange={setInputLastname} type="text" name="lastname" placeholder="enter your lastname" />
          <label htmlFor="name">Name: </label>
          <input onChange={setInputUsername} type="text" name="username" placeholder="enter your username" />
          <label htmlFor="email">Email: </label>
          <input onChange={setInputEmail} type="email" name="email" placeholder="enter your Email" />
          <label htmlFor="password">Password: </label>
          <input onChange={setInputPassword} type="password" name="password" placeholder="enter your password" />
          <label htmlFor="password_again">Password again: </label>
          <input onChange={setInputPasswordConfirm} type="password" name="password_again" placeholder="enter your password again" />
          <input type="submit" value="submit" />
        </form>
      </div>
    </div>
  )
}