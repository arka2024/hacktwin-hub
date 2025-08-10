import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Leaf, Shield, Smartphone, Globe, Heart } from "lucide-react";

const problemStatements = [
  {
    id: 1,
    title: "AI-Powered Healthcare Assistant",
    description: "Develop an AI-driven platform that can diagnose common health issues, provide medical recommendations, and connect patients with healthcare professionals.",
    category: "Healthcare",
    difficulty: "Hard",
    prize: "₹40,000",
    icon: Heart,
    tags: ["AI/ML", "Healthcare", "APIs"],
    details: "Build a comprehensive healthcare assistant that uses machine learning to analyze symptoms, provide preliminary diagnoses, and offer health recommendations. The solution should include patient data management, appointment scheduling, and telemedicine integration."
  },
  {
    id: 2,
    title: "Sustainable Smart City Dashboard",
    description: "Create a real-time dashboard for monitoring and optimizing resource usage in smart cities including energy, water, and waste management.",
    category: "Sustainability",
    difficulty: "Medium",
    prize: "₹30,000",
    icon: Leaf,
    tags: ["IoT", "Data Visualization", "Sustainability"],
    details: "Design an interactive dashboard that aggregates data from various city sensors and systems. Include features for energy consumption tracking, waste management optimization, water usage monitoring, and citizen engagement tools."
  },
  {
    id: 3,
    title: "Cybersecurity Threat Detection",
    description: "Build an advanced cybersecurity system that can detect, analyze, and respond to various types of cyber threats in real-time.",
    category: "Security",
    difficulty: "Hard",
    prize: "₹35,000",
    icon: Shield,
    tags: ["Cybersecurity", "Machine Learning", "Real-time"],
    details: "Develop a comprehensive threat detection system using machine learning algorithms to identify suspicious activities, malware, and potential security breaches. Include automated response mechanisms and detailed threat analysis reports."
  },
  {
    id: 4,
    title: "Education Technology Platform",
    description: "Design an innovative EdTech solution that personalizes learning experiences and makes education more accessible and engaging.",
    category: "Education",
    difficulty: "Medium",
    prize: "₹25,000",
    icon: Brain,
    tags: ["EdTech", "Personalization", "Mobile"],
    details: "Create a learning platform that adapts to individual student needs, provides personalized curriculum, includes gamification elements, and offers offline capabilities for students in remote areas."
  },
  {
    id: 5,
    title: "Blockchain-Based Supply Chain",
    description: "Develop a transparent and traceable supply chain management system using blockchain technology.",
    category: "Blockchain",
    difficulty: "Hard",
    prize: "₹30,000",
    icon: Globe,
    tags: ["Blockchain", "Supply Chain", "Transparency"],
    details: "Build a decentralized supply chain tracking system that ensures transparency, reduces fraud, and enables consumers to trace products from origin to delivery. Include smart contracts for automated transactions."
  },
  {
    id: 6,
    title: "Mental Health Support App",
    description: "Create a mobile application that provides mental health support, mood tracking, and connects users with mental health professionals.",
    category: "Healthcare",
    difficulty: "Easy",
    prize: "₹20,000",
    icon: Smartphone,
    tags: ["Mobile App", "Mental Health", "UI/UX"],
    details: "Design a user-friendly mobile app that offers mood tracking, meditation guidance, mental health resources, crisis support, and easy access to licensed therapists and counselors."
  }
];

export const ProblemStatements = () => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "bg-cyber-green/20 text-cyber-green border-cyber-green/30";
      case "medium":
        return "bg-cyber-blue/20 text-cyber-blue border-cyber-blue/30";
      case "hard":
        return "bg-cyber-pink/20 text-cyber-pink border-cyber-pink/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="problems" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyber-purple to-cyber-blue bg-clip-text text-transparent">
              Problem Statements
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from diverse challenges spanning AI, sustainability, security, and social impact. 
            Each problem comes with detailed requirements and exciting prizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problemStatements.map((problem) => {
            const IconComponent = problem.icon;
            return (
              <Card key={problem.id} className="group hover:scale-105 transition-all duration-300 bg-card border-border/50 hover:border-cyber-blue/50 hover:shadow-lg hover:shadow-cyber-blue/10">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-cyber-purple/20 to-cyber-blue/20 mb-4">
                      <IconComponent className="w-8 h-8 text-cyber-purple" />
                    </div>
                    <div className="text-right">
                      <Badge className={getDifficultyColor(problem.difficulty)}>
                        {problem.difficulty}
                      </Badge>
                      <div className="text-2xl font-bold text-cyber-green mt-2">
                        {problem.prize}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-cyber-blue transition-colors">
                    {problem.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {problem.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {problem.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="text-sm text-muted-foreground">
                      <strong className="text-cyber-purple">Category:</strong> {problem.category}
                    </div>
                    
                    <details className="text-sm">
                      <summary className="cursor-pointer text-cyber-blue hover:text-cyber-purple transition-colors">
                        View Details
                      </summary>
                      <p className="mt-2 text-muted-foreground">
                        {problem.details}
                      </p>
                    </details>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};