import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../App'

export default function Header() {
  const [user, setUser] = useContext(UserContext)

  return(
    <header>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <nav>
          <Link to='/context'>Context</Link>
          <Link to='/calculator'>InputCreate</Link>
          <Link to='/'>AboutUs</Link>
          <Link to='/'>News</Link>
          {!user ? (
            <><Link to='/login'>SignIn</Link><Link to='/register'>SignUp</Link></>
          ) : (
            <><Link to='/logout'>LogOut</Link></>
          )}
        </nav>
      </div>
    </header>
  )
}