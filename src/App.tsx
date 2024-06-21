import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import MovieListContainer from "./components/MovieListContainer";
import MovieModal from "./components/MovieModal";
import { MovieWithModal } from "./models/Movies";

const App: React.FC = () => {
  const [modalInfo, setModalInfo] = useState<MovieWithModal>({
    modal: {
      show: false,
    },
    movie: {
      id: 0,
      name: "",
      about: "",
      rating: 0,
      cover: "",
      genres: {},
    },
  });

  return (
    <>
      <Header />
      <Intro />
      <MovieListContainer setModalInfo={setModalInfo} />

      {modalInfo.modal.show === true ? (
        <MovieModal infoModal={modalInfo} setModalInfo={setModalInfo} />
      ) : null}
    </>
  );
};

export default App;
