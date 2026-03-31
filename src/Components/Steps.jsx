import React from 'react';
import step1 from "../assets/user.png";
import step2 from "../assets/package.png";
import step3 from "../assets/rocket.png";

const Steps = () => {
    return (
        <div className='bg-green-50 mt-20'>
            <div className='max-w-6xl mx-auto p-7 text-center'>
                <div className='space-y-3 '>
                    <h2 className='text-3xl font-bold'>Get Started in 3 Steps</h2>
                    <p className='text-xs text-neutral-600'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6'>
                    <div className='bg-white rounded-lg'>
                        <img src={step1} alt="" />
                        <h3>Create Account</h3>
                        <p>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    <div className='bg-white rounded-lg'>
                        <img src={step2} alt="" />
                        <h3>Start Creating</h3>
                        <p>Download and start using your premium tools immediately.</p>
                    </div>
                    <div className='bg-white rounded-lg'>
                        <img src={step3} alt="" />
                        <h3>Choose Products</h3>
                        <p>Browse our catalog and select the toolsthat fit your needs..</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;