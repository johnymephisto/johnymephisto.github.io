import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
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

        <div className="max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="glass p-8 rounded-xl">
            <h2 className="text-xl font-medium mb-8 text-center">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="p-3 bg-primary/5 rounded-lg">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm text-muted-foreground mb-1">Email</h3>
                  <a href="mailto:johnyjose95@gmail.com" className="font-medium hover:text-primary transition-colors">
                    johnyjose95@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-primary/5 rounded-lg">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <h3 className="text-sm text-muted-foreground mb-1">Location</h3>
                  <p className="font-medium">Berlin, Germany</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t">
              <h3 className="text-sm text-muted-foreground mb-4 text-center">Connect on</h3>
              <div className="flex justify-center space-x-6">
                {[
                  { name: "LinkedIn", url: "https://www.linkedin.com/in/johny-jose/" },
                  { name: "GitHub", url: "https://github.com/johnymephisto" },
                  { name: "Medium", url: "https://medium.com/@johnymephisto" },
                ].map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {platform.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
