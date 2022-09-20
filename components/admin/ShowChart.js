import react, { useEffect, useState } from "react";

import "chart.js/auto"
import { Chart } from "react-chartjs-2";

import { chartjsData, chartjsOption } from "../../utils/constants"

export default function ShowChart(props) {
    let [tom, setTom] = useState(chartjsData)
    let [showChart , setShowChart ] =useState(false)
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
                {showChart && <Chart type='line' data={chartjsData} options={chartjsOption} height={"220px"} width={"600px"} />}
            </div>
    );
}