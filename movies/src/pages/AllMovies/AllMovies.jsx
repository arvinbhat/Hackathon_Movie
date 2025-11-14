import React from "react";

function AllMovies() {
  const arr = [
    {
      title: "Avatar",
      release_date: "2009-02-21",
      action: "Review this Movie",
    },
    {
      title: "Titanic",
      release_date: "1997-08-09",
      action: "Review this Movie",
    },
    {
      title: "The Dark Knight",
      release_date: "2008-12-16",
      action: "Review this Movie",
    },
  ];
  return (
    <div class="card">
      {arr.map((e) => {
        return (
          <div class="card-body">
            <h5 class="card-title">{e.title}</h5>
            <p class="card-text">Release Date: {e.release_date}</p>
            <a href="#" class="btn btn-primary">
              {e.action}
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default AllMovies;
