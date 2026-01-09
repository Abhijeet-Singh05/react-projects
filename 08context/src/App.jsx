import React from 'react'
import './App.css'
import UserContextProvider from './context/UserContext'
import Login from './components/login'
import Profile from './components/profile'
function App() {
  
  return (
    <UserContextProvider>
      <h1>React basic context api</h1>
      <Login/>
      <Profile/>

    </UserContextProvider>
  )
}

export default App
