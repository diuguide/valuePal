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

router.post("/getList", async (req, res) => {
  const { username } = req.body;
  let dataArray = [];
  try {
    await pool.query("SELECT * FROM watchlist").then(res => {
      let response = res.rows;
      for (let i = 0; i < response.length; i++) {
        if (response[i].username == username) {
          dataArray.push(response[i]);
        };
      };
    });
    res.json(dataArray);
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;
