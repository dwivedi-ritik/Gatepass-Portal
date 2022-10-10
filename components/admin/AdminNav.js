import React from "react";

export default function AdminNav({ title, user }) {
    const toggleSideNavOpen = () => {
        const sideNav = document.querySelector('.sidenav')
        sideNav.classList.remove('hidden')
        sideNav.classList.add("absolute")
        sideNav.classList.add("top-0")
        sideNav.classList.add("left-0")
        sideNav.classList.add("bottom-0")
        sideNav.classList.add("right-0")
    }
    return (
        <div className="mt-4 flex justify-between items-center">
            <svg onClick={toggleSideNavOpen} className="w-6 h-6 md:hidden text-gray-600 cursor-pointer" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>

            <p className="font-bold text-gray-600">{title}</p>
            <div className="flex items-center gap-2">
                <p className="text-xs font-semibold text-gray-500 hidden sm:flex">Welcome, {user.name}</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-gray-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>

            </div>
        </div>
    )
}