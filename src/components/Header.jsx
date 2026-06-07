import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import { GrMenu } from "react-icons/gr";
import { IoClose } from "react-icons/io5";

const navLinks = ['Home', 'Categories', 'Deals', 'About']

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className='w-full border-b border-gray-200 bg-white'>
            <nav className='max-w-7xl mx-auto px-4'>

                {/* Top row */}
                <div className='flex items-center justify-between py-4 gap-4'>

                    {/* Left side — Menu icon + Logo */}
                    <div className='flex items-center gap-3'>
                        {/* Mobile menu toggle — left of logo */}
                        <button
                            className='md:hidden text-gray-700'
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            {menuOpen ? <IoClose size={24} /> : <GrMenu size={22} />}
                        </button>

                        {/* Logo */}
                        <img src="/navlogo.png" alt="logo" className='h-8 w-auto' />
                    </div>

                    {/* Nav links — desktop only */}
                    <ul className='hidden md:flex gap-6'>
                        {navLinks.map((link, i) => (
                            <li key={i} className='cursor-pointer text-gray-700 hover:text-black'>
                                {link}
                            </li>
                        ))}
                    </ul>

                    {/* Search — desktop only */}
                    <div className='relative hidden md:block w-72'>
                        <IoSearchSharp
                            size={16}
                            className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'
                        />
                        <input
                            placeholder='Search products...'
                            className='w-full h-10 pl-9 pr-4 border border-gray-200 rounded-lg outline-none placeholder:text-gray-400 text-sm'
                            type='text'
                        />
                    </div>

                    {/* Right side — Cart + User */}
                    <div className='flex items-center gap-4'>
                        <button className='text-gray-700 hover:text-black'>
                            <IoCart size={22} />
                        </button>
                        <button className='text-gray-700 hover:text-black'>
                            <FaUser size={20} />
                        </button>
                    </div>

                </div>

                {/* Search — mobile only */}
                <div className='pb-4 md:hidden'>
                    <div className='relative w-full'>
                        <IoSearchSharp
                            size={16}
                            className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400'
                        />
                        <input
                            placeholder='Search products...'
                            className='w-full h-10 pl-9 pr-4 border border-gray-200 rounded-lg outline-none placeholder:text-gray-400 text-sm'
                            type='text'
                        />
                    </div>
                </div>

                {/* Mobile menu — dropdown */}
                {menuOpen && (
                    <div className='md:hidden border-t border-gray-100 pb-4'>
                        <ul className='flex flex-col'>
                            {navLinks.map((link, i) => (
                                <li
                                    key={i}
                                    className='px-2 py-3 text-gray-700 hover:text-black hover:bg-gray-50 cursor-pointer rounded-lg transition-colors'
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

            </nav>
        </header>
    )
}

export default Header