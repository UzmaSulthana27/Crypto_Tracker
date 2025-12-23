const WebSocket = require("ws");
const { updatePrices } = require("./mockData");

const PORT = 8080;

const wss = new WebSocket.Server({ port: PORT });

console.log(`WebSocket server running on ws://localhost:${PORT}`);

wss.on("connection", (ws) => {
  console.log("Client connected");

  // Send data every 2 seconds
  const interval = setInterval(() => {
    const data = updatePrices();
    ws.send(JSON.stringify(data));
  }, 2000);

  ws.on("close", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});
