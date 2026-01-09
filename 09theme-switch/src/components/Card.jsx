import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg object-fit:cover " src="data:image/jpeg;base64,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" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        A Wolf 
                    </h5>
                </a>
                {/* <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg> */}
                    {/* <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg> */}
                    {/* <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span> */}
                {/* </div> */}
                {/* <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div> */}
            </div>
        </div>
    );
}
