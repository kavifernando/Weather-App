import { useState } from 'react'
import './App.css'
import WeatherApp from './Components/WeatherApp/weatherApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <WeatherApp/>
      
    </div>
  )
}

export default App
