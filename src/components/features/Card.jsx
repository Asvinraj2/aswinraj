import React from 'react';
import { HiArrowRight } from "react-icons/hi";

const Card = ({ item: { title, des, icon } }) => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-10 h-auto rounded-lg shadow-[-2px_-2px_30px_rgba(200,200,200,0.1),7px_7px_20px_rgba(0,0,0,0.5)] flex items-center bg-gradient-to-r from-[var(--color-body)] to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-300">
      <div className="h-full overflow-hidden w-full">
        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-4xl sm:text-5xl text-[var(--color-design)]">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] bg-[var(--color-design)] rounded inline-flex" />
                <span className="w-full h-[2px] bg-[var(--color-design)] rounded inline-flex" />
                <span className="w-full h-[2px] bg-[var(--color-design)] rounded inline-flex" />
                <span className="w-full h-[2px] bg-[var(--color-design)] rounded inline-flex" />
              </>
            )}
          </div>
          <div className="flex flex-col gap-4 sm:gap-6">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-300" style={{ fontFamily: 'var(--font-title)' }}>
              {title}
            </h2>
            <p className="text-sm sm:text-base text-gray-400">{des}</p>
            <span className="text-xl sm:text-2xl text-[var(--color-design)]">
              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;






