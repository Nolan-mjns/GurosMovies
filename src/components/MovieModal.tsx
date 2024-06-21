import { useEffect, useState } from "react";
import { MovieWithModal } from "../models/Movies";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StarRating from "./Rating";
import RatedPopup from "./RatedPopup";

type MovieModalProps = {
  infoModal: MovieWithModal;
  setModalInfo: (info: MovieWithModal | null) => void;
};

export default function MovieModal({
  infoModal,
  setModalInfo,
}: MovieModalProps) {
  const [rating, setRating] = useState<number>(0);
  const [rated, setRated] = useState<boolean>(false);
  useEffect(() => {
    console.log("infoModal ", infoModal);
  }, [infoModal]);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <>
      {rated === true ? <RatedPopup /> : null}
      <div className="w-full fixed inset-x-0 bottom-0 left-0 right-0 shadowModal bg-white">
        <section>
          <div className="flex gap-5 justify-stretch">
            <section className="relative object-cover modalImagen ">
              <img className="w-full h-full" src={infoModal.movie.cover} />
              <button
                onClick={() =>
                  setModalInfo({ ...infoModal, modal: { show: false } })
                }
                className="rounded-lg border-white w-8 h-8 border absolute top-4 left-4"
              >
                <FontAwesomeIcon icon={faXmark} className="text-white" />
              </button>
              <div className="flex items-center absolute bottom-2 right-1.5  text-white">
                <h1 className="ratingM">{infoModal.movie.rating.toString()}</h1>
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-gurosPink ml-1"
                />
              </div>
            </section>

            <section className="p-4 w-4/6 relative">
              <div>
                <h2>{infoModal.movie.name}</h2>
                <p className="idMovie">{infoModal.movie.id.toString()}</p>
                <h3 className="pt-4 pb-2">¿De qué trata?</h3>
                <p>
                  {infoModal.movie.about
                    ? infoModal.movie.about
                    : "Sin descripción..."}
                </p>

                <ul className="flex gap-2 justify-end">
                  {infoModal.movie.genres.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </div>
              <StarRating
                rating={rating}
                onRatingChange={handleRatingChange}
                setRated={setRated}
              />
            </section>
          </div>
        </section>
      </div>
    </>
  );
}
