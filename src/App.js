
import './App.css';
import Footer from './components/Footer';
import MovieRow from './components/MovieRow';
import requests from './requests';
import Nav from './components/Nav'
import Carousal from './components/Carousal';
import { useState } from 'react';
function App() {
  
  return (
    <div className='main'>
    <Nav/>
    <Carousal  fetchUrl={requests.fetchNetflixOriginals} />
    <MovieRow title="Netflix Originals" isPoster={true} fetchUrl={requests.fetchNetflixOriginals} />
    <MovieRow title="Trending" fetchUrl={requests.fetchTrending} />
    <MovieRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
    <MovieRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
    <MovieRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
    <MovieRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
    <MovieRow title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
    <MovieRow title="documentaries" fetchUrl={requests.fetchDocumentaries} />
    <Footer/>
    </div>
  );
}

export default App;
