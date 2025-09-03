export function HeroSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-12 leading-tight">
            AI-powered Co-Pilot for social and influencer marketing
          </h1>

          <p className="text-2xl text-red-500 font-mono mb-14 italic">
            The first truly conversational social marketing platform
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

            <span className="text-2xl text-gray-400">=</span>

            <div className="flex flex-col items-center">
              <div className="h-20 w-20 rounded-full border-3 border-gray-900 flex items-center justify-center bg-white mb-2">
                <div className="absolute w-3 h-3 rounded-full bg-red-500 -translate-x-2 -translate-y-2"></div>
                <div className="absolute w-3 h-3 rounded-full bg-blue-500 translate-x-2 -translate-y-2"></div>
                <div className="text-red-500 text-lg">♥</div>
              </div>
              <span className="text-2xl font-bold text-gray-900">
                /#
                <span>Slash</span>
                <span>Hash</span>
              </span>
            </div>
          </div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Our platform connects disparate social data points - creator
            profiles, audience demographics, content performance, and campaign
            metrics. Our proprietary AI then synthesizes this information to
            provide direct, actionable answers and workflows through a chat
            interface.
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6 text-left">
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-500 shadow-lg">
              <h3 className="font-mono text-red-500 font-semibold mb-2">
                AI-Powered Discovery
              </h3>
              <p className="text-gray-700 text-md">
                Instantly find the perfect creators, content and brand-to-brand
                synergies across social media platforms using natural language
                queries.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500 shadow-lg">
              <h3 className="font-mono text-blue-500 font-semibold mb-2">
                Content & Trend Identification
              </h3>
              <p className="text-gray-700 text-md">
                Discover viral audio, emerging aesthetics, and breaking trends
                to ensure your marketing efforts are always relevant and
                effective.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-orange-500 shadow-lg">
              <h3 className="font-mono text-orange-500 font-semibold mb-2">
                AI Content Co-Pilot
              </h3>
              <p className="text-gray-700 text-md">
                Move from idea to execution in seconds. Our AI generates
                high-performing campaign briefs, ad copy, video scripts, and
                creative concepts tailored to your chosen creators and marketing
                goals.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-500 shadow-lg">
              <h3 className="font-mono text-green-500 font-semibold mb-2">
                AI-Powered Campaign Orchestration
              </h3>
              <p className="text-gray-700 text-md">
                Your operational command center for campaigns — centralizing
                creator communication, streamlining negotiations and contracts,
                and providing real-time monitoring to manage the entire workflow
                from planning to execution.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-1 max-w-4xl mx-auto mb-16 text-left">
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-500 shadow-lg">
              <h3 className="font-mono text-purple-500 font-semibold mb-2">
                Conversational AI Analytics
              </h3>
              <p className="text-gray-700 text-md">
                Go beyond static dashboards. Ask your data anything and get
                instant visualizations. Generate custom reports and graphs
                sliced by any dimension (creator, audience, content) at any
                granularity (daily, weekly, campaign-level), simply by asking.
              </p>
            </div>
          </div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ">
            <span className="italic font-bold">Just chat</span> - our AI finds
            creators, analyzes engagement, and launches targeted campaigns — all
            through a simple, natural conversation.
          </p>

          <div className="mt-8 mx-auto">
            <div className="bg-gray-100 rounded-lg p-4 text-left shadow-lg">
              <div className="flex items-center mb-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="ml-4 text-gray-400 text-sm">
                  slashhash-chat
                </span>
              </div>

              {/* <div className="font-mono text-green-400 text-sm">
                <span className="text-gray-400">💬</span> Find tech creators
                with 5%+ engagement, age 25-35
                <br />
                <span className="text-blue-400">
                  → Scanning 2.3M creator profiles...
                </span>
                <br />
                <span className="text-green-400">
                  ✓ Found 847 matching creators
                </span>
              </div> */}

              <video src="chatdemo.mov" autoPlay muted playsInline loop />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
