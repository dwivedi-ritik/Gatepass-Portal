import React from "react";

export default function SearchBar({ searchText, setSearchText }) {
    return (
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
    )
}