import React from 'react';

const NewsLatter = () => {
    return (
        <div className='bg-[#2699fb] p-4'>
            <div className='max-w-[1240px] mx-auto md:flex justify-between py-[40px]'>
                <div className='m-2'>
                    <h1 className='text-[20px] md:text-[40px] font-bold text-white'>Want to learn latest I.T skills?</h1>
                    <span className='text-white'>Sign up to our newslatter and stay up to date</span>
                </div>
                <div className='m-2'>
                    <input type="text" className='ms:w-full rounded mb-2 p-3 mr-2 text-[grey]' placeholder="Email" />
                    <button className='bg-black text-white p-3 rounded'>Get Started</button>
                    <br />
                    <p className='p-3 text-white'>
                        We care about the protection of your data. <br /> <a href="" className='text-black'> Read our Privacy Policy.</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default NewsLatter;
