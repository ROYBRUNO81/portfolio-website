import { FiDownload } from "react-icons/fi";
import Link from "next/link";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="px-4 xl:px-0 pt-24 pb-16 xl:pt-40 xl:pb-24">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col xl:flex-row items-center justify-between pb-20 xl:pb-32 gap-12 xl:gap-16">
          {/* Text */}
          <div className="text-center xl:text-left order-2 xl:order-none" style={{ marginTop: '4rem' }}>
            <span className="text-xl">Software Engineer & CS Student</span>
            <h1 className="h1 mb-20">
              Hello, I&apos;m <br />
              <span className="text-accent">Bruno Roy</span>
            </h1>
                <p className="max-w-[600px] mb-8 text-white/80" style={{ marginBottom: '2.5rem' }}>
                  Third-year Computer Science at the University of Pennsylvania, dedicated to building impactful technology through machine learning, full-stack development, and data analysis. I combine rigorous coursework with real-world projects—from predictive modeling to scalable web platforms—while empowering 200+ students in Cameroon through YOUTH TECH LABS.
                </p>

            {/* Buttons and Socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link
                href="https://drive.google.com/file/d/1wE3ZgR2L6VMpsbHhIP3NeSDBUlq_KZ5S/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="justify-center whitespace-nowrap rounded-full font-semibold ring-offset-white transition-colors border-2 border-accent bg-transparent text-accent hover:bg-accent hover:text-primary h-[56px] px-20 text-sm tracking-[2px] uppercase flex items-center gap-3 min-w-[260px]">
                  <span>Download Resume</span>
                  <FiDownload className="text-xl" />
                </button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-none mb-6 xl:mb-0" style={{ marginTop: '4rem' }}>
            <Photo />
          </div>
        </div>
      </div>
      </section>

      {/* Stats */}
      <section className="px-4 xl:px-0 py-12 xl:py-16" style={{ marginTop: '2em', marginBottom: '2em' }}>
        <Stats />
      </section>

      {/* Education Timeline removed per request */}

      {/* Footer */}
      <footer className="px-4 xl:px-0 py-24 xl:py-32">
        <div className="container mx-auto max-w-7xl text-center">
          <h2 className="text-3xl xl:text-4xl font-bold text-white" style={{ marginBottom: '2em' }}>
            Let's <span className="text-accent">build something</span> together
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
