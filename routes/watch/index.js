const express = require("express");
const router = express.Router();
const pool = require("../../database");

router.post("/add", (req, res) => {
    const { symbol, nameCo, lastPrice, changePer, username } = req.body;
    console.log(req.body);
  pool
    .query(
      `INSERT INTO watchlist (symbol, name, last, change, username) VALUES($1, $2, $3, $4, $5)`,
      [symbol, nameCo, lastPrice, changePer, username]
    )
    .then((data) => {
      res.json({
        code: 200,
        msg: "Stock added to database",
      });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
