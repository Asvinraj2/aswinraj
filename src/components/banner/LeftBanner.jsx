import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Media from './Media';

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ['Full Stack Developer.', 'React Developer.', 'Professional Coder.'],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lg:w-1/2 flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-10 px-4 sm:px-6 lg:px-8 text-left items-start">
      <div className="flex flex-col gap-4 sm:gap-5">
        <h4 className="text-sm sm:text-base lg:text-lg font-normal text-gray-400">
          WELCOME TO MY WORLD
        </h4>
        <h1 className="text-6xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Hi, I'm{' '}
          <span className="text-[var(--color-design)] capitalize">Aswinraj S</span>
        </h1>
        <h2 className="text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor cursorBlinking={false} cursorStyle="|" cursorColor="#ff014f" />
        </h2>
        <p className="text-sm sm:text-base font-[var(--font-body)] leading-6 sm:leading-7 tracking-wide text-gray-300 max-w-[100%] sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
          I'm a MERN Stack Developer skilled in MongoDB, Express.js, React.js, and Node.js. I enjoy building responsive interfaces and strong backend systems, always aiming to improve and deliver smooth user experiences.
        </p>


      </div>

      {/* Media Section */}
      <Media />
    </div>
  );
};

export default LeftBanner;
