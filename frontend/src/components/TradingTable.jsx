import TokenRow from "./TokenRow";
import useWebSocket from "../hooks/useWebSocket";

export default function TradingTable() {
  const tokens = useWebSocket();

  return (
    <div className="rounded-2xl bg-white border-2 border-gray-200 overflow-hidden shadow-lg hover:border-gray-300 transition-colors">
      <div className="px-6 sm:px-8 py-5 border-b border-gray-200">
        <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-3">
          <span className="text-3xl">💹</span>
          <span className="bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">Market Prices</span>
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-gray-700 text-xs sm:text-sm bg-gray-50 sticky top-0">
            <tr className="border-b border-gray-200">
              <th className="px-4 sm:px-6 py-4 text-left font-semibold">Token</th>
              <th className="px-4 sm:px-6 py-4 text-left font-semibold">Price</th>
              <th className="px-4 sm:px-6 py-4 text-left font-semibold">Volume</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tokens.map((t) => (
              <TokenRow key={t.symbol} token={t} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
