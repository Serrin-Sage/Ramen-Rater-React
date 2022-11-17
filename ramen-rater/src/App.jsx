import { useEffect, useState } from 'react'

const Header = () => {
  return (
    <header>
      <h3>Ramen Rater React</h3>
    </header>
  )
}

const RamenMenu = (props) => {
  
  return (
    <div id="ramen-menu">
      {props.ramen.map((indivRamen) => (
        <div key={indivRamen.id} className="ramen-img-div">
          <img src={indivRamen.image} className="ramen-img" onClick={() => props.setRamenDetails(indivRamen)}></img>
        </div>
      ))}
    </div>
  )
    
}

const DisplayedRamen = (props) => {
  return (
    <div>
      <div id="ramen-detail">
        <img className="detail-image" src={props.ramenDetails.image} alt="Insert Image Here" />
        <h2 className="name">{props.ramenDetails.name}</h2>
        <h3 className="restaurant">{props.ramenDetails.restaurant}</h3>
      </div>
      <div>
        <h3>Rating:</h3>
        <p>
          <span id='rating-display'>{props.ramenDetails.rating}</span> / 10
        </p>
        <h3>Comment:</h3>
        <p id='comment-display'>
          {props.ramenDetails.comment}
        </p>
      </div>
    </div>
  )
}

const EditRamenForm = () => {
  
  return (
    <div id="edit-ramen-div">
      <form id="edit-ramen">
        <h4>Update the Featured Ramen</h4>
        <label htmlFor="rating">Rating: </label>
        <input type="number" name="rating" id="new-rating" />
        <label htmlFor="comment">Comment: </label>
        <textarea name="comment" id="comment"></textarea>
        <input type="submit" value="Update" />
      </form>
    </div>
  )
}



const AddNewRamen = () => {
  const submitForm = (e) => {
    e.preventDefault()
    let newRamenName = e.target.name.value;
    let newRamenRest = e.target.restaurant.value;
    let newImage = e.target.image.value;
    let newRating = e.target.rating.value;
    let newComment = e.target.comment.value;

    let newRamenObj = {
      name: newRamenName,
      restaurant: newRamenRest,
      image: newImage,
      rating: newRating,
      comment: newComment
    }

    console.log(newRamenObj)
    // RamenMenu(newRamenObj)
  }

  return (
    <div>
      <form id="new-ramen" onSubmit={submitForm}>
        <h4>Add New Ramen</h4>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="new-name" />
        <label htmlFor="restaurant">Restaurant: </label>
        <input type="text" name="restaurant" id="new-restaurant" />
        <label htmlFor="image">Image: </label>
        <input type="text" name="image" id="new-image" />
        <label htmlFor="rating">Rating: </label>
        <input type="number" name="rating" id="new-rating" />
        <label htmlFor="new-comment">Comment: </label>
        <textarea name="comment" id="new-comment"></textarea>
        <input type="submit" value="Create" />
      </form>

    </div>
  )
}

function App() {
  const [ramenDetails, setRamenDetails] = useState([])
  const [ramen, setRamen] = useState([])

  const getAllRamen = async () => {
    const res = await fetch("http://localhost:3000/ramens")
    res.json().then((res) => {
      setRamen(res)
      setRamenDetails(res[0])
    });
  };

  useEffect(() => {
    getAllRamen();
  }, [])

  return (
    <div className="App">
      <Header />
      <RamenMenu setRamenDetails={setRamenDetails} ramen={ramen}/>
      <DisplayedRamen ramenDetails={ramenDetails}/>
      <EditRamenForm />
      <AddNewRamen />
    </div>
  )
}

export default App
