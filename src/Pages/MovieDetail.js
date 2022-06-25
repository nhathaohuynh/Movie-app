import React from "react";
import useSWR from "swr";
import { fetcher } from "../Config/config";
import { useParams } from "react-router-dom";
import MovieCredit from "../Components/Movie/MovieCredit";
import MovieList from "../Components/Movie/MovieList";

export default function MovieDetail() {
  const { movieId } = useParams();
  console.log(useParams());

  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=95f2419536f533cdaa1dadf83c606027`,
    fetcher
  );

  return (
    <div className="p-10">
      <div className="w-full h-[600px]  relative mb-10">
        <div className="w-full absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.2)] to-[rgba(0,0,0,0.3)]"></div>
        <div
          className="h-full w-full bg-cover bg-no-repeat bg-primary"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})`,
          }}
        ></div>
      </div>
      <div className="w-ful h-[600px] max-w-[800px] mx-auto -mt-[400px] relative z-10 pb-10">
        <img
          src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
          alt=""
          className="w-full h-full object-cover rounded-lg top-0"
        />
      </div>
      <h1 className="text-2xl text-white text-center font-bold mb-10">
        {data?.title}
      </h1>
      {data?.genres.length && (
        <div className="flex items-center gap-x-5 mb-10 justify-center">
          {data?.genres.map((item, index) => (
            <span
              className="py-2 px-4 border-primary  text-primary border rounded-xl"
              key={item?.id || index}
            >
              {item?.name}
            </span>
          ))}
        </div>
      )}
      <p className="text-center text-sm text-white leading-relaxed max-w-[600px] mx-auto mb-10">
        {data?.overview}
      </p>
      <MovieCredit movieId={movieId}></MovieCredit>
      <h2 className="text-3xl text-primary py-5">Similar</h2>
      <MovieList type="popular"></MovieList>
    </div>
  );
}
