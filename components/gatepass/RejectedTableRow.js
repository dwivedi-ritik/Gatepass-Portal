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
        <tr className="bg-white border-b">

            <td className="py-4 px-6 font-medium  whitespace-nowrap text-gray-900">
                {rowData.firstname + " " + rowData.lastname}
            </td>
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
                {departure}
            </td>
            <td className="py-4 px-6 font-semibold">
                {arrival}
            </td>
            <td className="py-4 px-6 font-semibold">
                {rowData.token}
            </td >
            <td lassName="py-4 px-6 font-semibold" onClick={() => setShowModal(true)}>
                <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-4 py-2 bg-indigo-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out"
                >Details</button>
            </td>
            <td>
                {showModal && <GatePassModal setShowModal={setShowModal} data={rowData} arrival={arrival} departure={departure} />}

            </td>
        </tr>
    )
}