import React from "react";
import BannerImage from "../assets/banner.png"

const Banner = () => {
  return (
    <div className="my-15">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="banner-left">
          <div className="badge badge-soft badge-info">Info</div>

          <h1>
            Supercharge Your <br />
            Digital Workflow
          </h1>
          <p>
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
          <div>
            <button>Explore Products</button>
            <button>Watch Demo</button>
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
