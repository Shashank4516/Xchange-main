var btc = document.getElementById("bitcoin");
var ltc = document.getElementById("litecoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var liveprice = {
  async: true,
  scroosDomain: true,
  url: "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin&vs_currencies=usd",

  method: "GET",
  headers: {},
};

$.ajax(liveprice).done(function (response) {
  btc.innerHTML = response.bitcoin.usd;
  doge.innerHTML = response.dogecoin.usd;
  eth.innerHTML = response.ethereum.usd;
  btc.innerHTML = response.bitcoin.usd;
  ltc.innerHTML = response.litecoin.usd;

  //   ltc.innerHTML = response.litecoin.usd;
  //   eth.innerHTML = response.ethereum.usd;
  //   doge.innerHTML = response.dogecoin.usd;
});

// Fetch data from CoinGecko API
const fetchCryptoData = async () => {
  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,binancecoin,tether,solana,usd-coin"
    );
    const data = await response.json();
    updateTable(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Update the table with API data
const updateTable = (data) => {
  data.forEach((coin, index) => {
    document.querySelector(`#coin-name-${index + 1}`).innerText = `${
      coin.name
    } (${coin.symbol.toUpperCase()})`;
    document.querySelector(
      `#coin-price-${index + 1}`
    ).innerText = `$${coin.current_price}`;
    document.querySelector(
      `#coin-change-${index + 1}`
    ).innerText = `${coin.price_change_percentage_24h.toFixed(2)}%`;
    document
      .querySelector(`#coin-change-${index + 1}`)
      .classList.add(coin.price_change_percentage_24h >= 0 ? "up" : "down");
  });
};

// Call the function to load data when the page loads
window.onload = fetchCryptoData;
