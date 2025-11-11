import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieGrid from "./components/MovieGrid";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/movies/trending`)
      .then(res => setMovies(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      <header className="p-6 text-3xl font-bold text-red-600">MyFlix</header>
      <MovieGrid movies={movies} />
    </div>
  );
}

export default App;
