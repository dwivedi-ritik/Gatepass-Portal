import React from "react"

export default function TableRow(props) {
    return (
        <tr className="bg-white border-b">
            <th scope="row" className="py-4 px-6 font-medium  whitespace-nowrap text-gray-900">
                {props.data.firstname + " " + props.data.lastname}
            </th>
            <td className="py-4 px-6 font-semibold">
                {props.data.year}
            </td>
            <td className="py-4 px-6 font-semibold">
                {props.data.roomNo}
            </td>
            <td className="py-4 px-6 font-semibold">
                {props.data.mobileNo}
            </td>
            <td className="py-4 px-6 font-semibold">
                {props.data.parentsNo}
            </td>
            <td className="py-4 px-6 font-semibold">
                {props.data.status.toUpperCase()}
            </td>
            <td className="py-4 font-semibold">
                <a href="#" class="text-white bg-indigo-500 hover:bg-indigo-700  font-medium rounded-lg text-xs px-2 py-1 mr-2 mb-2 ">Approve</a>
                <a href="#" class="text-white bg-red-500 hover:bg-red-700  font-medium rounded-lg text-xs px-2 py-1 mr-2 mb-2 ">Reject</a>
            </td>
        </tr>
    )
}