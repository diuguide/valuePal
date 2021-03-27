const express = require("express");
const router = express.Router();
const pool = require("../../database");

router.post("/user", async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = await pool.query(
      `INSERT INTO users (username, password) VALUES($1, $2)`,
      [username, password]
    );
    res.json(req.body);
  } catch (error) {
    console.error(err.message);
  }
});

module.exports = router;
