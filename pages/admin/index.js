import Head from "next/head"
import SideNav from "../../components/admin/SideNav"
import AdminOverview from "../../components/admin/AdminOverview"


export default function adminHome() {
    return (
        <div>
            <Head>
                <title>Overview of Passes</title>
            </Head>
            <div className="flex">
                <SideNav elName={"overviews"} />
                <AdminOverview />
            </div>
        </div>
    )
}