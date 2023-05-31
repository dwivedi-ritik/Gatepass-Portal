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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-36 h-36 -mt-16 text-red-400">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                    </svg>

                </div>
                <div className='mt-3 flex justify-center w-full'>
                    <Image
                        text={"https://gatepass.vercel.app" + '/qr/verify/' + props.qrUrl}
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
                    <p className='text-red-500 italic  text-lg font-semibold text-center'>Rejected</p>
                </div>
            </div>
        </div>
    )
}