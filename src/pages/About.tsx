import { Bug, Binary, Brain, Code, Database, Server } from "lucide-react";

const About = () => {
  const skills = [
    "Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision", 
    "Time Series", "Reinforcement Learning", "RAG", "Data Engineering", "MLOps", "LLMOps","Python", "TensorFlow/PyTorch",
    "SQL/NoSQL", "AWS/GCP/Azure", "System Design",
    "Ray", "Docker", "Kubernetes", "CI/CD", "Kubeflow/MLFLow"
  ];

  const experiences = [
    {
      title: "Senior Machine Learning Engineer",
      company: "eyeo GmbH",
      period: "2020 - Present",
      description: [
        "Developed and optimized ad classification algorithms using Graph Convolution Neural Networks for a large user base, achieving a prediction latency of ~30 ms and reducing the model size to ~700 KB for browser deployment.",
        "Built a real-time ML platform on Google Cloud (Vertex AI) for analyzing millions of daily data points, incorporating drift detection to minimize re-deployment time.",
        "Led the creation of a benchmarking system to ensure experiment uniformity and effective model performance monitoring.",
        "Automated CI pipelines, increasing test coverage and containerizing applications for seamless integration with the ML pipeline."
      ],
    },
    {
      title: "Deep Learning Engineer",
      company: "CloudSek",
      period: "2019 - 2020",
      description: [
        "Developed a Deep Learning framework for detecting fake domains, including an Image Recognition model that outperformed Google's API using YOLO, RetinaNet, and a Siamese Network in PyTorch.",
        "Implemented an NLP-based model with BERT for domain classification, significantly reducing processing times and handling up to 1 million data points daily.",
        "Enhanced the Domain Security pipeline, optimizing tasks from data crawling to inference with containers and a custom Redis queue, cutting processing times by 50%.",
        "Created a repository classification system to detect leaked client data, improving reliability by 30% using XGBoost and an Ensemble of Multilayer Perceptron models."
      ],
    },
    {
      title: "Software Engineer",
      company: "Vanenburg Software",
      period: "2017 - 2019",
      description: [
        "Worked on various machine learning projects like predictions and trends on time-series data, text classification, image classification using transfer learning, chatbots, etc.",
      ],
    },
  ];

  const education = [
    {
      degree: "B. Tech Computer Science and Engineering",
      // specialization: "8.58 CGPA",
      institution: "Rajagiri School of Engineering and Technology",
      year: "2013 - 2017",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <div className="section-container">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-20 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="section-title">About Me</h1>
          <p className="text-muted-foreground">
            I have always found solving problems interesting. Through the years, the tools I use and the problems I solve have changed. 
          </p>
        </div>

        {/* Bio Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          <div className="md:col-span-1 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="aspect-square rounded-2xl overflow-hidden bg-secondary/30 flex items-center justify-center mb-6">
              <div className="relative w-full h-full flex items-center justify-center">
                <Brain className="h-24 w-24 text-primary/30 animate-pulse-slow" />
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            {/* <h2 className="text-2xl font-medium mb-6">Biography</h2> */}
            <div className="space-y-4 text-muted-foreground">
              <p>
                With over 7 years of experience in machine learning and artificial intelligence,
                I specialize in developing sophisticated algorithms and models that drive business value
                and technological advancement.
              </p>
              <p>
                My expertise spans various domains including computer vision, natural language processing, time series and classic machine learning. 
                I'm an ML Engineer who is a builder first so I like to build meticulously engineered systems that are scalable and ready for the real world.
              </p>
              <p>
                Throughout my career, I have worked on variety of projects in different domains like Cybersecurity, manufacturing, Finance, Adtech, etc. This was interesting
                as I could explore the different type of problems that could be solved using Machine Learning.
              </p>
              <p>
                In my free time, I do a lot of sports and play the guitar. Currently obsessed with bouldering :)
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div>
                <h3 className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Email</h3>
                <p>johnyjose95@gmail.com</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Location</h3>
                <p>Berlin, Germany</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Employment</h3>
                <p>Open to opportunities</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Languages</h3>
                <p>English, Malayalam</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills - Changed to a simple list */}
        <div className="mb-20 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-2xl font-medium mb-6">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-secondary/20 px-4 py-3 rounded-lg animate-slide-up text-center"
                style={{ animationDelay: `${0.1 + index * 0.02}s` }}
              >
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="mb-20 animate-slide-up" style={{ animationDelay: "0.5s" }}>
          <h2 className="text-2xl font-medium mb-6">Professional Experience</h2>
          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-10 pb-8 border-l border-border">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div className="text-sm text-muted-foreground mb-1">{exp.period}</div>
                <h3 className="text-xl font-medium mb-1">{exp.title}</h3>
                <div className="text-muted-foreground mb-3">{exp.company}</div>
                <ul className="list-disc pl-4 text-muted-foreground space-y-1">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-20 animate-slide-up" style={{ animationDelay: "0.6s" }}>
          <h2 className="text-2xl font-medium mb-6">Education</h2>
          <div className="space-y-10">
            {education.map((edu, index) => (
              <div key={index} className="relative pl-10 pb-8 border-l border-border">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div className="text-sm text-muted-foreground mb-1">{edu.year}</div>
                <h3 className="text-xl font-medium mb-1">{edu.degree}</h3>
                <div className="text-muted-foreground mb-1">{edu.specialization}</div>
                <p className="text-muted-foreground">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Areas */}
        <div className="animate-slide-up" style={{ animationDelay: "0.7s" }}>
          <h2 className="text-2xl font-medium mb-10">Core Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="h-8 w-8" />,
                title: "Machine Learning",
                description: "Model development, feature engineering, and algorithm optimization.",
              },
              {
                icon: <Binary className="h-8 w-8" />,
                title: "Deep Learning",
                description: "Neural network architecture design and implementation.",
              },
              {
                icon: <Code className="h-8 w-8" />,
                title: "Software Engineering",
                description: "Building robust, scalable, and maintainable ML applications.",
              },
              {
                icon: <Database className="h-8 w-8" />,
                title: "System Architecture and Design",
                description: "Creating efficient architecture and solutions.",
              },
              {
                icon: <Server className="h-8 w-8" />,
                title: "MLOps",
                description: "Automating the ML lifecycle from development to deployment.",
              },
              {
                icon: <Bug className="h-8 w-8" />,
                title: "Debugging",
                description: "I enjoy debugging and finding what goes wrong.",
              },
            ].map((area, index) => (
              <div key={index} className="glass p-8 rounded-xl">
                <div className="mb-4">{area.icon}</div>
                <h3 className="text-xl font-medium mb-2">{area.title}</h3>
                <p className="text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
