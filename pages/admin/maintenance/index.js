import Head from 'next/head'
import { getSession } from "next-auth/react"

import SideNav from '../../../components/admin/SideNav'
import MaintenanceOverview from '../../../components/admin/MaintenanceOverview'

export default function maintenances(props) {
    return (
        <>
            <Head>
                <title>Maintenances requests</title>
                <meta name='description' description='Admin panel for changing maintenance requests and downlaoding the csv files'></meta>
            </Head>
            <div className='flex'>
                <SideNav elName={"maintenance"} />
                <MaintenanceOverview user={props.user} />
            </div>
        </>
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