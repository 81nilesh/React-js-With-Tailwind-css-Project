import React from 'react';
import img from "../assets/img/img.jpg"
const Experts = () => {
    return (
        <div className='max-w-[1240px] p-3  mx-auto my-10 md:grid grid-cols-2'>
            <div className='col-span-1 md:w-[80%] text-center'>
                <img src={img} alt="" className='inline' />
            </div>
            <div className='col-span-1 flex flex-col justify-center'>
                <h1 className='text-[#00df9a] text-[25px] font-bold my-2'>Learn From Experts</h1>
                <p className='my-2 text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea at quod consectetur
                    accusamus quasi, sit tempora repellat aut voluptatibus cum consequuntur velit unde, magni
                    omnis optio eius nostrum nesciunt beatae magnam. Ad quo saepe labore velit iusto repellendus
                    eos, officiis aliquam id exercitationem et quod? Quisquam
                    voluptatem quod saepe dignissimos?</p>
                <button className='w-[30%] bg-black text-white p-3 rounded'>Get Started</button>
            </div>
        </div>
    );
}

export default Experts;
