import React from "react"
import Head from "next/head"
import Void from "../assets/Void.svg"
export default function Custom404() {
    return (<>
        <>
            <Head>
                <title>Page not found</title>
            </Head>


            <div class="grid h-screen place-content-center bg-">
                <div class="text-center w-72">
                    <Void />
                    <h1
                        class="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                    >
                        Such Void
                    </h1>

                    <p class="mt-4 text-gray-400">We cannot find the page</p>
                </div>
            </div>

        </>
    </>)
}