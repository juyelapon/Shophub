import React from 'react'

const Second = () => {
    return (
        <section className='bg-[#FFFFFF]'>
            <div className="container">
                <h2 className='font-inter font-bold leading-9 text-3xl mt-16 text-center'> Shop by Category</h2>
                <div className='flex gap-32.5 mt-33 mb-16'>
                    <div class="flex flex-col items-center gap-4">

                        <div class="w-20 h-20 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">

                            <img
                                src="public/pc.png"
                                alt=""
                                class="w-8 h-8 object-contain"
                            />

                        </div>

                        <h3 class="text-2xl font-medium">
                            Electronics
                        </h3>

                    </div>
                    <div class="flex flex-col items-center gap-4">

                        <div class="w-20 h-20 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">

                            <img
                                src="public/fashion.png"
                                alt=""
                                class="w-8 h-8 object-contain"
                            />

                        </div>

                        <h3 class="text-2xl font-medium">
                            Fashion
                        </h3>

                    </div>
                    <div class="flex flex-col items-center gap-4">

                        <div class="w-20 h-20 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">

                            <img
                                src="public/homee.png"
                                alt=""
                                class="w-8 h-8 object-contain"
                            />

                        </div>

                        <h3 class="text-2xl font-medium">
                            Home
                        </h3>

                    </div>
                    <div class="flex flex-col items-center gap-4">

                        <div class="w-20 h-20 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">

                            <img
                                src="public/sports.png"
                                alt=""
                                class="w-8 h-8 object-contain"
                            />

                        </div>

                        <h3 class="text-2xl font-medium">
                            Sports
                        </h3>

                    </div>
                    <div class="flex flex-col items-center gap-4">

                        <div class="w-20 h-20 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">

                            <img
                                src="public/bools.png"
                                alt=""
                                class="w-8 h-8 object-contain"
                            />

                        </div>

                        <h3 class="text-2xl font-medium">
                            Books
                        </h3>

                    </div>
                    <div class="flex flex-col items-center gap-4">

                        <div class="w-20 h-20 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">

                            <img
                                src="public/gaming.png"
                                alt=""
                                class="w-8 h-8 object-contain"
                            />

                        </div>

                        <h3 class="text-2xl font-medium">
                            Gaming
                        </h3>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Second