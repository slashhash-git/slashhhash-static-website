import { Brain, BarChart3, Zap, Shield, Globe, TrendingUp } from "lucide-react"

const features = [
  {
    title: "Neural Query Engine",
    description:
      "Ask complex creator discovery questions using natural language. Our AI understands your intent and returns precisely matched results through conversational prompts.",
    icon: Brain,
    color: "blue",
    code: "AI.discover(query)",
  },
  {
    title: "Real-time Analytics Pipeline",
    description:
      "AI-powered dashboard generator creates custom analytics views on-demand. Simply ask for any dimension through chat prompts - our ML engine builds visualizations and metrics in real-time.",
    icon: BarChart3,
    color: "green",
    code: "AI.analyze(metrics)",
  },
  {
    title: "Automated Campaign Orchestration",
    description:
      "Launch campaigns through natural language prompts with AI-driven audience matching. Our neural networks analyze target demographics and automatically adapt creative assets to match exact audience aesthetics and preferences.",
    icon: Zap,
    color: "orange",
    code: "AI.orchestrate(campaign)",
  },
  {
    title: "ML-Powered Authenticity Scanner",
    description:
      "Ask our AI to analyze creator authenticity using deep learning algorithms to detect fake followers, bot engagement, and audience quality. Get confidence scores and detailed fraud analysis through simple prompts.",
    icon: Shield,
    color: "purple",
    code: "AI.verify(authenticity)",
  },
  {
    title: "Global Creator Database API",
    description:
      "Chat with our AI to query our distributed database of 10M+ creators across platforms. Natural language interface with intelligent data relationship understanding.",
    icon: Globe,
    color: "red",
    code: "AI.query(database)",
  },
  {
    title: "Predictive Performance Models",
    description:
      "Ask our AI to forecast campaign ROI, optimal posting times, and audience growth patterns. Get machine learning predictions with statistical confidence intervals through conversational queries.",
    icon: TrendingUp,
    color: "blue",
    code: "AI.predict(performance)",
  },
]

const colorClasses = {
  blue: "bg-blue-100 text-blue-600",
  green: "bg-green-100 text-green-600",
  orange: "bg-orange-100 text-orange-600",
  purple: "bg-purple-100 text-purple-600",
  red: "bg-red-100 text-red-600",
}

const codeColorClasses = {
  blue: "text-blue-600",
  green: "text-green-600",
  orange: "text-orange-600",
  purple: "text-purple-600",
  red: "text-red-600",
}

export function ProductFeatures() {
  return (
    <section id="product" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-4xl text-gray-900 mb-4">Advanced AI Chat Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conversational AI meets machine learning. Execute powerful creator discovery algorithms through our
            intelligent chat interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`w-12 h-12 ${colorClasses[feature.color]} rounded-lg flex items-center justify-center mr-4`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <code className={`text-sm ${codeColorClasses[feature.color]}`}>{feature.code}</code>
                  </div>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
