"use client";

import { useState } from "react";
import Link from "next/link";
import Socials from "@/components/Socials";

const tabs = [
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" }
];

export default function Resume() {
  const [activeTab, setActiveTab] = useState("education");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "education":
        return (
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="text-4xl font-bold text-white">My <span className="text-accent">Education</span></h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
              A blend of formal education and self-directed learning, focusing on Computer Science and Machine Learning.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mt-8">
              <div className="bg-[#232329] h-[220px] rounded-xl flex flex-col justify-between items-start border border-transparent hover:border-accent transition-all duration-300" style={{ padding: '24px' }}>
                <div className="w-full">
                  <div className="mb-2">
                    <span className="text-accent text-sm">2025 - 2027 (Expected)</span>
                  </div>
                  <h3 className="text-lg font-semibold leading-tight mb-2">University of Pennsylvania</h3>
                  <p className="text-white/60 text-sm leading-tight overflow-hidden overflow-ellipsis line-clamp-2">
                    M.S.E. in Computer Science
                  </p>
                  <p className="text-accent text-sm font-medium mt-1">
                    GPA: 4.0/4.0
                  </p>
                </div>
                <a href="https://drive.google.com/file/d/1HiZEMYNuxsv1JGB_5pWICdEKMsG1oZ8d/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full mt-4">
                  <button className="w-full bg-transparent border border-white/20 text-white hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300 py-2 px-4 rounded-lg text-sm font-medium">
                    Transcript
                  </button>
                </a>
              </div>
              <div className="bg-[#232329] h-[220px] rounded-xl flex flex-col justify-between items-start border border-transparent hover:border-accent transition-all duration-300" style={{ padding: '24px' }}>
                <div className="w-full">
                  <div className="mb-2">
                    <span className="text-accent text-sm">2023 - 2027 (Expected)</span>
                  </div>
                  <h3 className="text-lg font-semibold leading-tight mb-2">University of Pennsylvania</h3>
                  <p className="text-white/60 text-sm leading-tight overflow-hidden overflow-ellipsis line-clamp-2">
                    B.S.E. in Computer Science
                  </p>
                  <p className="text-accent text-sm font-medium mt-1">
                    GPA: 3.65/4.0
                  </p>
                </div>
                <a href="https://drive.google.com/file/d/1HiZEMYNuxsv1JGB_5pWICdEKMsG1oZ8d/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full mt-4">
                  <button className="w-full bg-transparent border border-white/20 text-white hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300 py-2 px-4 rounded-lg text-sm font-medium">
                    Transcript
                  </button>
                </a>
              </div>
              <div className="bg-[#232329] h-[220px] rounded-xl flex flex-col justify-between items-start border border-transparent hover:border-accent transition-all duration-300" style={{ padding: '24px' }}>
                <div className="w-full">
                  <div className="mb-2">
                    <span className="text-accent text-sm">2022 - 2023</span>
                  </div>
                  <h3 className="text-lg font-semibold leading-tight mb-2">DataCamp</h3>
                  <p className="text-white/60 text-sm leading-tight overflow-hidden overflow-ellipsis line-clamp-2">
                    Python for Data Science
                  </p>
                </div>
                <a href="https://www.datacamp.com/statement-of-accomplishment/track/3cadbaf2b96f07eab05ab621c081630a8440683e?raw=1" target="_blank" rel="noopener noreferrer" className="w-full mt-4">
                  <button className="w-full bg-transparent border border-white/20 text-white hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300 py-2 px-4 rounded-lg text-sm font-medium">
                    Certificate
                  </button>
                </a>
              </div>
              <div className="bg-[#232329] h-[220px] rounded-xl flex flex-col justify-between items-start border border-transparent hover:border-accent transition-all duration-300" style={{ padding: '24px' }}>
                <div className="w-full">
                  <div className="mb-2">
                    <span className="text-accent text-sm">2021 - 2022</span>
                  </div>
                  <h3 className="text-lg font-semibold leading-tight mb-2">Open Dreams Educational NGO</h3>
                  <p className="text-white/60 text-sm leading-tight overflow-hidden overflow-ellipsis line-clamp-2">
                    Educational Access and Scholarship Mentorship and Community Engagement
                  </p>
                </div>
                <a href="https://drive.google.com/file/d/1cDi4GBMqEjjz0jUkoGf6atXPlv2AKrSL/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full mt-4">
                  <button className="w-full bg-transparent border border-white/20 text-white hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300 py-2 px-4 rounded-lg text-sm font-medium">
                    Certificate
                  </button>
                </a>
              </div>
              <div className="bg-[#232329] h-[220px] rounded-xl flex flex-col justify-between items-start border border-transparent hover:border-accent transition-all duration-300" style={{ padding: '24px' }}>
                <div className="w-full">
                  <div className="mb-2">
                    <span className="text-accent text-sm">2019 - 2021</span>
                  </div>
                  <h3 className="text-lg font-semibold leading-tight mb-2">High School</h3>
                  <p className="text-white/60 text-sm leading-tight overflow-hidden overflow-ellipsis line-clamp-2">
                    Government Bilingual High School Etoug-Ebe
                  </p>
                  <p className="text-accent text-sm font-medium mt-1">
                    GPA: 4.0/4.0
                  </p>
                </div>
                <a href="https://drive.google.com/file/d/1b-HlE_u4KGKN6QwVxxfSoor-uyJz2FQK/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="w-full mt-4">
                  <button className="w-full bg-transparent border border-white/20 text-white hover:bg-accent hover:text-primary hover:border-accent transition-all duration-300 py-2 px-4 rounded-lg text-sm font-medium">
                    Diploma
                  </button>
                </a>
              </div>
            </div>
          </div>
        );
      case "experience":
        return (
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="text-4xl font-bold text-white">My <span className="text-accent">Experience</span></h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
              An Overview of my impactful roles in software engineering, machine learning, and community engagement.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mt-8">
              <div className="bg-[#232329] h-[220px] rounded-xl flex flex-col justify-between items-start border border-transparent hover:border-accent transition-all duration-300" style={{ padding: '24px' }}>
                <div className="w-full">
                  <div className="mb-2">
                    <span className="text-accent text-sm">Sept 2025 - Present</span>
                  </div>
                  <h3 className="text-lg font-semibold leading-tight mb-2">AI4ALL Ignite Fellow</h3>
                  <p className="text-white/60 text-sm leading-tight overflow-hidden overflow-ellipsis line-clamp-2 mt-1">
                    Building an AI/ML portfolio project under mentorship.
                  </p>
                </div>
              </div>
              <div className="bg-[#232329] h-[220px] rounded-xl flex flex-col justify-between items-start border border-transparent hover:border-accent transition-all duration-300" style={{ padding: '24px' }}>
                <div className="w-full">
                  <div className="mb-2">
                    <span className="text-accent text-sm">Sept 2024 - Present</span>
                  </div>
                  <h3 className="text-lg font-semibold leading-tight mb-2">ColorStack Fellow</h3>
                  <p className="text-white/60 text-sm leading-tight overflow-hidden overflow-ellipsis line-clamp-2 mt-1">
                    Member of Black / Latinx CS community, academic support, career development, networking.
                  </p>
                </div>
              </div>
              <div className="bg-[#232329] h-[220px] rounded-xl flex flex-col justify-between items-start border border-transparent hover:border-accent transition-all duration-300" style={{ padding: '24px' }}>
                <div className="w-full">
                  <div className="mb-2">
                    <span className="text-accent text-sm">May 2025 - Present</span>
                  </div>
                  <h3 className="text-lg font-semibold leading-tight mb-2">Research Assistant, Roulis Lab (UPenn)</h3>
                  <p className="text-white/60 text-sm leading-tight overflow-hidden overflow-ellipsis line-clamp-2 mt-1">
                    Working on computational biology, analyzing multiomics datasets, integrating spatial transcriptomics, etc.
                  </p>
                </div>
              </div>
              <div className="bg-[#232329] h-[220px] rounded-xl flex flex-col justify-between items-start border border-transparent hover:border-accent transition-all duration-300" style={{ padding: '24px' }}>
                <div className="w-full">
                  <div className="mb-2">
                    <span className="text-accent text-sm">Jan 2025 - May 2025</span>
                  </div>
                  <h3 className="text-lg font-semibold leading-tight mb-2">Teaching Assistant – CIS 1210 (Data Structures & Algorithms)</h3>
                  <p className="text-white/60 text-sm leading-tight overflow-hidden overflow-ellipsis line-clamp-2 mt-1">
                    Assisted in teaching topics like sorting, searching, graph algorithms.
                  </p>
                </div>
              </div>
              <div className="bg-[#232329] h-[220px] rounded-xl flex flex-col justify-between items-start border border-transparent hover:border-accent transition-all duration-300" style={{ padding: '24px' }}>
                <div className="w-full">
                  <div className="mb-2">
                    <span className="text-accent text-sm">Sept 2025 - Present</span>
                  </div>
                  <h3 className="text-lg font-semibold leading-tight mb-2">Tutor — CS Foundations & DSA</h3>
                  <p className="text-white/60 text-sm leading-tight overflow-hidden overflow-ellipsis line-clamp-2 mt-1">
                    Helped students with discrete math, graph theory, algorithms.
                  </p>
                </div>
              </div>
              <div className="bg-[#232329] h-[220px] rounded-xl flex flex-col justify-between items-start border border-transparent hover:border-accent transition-all duration-300" style={{ padding: '24px' }}>
                <div className="w-full">
                  <div className="mb-2">
                    <span className="text-accent text-sm">Mar 2021 - Present</span>
                  </div>
                  <h3 className="text-lg font-semibold leading-tight mb-2">YOUTH TECH LABS - Founder & Mentor</h3>
                  <p className="text-white/60 text-sm leading-tight overflow-hidden overflow-ellipsis line-clamp-2 mt-1">
                    Established and leads a STEM outreach program that has engaged 200+ high school students through workshops in Python, SQL, Arduino & Electronics, and C/C++.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      case "skills":
        return (
          <div className="flex flex-col gap-[30px] text-center xl:text-left">
            <h3 className="text-4xl font-bold text-white">My <span className="text-accent">Skills</span></h3>
            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
              Proficient across multiple languages and frameworks, with emphasis on software engineering, web development, and machine learning.
            </p>
            
                {/* Programming Languages Section */}
                <div className="mt-8">
                  <h4 className="text-2xl font-bold text-accent text-center xl:text-left" style={{ marginBottom: '1em' }}>
                    &lt;programming&gt;
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 xl:gap-6">
                {[
                  { 
                    name: "Python", 
                    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="w-12 h-12" alt="Python" />
                  },
                  { 
                    name: "Java", 
                    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" className="w-12 h-12" alt="Java" />
                  },
                  { 
                    name: "C++", 
                    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" className="w-12 h-12" alt="C++" />
                  },
                  { 
                    name: "C", 
                    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" className="w-12 h-12" alt="C" />
                  },
                  { 
                    name: "Swift", 
                    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg" className="w-12 h-12" alt="Swift" />
                  },
                  { 
                    name: "R", 
                    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rstudio/rstudio-original.svg" className="w-12 h-12" alt="R" />
                  },
                  { 
                    name: "HTML", 
                    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="w-12 h-12" alt="HTML" />
                  },
                  { 
                    name: "CSS", 
                    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="w-12 h-12" alt="CSS" />
                  },
                  { 
                    name: "JavaScript", 
                    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-12 h-12" alt="JavaScript" />
                  }
                ].map((skill, index) => (
                  <div key={index} className="relative group">
                    <div className="w-full h-[120px] flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-105 relative">
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 120 120" preserveAspectRatio="none">
                        <defs>
                          <clipPath id={`hex-${index}`}>
                            <polygon points="30,0 90,0 120,60 90,120 30,120 0,60" />
                          </clipPath>
                        </defs>
                        <polygon 
                          points="30,0 90,0 120,60 90,120 30,120 0,60" 
                          fill="#232329" 
                          stroke="transparent" 
                          strokeWidth="2"
                          className="group-hover:stroke-accent transition-all duration-300"
                        />
                      </svg>
                      <div className="relative z-10 transition-all duration-300">
                        {skill.icon}
                      </div>
                    </div>
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                      {skill.name}
                    </div>
                  </div>
                ))}
                  </div>
                  <h4 className="text-2xl font-bold text-accent text-center xl:text-left" style={{ marginTop: '1em' }}>
                    &lt;/programming&gt;
                  </h4>
                </div>

                {/* Tools & Frameworks Section */}
                <div className="mt-8">
                  <h4 className="text-2xl font-bold text-accent text-center xl:text-left" style={{ marginBottom: '1em' }}>
                    &lt;Tools&&Frameworks&gt;
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 xl:gap-6">
                {[
                  { 
                    name: "Git", 
                    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" className="w-12 h-12" alt="Git" />
                  },
                  { 
                    name: "AWS", 
                    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" className="w-12 h-12" alt="AWS" />
                  },
                  { 
                    name: "PostgreSQL", 
                    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" className="w-12 h-12" alt="PostgreSQL" />
                  },
                  { 
                    name: "Neo4j", 
                    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/neo4j/neo4j-original.svg" className="w-12 h-12" alt="Neo4j" />
                  },
                  { 
                    name: "Xcode", 
                    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xcode/xcode-original.svg" className="w-12 h-12" alt="Xcode" />
                  },
                  { 
                    name: "MongoDB", 
                    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" className="w-12 h-12" alt="MongoDB" />
                  },
                  { 
                    name: "Docker", 
                    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" className="w-12 h-12" alt="Docker" />
                  },
                  { 
                    name: "Django", 
                    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" className="w-12 h-12" alt="Django" />
                  },
                  { 
                    name: "Pandas", 
                    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" className="w-12 h-12" alt="Pandas" />
                  },
                  { 
                    name: "NumPy", 
                    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" className="w-12 h-12" alt="NumPy" />
                  },
                  { 
                    name: "PyTorch", 
                    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" className="w-12 h-12" alt="PyTorch" />
                  },
                  { 
                    name: "scikit-learn", 
                    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" className="w-12 h-12" alt="scikit-learn" />
                  },
                  { 
                    name: "Matplotlib", 
                    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" className="w-12 h-12" alt="Matplotlib" />
                  },
                  { 
                    name: "Apache Spark", 
                    icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original.svg" className="w-12 h-12" alt="Apache Spark" />
                  }
                ].map((skill, index) => (
                  <div key={index} className="relative group">
                    <div className="w-full h-[120px] flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-105 relative">
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 120 120" preserveAspectRatio="none">
                        <defs>
                          <clipPath id={`hex-tools-${index}`}>
                            <polygon points="30,0 90,0 120,60 90,120 30,120 0,60" />
                          </clipPath>
                        </defs>
                        <polygon 
                          points="30,0 90,0 120,60 90,120 30,120 0,60" 
                          fill="#232329" 
                          stroke="transparent" 
                          strokeWidth="2"
                          className="group-hover:stroke-accent transition-all duration-300"
                        />
                      </svg>
                      <div className="relative z-10 transition-all duration-300">
                        {skill.icon}
                      </div>
                    </div>
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
                      {skill.name}
                    </div>
                  </div>
                ))}
                  </div>
                  <h4 className="text-2xl font-bold text-accent text-center xl:text-left" style={{ marginTop: '1em' }}>
                    &lt;/Tools&&Frameworks&gt;
                  </h4>
                </div>

          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center py-12 xl:py-0" style={{ marginTop: '3em' }}>
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[60px]">
          {/* Left Sidebar - Tabs */}
          <div className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0">
            {/* Tab Navigation */}
            <div className="flex flex-col gap-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex items-center w-full justify-center whitespace-nowrap text-white rounded-lg px-6 py-10 text-balance font-medium transition-all min-h-[60px] ${
                    activeTab === tab.id
                      ? "bg-accent text-primary font-bold shadow-sm"
                      : "bg-[#27272c] hover:bg-[#323238]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* View Resume Button */}
            <div className="flex justify-center" style={{ paddingTop: '2rem' }}>
              <Link
                href="https://drive.google.com/file/d/1wE3ZgR2L6VMpsbHhIP3NeSDBUlq_KZ5S/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="rounded-full font-semibold transition-colors h-[44px] flex items-center justify-center gap-2 bg-accent text-black hover:bg-accent/80 py-2 text-sm" style={{ paddingLeft: '1rem', paddingRight: '1rem', minWidth: '100px' }}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
                  </svg>
                  View Resume
                </button>
              </Link>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="min-h-[70vh] w-full">
            <div className="min-h-[480px] w-full">
              {renderTabContent()}
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-4 xl:px-0 py-24 xl:py-32" style={{ paddingTop: '4rem' }}>
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-3xl xl:text-4xl font-bold text-white" style={{ marginBottom: '2em' }}>
            Let&apos;s <span className="text-accent">build something</span> together
          </h2>

          {/* Removed footer subtext per request */}

          <div className="flex flex-col xl:flex-row justify-between items-center gap-8" style={{ marginBottom: '2em' }}>
            <a
              href="mailto:brunombw@seas.upenn.edu"
              className="text-accent hover:text-accent-hover transition-all text-lg font-medium"
            >
              brunombw@seas.upenn.edu
            </a>

            <Socials
              containerStyles="flex gap-6"
              iconStyles="w-12 h-12 border border-accent rounded-full flex justify-center items-center text-accent text-lg hover:bg-accent hover:text-primary hover:transition-all duration-500"
            />
          </div>

          <div className="border-t border-white/20" style={{ paddingTop: '2em' }}>
            <p className="text-white/60 text-sm">
              © 2025 Bruno Roy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}