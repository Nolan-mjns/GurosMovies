import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

type StarRatingProps = {
  rating: number;
  onRatingChange: (rating: number) => void;
  setRated: boolean;
};

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  onRatingChange,
  setRated,
}) => {
  const [hoverRating, setHoverRating] = useState<number>(0);

  const handleMouseOver = (index: number) => {
    console.log("Mouse over estrella:", index);
    setHoverRating(index);
  };

  const handleMouseOut = () => {
    console.log("Mouse fuera de las estrellas");
    setHoverRating(0);
  };

  const handleClick = (index: number) => {
    console.log("Click en estrella:", index);
    onRatingChange(index);
  };

  const handleRate = () => {
    const btn = document.getElementById("rateBtn");
    btn.style.pointerEvents = "none";
    btn.className =
      "bg-gurosLightGray text-white font-karla text-base p-3 rounded-md w-64 mx-auto mt-4 hover:bg-gurosBlue hover:cursor-pointer transition ease-in-out delay-7";

    setRated(true);
    setTimeout(() => {
      setRated(false);
      btn.style.pointerEvents = "auto";
      btn.className =
        "bg-gurosPink text-white font-karla text-base p-3 rounded-md w-64 mx-auto mt-4 hover:bg-gurosBlue hover:cursor-pointer transition ease-in-out delay-7";
    }, 4000);
  };

  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 bottom-8 text-center">
      <h3 className="mb-5">Cuéntanos ¿te gustó?</h3>
      {[1, 2, 3, 4, 5].map((index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          className={`text-4xl mx-4 cursor-pointer ${
            index <= (hoverRating || rating)
              ? "text-gurosPink"
              : "text-gurosLightGray"
          }`}
          onMouseOver={() => handleMouseOver(index)}
          onMouseOut={handleMouseOut}
          onClick={() => handleClick(index)}
        />
      ))}
      <p
        id="rateBtn"
        onClick={handleRate}
        className="bg-gurosPink text-white font-karla text-base p-3 rounded-md w-64 mx-auto mt-4 hover:bg-gurosBlue hover:cursor-pointer transition ease-in-out delay-75"
      >
        Enviar calificación
      </p>
    </div>
  );
};

export default StarRating;
