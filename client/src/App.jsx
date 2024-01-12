import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(()=> {
    fetch("/movies")
      .then((response) => response.json())
      .then((movies) => console.log(movies));
  }, []);
  return (
    <div>
      <h1>Movie List</h1>
      <p>Chech console for the movie list!</p>
    </div>
  )
  
}

export default App;
