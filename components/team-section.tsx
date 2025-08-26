import { Card, CardContent } from "@/components/ui/card"

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
    <section id="team" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-space-grotesk font-bold text-3xl lg:text-5xl mb-4">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experienced professionals dedicated to revolutionizing influencer marketing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center border-border">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="font-space-grotesk font-bold text-xl mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
