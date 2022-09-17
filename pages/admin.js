import React from "react";
import Head from "next/head";
import SideNav from "../components/admin/SideNav";
export default function Admin() {
    return (
        <div>
            <Head>
                <title>Welcome to Admin Page</title>
            </Head>
            <div className="flex">
                <SideNav />
                <div className="w-full bg-gray-50">
                    <div className="mx-4">
                        <div className="flex mt-2 items-center justify-between">
                            <p className="font-bold text-gray-600">Overview</p>
                            <p className="text-sm text-gray-500">Welcome, Admin</p>
                        </div>
                        <div className="mt-12 h-auto w-full rounded border bg-white">
                            <div className="font-medium my-4 ml-6">
                                <p className="text-xs text-gray-800 font-semibold">Apporved Passes</p>
                            </div>
                            <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-8">
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
                                                Mobile No
                                            </th>
                                            <th scope="col" className="py-3 px-6">
                                                Parents No
                                            </th>

                                            <th scope="col" className="py-3 px-6">
                                                Status
                                            </th>
                                            <th scope="col" className="py-3 px-4">
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white border-b">
                                            <th scope="row" className="py-4 px-6 font-medium  whitespace-nowrap text-gray-900">
                                                Ritik Dwivedi
                                            </th>
                                            <td className="py-4 px-6 font-semibold">
                                                4
                                            </td>
                                            <td className="py-4 px-6 font-semibold">
                                                336
                                            </td>
                                            <td className="py-4 px-6 font-semibold">
                                                8808130095
                                            </td>
                                            <td className="py-4 px-6 font-semibold">
                                                8808130095
                                            </td>
                                            <td className="py-4 px-6 font-semibold">
                                                Pending
                                            </td>
                                            <td className="py-4 font-semibold">
                                                <a href="#" class="text-white bg-blue-500 hover:bg-blue-700  font-medium rounded-lg text-xs px-2 py-1 mr-2 mb-2 ">Approve</a>
                                                <a href="#" class="text-white bg-red-500 hover:bg-red-700  font-medium rounded-lg text-xs px-2 py-1 mr-2 mb-2 ">Reject</a>
                                            </td>
                                        </tr>
                                        <tr className="bg-white border-b">
                                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                                                Microsoft Surface Pro
                                            </th>
                                            <td className="py-4 px-6">
                                                White
                                            </td>
                                            <td className="py-4 px-6">
                                                Laptop PC
                                            </td>
                                            <td className="py-4 px-6">
                                                $1999
                                            </td>
                                            <td className="py-4 px-6">
                                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            </td>
                                        </tr>
                                        <tr className="bg-white ">
                                            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap ">
                                                Magic Mouse 2
                                            </th>
                                            <td className="py-4 px-6">
                                                Black
                                            </td>
                                            <td className="py-4 px-6">
                                                Accessories
                                            </td>
                                            <td className="py-4 px-6">
                                                $99
                                            </td>
                                            <td className="py-4 px-6">
                                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}