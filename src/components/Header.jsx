import React from 'react'

const Header = () => {
    return (
        <>
            <header>
                <nav>
                    <div className="container">
                        <div className='flex items-center mt-5 mb-3'>
                            <img src="public/navlogo.png" alt="" />
                            <ul className='flex ml-8 gap-8'>
                                <li className='li'> Home</li>
                                <li className='li'> Categories</li>
                                <li className='li'> Deals</li>
                                <li className='li'> About</li>
                            </ul>
                            <div class="relative w-75">

                                <img
                                    src="./search.png"
                                    alt="search"
                                    class="w-4 absolute left-23.25 top-1/2 -translate-y-1/2"
                                />

                                <input placeholder='search porducts...' className='w-lg h-10.5 border border-[#E5E7EB] rounded-lg ml-20.25 pl-10  placeholder: text-[#ADAEBC] font-inter font-normal' type='text' />

                            </div>

                            <div class="relative w-75">

                                <img
                                    src="public/store.png"
                                    alt="store"
                                    class="w-4 absolute left-100 top-1/2 -translate-y-1/2"
                                />


                            </div>

                            <div class="relative w-75">

                                <img
                                    src="public/user.png"
                                    alt="user"
                                    class="w-4 absolute left-64 top-1/2 -translate-y-1/2"
                                />


                            </div>
                            <div class="relative w-75 -top-4">

                                <img
                                    src="public/red.png"
                                    alt="red"
                                    class="w-4 absolute left-12 top-1/2 -translate-y-1/2"
                                />


                            </div>

                        </div>
                    </div>
                </nav>
                
            </header>
        </>
    )
}

export default Header