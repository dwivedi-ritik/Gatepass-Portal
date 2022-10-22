import React from "react"
import { dateParser } from "../utils/helper"
import { gatePassStatus } from "../utils/constants"

export default function StudentDetails({ details }) {
    let arrival = dateParser(details.arrival)
    let departure = dateParser(details.departure)
    let presentDate = new Date()
    return (
        <>
            <div className="relative px-6 pt-10 pb-8 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                <div className="mx-auto ">
                    <table className="border-slate w-full border-collapse border bg-white text-sm shadow-sm">
                        <tbody>
                            <tr>
                                <td className="border border-slate-300 p-4 text-left font-semibold text-slate-900 bg-slate-50">Out Date</td>
                                <td className="border border-slate-300 p-4 text-slate-700 font-normal text-left">{departure.toLocaleDateString()}</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 p-4 text-left font-semibold text-slate-900 bg-slate-50">In Date</td>
                                <td className="border border-slate-300 p-4 text-slate-700">{arrival.toLocaleDateString()}</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 p-4 text-left font-semibold text-slate-900 bg-slate-50">Status</td>
                                <td className="border border-slate-300 p-4 text-slate-700 uppercase ">{details.status}</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-300 p-4 text-left font-semibold text-slate-900 bg-slate-50">Validity</td>
                                <td className="border border-slate-300 p-4 text-slate-700 ">{presentDate < arrival && details.status != gatePassStatus.REJECTED ? "Valid" : "Invalid"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}