
import { TrendingUp, Globe, BarChart, Search, Smartphone, MessageSquare } from "lucide-react";

const ServiceCard = ({ icon, title, description, gradient }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: "purple" | "orange" | "mixed";
}) => {
  const gradientClass = 
    gradient === "purple" ? "from-infinite-purple/10 to-infinite-purple/5" :
    gradient === "orange" ? "from-infinite-orange/10 to-infinite-orange/5" :
    "from-infinite-purple/10 to-infinite-orange/10";

  const borderClass =
    gradient === "purple" ? "border-infinite-purple/20" :
    gradient === "orange" ? "border-infinite-orange/20" :
    "border-infinite-purple/20";

  const iconClass =
    gradient === "purple" ? "text-infinite-purple bg-infinite-purple/10" :
    gradient === "orange" ? "text-infinite-orange bg-infinite-orange/10" :
    "text-infinite-purple bg-gradient-to-r from-infinite-purple/20 to-infinite-orange/20";

  return (
    <div className={`bg-gradient-to-br ${gradientClass} backdrop-blur-sm p-6 rounded-xl border ${borderClass} hover-scale group`}>
      <div className={`w-12 h-12 rounded-lg ${iconClass} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <div className="mt-6">
        <a href="#contact" className="inline-flex items-center text-sm font-medium text-infinite-purple group-hover:underline">
          Learn more
          <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Search size={24} />,
      title: "SEO Optimization",
      description: "Boost your visibility with our data-driven SEO strategies that drive organic traffic and improve rankings.",
      gradient: "purple" as const
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Performance Marketing",
      description: "Maximize ROI with targeted campaigns that acquire, convert, and retain customers efficiently.",
      gradient: "orange" as const
    },
    {
      icon: <Globe size={24} />,
      title: "Social Media Management",
      description: "Build engaging communities and strengthen your brand with our comprehensive social media solutions.",
      gradient: "mixed" as const
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile Marketing",
      description: "Reach customers on the go with mobile-optimized strategies that drive engagement and conversions.",
      gradient: "orange" as const
    },
    {
      icon: <BarChart size={24} />,
      title: "Data Analytics",
      description: "Turn data into insights with our advanced analytics services that inform strategic business decisions.",
      gradient: "purple" as const
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Content Marketing",
      description: "Tell your brand story with compelling content that resonates with your audience and drives action.",
      gradient: "mixed" as const
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-infinite-orange/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-infinite-purple/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="gradient-text">Services</span></h2>
          <div className="w-20 h-1 gradient-bg mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg">
            Comprehensive digital marketing solutions tailored to elevate your brand and drive measurable results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              gradient={service.gradient}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-3 rounded-full text-white gradient-bg hover:shadow-lg transition-all"
          >
            Start Your Journey
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
