import React, { useState, useEffect } from "react"

import { mailTemplateForApproval, mailTemplateForRejection, mailTextForApproval, mailTextForRejection } from "../../utils/mailTemplates"

import { gatePassStatus } from "../../utils/constants"

import Spinner from "../Spinner"
import GatePassModal from "./GatePassModal"
import { dateParserFromString } from "../../utils/helper"

const handleMailingForApproval = (tokenId, receiver) => {
    const mailBody = mailTextForApproval(tokenId, 'https://gatepass.vercel.app/status/' + tokenId)
    const mailHeader = mailTemplateForApproval(mailBody, receiver)


    fetch('/api/gatepass/sendMail', {
        method: 'POST',
        body: JSON.stringify(mailHeader)
    })
        .then(res => res.json())
        .then(console.log)
}

const handleMailingForRejection = (tokenId, receiver) => {
    const mailBody = mailTextForRejection(tokenId)
    const mailHeader = mailTemplateForRejection(mailBody, receiver)


    fetch('/api/gatepass/sendMail', {
        method: 'POST',
        body: JSON.stringify(mailHeader)
    })
        .then(res => res.json())
        .then(console.log)
}

const handleWebPushNotification = (tokenId, status) => {
    fetch(`/api/subscription/sendNotification?token=${tokenId}&status=${status}`, {
        method: 'GET',
    })
        .then(res => console.log(res.status))
        .catch(err => console.log(err))
}


export default function TableRow(props) {
    let [rowData, setRowData] = useState(props.data)
    let [showSpinner, setShowSpinner] = useState(false)
    let [arrival, setArrival] = useState('')
    let [departure, setDeparture] = useState('')
    let [showModal, setShowModal] = useState(false)
    useEffect(() => {
        setArrival(dateParserFromString(rowData.arrival))
        setDeparture(dateParserFromString(rowData.departure))

    }, [])

    const approveStatusHandler = async () => {
        setShowSpinner(true)
        const res = await fetch("/api/gatepass/changeStatus", {
            method: "PATCH",
            body: JSON.stringify({
                token: rowData.token,
                status: gatePassStatus.APPROVED
            })
        })

        if (props.data.email) {
            handleMailingForApproval(props.data.token, props.data.email)
        }

        handleWebPushNotification(props.data.token, gatePassStatus.APPROVED)

        const newRowData = await res.json()

        setRowData(newRowData)
        setShowSpinner(false)

    }

    const rejectStatusHandler = async () => {
        setShowSpinner(true)
        const res = await fetch("/api/gatepass/changeStatus", {
            method: "PATCH",
            body: JSON.stringify({
                token: rowData.token,
                status: gatePassStatus.REJECTED
            })
        })

        if (props.data.email) {
            handleMailingForRejection(props.data.token, props.data.email)
        }

        handleWebPushNotification(props.data.token, gatePassStatus.REJECTED)

        const newRowData = await res.json()

        setRowData(newRowData)
        setShowSpinner(false)
    }
    return (
        <tr className="mt-6 sm:mt-0 w-full border-b" id="responsive-table">
            {showSpinner && <Spinner />}
            <td data-label='Name' className=" text-right sm:text-left py-4 px-6 font-medium  whitespace-nowrap text-gray-900 border sm:border-0">
                {rowData.firstname + " " + rowData.lastname}
            </td>
            <td data-label='Year' className="text-right sm:text-left py-4 px-6 font-semibold border sm:border-0">
                {rowData.year}
            </td>
            <td data-label='Room No' className="text-right sm:text-left py-4 px-6 font-semibold border sm:border-0">
                {rowData.roomNo}
            </td>
            <td data-label='Departure' className="text-right sm:text-left py-4 px-6 font-semibold border sm:border-0">
                {departure}
            </td>
            <td data-label='Arrival' className="text-right sm:text-left py-4 px-6 font-semibold border sm:border-0">
                {arrival}
            </td>
            <td data-label='Token' className="text-right sm:text-left py-4 px-6 font-semibold border sm:border-0">
                {rowData.token}
            </td >
            <td data-label='Status' className="text-right sm:text-left py-4 px-6 font-semibold border sm:border-0">
                {rowData.status.toUpperCase()}
            </td>
            <td className="py-4 px-6 text-indigo-600 cursor-pointer border sm:border-0 flex items-center space-x-4 ">
                <a href="#" className="text-white bg-indigo-500 hover:bg-indigo-700  font-medium rounded-lg text-xs px-2 py-1 mr-2 mb-2" onClick={approveStatusHandler}>Approve</a>
                <a href="#" className="text-white bg-red-500 hover:bg-red-700  font-medium rounded-lg text-xs px-2 py-1 mr-2 mb-2" onClick={rejectStatusHandler}>Reject</a>
            </td>
            <td className="py-4 px-6 border sm:border-0" onClick={() => setShowModal(true)} id="view-btn">
                <button
                    type="button"
                    className="inline-block px-4 py-2 bg-indigo-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out"
                >Details</button>
            </td>
            <td className="table-modal">
                {showModal && <GatePassModal setShowModal={setShowModal} data={rowData} arrival={arrival} departure={departure} />}
            </td>
        </tr >
    )
}