const { Router } = require("express");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");
const { postFav, deleteFav } = require("../controllers/handleFavorites");
const login = require("../controllers/login");
let myFavorites = require("../utils/favs");

const router = Router();

router.get("/character/:id", getCharById);
router.get("/detail/:id", getCharDetail);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);
router.get("/login", (req, res) => {
  login(req, res);
});

router.get("/fav", (req, res) => {
  res.status(200).json(myFavorites);
});

module.exports = router;
