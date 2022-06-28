import React from 'react'

const Product = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
        <div className="flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">
            <div>
                <img src="https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYWRzZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" alt="" className='mx-auto w-60 duration-200 hover:scale-105 ' />
            </div>
            <div className="flex flex-col space-y-6">
                <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
                    <div>
                        <div className="inline-block px-3 py-1 text-sm text-white bg-black rounded-full">Free Shipping</div>

                    </div>
                    <div className="max-w-sm text-2xl font-medium">Lorem ipsum dolor sit amet consectetur</div>
                    <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
                        <p className="line-through">$799</p>
                        <p className="text-5xl font-bold">$599</p>
                        <p className="text-sm font-light text-gray-400">This offer is valid until April 3rd or as long as stock lasts!</p>
                    </div>
                    <div className="group">
                        <button className='w-full transition-all duration-150 bg-blue-700 text-white border-b-8 border-b-blue-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-t-blue-700 group-hover:shadow-lg'>
                            <div className='duration-150 px-8 py-4 bg-blue-500 rounded-lg group-hover:bg-blue-700'>
                                Add to cart
                            </div>
                        </button>
                    </div>
                        <div className="flex items-center space-x-3 group">
                            <div className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping"></div>
                            <div className="text-sm">
                                50+ pcs. in stock
                            </div>

                            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
                                <button className='flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadoe-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150'>
                                    <img src="https://images.unsplash.com/photo-1559724087-a45f6a7a35d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2NhbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" className='w-8' />
                                    <span>Add to cart</span>
                                </button>
                                <button className='flex items-center justify-center py-3 px-5 space-x-3 border-2 border-gray-300 rounded-lg shadoe-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150'>
                                    <img src="https://images.unsplash.com/photo-1550439694-0cc5e82d1179?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY2slMjBoZWFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className='w-8' />
                                    <span>Add to wishlist</span>
                                </button>
                            </div>
                        </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Product