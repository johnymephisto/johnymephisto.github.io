
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Simplified */}
      <section className="min-h-screen flex items-center justify-center relative pt-16">
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
                Machine Learning Engineer
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Creating intelligent solutions
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                I build machine learning models and systems that solve complex problems 
                and deliver real-world impact.
              </p>

              {/* Social Links */}
              <div className="flex justify-center space-x-4 py-6">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:contact@example.com" 
                  className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <Button asChild size="lg">
                  <Link to="/about">
                    About Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/projects">
                    View Projects
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Simplified */}
      <footer className="py-6 border-t">
        <div className="container px-6 mx-auto">
          <div className="flex justify-center items-center">
            <p className="text-sm text-muted-foreground">
              © 2023 All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
