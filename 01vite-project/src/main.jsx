
import React from 'react'

import ReactDOM from 'react-dom/client'
// import App from './App.jsx'

function Myapp() {
  return(
    <div>
      <h1>Hello, world!</h1>
    </div>
  )
}


// this will not work because of prebuild syntax
const element = {
  type : 'a',
  props : {
      href : 'https://www.example.com',
      target : '_blank'
  },
  children : 'click here to visit'
}

//this will work because react convert this into tree like in key value pair
const anotherElement = (
  <a href='www.google.com'>visit google</a>
)

const anotherUser = "newUser"
//craete a element based on react syntax
const reactElement = React.createElement(
  'a',
  {href : 'https://google.com',target : '_blank'},
  'click me to visit',
  anotherUser //can direcly give variable here
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  // element
  // Myapp() // this will also execute
  // <Myapp/> // this will execute
  // anotherElement
  reactElement
)
