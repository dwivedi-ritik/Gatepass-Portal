import React, { useEffect, useState } from "react";

import Link from "next/link";

import { signOut } from "next-auth/react";

export default function SideNav(props) {
    let [showGatePassLinks, setShowGatePassLinks] = useState(true)
    let [showMaintenanceLinks, setShowMaintenanceLinks] = useState(true)

    useEffect(() => {
        const { elName } = props
        const el = document.querySelector(`.${elName}`)
        el.classList.add("border-l-4")
        el.classList.add("bg-gray-700")

    }, [])
    const signOutHandler = async () => {
        await signOut()
    }

    const toggleSideNavClose = () => {
        const sideNav = document.querySelector('.sidenav')
        sideNav.classList.add('hidden')
        sideNav.classList.remove("fixed")
        sideNav.classList.remove("top-0")
        sideNav.classList.remove("left-0")
        sideNav.classList.remove("bottom-0")
        sideNav.classList.remove("right-0")
    }
    return (
        <div className="h-screen bg-gray-800 sidenav hidden md:w-1/4 md:block md:static">

            <div className="flex justify-center pt-3 relative">
                <p className="font-bold uppercase text-gray-300">Admin Portal</p>
                <svg onClick={toggleSideNavClose} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 cursor-pointer text-green-100 absolute right-4 md:hidden ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

            </div>

            <div className="flex flex-col items-start text-xs cursor-pointer">

                <div className="mt-8 flex h-12 w-full items-center justify-between  hover:bg-gray-700" onClick={() => setShowGatePassLinks(!showGatePassLinks)}>
                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="ml-3 h-4 w-4 text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                        <p className="font-medium text-gray-400 cursor-pointer">Gatepass Overview</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-gray-400 mr-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>

                </div>
                {showGatePassLinks &&
                    <div className="pl-3 w-full">
                        <Link href="/admin/gatepass/" prefetch={false}>
                            <a className="mt-1 flex h-12 w-full items-center justify-start gap-3 overviews hover:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="ml-3 h-4 w-4 text-gray-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                                <p className="font-medium text-gray-400 cursor-pointer">Overview</p>
                            </a>
                        </Link>
                        <Link href="/admin/gatepass/pendings" prefetch={false}>
                            <a className="mt-1 flex h-12 w-full items-center justify-start gap-3 pendings hover:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="ml-3 h-4 w-4 text-gray-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                </svg>
                                <p className="font-medium text-gray-400 cursor-pointer" >Pending GatePass</p>
                            </a>
                        </Link>
                        <Link href="/admin/gatepass/approveds" prefetch={false}>
                            <a className="mt-1 flex h-12 w-full items-center justify-start gap-3 approveds hover:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="ml-3 h-4 w-4 text-gray-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="font-medium text-gray-400 cursor-pointer" >Approved GatePass</p>
                            </a>
                        </Link>

                        <Link href="/admin/gatepass/rejecteds" prefetch={false}>
                            <a className="mt-1 flex h-12 w-full items-center justify-start gap-3 rejecteds hover:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="ml-3 h-4 w-4 text-gray-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="font-medium text-gray-400 cursor-pointer">Rejected</p>
                            </a>
                        </Link>

                    </div>
                }

                <div className="flex items-center w-full  hover:bg-gray-700 cursor-pointer" onClick={() => setShowMaintenanceLinks(!showMaintenanceLinks)}>
                    <div className="flex h-12 w-full items-center justify-start gap-3 ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="ml-3 h-4 w-4 text-gray-400">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                        <p className="font-medium text-gray-400 cursor-pointer">Maintenance Overview</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-gray-400 mr-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>

                {showMaintenanceLinks &&
                    <div className="pl-3 w-full ">
                        <Link href="/admin/maintenance/" prefetch={false}>
                            <a className="mt-1 flex h-12 w-full items-center justify-start gap-3 maintenance hover:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-3 h-4 w-4 text-gray-400">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <p className="font-medium text-gray-400 cursor-pointer">Overview</p>
                            </a>
                        </Link>

                        <Link href="/admin/maintenance/unresolved" prefetch={false}>
                            <a className="mt-1 flex h-12 w-full items-center justify-start gap-3 hover:bg-gray-700 unresolved">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="ml-3 h-4 w-4 text-gray-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className="font-medium text-gray-400 cursor-pointer">Unresolved Requests</p>
                            </a>
                        </Link>

                        <Link href="/admin/maintenance/resolved" prefetch={false}>
                            <a className="mt-1 flex h-12 w-full items-center justify-start gap-3 resolved hover:bg-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-3 h-4 w-4 text-gray-400">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <p className="font-medium text-gray-400 cursor-pointer">Resolved Requests</p>
                            </a>
                        </Link>



                    </div>
                }
                <div className="flex mt-12 h-12 w-full items-center justify-start gap-3 hover:bg-gray-700 cursor-pointer" onClick={signOutHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="ml-3 h-4 w-4 text-gray-400 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                    </svg>
                    <p className="font-medium text-gray-400 " >Logout</p>
                </div>
            </div>
        </div>



    )
}