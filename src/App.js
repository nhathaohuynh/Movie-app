import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Banner from "./Banner/Banner";
import Main from "./Layout/Main";
import HomePage from "./Pages/HomePage";
import MovieDetail from "./Pages/MovieDetail";
import Movies from "./Pages/Movies";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={<HomePage>{<Banner></Banner>}</HomePage>}
          ></Route>
          <Route path="/movies" element={<Movies></Movies>}></Route>
          <Route path="/movie/:movieId" element={<MovieDetail></MovieDetail> }></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
