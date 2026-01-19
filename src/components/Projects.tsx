import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Bot, Leaf, HeartPulse, Brain } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

export function Projects() {
  const projects = [
    {
      title: "Marine Waste Detection & Tracking",
      description:
        "Deep learning–based computer vision system for detecting and tracking marine waste using YOLO models and DeepSORT. Includes model training, inference with Streamlit, and environmental impact analysis.",
      icon: Leaf,
      tech: [
        "Python",
        "YOLOv9",
        "Deep Learning",
        "Computer Vision",
        "DeepSORT",
        "Streamlit",
      ],
      gradient: "from-orange-400 to-red-500",
      github: "https://github.com/ariyaayesha/maarine-waste",
    },
    {
      title: "Heart Failure Prediction System",
      description:
        "Machine learning project for early prediction of heart failure using clinical patient data. Includes EDA, feature engineering, model training, and evaluation for healthcare decision support.",
      icon: HeartPulse,
      tech: [
        "Python",
        "Machine Learning",
        "EDA",
        "Healthcare AI",
        "Model Evaluation",
      ],
      gradient: "from-blue-400 to-purple-500",
      github: "https://github.com/ariyaayesha/Heart-Failure-Prediction",
    },
    {
      title: "Diabetes Prediction System",
      description:
        "Predictive machine learning system for identifying diabetes risk using medical and lifestyle data. Focuses on preprocessing, feature selection, and model evaluation.",
      icon: HeartPulse,
      tech: [
        "Python",
        "Scikit-learn",
        "Machine Learning",
        "Data Analysis",
        "EDA",
      ],
      gradient: "from-green-400 to-blue-500",
      github: "https://github.com/ariyaayesha/Diabetes-Prediction",
    },
    {
      title: "Fruit & Vegetable Image Classification",
      description:
        "CNN-based deep learning project for classifying fruits and vegetables using image data. Includes preprocessing, training, and performance analysis.",
      icon: Bot,
      tech: ["Python", "Deep Learning", "CNN", "Image Classification"],
      gradient: "from-indigo-400 to-purple-500",
      github: "https://github.com/ariyaayesha/Fruit-classificcation",
    },
    {
      title: "NLP-Based Vulnerable Content Detection",
      description:
        "Natural language processing project for detecting vulnerable and sensitive content using text preprocessing, TF-IDF, and supervised machine learning models.",
      icon: Brain,
      tech: [
        "Python",
        "NLP",
        "Text Classification",
        "TF-IDF",
        "Content Moderation",
      ],
      gradient: "from-pink-400 to-rose-500",
      github: "https://github.com/ariyaayesha/Vulnerable-Content-Analysis",
    },
    {
      title: "ShopeVerse – E-commerce Website",
      description:
        "Frontend-focused e-commerce web application with product browsing, cart management, and responsive UI design.",
      icon: Bot,
      tech: ["HTML", "CSS", "JavaScript", "PHP", "UI Design"],
      gradient: "from-cyan-400 to-blue-500",
      github: "https://github.com/ariyaayesha/ShopeVerse",
    },
     {
      title: "Student Performance Analysis Dashboard",
      description:
        "Data analysis project focused on evaluating student academic performance using structured educational datasets. The project involves data cleaning, exploratory data analysis, and interactive dashboard creation in Power BI to identify performance trends, subject-wise outcomes, and factors affecting student results.",
      icon: Bot,
      tech: ["Data Analysis",
    "Power BI",
    "Data Visualization",
    "Exploratory Data Analysis (EDA)",
    "SQL",
    "Excel"],
      gradient: "from-cyan-400 to-blue-500",
      github: "https://github.com/ariyaayesha/Strudent_Performance_Analysis_Dashboard",
    },
     {
      title: "Smart Traffic Control System (IoT & Embedded)",
      description:
        "IoT-based smart traffic control system developed using Arduino to dynamically manage traffic signals based on real-time conditions. The project focuses on reducing congestion and improving traffic flow through sensor-based automation and embedded system programming.",
      icon: Bot,
      tech: [  "Arduino",
    "Embedded Systems",
    "IoT",
    "C/C++",
    "Sensors",
    "Automation"],
      gradient: "from-cyan-400 to-blue-500",
      github: "https://github.com/ariyaayesha/Smart-Traffic-Control-System",
    },
     {
      title: "Women Safety App",
      description:
        "Mobile-based women safety application designed to provide quick emergency assistance. The app enables users to send alerts and location information during critical situations, aiming to enhance personal safety through technology-driven solutions.",
      icon: Bot ,
      tech: [ "Android",
    "Mobile Application Development",
    "GPS",
    "Emergency Alert System",
    "User-Centered Design"],
      gradient: "from-cyan-400 to-blue-500",
      github: "https://github.com/ariyaayesha/Women-Safety-App",
    },
    {
      title: "DIU Bus Tracking System",
      description:
        "Java-based bus tracking system developed as an academic project to manage and monitor university bus information. The project focuses on system design, tracking logic, and structured handling of transportation data to improve campus bus management and accessibility.",
      icon: Leaf,
      tech: [
        "JAVA",
        "OOP",
        "DBMS",
        "Basic Linux",
        "API",
      ],
      gradient: "from-orange-400 to-red-500",
      github: "https://github.com/ariyaayesha/Smart-Traffic-Control-System",
    },

  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Selected AI, ML, NLP, and full-stack projects demonstrating real-world problem solving
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <Card className="bg-gray-900/50 border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`p-3 rounded-full bg-gradient-to-r ${project.gradient}`}
                    >
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <Button
                      asChild
                      size="sm"
                      variant="ghost"
                      className="text-gray-400 hover:text-blue-400"
                    >
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github size={16} />
                      </a>
                    </Button>
                  </div>
                  <CardTitle className="text-white">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
