import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  
  const {user} = useParams()  
    
  return (
    <div className="bg-white/30 backdrop-blur-xl border border-white/20 p-10 rounded-2xl shadow-2xl text-3xl p-4 text-center"
    >User: {user} </div>
  )
}

export default User