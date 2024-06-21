import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function RatedPopup() {
  return (
    <section className="z-50 bg-gurosGray px-8 py-4 border-b-4 border-gurosGray border-b-gurosGreen absolute top-4 right-4 flex w-96 gap-4 justify-around items-center animate-fade">
      <FontAwesomeIcon className="text-gurosGreen" icon={faCircleCheck} />

      <p className="text-white">Tu calificación se registró correctamente</p>
    </section>
  );
}
