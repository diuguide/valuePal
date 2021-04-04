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
      for (let i = 0; i < lengthOfTime; i++) {
        dataSet.values.push(values1[i]["1. open"]);
      }
      dataSet.values = dataSet.values.reverse();
      dataSet.dates = dataSet.dates.reverse();
    })
    .catch((err) => console.log(err));
  return dataSet;
};

export const getInfo = async (symbol) => {
  let stockInfo = {
    name: "",
    tradedOn: "",
    marketCap: 0,
    ytd: {
      high: 0,
      low: 0,
    },
    outstanding: 0,
    bookValue: 0,
    eps: 0,
    psRatio: 0,
    pbrRatio: 0,
    beta: 0,
  };

  const query = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${apiKey}`;

  await axios
    .get(query)
    .then((res) => {
      stockInfo = {
        name: res.data.Name,
        tradedOn: res.data.Exchange,
        marketCap: new Intl.NumberFormat().format(res.data.MarketCapitalization),
        ytd: {
          high: res.data["52WeekHigh"],
          low: res.data["52WeekLow"],
        },
        outstanding: new Intl.NumberFormat().format(res.data.SharesOutstanding),
        bookValue: res.data.BookValue,
        eps: res.data.BookValue,
        psRatio: res.data.PriceToSalesRatioTTM,
        pbRatio: res.data.PriceToBookRatio,
        beta: res.data.Beta,
      };
    })
    .catch((err) => console.log(err));
  return stockInfo;
};

export const getQuote = async (symbol) => {
  let quoteInfo = {
    price: 0,
    open: 0,
    volume: 0,
    date: "",
    change: 0,
    changePer: 0,
  };
  const query = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apiKey}`;

  await axios.get(query).then((res) => {
    quoteInfo = {
      price: res.data["Global Quote"]["05. price"],
      open: res.data["Global Quote"]["02. open"],
      volume: res.data["Global Quote"]["06. volume"],
      date: res.data["Global Quote"]["07. latest trading day"],
      change: res.data["Global Quote"]["09. change"],
      changePer: res.data["Global Quote"]["10. change percent"],
    };
  });
  return quoteInfo;
};
