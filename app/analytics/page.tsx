export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">AI-Generated Dashboards</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get custom analytics dashboards and insights tailored to your specific metrics and KPIs.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">💬</span>
            <span className="font-mono text-sm text-gray-500">You:</span>
          </div>
          <p className="text-lg text-gray-800 mb-6">
            "Show me engagement rates by content type, audience demographics breakdown, and ROI trends for Q4 campaigns"
          </p>
          <div className="border-l-4 border-red-500 pl-4">
            <p className="text-sm text-gray-600">
              Generating custom dashboard with 12 visualizations, predictive trends, and actionable insights...
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 text-xl">📊</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Custom Dashboards</h3>
            <p className="text-gray-600 text-sm">
              AI generates personalized analytics views based on your specific needs
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 text-xl">🔮</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Predictive Insights</h3>
            <p className="text-gray-600 text-sm">Forecast trends and identify opportunities before your competition</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 text-xl">⚡</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Real-Time Updates</h3>
            <p className="text-gray-600 text-sm">Live data processing with instant alerts on performance changes</p>
          </div>
        </div>
      </div>
    </main>
  )
}
