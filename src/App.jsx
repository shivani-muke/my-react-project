import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import PersonInfo from './components/personInfo'
import './App.css'

function App() {

  return (
    <div className='App'>
    <PersonInfo name="name" age="24"/>
    <PersonInfo name="name2" age="34"/>
    <PersonInfo name="name3" age="14"/>
  </div>
  )
}

export default App
