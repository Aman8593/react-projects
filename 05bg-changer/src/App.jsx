import { useState } from 'react'



function App() {
  
  const [color, setcolor] = useState()

  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor : color}} >
    <div className='fixed flex flex-wrap justify-center bottom-12' >
      <div className='flex flex-wrap justify-center bg-white gap-10 px-3 py-2 rounded-xl ' >
        <button onClick={() => setcolor('red')} className=' rounded-xl px-3 py-2'style={{backgroundColor : 'red'}} >
          Red</button>
        <button onClick={() => setcolor('green')} className=' px-3 py-2 rounded-xl'
        style={{backgroundColor : 'green'}} >
          Green</button>
        <button onClick={() => setcolor('yellow')} className='px-3 py-2 rounded-xl' 
        style={{backgroundColor : 'yellow'}}>Yellow</button>
        <button onClick={() => setcolor('orange')} className=' px-3 py-2 rounded-xl' 
        style={{backgroundColor : 'orange'}}>Orange</button>
        <button onClick={() => setcolor('blue')} className=' px-3 py-2 rounded-xl'
        style={{backgroundColor : 'blue'}} >Blue</button>
        <button onClick={() => setcolor('violet')} className=' px-3 py-2 rounded-xl'
        style={{backgroundColor : 'violet'}} >Pink</button>
      </div>
    </div>
    </div>
    
    </>
  )
}

export default App
