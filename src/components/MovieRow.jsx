import React, { useEffect, useState } from "react";
import tmdbAxiosInstance from "../tmdbAxiosInstance";
import "./movieRow.css";

export default function MovieRow({ title, fetchUrl, isPoster }) {
  const [allMovies, setAllMoives] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const fetchData = async () => {
    const { data } = await tmdbAxiosInstance.get(fetchUrl);
    setAllMoives(data.results);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2 className="row-head">{title}</h2>
      <div className="rowContainer">
        <div className="rowscroll">
          {allMovies.map((items) => (
            <img
              className={`${isPoster && "movie_large"} cardimg`}
              src={`${baseUrl}/${
                isPoster ? items.poster_path : items.backdrop_path
              }`}
              alt=""
            />
          ))}
        </div>
      </div>
    </>
  );
}
