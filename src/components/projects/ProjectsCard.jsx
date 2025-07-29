import React from 'react'
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, githubUrl, liveUrl }) => {
  const handleGithubClick = () => {
    if (githubUrl) {
      window.open(githubUrl, '_blank');
    }
  };

  const handleLiveClick = () => {
    if (liveUrl) {
      window.open(liveUrl, '_blank');
    }
  };

  return (
    <div className="w-full max-w-full mx-auto p-4 sm:p-5 md:p-6 h-auto rounded-lg shadow-[-2px_-2px_30px_rgba(200,200,200,0.1),7px_7px_20px_rgba(0,0,0,0.5)] flex flex-col bg-gradient-to-r from-[#212428] to-[#202327] group hover:bg-gradient-to-b hover:from-[#1b1e23] hover:to-[#111315] transition-colors duration-300">
      {/* Image Container with proper aspect ratio */}
      <div className="w-full aspect-video overflow-hidden rounded-lg mb-4">
        <img
          className="w-full h-full object-cover object-center group-hover:scale-110 duration-300 cursor-pointer"
          src={src}
          alt={title}
        />
      </div>

      {/* Content Container */}
      <div className="w-full flex flex-col gap-3 sm:gap-4 flex-grow">
        <div className="flex-grow">
          {/* Title and Icons Row */}
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl uppercase font-semibold text-[#ff014f] leading-tight flex-1 mr-3">
              {title}
            </h3>
            <div className="flex gap-2 flex-shrink-0">
              <span
                className="text-sm sm:text-base md:text-lg w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 duration-300 cursor-pointer hover:text-[#ff014f] hover:scale-110 transition-all"
                onClick={handleGithubClick}
                title="View on GitHub"
              >
                <BsGithub />
              </span>
              <span
                className="text-sm sm:text-base md:text-lg w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 duration-300 cursor-pointer hover:text-[#ff014f] hover:scale-110 transition-all"
                onClick={handleLiveClick}
                title="View Live Project"
              >
                <FaGlobe />
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base tracking-wide hover:text-gray-100 duration-300 leading-relaxed text-gray-300 line-height-normal">
            {des}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard