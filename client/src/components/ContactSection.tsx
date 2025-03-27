import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        
        // Reset submission status after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      }, 1000);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">Get In Touch</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-primary mb-4">
                <i className="fas fa-envelope text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Me</h3>
              <p className="text-gray-600 mb-4">Send me an email and I'll get back to you within 24 hours</p>
              <a href="mailto:mohameddaniss2@gmail.com" className="text-primary hover:underline font-medium">
            mohameddaniss2@
                gmail.com
              </a>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                <i className="fas fa-phone-alt text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Me</h3>
              <p className="text-gray-600 mb-4">Available for calls Sunday through Friday, 9am - 9pm </p>
              <a href="+9779767384214" className="text-primary hover:underline font-medium">
                +977 9767384214
              </a>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow transform hover:-translate-y-1 duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-4">
                <i className="fas fa-map-marker-alt text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600 mb-4">Available for remote work and local projects.
              </p>
              <p className="text-primary font-medium">Biratnagar, Nepal</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              {/* Form Column */}
              <div className="p-8 lg:p-12">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Me a Message</h3>
                  <p className="text-gray-600">Have a project in mind? Tell me about it.</p>
                </div>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="rounded-full bg-green-100 p-2 mr-3">
                        <i className="fas fa-check text-green-500"></i>
                      </div>
                      <h3 className="text-xl font-bold">Message Sent Successfully!</h3>
                    </div>
                    <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i className="fas fa-user text-gray-400"></i>
                          </div>
                          <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe" 
                            className={`w-full pl-10 px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-primary focus:border-primary transition-colors`}
                          />
                        </div>
                        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i className="fas fa-envelope text-gray-400"></i>
                          </div>
                          <input 
                            type="email" 
                            id="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com" 
                            className={`w-full pl-10 px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-primary focus:border-primary transition-colors`}
                          />
                        </div>
                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i className="fas fa-file-alt text-gray-400"></i>
                        </div>
                        <input 
                          type="text" 
                          id="subject" 
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Project inquiry" 
                          className={`w-full pl-10 px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-primary focus:border-primary transition-colors`}
                        />
                      </div>
                      {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <div className="relative">
                        <div className="absolute top-3 left-3 pointer-events-none">
                          <i className="fas fa-comment text-gray-400"></i>
                        </div>
                        <textarea 
                          id="message" 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={5} 
                          placeholder="Tell me about your project or inquiry..." 
                          className={`w-full pl-10 px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-primary focus:border-primary transition-colors`}
                        ></textarea>
                      </div>
                      {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                    </div>
                    <div>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-blue-600 transition-all transform hover:-translate-y-1 shadow-md hover:shadow-lg disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </span>
                        ) : 'Send Message'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
              
              {/* Map and contact info column */}
              <div className="relative lg:rounded-r-xl overflow-hidden h-full min-h-[300px] lg:min-h-full">
                {/* Map background (for visual presentation) */}
                <div className="absolute inset-0 bg-blue-900 bg-opacity-80 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1553290322-e23e3a7a1d45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Map background" 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                />
                
                {/* Contact information overlay */}
                <div className="relative z-20 p-8 lg:p-12 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                    <div className="space-y-4 text-white">
                      <p className="flex items-center">
                        <i className="fas fa-envelope-open-text mr-3 w-5 text-blue-300"></i>
                        <a href="mohameddaniss2@gmail.com.com" className="hover:underline">mohameddaniss2@gmail.com</a>
                      </p>
                      <p className="flex items-center">
                        <i className="fas fa-phone mr-3 w-5 text-blue-300"></i>
                        <a href="tel:+9779767384214" className="hover:underline">+977 9767384214</a>
                      </p>
                      <p className="flex items-center">
                        <i className="fas fa-map-marker-alt mr-3 w-5 text-blue-300"></i>
                        Biratnagar, Nepal
                      </p>
                      <p className="flex items-center">
                        <i className="fas fa-clock mr-3 w-5 text-blue-300"></i>
                        Sun-Fri: 9am - 9pm 
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-white mb-4 mt-8">Follow Me</h4>
                    <div className="flex space-x-4">
                      <a href="https://www.linkedin.com/in/md-danish-khan-76ab381b1/" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors" aria-label="LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="https://github.com/themohammaddanish" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors" aria-label="GitHub">
                        <i className="fab fa-github"></i>
                      </a>
                      <a href="https://www.behance.net/daniskhan7" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors" aria-label="Dribbble">
                        <i className="fab fa-behance"></i>
                      </a>
                      <a href="https://www.instagram.com/themohammaddanish/" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors" aria-label="Twitter">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h3>
              <p className="text-gray-600">Answers to common questions about working with me</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-lg font-bold text-gray-900 mb-2">What services do you offer?</h4>
                <p className="text-gray-600">I offer UI/UX design, web and mobile application development, branding, and consultation services for digital products.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-lg font-bold text-gray-900 mb-2">What is your typical project timeline?</h4>
                <p className="text-gray-600">Project timelines vary based on complexity, but most projects range from 2-12 weeks from concept to completion.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Do you work with clients remotely?</h4>
                <p className="text-gray-600">Yes, I work with clients globally and have established efficient remote workflows for seamless collaboration.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="text-lg font-bold text-gray-900 mb-2">What is your approach to new projects?</h4>
                <p className="text-gray-600">I start with a thorough discovery phase to understand your goals, audience, and requirements before moving into design and development.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
