import React from 'react'
import { GrMenu } from "react-icons/gr";
import { IoSearchSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";

const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <div className="container">
                        <div className='flex items-center mt-5 mb-3'>
                            <img src="public/navlogo.png" alt="" />
                            <ul className='hidden md:flex ml-8 gap-8'>
                                <li className='li'> Home</li>
                                <li className='li'> Categories</li>
                                <li className='li'> Deals</li>
                                <li className='li'> About</li>
                            </ul>
                            <div className='relative w-lg ml-20.25'>

                                <IoSearchSharp size={16} className=' absolute -left-40 top-11 md:absolute md:top2/4 md:translate-y-[-325%] md:left-4 md:block' color='#E5E7EB' />
                                <input placeholder='search porducts...' className='absolute -right-10 top-7 w-full md:block md:outline-none md:w-lg md:absolute md:right-0 md:-top-5.5 h-10.5 border border-[#E5E7EB] rounded-lg  pl-10  placeholder: text-[#ADAEBC] font-inter font-normal ' type='text' />


                            </div>
                            <div className='ml-auto flex gap-6'>
                                <button>
                                    <IoCart />
                                </button>

                                <div>
                                    <button>
                                        <FaUser />

                                    </button>
                                </div>
                            </div>


                        </div>

                    </div>
                </nav>

            </header>
        </>
    )
}

export default Header