import { useEffect } from 'react';
import { useState,useCallback,useRef } from 'react'


function App() {
  const [length, setLength] = useState(0);
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(charAllowed) str += "!@#$%^&*()_+-=[]{}|;"
    if(numberAllowed) str += "0123456789"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }
    setPassword(pass)

  } ,[length,numberAllowed,charAllowed,setPassword])


  useEffect(() => {passwordGenerator()}
  ,[length,numberAllowed,charAllowed,passwordGenerator])
  
  const passRef = useRef(null)

  const copyPasswordtoclipboard =  useCallback(
    () => {
      passRef.current?.select(); //the password will be selected to showcase that it is copied
      // passRef.current?.setSelectionRange(0,9);// to select in the given range
      window.navigator.clipboard.writeText(password)
    },
    [password],
  )
  

  return (
    <>
      <div className='w-full max-w-md  mx-auto shadow-md my-8 rounded-lg px-3 py-6 text-stone-50 bg-gray-700'>
          <h1 className='text-white text-center mb-4'>Password Generator</h1>
          <div className='flex shadow-md rounded-lg overflow-hidden mb-6'>
                <input 
                  type="text"
                  value={password}
                  className='text-black outline-none w-full py-1 px-3'
                  placeholder='password'
                  ref={passRef}
                  />
                  <button 
                  onClick={copyPasswordtoclipboard}
                  className='outline-none bg-blue-900 text-white px-3 py-0.5 shrink-0'

                  >copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
              
      </div>
    </>
  )
}

export default App
