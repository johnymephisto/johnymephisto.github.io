import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useScrollTracking } from "@/hooks/useScrollTracking";

const Contact = () => {
  const { trackFormSubmission, trackExternalLink } = useAnalytics();
  useScrollTracking(); // Add scroll tracking

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Track successful form submission
      trackFormSubmission('contact', true);
      
      // Reset submitted state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      setIsSubmitting(false);
      trackFormSubmission('contact', false);
      // Handle error case
    }
  };

  const handleSocialClick = (platform: string) => {
    trackExternalLink(`${platform.toLowerCase()}.com`);
  };

  return (
    <div className="min-h-screen pt-24">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="section-title">Get in Touch</h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or want to discuss collaboration opportunities?
            Feel free to reach out and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Contact Information */}
          <div className="lg:col-span-1 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="glass p-8 rounded-xl h-full">
              <h2 className="text-xl font-medium mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-3 bg-primary/5 rounded-lg">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm text-muted-foreground mb-1">Email</h3>
                    <p className="font-medium">contact@mlportfolio.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-primary/5 rounded-lg">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm text-muted-foreground mb-1">Phone</h3>
                    <p className="font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-3 bg-primary/5 rounded-lg">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm text-muted-foreground mb-1">Location</h3>
                    <p className="font-medium">San Francisco, CA</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h3 className="text-sm text-muted-foreground mb-3">Connect on</h3>
                <div className="flex space-x-4">
                  {["LinkedIn", "GitHub", "Twitter", "Medium"].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      onClick={() => handleSocialClick(platform)}
                      className="text-sm hover:text-primary transition-colors"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="glass p-8 rounded-xl">
              <h2 className="text-xl font-medium mb-6">Send a Message</h2>
              
              {submitted ? (
                <div className="bg-primary/10 p-6 rounded-xl text-center animate-slide-up">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 mb-4">
                    <Send className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground flex items-center justify-center transition-all ${
                      isSubmitting ? "opacity-70" : "hover:opacity-90"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="mr-2">Sending</span>
                        <div className="h-4 w-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin"></div>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Map or Image Placeholder */}
        <div className="mt-16 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <div className="rounded-xl overflow-hidden bg-secondary/30 h-[350px] flex items-center justify-center">
            <p className="text-muted-foreground">Map placeholder</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
