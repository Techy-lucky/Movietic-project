import React from "react";
import data from "../data";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="flex justify-center tracking-tighter">
        <h1 className="text-4xl">Homepage</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-5">
        {data.map((movie, index) => (
          <div
            key={index}
            className="container w-1/5 p-4 border-2 border-black rounded-lg"
          >
            <div className=" w-full h-48 rounded-md overflow-hidden">
              <img
                className="w-full h-full object-cover object-top"
                src={movie.image}
                alt={movie.name}
              />
            </div>
            <h2 className=" text-center text-black mt-2 text-xl">
              {movie.name}
            </h2>
            <div className="flex justify-center text-center gap-3 mt-2">
              <Link
                to={`/home/booknow?name=${encodeURIComponent(
                  movie.name
                )}&price=${movie.price}`}
                className="bg-red-500 text-white p-4 w-36 rounded"
              >
                Book Now
              </Link>

              <Link
                to={`/home/detail?name=${encodeURIComponent(movie.name)}`}
                className="bg-blue-500  text-white w-36 p-4 rounded"
              >
                Show Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
