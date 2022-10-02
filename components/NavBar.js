import React from "react";
import Link from "next/link";

export default function NavBar() { //TODOs Implement later
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
                        <Link href="/maintenance/form">
                            <a className="hover:text-indigo-600 transition-colors">Upkeep</a>
                        </Link>
                        <Link href="/status">
                            <a className="hover:text-indigo-600 transition-colors">Status</a>
                        </Link>
                        <Link href="/admin/login" prefetch={false}>
                            <a className="hover:text-indigo-600 transition-colors">Admin</a>
                        </Link>
                        <Link href="https://dwivedi-ritik.github.io">
                            <a className="hover:text-indigo-600 transition-colors">Credit</a>
                        </Link>
                    </div>
                    <svg onClick={toggleNav} className="w-6 h-6 sm:hidden" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </div>
                <div className="hidden flex justify-start items-center w-full sm:hidden" id="navbar-cta">
                    <ul className="flex flex-col py-4 mt-2 rounded-lg w-full font-semibold">
                        <li>
                            <Link href="/">
                                <a className="block py-2 pr-4 pl-3 text-gray-600 hover:bg-indigo-600 hover:text-white rounded">Gatepass</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/maintenance/form">
                                <a className="block py-2 pr-4 pl-3 text-gray-600 hover:bg-indigo-600 hover:text-white rounded">Upkeep</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/status">
                                <a className="block py-2 pr-4 pl-3 text-gray-600 hover:bg-indigo-600 hover:text-white rounded">Status</a>
                            </Link>
                        </li>
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