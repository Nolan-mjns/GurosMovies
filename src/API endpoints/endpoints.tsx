import { useState } from "react";

const apiKey = import.meta.env.VITE_MOVIE_DB_TOKEN;
const baseUrl = "https://api.themoviedb.org/3/";

function Auth() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

  fetch("https://api.themoviedb.org/3/authentication", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}

async function Movies() {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  };

  await fetch(
    `${baseUrl}discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      const TopMovies = response.results.slice(0, 5);
      console.log("Movies ", TopMovies);
    })
    .catch((err) => console.error(err));
}

export default { Auth, Movies };
