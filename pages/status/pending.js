import React from "react"
import Head from "next/head"
import Pending from "../../components/Pending"

export default function Test() {
    return (
        <div>
            <Head>Gate Pass Status</Head>
            <div>
                <Pending />
            </div>
        </div>

    )
}