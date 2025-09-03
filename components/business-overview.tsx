import { Target, Users, TrendingUp, AlertTriangle } from "lucide-react"

export function BusinessOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-3xl lg:text-5xl mb-6">Product Description</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              <strong>SlashHash B.V.</strong> is an AI-powered influencer marketing platform that transforms how brands
              discover, connect with, and manage creator partnerships through intelligent automation and data-driven
              insights.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Problems We Solve */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <Target className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-space-grotesk font-bold text-2xl">Problems We Solve</h3>
            </div>
            <div className="mb-4">
              <p className="text-gray-800 font-medium mb-2">
                Current social marketing stacks are throttled — underclocked in a world demanding overdrive.
              </p>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2 font-mono">#</span>
                <div>
                  <span className="font-mono text-red-600">bias-driven:</span> Content creation based on marketer's
                  subjective preferences rather than audience data
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 font-mono">#</span>
                <div>
                  <span className="font-mono text-red-600">expensive:</span> Manual research, content creation, and
                  scheduling are inefficient and costly
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 font-mono">#</span>
                <div>
                  <span className="font-mono text-red-600">complex:</span> Keeping up with rapid brand transformations
                  and nuanced social sentiment
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 font-mono">#</span>
                <div>
                  <span className="font-mono text-red-600">ineffective&off-target:</span> Content fails to resonate,
                  resulting in wasted effort and low ROI
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 font-mono">#</span>
                <div>
                  <span className="font-mono text-red-600">lack_of_foresight:</span> Impossible to forecast market
                  shifts without active AI-powered data sourcing
                </div>
              </li>
            </ul>
          </div>

          {/* Target Audience */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-space-grotesk font-bold text-2xl">Target Audience</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>
                  <strong>Marketing Agencies:</strong> Managing multiple client campaigns
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>
                  <strong>Enterprise Brands:</strong> Scaling influencer partnerships
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>
                  <strong>SMB Marketing Teams:</strong> Maximizing limited budgets
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>
                  <strong>Creator Economy Platforms:</strong> Enhancing matchmaking capabilities
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Business Impact */}
        <div className="bg-red-50 p-8 rounded-lg mb-16">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
              <AlertTriangle className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-space-grotesk font-bold text-2xl">Business Impact of Current Problems</h3>
          </div>
          <div className="mb-4">
            <p className="text-gray-800 font-medium mb-4">
              Due to these problems, companies are losing critical competitive advantages:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-red-500 mr-2 font-mono">#</span>
                <div>
                  <span className="font-mono text-red-600">opportunities:</span> Missing emerging trends, new audience
                  segments, and strategic brand synergies by failing to understand niche communities
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-2 font-mono">#</span>
                <div>
                  <span className="font-mono text-red-600">time&money:</span> Inefficient processes lead to wasted
                  resources and sub-optimal return on investment
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-red-500 mr-2 font-mono">#</span>
                <div>
                  <span className="font-mono text-red-600">visibility:</span> Addressing wrong audience, at wrong time,
                  with wrong content - struggling to stand out amidst digital noise
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-2 font-mono">#</span>
                <div>
                  <span className="font-mono text-red-600">relevance:</span> Without social intelligence, brands lose
                  audience grip and fail to deliver resonant messages consistently
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-white rounded-lg border-l-4 border-red-500">
            <div className="flex items-start">
              <span className="text-red-500 mr-2 font-mono">#</span>
              <div>
                <span className="font-mono text-red-600">awareness:</span> Lack of visibility on costs, performance,
                positioning, scalability and competition leads to diminishing market share and inability to maintain
                competitive edge
              </div>
            </div>
          </div>
        </div>

        {/* Industry Context */}
        <div className="bg-red-50 p-8 rounded-lg">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
              <TrendingUp className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-space-grotesk font-bold text-2xl">Industry Context & Market Trends</h3>
          </div>

          <div className="mb-8">
            <img
              src="industry-market-trends.png"
              alt="Industry Context Charts and Market Trends - Influencer Marketing Growth, Social Media Spending, and Brand Investment Patterns"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center mb-6">
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">$21.1B</div>
              <div className="text-gray-700">Global influencer marketing market size (2023)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">39%</div>
              <div className="text-gray-700">Brands prefer nano-influencers for authentic engagement</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">$357B</div>
              <div className="text-gray-700">Projected social media ad spending by 2026</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">1,141%</div>
              <div className="text-gray-700">Market growth from 2016-2023</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg">
            <h4 className="font-space-grotesk font-bold text-lg mb-4 text-gray-800">Key Market Insights</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="flex items-start">
                <span className="text-red-500 mr-2 font-mono">#</span>
                <span>Mobile advertising dominates with 70%+ of social media spend</span>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-2 font-mono">#</span>
                <span>Nano and micro-influencers account for 69% of brand preferences</span>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-2 font-mono">#</span>
                <span>Market size increased 12x in 7 years (2016-2023)</span>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-2 font-mono">#</span>
                <span>Brands allocate 25-50% of marketing budgets to influencer partnerships</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
