
import { BarChart, Binary, Brain, Code, Database, Server } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Machine Learning", level: 90 },
    { name: "Deep Learning", level: 85 },
    { name: "Natural Language Processing", level: 80 },
    { name: "Computer Vision", level: 75 },
    { name: "Data Engineering", level: 85 },
    { name: "MLOps", level: 80 },
    { name: "Python", level: 95 },
    { name: "TensorFlow/PyTorch", level: 85 },
  ];

  const experiences = [
    {
      title: "Senior Machine Learning Engineer",
      company: "AI Solutions Inc.",
      period: "2021 - Present",
      description:
        "Leading development of production ML systems. Designed and implemented sophisticated deep learning models for computer vision and NLP tasks.",
    },
    {
      title: "Machine Learning Engineer",
      company: "Data Insights Corp",
      period: "2018 - 2021",
      description:
        "Developed predictive models and recommendation systems. Optimized ML pipelines and infrastructure for scalability.",
    },
    {
      title: "Data Scientist",
      company: "Tech Innovations",
      period: "2016 - 2018",
      description:
        "Analyzed large datasets to extract valuable insights. Created data visualization dashboards and machine learning prototypes.",
    },
  ];

  const education = [
    {
      degree: "Ph.D. in Computer Science",
      specialization: "Machine Learning",
      institution: "University of Technology",
      year: "2016",
    },
    {
      degree: "M.S. in Data Science",
      specialization: "Artificial Intelligence",
      institution: "Science University",
      year: "2013",
    },
    {
      degree: "B.S. in Computer Engineering",
      specialization: "Software Systems",
      institution: "Institute of Technology",
      year: "2011",
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <div className="section-container">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-20 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <h1 className="section-title">About Me</h1>
          <p className="text-muted-foreground">
            A passionate machine learning engineer dedicated to building intelligent systems
            that solve complex problems and drive innovation.
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
            <h2 className="text-2xl font-medium mb-6">Biography</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                With over 7 years of experience in machine learning and artificial intelligence,
                I specialize in developing sophisticated algorithms and models that drive business value
                and technological advancement.
              </p>
              <p>
                My expertise spans various domains including computer vision, natural language processing,
                and reinforcement learning. I'm passionate about creating scalable ML systems that can 
                operate effectively in production environments.
              </p>
              <p>
                Throughout my career, I've collaborated with cross-functional teams to deliver
                impactful solutions across industries including healthcare, finance, and e-commerce.
                I'm constantly learning and exploring new techniques to stay at the forefront of AI innovation.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div>
                <h3 className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Email</h3>
                <p>contact@mlportfolio.com</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Location</h3>
                <p>San Francisco, CA</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Employment</h3>
                <p>Open to opportunities</p>
              </div>
              <div>
                <h3 className="text-sm text-muted-foreground uppercase tracking-wide mb-2">Languages</h3>
                <p>English, Spanish</p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-20 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-2xl font-medium mb-6">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
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
                <p className="text-muted-foreground">{exp.description}</p>
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
                title: "Data Engineering",
                description: "Creating efficient data pipelines and storage solutions.",
              },
              {
                icon: <Server className="h-8 w-8" />,
                title: "MLOps",
                description: "Automating the ML lifecycle from development to deployment.",
              },
              {
                icon: <BarChart className="h-8 w-8" />,
                title: "Data Analysis",
                description: "Extracting insights through statistical analysis and visualization.",
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
