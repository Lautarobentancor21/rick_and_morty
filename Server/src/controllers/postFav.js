const { Favorite } = require("../DB_connection");

const postFav = (req, res) => {
  const { name, image, species, gender, id } = req.body;
  if (!name || !image || !species || !gender || !id) {
    return res.status(401).json({ message: "Faltan datos" });
  }

  Favorite.findOrCreate({
    where: { id },
    defaults: { image, species, gender, name },
  })
    .then(() => {
      Favorite.findAll()
        .then((favorites) => {
          return res.json(favorites);
        })
        .catch((error) => {
          res.status(500).json({ message: error?.message });
        });
    })
    .catch((error) => {
      res.status(500).json({ message: error?.message });
    });
};

module.exports = postFav;
