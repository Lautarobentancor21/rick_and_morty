const { User } = require("../DB_connection");

const login = (req, res) => {
  const { email, password } = req.query;
  if (email === null || password === null) {
    res.status(400).json({ message: "Faltan datos" });
  }
  User.findOne({ where: { email } })
    .then((user) => {
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }

      if (user.password !== password) {
        return res.status(403).json({ message: "Password incorrect" });
      }

      res.json({ access: true });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

module.exports = login;
