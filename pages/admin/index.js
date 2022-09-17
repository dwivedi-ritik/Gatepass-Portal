import SideNav from "../../components/admin/SideNav"
import AdminOverview from "../../components/admin/AdminOverview"

export default function adminHome() {
    return (
        <div className="flex">
            <SideNav />
            <AdminOverview />
        </div>
    )
}