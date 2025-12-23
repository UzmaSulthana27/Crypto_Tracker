import { useRef, useEffect, useState } from "react";

export default function TokenRow({ token }) {
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
    <tr className="hover:bg-gray-50 transition-all duration-200 border-b border-gray-200 last:border-b-0 group">
      <td className="px-4 sm:px-6 py-4 font-semibold text-gray-900 group-hover:text-emerald-600 transition">{token.symbol}</td>

      <td className="px-4 sm:px-6 py-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg text-gray-900 transition-all duration-300">
            ${token.price.toFixed(2)}
          </span>
          <span style={{
            fontSize: '24px',
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
      </td>

      <td className="px-4 sm:px-6 py-4 text-gray-700 text-sm sm:text-base">
        {Number(token.volume).toLocaleString()}
      </td>
    </tr>
  );
}
