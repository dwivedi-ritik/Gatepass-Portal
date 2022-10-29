import React, { useEffect, useRef, useState } from "react"
import { dateParserFromString } from "../../utils/helper"
import GatePassModal from "../admin/GatePassModal"

export default function RejectedTableRow({ rowData }) {
    let [arrival, setArrival] = useState('')
    let [departure, setDeparture] = useState('')
    let [showModal, setShowModal] = useState(false)
    useEffect(() => {
        setArrival(dateParserFromString(rowData.arrival))
        setDeparture(dateParserFromString(rowData.departure))

    }, [])

    return (
        <tr className="mt-6 sm:mt-0 w-full border-b" id="responsive-table">

            <td data-label="Name" className="text-right sm:text-left py-4 px-6 font-semibold border sm:border-0">
                {rowData.firstname + " " + rowData.lastname}
            </td>
            <td data-label="Year" className="text-right sm:text-left py-4 px-6 font-semibold border sm:border-0">
                {rowData.year}
            </td>
            <td data-label="Room No" className="text-right sm:text-left py-4 px-6 font-semibold border sm:border-0">
                {rowData.roomNo}
            </td>
            <td data-label="Mobile No" className="text-right sm:text-left py-4 px-6 font-semibold border sm:border-0">
                {rowData.mobileNo}
            </td>
            <td data-label="Parents No" className="text-right sm:text-left py-4 px-6 font-semibold border sm:border-0">
                {rowData.parentsNo}
            </td>

            <td data-label="Departure" className="text-right sm:text-left py-4 px-6 font-semibold border sm:border-0">
                {departure}
            </td>
            <td data-label="Arrival" className="text-right sm:text-left py-4 px-6 font-semibold border sm:border-0">
                {arrival}
            </td>
            <td data-label="Token" className="text-right sm:text-left py-4 px-6 font-semibold border sm:border-0">
                {rowData.token}
            </td >
            <td className="py-4 px-6 border sm:border-0" onClick={() => setShowModal(true)} id="view-btn">
                <button
                    type="button"
                    className="inline-block px-4 py-2 bg-indigo-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out"
                >Details</button>
            </td>
            <td>
                {showModal && <GatePassModal setShowModal={setShowModal} data={rowData} arrival={arrival} departure={departure} />}

            </td>
        </tr>
    )
}