
import { useState } from "react";
import { ArrowRight, CalendarIcon, Search } from "lucide-react";
import { Link } from "react-router-dom";

type Post = {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
};

const posts: Post[] = [
  {
    id: 1,
    title: "Explainable AI: Making ML Models Transparent",
    excerpt: "How explainable AI techniques help us understand complex machine learning models and build trust with users and stakeholders.",
    date: "May 28, 2023",
    category: "Machine Learning",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Transformers in NLP: Beyond BERT",
    excerpt: "Exploring the latest innovations in transformer architecture for natural language processing and how they're advancing the field.",
    date: "April 15, 2023",
    category: "Natural Language Processing",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Ethical Considerations in Machine Learning",
    excerpt: "Addressing bias, fairness, and transparency in modern ML systems to ensure responsible AI development and deployment.",
    date: "March 10, 2023",
    category: "Ethics",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Building Efficient Data Pipelines for ML",
    excerpt: "Best practices for creating scalable, maintainable data pipelines that power machine learning applications.",
    date: "February 22, 2023",
    category: "Data Engineering",
    readTime: "8 min read",
  },
  {
    id: 5,
    title: "The State of Reinforcement Learning in 2023",
    excerpt: "An overview of the latest advancements in reinforcement learning algorithms and applications.",
    date: "January 18, 2023",
    category: "Reinforcement Learning",
    readTime: "9 min read",
  },
  {
    id: 6,
    title: "From Research to Production: Deploying ML Models",
    excerpt: "A comprehensive guide to transitioning machine learning models from research environments to production systems.",
    date: "December 5, 2022",
    category: "MLOps",
    readTime: "10 min read",
  },
];

const categories = Array.from(new Set(posts.map((post) => post.category))).sort();

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase()) || post.excerpt
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
      
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-24">
      <div className="section-container max-w-5xl mx-auto">
        <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="section-title">Blog</h1>
          <p className="text-muted-foreground max-w-2xl">
            Thoughts, insights, and updates on machine learning, AI, and related technologies.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mt-12 space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 bg-background"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                selectedCategory === null
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Posts */}
        <div className="mt-12 space-y-10">
          {filteredPosts.map((post, index) => (
            <div 
              key={post.id}
              className="glass p-8 rounded-xl group hover:shadow-lg transition-shadow duration-300 animate-slide-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="flex items-center space-x-3 text-sm text-muted-foreground mb-4">
                <span>{post.category}</span>
                <span>•</span>
                <div className="flex items-center">
                  <CalendarIcon className="h-3 w-3 mr-1" />
                  <span>{post.date}</span>
                </div>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <h2 className="text-2xl font-medium mb-3">{post.title}</h2>
              <p className="text-muted-foreground mb-6">{post.excerpt}</p>
              
              <Link
                to={`/blog/${post.id}`}
                className="inline-flex items-center text-sm font-medium group-hover:underline"
              >
                Read article
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20 animate-slide-up">
            <h3 className="text-xl font-medium mb-2">No articles found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory(null);
              }}
              className="px-4 py-2 mt-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Reset filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
