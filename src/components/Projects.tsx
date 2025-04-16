
import { ExternalLink, Award } from "lucide-react";

type Project = {
  title: string;
  client: string;
  image: string;
  category: string;
  description: string;
  awards?: string[];
  link?: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group overflow-hidden rounded-xl shadow-md hover-scale bg-white">
      <div className="relative overflow-hidden">
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-50 group-hover:opacity-70 transition-opacity"></div>
        </div>
        
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 rounded-full text-xs font-medium text-gray-800">
            {project.category}
          </span>
        </div>
        
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ExternalLink size={14} />
          </a>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
        <p className="text-infinite-purple font-medium mb-3">Client: {project.client}</p>
        <p className="text-gray-600 text-sm mb-3">{project.description}</p>
        
        {project.awards && project.awards.length > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center space-x-2 mb-2">
              <Award size={14} className="text-infinite-orange" />
              <span className="text-sm font-medium text-gray-700">Awards:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.awards.map((award, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-infinite-purple/10 text-infinite-purple rounded text-xs"
                >
                  {award}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  const projects: Project[] = [
    {
      title: "E-commerce Conversion Boost",
      client: "FashionEra",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      category: "Performance Marketing",
      description: "Increased conversion rates by 45% through targeted ads and funnel optimization strategies.",
      awards: ["Best ROI Campaign 2023"],
      link: "#project-1"
    },
    {
      title: "Brand Awareness Campaign",
      client: "EcoSolutions",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      category: "Social Media",
      description: "Created a viral campaign that increased brand recognition by 78% and grew social following by 150k.",
      awards: ["Social Impact Award", "Creative Excellence"],
      link: "#project-2"
    },
    {
      title: "Local SEO Dominance",
      client: "UrbanDental",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      category: "SEO",
      description: "Achieved #1 rankings for all target keywords in the local market, increasing appointments by 67%.",
      link: "#project-3"
    },
    {
      title: "App Launch Campaign",
      client: "FitTech",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "Mobile Marketing",
      description: "Secured 50,000+ downloads in the first month through strategic mobile advertising and influencer partnerships.",
      awards: ["App Launch of the Year"],
      link: "#project-4"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-infinite-orange/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-infinite-purple/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg">
            Explore some of our recent success stories and award-winning marketing campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 rounded-full text-white gradient-bg hover:shadow-lg transition-all"
          >
            Start Your Project
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
