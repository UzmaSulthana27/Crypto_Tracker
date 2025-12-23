let tokens = [
  { symbol: "BTC", price: 43000, volume: 1200 },
  { symbol: "ETH", price: 2300, volume: 3000 },
  { symbol: "SOL", price: 95, volume: 800 },
];

function updatePrices() {
  tokens = tokens.map((token) => {
    const change = Math.floor(Math.random() * 200 - 100);
    return {
      ...token,
      price: Math.max(1, token.price + change),
    };
  });

  return tokens;
}

module.exports = { updatePrices };
