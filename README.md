# 📊 Crypto Tracker – Real-Time Token Trading Dashboard

A modern, responsive **frontend dashboard** that displays **real-time token prices** using **WebSockets**.  
Built as a frontend assignment to demonstrate UI design, real-time data handling, and clean React architecture.

---

## 🚀 Features

- 🔄 **Real-time price updates** using WebSocket
- 📈 **Live market indicator**
- 🔼🔽 **Price movement indicators** (up/down)
- 📱 **Fully responsive UI** (mobile & desktop)
- 🎨 **Clean, fintech-style design**
- ⚡ Fast and lightweight (React + Vite)

---

## 🛠 Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS
- JavaScript (ES6+)

**Backend (Mock Server)**
- Node.js
- WebSocket (`ws`)

---

## 🧠 Project Architecture

token-trading-table/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── TradingTable.jsx
│   │   │   ├── TokenRow.jsx
│   │   │   └── TokenCard.jsx
│   │   │
│   │   ├── hooks/
│   │   │   └── useWebSocket.js
│   │   │
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── index.css
│
├── backend/
│   ├── server.js
│   └── mockData.js
│
└── README.md
