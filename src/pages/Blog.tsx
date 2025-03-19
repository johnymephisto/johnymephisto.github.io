import { useState } from "react";
import { ArrowUpRight, CalendarIcon, Search } from "lucide-react";

type Post = {
  title: string;
  excerpt: string;
  date: string;
  categories: string[];
  readTime: string;
  url: string;
};

const posts: Post[] = [
  {
    title: "An interesting use case for the ML clustering algorithm",
    excerpt: "Clustering, an unsupervised ML algorithm, can be used to extract dominant colors from an image by grouping similar pixel values.",
    date: "Mar 2019",
    categories: ["Computer Vision", "ML", "Python", "Clustering"],
    readTime: "2 min read",
    url: "https://medium.com/analytics-vidhya/an-interesting-use-case-for-the-ml-clustering-algorithm-7901278164e7",
  },
  {
    title: "Target Class-Labels in Prediction result of Tensorflow Estimator API in ML Engine",
    excerpt: "To include class names in TensorFlow Estimators API predictions on Cloud ML Engine, use tf.nn.softmax for probabilities, tf.argmax and tf.gather for predicted class names, and reshape indices to map all class names to predictions.",
    date: "Feb 2019",
    categories: ["Tensorflow", "GCP", "ML", "Python"],
    readTime: "3 min read",
    url: "https://medium.com/analytics-vidhya/target-class-labels-in-prediction-result-of-tensorflow-estimator-api-in-ml-engine-439f23cc4047",
  },
  {
    title: "How to Recursively Delete Directories from Google Cloud Storage Bucket using API's",
    excerpt: "Recursively delete directories in a Google Cloud Storage bucket by using the Objects: list API with a prefix to list all objects and the Objects: delete API to remove them, as GCS has a flat namespace without true directories.",
    date: "Feb 2018",
    categories: ["GCP", "Python"],
    readTime: "2 min read",
    url: "https://medium.com/@johnymephisto/how-to-recursively-delete-directories-from-google-cloud-storage-bucket-using-apis-fd800b72f9cf",
  },
];

// Get unique categories from all posts
const categories = Array.from(
  new Set(posts.flatMap((post) => post.categories))
).sort();

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase()) || post.excerpt
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
      
    const matchesCategory = selectedCategory 
      ? post.categories.includes(selectedCategory)
      : true;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-24">
      <div className="section-container max-w-5xl mx-auto">
        <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="section-title">Blog</h1>
          <p className="text-muted-foreground max-w-2xl">
            Articles I've written about machine learning, deep learning, and software engineering.
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
            <a 
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer" 
              className="block glass p-8 rounded-xl group hover:shadow-lg transition-all duration-300 animate-slide-up hover:-translate-y-1"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
                <div className="flex flex-wrap gap-2">
                  {post.categories.map((category, i) => (
                    <span
                      key={i}
                      className="bg-secondary/50 px-2 py-1 rounded-md text-xs"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <span>•</span>
                <div className="flex items-center">
                  <CalendarIcon className="h-3 w-3 mr-1" />
                  <span>{post.date}</span>
                </div>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-medium mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </div>
                <ArrowUpRight className="h-6 w-6 flex-shrink-0 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </a>
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
