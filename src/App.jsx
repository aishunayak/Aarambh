import { useState } from 'react'
import Front from './Components/Front'
import Aboutevent from './Components/Aboutevent'
import Judge from './Components/Judge'
import './App.css'
import Navbar from './Components/Navbar'
import Sponser from './Components/Sponser'
/*import './Components/Navbar.sass'*/
import Prize from './Components/Prize'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Front />
      <Aboutevent />
      <Judge />
      <Sponser />
      <Prize />

    </>
  )
}

export default App
