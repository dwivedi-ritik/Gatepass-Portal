import React from "react";

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
                    <span className="block uppercase tracking-wide text-gray-700 text-lg mx-3 font-mono">Shiva Hostel</span>
                    <div className="space-x-4 text-gray-900 text-sm hidden sm:flex">
                        <a href="/">Request</a>
                        <a href="/status">Status</a>
                        <a href="/admin/login">Admin</a>
                        <a href="#">Credit</a>
                    </div>
                    <svg onClick={toggleNav} className="w-6 h-6 sm:hidden" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </div>
                <div class="hidden flex justify-start items-center w-full sm:hidden" id="navbar-cta">
                    <ul class="flex flex-col py-4 mt-2 rounded-lg  ">
                        <li>
                            <a href="/" class="block py-2 pr-4 pl-3 text-gray-600 hover:bg-indigo-600 hover:text-white rounded">Request</a>
                        </li>
                        <li>
                            <a href="/status" class="block py-2 pr-4 pl-3 text-gray-600 hover:bg-indigo-600 hover:text-white rounded">Status</a>
                        </li>
                        <li>
                            <a href="/admin/login" class="block py-2 pr-4 pl-3 text-gray-600 hover:bg-indigo-600 hover:text-white rounded">Admin</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pr-4 pl-3 text-gray-600 hover:bg-indigo-600 hover:text-white rounded">Credit</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}