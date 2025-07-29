// import React from 'react'
// import { motion } from 'framer-motion';
// import ResumeCard from './ResumeCard';

// const Education = () => {
//   return (
//     <div className="font-['Poppins']"> {/* Apply Poppins font to the whole component */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1, transition: { duration: 0.5 } }}
//         className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20"
//       >
//         {/* part one */}
//         <div>
//           <div className="py-6 lg:py-12 flex flex-col gap-4">
//             <p className="text-sm text-[color:var(--design-color,#ff014f)] tracking-[4px]">1998 - 2010</p>
//             <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
//           </div>
//           <div className="mt-6 lg:mt-14 w-full h-[1000px] border-l-6 border-l-black border-opacity-30 flex flex-col gap-10">
//             <ResumeCard
//               title="BSc in Computer Science"
//               subTitle="University of DVI (2006 - 2010)"
//               result="3.90/4"
//               des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
//             />
//             <ResumeCard
//               title="AS - Science & Information"
//               subTitle="SuperKing College (2001 - 2005)"
//               result="4.75/5"
//               des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
//             />
//             <ResumeCard
//               title="Secondary School Education"
//               subTitle="Kingstar Secondary School (1998 - 2000)"
//               result="5.00/5"
//               des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
//             />
//           </div>
//         </div>
//         {/* part Two */}

//         <div>
//           <div className="py-6 lg:py-12 flex flex-col gap-4">
//             <p className="text-sm text-[color:var(--design-color,#ff014f)] tracking-[4px]">2010 - 2022</p>
//             <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
//           </div>
//           <div className="mt-6 lg:mt-14 w-full h-[1000px] border-l-6 border-l-black border-opacity-30 flex flex-col gap-10">
//             <ResumeCard
//               title="Sr. Software Engineer"
//               subTitle="Google Out Tech - (2017 - Present)"
//               result="USA"
//               des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
//             />
//             <ResumeCard
//               title="Web Developer & Trainer"
//               subTitle="Apple Developer Team - (2012 - 2016)"
//               result="MALAYSIA"
//               des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
//             />
//             <ResumeCard
//               title="Front-end Developer"
//               subTitle="Nike - (2020 - 2011)"
//               result="Oman"
//               des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
//             />
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// export default Education;


// import React from 'react';
// import { motion } from 'framer-motion';
// import ResumeCard from './ResumeCard';

// const Education = () => {
//   return (
//   <motion.div
//   initial={{ opacity: 0 }}
//   animate={{ opacity: 1, transition: { duration: 0.5 } }}
//   className="w-full flex flex-col lg:flex-row items-stretch gap-6 sm:gap-8 lg:gap-12 xl:gap-20 max-w-7xl mx-auto"
// >
//       {/* Education Section */}
//       <div className="flex-1 h-full">
//         <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
//           <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
//           <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
//         </div>
//         <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
//           <ResumeCard
//             title="BSc in Computer Science"
//             subTitle="University of DVI (2006 - 2010)"
//             result="3.90/4"
//             des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
//           />
//           <ResumeCard
//             title="AS - Science & Information"
//             subTitle="SuperKing College (2001 - 2005)"
//             result="4.75/5"
//             des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
//           />
//           <ResumeCard
//             title="Secondary School Education"
//             subTitle="Kingstar Secondary School (1998 - 2000)"
//             result="5.00/5"
//             des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
//           />
//         </div>
//       </div>

//       {/* Job Section */}
//       <div className="flex-1 h-full">
//         <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
//           <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
//           <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
//         </div>
//         <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
//           <ResumeCard
//             title="Sr. Software Engineer"
//             subTitle="Google Out Tech - (2017 - Present)"
//             result="USA"
//             des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
//           />
//           <ResumeCard
//             title="Web Developer & Trainer"
//             subTitle="Apple Developer Team - (2012 - 2016)"
//             result="MALAYSIA"
//             des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
//           />
//           <ResumeCard
//             title="Front-end Developer"
//             subTitle="Nike - (2020 - 2011)"
//             result="Oman"
//             des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Education;






import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <div className="font-['Poppins'] px-4 sm:px-6 lg:px-8 xl:px-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="w-full flex flex-col lg:flex-row items-stretch gap-6 sm:gap-8 lg:gap-12 xl:gap-20 max-w-7xl mx-auto"
      >
        {/* part one */}
        <div className="flex-1 h-full">
          <div className="py-4 sm:py-6 lg:py-12 flex flex-col gap-2 sm:gap-4">
            <p className="text-xs sm:text-sm text-[color:var(--design-color,#ff014f)] tracking-[2px] sm:tracking-[4px]">2017 - 2024</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Education Quality</h2>
          </div>
          <div className="mt-4 sm:mt-6 lg:mt-14 w-full border-l-[4px] sm:border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-6 sm:gap-8 lg:gap-10">
            <ResumeCard
              title="B.TECH in Aritificial Intelligence and Data Science "
              subTitle="JNN Institute of Engineering (2020 - 2024)"
              result="8.2/10"
              des="Gained strong foundations in AI, machine learning, data analysis, and software development through hands-on projects and academic learning."
            />
            <ResumeCard
              title="Higher Secondary"
              subTitle="Children's paradise Mat High Sec School(2018 - 2020)"
              result="70%"
              des="Completed under Tamil Nadu State Board with Computer Science and Mathematics as core subjects, building a strong foundation in programming and logical reasoning."
            />
            <ResumeCard
              title="SSLC"
              subTitle="Children's paradise Mat High Sec School(2017 - 2018)"
              result="84%"
              des="Completed under Tamil Nadu State Board, focusing on core academic subjects and laying the groundwork for higher education."
            />
          </div>
        </div>
        
        {/* part Two */}
      <div className="flex-1 h-full">
  <div className="py-4 sm:py-6 lg:py-12 flex flex-col gap-2 sm:gap-4">
    <p className="text-xs sm:text-sm text-[color:var(--design-color,#ff014f)] tracking-[2px] sm:tracking-[4px]">Online</p>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Certification Courses</h2>
  </div>
  <div className="mt-4 sm:mt-6 lg:mt-14 w-full border-l-[4px] sm:border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-6 sm:gap-8 lg:gap-10">
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
      </motion.div>
    </div>
  );
}

export default Education;