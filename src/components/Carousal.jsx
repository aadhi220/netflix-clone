import React from "react";
import "./Carousal.css";
import tmdbAxiosInstance from "../tmdbAxiosInstance";
import { useEffect, useState } from "react";
export default function Carousal({ fetchUrl }) {
  const [movie, setMovie] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const fetchData = async () => {
    const { data } = await tmdbAxiosInstance.get(fetchUrl);
    setMovie(data.results[Math.floor(Math.random() * data.results.length)]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refreshInterval = 10000; // 10 seconds in milliseconds

  const refreshDataPeriodically = () => {
    setInterval(() => {
      fetchData();
    }, refreshInterval);
  };

  // Start the periodic refresh
  refreshDataPeriodically();

  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${baseUrl}/${movie?.backdrop_path})` }}
    >
      <div className="banner-content">
        <h1>{movie?.name}</h1>
        <span>{movie?.overview?.slice(0, 280)}...</span>
      </div>
    </div>
  );
}
