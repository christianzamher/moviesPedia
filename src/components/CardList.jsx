import React from "react";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CardList = () => {
  //Variables

  let token = sessionStorage.getItem("token");
  const params = useParams();
  let query = new URLSearchParams(window.location.search);
  let movieID = query.get("movieID");

  //Hooks

  const [movie, setMovie] = useState();

  useEffect(() => {
    const moviePoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=08a8246a9e59f864e9c48e34d244f625&include_adult=false&include_video=false&language=en`;
    axios
      .get(moviePoint)
      .then((response) => {
        const movieData = response.data;
        setMovie(movieData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieID]);

  return (
    <>
      {!token && <Navigate to="/" />}
      {!movie && <p>Loading...</p>}
      {movie && (
        <div
          className="min-h-full my-8 grid place-items-center font-mono bg-gray-900 "
          // key={id}
        >
          <div className=" rounded-md bg-gray-800 shadow-lg">
            <div className="md:flex px-4 leading-none max-w-4xl">
              <div className="flex-none ">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt="pic"
                  className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300"
                />
              </div>

              <div className="flex-col text-gray-300">
                <p className="pt-4 text-2xl font-bold"></p>
                <hr className="hr-text" data-content="" />
                <div className="text-md flex justify-between px-4 my-2">
                  <span className="font-bold">
                    RELEASE: {movie.release_date}
                  </span>
                  <span className="font-bold"></span>
                </div>
                <p className="hidden md:block px-4 my-4 text-sm text-left">
                  Run time : {movie.runtime}
                </p>

                <p className="flex text-md px-4 my-2">
                  REVIEW : {movie.overview}
                </p>

                {movie && movie.genres.map((oneGenre) => (
                  <ul>
                    <li key={oneGenre.id}>{oneGenre.name}</li>
                  </ul>
                ))}

                <div className="text-xs">
                  <button
                    type="button"
                    className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-800 focus:outline-none focus:shadow-outline"
                  >
                    TRAILER
                  </button>

                  <button
                    type="button"
                    className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-800 focus:outline-none focus:shadow-outline"
                  >
                    IMDB
                  </button>

                  <button
                    type="button"
                    className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-800 focus:outline-none focus:shadow-outline"
                  >
                    AMAZON
                  </button>

                  <Link
                    // to={`/moviedetail?movieID=${oneMovie.id}`}
                    className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-5 00 focus:outline-none focus:shadow-outline"
                  >
                    Watch Movie
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center px-4 mb-4 w-full">
              <div className="flex">
                <i className="material-icons mr-2 text-red-600 hover:text-red-900 ">
                  favorite_border
                </i>
                <i className="material-icons text-blue-600 hover:text-blue-800">
                  remove_red_eye
                </i>
              </div>
              <div className="flex">
                <i className="material-icons ml-2 text-yellow-600 hover:text-yellow-800">
                  sentiment_very_satisfied
                </i>
                <i className="material-icons ml-2 text-yellow-600 hover:text-yellow-800">
                  sentiment_neutral
                </i>
                <i className="material-icons ml-2 text-yellow-600 hover:text-yellow-800">
                  sentiment_very_dissatisfied
                </i>
                <i className="material-icons ml-2 text-yellow-600 hover:text-yellow-800">
                  star_outline
                </i>
                <i className="material-icons ml-2 text-yellow-600 hover:text-yellow-800">
                  star_half
                </i>
                <i className="material-icons ml-2 text-yellow-600 hover:text-yellow-800">
                  star
                </i>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardList;
