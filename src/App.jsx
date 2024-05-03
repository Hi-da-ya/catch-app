import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contacts from './components/Contacts/Contacts'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'

function App() {


  return (
    <>
      <h1>React is interesting</h1>
      <Navbar/>
      <Home/>
      <Contacts/>

    
       
    </>
  )
}

export default App
