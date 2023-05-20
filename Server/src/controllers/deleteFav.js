const { Favorite } = require("../DB_connection");

const deleteFav = (req, res) => {
  const { id } = req.params;
  Favorite.destroy({
    where: { id },
  })
    .then(() => Favorite.findAll())
    .then((favorites) => {
      res.json(favorites);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

module.exports = deleteFav;
