import React from "react";

export default function Error() {
    return (
        <section class="bg-white ">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="mx-auto max-w-screen-sm text-center">
                    <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 ">404</h1>
                    <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">Something's missing.</p>
                    <p class="mb-4 text-lg text-gray-500">Sorry, we can't find that page. Maybe the token id is invalid </p>
                </div>
            </div>

            <div className="w-full flex justify-center mt-4 font-semibold cursor-pointer" href="/">
                <div className='flex  items-center gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-indigo-700 rounded-lg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    <a className=' text-indigo-600 tracking-wide text-xs' href="/">Back to home</a>
                </div>
            </div>
        </section>
    )
}