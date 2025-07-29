import React, { useState } from 'react'
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from '../layouts/Title'
import { testimonialOne, testimonialTwo, quote } from "../../assets";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-10 h-8 sm:w-12 sm:h-10 lg:w-14 lg:h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-lg sm:text-xl lg:text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-10 h-8 sm:w-12 sm:h-10 lg:w-14 lg:h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-lg sm:text-xl lg:text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-12 sm:right-16 lg:right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonials = () => {
  const [dotActive, setDocActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
              width: "12px",
              height: "12px",
              color: "blue",
              background: "#ff014f",
              borderRadius: "50%",
              cursor: "pointer",
            }
            : {
              width: "12px",
              height: "12px",
              color: "blue",
              background: "gray",
              borderRadius: "50%",
              cursor: "pointer",
            }
        }
      ></div>
    ),
  };

  return (
    <section
      id="testimonial"
      className="w-full py-12 sm:py-16 lg:py-20 border-b border-b-black overflow-hidden"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center text-center">
          <Title title="WHAT CLIENTS SAY" des="Testimonial" />
        </div>
        <div className="max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto">
          {/* ================ Slider One ================== */}
          <Slider {...settings}>
            <div className="w-full">
              <div className="w-full h-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-8 px-2">
                <div className="w-full lg:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 sm:p-6 lg:p-8 rounded-lg shadow-shadowOne flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-6 lg:gap-8 justify-center sm:justify-start lg:justify-center">
                  <img
                    className="h-48 sm:h-32 lg:h-72 w-full sm:w-32 lg:w-full rounded-lg object-cover"
                    src={testimonialOne}
                    alt="testimonialOne"
                  />
                  <div className="w-full flex flex-col justify-end">
                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                      Bound - Trolola
                    </p>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">Jone Duone Joe</h3>
                    <p className="text-sm sm:text-base tracking-wide text-gray-500">
                      Operation Officer
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-[60%] h-full flex flex-col justify-between gap-2 lg:gap-0">
                  <img className="w-16 sm:w-20 lg:w-32 mx-auto lg:mx-0" src={quote} alt="quote" />
                  <div className="w-full h-auto lg:h-[70%] py-4 sm:py-6 lg:py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-3 sm:p-4 lg:p-8 flex flex-col justify-center gap-3 lg:gap-8">
                    <div className="flex flex-col justify-between lg:items-center py-4 sm:py-6 border-b-2 border-b-gray-900">
                      <div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-medium tracking-wide">
                          Travel Mobile App Design.
                        </h3>
                        <p className="text-sm sm:text-base text-gray-400 mt-2 sm:mt-3">
                          via Upwork - Mar 4, 2015 - Aug 30, 2021 test
                        </p>
                      </div>
                      <div className="text-yellow-500 flex gap-1 mt-3 lg:mt-0">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </div>
                    </div>
                    <p className="text-sm sm:text-base font-titleFont text-gray-400 font-medium tracking-wide leading-5 sm:leading-6">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                      dolorum, eos natus ipsum numquam veniam officia
                      necessitatibus ratione quos debitis exercitationem
                      repudiandae facilis id neque nihil accusantium perspiciatis
                      repellat? Iste.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ================ Slider Two ================== */}
            <div className="w-full">
              <div className="w-full h-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-8 px-2">
                <div className="w-full lg:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 sm:p-6 lg:p-8 rounded-lg shadow-shadowOne flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-6 lg:gap-8 justify-center sm:justify-start lg:justify-center">
                  <img
                    className="h-48 sm:h-32 lg:h-72 w-full sm:w-32 lg:w-full rounded-lg object-cover"
                    src={testimonialTwo}
                    alt="testimonialTwo"
                  />
                  <div className="w-full flex flex-col justify-end">
                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                      Bound - Trolola
                    </p>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">Jone Duone Joe</h3>
                    <p className="text-sm sm:text-base tracking-wide text-gray-500">
                      Operation Officer
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-[60%] h-full flex flex-col justify-between gap-4 lg:gap-0">
                  <img className="w-16 sm:w-20 lg:w-32" src={quote} alt="quote" />
                  <div className="w-full h-auto lg:h-[70%] py-6 sm:py-8 lg:py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 sm:p-6 lg:p-8 flex flex-col justify-center gap-4 lg:gap-8">
                    <div className="flex flex-col justify-between lg:items-center py-4 sm:py-6 border-b-2 border-b-gray-900">
                      <div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-medium tracking-wide">
                          Travel Mobile App Design.
                        </h3>
                        <p className="text-sm sm:text-base text-gray-400 mt-2 sm:mt-3">
                          via Upwork - Mar 4, 2015 - Aug 30, 2021 test
                        </p>
                      </div>
                      <div className="text-yellow-500 flex gap-1 mt-3 lg:mt-0">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </div>
                    </div>
                    <p className="text-sm sm:text-base font-titleFont text-gray-400 font-medium tracking-wide leading-5 sm:leading-6">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                      dolorum, eos natus ipsum numquam veniam officia
                      necessitatibus ratione quos debitis exercitationem
                      repudiandae facilis id neque nihil accusantium perspiciatis
                      repellat? Iste.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ================ Slider Three ================== */}
            <div className="w-full">
              <div className="w-full h-auto flex flex-col lg:flex-row justify-between gap-6 lg:gap-8 px-2">
                <div className="w-full lg:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 sm:p-6 lg:p-8 rounded-lg shadow-shadowOne flex flex-col sm:flex-row lg:flex-col gap-4 sm:gap-6 lg:gap-8 justify-center sm:justify-start lg:justify-center">
                  <img
                    className="h-48 sm:h-32 lg:h-72 w-full sm:w-32 lg:w-full rounded-lg object-cover"
                    src={testimonialOne}
                    alt="testimonialOne"
                  />
                  <div className="w-full flex flex-col justify-end">
                    <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                      Bound - Trolola
                    </p>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">Jone Duone Joe</h3>
                    <p className="text-sm sm:text-base tracking-wide text-gray-500">
                      Operation Officer
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-[60%] h-full flex flex-col justify-between gap-4 lg:gap-0">
                  <img className="w-16 sm:w-20 lg:w-32" src={quote} alt="quote" />
                  <div className="w-full h-auto lg:h-[70%] py-6 sm:py-8 lg:py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 sm:p-6 lg:p-8 flex flex-col justify-center gap-4 lg:gap-8">
                    <div className="flex flex-col justify-between lg:items-center py-4 sm:py-6 border-b-2 border-b-gray-900">
                      <div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-medium tracking-wide">
                          Travel Mobile App Design.
                        </h3>
                        <p className="text-sm sm:text-base text-gray-400 mt-2 sm:mt-3">
                          via Upwork - Mar 4, 2015 - Aug 30, 2021 test
                        </p>
                      </div>
                      <div className="text-yellow-500 flex gap-1 mt-3 lg:mt-0">
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                        <RiStarFill />
                      </div>
                    </div>
                    <p className="text-sm sm:text-base font-titleFont text-gray-400 font-medium tracking-wide leading-5 sm:leading-6">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                      dolorum, eos natus ipsum numquam veniam officia
                      necessitatibus ratione quos debitis exercitationem
                      repudiandae facilis id neque nihil accusantium perspiciatis
                      repellat? Iste.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;