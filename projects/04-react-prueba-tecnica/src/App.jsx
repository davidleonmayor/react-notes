import { useState, useEffect } from 'react'
import './App.css'

const RANDOM_FACT_URL = 'https://catfact.ninja/fact'
const RANDOM_CAT_IMG_URL = 'https://cataas.com/cat/says/hello'

const fetchData = async url => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

function App() {
  const [fact, setFact] = useState(null)

  useEffect(() => {
    fetchData(RANDOM_FACT_URL).then(data => setFact(data.fact))
  }, [])

  return (
    <div>
      {fact ?? 'Cargando...'}
      <br />
      <img src={RANDOM_CAT_IMG_URL} alt="Random cat" />
    </div>
  )
}

export default App