import Routers from '@/app/Routers'
import '@/App.css'
import { createContext, useState } from 'react'

export const UserContext = createContext()

export default function App() {
  const [user, setUser] = useState(false)

  return(
    <UserContext.Provider value={[user, setUser]}>
      <Routers/>
    </UserContext.Provider>
  )
}