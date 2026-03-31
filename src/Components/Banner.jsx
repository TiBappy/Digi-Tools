import React from "react";
import BannerImage from "../assets/banner.png";

const Banner = () => {
  return (
    <div className="my-15">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="banner-left space-y-5">
          <div className="badge badge-soft badge-primary ">
            New: Ai powered Tools Available
          </div>

          <h1 className="text-5xl font-bold ">
            Supercharge Your <br />
            Digital Workflow
          </h1>
          <p className="max-w-[450px] mx-auto">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
          <div className="flex gap-4 items-center">
            <button className="btn btn-primary rounded-full">
              Explore Products
            </button>
            <button className="btn rounded-full border border-purple-500">
              Watch Demo
            </button>
          </div>
        </div>
        <div className="banner-right">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
