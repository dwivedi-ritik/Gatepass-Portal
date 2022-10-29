import React, { useState, useMemo } from "react";
import Head from "next/head";

import { getSession } from "next-auth/react";

import SideNav from "../../../components/admin/SideNav";
import AdminNav from "../../../components/admin/AdminNav";
import TableRow from "../../../components/admin/TableRow"
import DownloadData from "../../../components/admin/DownloadData"
import SearchBar from "../../../components/admin/SearchBar"


import GatePass from "../../../Model/GatePass"
import dbConnect from "../../../lib/dbConnect"
import { gatePassStatus } from "../../../utils/constants"

const SortComp = ({ setSortComp }) => {
    return (
        <div className="h-auto rounded-md border shadow-lg w-[180px] absolute z-2 bg-white -left-24 top-8" onMouseLeave={() => setSortComp(false)}>
            <div className="py-2 text-gray-700 hover:bg-indigo-600 hover:text-white rounded-md transition-all ease-out">
                <div className="ml-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
                    </svg>
                    <p className="pl-2 text-sm">Sort Ascending</p>
                </div>
            </div>
            <div className="py-2 text-gray-700 hover:bg-indigo-600 hover:text-white rounded-md transition-all ease-out">
                <div className="ml-2 flex items-center  ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" />
                    </svg>
                    <p className=" pl-2 text-sm">Sort Descending</p>
                </div>
            </div>
        </div>
    )
}


export default function adminPendings({ orgData, user }) {
    const DOWNLOAD_URL = `/api/gatepass/getExcelSheet?status=${gatePassStatus.PENDING}`
    let [searchText, setSearchText] = useState('')
    let [sortComp, setSortComp] = useState(false)
    let filteredData = useMemo(() => {
        return orgData.filter(data => {
            return data.token.includes(searchText)
        })
    })
    return (
        <div>
            <Head>
                <title>Pending Passes</title>
            </Head>
            <div className="flex">
                <SideNav elName={"pendings"} />
                <div className="w-full ">
                    <div className="mx-4">
                        <AdminNav title={"Pending Passes"} user={user} />

                        <div className="mt-12 h-auto w-full">
                            <div className="flex flex-col md:flex-row justify-between items-center  gap-4">
                                <SearchBar searchText={searchText} setSearchText={setSearchText} />

                                <div className="flex items-center gap-2" >
                                    <DownloadData url={DOWNLOAD_URL} />
                                    <div className='flex space-x-2 relative cursor-pointer' onClick={() => setSortComp(true)} >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3 text-gray-600 ">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                                        </svg>
                                        <p className="text-xs text-gray-800 font-semibold">Sort</p>
                                        {sortComp && <SortComp setSortComp={setSortComp} />}
                                    </div>

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3 text-gray-600">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                                    </svg>
                                    <p className="text-xs text-gray-800 font-semibold">Filter</p>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto sm:rounded-lg mt-8 mx-4 h-auto md:max-h-[35rem]">
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
                                        Departure
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Arrival
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Token
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Status
                                    </th>
                                    <th scope="col" className="py-3 px-4">
                                        Change Status
                                    </th>
                                    <th scope="col" className="py-3 px-4">
                                        Details
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="w-full">
                                {filteredData.map(obj => {
                                    return <TableRow data={obj} key={obj._id} />
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req })
    if (!session) {
        return {
            redirect: {
                destination: "/admin/login",
                permanent: false
            }
        }
    }
    await dbConnect()
    const allCollections = await GatePass.find({ status: gatePassStatus.PENDING }).sort({ "createdAt": "desc" })

    return {
        props: {
            orgData: JSON.parse(JSON.stringify(allCollections)),
            user: session.user
        }

    }
}