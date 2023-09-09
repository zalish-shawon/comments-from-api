import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comments from './Comments'
import Comment from './Comment'

function App() {
  

  return (
    <>
      
      <h3>React Comments data from Api</h3>
      <Comments></Comments>
      <Comment></Comment>
     
    </>
  )
}

export default App
