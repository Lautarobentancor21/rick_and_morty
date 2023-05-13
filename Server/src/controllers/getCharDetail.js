const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharDetail = (req, res) => {
  const { id } = req.params;
  axios
    .get(`${URL}/${id}`)
    .then((response) => {
      const { id, status, name, species, origin, image, gender } =
        response.data;
      res
        .status(200)
        .json({ id, status, name, species, origin, image, gender });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

module.exports = getCharDetail;
