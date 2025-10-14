"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Socials from "@/components/Socials";

const projects = [
  {
    id: 1,
    number: "01",
    title: "SwipeHire",
    description: "Built a SwiftUI app enabling users to filter, save, and apply to jobs with a Fit Score algorithm. Designed an autofill system for one-tap job applications and implemented scalable backend logic to handle high-frequency filtering and requests.",
    technologies: ["Swift"],
    images: ["/project1.png"],
    githubLink: "https://github.com/ROYBRUNO81/Swipe-Hire"
  },
  {
    id: 2,
    number: "02", 
    title: "Img2GPS",
    description: "Engineered a CNN model mapping images to GPS coordinates with ~67m error. Automated a data ingestion pipeline (Hugging Face → EXIF → Parquet), and optimized pipelines for large-scale image training.",
    technologies: ["Python", "PyTorch", "Pandas"],
    images: ["/project2.png"],
    githubLink: "https://github.com/ROYBRUNO81/Image_to_GPS"
  },
  {
    id: 3,
    number: "03",
    title: "Dwello",
    description: "Architected a recommendation engine with 87% accuracy in matching users to neighborhoods. Processed and normalized 9M+ rows of real estate data, integrated Redis caching, and designed scalable APIs for housing/demographic filtering.",
    technologies: ["Python", "PostgreSQL", "AWS", "Django"],
    images: ["/project3.png"],
    githubLink: "https://github.com/ROYBRUNO81/Dwello"
  },
  {
    id: 4,
    number: "04",
    title: "Twitter Bot",
    description: "Built a Java-based Markov Chain model achieving 92% similarity to real tweet patterns. Designed a streaming pipeline for 10M+ tweets and reduced tweet generation runtime by 35%.",
    technologies: ["Java", "Markov Chains", "Streaming Pipelines"],
    images: ["/project4.jpeg"],
    githubLink: "https://github.com/ROYBRUNO81/Twitter-Bot"
  },
  {
    id: 5,
    number: "05",
    title: "Roulis Lab",
    description: "Built an end-to-end ETL workflow combining single-cell RNA-seq clustering with spatial mapping. Integrated cell-type assignments with spatial coordinates and designed neighborhood-detection algorithms.",
    technologies: ["Python", "R"],
    images: ["/project5.png"],
    githubLink: "https://github.com/ROYBRUNO81/PURM2025"
  },
  {
    id: 6,
    number: "06",
    title: "Soccer Match Outcome Prediction",
    description: "Engineered a Random Forest ML model on 50,000+ soccer matches, boosting prediction accuracy to 60%. Built feature pipelines for key performance indicators and deployed a real-time prediction dashboard in Django.",
    technologies: ["Python", "Django", "Scikit-learn", "CSS", "HTML"],
    images: ["/project6.png"],
    githubLink: "https://github.com/ROYBRUNO81/Soccer-match-prediction/tree/main"
  }
  ,
  {
    id: 7,
    number: "07",
    title: "Checkers Game",
    description: "Built a full-featured international Checkers game in Java and Swing with save/load, undo, and restart. Implemented an AI opponent that learns and improves as you play more games for increasingly challenging matches.",
    technologies: ["Java", "Swing", "AI"],
    images: ["/project7.jpg"],
    githubLink: "https://github.com/ROYBRUNO81"
  }
];

const ProjectCarousel = ({ images, projectTitle, onPrevProject, onNextProject, isPaused, onTogglePause }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-[400px] group">
      {/* Image Frame with rounded borders */}
      <div className="h-full relative flex justify-center items-center bg-white/5 rounded-xl overflow-hidden">
        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
        <div className="relative w-full h-full flex justify-center items-center bg-black rounded-xl">
          <Image
            alt={projectTitle}
            src={images[currentImage]}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
      </div>
      
      {/* Navigation Buttons - Left for Previous Project, Center for Pause/Play, Right for Next Project */}
      <div className="flex gap-2 absolute right-0 z-20 w-full justify-between xl:w-max xl:justify-center" style={{ bottom: '-6em' }}>
        <button 
          onClick={onPrevProject}
          className="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded"
        >
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z"></path>
          </svg>
        </button>
        
        {/* Pause/Play Button */}
        <button 
          onClick={onTogglePause}
          className="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded"
        >
          {isPaused ? (
            // Play icon
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5v14l11-7z"></path>
            </svg>
          ) : (
            // Pause icon
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path>
            </svg>
          )}
        </button>
        
        <button 
          onClick={onNextProject}
          className="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded"
        >
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default function Work() {
  const [currentProject, setCurrentProject] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setCurrentProject(index);
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  // Auto-advance projects every 5 seconds (only when not paused)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const project = projects[currentProject];

  return (
    <div className="min-h-screen">
      <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            {/* Left Column - Project Details */}
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                {/* Project Number */}
                <div className="text-8xl leading-none font-extrabold text-transparent" style={{ 
                  WebkitTextStroke: '2px #ffffff',
                  textStroke: '2px #ffffff'
                }}>
                  {project.number}
                </div>
                
                {/* Project Title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {project.title}
                </h2>
                
                {/* Project Description */}
                <p className="text-white/60">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <ul className="flex gap-4">
                  {project.technologies.map((tech, index) => (
                    <li key={index} className="text-xl text-accent">
                      {tech}{index < project.technologies.length - 1 ? ',' : ''}
                    </li>
                  ))}
                </ul>
                
                {/* Separator Line */}
                <div className="border border-white/20"></div>
                
                {/* GitHub Link */}
                <div className="flex items-center gap-4">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <button className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group hover:bg-white/10 transition-all">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-white text-3xl group-hover:text-accent transition-colors" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Column - Project Image */}
            <div className="w-full xl:w-[50%]">
              <ProjectCarousel 
                images={project.images} 
                projectTitle={project.title}
                onPrevProject={prevProject}
                onNextProject={nextProject}
                isPaused={isPaused}
                onTogglePause={togglePause}
              />
            </div>
          </div>
          
          {/* Project Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject 
                    ? "bg-accent scale-125" 
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 xl:px-0 py-24 xl:py-32">
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