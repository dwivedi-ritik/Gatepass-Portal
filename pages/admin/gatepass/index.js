import Head from "next/head"
import { getSession } from "next-auth/react"

import SideNav from "../../../components/admin/SideNav"
import AdminOverview from "../../../components/admin/AdminOverview"


export default function adminHome(props) {
    return (
        <div>
            <Head>
                <title>Overview of Passes</title>
            </Head>
            <div className="flex">
                <SideNav elName={"overviews"} />
                <AdminOverview user={props.user} />
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req })
    if (!session) {
        return {
            redirect: {
                destination: "/admin/login",
                permanent: false
            }
        }
    }
    return {
        props: {
            user: session.user
        }
    }
} 