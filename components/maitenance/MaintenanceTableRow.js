import React, { useState } from "react";
import { maintenanceStatus } from '../../utils/constants'

import Link from "next/link";



export default function MaintenanceTableRow(props) {
    let [rowData, setRowData] = useState(props.rowData)
    const changeStatusHandler = async () => {
        const apiResponse = await fetch('/api/maintenance/changeStatus', {
            method: 'POST',
            body: JSON.stringify({ token: rowData.token, status: maintenanceStatus.RESOLVED })
        })
        if (apiResponse.status !== 200) {
            console.log(apiResponse)
            return
        }
        const newRowData = await apiResponse.json()
        setRowData(newRowData)
    }

    return (
        <tr className="bg-white border-b">
            <th scope="row" className="py-4 px-6 font-medium  whitespace-nowrap text-gray-900">
                {rowData.title}
            </th>
            <td className="py-4 px-6 font-semibold">
                {rowData.maintenanceType}
            </td>
            <td className="py-4 px-6 font-semibold">
                {rowData.roomNo}
            </td>
            <td className="py-4 px-6 font-semibold">
                {rowData.mobileNo}
            </td>
            <td className="py-4 px-6 font-semibold">
                {rowData.token}
            </td>
            <td className="py-4 px-6 font-semibold">
                {rowData.status.toUpperCase()}
            </td>
            <Link href={"/maintenance/" + rowData.token} >
                <td className="py-4 px-6 text-indigo-600 cursor-pointer" >
                    <a target="_blank" rel="noopener noreferrer" >
                        View details
                    </a>
                </td>
            </Link>
            <td className="relative py-4 px-6 font-semibold cursor-pointer flex justify-center items-center space-x-4" >
                <button onClick={changeStatusHandler} className="
                py-1 px-2 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 ">Mark resolved</button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 hover:text-indigo-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
            </td>


        </tr>
    )
}