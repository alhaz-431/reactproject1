 

import React, { useState, useEffect } from "react";
import thumnailImg from "../assets/video-thumbnail.webp";
import { FaPlay } from "react-icons/fa6";

import { FaCircleArrowRight } from "react-icons/fa6";

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleCloseVideo = () => {
    setIsVideoPlaying(false);
  };

  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsVideoPlaying(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div id="about" className="bg-[#f7f8fc] pb-16 pt-20">
      <div className="container mx-auto">
        <div className="py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8">
          {/* Left Side */}
          <div className="md:w-1/2 w-full mb-8 md:mb-0">
            {!isVideoPlaying ? (
              <div className="relative">
                <img
                  src={thumnailImg}
                  alt="video thumbnail"
                  className="w-full md:h-[446px] h-auto rounded-lg object-cover"
                />
                <button
                  onClick={handleVideoPlay}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 p-3 rounded-full shadow-lg cursor-pointer"
                >
                  <FaPlay className="size-16 text-white p-1" />
                </button>
              </div>
            ) : null}
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 w-full">
            <h1 className="text-4xl font-bold  mb-4  leading-snug">
              {" "}
              Start Your Journey to Mental Wellness
            </h1>

            <p className=" text-lg mb-12 md: pr-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
              vero a quae nesciunt exercitationem laudantium reprehenderit et
              unde natus dicta!
            </p>

            <button className=" bg-green-700 text-white py-3.5 px-8 font-medium rounded-md hover:bg-amber-900">
              <a href="#contact" className="flex gap-1 items-center">
                <span>Get Started</span>
                <FaCircleArrowRight />
              </a>
            </button>
          </div>
        </div>

        {/* Video Popup */}
        {isVideoPlaying && (
          <div
            className={`fixed inset-0 bg-green-900 bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300 ${
              isVideoPlaying ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            onClick={handleCloseVideo}
          >
            <div
              className="relative w-auto h-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/715NXi6WxcQ?si=LH_FCyoN9LlVx3Yo"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
              <button
                onClick={handleCloseVideo}
                className="absolute top-4 right-4 size-12  text-white text-2xl "
              >
                ✖
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
