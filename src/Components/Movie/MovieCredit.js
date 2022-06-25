import React from "react";
import { fetcher } from "../../Config/config";
import useSWR from "swr";

export default function MovieCredit({ movieId }) {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=95f2419536f533cdaa1dadf83c606027`,
    fetcher
  );
  console.log(data);
  return (
    <>
      <h2 className="text-center text-2xl mb-10 text-white">Casts</h2>
      {data?.cast.length && (
        <div className="grid grid-cols-4 gap-5">
          {data?.cast.slice(0, 4).map((item) => (
            <div className="cast-item" key={item.id}>
              <img src={`https://image.tmdb.org/t/p/w500/${item?.profile_path}`} alt="" className="w-full h-[350px] object-cover rounded-lg mb-3" />
            <h4 className="text-center text-white text-2xl">{item?.name}</h4>
            </div>
          ))}
        </div>
      )}

    </>
  );
}
