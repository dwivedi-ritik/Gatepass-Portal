import Head from 'next/head'
import React, { useMemo, useState } from 'react'

import { getSession } from "next-auth/react"

import SideNav from '../../../components/admin/SideNav'
import AdminNav from '../../../components/admin/AdminNav'

import dbConnect from '../../../lib/dbConnect'
import Maintenance from '../../../Model/Maintenance'
import DownloadData from "../../../components/admin/DownloadData"

import MaintenanceTableRow from '../../../components/maitenance/MaintenanceTableRow'
import { maintenanceStatus } from '../../../utils/constants'



export default function Unresolved({ orgData, user }) {
    const [searchText, setSearchText] = useState('')
    let filteredData = useMemo(() => {
        return orgData.filter((data) => {
            return data.token.includes(searchText)
        })
    }, [searchText])

    return (
        <>
            <Head>
                <title>Unresolved</title>
                <meta name='description' description='Admin panel for changing maintenance requests and downlaoding the csv files'></meta>
            </Head>
            <div className='flex'>
                <SideNav elName={"unresolved"} />
                <div className='w-full'>
                    <div className='mx-4'>
                        <AdminNav title={"Maintenance requests"} user={user} />
                        <div className="mt-12 w-full bg-white">
                            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                                {/* Search bar  */}
                                <form className="flex items-center">
                                    <div className="relative w-full">
                                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd">
                                                </path>
                                            </svg>
                                        </div>
                                        <input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 focus:ring-1 focus:outline-none focus:ring-indigo-700" placeholder="Search By Token no" required>
                                        </input>
                                    </div>
                                </form>


                                <div className="flex items-center gap-2">
                                    <DownloadData url={`/api/maintenance/getExcelSheet?status=${maintenanceStatus.UNRESOLVED}`} />
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
                        </div>
                    </div>
                    <div className="overflow-x-auto md:border sm:rounded-lg mt-8 mx-4 h-auto md:max-h-[30rem]">
                        <table className="w-full text-sm text-left text-gray-500 ">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="py-3 px-6">
                                        Title
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Type
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Room No
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Mobile No
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Token No
                                    </th>
                                    <th scope="col" className="py-3 px-6">
                                        Status
                                    </th>
                                    <th scope="col" className="py-3 px-4">
                                        Show Details
                                    </th>
                                    <th scope="col" className="py-3 px-4">
                                        Change Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.map(obj => {
                                    return <MaintenanceTableRow rowData={obj} key={obj._id} />
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
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
    const allRequests = await Maintenance.find({ status: maintenanceStatus.UNRESOLVED }).sort({ "createdAt": "desc" })

    return {
        props: {
            orgData: JSON.parse(JSON.stringify(allRequests)),
            user: session.user
        }
    }
}