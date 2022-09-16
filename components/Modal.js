import React from 'react'
export default function Modal(props) {
    return (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex flex-shrink-0 items-center justify-center rounded-full sm:mx-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-16 w-16 text-green-400">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3 className="text-lg leading-6 text-gray-800 font-semibold" id="modal-title">Your Token is Generated</h3>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">You can track your Get Pass Approval using this token</p>
                                    </div>
                                    <ul className='mx-3 mt-3 text-start list-disc text-xs text-gray-500 tracking-wide'>
                                        <li>Do not forget the token id</li>
                                        <li>Valid token only those which are approved</li>
                                        <li>Warden must have to approve your token</li>
                                        <li>Track your pass using below link</li>
                                    </ul>
                                </div>
                            </div>
                            <div className='my-3 w-full flex justify-center'>
                                <p className='bg-gray-100 px-3 py-2 rounded-md text-gray-600 '>123872</p>
                            </div>
                            <div className='w-full flex justify-center '>
                                <a className='text-indigo-600 underline italic text-xs'>https://www.getpass.com/status/123872</a>
                            </div>
                        </div>
                        <div className="bg-gray-100 px-4 py-3 flex justify-between flex-row-reverse">
                            <a type="button" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700  sm:text-sm">Check Status</a>
                            <div className='flex  items-center gap-1 cursor-pointer' >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-indigo-700 rounded-lg">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                </svg>
                                <a className='text-indigo-600 tracking-wide text-xs' href="/status">Create new pass</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}