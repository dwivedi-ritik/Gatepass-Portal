import react, { useEffect, useState } from "react";

import {
    Chart as ChartJS,
    CategoryScale,
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
    Tooltip,
    Legend
);

import { chartjsData, chartjsOption } from "../../utils/constants"

export default function ShowChart(props) {
    let [tom, setTom] = useState(chartjsData)
    let [showChart, setShowChart] = useState(false)
    let olderObj = chartjsData
    useEffect(() => {
        setTom(chartjsData)
        fetch("/api/gatepass/getRequestsInYear")
            .then(res => res.json())
            .then(data => {
                olderObj.datasets[0].data = data.appoveds
                olderObj.datasets[1].data = data.rejecteds
                setTom(olderObj)
                setShowChart(true)

            })
    }, [])

    return (
        <div className="mt-5 p-t-2 ">
            {showChart && <Line type='line' data={chartjsData} options={chartjsOption} height={"220px"} width={"600px"} />}
        </div>
    );
}