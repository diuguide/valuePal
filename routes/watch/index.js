const express = require("express");
const router = express.Router();
const pool = require("../../database");

router.post("/add", (req, res) => {
  pool
    .query(
      `INSERT INTO watchlist (symbol, name, last, change) VALUES($1, $2, $3, $4)`,
      [symbol, nameCo, lastPrice, changePer]
    )
    .then((data) => {
      res.json({
        code: 200,
        msg: "Username added to database",
      });
    })
    .catch((err) => console.log(err));
});

modules.exports = router;
