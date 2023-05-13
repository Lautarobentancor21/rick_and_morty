let myFavorites = require("../utils/favs");

const postFav = (req, res) => {
  try {
    const character = req.body;
    const characterFound = myFavorites.find((fav) => fav.id === character.id);
    if (characterFound) throw new Error("El personaje ya existe en favoritos");
    myFavorites.push(character);
    return res.status(200).json(myFavorites);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  myFavorites = myFavorites.filter((charFav) => charFav.id !== Number(id));
  return res.status(200).json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};
