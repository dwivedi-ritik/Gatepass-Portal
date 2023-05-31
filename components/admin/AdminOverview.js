import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";

// Chart js is having issue in production for now i have to remove it from producton
import ShowChart from "./ShowChart";

import Spinner from "../Spinner"

export default function AdminOverview({ user }) {
    let [dashboard, setDashboard] = useState({})
    let [showSpinner, setShowSpinner] = useState(true)
    let [pieChartData, setPieChartData] = useState([])
    useEffect(() => {
        fetch("/api/gatepass/getPassCount")
            .then(res => res.json())
            .then(respo => {
                setDashboard(respo)
                setShowSpinner(false)
            })
        fetch("/api/gatepass/getDashboardPieChart")
            .then(res => res.json())
            .then(data => {
                setPieChartData(data)
            })
    }, [])


    return (
        <>
            {showSpinner && <Spinner />}
            {!showSpinner &&
                <div className="w-full bg-gray-50">
                    <div className="mx-4">
                        <AdminNav title={"Overviews"} user={user} />
                        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
                            <div className="flex h-32 flex-col items-center justify-center rounded  bg-sky-100 border-sky-600">
                                <p className="text-lg font-semibold text-gray-400">Pending</p>
                                <p className="text-3xl font-semibold">{dashboard.pendingCount}</p>
                            </div>
                            <div className="flex h-32 flex-col items-center justify-center rounded   bg-green-50 border-green-600">
                                <p className="text-lg font-semibold text-gray-600">Approved</p>
                                <p className="text-3xl font-semibold">{dashboard.approveCount}</p>
                            </div>
                            <div className="flex h-32 flex-col items-center justify-center rounded  bg-red-50 border-red-600">
                                <p className="text-lg font-semibold text-gray-400">Rejected</p>
                                <p className="text-3xl font-semibold">{dashboard.rejectCount}</p>
                            </div>
                            <div className="flex h-32 flex-col items-center justify-center rounded border bg-indigo-50">
                                <p className="text-lg font-semibold text-gray-400">Total</p>
                                <p className="text-3xl font-semibold">{dashboard.pendingCount + dashboard.approveCount + dashboard.rejectCount}</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="w-full h-96 border bg-white rounded mt-3"> */}

                    <div className="flex mt-4 flex-col md:flex-row justify-between mx-4">
                        <div className="mt-4 ml-4">
                            <p className="text-lg font-semibold text-gray-800">Total Requests</p>
                            <p className="text-xs text-gray-400">as of {new Date().toLocaleString()}</p>


                            <ShowChart arr={pieChartData} />
                        </div>
                        <div className="grid grid-cols-2 justify-center md:grid-cols-1 md:w-1/2 mt-12 md:mt-4">
                            <div className="h-20  border flex flex-col items-center justify-center">
                                <p className="text-sm text-gray-400">Resolved</p>
                                <p className="text-lg font-semibold">{dashboard.rejectCount + dashboard.approveCount}</p>
                            </div>
                            <div className="h-20  border flex flex-col items-center justify-center">
                                <p className="text-sm text-gray-400">Received</p>
                                <p className="text-sm font-semibold">{dashboard.pendingCount + dashboard.approveCount + dashboard.rejectCount}</p>
                            </div>
                            <div className="h-20  border flex flex-col items-center justify-center">
                                <p className="text-sm text-gray-400">Average Time</p>
                                <p className="text-sm font-semibold">12hr</p>
                            </div>
                            <div className="h-20  border flex flex-col items-center justify-center">
                                <p className="text-sm text-gray-400">Approval Ratio</p>
                                <p className="text-sm font-semibold">{((dashboard.approveCount / (dashboard.pendingCount + dashboard.approveCount + dashboard.rejectCount)) * 100).toFixed(2)}%</p>
                            </div>
                        </div>
                    </div>
                    {/* </div>   */}

                </div>
            }
        </>
    )
}