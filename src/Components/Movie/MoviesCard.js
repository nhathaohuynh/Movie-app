import {useNavigate} from 'react-router-dom'
function MovieCard({ movie }) {
  const { title, vote_average,poster_path,release_date, id } = movie;
  const navigate = useNavigate()

  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800">
      <img
        className="w-full h-[250px] object-cover rounded-lg mb-3"
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt="img"
      />
      <div className="flex flex-col flex-1">
      <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
      <div className="flex items-center justify-between text-white text-sm opacity-50 mb-10">
        <span>{new Date(release_date).getFullYear()}</span>
        <span>Rate {vote_average}</span>
      </div>
      <button onClick = {() => {navigate(`/movie/${id}`)}} className="bg-primary py-3 px-8 rounded-lg font-bold capitalize text-white w-full mt-auto">
        Watch Now
      </button>
      </div>
    </div>
  );
}

export default MovieCard;
