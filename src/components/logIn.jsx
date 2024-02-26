import { useState, useContext } from "react"
import axios from "axios"
import { UserContext } from "@/App"
import { Link } from "react-router-dom"

export default function LogIn() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useContext(UserContext)

  function setInputUsername(event) {
    setUsername(event.target.value)
  }
  function setInputPassword(event) {
    setPassword(event.target.value)
  }

  async function sendForm(event) {
    event.preventDefault()

    const response = axios.post('http://127.0.0.1:8000/api/v1/auth/login/', {
      username: username,
      password: password
    })
      .then((res) => {
        const {access, refresh} = res.data

        localStorage.getItem('access_token', access)
        localStorage.getItem('refresh_token', refresh)

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
          <form onSubmit={sendForm} method="post">
            <h2>Login</h2>
            <label htmlFor="name">Name: </label>
            <input onChange={setInputUsername} type="text" name="username" placeholder="enter your username" />
            <label htmlFor="password">Password: </label>
            <input onChange={setInputPassword} type="password" name="password" placeholder="enter your password" />
            <input type="submit" value="submit" />
          </form>
        </div>
    </div>
  )
}