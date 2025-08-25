export default function ContentPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">AI Content Generation</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create compelling content that resonates with your audience using AI-powered insights and optimization.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">💬</span>
            <span className="font-mono text-sm text-gray-500">You:</span>
          </div>
          <p className="text-lg text-gray-800 mb-6">
            "Generate Instagram captions for a sustainable fashion brand targeting Gen Z with humor and authenticity"
          </p>
          <div className="border-l-4 border-red-500 pl-4">
            <p className="text-sm text-gray-600">
              AI crafting content based on 50K+ successful posts, audience sentiment analysis, and trending topics...
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 text-xl">🧠</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Audience-First</h3>
            <p className="text-gray-600 text-sm">
              Content optimized for your specific audience preferences and behaviors
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 text-xl">🎨</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Brand Aligned</h3>
            <p className="text-gray-600 text-sm">Maintains your unique voice while maximizing engagement potential</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-red-600 text-xl">📈</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Performance Driven</h3>
            <p className="text-gray-600 text-sm">Every piece optimized for maximum reach and meaningful engagement</p>
          </div>
        </div>
      </div>
    </main>
  )
}
