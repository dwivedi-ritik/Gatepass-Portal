import React from 'react'
import Link from 'next/link'
import { useQRCode } from 'next-qrcode'
export default function Pending(props) {
    const { Image } = useQRCode()
    return (
        <div className=''>
            <div className="w-full pl-4 flex justify-start mt-4 font-semibold cursor-pointer" href="/">
                <div className='flex  items-center gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-indigo-700 rounded-lg">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                    <Link href="/">
                        <a className=' text-indigo-600 tracking-wide text-xs' >Back to home</a>
                    </Link>
                </div>
            </div>
            <div className='w-3/4 md:w-1/3 h-auto mt-24 mx-auto'>
                <div className='flex justify-center w-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-36 h-36 -mt-16 text-green-400">
                        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div className='mt-3 flex justify-center w-full'>
                    <Image
                        text={'https://www.github.com/dwivedi-ritik'}
                        options={{
                            type: 'image/jpeg',
                            quality: 0.3,
                            level: 'M',
                            margin: 3,
                            scale: 4,
                            width: 160,
                        }}
                    />
                </div>
                <div className='px-3 py-4'>
                    <p className='text-green-500 italic  text-lg font-semibold text-center'>Approved</p>
                    <p className='text-xs italic text-center mt-3'>This Token will be only be valid before Arrival Date</p>
                </div>
               
            </div>
        </div>
    )
}