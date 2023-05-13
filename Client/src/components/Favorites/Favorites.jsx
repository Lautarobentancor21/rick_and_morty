// import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import stylesFavorites from "./Favorites.module.css";
import { filterCards, orderCards } from "../../redux/actions";

const Favorites = () => {
  // const [aux, setAux] = useState(false);
  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const handleOrderInput = (event) => {
    dispatch(orderCards(event.target.value));
    // setAux(true);
  };

  const handleGenderInput = (event) => {
    dispatch(filterCards(event.target.value));
  };

  // useEffect(() => {
  //   axios.get("http://localhost:3001/rickandmorty/fav")
  //   .then((res) => {dispatch(addFavorites(res.data))})
  // }, [])

  return (
    <>
      <div className={stylesFavorites["favoritesContainer-select"]}>
        <select onChange={handleOrderInput}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handleGenderInput}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
          <option value="allCharacters">Todos</option>
        </select>
      </div>
      <div className={stylesFavorites.favoritesContainer}>
        {favorites.map(({ id, image, name, species, gender }) => {
          return (
            <Card
              id={id}
              key={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
            />
          );
        })}
      </div>
    </>
  );
};

export default Favorites;
