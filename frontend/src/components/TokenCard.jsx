import { useRef, useEffect, useState } from "react";

export default function TokenCard({ token }) {
  const prev = useRef(token.price);
  const [direction, setDirection] = useState(null);
  const up = token.price > prev.current;
  const down = token.price < prev.current;

  useEffect(() => {
    if (up) {
      setDirection('up');
    } else if (down) {
      setDirection('down');
    }
    prev.current = token.price;
  }, [token.price, up, down]);

  return (
    <div className={`rounded-xl bg-white border-2 p-5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
      up ? "border-green-400" : down ? "border-red-400" : "border-gray-200"
    }`}>
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-bold text-gray-900">{token.symbol}</h3>
        <div className={`flex items-center gap-1 px-2 py-1 rounded-lg ${
          up ? "bg-green-100 text-green-700" : down ? "bg-red-100 text-red-700" : "bg-gray-100 text-gray-700"
        }`}>
          <span className="text-xs font-semibold">
            {up && "📈 Up"}
            {down && "📉 Down"}
            {!up && !down && "→ Stable"}
          </span>
        </div>
      </div>

      <div className="mb-3">
        <p className="text-gray-600 text-xs mb-1">Current Price</p>
        <div className="flex items-center gap-2 items-baseline">
          <p className="text-3xl font-bold text-gray-900 transition-colors duration-300">
            ${token.price.toFixed(2)}
          </p>
          <span style={{
            fontSize: '32px',
            lineHeight: '1',
            padding: '0',
            margin: '0',
            backgroundColor: 'transparent',
            border: 'none',
            outline: 'none'
          }} className={`transition-all duration-300 ${
            direction === 'up' ? 'text-red-500' : direction === 'down' ? 'text-green-500' : 'text-gray-400'
          }`}>
            {direction === 'up' ? '↑' : direction === 'down' ? '↓' : '→'}
          </span>
        </div>
      </div>

      <div className="pt-3 border-t border-gray-200">
        <p className="text-gray-600 text-xs">
          <span className="text-gray-500">Volume:</span> {Number(token.volume).toLocaleString()}
        </p>
      </div>
    </div>
  );
}
