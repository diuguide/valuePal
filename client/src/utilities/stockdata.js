const axios = require("axios");

const apiKey = "";

const getData = (symbol) => {
  const query = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=compact&apikey=${apiKey}`;
  axios
    .get(query)
    .then((response) => {
      let data = response.data["Time Series (Daily)"];
      let keys = Object.keys(data);
      let values = Object.values(data);
      let openArray = [];
      let dateArray = [];
      for (let i = 0; i < keys.length; i++) {
        dateArray.push(keys[i]);
      }
      for (i = 0; i < values.length; i++) {
        openArray.push(values[i]["1. open"]);
      }
      console.log("Open Array: ", openArray.reverse()[99]);
      console.log("Date Array: ", dateArray.reverse());
    })
    .catch((err) => console.log(err));
};

getData("GME");
