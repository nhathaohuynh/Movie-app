import React, { Fragment } from 'react'
import MovieList from '../Components/Movie/MovieList'

export default function HomePage({children}) {
  return (
    <Fragment>
        {children}
        <section className="movies-layout page-container">
        <h2 className="capitalize text-white mt-10 mb-5 text-2xl font-bold">
          Now Playing
        </h2>
        <MovieList type = "now_playing"></MovieList>
      </section>
      <section className="movies-layout page-container">
        <h2 className="capitalize text-white mt-10 mb-5 text-2xl font-bold">
          Rated
        </h2>
        <MovieList type = "top_rated"></MovieList>
      </section>
    </Fragment>
  )
}
