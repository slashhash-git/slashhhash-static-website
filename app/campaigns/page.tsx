export default function CampaignsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">AI Campaign Orchestration</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Launch campaigns that perfectly match your audience's look, feel, and preferences through AI analysis.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">💬</span>
            <span className="font-mono text-sm text-gray-500">You:</span>
          </div>
          <p className="text-lg text-gray-800 mb-6">
            "Create a campaign for luxury skincare targeting professional women 25-35 with minimalist aesthetic
            preferences"
          </p>
          <div className="border-l-4 border-red-500 pl-4">
            <p className="text-sm text-gray-600">
              AI analyzing audience visual preferences, content styles, and engagement patterns to orchestrate perfect
              campaign...
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 text-xl">🎯</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Aesthetic Matching</h3>
            <p className="text-gray-600 text-sm">
              AI analyzes audience visual preferences to match exact look and feel
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 text-xl">🤖</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Smart Automation</h3>
            <p className="text-gray-600 text-sm">
              Automated creator outreach, content approval, and performance optimization
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 text-xl">📈</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Continuous Optimization</h3>
            <p className="text-gray-600 text-sm">
              Real-time adjustments based on performance data and audience feedback
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
