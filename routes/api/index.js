const express = require("express");
const router = express.Router();
const pool = require("../../database");

//Create New user
router.post("/user", async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = await pool.query(
      `INSERT INTO users (username, password) VALUES($1, $2)`,
      [username, password]
    );
    res.json(newUser);
  } catch (err) {
    console.error(err.message);
  }
});

//Get all users
router.get("/", async (req, res) => {
  try {
    const allUsers = await pool.query(`SELECT * FROM users`);
    res.json(allUsers);
  } catch (err) {
    console.error(err.message);
  }
});

//Get user by username
router.get('/:username', async (req, res) => {
    try {
        const user = await pool.query(`SELECT * FROM users WHERE username=${req.params.username}`);
        res.json(user);
    } catch (error) {
        console.error(error.message);
    }
});

//Delete user
router.delete("/delete/:id", async (req, res) => {
    try {
        const deletedUser = await pool.query(`DELETE FROM users WHERE user_id=${req.params.id}`)
        res.json(deletedUser);
    } catch (err) {
        console.error(err.message)
    }
});

module.exports = router;
