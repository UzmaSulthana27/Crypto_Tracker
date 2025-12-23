import Header from "../components/Header";
import Hero from "../components/Hero";
import TradingTable from "../components/TradingTable";
import TokenCard from "../components/TokenCard";
import useWebSocket from "../hooks/useWebSocket";

export default function Home() {
  const tokens = useWebSocket();

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <Header />
      <Hero />

      {/* Mobile / Tablet */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 lg:hidden">
        {tokens.map((t) => (
          <TokenCard key={t.symbol} token={t} />
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden lg:block">
        <TradingTable />
      </div>

      <p className="mt-8 text-center text-slate-500 text-sm">
        Data updates every 2 seconds via WebSocket
      </p>
    </main>
  );
}
