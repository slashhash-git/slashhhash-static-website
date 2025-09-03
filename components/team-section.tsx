import { Linkedin, ExternalLink } from "lucide-react"

const teamMembers = [
  {
    name: "Flori Parauan",
    role: "#tech",
    title: "Co-Founder & CTO",
    bio: "C++ developer by birth, Software Engineer by design. Former tech executive with 20+ years in tech.",
    experience: [
      "CTO at Amsterdam Platform Creation (2020-2023) - Built 35+ person IT team",
      "Technical Lead at DeGiro B.V. (2013-2020) - Europe's leading broker",
      "Expert in trading systems, cloud architecture, and fintech solutions",
    ],
    achievements: [
      "Architected cloud solutions for multiple FinTech startups",
      "Built high-throughput trading connections to major global exchanges",
      "Led technical due diligence for 7+ companies in private equity",
    ],
    image: "flori-parauan-mountain.png",
  },
  {
    name: "Bram Goosens",
    role: "#bi&operations",
    title: "Co-Founder & COO",
    bio: "A BI and operations expert who turns data chaos into clarity. Former leader of BI teams at major tech companies.",
    experience: [
      "Data Lead at Amsterdam Platform Creation (2021-Present) - Head of Data & Ops at Woolsocks Money App",
      "COO at Frank Energie (2021-2022) - Led finance, operations, support, data and engineering",
      "Business Intelligence Lead at DEGIRO (2020) - Europe's leading broker",
    ],
    achievements: [
      "Leading data engineering and analytics for fintech ventures Woolsocks & Frank Energie",
      "Scaled Frank Energie operations during acquisition and organizational transition",
      "Built BI systems and data infrastructure at Europe's largest broker platform",
    ],
    image: "bram-professional.png",
    linkedin: "https://nl.linkedin.com/in/bram-goossens-a94b3aa2",
  },
  {
    name: "Volodymyr Boretskyi",
    role: "#tech",
    title: "Lead Frontend Engineer",
    bio: "Full-stack developer specializing in modern web technologies and user experience optimization.",
    experience: [
      "Front-End Engineer II at Amazon Web Services (AWS) (Dec 2024-Present)",
      "Full-Stack Engineer at Amsterdam Platform Creation (2021-2024) - 3.5 years",
      "Sr. Software Engineer, Team Lead at HousingAnywhere (2020-2021)",
    ],
    achievements: [
      "Developed savings and investments modules for personal finance mobile app and brokerage platform",
      "Built payment processing software and back office financial tools at HousingAnywhere",
      "Expert in e2e testing frameworks and advanced web interfaces for real-time device control",
    ],
    image: "volodymyr-professional.png",
    linkedin: "https://linkedin.com/in/volodymyr-kovalenko",
  },
  {
    name: "Mircha Pellens",
    role: "#marketing",
    title: "Creative Marketing Partner",
    bio: "Creative marketing partner behind ALICE Creative Consultancy, helping growing entrepreneurs outsource their marketing with strategic approaches for measurable growth.",
    experience: [
      "Founder of ALICE Creative Consultancy - Strategic marketing partner",
      "Specializes in content, communication, and digital marketing",
      "Expert in combining creativity with data-driven strategy",
    ],
    achievements: [
      "Full-service marketing: strategy, content creation, social media management",
      "Multi-platform advertising expertise: Meta, Pinterest, Google, LinkedIn",
      "Complete branding solutions: photography, videography, copywriting, brand identity",
    ],
    image: "mircha-pellens-artistic.png",
    linkedin: "https://www.linkedin.com/in/mirchapellens/",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-3xl lg:text-5xl mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced professionals with proven track records in technology, data analytics, and startup leadership
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16 bg-white p-8 rounded-lg shadow-sm border-l-4 border-red-500">
          <h3 className="font-space-grotesk font-bold text-2xl mb-4 text-gray-900">
            <span className="text-red-500 font-mono">#</span>origin_story.exe
          </h3>
          <div className="text-gray-700 leading-relaxed space-y-4">
            <p>
              <span className="font-mono text-red-500">console.log("</span>Once upon a time in the land of financial
              APIs...<span className="font-mono text-red-500">");</span>
            </p>
            <p>
              Our dynamic duo, Flori and Bram, first crossed paths at <strong>DeGiro B.V.</strong> (Europe's biggest
              broker) where they spent 8+ years debugging the mysteries of high-frequency trading systems and arguing
              over whether tabs or spaces make better code. Their friendship was forged in the fires of production
              incidents and late-night deployments.
            </p>
            <p>
              After conquering the brokerage world, they leveled up together at{" "}
              <strong>Amsterdam Platform Creation B.V.</strong> (private equity), where they discovered that managing
              money is just like managing code - both require careful version control and the occasional rollback when
              things go sideways.
            </p>
            <p>
              Enter Volodymyr, the frontend wizard who joined their party at APC for 3+ years. Together, this trio
              formed the ultimate tech guild: Flori (the backend architect who speaks fluent C++), Bram (the data
              whisperer who can make Excel files confess their secrets), and Volodymyr (the UI/UX sorcerer who makes
              pixels dance).
            </p>
            <p>
              <span className="font-mono text-red-500">// TODO:</span> Now they're building SlashHash - because why
              settle for finding needles in haystacks when you can build an AI that finds the perfect haystack for your
              needle? 🎯
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="text-center mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
                  />
                  <h3 className="font-space-grotesk font-bold text-xl mb-1 text-gray-900">{member.name}</h3>
                  <p className="text-red-500 font-medium mb-2 font-mono">{member.role}</p>
                  <p className="text-gray-700 font-semibold text-sm">{member.title}</p>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">Experience:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {member.experience.map((exp, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">Key Achievements:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {member.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-center">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn Profile
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
