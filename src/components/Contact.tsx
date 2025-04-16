
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-infinite-purple/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-infinite-orange/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg">
            Have a project in mind? Let's discuss how we can help you achieve your marketing goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Our Office</h4>
                    <p className="text-gray-600 mt-1">
                      123 Marketing Street, Digital Valley<br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Email Us</h4>
                    <p className="text-gray-600 mt-1">
                      info@infinite-marketing.com<br />
                      support@infinite-marketing.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Call Us</h4>
                    <p className="text-gray-600 mt-1">
                      +1 (555) 123-4567<br />
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-100">
                <h4 className="font-medium text-gray-900 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                    <a
                      key={social}
                      href={`#${social}`}
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-infinite-purple hover:text-white transition-colors"
                    >
                      <span className="capitalize">{social.charAt(0)}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-infinite-purple focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-infinite-purple focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-infinite-purple focus:border-transparent outline-none transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-infinite-purple focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Project Quote">Project Quote</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Support">Support</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-infinite-purple focus:border-transparent outline-none transition-all"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full gradient-bg text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg transition-all flex items-center justify-center"
                >
                  Send Message
                  <Send size={18} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
