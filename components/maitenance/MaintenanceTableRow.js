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
        <tr className="bg-white mt-6 sm:mt-0 w-full sm:border-b" id='responsive-table'>
            <td data-label='Title' className="text-right sm:text-left py-4 px-6 font-semibold border sm:border-0">
                {rowData.title}
            </td>
            <td data-label='Type' className="text-right sm:text-left py-4 px-6 font-semibold border sm:border-0">
                {rowData.maintenanceType}
            </td>
            <td data-label='Room No' className="text-right sm:text-left py-4 px-6 font-semibold border sm:border-0">
                {rowData.roomNo}
            </td>
            <td data-label='Mobile No' className="text-right sm:text-left py-4 px-6 font-semibold border sm:border-0">
                {rowData.mobileNo}
            </td>
            <td data-label='Token' className="text-right sm:text-left py-4 px-6 font-semibold border sm:border-0">
                {rowData.token}
            </td>
            <td data-label='Status' className="text-right sm:text-left py-4 px-6 font-semibold border sm:border-0">
                {rowData.status.toUpperCase()}
            </td>
            <Link href={"/maintenance/" + rowData.token} >
                <td className="py-4 px-6 text-indigo-600 cursor-pointer border sm:border-0" >
                    <div className="w-full flex justify-center">
                        <button
                            type="button"
                            className="px-4 py-2 bg-indigo-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out"
                        >View Details</button>

                    </div>
                </td>
            </Link>
            <td className="relative py-4 px-6 font-semibold cursor-pointer flex justify-center items-center space-x-4 border sm:border-0" >
                <div className="w-full flex justify-center">
                    <button onClick={changeStatusHandler} className="
                py-1 px-2 text-xs font-medium text-gray-900 focus:outline-none bg-gray-50 rounded-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 ">
                        Mark resolved</button>

                </div>
            </td>


        </tr>
    )
}