// import React from 'react';
// import { aswinrajpic } from '../../assets/index';

// const RightBanner = () => {
//   return (
//     <div className="w-full lg:w-1/2 flex justify-center items-center relative px-4 sm:px-0">
//       <img
//         className="w-[250px] h-[320px] sm:w-[300px] sm:h-[400px] lg:w-[500px] lg:h-[680px] z-10"
//         src={aswinrajpic}
//         alt="bannerImg"
//       />
//       <div className="absolute bottom-0 w-[280px] h-[250px] sm:w-[350px] sm:h-[300px] lg:w-[500px] lg:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-[-2px_-2px_30px_rgba(200,200,200,0.1),7px_7px_20px_rgba(0,0,0,0.5)] flex justify-center items-center"></div>
//     </div>
//   );
// };

// export default RightBanner;


import React from 'react';
import { aswinrajpic, aswinraj2 } from '../../assets/index';

const RightBanner = () => {
  return (
    <div className="w-full lg:w-1/2 flex justify-center items-end relative px-4 sm:px-0">
      {/* Background shadow box - positioned to cover from chest down */}
      <div className="absolute bottom-0 w-[280px] h-[250px] sm:w-[350px] sm:h-[300px] lg:w-[500px] lg:h-[450px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-[-2px_-2px_30px_rgba(200,200,200,0.1),7px_7px_20px_rgba(0,0,0,0.5)]"></div>
      
      {/* Profile image - extends above the shadow box */}
      <img
        className="w-[300px] h-[380px] sm:w-[370px] sm:h-[460px] lg:w-[500px] lg:h-[680px] z-10 object-cover object-center relative"
        src={aswinraj2}
        alt="bannerImg"
      />
    </div>
  );
};

export default RightBanner;