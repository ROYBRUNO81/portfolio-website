"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const educationData = [
  {
    year: "2018",
    title: "High School",
    subtitle: "Valedictorian, All A's",
    gpa: "GPA 4.0",
    details: [
      "Advanced Mathematics",
      "Physics & Chemistry", 
      "Computer Science Fundamentals",
      "Leadership & Student Government"
    ]
  },
  {
    year: "2024 – Present",
    title: "BS Computer Science",
    subtitle: "Junior Year",
    gpa: "GPA 3.8",
    details: [
      "Data Structures & Algorithms",
      "Software Engineering",
      "Database Systems", 
      "Machine Learning"
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const EducationTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="px-4 xl:px-0" style={{ marginTop: '2em', marginBottom: '2em', paddingTop: '3em', paddingBottom: '3em' }}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="relative"
        >
          {/* Section Title */}
          <motion.h2
            variants={itemVariants}
            className="text-3xl xl:text-4xl font-bold text-center text-white"
            style={{ marginBottom: '3em' }}
          >
            My <span className="text-accent">Education</span> Journey
          </motion.h2>

          {/* Centered Timeline Wrapper */}
          <div className="flex justify-center">
            <div className="relative max-w-4xl w-full">
              {/* Main Timeline Line (static) */}
              <div
                className="absolute left-8 w-[2px] bg-gradient-to-b from-transparent via-neutral-600 to-transparent"
                style={{ height: '100%', zIndex: 1, top: '-5rem' }}
              >
                {/* Animated top line */}
                <div className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent rounded-full" style={{ height: '60px', opacity: '0.8' }}></div>
              </div>

              {/* Timeline Items Container */}
              <div className="relative pb-20">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex justify-start pt-10 md:pt-20 md:gap-10"
                style={{ marginBottom: '2em' }}
              >
                {/* Left Part (Year + Node) - Fixed positioning */}
                <div className="flex flex-col md:flex-row z-40 items-center self-start max-w-xs lg:max-w-sm md:w-full">
                  {/* Node */}
                  <div className="h-10 absolute left-3 w-10 rounded-full bg-black flex items-center justify-center z-50">
                    <div className="h-4 w-4 rounded-full bg-neutral-800 border border-neutral-700"></div>
                  </div>
                  {/* Desktop Year */}
                  <h3 className="hidden md:block text-xl md:text-4xl font-bold text-neutral-500" style={{ marginLeft: '2em' }}>
                    {item.year}
                  </h3>
                </div>

                {/* Right Part (Content) */}
                <div className="relative pl-20 pr-4 md:pl-4 w-full">
                  {/* Mobile Year */}
                  <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500" style={{ marginLeft: '2em' }}>
                    {item.year}
                  </h3>
                  {/* Education Card */}
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white/5 backdrop-blur-sm border border-accent/20 rounded-2xl shadow-lg hover:shadow-accent/20 transition-all duration-300"
                    style={{
                      padding: '1.5em',
                      boxShadow: '0 8px 32px rgba(0, 255, 153, 0.1), 0 0 0 1px rgba(0, 255, 153, 0.1)',
                      maxWidth: '500px'
                    }}
                  >
                    <h3 className="text-lg xl:text-xl font-bold text-white" style={{ marginBottom: '0.4em' }}>
                      {item.title}
                    </h3>
                    <p className="text-accent font-medium text-sm xl:text-base" style={{ marginBottom: '0.4em' }}>
                      {item.subtitle}
                    </p>
                    <p className="text-white/80 text-xs xl:text-sm" style={{ marginBottom: '0.8em' }}>
                      {item.gpa}
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3em' }}>
                      {item.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" style={{ marginRight: '0.5em' }}></div>
                          <span className="text-white/70 text-xs xl:text-sm">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationTimeline;