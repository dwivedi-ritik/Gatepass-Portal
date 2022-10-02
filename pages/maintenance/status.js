import MaintenanceStatus from "../../components/maitenance/MaintenanceStatus"
import Head from "next/head"
import NavBar from "../../components/NavBar"
export default function status() {
    return (
        <>
            <Head>
                <title>Maintenance Status</title>
            </Head>
            <NavBar />
            <MaintenanceStatus />
        </>
    )
}