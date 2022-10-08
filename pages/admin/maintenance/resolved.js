import Head from 'next/head'
import { getSession } from 'next-auth/react'

import SideNav from '../../../components/admin/SideNav'
import AdminNav from '../../../components/admin/AdminNav'

import dbConnect from '../../../lib/dbConnect'
import Maintenance from '../../../Model/Maintenance'
import DownloadData from "../../../components/admin/DownloadData"

import React, { useEffect } from "react";
import { maintenanceStatus } from '../../../utils/constants'

import Link from "next/link";


function MaintenanceTableRow({ rowData }) {

    return (
        <tr className="bg-white border-b">
            <th scope="row" className="py-4 px-6 font-medium  whitespace-nowrap text-gray-900">
                {rowData.title}
            </th>
            <td className="py-4 px-6 font-semibold">
                {rowData.maintenanceType}
            </td>
            <td className="py-4 px-6 font-semibold">
                {rowData.roomNo}
            </td>
            <td className="py-4 px-6 font-semibold">
                {rowData.mobileNo}
            </td>
            <td className="py-4 px-6 font-semibold">
                {rowData.token}
            </td>
            <td className="py-4 px-6 font-semibold">
                {rowData.status.toUpperCase()}
            </td>
            <Link href={"/maintenance/" + rowData.token} >
                <td className="py-4 px-6 text-indigo-600 cursor-pointer" >
                    <a target="_blank" rel="noopener noreferrer" >
                        View details
                    </a>
                </td>
            </Link>
            <td className="py-4 px-6 font-semibold cursor-pointer flex justify-center " >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4 hover:text-indigo-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
            </td>
        </tr>
    )
}

export default function requests({ data, user }) {
    return (
        <>
            <Head>
                <title>Resolved</title>
                <meta name='description' description='Admin panel for changing maintenance requests and downlaoding the csv files'></meta>
            </Head>
            <div className='flex'>
                <SideNav elName={"resolved"} />
                <div className='w-full'>
                    <div className='mx-4'>
                        <AdminNav title={"Maintenance requests"} user={user} />
                        <div className="mt-12 h-auto w-full rounded border bg-white">
                            <div className="flex justify-between items-center mx-2 md:mx-6 my-4">
                                <div className="font-medium">
                                    <p className="text-xs text-gray-800 font-semibold">Resolved</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <DownloadData url={`/api/maintenance/getExcelSheet?status=${maintenanceStatus.RESOLVED}`} />
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
                    <div className="overflow-x-auto border sm:rounded-lg mt-8 mx-4 h-auto max-h-[30rem]">
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
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(obj => {
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
    const allRequests = await Maintenance.find({ status: maintenanceStatus.RESOLVED }).sort({ "createdAt": "desc" })
    return {
        props: {
            data: JSON.parse(JSON.stringify(allRequests)),
            user: session.user
        }
    }
}