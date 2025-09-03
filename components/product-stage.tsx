import { Rocket, CheckCircle, Clock, Target } from "lucide-react";

export function ProductStage() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-3xl lg:text-5xl mb-6">
            Current Development Stage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SlashHash is currently in{" "}
            <strong className="text-red-600">
              MVP (Minimum Viable Product)
            </strong>{" "}
            stage with core AI chat functionality operational and ready for beta
            testing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-space-grotesk font-bold text-lg mb-2">
              Completed
            </h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>AI Chat Interface</li>
              <li>Creator Discovery Engine</li>
              <li>Basic Analytics</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-space-grotesk font-bold text-lg mb-2">
              In Progress
            </h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Campaign Management</li>
              <li>Advanced Analytics</li>
              <li>API Integrations</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="font-space-grotesk font-bold text-lg mb-2">
              Next Phase
            </h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Beta User Testing</li>
              <li>Performance Optimization</li>
              <li>Enterprise Features</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-space-grotesk font-bold text-lg mb-2">
              Future
            </h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>Full Market Launch</li>
              <li>Mobile App</li>
              <li>Global Expansion</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
