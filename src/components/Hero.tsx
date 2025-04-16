
import { ArrowRight, Zap, BarChart, Globe } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-infinite-purple/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-infinite-orange/30 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-infinite-purple/20 bg-infinite-purple/5 text-infinite-purple">
              <span className="text-xs font-medium">Digital Marketing Excellence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              We Drive <span className="gradient-text">Infinite</span> Growth For Your Business
            </h1>
            
            <p className="text-lg text-gray-600 md:text-xl max-w-xl">
              Transform your digital presence with our comprehensive marketing solutions designed to increase visibility, engagement, and conversions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="gradient-bg text-white font-medium px-6 py-3 rounded-lg hover:shadow-lg transition-all inline-flex items-center justify-center group"
              >
                Get Started 
                <ArrowRight className="ml-2 transform transition-transform group-hover:translate-x-1" size={18} />
              </a>
              <a 
                href="#services" 
                className="text-gray-800 bg-white border border-gray-200 font-medium px-6 py-3 rounded-lg hover:border-infinite-purple transition-all"
              >
                Our Services
              </a>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { icon: <Zap size={20} />, stat: '500+', label: 'Projects' },
                { icon: <BarChart size={20} />, stat: '97%', label: 'Success Rate' },
                { icon: <Globe size={20} />, stat: '50+', label: 'Countries' }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white mb-2">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{item.stat}</h3>
                  <p className="text-sm text-gray-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="relative z-10">
              <div className="w-full h-[500px] rounded-2xl shadow-2xl animate-float overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-infinite-purple/90 to-infinite-orange/90 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                    alt="Digital Marketing Strategy" 
                    className="w-full h-full object-cover mix-blend-overlay opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <h3 className="text-3xl font-bold mb-4">Strategic Marketing</h3>
                      <p className="max-w-xs mx-auto">Data-driven campaigns that deliver real results</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-infinite-orange/20 rounded-full blur-[40px]"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-infinite-purple/20 rounded-full blur-[50px]"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-dashed border-white/20 rounded-2xl -rotate-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
