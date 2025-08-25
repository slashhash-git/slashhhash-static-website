export default function DiscoverPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">AI Creator Discovery</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the perfect creators for your brand using natural language queries and AI-powered matching.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">💬</span>
            <span className="font-mono text-sm text-gray-500">You:</span>
          </div>
          <p className="text-lg text-gray-800 mb-6">
            "Find tech reviewers with 50K+ followers who create authentic unboxing content for consumer electronics"
          </p>
          <div className="border-l-4 border-red-500 pl-4">
            <p className="text-sm text-gray-600">
              AI analyzing 10M+ creator profiles... Found 247 perfect matches with 94% brand alignment score.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 text-xl">🎯</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Precision Matching</h3>
            <p className="text-gray-600 text-sm">
              AI analyzes content style, audience demographics, and engagement patterns
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 text-xl">⚡</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Instant Results</h3>
            <p className="text-gray-600 text-sm">Get curated creator lists in seconds, not weeks of manual research</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 text-xl">📊</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Data-Driven</h3>
            <p className="text-gray-600 text-sm">Every recommendation backed by comprehensive performance analytics</p>
          </div>
        </div>
      </div>
    </main>
  )
}
