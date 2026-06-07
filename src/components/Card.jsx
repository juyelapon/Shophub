import React from 'react'

const products = [
    { img: "/img (1).png", name: "Wireless Headphones", desc: "Premium quality sound", price: "$99.99" },
    { img: "/img (2).png", name: "Smartphone Pro", desc: "Latest technology", price: "$799.99" },
    { img: "/img (3).png", name: "Designer Sneakers", desc: "Comfortable & stylish", price: "$129.99" },
    { img: "/img (4).png", name: "Gaming Laptop", desc: "High performance", price: "$1,299.99" },
]

const Card = () => {
    return (
        <section className='bg-[#E5E7EB]'>
            <div className='max-w-7xl mx-auto px-4'>

                {/* Header */}
                <div className='pt-16 flex justify-between items-center mb-8'>
                    <h3 className='text-3xl font-bold font-inter'>Featured Products</h3>
                    <a className='font-medium text-base font-inter text-[#3B82F6]' href="#">View all</a>
                </div>

                {/* Cards grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-16'>
                    {products.map((product, i) => (
                        <div key={i} className='bg-white rounded-lg overflow-hidden flex flex-col'>

                            {/* Image */}
                            <div className='p-4'>
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className='w-full h-48 object-contain'
                                />
                            </div>

                            {/* Info */}
                            <div className='px-4 flex flex-col flex-1'>
                                <h3 className='font-semibold text-base font-inter mb-1'>{product.name}</h3>
                                <p className='text-sm text-gray-400 mb-3'>{product.desc}</p>

                                {/* Price + Button */}
                                <div className='flex items-center justify-between mt-auto pb-4'>
                                    <span className='font-bold text-xl font-inter'>{product.price}</span>
                                    <button className='bg-[#3B82F6] rounded-lg p-2.5'>
                                        <img src="/storee.png" alt="add to cart" className='w-5 h-5' />
                                    </button>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Card