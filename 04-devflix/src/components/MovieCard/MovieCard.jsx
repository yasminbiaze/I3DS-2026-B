<<<<<<< HEAD
import { useState } from "react";
import styles from "./MovieCard.module.css";
import MovieDescription from "../MovieDescription/MovieDescription";

const MovieCard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  // console.log(isModalOpen);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className={styles.movie} onClick={toggleModal}>
=======
import styles from "./MovieCard.module.css";

const MovieCard = (props) => {
  return (
    <>
      <div className={styles.movie}>
>>>>>>> 4e356f030f26758953c129d8f30f521affa68e0d
        <div>
          <p>{props.Year}</p>
        </div>

        <div>
          <img src={props.Poster} alt={props.Title} />
        </div>

        <div>
          <span>{props.Type}</span>
          <h3>{props.Title}</h3>
        </div>
      </div>
<<<<<<< HEAD

      {isModalOpen && (
        <MovieDescription
          apiUrl={props.apiUrl}
          movieID={props.imdbID}
          click={toggleModal}
        />
      )}
=======
>>>>>>> 4e356f030f26758953c129d8f30f521affa68e0d
    </>
  );
};

export default MovieCard;
