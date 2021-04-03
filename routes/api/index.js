const express = require("express");
const router = express.Router();
const pool = require("../../database");
const bcrypt = require("bcrypt");

//Create New user
router.post("/add", async (req, res) => {
  const { username, password } = req.body;
  try {
    await pool.query(`SELECT username FROM users`).then((data) => {
      const response = data.rows;
      let userArray = [];
      let newPassword;
      bcrypt.genSalt(5, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
          if (err) throw err;
          newPassword = hash;
          response.forEach((keys) => {
            userArray.push(keys.username);
          });
          if (userArray.includes(username)) {
            res.json({
              code: 300,
              msg: "Username is taken",
            });
          } else {
            pool
              .query(`INSERT INTO users (username, password) VALUES($1, $2)`, [
                username,
                newPassword,
              ])
              .then((data) => {
                res.json({
                  code: 200,
                  msg: "Username added to database",
                });
              })
              .catch((err) => console.log(err));
          }
        });
      });
    });
  } catch (error) {
    console.error(error.message);
  }
});

//Get user by username
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  let validatePass = false;
  try {
    const user = await pool.query(
      `SELECT * FROM users WHERE username='${username}'`
    );
    console.log(user);
    bcrypt.compare(password, user.rows[0].password).then((isMatch) => {
      if (!isMatch) return res.json({ code: 400, msg: "Incorrect Password" });
      validatePass = true;
      if (user.rows[0].username === username && validatePass) {
        res.json({
          msg: "User is validated",
          code: 200,
          username: user.rows[0].username,
        });
      } else {
        res.json({
          code: 400,
        });
      }
    });
  } catch (error) {
    console.error(error.message);
    res.json({ code: 400 });
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
