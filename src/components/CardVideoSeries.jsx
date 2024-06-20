import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

import Spinner from "./Spinner";

const CardVideoSeries = () => {
  //Variables

  let token = sessionStorage.getItem("token");
  let query = new URLSearchParams(window.location.search);
  let tvID = query.get("tvID");

  const [videoData, setVideoData] = useState(null);

  //API call
  useEffect(() => {
    const VideoPoint = `https://api.themoviedb.org/3/tv/${tvID}/videos?api_key=08a8246a9e59f864e9c48e34d244f625&include_adult=false&include_video=false&language=en`;
    axios
      .get(VideoPoint)
      .then((response) => {
        const VideoData = response.data;
        setVideoData(VideoData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [tvID]);

  //Security
  if (!token) {
    return <Navigate to="/" />;
  }

  //Spinner
  if (!videoData || !videoData.results.length) {
    return <Spinner/>;
  }

  return (
    <div className="min-h-full my-8 grid place-items-center font-sans bg-gray-900">
      <div className="rounded-md bg-gray-800 shadow-lg">
        <div className="md:flex px-4 leading-none max-w-4xl">
          <div className="flex-col text-gray-300">
            <p className="pt-4 text-2xl font-bold">
              Trailer Name: {videoData.results[0].name}
            </p>
            <hr className="hr-text" data-content="" />
            <div className="text-md flex justify-between px-4 my-2"></div>
            <div className="text-xs ">
              <iframe
                id="youtube-player"
                width="865"
                height="600"
                src={`https://www.youtube.com/embed/${videoData.results[0].key}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              <div className="rounded-md px-4 py-2 m-2 transition duration-500 ease select-none  focus:outline-none focus:shadow-outline"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardVideoSeries;
