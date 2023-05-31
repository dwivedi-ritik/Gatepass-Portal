import React from "react"

const InvalidTicket = () => {
    return (
        <a href="#_" className="relative px-5 py-2 font-medium text-white group">
            <span className="absolute inset-0 w-full h-full  transform translate-x-0 -skew-x-12 bg-red-500 group-hover:bg-red-700 group-hover:skew-x-12"></span>
            <span className="absolute inset-0 w-full h-full  transform skew-x-12 bg-red-700 group-hover:bg-red-500 group-hover:-skew-x-12"></span>
            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transform -translate-x-8 translate-y-10 bg-red-600 -rotate-12"></span>
            <span className="absolute bottom-0 right-0 hidden w-10 h-20  transform translate-x-10 translate-y-8 bg-red-400 -rotate-12"></span>
            <span className="relative font-extrabold">InValid Token</span>
        </a>)
}

const ValidTicket = () => {
    return (
        <a href="#_" className="relative px-5 py-2 font-medium text-white group">
            <span className="absolute inset-0 w-full h-full  transform translate-x-0 -skew-x-12 bg-green-500 group-hover:bg-green-700 group-hover:skew-x-12"></span>
            <span className="absolute inset-0 w-full h-full  transform skew-x-12 bg-green-700 group-hover:bg-green-500 group-hover:-skew-x-12"></span>
            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transform -translate-x-8 translate-y-10 bg-green-600 -rotate-12"></span>
            <span className="absolute bottom-0 right-0 hidden w-10 h-20  transform translate-x-10 translate-y-8 bg-green-400 -rotate-12"></span>
            <span className="relative font-extrabold">Valid Token</span>
        </a>)
}


export default function QrInfo({ data }) {
    const ticketReview = data.status === 'rejected' || new Date(data.departure) > new Date(data.arrival) || new Date() > new Date(data.arrival) ? <InvalidTicket /> : <ValidTicket />
    console.log(ticketReview)
    return (
        <>  <div className="w-100 mt-12">
            <div className="h-auto mx-4 sm:w-1/3 sm:mx-auto bg-gray-100 p-2 rounded-md border border-gray-4 divide-y-2 divide-dashed">
                <div className="mx-auto py-4">
                    <p className="text-2xl tracking-tight font-extrabold lg:text-3xl text-primary-600 text-center uppercase">{data.status}</p>
                </div>
                <div className="flex justify-between">
                    <div className="p-2">
                        <p className="text-xs text-gray-400">Departure</p>
                        <p className="font-semibold text-sm">{new Date(data.departure).toLocaleDateString()}</p>
                    </div>
                    <div className="p-2">
                        <p className="text-xs text-gray-400 pr-11">Arrival</p>
                        <p className="font-semibold text-sm">{new Date(data.arrival).toLocaleDateString()}</p>
                    </div>
                </div>
                <div className="flex-col">
                    <div className="flex justify-between">
                        <div className="p-2">
                            <p className="text-xs text-gray-400">Name</p>
                            <p className="font-semibold text-sm">{data.firstname + " " + data.lastname} </p>
                        </div>
                        <div className="p-2">
                            <p className="text-xs text-gray-400">Parents No</p>
                            <p className="font-semibold text-sm">{data.parentsNo}</p>
                        </div>

                    </div>
                    <div className="flex justify-between">
                        <div className="p-2">
                            <p className="text-xs text-gray-400">Room No</p>
                            <p className="font-semibold text-sm">{data.roomNo}</p>
                        </div>
                        <div className="p-2">
                            <p className="text-xs text-gray-400">Mobile No</p>
                            <p className="font-semibold text-sm">{data.mobileNo}</p>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <div className="p-2">
                            <p className="text-xs text-gray-400">Branch</p>
                            <p className="font-semibold text-sm">{data.branch}</p>
                        </div>
                        <div className="p-2">
                            <p className="text-xs text-gray-400">Year</p>
                            <p className="font-semibold text-sm pr-11">{data.year}</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center py-3">
                    {ticketReview}
                </div>
                <div className="flex justify-center mb-4">
                    <a className="appearance-none cursor-pointer flex items-center gap-2 rounded-lg border border-transparent h-12 w-1/2 mt-6 bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700  sm:text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>

                        <p className="tracking-wide font-semibold text-xs sm:text-sm" >Download Ticket</p>
                    </a>
                </div>
            </div>

        </div>
        </>
    )
}