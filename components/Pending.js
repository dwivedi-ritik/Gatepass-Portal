import React from 'react'
import { useQRCode } from 'next-qrcode'
export default function Pending(props) {
    const { Image } = useQRCode()
    return (
        <div className=''>
            <div className='w-3/4 md:w-1/3 h-auto mt-24 mx-auto'>
                <div className='flex justify-center w-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-36 h-36 -mt-16 text-teal-400">
                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
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
                    <p className='text-teal-500 italic  text-lg font-semibold text-center'>Pending</p>
                    <p className='text-xs italic text-center mt-3'>This Token will be only be valid before Arrival Date</p>
                </div>
                <div className='w-full flex justify-center my-4'>
                    <ul className='list-disc text-xs italic text-gray-700'>
                        <li>Only Approved Pass will be valid</li>
                        <li>Show this to the gate person</li>
                        <li>Rahul Bhai Bantai Rapper</li>
                    </ul>

                </div>
            </div>
        </div>
    )
}