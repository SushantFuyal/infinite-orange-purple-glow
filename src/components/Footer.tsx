
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-infinite-purple/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-infinite-orange/20 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 gradient-text">Infinite</h3>
            <p className="text-gray-400 mb-6">
              Your partner for digital marketing excellence. We help businesses grow with innovative digital strategies.
            </p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-infinite-purple hover:text-white transition-colors"
                >
                  <span className="capitalize">{social.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "SEO Optimization",
                "Performance Marketing",
                "Social Media Management",
                "Mobile Marketing",
                "Data Analytics",
                "Content Marketing"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "#about" },
                { name: "Our Team", href: "#team" },
                { name: "Careers", href: "#careers" },
                { name: "Blog", href: "#blog" },
                { name: "Contact", href: "#contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <p>123 Marketing Street, Digital Valley</p>
                <p>San Francisco, CA 94107</p>
              </li>
              <li>
                <a href="mailto:info@infinite-marketing.com" className="hover:text-white transition-colors">
                  info@infinite-marketing.com
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Infinite Marketing. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="text-gray-400 text-sm hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-400 text-sm hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="text-gray-400 text-sm hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
          
          <button
            onClick={scrollToTop}
            className="mt-6 md:mt-0 w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white hover:shadow-lg transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
