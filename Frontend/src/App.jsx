import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from  'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    // axios.get('http://localhost:3000/api/jokes')
    //upar wala problem ko sole kare ka wo proxy ke madad se kare ge 
    axios.get('/api/jokes')
    
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error) => {
        console.log("error occurred", error)
      });
  }, []); // <-- Empty array as the second argument
  
 
  return (
    <>
        <h1>anurag or backend_3 jokes</h1>
      <p>JOKES: {jokes.length}</p>
{
  jokes.map((joke, index) => (
    <div key={joke.id}>
      <h4>{joke.title}</h4>
      <p>{joke.content}</p>
    </div>
  ))
}

    </>
  )
}

export default App
