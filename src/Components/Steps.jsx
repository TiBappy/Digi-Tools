import React from "react";
import step1 from "../assets/user.png";
import step2 from "../assets/package.png";
import step3 from "../assets/rocket.png";

const Steps = () => {
  return (
    <div className="bg-green-50 mt-20 py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="space-y-3 mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Get Started in 3 Steps
          </h2>
          <p className="text-sm text-neutral-600 max-w-md mx-auto">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 h-full flex flex-col items-center text-center">
            <img src={step1} alt="Create Account" className="w-16 h-16 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Create Account</h3>
            <p className="text-sm text-gray-600">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 h-full flex flex-col items-center text-center">
            <img src={step2} alt="Start Creating" className="w-16 h-16 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Start Creating</h3>
            <p className="text-sm text-gray-600">
              Download and start using your premium tools immediately.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 h-full flex flex-col items-center text-center">
            <img src={step3} alt="Choose Products" className="w-16 h-16 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Choose Products</h3>
            <p className="text-sm text-gray-600">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
