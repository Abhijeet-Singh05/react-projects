import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


// creating object

// const Element = {
//   <a href="https://google.com" target ="_blank"> Google </a>
// }

// Right method
const ReactElement = React.createElement( 
  "a",{
    href:"https://google.com",
    target: "_blank"
  },
  "click me "
)

createRoot(document.getElementById('root')).render(
 
  
  
  ReactElement
  
  
)
