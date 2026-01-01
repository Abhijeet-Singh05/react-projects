import { useState, useCallback, useEffect, useRef } from 'react';


function App() {
  const [length,setLength] = useState(0);
  const [numAllowed,setNumAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");
  
  const passRef = useRef(null);
  
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed){
      str += "0123456789"
    }
    if (charAllowed){
      str += "!@#$%^&*()_-+=,.?/|"
    }

    for(let i=1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  },[length,numAllowed,charAllowed,setPassword])

  const copyPassword = () =>{
    passRef.current?.select()
    //passRef.current?.setSelectionRange(0,length)
    window.navigator.clipboard.writeText(password)
  }

  useEffect(()=>{
      passwordGenerator()
  },[length,numAllowed,charAllowed,passwordGenerator])

  return (
    <>
      
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-black bg-gray-800'>
          <h1 className='text-white text-center py-1 px-10'>Password Generator</h1>

          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input
              type='text'
              value={password}
              placeholder='password'
              className='outline-none w-full py-1 px-3 bg-amber-50'
              readOnly
              ref={passRef}
            />

            <button className='outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0'
            onClick={copyPassword}>
              Copy
            </button>

          </div>

          <div className='flex text-sm gap-x-2'>

            <div className='flex items-center gap-x-1'>
                <input
                type='range'
                min={6}
                max={22}
                value={length}
                className='cursor-pointer'
                onChange={(e) => {
                  setLength(e.target.value)
                }}
                />
                <label htmlFor="cursor-pointer" style={{color:'skyblue'}}>Length:{length}</label>
            </div>

            <div className='flex items-center gap-x-1'>
                <input
                type="checkbox"
                defaultChecked = {numAllowed}
                id='numberInput'
                onChange={() => {
                  setNumAllowed((prev) => !prev)
                }}
                />
                <label htmlFor="numberInput" style={{color:'skyblue'}}>Number</label>
            </div>

            <div className='flex items-center gap-x-1'>
                <input
                type="checkbox"
                defaultChecked = {charAllowed}
                id='charInput'
                onChange={() => {
                  setCharAllowed((prev) => !prev)
                }}
                />
                <label htmlFor="charInput" style={{color:'skyblue'}}>Symbols</label>
            </div>
          </div>


      </div>     
    </>
  )
}

export default App
