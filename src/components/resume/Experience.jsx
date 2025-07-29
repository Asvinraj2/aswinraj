import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  const jobExperience = [
    {
      title: "Sr. Software Engineer",
      subTitle: "Google Out Tech - (2017 - Present)",
      result: "USA",
      des: "Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
    },
    {
      title: "Web Developer & Trainer",
      subTitle: "Apple Developer Team - (2012 - 2016)",
      result: "MALAYSIA",
      des: "A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
    },
    {
      title: "Front-end Developer",
      subTitle: "Nike - (2020 - 2011)",
      result: "Oman",
      des: "The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
    }
  ];

  const trainerExperience = [
    {
      title: "Gym Instructor",
      subTitle: "Rainbow Gym Center (2015 - 2020)",
      result: "DHAKA",
      des: "The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
    },
    {
      title: "Web Developer and Instructor",
      subTitle: "SuperKing College (2010 - 2014)",
      result: "CANADA",
      des: "Higher education is tertiary education leading to award of an academic degree. Higher education:  post-secondary education."
    },
    {
      title: "School Teacher",
      subTitle: "Kingstar Secondary School (2001 - 2010)",
      result: "NEVADA",
      des: "Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
    }
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          className="py-8 sm:py-10 lg:py-12 font-[Poppins,sans-serif] flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-20"
        >
          <div className="flex-1">
            <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
              <p className="text-xs sm:text-sm text-[color:var(--design-color,#ff014f)] tracking-[2px] sm:tracking-[3px] lg:tracking-[4px]">2010 - 2022</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Job Experience</h2>
            </div>
            <div className="mt-8 sm:mt-12 lg:mt-14 w-full border-l-[4px] sm:border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-6 sm:gap-8 lg:gap-10">
              {jobExperience.map((exp, index) => (
                <ResumeCard
                  key={index}
                  title={exp.title}
                  subTitle={exp.subTitle}
                  result={exp.result}
                  des={exp.des}
                />
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-2 sm:gap-3 lg:gap-4">
              <p className="text-xs sm:text-sm text-[color:var(--design-color,#ff014f)] tracking-[2px] sm:tracking-[3px] lg:tracking-[4px]">2001 - 2020</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Trainer Experience</h2>
            </div>
            <div className="mt-8 sm:mt-12 lg:mt-14 w-full border-l-[4px] sm:border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-6 sm:gap-8 lg:gap-10">
              {trainerExperience.map((exp, index) => (
                <ResumeCard
                  key={index}
                  title={exp.title}
                  subTitle={exp.subTitle}
                  result={exp.result}
                  des={exp.des}
                />
              ))}
            </div>
          </div>
        </motion.div> */}
        <div className="h-[300px] w-full flex flex-col items-center justify-center space-y-4">
          <h2 className="text-xl text-center my-1">Loading..!</h2>

          {/* Loading Bar */}
          <div className="w-40 h-1 bg-gray-700 relative overflow-hidden rounded">
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white to-transparent animate-[slide_1.5s_linear_infinite]"></div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Experience;