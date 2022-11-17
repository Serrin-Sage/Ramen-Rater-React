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
    <div id="ramen-menu">
      {ramen.map((indivRamen) => (
        <div key={indivRamen.id}>
          <img src={indivRamen.image} className="ramen-img"></img>
          {/* <h2>{indivRamen.name}</h2>
          <p>{indivRamen.restaurant}</p> */}
        </div>
      ))}
    </div>
  )
    
}

const DisplayedRamen = () => {

  return (
    <div id="ramen-detail">
      <img className="detail-image" src="./src/assets/image-placeholder.jpg" alt="Insert Image Here" />
      <h2 className="name">Insert Name Here</h2>
      <h3 className="restaurant">Insert Restaurant Here</h3>
    </div>
  )
}

function App() {

  return (
    <div className="App">
      <Header />
      <RamenMenu />
      <DisplayedRamen />
    </div>
  )
}

export default App
