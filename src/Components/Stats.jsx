import React from 'react';

const Stats = () => {
    return (
        <div className='bg-purple-500'>
            <div className='max-w-5xl mx-auto flex justify-between text-white'>
                <div>
                    <h1 className='text-3xl font-bold'>50K+</h1>
                    <p>Active User</p>
                </div>
                <div>
                    <h1>200+</h1>
                    <p>Premium Tools</p>
                </div>
                <div>
                    <h1>4.9</h1>
                    <p>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;