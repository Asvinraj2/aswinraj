import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 sm:py-8 md:py-10 lg:py-12 font-titleFont flex flex-col lg:flex-row gap-10 lg:gap-20 px-4 sm:px-6 md:px-8"
    >
      <div className="w-full lg:w-1/2">
        <div className="py-6 sm:py-8 md:py-10 lg:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-[var(--color-design)] text-xs sm:text-sm text-designColor tracking-[2px] sm:tracking-[4px]">
            2007 - 2010
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Technical Certifications
          </h2>
        </div>
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 w-full border-l-[4px] sm:border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-6 sm:gap-8 md:gap-10">
          <ResumeCard
            title="MERN Stack"
            subTitle="PrepInsta Prime (2024 - 2025)"
            result="View Certificate"
            des="Completed a hands-on certification course covering MongoDB, Express.js, React.js, and Node.js. Gained experience in building full-stack web applications, creating REST APIs, and deploying projects using modern development tools."
            certificateUrl="https://drive.google.com/file/d/1nufTh6KZYfxEJ_6bVDTWP-yn45U3nZNz/view?usp=sharing"
          />
          <ResumeCard
            title="Java"
            subTitle="PrepInsta Prime (2023 - 2024)"
            result="View Certificate"
            des="Completed Java programming course from PrepInsta Prime covering core concepts such as OOP, exception handling, multithreading, collections framework, and file I/O. Gained strong foundational knowledge to build robust backend logic and applications."
            certificateUrl="https://drive.google.com/file/d/11gL_f3D2jWEecvfUy0-tFck9z5KGP61n/view?usp=sharing"
          />
          <ResumeCard
            title="JavaScript"
            subTitle="PrepInsta Prime (2023 - 2024)"
            result="View Certificate"
            des="Completed a hands-on JavaScript course covering core concepts like variables, functions, DOM manipulation, event handling, arrays, loops, and asynchronous programming. Gained practical experience building dynamic, interactive web pages."
            certificateUrl="https://drive.google.com/file/d/1dqowUti92dD7J3Z5WZ5_q5JRnx92Reod/view?usp=sharing"
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
        <div className="py-6 sm:py-8 md:py-10 lg:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-[var(--color-design)] text-xs sm:text-sm text-designColor tracking-[2px] sm:tracking-[4px]">
            2010 - 2023
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Key Technical Milestones
          </h2>
        </div>
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 w-full border-l-[4px] sm:border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-6 sm:gap-8 md:gap-10">
          <ResumeCard
            title="Presented Final Year Project"
            subTitle="Virtual Coercion Detection (2024)"
            result="Presented"
            des="Developed a sentiment analysis system using TextBlob and YouTube API to detect coercive language patterns in comments."
          />
          <ResumeCard
            title="Self-Learned MERN Stack"
            subTitle="MongoDB, Express.js, React.js, Node.js"
            result="Hands-On"
            des="Mastered modern full-stack development by building and deploying responsive, interactive, and scalable web applications."
          />
          <ResumeCard
            title="Created and Hosted Live Portfolio"
            subTitle="3D & Traditional UI Portfolios"
            result="Deployed"
            des="Designed, developed, and deployed multiple personal portfolios using React.js, Three.js, and Netlify to showcase technical skills."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;