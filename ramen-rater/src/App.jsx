import { useEffect, useState } from 'react'

const Header = () => {
  return (
    <header>
      <h3>Ramen Rater React</h3>
    </header>
  )
}

const RamenMenu = () => {
  const [ramen, setRamen] = useState([])

  const getAllRamen = async () => {
    const res = await fetch("http://localhost:3000/ramens")
    res.json().then((res) => setRamen(res));
  };

  useEffect(() => {
    getAllRamen();
  }, [])
  
  return (
    <div>
      {ramen.map((indivRamen) => (
        <div key={indivRamen.id}>
          <img src={indivRamen.image} className="ramen-img"></img>
          <h2>{indivRamen.name}</h2>
          <p>{indivRamen.restaurant}</p>
        </div>
      ))}
    </div>
  )
    
}

const DisplayedRamen = () => {

}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <h1>Hello</h1>
      <RamenMenu />
    </div>
  )
}

export default App
