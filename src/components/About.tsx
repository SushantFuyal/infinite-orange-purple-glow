
import { Check, Award, Users, Zap } from "lucide-react";

const AboutFeature = ({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="flex gap-4">
    <div className="flex-shrink-0 mt-1">
      <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center text-white">
        {icon}
      </div>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const About = () => {
  const features = [
    {
      icon: <Award size={20} />,
      title: "Award-Winning Agency",
      description: "Recognized for our innovative campaigns and exceptional results in the digital marketing industry."
    },
    {
      icon: <Users size={20} />,
      title: "Expert Team",
      description: "Our specialists combine creativity and technical expertise to deliver outstanding marketing solutions."
    },
    {
      icon: <Check size={20} />,
      title: "Proven Results",
      description: "We've helped businesses of all sizes achieve and exceed their marketing goals with measurable outcomes."
    },
    {
      icon: <Zap size={20} />,
      title: "Cutting-Edge Strategies",
      description: "We stay ahead of industry trends to implement the most effective marketing techniques for our clients."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-infinite-purple/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-infinite-orange/20 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About <span className="gradient-text">Infinite</span></h2>
              <p className="text-gray-600 text-lg mb-8">
                We are a forward-thinking digital marketing agency dedicated to propelling businesses toward unlimited growth and success in the digital landscape.
              </p>
              
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <AboutFeature 
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
              
              <div className="mt-10">
                <a 
                  href="#projects" 
                  className="px-8 py-3 bg-white border border-gray-200 rounded-lg text-gray-800 hover:border-infinite-purple transition-all inline-flex items-center"
                >
                  See Our Work
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl animate-float">
              <div className="aspect-w-4 aspect-h-3">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="Infinite Marketing Team" 
                  className="object-cover w-full h-full rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-infinite-purple/40 to-infinite-orange/30 mix-blend-multiply"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-white text-xl font-bold">Our Mission</h3>
                <p className="text-white/80 text-sm">
                  To empower businesses with innovative digital strategies that drive growth and create lasting impact.
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 border-2 border-dashed border-infinite-purple/30 rounded-2xl rotate-6"></div>
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 border-2 border-dashed border-infinite-orange/30 rounded-2xl -rotate-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
