import React, { useState } from "react";
import Link from "next/link";

const DropdownStatus = () => {
    return (
        <div class="absolute w-44 font-normal bg-white rounded top-10 -left-10">
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-400" >
                <li>
                    <Link href="/status">
                        <a className="block py-2 pr-4 pl-3 text-gray-600 hover:bg-indigo-600 hover:text-white rounded">Gate Pass Status</a>
                    </Link>
                </li>
                <li>
                    <Link href='/maintenance/status/check'>
                        <a className="block py-2 pr-4 pl-3 text-gray-600 hover:bg-indigo-600 hover:text-white rounded">Maintenance Status</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

const MobileDropdownStatus = () => {
    return (
        <div className="w-full font-normal rounded bg-gray-100">
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-400" >
                <li>
                    <Link href='/status'>
                        <a className="block py-2 pr-4 pl-3 text-gray-600 hover:bg-indigo-600 hover:text-white rounded">Gate Pass Status</a>
                    </Link>
                </li>
                <li>
                    <Link href='maintenance/status/check'>
                        <a className="block py-2 pr-4 pl-3 text-gray-600 hover:bg-indigo-600 hover:text-white rounded">Maintenance Status</a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}


export default function NavBar() { //TODOs Implement later
    let [showDropdown, setShowDropdown] = useState(false)
    const toggleNav = () => {
        const toggler = document.getElementById("navbar-cta")
        if (toggler.classList.contains('hidden')) {
            toggler.classList.remove('hidden')
        } else {
            toggler.classList.add('hidden')
        }
    }
    return (
        <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <span className="block tracking-wide text-lg mx-3 font-bold uppercase text-indigo-600">shiva hostel</span>
                    <div className="space-x-4 text-gray-900 text-sm hidden sm:flex font-semibold">
                        <Link href="/">
                            <a className="hover:text-indigo-600 transition-colors">Gatepass</a>
                        </Link>
                        <Link href="/maintenance">
                            <a className="hover:text-indigo-600 transition-colors">Upkeep</a>
                        </Link>
                        <div className="relative cursor-pointer" onClick={() => setShowDropdown(!showDropdown)}>
                            <a className="hover:text-indigo-600 transition-colors">Status
                                <svg class="ml-1 w-5 h-5 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </a>
                            {showDropdown && <DropdownStatus />}
                        </div>
                        <Link href="/admin/login" prefetch={false}>
                            <a className="hover:text-indigo-600 transition-colors">Admin</a>
                        </Link>
                        <Link href="https://dwivedi-ritik.github.io">
                            <a className="hover:text-indigo-600 transition-colors">Credit</a>
                        </Link>
                    </div>
                    <svg onClick={toggleNav} className="w-6 h-6 sm:hidden cursor-pointer" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </div>

                <div className="hidden flex justify-start items-center w-full sm:hidden" id="navbar-cta">
                    <ul className="flex flex-col py-4 mt-2 rounded-lg w-full font-semibold">
                        <li>
                            <Link href="/">
                                <a className="block py-2 pr-4 pl-3 text-gray-600 hover:bg-indigo-600 hover:text-white rounded">Gatepass</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/maintenance">
                                <a className="block py-2 pr-4 pl-3 text-gray-600 hover:bg-indigo-600 hover:text-white rounded">Upkeep</a>
                            </Link>
                        </li>
                        <li onClick={() => setShowDropdown(!showDropdown)} className="cursor-pointer flex justify-between items-center text-gray-600  hover:bg-indigo-600 hover:text-white rounded">
                            <p className="block py-2 pr-4 pl-3 ">Status
                            </p>
                            <svg class="mr-4 w-5 h-5 inline" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </li>
                        {showDropdown && <MobileDropdownStatus />}
                        <li>
                            <Link href="/admin/login" prefetch={false}>
                                <a className="block py-2 pr-4 pl-3 text-gray-600 hover:bg-indigo-600 hover:text-white rounded">Admin</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://dwivedi-ritik.github.io">
                                <a className="block py-2 pr-4 pl-3 text-gray-600 hover:bg-indigo-600 hover:text-white rounded">Credit</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}