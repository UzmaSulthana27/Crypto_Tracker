# 📊 Crypto Tracker – Real-Time Token Trading Dashboard

Crypto Tracker is a frontend-focused web application that displays **real-time cryptocurrency token prices** using **WebSocket communication**.  
The project demonstrates real-time data handling, clean UI design, and structured frontend architecture.

---
## 🚀 Live Demo
🔗 https://crypto-tracker-trading.vercel.app/

🔗 https://drive.google.com/file/d/1buD6Db8HUX3uGA2-_Jwp2QvCI8T-qR8G/view?usp=sharing

## 🧠 Project Explanation 

This project was built as a **frontend assignment** to showcase the ability to:
- Consume real-time data
- Design a clean and responsive UI
- Structure a React application properly
- Explain technical decisions clearly

The application simulates a live crypto market feed and updates token prices continuously.

---

## ⚙️ How the Project Works

1. A **mock WebSocket server** runs in the backend and emits updated token prices every 2 seconds.
2. The frontend establishes a **WebSocket connection** when the application loads.
3. Incoming data is received in real time and stored in React state.
4. The UI automatically re-renders to reflect:
   - Updated prices
   - Price movement direction (up/down arrows)
5. The interface remains responsive across mobile, tablet, and desktop screens.

---

## ✨ Features

- 🔄 Real-time token price updates using WebSocket
- 📈 Visual indicators for price increase and decrease
- 📱 Responsive UI (mobile-first approach)
- 🧩 Component-based React architecture
- 🎨 Clean and professional UI using Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- JavaScript (ES6)
- Tailwind CSS

### Backend (Mock Server)
- Node.js
- WebSocket (`ws`)

---

## 📁 Project Structure

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

## ▶️ Running the Project Locally

### Start Backend (WebSocket Server)
```bash
cd backend
npm install
node server.js

### 🎨 Design Decisions

- WebSocket was chosen over polling to efficiently handle real-time price updates with low latency and reduced network overhead
- Mock data is used to simulate a live trading environment without relying on external APIs
- The UI follows a clarity-first approach, prioritizing readability over heavy visuals or complex charts
- Responsive design ensures the application works smoothly across mobile, tablet, and desktop screen sizes


### 🚧 Future Improvements

- Integration with real cryptocurrency exchange APIs for live market data
- Sorting and filtering options to improve data exploration
- Historical price charts for better market analysis
- User authentication for personalized dashboards
- Dark / light theme toggle to improve accessibility and user experience

