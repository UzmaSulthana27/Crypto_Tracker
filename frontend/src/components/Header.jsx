export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 pb-6 border-b border-gray-200">
      <div className="flex items-center gap-4">
        <div className="text-5xl animate-bounce">📊</div>
        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight flex items-center gap-3 bg-gradient-to-r from-green-600 to-purple-600 bg-clip-text text-transparent">
            Crypto Tracker
          </h1>
          <p className="text-gray-600 text-sm mt-2">
            Real-time token prices & market intelligence
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-400">
        <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
        <span className="text-green-700 text-sm font-semibold">Live Market</span>
      </div>
    </header>
  );
}
