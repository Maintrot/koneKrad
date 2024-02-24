import { Link } from 'react-router-dom'

export default function Header() {
  return(
    <header>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <nav>
          <Link to=''>Context</Link>
          <Link to=''>InputCreate</Link>
          <Link to=''>AboutUs</Link>
          <Link to=''>News</Link>
        </nav>
      </div>
    </header>
  )
}