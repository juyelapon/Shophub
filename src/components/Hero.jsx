import React from 'react'

const Hero = () => {
    return (
        <section class="hero">
            <div className="container">
                <h1 className='font-bold text-[#FFFFFF] text-6xl leading-15 font-inter pt-35 pb-3'> Summer Sale</h1>
                <h5 className='font-normal text-xl text-[#DBEAFE] font-inter leading-6.5 pb-8'> Up to 70% off on selected items. Limited time offer!</h5>
                <button className='rounded-lg bg-[#FFFFFF] w-[143.05] h-[48] pl-8 pt-2 pb-2.5 pr-7 text-[#2563EB] font-bold font-inter text-base'> Shop Now</button>

                <div class="relative w-148 -mt-18">

                                <img
                                    src="public/hero.png"
                                    alt="hero"
                                    class="w-148 h-80 absolute left-162 top-1/2 -translate-y-1/2"
                                />


                            </div>
            </div>
        </section>
    )
}

export default Hero