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
      "https://api.themoviedb.org/3/discover/movie?api_key=08a8246a9e59f864e9c48e34d244f625&include_adult=false&include_video=false&language=en&page=1&sort_by=popularity.desc";
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

      {movies.map((oneMovie, id) => {
        return (
          <div  key={id}>
            <div class="flex max-w-sm w-full  shadow-md rounded-lg overflow-hidden mx-auto">
              <div class="w-2 bg-gray-800"></div>

              <div
                class="overflow-hidden rounded-xl relative transform hover:-translate-y-2 transition ease-in-out duration-500 shadow-lg hover:shadow-2xl movie-item text-white movie-card"
                data-movie-id="438631"
              >
                <div class="absolute inset-0 z-10 transition duration-300 ease-in-out bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
                <div
                  class="relative cursor-pointer group z-10 px-10 pt-10 space-y-6 movie_info"
                  data-lity=""
                  href="https://www.youtube.com/embed/aSHs224Dge0"
                >
                  <div class="poster__info align-self-end w-full">
                    <div class="h-32"></div>
                    <div class="space-y-6 detail_info">
                      <div class="flex flex-col space-y-2 inner">
                        <a
                          class="relative flex items-center w-min flex-shrink-0 p-1 text-center text-white bg-red-500 rounded-full group-hover:bg-red-700"
                          data-unsp-sanitized="clean"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-10 h-10"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM9.555 7.168A1 1 0 0 0 8 8v4a1 1 0 0 0 1.555.832l3-2a1 1 0 0 0 0-1.664l-3-2z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <div class="absolute transition opacity-0 duration-500 ease-in-out transform group-hover:opacity-100 group-hover:translate-x-16 text-xl font-bold text-white group-hover:pr-2">
                            Trailer
                          </div>
                        </a>
                        <h3
                          class="text-2xl font-bold text-white"
                          data-unsp-sanitized="clean"
                        >
                          {oneMovie.title}
                        </h3>
                        <div class="mb-0 text-lg text-gray-400">
                          {oneMovie.tagline}
                        </div>
                      </div>
                      <div class="flex flex-row justify-between datos">
                        <div class="flex flex-col datos_col">
                          <div class="popularity">{oneMovie.popularity}</div>
                          <div class="text-sm text-gray-400">Popularity:</div>
                        </div>
                        <div class="flex flex-col datos_col">
                          <div class="release">{oneMovie.release_date}</div>
                          <div class="text-sm text-gray-400">Release date:</div>
                        </div>
                        <div class="flex flex-col datos_col">
                          <div class="release">{oneMovie.vote_average}</div>
                          <div class="text-sm text-gray-400">Vote:</div>
                        </div>
                      </div>
                      <div class="flex flex-col overview">
                        <div class="flex flex-col"></div>
                        <div class="text-xs text-gray-400 mb-2">Overview:</div>
                        <p class="text-xs text-gray-100 mb-6">
                          {oneMovie.overview}
                        </p>
                      </div>
                    </div>
                    {/* <div
                      data-countdown="2021-09-15"
                      class="absolute inset-x-0 top-0 pt-5 w-full mx-auto text-2xl uppercase text-center drop-shadow-sm font-bold text-white"
                    >
                      00 Days 00:00:00
                    </div> */}
                  </div>
                </div>
                <img
                  className="absolute inset-0 transform w-full -translate-y-4"
                  src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`}
                  // style="filter: grayscale(0);"
                />
                <div class="poster__footer flex flex-row relative pb-10 space-x-4 z-10">
                  <Link
                    class="flex items-center py-2 px-4 rounded-full mx-auto text-white bg-red-500 hover:bg-red-700"
                    to={`/moviedetail?movieID=${oneMovie.id}`}
                    data-unsp-sanitized="clean"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>

                    <div class="text-sm text-white ml-2">Watch</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Listado;
