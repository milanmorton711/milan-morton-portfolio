import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Cloud Monitor",
    description:
      "A web based interface for monitoring cloud resources and displaying their status and activity. ",
    image: "/CM.png",
    tags: ["React", "Springboot", "Docker", "PostgreSQL"],
    link: "#",
    github: "https://github.com/milanmorton711/cloud-monitor",
  },
  {
    title: "Cloud Security Scanner",
    description:
      "A Spring Boot application that identifies common AWS security misconfigurations and generates actionable security findings.",
    image: "/CS.png",
    tags: ["React", "Springboot", "Docker", "PostgreSQL", "tailwindcss"],
    link: "#",
    github: "https://github.com/milanmorton711/cloud-security-scanner",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* section header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            What I've been building
            {""}
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Code I’ve written across the frontend, backend, and cloud.
          </p>
        </div>
        {/*project grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}  ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                {/* img */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-800 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                                    bg-gradient-to-t from-card via-card/50
                                    to-transparent opacity-60"
                />
                {/* overlay link*/}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <FaGithub className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                                    text-muted-foreground group-hover:text-primary
                                    group-hover:translate-x-1 
                                    group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* view all cta 
                                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                                    <AnimatedBorderButton >
                                        View All Projects
                                        <ArrowUpRight className="h-5 w-5"/>
                                    </AnimatedBorderButton>
                                </div>*/}
      </div>
    </section>
  );
};
