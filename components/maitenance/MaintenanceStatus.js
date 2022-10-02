import '../../styles/MaintenanceStatus.module.css'

import React from "react"

export default function MaintenanceStatus() {
    return (
        <>
            <div className="mx-4 mt-16 flex flex-col items-start sm:items-center sm:justify-between">
                <p className="font-bold text-xl">Order #831267</p>
                <p className="text-xs text-gray-500">order placed at <span className="text-gray-600 font-semibold">March 22, 2022</span></p>
            </div>

            <div className="mx-4 sm:mx-auto mt-10 bg-white px-4 pt-4 border-gray-300 border sm:w-[60%]">
                <div className="flex flex-col">
                    <div className="">
                        <p className="font-semibold">Room Maintenance</p>
                        <p className="text-xs font-semibold my-2">Room no: <span>337</span></p>
                        <p className="text-xs text-gray-500 mb-2 w-[80%]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis fugiat ut placeat nemo pariatur quibusdam modi quos iure, iste maiores eum commodi. Nihil, magnam?</p>
                    </div>
                    <div className="mt-4">
                        <p className="font-semibold text-xs">Information</p>
                        <p className="text-xs text-gray-500 my-2">+91880813095, Floor Maintenance</p>
                        <p className="text-xs text-gray-500 my-2">Electrican Requirement</p>

                    </div>
                </div>
                <p className="text-xs font-semibold mt-4">Maintenance status</p>
                <div className="my-8">
                    <div className="relative h-2 w-full rounded-full bg-gray-200">
                        <div className="inprogress h-2 rounded-full bg-blue-600 transition-width">
                            <div className="absolute left-0 h-4 w-4 translate-y-[-25%] rounded-full bg-blue-600">
                                <p className="absolute -top-5 text-xs font-semibold text-blue-800">Unresolved</p>
                            </div>
                            <div className="absolute left-[50%] h-4 w-4 translate-y-[-25%] rounded-full bg-blue-600">
                                <p className="absolute -top-5 -translate-x-[25%] text-xs font-semibold inprogressTitle">InProgress</p>
                            </div>
                            <div className="absolute right-0 h-4 w-4 translate-y-[-25%] rounded-full bg-gray-200">
                                <p className="absolute -top-5 right-0 text-xs font-semibold">Resolved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}