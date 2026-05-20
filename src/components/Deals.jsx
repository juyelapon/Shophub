import React from 'react'

const Deals = () => {
    return (
        <section>
            <div className="container mx-auto px-4">
                <h2 className='font-inter font-bold text-center text-3xl leading-9 mt-16  mb-8'> Today's Deals</h2>
                <div className="grid grid-cols-3 gap-6">
                    <div className='first rounded-lg'>
                        <h3 className='font-bold font-inter leading-8 text-2xl text-[#FFFFFF] ml-6 mt-6'> Flash Sale</h3>
                        <p className='ml-6 text-base leading-6 font-inter font-normal text-[#FFFFFF] mt-2'> Up to 50% off electronics</p>
                        <button className='ml-6 text[#EF4444] bg-[#FFFFFF] font-bold rounded-lg pl-6 pr-7 pt-2.25 pb-1.25 text-[#EF4444] mt-4'> Shop Now</button>
                    </div>
                    <div className='second rounded-lg'>
                        <h3 className='font-bold font-inter leading-8 text-2xl text-[#FFFFFF] ml-6 mt-6'> Free Shipping</h3>
                        <p className='ml-6 text-base leading-6 font-inter font-normal text-[#FFFFFF] mt-2'> On orders over $50</p>
                        <button className='ml-6 text[#EF4444] bg-[#FFFFFF] font-bold rounded-lg pl-6 pr-7 pt-2.25 pb-1.25 text-[#22C55E] mt-4'> Learn More</button>
                    </div>
                    <div className='third rounded-lg'>
                        <h3 className='font-bold font-inter leading-8 text-2xl text-[#FFFFFF] ml-6 mt-6'> Member Exclusive</h3>
                        <p className='ml-6 text-base leading-6 font-inter font-normal text-[#FFFFFF] mt-2'> Extra 20% off for members</p>
                        <button className='ml-6 text[#EF4444] bg-[#FFFFFF] font-bold rounded-lg pl-6 pr-7 pt-2.25 pb-1.25 text-[#A855F7] mt-4 mb-6'> Join Now</button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Deals