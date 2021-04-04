import axios from "axios";

const apiKey = process.env.REACT_APP_ALPHA_API;

export const getDaily = async (symbol, lengthOfTime) => {
  let dataSet = {
    values: [],
    dates: [],
  };

  const query = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=compact&apikey=${apiKey}`;

  await axios
    .get(query)
    .then((response) => {
      let data = response.data["Time Series (Daily)"];
      let keys1 = Object.keys(data);
      let values1 = Object.values(data);

      for (let i = 0; i < lengthOfTime; i++) {
        dataSet.dates.push(keys1[i]);
      }
      for (i = 0; i < lengthOfTime; i++) {
        dataSet.values.push(values1[i]["1. open"]);
      }
    })
    .catch((err) => console.log(err));
  return dataSet;
};
