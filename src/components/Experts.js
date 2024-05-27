import React from 'react';
import img from "../assets/img.jpg"

const Experts = () => {
    return (
        <div className='max-w-[1240px] mx-autox my-10 border border-black grid grid-cols-3'>
            <div className='border border-[blue] col-span-1'>
                <img src={img.jpg} alt="" />
            </div>
            <div className='border border-[blue] col-span-2'></div>
        </div>
    );
}

export default Experts;
