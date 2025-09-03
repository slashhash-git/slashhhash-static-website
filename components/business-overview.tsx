import { Target, Users, TrendingUp, AlertTriangle } from "lucide-react";

export function BusinessOverview() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-3xl lg:text-5xl mb-6">
            Product Description
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              <strong>SlashHash B.V.</strong> is an AI-powered influencer
              marketing platform that transforms how brands discover, connect
              with, and manage creator partnerships through intelligent
              automation and data-driven insights.
            </p>
          </div>
        </div> */}

        <div className="bg-gray-50 px-8 py-12 rounded-lg flex flex-col items-center mb-16">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
              <Target className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-space-grotesk font-bold text-3xl">
              Problems We Solve
            </h3>
          </div>

          <p className="text-gray-800 font-medium mb-6 text-center">
            Today’s social marketing stacks are slow, fragmented, and built for
            a different era. We fix what’s broken.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-red-500 font-mono font-bold">#</span>
              <div>
                <span className="font-mono text-red-600 font-bold">
                  bias_driven:
                </span>{" "}
                Campaigns rely on gut instinct instead of real audience data.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 font-mono font-bold">#</span>
              <div>
                <span className="font-mono text-red-600 font-bold">
                  expensive:
                </span>{" "}
                Manual research, content creation, and scheduling eat up time
                and budget.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 font-mono font-bold">#</span>
              <div>
                <span className="font-mono text-red-600 font-bold">
                  complex:
                </span>{" "}
                Brands struggle to keep pace with fast-changing trends and
                shifting sentiment.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 font-mono font-bold">#</span>
              <div>
                <span className="font-mono text-red-600 font-bold">
                  off_target:
                </span>{" "}
                Content often misses the mark — leading to low engagement and
                wasted spend.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 font-mono font-bold">#</span>
              <div>
                <span className="font-mono text-red-600 font-bold">
                  no_foresight:
                </span>{" "}
                Without AI-driven insights, forecasting market shifts is nearly
                impossible.
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-gray-50 px-8 py-12 rounded-lg flex flex-col items-center mb-16">
          {/* Target Audience */}

          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
              <Users className="w-6 h-6 text-red-600" />
            </div>
            <h3 className="font-space-grotesk font-bold text-3xl">
              Target Audience
            </h3>
          </div>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-red-500 mr-2 font-mono font-bold">#</span>
              <span>
                <strong>Marketing Agencies:</strong> Managing multiple client
                campaigns
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 font-mono font-bold">#</span>
              <span>
                <strong>Enterprise Brands:</strong> Scaling influencer
                partnerships
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 font-mono font-bold">#</span>
              <span>
                <strong>SMB Marketing Teams:</strong> Maximizing limited budgets
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 font-mono font-bold">#</span>
              <span>
                <strong>Content Creators:</strong> AI-driven content generation
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 font-mono font-bold">#</span>
              <span>
                <strong>Creator Economy Platforms:</strong> Enhancing
                matchmaking capabilities
              </span>
            </li>
          </ul>
        </div>

        {/* Industry Context */}
        <div className="bg-blue-50 p-8 rounded-lg">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <TrendingUp className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="font-space-grotesk font-bold text-2xl">
              Industry Context & Market Trends
            </h3>
          </div>

          <div className="mb-8">
            <div className="flex gap-4 mb-4 h-auto justify-between items-stretch">
              <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="trend1.png"
                  alt="Industry Context Charts and Market Trends"
                  className="w-full"
                />
              </div>
              <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="trend2.png"
                  alt="Industry Context Charts and Market Trends"
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex gap-4 mb-4 h-auto justify-between items-stretch">
              <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="trend3.png"
                  alt="Industry Context Charts and Market Trends"
                  className="w-full"
                />
              </div>
              <div className="flex-1 bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="trend4.png"
                  alt="Industry Context Charts and Market Trends"
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center mb-12">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                $21.1B
              </div>
              <div className="text-gray-700">
                Global influencer marketing market size (2023)
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">39%</div>
              <div className="text-gray-700">
                Brands prefer nano-influencers for authentic engagement
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">$357B</div>
              <div className="text-gray-700">
                Projected social media ad spending by 2026
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                1,141%
              </div>
              <div className="text-gray-700">Market growth from 2016-2023</div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="font-space-grotesk font-bold text-lg mb-4 text-gray-800">
              Key Market Insights
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-bold text-gray-700">
              <div className="flex items-start">
                <span className="text-red-500 mr-2 font-mono">#</span>
                <span>
                  Mobile advertising dominates with 70%+ of social media spend
                </span>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-2 font-mono">#</span>
                <span>
                  Nano and micro-influencers account for 69% of brand
                  preferences
                </span>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-2 font-mono">#</span>
                <span>Market size increased 12x in 7 years (2016-2023)</span>
              </div>
              <div className="flex items-start">
                <span className="text-red-500 mr-2 font-mono">#</span>
                <span>
                  Brands allocate 25-50% of marketing budgets to influencer
                  partnerships
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
