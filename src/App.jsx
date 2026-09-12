import { useEffect, useRef, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css';
import PersonInfo from './components/personInfo'
import SpaceXY from './components/spaceXY'
import Props from './components/props'

function App() {
const [show, setShow]=useState(true);
const buttonElement = useRef(null);
useEffect(()=>{
buttonElement.current.focus();
console.log("useRef focus")
})
  return (<>
    <div className='App'>
    <PersonInfo name="name" age="24"/>
    <PersonInfo name="name2" age="34"/>
    <PersonInfo name="name3" age="14"/>
  </div>
  <div>
  {show?  <SpaceXY/> : <h3>No Data</h3> }
  <button onClick={()=>setShow(!show)} ref={buttonElement}  >Toggle</button>
  </div>
  <div>
    <Props property={"true"}>
      {"Hello"}
    </Props>
  </div>
  </>
  )
}

export default App
