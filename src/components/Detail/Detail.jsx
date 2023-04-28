import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import detailStyles from "./Detail.module.css";

const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  const backHome = useNavigate();
  const handleBackToHome = () => {
    backHome("/home");
  };

  return (
    <div>
      <div className={detailStyles.detailButtonContainer}>
        <button
          className={detailStyles['detailButtonContainer-button']}
          onClick={handleBackToHome}
        >
          Back to Home
        </button>
      </div>
      <section className={detailStyles.detailContainer}>
        {character && (
          <article className={detailStyles["detailContainer-target"]}>
            <figure>
              <img src={character.image} alt={character.name} />
            </figure>
            <div className={detailStyles["detailContainer-info"]}>
              <h2>Name: {character.name}</h2>
              <h2>Status: {character.status}</h2>
              <h2>Specie: {character.species}</h2>
              <h2>Gender: {character.gender}</h2>
              <h2>Origin: {character.origin && character.origin.name}</h2>
            </div>
          </article>
        )}
      </section>
    </div>
  );
};

export default Detail;
