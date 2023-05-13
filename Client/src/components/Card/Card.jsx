import { connect } from "react-redux";
import { addFavorites, deleteFavorites } from "../../redux/actions";
import cardStyles from "./card.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Card(props) {
  const {
    id,
    image,
    name,
    species,
    gender,
    onClose,
    addFavorites,
    deleteFavorites,
    myFavorites,
    showDeleteButton,
  } = props;

  const [isFavorite, setIsFavorite] = useState(false);
  // const [favoriteChar, setFavoriteChar] = useState([]);
 
  // const addFavoritesServer = (character) => {
  //   axios
  //     .post("http://localhost:3001/rickandmorty/fav", character)
  //     .then((res) => setFavoriteChar(res.data));
  // };

  const handleFavorite = () => {
    if (isFavorite) {
      setIsFavorite(false);
      deleteFavorites(id);
    } else {
      setIsFavorite(true);
      addFavorites({
        id,
        image,
        name,
        species,
        gender,
        showDeleteButton: false,
      });
    }
  };

  useEffect(() => {
    myFavorites.forEach((favorite) => {
      if (favorite.id === id) {
        setIsFavorite(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={cardStyles.cardContainer}>
      {isFavorite ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}

      <img src={image} alt={props.name} />
      <h2>
        <Link className={cardStyles["cardContainer-name"]} to={`/detail/${id}`}>
          {" "}
          Name: {name}
        </Link>
      </h2>
      <h2>Specie: {species}</h2>
      <h2>Gender: {gender}</h2>
      {showDeleteButton && <button onClick={() => onClose(id)}>X</button>}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorites: (character) => dispatch(addFavorites(character)),
    deleteFavorites: (id) => dispatch(deleteFavorites(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
