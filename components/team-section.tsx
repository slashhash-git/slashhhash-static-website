const teamMembers = [
  {
    name: "Flori Parauan",
    role: "#tech",
    bio: "C++ developer by birth, Software Engineer by design. Former tech executive with 20+ years in tech.",
    image: "flori-parauan-mountain.png",
  },
  {
    name: "Bram Goosens",
    role: "#bi&operations",
    bio: "A BI and operations expert who turns data chaos into clarity. As a former leader of BI teams at major tech companies, he's a master of wrangling messy metrics and uncovering the single, beautiful source of truth. He speaks fluent data and makes sure the numbers always tell the right story.",
    image: "bram-kite-surfer.png",
  },
  {
    name: "Volodymyr",
    role: "#tech",
    bio: "He's tamed the wild beasts of CSS and navigated the ever-shifting landscape of JavaScript frameworks, all in the name of perfect user experiences. His quest? To turn complex designs into a pixel-perfect, interactive reality.",
    image: "volodymyr-teddy-bear.png",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-3xl lg:text-5xl mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced professionals dedicated to revolutionizing influencer marketing
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-center"
              >
                <div className="mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="font-space-grotesk font-bold text-xl mb-2 text-gray-900">{member.name}</h3>
                <p className="text-red-500 font-medium mb-4 font-mono">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
