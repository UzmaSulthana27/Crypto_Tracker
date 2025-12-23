export default function Hero() {
  return (
    <section className="mb-10 rounded-2xl bg-gradient-to-br from-emerald-50 to-purple-50 p-6 sm:p-8 border border-emerald-200 shadow-md">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800">
            Trade Smarter. Faster.
          </h2>
          <p className="text-gray-700 max-w-2xl leading-relaxed">
            Monitor live token prices with real-time updates powered by WebSockets.
            Built for traders who demand speed and accuracy.
          </p>
        </div>
        <div className="text-4xl">⚡</div>
      </div>
    </section>
  );
}
