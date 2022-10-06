import React, { useEffect, useState } from "react";
import AdminNav from "./AdminNav";
import Spinner from "../Spinner"

// Chart configuration
import {
    Chart as ChartJS,
    CategoryScale,
    Filler,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Filler,
    Tooltip,
    Legend
);
const ShowChart = () => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
        },
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Resolved',
                lineTension: 0.2,
                data: [0, 0, 0, 0, 12, 3, 4, 0, 0, 11, 12],
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Unresolved',
                lineTension: 0.2,
                data: [0, 12, 3, 0, 12, 3, 4, 4, 2, 19, 3],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <div >
            <Line options={options} data={data} />;
        </div>
    )
}

export default function MaintenanceOverview() {
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
                    <AdminNav title={"Maintenance Overviews"} />
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
                    <ShowChart />
                </div>
            </div>
        </>
    )
}