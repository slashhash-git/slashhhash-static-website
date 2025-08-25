import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "Neural Query Engine",
    description:
      "Ask complex creator discovery questions using natural language. Our AI understands your intent and returns precisely matched results through conversational prompts.",
    icon: "🧠",
  },
  {
    title: "Real-time Analytics Pipeline",
    description:
      "AI-powered dashboard generator creates custom analytics views on-demand. Simply ask for any dimension through chat prompts - our ML engine builds visualizations and metrics in real-time.",
    icon: "📊",
  },
  {
    title: "Automated Campaign Orchestration",
    description:
      "Launch campaigns through natural language prompts with AI-driven audience matching. Our neural networks analyze target demographics and automatically adapt creative assets to match exact audience aesthetics and preferences.",
    icon: "⚡",
  },
  {
    title: "ML-Powered Authenticity Scanner",
    description:
      "Ask our AI to analyze creator authenticity using deep learning algorithms to detect fake followers, bot engagement, and audience quality. Get confidence scores and detailed fraud analysis through simple prompts.",
    icon: "🔍",
  },
  {
    title: "Global Creator Database API",
    description:
      "Chat with our AI to query our distributed database of 10M+ creators across platforms. Natural language interface with intelligent data relationship understanding.",
    icon: "🌐",
  },
  {
    title: "Predictive Performance Models",
    description:
      "Ask our AI to forecast campaign ROI, optimal posting times, and audience growth patterns. Get machine learning predictions with statistical confidence intervals through conversational queries.",
    icon: "🤖",
  },
]

export function ProductFeatures() {
  return (
    <section id="product" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-3xl lg:text-5xl mb-4">Advanced AI Chat Features</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conversational AI meets machine learning. Execute powerful creator discovery algorithms through our
            intelligent chat interface.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="font-space-grotesk text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
