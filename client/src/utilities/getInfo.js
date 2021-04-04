const axios = require("axios");

const apikey = "";

const getInfo = async (symbol) => {
  let stockInfo = {
    name: "",
    tradedOn: "",
    marketCap: 0,
    ytd: {
      high: 0,
      low: 0,
    },
    bookValue: 0,
    eps: 0,
    psRatio: 0,
    pbrRatio: 0,
    beta: 0,
  };

  const query = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${apikey}`;

  await axios
    .get(query)
    .then((res) => {
      stockInfo = {
        name: res.data.Name,
        tradedOn: res.data.Exchange,
        marketCap: res.data.MarketCapitalization,
        ytd: {
          high: res.data["52WeekHigh"],
          low: res.data["52WeekLow"],
        },
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

// getInfo("tsla").then((res) => console.log(res));

const getQoute = async (symbol) => {
  let quoteInfo = {
    price: 0,
    volume: 0,
    date: "",
    change: 0,
    changePer: 0,
  };
  const query = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${apikey}`;

  await axios.get(query).then((res) => {
    quoteInfo = {
      price: res.data["Global Quote"]["05. price"],
      volume: res.data["Global Quote"]["06. volume"],
      date: res.data["Global Quote"]["07. latest trading day"],
      change: res.data["Global Quote"]["09. change"],
      changePer: res.data["Global Quote"]["10. change percent"],
    };
  });
  return quoteInfo;
};

getQoute("GME").then((res) => console.log(res));
