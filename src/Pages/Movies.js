import React from 'react'
import MovieList from '../Components/Movie/MovieList'

export default function Movies() {
  return (
    <div>
          <section className="movies-layout page-container">
        <h2 className="capitalize text-white mt-10 mb-5 text-2xl font-bold">
          Popular
        </h2>
        <MovieList type = "popular"></MovieList>
      </section>
    </div>
  )
}


