import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Movie } from "../models/Movies";

type MovieCardProps = {
  movie: Movie;
  setModalInfo: (info: any) => void;
};

const MovieCard: React.FC<MovieCardProps> = ({ movie, setModalInfo }) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  const openModal = () => {
    setModalInfo({
      modal: {
        show: true,
      },
      movie: {
        id: movie.id,
        name: movie.name,
        about: movie.about,
        rating: movie.rating,
        cover: imageBaseUrl + movie.cover,
        genres: movie.genres,
      },
    });
  };

  return (
    <section
      className="shadow-xl rounded-xl relative my-10 hover:cursor-pointer"
      onClick={openModal}
    >
      <div className="flex justify-between">
        <section className="p-4 w-3/4">
          <h2>{movie.name}</h2>
          <p className="idMovie">{movie.id.toString()}</p>
          <h3 className="pt-4 pb-2">¿De qué trata?</h3>
          <p>{movie.about.substring(0, 200) + "..."}</p>

          <section className="flex justify-between mt-20">
            <ul className="flex gap-2">
              {movie.genres.map((item) => (
                <li>{item}</li>
              ))}
            </ul>

            <div className="flex items-center">
              <h1>{movie.rating.toString()}</h1>
              <FontAwesomeIcon icon={faStar} className="text-gurosPink ml-1" />
            </div>
          </section>
        </section>

        <section className="movie-image-container object-fill w-1/4">
          <img
            className="movie-image object-fill"
            src={imageBaseUrl + movie.cover}
            alt={movie.name}
          />
        </section>
      </div>
    </section>
  );
};

export default MovieCard;
