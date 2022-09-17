import React from "react";
import Head from "next/head";
import SideNav from "../../components/admin/SideNav";
import AdminNav from "../../components/admin/AdminNav";

import TableRow from "../../components/admin/TableRow"
import GatePass from "../../Model/GatePass"
import dbConnect from "../../lib/dbConnect"
import { gatePassStatus } from "../../utils/constants"



export default function adminApproveds(props) {
    return (
        <div>
            <Head>
                <title>Apporved Passes</title>
            </Head>
            <div className="flex">
                <SideNav elName={"approveds"} />
                <div className="w-full bg-gray-50">
                    <div className="mx-4">
                        <AdminNav />
                        <div className="mt-12 h-auto w-full rounded border bg-white">
                            <div className="flex justify-between mx-6 my-4">
                                <div className="font-medium">
                                    <p className="text-xs text-gray-800 font-semibold">Apporved Passes</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3 text-gray-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                                    </svg>
                                    <p className="text-xs text-gray-800 font-semibold">Sort</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3 text-gray-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                                    </svg>
                                    <p className="text-xs text-gray-800 font-semibold">Filter</p>

                                </div>
                            </div>

                            <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-8 mod">
                                <table className="w-full text-sm text-left text-gray-500 ">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                        <tr>
                                            <th scope="col" className="py-3 px-6">
                                                Name
                                            </th>
                                            <th scope="col" className="py-3 px-6">
                                                Year
                                            </th>
                                            <th scope="col" className="py-3 px-6">
                                                Room No
                                            </th>
                                            <th scope="col" className="py-3 px-6">
                                                Mobile No
                                            </th>
                                            <th scope="col" className="py-3 px-6">
                                                Parents No
                                            </th>

                                            <th scope="col" className="py-3 px-6">
                                                Status
                                            </th>
                                            <th scope="col" className="py-3 px-4">
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {props.data.map(obj => {
                                            return <TableRow data={obj} />
                                        })}

                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export async function getServerSideProps() {
    await dbConnect()
    const allCollections = await GatePass.find({ status: gatePassStatus.APPROVED })

    return {
        props: {
            data: JSON.parse(JSON.stringify(allCollections))
        }

    }
}