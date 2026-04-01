import React from "react";
import BannerImage from "../assets/banner.png";
import ButtonImg from "../assets/Play.png";

const Banner = () => {
  return (
    <div className="my-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Section */}
        <div className="banner-left flex-1 space-y-5 text-center lg:text-left">
          <div className="badge badge-soft badge-primary mx-auto lg:mx-0">
            New: Ai powered Tools Available
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Supercharge Your <br className="hidden sm:block" />
            Digital Workflow
          </h1>

          <p className="max-w-[450px] mx-auto lg:mx-0 text-sm sm:text-base">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
            <button className="btn btn-primary rounded-full w-full sm:w-auto">
              Explore Products
            </button>

            <button className="btn rounded-full border border-purple-500 w-full sm:w-auto flex items-center gap-2">
              <img src={ButtonImg} alt="Play" className="w-4 h-4" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="banner-right flex-1 flex justify-center lg:justify-end">
          <img
            src={BannerImage}
            alt="Banner"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
