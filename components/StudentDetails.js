import react from "react"
import { dateParser } from "../utils/helper"
import { gatePassStatus } from "../utils/constants"

export default function StudentDetails(props) {
    const { details } = props 
    let arrival = dateParser( details.arrival)
    let departure = dateParser(details.departure)
    let presentDate = new Date()
    return (
        <>
            <div class="relative px-6 pt-10 pb-8 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                <div class="mx-auto ">
                    <table class="border-slate w-full border-collapse border bg-white text-sm shadow-sm">
                        <thead class="">
                            <tr>
                                <th class="w-1/2 border border-slate-300 p-4 text-left font-semibold text-slate-900 bg-slate-50">Out Date</th>
                                <th class="border border-slate-300 p-4 text-slate-700 font-normal text-left">{departure.toLocaleDateString()}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="border border-slate-300 p-4 text-left font-semibold text-slate-900 bg-slate-50">In Date</td>
                                <td class="border border-slate-300 p-4 text-slate-700">{arrival.toLocaleDateString()}</td>
                            </tr>
                            <tr>
                                <td class="border border-slate-300 p-4 text-left font-semibold text-slate-900 bg-slate-50">Status</td>
                                <td class="border border-slate-300 p-4 text-slate-700 uppercase ">{details.status}</td>
                            </tr>
                            <tr>
                                <td class="border border-slate-300 p-4 text-left font-semibold text-slate-900 bg-slate-50">Validity</td>
                                    <td class="border border-slate-300 p-4 text-slate-700 ">{ presentDate < arrival && details.status != gatePassStatus.REJECTED? "Valid":"Invalid" }</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}