import React from 'react';

const ResumeCard = ({ title, subTitle, result, des, certificateUrl }) => {
  return (
    <div className="w-full group flex mb-6 sm:mb-8 lg:mb-10">
      {/* Left line and circle */}
      <div className="w-6 sm:w-8 lg:w-10 h-[4px] sm:h-[5px] lg:h-[6px] bg-black bg-opacity-60 mt-12 sm:mt-14 lg:mt-16 relative flex-shrink-0">
        <span className="absolute w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full -top-1 sm:-top-1.5 lg:-top-2 -left-2 sm:-left-2.5 lg:-left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full bg-[#212428] inline-flex group-hover:bg-[#ff014f] duration-300"></span>
        </span>
      </div>

      {/* Card */}
      <div className="w-full bg-[#1a1d20] hover:bg-[#181a1d] duration-300 rounded-lg p-3 sm:p-4 lg:p-6 xl:px-10 flex flex-col justify-center gap-3 sm:gap-4 lg:gap-6 xl:gap-10 shadow-[0_12px_50px_-4px_rgba(0,0,0,0.25)] ml-2 sm:ml-3 lg:ml-4 h-[280px] sm:h-[300px] lg:h-[320px]">

        {/* Title and Result */}
        <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4 lg:items-center">
          <div className="flex-1">
            <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold group-hover:text-white duration-300 leading-tight">
              {title}
            </h3>
            <p className="text-xs sm:text-sm mt-1 sm:mt-2 text-gray-400 group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>
          <div className="self-start sm:self-center">
            {certificateUrl ? (
              <a
                href={certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 text-[#ff014f] bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-[0_12px_50px_-4px_rgba(0,0,0,0.25)] text-xs sm:text-sm font-medium whitespace-nowrap hover:bg-opacity-40 hover:scale-105 transition-all duration-300"
              >
                {result}
              </a>
            ) : (
              <p className="px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 text-[#ff014f] bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-[0_12px_50px_-4px_rgba(0,0,0,0.25)] text-xs sm:text-sm font-medium whitespace-nowrap">
                {result}
              </p>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm lg:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300 leading-relaxed">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;