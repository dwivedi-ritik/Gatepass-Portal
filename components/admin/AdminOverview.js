import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import ShowChart from "./ShowChart";


export default function AdminOverview() {
    let [dashboard, setDashboard] = useState({})
    useEffect(() => {
        fetch("/api/gatepass/getPassCount")
            .then(res => res.json())
            .then(data => setDashboard(data))
    }, [])


    return (
        <div className="w-full bg-gray-50">
            <div className="mx-4">
                <AdminNav />
                <div className="mt-8 flex gap-3">
                    <div className="flex h-32 w-1/4 flex-col items-center justify-center rounded border bg-white">
                        <p className="text-lg font-semibold text-gray-400">Pending</p>
                        <p className="text-3xl font-semibold">{dashboard.pendingCount}</p>
                    </div>
                    <div className="flex h-32 w-1/4 flex-col items-center justify-center rounded border-2 border-indigo-600 bg-white">
                        <p className="text-lg font-semibold text-indigo-600">Approved</p>
                        <p className="text-3xl font-semibold text-indigo-600">{dashboard.approveCount}</p>
                    </div>
                    <div className="flex h-32 w-1/4 flex-col items-center justify-center rounded border bg-white">
                        <p className="text-lg font-semibold text-gray-400">Rejected</p>
                        <p className="text-3xl font-semibold">{dashboard.rejectCount}</p>
                    </div>
                    <div className="flex h-32 w-1/4 flex-col items-center justify-center rounded border bg-white">
                        <p className="text-lg font-semibold text-gray-400">Total</p>
                        <p className="text-3xl font-semibold">{dashboard.pendingCount + dashboard.approveCount + dashboard.rejectCount}</p>
                    </div>
                </div>
                <div className="w-full h-96 border bg-white rounded mt-3 ">

                    <div className="flex items-center justify-between">
                        <div className="mt-4 ml-4">
                            <p className="text-lg font-semibold text-gray-800">Total Requests</p>
                            <p className="text-xs text-gray-400">as of {new Date().toLocaleString()}</p>
                            <ShowChart />
                        </div>
                        <div className="flex flex-col mt-4 mr-4">
                            <div className="h-20 w-96 border flex flex-col items-center justify-center">
                                <p className="text-sm text-gray-400">Resolved</p>
                                <p className="text-lg font-semibold">{dashboard.rejectCount + dashboard.approveCount}</p>
                            </div>
                            <div className="h-20 w-96 border flex flex-col items-center justify-center">
                                <p className="text-sm text-gray-400">Received</p>
                                <p className="text-sm font-semibold">{dashboard.pendingCount + dashboard.approveCount + dashboard.rejectCount}</p>
                            </div>
                            <div className="h-20 w-96 border flex flex-col items-center justify-center">
                                <p className="text-sm text-gray-400">Average Time</p>
                                <p className="text-sm font-semibold">12hr</p>
                            </div>
                            <div className="h-20 w-96 border flex flex-col items-center justify-center">
                                <p className="text-sm text-gray-400">Approval Ratio</p>
                                <p className="text-sm font-semibold">{(dashboard.pendingCount / dashboard.approveCount) * 100}%</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}