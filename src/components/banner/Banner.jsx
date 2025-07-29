import React from 'react';
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col lg:flex-row items-center gap-10 border-b border-b-black font-[var(--font-title)]"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;
