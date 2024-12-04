import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let cardObj = {
    userName :"Aaron",
    designation:"Technology Analyst",
    location: "Bengaluru"
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-5 rounded-xl'>TailWind CSS</h1>
      <Card userName={cardObj.userName} designation={cardObj.designation} location = {cardObj.location} />      
    </>
  )
}

export default App
