import useNowPlayingMovies from "../utils/hooks/useNowPlayingMovies.js";
import Header from "./Header.jsx";
import MainContainer from "./Browse/MainContainer.jsx";
import SecondaryContainer from "./Browse/SecondaryContainer.jsx";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {
        /*
        MainContainer (movieTrailer, movieTitle, movieDescription)
          - VideoBackground
          - VideoTitle
        SecondaryContainer
          - MovieList * N
            - cards * n

      */
      }
    </div>
  );
};

export default Browse;
