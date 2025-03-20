import { ArrowRight, Github, Linkedin, Mail, Notebook} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { TypeWriter } from "@/components/TypeWriter";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Simplified */}
      <section className="min-h-screen flex items-center justify-center relative pt-16">
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <TypeWriter 
                  text="Hey there :)" 
                  delay={150}
                />
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                I am Johny Jose, a Machine Learning Engineer. I work at eyeo building ML powered adblocking solutions. I like solving problems and exploring tools.
              </p>
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary mb-4">
                Machine Learning Engineer
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-4 py-6">
                <a 
                  href="https://github.com/johnymephisto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/johny-jose/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://medium.com/@johnymephisto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary/50 hover:bg-secondary transition-colors"
                  aria-label="Medium"
                >
                  <Notebook className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:johnyjose95@gmail.com" 
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
              © 2025 Johny Jose
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
