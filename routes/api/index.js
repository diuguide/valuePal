const express = require("express");
const router = express.Router();
const pool = require("../../database");

//Create New user
router.post("/add", async (req, res) => {
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
    res.json(allUsers.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//Get user by username
router.get("/user/:username", async (req, res) => {
  try {
    const user = await pool.query(
      `SELECT * FROM users WHERE username='${req.params.username}'`
    );
    console.log(user);
    if (user.rows[0].username === req.params.username) {
      console.log("user validated");
      res.json({
        msg: "User is validated",
        code: 200,
        username: user.rows[0].username,
      });
    }
  } catch (error) {
    console.error(error.message);
    res.json({
      code: 400,
      msg: "Sorry, that user does not exsist. Please create an account",
    });
  }
});

//update username password
router.put("/changePass/:username", async (req, res) => {
  try {
    console.log(req.body.password, req.params.username);
    const changePass = await pool.query(
      `UPDATE users SET password=$1 WHERE username=$2`,
      [req.body.password, req.params.username]
    );

    res.json(changePass);
  } catch (error) {
    console.error(error.messages);
  }
});

//Delete user
router.delete("/delete/:id", async (req, res) => {
  try {
    const deletedUser = await pool.query(
      `DELETE FROM users WHERE user_id=${req.params.id}`
    );
    res.json(deletedUser);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
