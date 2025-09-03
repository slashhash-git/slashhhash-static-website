import { Linkedin, ExternalLink } from "lucide-react";

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
    summary:
      "Experienced tech leader with 20+ years in software engineering and cloud architecture. Played a key role in DEGIRO’s growth as Technical Lead, building scalable systems and high-performance infrastructure. Brings deep expertise in backend systems, fintech solutions, and scaling complex platforms.",
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
    summary:
      "Operations and BI expert with extensive experience leading data teams and scaling fintech operations. Instrumental in DEGIRO’s success, building BI systems and data infrastructure that supported rapid growth. Skilled at transforming complex data into actionable insights and ensuring operational efficiency.",
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
    linkedin: "https://linkedin.com/in/vboretskyi",
    summary:
      "Full-stack and frontend expert, worked for AWS and fast-growing fintech startups. Skilled in building real-time, user-friendly AI-powered web interfaces, optimizing UX, developing complex applications from end-to-end.",
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
    summary:
      "Creative marketing strategist with proven experience scaling brands and campaigns across multiple platforms. Expert in data-driven marketing, content creation, and full branding solutions, combining creativity with measurable growth outcomes.",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-3xl lg:text-5xl mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine tech, data, frontend, and marketing expertise to build
            SlashHash — an AI-powered social marketing chat platform. We design
            robust backend systems, turn complex data into actionable
            intelligence, and craft seamless user experiences. With strategic,
            data-driven marketing, we help campaigns reach the right audience
            faster.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
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
                  <h3 className="font-space-grotesk font-bold text-xl mb-1 text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-red-500 font-medium mb-2 font-mono">
                    {member.role}
                  </p>
                  {/* <p className="text-gray-700 font-semibold text-sm">
                    {member.title}
                  </p> */}
                </div>

                <p className="text-gray-600 text-md text-center leading-relaxed mb-6">
                  {member.summary}
                </p>
                {/* 
                <div className="mb-4">
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">
                    Experience:
                  </h4>
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
                  <h4 className="font-semibold text-sm text-gray-900 mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {member.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div> */}

                {member.linkedin && (
                  <div className="flex justify-center">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Linkedin className="w-4 h-4 mr-2" />
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
