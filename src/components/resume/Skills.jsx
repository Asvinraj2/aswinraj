// import React from 'react'
// import { motion } from 'framer-motion';

// const Skills = () => {
//   return (
//    <motion.div
//   initial={{ opacity: 0 }}
//   animate={{ opacity: 1, transition: { duration: 0.5 } }}
//   className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20 font-[Poppins,sans-serif]"
// >
//       <div className="w-full lg:w-1/2">
//         <div className="py-12 font-titleFont flex flex-col gap-4">
//           <p className="text-sm text-designColor tracking-[4px] uppercase">
//             Features
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold">Design Skill</h2>
//         </div>
//         <div className=" w-full flex flex-col gap-6">
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">Photoshot</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">100%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">Figma</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">90%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">Adobe XD.</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">60%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">Adobe Illustrator</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">70%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">Design</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">95%</span>
//               </motion.span>
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className="w-full lg:w-1/2">
//         <div className="py-12 font-titleFont flex flex-col gap-4">
//           <p className="text-sm text-designColor tracking-[4px] uppercase">
//             Features
//           </p>
//           <h2 className="text-3xl md:text-4xl font-bold">Development Skill</h2>
//         </div>
//         <div className="flex flex-col gap-6">
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">React</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">100%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">HTML 5</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">95%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">CSS3</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">80%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">JAVASCRIPT</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">75%</span>
//               </motion.span>
//             </span>
//           </div>
//           <div className="overflow-x-hidden">
//             <p className="text-sm uppercase font-medium">SOFTWARE</p>
//             <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
//               <motion.span
//                 initial={{ x: "-100%", opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 }}
//                 className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
//               >
//                 <span className="absolute -top-7 right-0">90%</span>
//               </motion.span>
//             </span>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// export default Skills




import React from 'react'
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col xl:flex-row gap-6 sm:gap-8 lg:gap-12 xl:gap-20 font-[Poppins,sans-serif] px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full xl:w-1/2">
        <div className="py-6 sm:py-8 lg:py-12 flex flex-col gap-2 sm:gap-3 lg:gap-4">
          <p className="text-[var(--color-design)] text-xs sm:text-sm text-designColor tracking-[2px] sm:tracking-[3px] lg:tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Front-End</h2>
        </div>
        <div className="w-full flex flex-col gap-4 sm:gap-5 lg:gap-6">
          {[
            { skill: "HTML5", percentage: 100 },
            { skill: "CSS3", percentage: 80 },
            { skill: "Bootstrap", percentage: 70 },
            { skill: "JavaScript", percentage: 80 },
            { skill: "React.js", percentage: 90 }
          ].map((item, index) => (
            <div key={index} className="overflow-x-hidden">
              <p className="text-xs sm:text-sm uppercase font-medium mb-1 sm:mb-2">
                {item.skill}
              </p>
              <span className="w-full h-1.5 sm:h-2 bgOpacity rounded-md inline-flex">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className={`h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative`}
                  style={{ width: `${item.percentage}%` }}
                >
                  <span className="absolute -top-5 sm:-top-6 lg:-top-7 right-0 text-xs sm:text-sm">
                    {item.percentage}%
                  </span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full xl:w-1/2">
        <div className="py-6 sm:py-8 lg:py-12 flex flex-col gap-2 sm:gap-3 lg:gap-4">
          <p className="text-[var(--color-design)] text-xs sm:text-sm text-designColor tracking-[2px] sm:tracking-[3px] lg:tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Back-End</h2>
        </div>
        <div className="flex flex-col gap-4 sm:gap-5 lg:gap-6">
          {[
            { skill: "Node.js", percentage: 90 },
            { skill: "Express.js", percentage: 70 },
            { skill: "MongoDB", percentage: 80 },
            { skill: "REST API", percentage: 90 },
            { skill: "JWT Authentication", percentage: 70 }
          ].map((item, index) => (
            <div key={index} className="overflow-x-hidden">
              <p className="text-xs sm:text-sm uppercase font-medium mb-1 sm:mb-2">
                {item.skill}
              </p>
              <span className="w-full h-1.5 sm:h-2 bgOpacity rounded-md inline-flex">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className={`h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative`}
                  style={{ width: `${item.percentage}%` }}
                >
                  <span className="absolute -top-5 sm:-top-6 lg:-top-7 right-0 text-xs sm:text-sm">
                    {item.percentage}%
                  </span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
