
import { ArrowRight, Brain, Code, Database, Server } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary-foreground/80 text-sm font-medium mb-4">
                  Machine Learning Engineer
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Creating intelligent solutions with data and algorithms
                </h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                  Specialized in developing machine learning models and systems that solve complex problems and deliver real-world impact.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-6 py-3 rounded-lg border border-border hover:bg-secondary transition-colors"
                >
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="relative animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="aspect-square rounded-2xl overflow-hidden bg-secondary/30 flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  <Brain className="h-32 w-32 text-primary/30 animate-pulse-slow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24">
        <div className="container px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <h2 className="section-title">Specialized Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With expertise in various machine learning domains, I build intelligent systems
              that deliver real value to users and businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: <Brain className="h-10 w-10" />,
                title: "Machine Learning",
                description:
                  "Developing models for classification, regression, and clustering using various algorithms and techniques.",
                delay: "0.2s",
              },
              {
                icon: <Database className="h-10 w-10" />,
                title: "Data Engineering",
                description:
                  "Building robust data pipelines and infrastructure to support ML systems at scale.",
                delay: "0.3s",
              },
              {
                icon: <Code className="h-10 w-10" />,
                title: "Deep Learning",
                description:
                  "Creating neural network architectures for computer vision, NLP, and reinforcement learning tasks.",
                delay: "0.4s",
              },
              {
                icon: <Server className="h-10 w-10" />,
                title: "MLOps",
                description:
                  "Implementing practices for deployment, monitoring, and maintenance of ML systems in production.",
                delay: "0.5s",
              },
            ].map((skill, index) => (
              <div 
                key={index} 
                className="glass p-8 rounded-xl animate-slide-up"
                style={{ animationDelay: skill.delay }}
              >
                <div className="p-3 bg-primary/5 rounded-lg inline-block mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-medium mb-3">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container px-6 mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="section-title">Featured Projects</h2>
              <p className="text-muted-foreground max-w-xl">
                A selection of my recent work in machine learning and AI.
              </p>
            </div>
            <Link
              to="/projects"
              className="hidden md:inline-flex items-center text-sm font-medium hover:underline"
            >
              View all projects
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Neural Network Visualization",
                description:
                  "Interactive tool for visualizing neural network architectures and training processes.",
                tags: ["PyTorch", "React", "D3.js"],
                delay: "0.2s",
              },
              {
                title: "Sentiment Analysis API",
                description:
                  "Real-time sentiment analysis system for social media monitoring and customer feedback analysis.",
                tags: ["NLP", "FastAPI", "TensorFlow"],
                delay: "0.3s",
              },
            ].map((project, index) => (
              <div 
                key={index} 
                className="glass rounded-xl overflow-hidden group hover:shadow-lg transition-shadow duration-300 animate-slide-up"
                style={{ animationDelay: project.delay }}
              >
                <div className="aspect-video bg-secondary/50 relative"></div>
                <div className="p-8">
                  <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/projects`}
                    className="text-sm font-medium inline-flex items-center hover:underline"
                  >
                    View project details
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link
              to="/projects"
              className="inline-flex items-center text-sm font-medium hover:underline"
            >
              View all projects
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-24">
        <div className="container px-6 mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="section-title">From the Blog</h2>
              <p className="text-muted-foreground max-w-xl">
                Thoughts, insights, and updates on machine learning and AI.
              </p>
            </div>
            <Link
              to="/blog"
              className="hidden md:inline-flex items-center text-sm font-medium hover:underline"
            >
              All articles
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Explainable AI: Making ML Models Transparent",
                excerpt: "How explainable AI techniques help us understand complex machine learning models.",
                date: "May 28, 2023",
                delay: "0.2s",
              },
              {
                title: "Transformers in NLP: Beyond BERT",
                excerpt: "Exploring the latest innovations in transformer architecture for natural language processing.",
                date: "April 15, 2023",
                delay: "0.3s",
              },
              {
                title: "Ethical Considerations in Machine Learning",
                excerpt: "Addressing bias, fairness, and transparency in modern ML systems.",
                date: "March 10, 2023",
                delay: "0.4s",
              },
            ].map((post, index) => (
              <div 
                key={index} 
                className="glass rounded-xl overflow-hidden group hover:shadow-lg transition-shadow duration-300 animate-slide-up"
                style={{ animationDelay: post.delay }}
              >
                <div className="p-8">
                  <div className="text-xs font-medium text-muted-foreground mb-3">
                    {post.date}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Link
                    to={`/blog`}
                    className="text-sm font-medium inline-flex items-center hover:underline"
                  >
                    Read more
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Link
              to="/blog"
              className="inline-flex items-center text-sm font-medium hover:underline"
            >
              All articles
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-lg font-medium mb-2">ML Engineer</div>
              <p className="text-sm text-muted-foreground">
                © 2023 All rights reserved
              </p>
            </div>
            <div className="flex space-x-6">
              {["LinkedIn", "GitHub", "Twitter", "Email"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
