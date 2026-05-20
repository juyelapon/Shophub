import React from 'react'

const Card = () => {
    return (
        <section className='bg-[#E5E7EB]'>
            <div className="container">
                <div className='pt-16 flex justify-between mb-8'>
                    <h3 className='text-3xl font-bold leading-9 font-inter'> Featured Products</h3>
                    <a className='font-medium text-base leading-6 font-inter text-[#3B82F6]' href=""> view all</a>
                </div>
                <div className='flex gap-6'>
                    <div className='w-71.5 h-86 bg-[#FFFFFF] rounded-lg mb-13'>
                        <img className='pt-4 px-4' src="public/img (1).png" alt="" />
                        <h3 className='font-semibold text-base font-inter mt-4 mb-2 pl-4'>Wireless Headphones</h3>
                        <p className='text-base font-inter text[#E5E7EB] mb-3 pl-4'>Premium quality sound</p>
                        <span className='font-bold leading-7 font-inter text-2x2 pl-4'> $99.99</span>
                        <button className='bg-[#3B82F6] w-12.5 h-10 rounded-lg py-3 px-4 ml-39'>
                            <img src="public/storee.png" alt="" />
                        </button>
                    </div>
                    <div className='w-71.5 h-86 bg-[#FFFFFF] rounded-lg'>
                        <img className='pt-4 px-4' src="public/img (2).png" alt="" />
                        <h3 className='font-semibold text-base font-inter mt-4 mb-2 pl-4'>Smartphone Pro</h3>
                        <p className='text-base font-inter text[#E5E7EB] mb-3 pl-4'>Latest technology</p>
                        <span className='font-bold leading-7 font-inter text-2x2 pl-4'> $799.99</span>
                        <button className='bg-[#3B82F6] w-12.5 h-10 rounded-lg py-3 px-4 ml-39'>
                            <img src="public/storee.png" alt="" />
                        </button>
                    </div>
                    <div className='w-71.5 h-86 bg-[#FFFFFF] rounded-lg'>
                        <img className='pt-4 px-4' src="public/img (3).png" alt="" />
                        <h3 className='font-semibold text-base font-inter mt-4 mb-2 pl-4'>Designer Sneakers</h3>
                        <p className='text-base font-inter text[#E5E7EB] mb-3 pl-4'>Comfortable & stylish</p>
                        <span className='font-bold leading-7 font-inter text-2x2 pl-4'> $129.99</span>
                        <button className='bg-[#3B82F6] w-12.5 h-10 rounded-lg py-3 px-4 ml-39'>
                            <img src="public/storee.png" alt="" />
                        </button>
                    </div>
                    <div className='w-71.5 h-86 bg-[#FFFFFF] rounded-lg'>
                        <img className='pt-4 px-4' src="public/img (4).png" alt="" />
                        <h3 className='font-semibold text-base font-inter mt-4 mb-2 pl-4'>Gaming Laptop</h3>
                        <p className='text-base font-inter text[#E5E7EB] mb-3 pl-4'>High performance</p>
                        <span className='font-bold leading-7 font-inter text-2x2 pl-4'> $1,299.99</span>
                        <button className='bg-[#3B82F6] w-12.5 h-10 rounded-lg py-3 px-4 ml-36'>
                            <img src="public/storee.png" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Card