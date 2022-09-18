import React, { useState } from "react"

import { gatePassStatus } from "../../utils/constants"

export default function TableRow(props) {
    let [rowData, setRowData] = useState(props.data)

    const approveStatusHandler = async () => {
        const res = await fetch("/api/gatepass/changeStatus", {
            method: "PATCH",
            body: JSON.stringify({
                token: rowData.token,
                status: gatePassStatus.APPROVED
            })
        })
        const newRowData = await res.json()

        setRowData(newRowData)
    }

    const rejectStatusHandler = async () => {
        const res = await fetch("/api/gatepass/changeStatus", {
            method: "PATCH",
            body: JSON.stringify({
                token: rowData.token,
                status: gatePassStatus.REJECTED
            })
        })
        const newRowData = await res.json()

        setRowData(newRowData)
    }
    return (
        <tr className="bg-white border-b">
            <th scope="row" className="py-4 px-6 font-medium  whitespace-nowrap text-gray-900">
                {rowData.firstname + " " + rowData.lastname}
            </th>
            <td className="py-4 px-6 font-semibold">
                {rowData.year}
            </td>
            <td className="py-4 px-6 font-semibold">
                {rowData.roomNo}
            </td>
            <td className="py-4 px-6 font-semibold">
                {rowData.mobileNo}
            </td>
            <td className="py-4 px-6 font-semibold">
                {rowData.parentsNo}
            </td>
            <td className="py-4 px-6 font-semibold">
                {rowData.status.toUpperCase()}
            </td>
            <td className="py-4 font-semibold">
                <a href="#" className="text-white bg-indigo-500 hover:bg-indigo-700  font-medium rounded-lg text-xs px-2 py-1 mr-2 mb-2" onClick={approveStatusHandler}>Approve</a>
                <a href="#" className="text-white bg-red-500 hover:bg-red-700  font-medium rounded-lg text-xs px-2 py-1 mr-2 mb-2" onClick={rejectStatusHandler}>Reject</a>
            </td>
        </tr>
    )
}