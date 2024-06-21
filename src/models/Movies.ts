export type Movie = {
  id: number;
  name: string;
  about: string;
  rating: number;
  cover: string;
  genres: string[];
};

export type showModal = {
  display: boolean;
};

export type MovieWithModal = {
  modal: {
    show: boolean;
  };
  movie: Movie;
};

export type Genre = {
  id: number;
  name: string;
};

export type StarRatingProps = {
  rating: number;
  onRatingChange: (rating: number) => void;
};
