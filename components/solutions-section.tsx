import { Terminal, Zap, Target, TrendingUp, Brain } from "lucide-react";

export function SolutionsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Overclocking Social Marketing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            While others throttle at basic metrics, our AI console delivers
            overdrive performance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Solution 1: Bias-Free Intelligence */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <Brain className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  #bias_free
                </h3>
                <code className="text-sm text-red-600">
                  AI.analyze(audience_data)
                </code>
              </div>
            </div>
            <p className="text-gray-600">
              Content creation driven by real audience preferences and social
              data, not marketer assumptions. Our AI eliminates subjective bias
              with objective insights.
            </p>
          </div>

          {/* Solution 2: Cost Optimization */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  #cost_optimized
                </h3>
                <code className="text-sm text-green-600">
                  AI.optimize(budget)
                </code>
              </div>
            </div>
            <p className="text-gray-600">
              Automated workflows replace expensive manual processes.
              Intelligent resource allocation maximizes ROI while minimizing
              operational overhead.
            </p>
          </div>

          {/* Solution 3: Simplified Complexity */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                <Terminal className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  #simplified
                </h3>
                <code className="text-sm text-blue-600">console.execute()</code>
              </div>
            </div>
            <p className="text-gray-600">
              Complex multi-platform campaigns managed through a single AI
              console. Natural language commands replace convoluted interfaces
              and manual coordination.
            </p>
          </div>

          {/* Solution 4: Precision Targeting */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  #precision_targeting
                </h3>
                <code className="text-sm text-purple-600">
                  AI.target(niche)
                </code>
              </div>
            </div>
            <p className="text-gray-600">
              Dynamic audience segmentation adapts to changing preferences in
              real-time. Content resonates with specific niches through
              AI-powered personalization.
            </p>
          </div>

          {/* Solution 5: Predictive Intelligence */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  #predictive_foresight
                </h3>
                <code className="text-sm text-orange-600">
                  AI.forecast(trends)
                </code>
              </div>
            </div>
            <p className="text-gray-600">
              Active social data sourcing enables trend prediction and market
              shift forecasting. Stay ahead of competition with AI-powered
              market intelligence.
            </p>
          </div>

          {/* Solution 6: High Performance */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                <Zap className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  #high_performance
                </h3>
                <code className="text-sm text-red-600">system.overdrive()</code>
              </div>
            </div>
            <p className="text-gray-600">
              Real-time content optimization and automated campaign management
              deliver maximum engagement. Performance analytics provide
              transparent ROI insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
