import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import Spinner from "../Spinner"
import ShowChart from "./ShowChart";

import MaintenanceAreaChart from "../maitenance/MaintenanceAreaChart";

export default function MaintenanceOverview(props) {
    let [dashboardData, setDashboardData] = useState({})
    let [showSpinner, setShowSpinner] = useState(true)
    useEffect(() => {
        fetch('/api/maintenance/getDashboard')
            .then(res => res.json())
            .then(data => {
                setDashboardData(data)
                setShowSpinner(false)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <>
            {showSpinner && <Spinner />}
            <div className="w-full bg-gray-50">
                <div className="mx-4">
                    <AdminNav title={"Maintenance Overviews"} user={props.user} />
                    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="flex h-32 flex-col items-center justify-center rounded  bg-sky-100 border-sky-600">
                            <p className="text-lg font-semibold text-gray-400">In Progress</p>
                            <p className="text-3xl font-semibold">{dashboardData.inProgressDocs}</p>
                        </div>
                        <div className="flex h-32 flex-col items-center justify-center rounded   bg-green-50 border-green-600">
                            <p className="text-lg font-semibold text-gray-600">Resolved</p>
                            <p className="text-3xl font-semibold">{dashboardData.resolvedDocs}</p>
                        </div>
                        <div className="flex h-32 flex-col items-center justify-center rounded  bg-red-50 border-red-600">
                            <p className="text-lg font-semibold text-gray-400">Unresolved</p>
                            <p className="text-3xl font-semibold">{dashboardData.unresolvedDocs}</p>
                        </div>
                        <div className="flex h-32 flex-col items-center justify-center rounded border bg-indigo-50">
                            <p className="text-lg font-semibold text-gray-400">Total</p>
                            <p className="text-3xl font-semibold">{dashboardData.total}</p>
                        </div>
                    </div>
                    <div className="flex mt-4 flex-col md:flex-row mx-4 md:space-x-3">
                        <div className="mt-4 w-full">
                            <p className="text-lg font-semibold text-gray-800">Total Requests</p>
                            <p className="text-xs text-gray-400">as of {new Date().toLocaleString()}</p>
                            <div className="mt-2">
                                <MaintenanceAreaChart />
                            </div>
                            {/* <ShowChart arr={[dashboardData.inProgressDocs, dashboardData.resolvedDocs, dashboardData.unresolvedDocs]} /> */}
                        </div>
                        <div className="grid grid-cols-2 justify-center md:grid-cols-1 md:w-1/2 mt-12 md:mt-4">
                            <div className="h-20  border flex flex-col items-center justify-center">
                                <p className="text-sm text-gray-400">Resolved</p>
                                <p className="text-lg font-semibold">{dashboardData.resolvedDocs}</p>
                            </div>
                            <div className="h-20  border flex flex-col items-center justify-center">
                                <p className="text-sm text-gray-400">Received</p>
                                <p className="text-sm font-semibold">{dashboardData.total}</p>
                            </div>
                            <div className="h-20  border flex flex-col items-center justify-center">
                                <p className="text-sm text-gray-400">Unresolved</p>
                                <p className="text-sm font-semibold">{dashboardData.unresolvedDocs}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}