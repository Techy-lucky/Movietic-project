import React from "react";
import { useLocation, Link } from "react-router-dom";
import data from "../data"; // Import your data file

function Details() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const movieName = params.get("name");
  const movie = data.find((m) => m.name === movieName);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="p-10 flex justify-center">
      <div className="w-1/4 pr-5">
        <img
          src={movie.image}
          alt={movie.name}
          className="w-full h-auto object-cover rounded-md mb-4"
        />
      </div>

      <div className="w-1/3 flex flex-col justify-between">
        <div className="">
          {movie.videos.map((video, index) => (
            <div key={index} className="relative mb-4">
              <video controls className="autoplay-true w-full h-80 object-cover rounded-md bg-transparent">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>

        <div className="mb-96">
          <h1 className="text-3xl font-bold mb-4">{movie.name}</h1>
          <p className="text-base">{movie.detail}</p>
          <p className="text-lg font-semibold mb-4">Price: Rs {movie.price}</p>

          <Link
            to={`/home/booknow?name=${encodeURIComponent(movie.name)}&price=${movie.price}`}
            className="bg-red-500 text-white py-4 px-11 flex justify-center rounded w-48"
          >
            Book Now
          </Link>

          <button
            onClick={() => window.history.back()}
            className="bg-blue-500 text-white py-4  px-11 w-48  flex justify-center mt-2 fixed rounded"
          >
            Back 
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
