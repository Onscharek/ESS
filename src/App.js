import React, { useState } from 'react';
import './App.css';
import MovieList from './comp/Molist/MovieList';
import { moviesData } from './comp/dattt/Data';
import AddMOv from './comp/addmov/AddMOv';




function App() {
  const [movies,setMovies] =useState(moviesData);

const add=(newMovies)=>{setMovies([...movies,newMovies])};


  return (
    <div className="App">
<AddMOv add={add}/>
<MovieList movies={movies}/>
    </div>
  );
}

export default App;
