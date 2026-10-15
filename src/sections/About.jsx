import { Code2, ShieldCheck, Users, Lightbulb } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Building practical, scalable applications and turning ideas into software.",
  },
  {
    icon: ShieldCheck,
    title: "Security Minded",
    description:
      "Building software with security in mind from development to deployment.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "Collaborating effectively with others to build better solutions.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Finding effective, efficient solutions to technical challenges.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/*L column*/}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              How I got into
              <span className="font-serif italic font-normal text-white">
                {" "}
                cloud and security.{" "}
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              {/* about me paragraph*/}
              <p>
                Growing up, I watched my dad work on information systems in the
                Navy, and I was always intrigued by it. Even after he got out, I
                still wanted to watch him work, and that built an endless
                curiosity. It grew into an interest in technology and how these
                systems are built.
              </p>
              <p>
                After taking a few classes, including some cloud classes, I
                realized how much I enjoyed it. I chose to change degrees
                because I wanted to do more than work in the cloud. I wanted to
                code in it.
              </p>
            </div>
          </div>

          {/* right col hi lights USE ARRAY WHEN WOrkING*/}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in "
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
