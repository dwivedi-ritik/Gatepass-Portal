import React from "react";

export default function GatePassModal({ data, setShowModal, arrival, departure }) {

    return (
        <div className="relative z-10" >
            <div className="fixed inset-0 bg-gray-400 bg-opacity-75 "></div>
            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center text-center sm:items-center sm:p-0 ">
                    <div className="relative transform overflow-hidden rounded-lg text-left sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">

                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-lg leading-6 text-gray-800 font-semibold" id="modal-title">Token is #{data.token}</h3>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">GatePass details for the token no {data.token}</p>
                                </div>
                                <table className="text-sm shadow-sm w-full flex justify-center my-4">

                                    <tbody >
                                        <tr>
                                            <td className="border border-slate-300 p-2 text-left text-xs font-normal text-slate-900 bg-slate-50" >Name</td>
                                            <td className="border border-slate-300 p-2 text-slate-700">{data.firstname + " " + data.lastname}</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-slate-300 p-2 text-left font-normal  text-slate-900 bg-slate-50">Email</td>
                                            <td className="border border-slate-300 p-2 text-slate-700">{data.email}</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-slate-300 p-2 text-left font-normal  text-slate-900 bg-slate-50">Mobile No</td>
                                            <td className="border border-slate-300 p-2 text-slate-700">{data.mobileNo}</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-slate-300 p-2 text-left font-normal  text-slate-900 bg-slate-50">Year</td>
                                            <td className="border border-slate-300 p-2 text-slate-700 ">{data.year}</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-slate-300 p-2 text-left font-normal  text-slate-900 bg-slate-50">Parents No</td>
                                            <td className="border border-slate-300 p-2 text-slate-700 ">{data.parentsNo}</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-slate-300 p-2 text-left font-normal  text-slate-900 bg-slate-50">Arrival</td>
                                            <td className="border border-slate-300 p-2 text-slate-700 ">{arrival}</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-slate-300 p-2 text-left font-normal  text-slate-900 bg-slate-50">Departure</td>
                                            <td className="border border-slate-300 p-2 text-slate-700 ">{departure}</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-slate-300 p-2 text-left font-normal  text-slate-900 bg-slate-50">Reason</td>
                                            <td className="border border-slate-300 p-2 text-slate-700 ">{data.reason}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <div className="bg-gray-100 px-4 py-3 flex justify-between flex-row-reverse">

                            <button onClick={() => setShowModal(false)} className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700  sm:text-sm">
                                Okay!
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    )
}