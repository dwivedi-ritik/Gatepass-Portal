import React from "react"
import Head from "next/head"
import Pending from "../../components/Pending"
import Rejected from "../../components/Rejected"
import Approved from "../../components/Approved"

export default function Test() {
    return (
        <div>
            <Head>Gate Pass Status</Head>
            <div>
                <Pending />
                <Rejected />
                <Approved />
            </div>
        </div>

    )
}