import React, { useEffect, useState } from "react";
import axios from "axios";

function AllMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:4000/movies");

        if (response.data.error) {
          throw new Error(response.data.error);
        }

        setMovies(response.data.data);
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="card-group">
      {movies.map((e) => {
        return (
          <div className="card" key={e.movie_id || e.movie_title}>
            <div className="card-body">
              <h5 className="card-title">{e.movie_title}</h5>
              <p className="card-text">Release Date: 16/12/2012</p>
              <a href="#" className="btn btn-primary">
                {e.action ? e.action : "Review this Movie"}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllMovies;
