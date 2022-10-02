import React, { useState } from "react"

import { mailTemplateForApproval, mailTemplateForRejection, mailTextForApproval, mailTextForRejection } from "../../utils/mailTemplates"

import { gatePassStatus } from "../../utils/constants"

import Spinner from "../Spinner"

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
        <tr className="bg-white border-b">
            {showSpinner && <Spinner />}
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