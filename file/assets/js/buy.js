$(document).ready(function () {
  // CoinGecko API endpoint for getting BTC price in USD
  const apiURL =
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";

  // Fetch BTC price on page load
  $.get(apiURL, function (data) {
    const btcRate = data.bitcoin.usd;
    $("#btc-price").text(`${btcRate} USD/BTC`);

    // Listen for user input in the "Pay" field
    $("#usd-input").on("input", function () {
      const usdAmount = $(this).val(); // Get the input value

      if (usdAmount) {
        // Calculate the BTC equivalent
        const btcAmount = usdAmount / btcRate;
        $("#btc-output").val(btcAmount.toFixed(8)); // Set value in "Receive" field
      } else {
        // Clear the "Receive" field if input is empty
        $("#btc-output").val("");
      }
    });
  }).fail(function () {
    $("#btc-price").text("Error fetching price");
  });
});

// Conformation section API

$(document).ready(function () {
  // CoinGecko API endpoint for getting BTC price in USD
  const apiURL =
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";

  // Fetch BTC price on page load
  $.get(apiURL, function (data) {
    const btcRate = data.bitcoin.usd;
    $("#btc-price").text(`${btcRate} USD/BTC`);

    // Listen for user input in the "Pay" field
    $("#usd-input").on("input", function () {
      const usdAmount = $(this).val(); // Get the input value

      if (usdAmount) {
        // Calculate the BTC equivalent
        const btcAmount = usdAmount / btcRate;

        // Update "Receive" field and confirmation step
        $("#btc-output").val(btcAmount.toFixed(8)); // Set value in "Receive" field
        $("#btc-confirm").text(btcAmount.toFixed(8)); // Set value in confirmation section
        $("#usd-confirm").text(`${usdAmount} USD`); // Set USD value in confirmation section
        $("#btc-get").text(btcAmount.toFixed(8) + " BTC"); // Update "Get" section
      } else {
        // Clear the "Receive" and confirmation fields if input is empty
        $("#btc-output").val("");
        $("#btc-confirm").text("0");
        $("#usd-confirm").text("0 USD");
        $("#btc-get").text("0 BTC");
      }
    });
  }).fail(function () {
    $("#btc-price").text("Error fetching price");
  });
});
