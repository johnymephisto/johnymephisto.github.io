
import { useState } from "react";
import { ArrowUpRight, Filter } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Neural Network Visualization",
    description: "Interactive tool for visualizing neural network architectures and training processes in real-time.",
    image: "",
    tags: ["PyTorch", "React", "D3.js", "Deep Learning"],
    link: "#",
  },
  {
    id: 2,
    title: "Sentiment Analysis API",
    description: "Real-time sentiment analysis system for social media monitoring and customer feedback analysis.",
    image: "",
    tags: ["NLP", "FastAPI", "TensorFlow", "Cloud"],
    link: "#",
  },
  {
    id: 3,
    title: "Anomaly Detection System",
    description: "Machine learning system that identifies anomalies in time-series data for predictive maintenance.",
    image: "",
    tags: ["Time Series", "Scikit-learn", "Python", "Data Processing"],
    link: "#",
  },
  {
    id: 4,
    title: "Image Classification Model",
    description: "Computer vision model for identifying and classifying objects in images with high accuracy.",
    image: "",
    tags: ["Computer Vision", "CNN", "PyTorch", "Deep Learning"],
    link: "#",
  },
  {
    id: 5,
    title: "Recommendation Engine",
    description: "Personalized recommendation system using collaborative filtering and content-based approaches.",
    image: "",
    tags: ["Recommender Systems", "Python", "Spark", "Big Data"],
    link: "#",
  },
  {
    id: 6,
    title: "Natural Language Query Interface",
    description: "System that translates natural language questions into database queries for data analysis.",
    image: "",
    tags: ["NLP", "SQL", "BERT", "Transformers"],
    link: "#",
  },
];

const TAGS = Array.from(new Set(projects.flatMap((project) => project.tags))).sort();

const Projects = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const clearTags = () => setSelectedTags([]);

  const filteredProjects = selectedTags.length
    ? projects.filter((project) =>
        selectedTags.some((tag) => project.tags.includes(tag))
      )
    : projects;

  return (
    <div className="min-h-screen pt-24">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <h1 className="section-title">Projects</h1>
            <p className="text-muted-foreground max-w-2xl">
              A showcase of my work in machine learning, data science, and AI applications.
              Each project demonstrates different techniques and technologies.
            </p>
          </div>

          {/* Filters */}
          <div className="mt-12 mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="flex items-center justify-between">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center text-sm font-medium space-x-2 px-4 py-2 rounded-lg border border-border hover:bg-secondary transition-colors"
              >
                <Filter className="h-4 w-4" />
                <span>Filter Projects</span>
              </button>

              {selectedTags.length > 0 && (
                <button
                  onClick={clearTags}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Clear filters
                </button>
              )}
            </div>

            {isFilterOpen && (
              <div className="mt-4 p-6 glass rounded-xl">
                <h3 className="text-sm font-medium mb-4">Filter by technology</h3>
                <div className="flex flex-wrap gap-2">
                  {TAGS.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1 rounded-full text-xs transition-colors ${
                        selectedTags.includes(tag)
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass rounded-xl overflow-hidden group hover:shadow-lg transition-shadow duration-300 animate-slide-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="aspect-video bg-secondary/50 relative"></div>
              <div className="p-8">
                <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        selectedTags.includes(tag)
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-sm font-medium inline-flex items-center hover:underline"
                  rel="noopener noreferrer"
                >
                  View project
                  <ArrowUpRight className="ml-1 h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 animate-slide-up">
            <h3 className="text-xl font-medium mb-2">No projects match your filters</h3>
            <p className="text-muted-foreground mb-4">
              Try selecting different technologies or clear your filters
            </p>
            <button
              onClick={clearTags}
              className="px-4 py-2 mt-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
