export function HeroSection() {
  return (
    <section className="bg-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            AI-powered creator discovery chat
          </h1>

          <p className="text-2xl text-red-500 font-mono mb-12 italic">
            Don't just guess. Let our AI console.log() your social success.
          </p>

          <div className="flex items-center justify-center space-x-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="h-20 w-20 rounded-full border-3 border-gray-900 flex items-center justify-center bg-white mb-2">
                <div className="absolute w-3 h-3 rounded-full bg-orange-500 -translate-x-2 -translate-y-2"></div>
                <div className="absolute w-3 h-3 rounded-full bg-blue-500 translate-x-2 -translate-y-2"></div>
              </div>
              <span className="text-2xl font-bold text-gray-900">/</span>
            </div>

            <span className="text-3xl text-gray-400">+</span>

            <div className="flex flex-col items-center">
              <div className="h-20 w-20 rounded-full border-3 border-gray-900 flex items-center justify-center bg-white mb-2">
                <div className="absolute w-3 h-3 rounded-full bg-orange-500 -translate-x-2 -translate-y-2"></div>
                <div className="absolute w-3 h-3 rounded-full bg-blue-500 translate-x-2 -translate-y-2"></div>
              </div>
              <span className="text-2xl font-bold text-gray-900">#</span>
            </div>

            <span className="text-3xl text-gray-400">=</span>

            <div className="flex flex-col items-center">
              <div className="h-20 w-20 rounded-full border-3 border-gray-900 flex items-center justify-center bg-white mb-2">
                <div className="absolute w-3 h-3 rounded-full bg-red-500 -translate-x-2 -translate-y-2"></div>
                <div className="absolute w-3 h-3 rounded-full bg-blue-500 translate-x-2 -translate-y-2"></div>
                <div className="text-red-500 text-lg">♥</div>
              </div>
              <span className="text-lg text-gray-700">/#creators</span>
            </div>
          </div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            We transform social marketing by connecting what's been fragmented — stories, data, and human context — to
            unlock unprecedented depth through our AI-powered chat interface.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12 text-left">
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="font-mono text-red-500 font-semibold mb-2">AI.discover()</h3>
              <p className="text-gray-700 text-sm">
                Utilizing big data and AI to precisely discover and empower the ideal creators who perfectly fit and
                meaningfully engage any specific niche.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-mono text-blue-500 font-semibold mb-2">AI.optimize()</h3>
              <p className="text-gray-700 text-sm">
                AI-powered content generation and optimization, informed by audience preferences and engagement
                patterns.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="font-mono text-orange-500 font-semibold mb-2">AI.segment()</h3>
              <p className="text-gray-700 text-sm">
                Precise audience segmentation and targeting based on comprehensive social data and behavioral analysis.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="font-mono text-green-500 font-semibold mb-2">AI.analyze()</h3>
              <p className="text-gray-700 text-sm">
                Performance analytics and intelligent creator identification for truly impactful campaigns with
                transparent insights.
              </p>
            </div>
          </div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Chat with our neural network using natural language prompts. Execute advanced creator discovery algorithms,
            analyze engagement matrices, and deploy targeted campaigns through our intelligent chat interface.
          </p>

          <div className="mt-8 max-w-2xl mx-auto">
            <div className="bg-gray-900 rounded-lg p-4 text-left">
              <div className="flex items-center mb-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="ml-4 text-gray-400 text-sm">slashhash-chat</span>
              </div>
              <div className="font-mono text-green-400 text-sm">
                <span className="text-gray-400">💬</span> Find tech creators with 5%+ engagement, age 25-35
                <br />
                <span className="text-blue-400">→ Scanning 2.3M creator profiles...</span>
                <br />
                <span className="text-green-400">✓ Found 847 matching creators</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
