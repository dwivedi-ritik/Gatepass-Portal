import React from "react";
import AdminNav from "./AdminNav";
export default function AdminOverview() {
    return (
        <div className="w-full bg-gray-50">
            <div className="mx-4">
                <AdminNav />
                <div className="mt-8 flex gap-3">
                    <div className="flex h-32 w-1/4 flex-col items-center justify-center rounded border bg-white">
                        <p className="text-lg font-semibold text-gray-400">Pending</p>
                        <p className="text-3xl font-semibold">60</p>
                    </div>
                    <div className="flex h-32 w-1/4 flex-col items-center justify-center rounded border-2 border-indigo-600 bg-white">
                        <p className="text-lg font-semibold text-indigo-600">Approved</p>
                        <p className="text-3xl font-semibold text-indigo-600">45</p>
                    </div>
                    <div className="flex h-32 w-1/4 flex-col items-center justify-center rounded border bg-white">
                        <p className="text-lg font-semibold text-gray-400">Rejected</p>
                        <p className="text-3xl font-semibold">50</p>
                    </div>
                    <div className="flex h-32 w-1/4 flex-col items-center justify-center rounded border bg-white">
                        <p className="text-lg font-semibold text-gray-400">Total</p>
                        <p className="text-3xl font-semibold">90</p>
                    </div>
                </div>
                <div className="w-full h-96 border bg-white rounded mt-3 ">

                    <div className="flex justify-between">
                        <div className="mt-4 ml-4">
                            <p className="text-lg font-semibold text-gray-800">Total Requests</p>
                            <p className="text-xs text-gray-400">as of 25 May 2019, 09:41 PM</p>
                        </div>
                        <div className="flex flex-col mt-4 mr-4">
                            <div className="h-20 w-44 border flex flex-col items-center justify-center">
                                <p className="text-sm text-gray-400">Resolved</p>
                                <p className="text-lg font-semibold">90</p>
                            </div>
                            <div className="h-20 w-44 border flex flex-col items-center justify-center">
                                <p className="text-sm text-gray-400">Received</p>
                                <p className="text-sm font-semibold">234</p>
                            </div>
                            <div className="h-20 w-44 border flex flex-col items-center justify-center">
                                <p className="text-sm text-gray-400">Average Time</p>
                                <p className="text-sm font-semibold">50ms</p>
                            </div>
                            <div className="h-20 w-44 border flex flex-col items-center justify-center">
                                <p className="text-sm text-gray-400">Approval Ratio</p>
                                <p className="text-sm font-semibold">59.12%</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}