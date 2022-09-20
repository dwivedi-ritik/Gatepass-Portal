import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import NavBar from "../../components/NavBar";

export default function Status() {
    const tokenId = useRef("")
    const router = useRouter()

    const getTokenData = () => {
        router.push("/status/" + tokenId.current.value)
    }
    return (
        <div>
            <Head>
                <title>Check status of your token</title>
                <meta lang="en"></meta>
            </Head>
            <NavBar />
            {/* <div className='flex items-center justify-center mt-12 md:mt-8'>
                <div className='w-12 bg-gray-500 h-0.5 rounded-lg'></div>
                <p className='block uppercase tracking-wide text-gray-700 text-lg font-bold mx-3'>Gate Pass Form </p>
                <div className='w-12 bg-gray-500 h-0.5 rounded-lg'></div>
            </div>
            <p className='italic text-xs text-center text-gray-700'>Fill add all the details carefully</p> */}
            <form className="w-full flex flex-wrap justify-center items-center mt-24 gap-2">
                <div className="md:w-1/2 w-3/4">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                        Add Your Token
                    </label>
                    <input ref={tokenId} className="appearance-none h-12 block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-indigo-600" id="grid-zip" type="text" placeholder=""></input>
                </div>
                <div onClick={getTokenData} >
                    <a className="appearance-none cursor-pointer flex items-center gap-2 rounded border border-transparent h-12 mt-6 bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700  sm:text-sm">
                        <p className="tracking-wide font-semibold" >Search</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </a>
                </div>
            </form>
            <div className="w-full flex justify-center mt-4 font-semibold cursor-pointer" href="/">
                <div className='flex  items-center gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-indigo-700 rounded-lg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    <Link href="/">
                        <a className=' text-indigo-600 tracking-wide text-xs' >Back to home</a>
                    </Link>
                </div>
            </div>

        </div>
    )
}