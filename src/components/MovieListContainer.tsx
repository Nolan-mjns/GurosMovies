import { useEffect } from "react";
import MovieCard from "./MovieCard";
import { useState } from "react";
import { Movie, MovieWithModal, Genre } from "../models/Movies";

type MovieListContainerProps = {
  setModalInfo: (info: MovieWithModal | null) => void;
};

const MovieListContainer: React.FC<MovieListContainerProps> = ({
  setModalInfo,
}) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const apiKey = import.meta.env.VITE_MOVIE_DB_TOKEN;
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  //OBTAIN GENRES
  async function Genres() {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    };

    try {
      const response = await fetch(
        `${baseUrl}/genre/movie/list?language=es-ES`,
        options
      );
      const data = await response.json();
      setGenres(data.genres);
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  }

  //OBTAIN MOVIES
  async function Movies(page: number) {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    };

    try {
      const response = await fetch(
        `${baseUrl}/discover/movie?include_adult=false&include_video=false&language=es-ES&page=${page}&sort_by=popularity.desc`,
        options
      );
      const data = await response.json();

      const startIndex = (page - 1) * 5;
      const endIndex = startIndex + 5;
      const slicedResults = data.results.slice(startIndex, endIndex);

      const mappedMovies = slicedResults.map((movie: any) => ({
        id: movie.id.toString(),
        name: movie.original_title,
        about: movie.overview,
        rating: movie.vote_average.toFixed(1),
        cover: movie.poster_path,
        genres: movie.genre_ids.map(
          (genreId: number) =>
            genres.find((genre: Genre) => genre.id === genreId)?.name
        ),
      })) as Movie[];

      setMovies(mappedMovies);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  }

  useEffect(() => {
    Genres();
    if (genres.length > 0) {
      Movies(currentPage);
    }
  }, [genres]);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
      {movies.length > 0 ? (
        <>
          {movies.map((item) => (
            <MovieCard key={item.id} movie={item} setModalInfo={setModalInfo} />
          ))}

          <section className="flex gap-4 mb-10 justify-end">
            <button
              className={`${
                currentPage === 1 ? "navigationDisabled" : "navigationEnabled"
              }  `}
              onClick={prevPage}
              disabled={currentPage === 1}
            >
              Anterior
            </button>
            <button
              className={`${
                currentPage === totalPages
                  ? "navigationDisabled"
                  : "navigationEnabled"
              }  `}
              onClick={nextPage}
              disabled={currentPage === totalPages}
            >
              Siguiente
            </button>
          </section>
        </>
      ) : (
        <p>No se han encontrado películas</p>
      )}
    </>
  );
};

export default MovieListContainer;
