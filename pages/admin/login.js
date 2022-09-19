import Head from "next/head";
import React from "react";

import { getSession } from "next-auth/react";

import AdminLogin from "../../components/admin/AdminLogin";
import NavBar from "../../components/NavBar";

export default function adminLogin() {
    return (
        <div>
            <Head>
                <title>Admin Login Page</title>
            </Head>
            <NavBar />
            <AdminLogin />
        </div>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req })
    if (session) {
        return {
            redirect: {
                destination: "/admin/overviews",
                permanent: false
            }
        }
    }
    return {
        props: {

        }
    }
}