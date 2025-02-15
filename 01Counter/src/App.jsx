import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , setcounter] = useState(15)
  //let counter = 5

  const addvalue = () =>{
    counter = counter + 1
    if(counter > 50){
      counter = 50;
    }
    console.log("Value added" , counter)
    setcounter(counter)
  }
  const subvalue = () =>{
    counter = counter - 1
    if(counter < 0){
      counter = 0;
    }
    console.log("Value subtracted" , counter)
    setcounter(counter)
  }
  return (
    <>
      <h1>Chai aur React</h1>
      <h1>Counter Value : {counter}</h1>

      <button onClick = {addvalue}>Increase Value</button>
      <br />
      <button onClick = {subvalue}>Decrease Value</button>
    </>
  )
}

export default App
