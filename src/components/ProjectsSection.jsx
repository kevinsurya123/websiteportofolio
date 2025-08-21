import { ExternalLink } from "lucide-react";

const project = [
  {
    id: 1,
    title: "System Analyst",
    description: "SKPL Technical Documentation",
    image: "/projects/project1.png",
    tags: [
      "SQL",
      "ERP Tools",
      "SDLC Knowledge",
      "Technical Documentation",
      "Business Process Analysis",
      "Critical Thinking",
    ],
    demoUrl:
      "https://drive.google.com/file/d/1DmXpYEt5WOWQICFPWJOS76rZwcLAQMaE/view?usp=sharing",
    githubUrl: "#",
  },

  {
    id: 2,
    title: "System Analyst",
    description: "DPPL Technical Documentation",
    image: "/projects/project2.png",
    tags: [
      "SQL",
      "ERP Tools",
      "SDLC Knowledge",
      "Technical Documentation",
      "Business Process Analysis",
      "Critical Thinking",
    ],
    demoUrl:
      "https://drive.google.com/file/d/1aS7YtHkOPfyGHnk08FkdSEFkW7tI-uDf/view?usp=sharing",
    githubUrl: "#",
  },

  {
    id: 3,
    title: "Business & Digital Marketing",
    description: "Executed strategies for new user acquisition",
    image: "/projects/project3.png",
    tags: [
      "Market Analysis",
      "Strategic Planning",
      "Relationship Management",
      "Communication",
      "Facilitation & Negotiation",
    ],
    demoUrl: "https://drive.google.com/file/d/1T37WS-DQz-3W9hIgtT4HsXFPKy48vNaZ/view?usp=sharing",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Project </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, growth, and focus on user
          experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/30 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title & Desc */}
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Button */}
                <div className="pt-4">
                  <a href={project.demoUrl} target="_blank" className="cosmic-button px-3 py-1.5 text-sm">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};