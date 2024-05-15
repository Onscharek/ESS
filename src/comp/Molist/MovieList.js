import React from 'react'
import MovieCard from '../MovieC/MovieCard'

const MovieList = ({movies}) => {
  return (
    <div className='movieList'>
{movies.map((movie)=>(<MovieCard movie={movie} key={movie.id} />)

)}

    </div>
  )
}

export default MovieList