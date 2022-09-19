export const gatePassStatus = {
    PENDING: "pending",
    REJECTED: "rejected",
    APPROVED: "approved"
}

export const chartjsData = {
    labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ],
    datasets: [
        {
            label: "Total Approval",
            borderColor: '#818cf8',
            backgroundColor: 'rgba(50, 115, 220, 0.1)',
            fill: true,
            data: [20, 30, 40, 15, 23, 45, 65, 78, 66, 44, 56, 67, 75],
            lineTension: 0.4,
            pointRadius: 2
        },
        {
            label: "Total Rejected",
            borderColor: '#F87171',
            backgroundColor: 'rgba(255, 56, 96, 0.1)',
            fill: true,
            data: [20, 33, 41, 45, 13, 45, 65, 78, 66, 44, 56, 67, 75],
            lineTension: 0.4,
            pointRadius: 2
        },

    ]
}

export const chartjsOption = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {

        y: {
            ticks: {
                font: {
                    size: 8 //this change the font size
                }
            },
            grid: {
                display: false
            },

        },
        x: {
            ticks: {
                font: {
                    size: 8 //this change the font size
                }
            },
            grid: {
                display: false
            }
        }
    },
    legend: {
        display: false,
        position: 'bottom'
    },
}
