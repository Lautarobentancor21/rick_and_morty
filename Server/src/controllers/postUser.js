const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (email === null || password === null) {
      res.status(400).send('Faltan datos')
    }
    const user = await User?.findOrCreate({
      where: { email, password },
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postUser;


