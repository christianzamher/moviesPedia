import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import swal from "@sweetalert/with-react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Listado = () => {
  const token = sessionStorage.getItem("token");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const endPoint =
      "https://api.themoviedb.org/3/movie/upcoming?api_key=08a8246a9e59f864e9c48e34d244f625&include_adult=false&include_video=false&language=en&page=1&sort_by=popularity.desc";
    axios
      .get(endPoint)
      .then((res) => {
        const apiData = res.data;
        setMovies(apiData.results);
      })
      .catch((error) => {
        swal(<h2> Oops! Error in DataBase , please try again</h2>);
      });
  }, [setMovies]);

  console.log(movies);

  return (
    <>
      {!token && <Navigate to="/" />}

      <div   className="flex flex-wrap" >
      {movies.map((oneMovie, id) => {
        return (
            <div key={id} className="flex max-w-sm w-full  shadow-md rounded-lg overflow-hidden mx-auto my-4">
              <div className="w-2 bg-gray-800"></div>

              <div
                className="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white movie-card"
                data-movie-id="438631"
              >
                <div className="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
                <div
                  className="relative cursor-pointer group z-10 px-10 pt-10 space-y-6 movie_info"
                  data-lity=""
                  href=""
                >
                  <div className="poster__info align-self-end w-full">
                    <div className="h-32"></div>
                    <div className="space-y-6 detail_info">
                      <div className="flex flex-col space-y-2 inner">
                        <a
                          className="relative flex items-center w-min flex-shrink-0 p-1 text-center text-white bg-red-500 rounded-full group-hover:bg-red-700"
                          data-unsp-sanitized="clean"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.555 7.168A1 1 0 0 0 8 8v4a1 1 0 0 0 1.555.832l3-2a1 1 0 0 0 0-1.664l-3-2z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <div className="absolute transition opacity-0 duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-x-16 text-xl font-bold text-white group-hover:pr-2">
                            Trailer
                          </div>
                        </a>
                        <h3
                          className="text-2xl font-bold text-white"
                          data-unsp-sanitized="clean"
                        >
                          {oneMovie.title}
                        </h3>
                        <div className="mb-0 text-lg text-gray-400">
                          {oneMovie.tagline}
                        </div>
                      </div>
                      <div className="flex flex-row justify-between datos">
                        <div className="flex flex-col datos_col">
                          <div className="popularity">{oneMovie.popularity}</div>
                          <div className="text-sm text-gray-400">Popularity:</div>
                        </div>
                        <div className="flex flex-col datos_col">
                          <div className="release">{oneMovie.release_date}</div>
                          <div className="text-sm text-gray-400">Release date:</div>
                        </div>
                        <div className="flex flex-col datos_col">
                          <div className="release">{oneMovie.vote_average}</div>
                          <div className="text-sm text-gray-400">Vote:</div>
                        </div>
                      </div>
                      <div className="flex flex-col overview">
                        <div className="flex flex-col"></div>
                        <div className="text-xs text-gray-400 mb-2">Overview:</div>
                        <p className="text-xs text-gray-100 mb-6">
                          {oneMovie.overview}
                        </p>
                      </div>
                    </div>
                   
                  </div>
                </div>
                <img
                  className="absolute inset-0 transform w-full -translate-y-4"
                  src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                   //style={{filter: grayscale(0)}}
                />
                <div className="poster__footer flex flex-row relative pb-10 space-x-4 z-10">
                  <Link
                    className="flex items-center py-2 px-4 rounded-full mx-auto text-white bg-red-500 hover:bg-red-700"
                    to={`/moviedetail?movieID=${oneMovie.id}`}
                    data-unsp-sanitized="clean"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>

                    <div className="text-sm text-white ml-2">Watch</div>
                  </Link>
                </div>
              </div>
            </div>
          

          
        );
      })}
      </div>
    </>
  );
};

export default Listado;
