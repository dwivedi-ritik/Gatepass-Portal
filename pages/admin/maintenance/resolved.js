import React, { useMemo, useState } from "react";
import Head from 'next/head'
import { getSession } from 'next-auth/react'

import SideNav from '../../../components/admin/SideNav'
import AdminNav from '../../../components/admin/AdminNav'

import dbConnect from '../../../lib/dbConnect'
import Maintenance from '../../../Model/Maintenance'
import DownloadData from "../../../components/admin/DownloadData"

import { maintenanceStatus } from '../../../utils/constants'

import Link from "next/link";


const MaintenanceTableRow = ({ rowData }) => {

    return (
        <tr className="bg-white mt-6 sm:mt-0 w-full sm:border-b" id="responsive-table">
            <td data-label='Title' className="text-right sm:text-left py-4 px-6 font-semibold border sm:border-0">
                {rowData.title}
            </td>
            <td data-label='Type' className="text-right sm:text-left py-4 px-6 font-semibold border sm:border-0 ">
                {rowData.maintenanceType}
            </td>
            <td data-label='Room No' className="text-right sm:text-left py-4 px-6 font-semibold border sm:border-0 ">
                {rowData.roomNo}
            </td>
            <td data-label='Mobile No' className="text-right sm:text-left py-4 px-6 font-semibold border sm:border-0 ">
                {rowData.mobileNo}
            </td>
            <td data-label='Token' className="text-right sm:text-left py-4 px-6 font-semibold border sm:border-0 ">
                {rowData.token}
            </td>
            <td data-label='Status' className="text-right sm:text-left py-4 px-6 font-semibold border sm:border-0 ">
                {rowData.status.toUpperCase()}
            </td>
            <Link href={"/maintenance/" + rowData.token} >
                <td className="py-4 px-6 text-indigo-600 cursor-pointer border sm:border-0 flex items-center space-x-4 " id="view-btn">
                    <button
                        type="button"
                        className="px-4 py-2 bg-indigo-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg transition duration-150 ease-in-out"
                    >View Details</button>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="-mr-8 w-4 h-4 hover:text-indigo-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg> */}
                </td>
            </Link>
        </tr>
    )
}

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




export default function Resolved({ orgData, user }) {

    const [searchText, setSearchText] = useState('')
    let [sortComp, setSortComp] = useState(false)

    let filteredData = useMemo(() => {
        return orgData.filter(data => {
            return data.token.includes(searchText)
        })
    }, [searchText])

    return (
        <>
            <Head>
                <title>Resolved</title>
                <meta name='description' description='Admin panel for changing maintenance requests and downlaoding the csv files'></meta>
            </Head>
            <div className='flex bg-gray-50'>
                <SideNav elName={"resolved"} />
                <div className='w-full'>
                    <div className='mx-4'>
                        <AdminNav title={"Maintenance requests"} user={user} />
                        <div className="mt-12 w-full">
                            <div className="flex flex-col md:flex-row justify-between items-center  gap-4">
                                {/* Search bar */}
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

                                <div className="flex items-center gap-2" >
                                    <DownloadData url={`/api/maintenance/getExcelSheet?status=${maintenanceStatus.RESOLVED}`} />
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
                    <div className="overflow-x-auto sm:rounded-lg mt-8 mx-4 sm:border md:max-h-[30rem]">
                        <table className="w-full text-sm text-left text-gray-500  ">
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

                                </tr>
                            </thead>
                            <tbody className='w-full'>
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
    const allRequests = await Maintenance.find({ status: maintenanceStatus.RESOLVED }).sort({ "createdAt": "desc" })
    return {
        props: {
            orgData: JSON.parse(JSON.stringify(allRequests)),
            user: session.user
        }
    }
}