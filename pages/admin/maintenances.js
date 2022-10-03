import SideNav from '../../components/admin/SideNav'
import MaintenanceOverview from '../../components/admin/MaintenanceOverview'
import Head from 'next/head'

export default function maintenances(props) {
    return (
        <>
            <Head>
                <title>Maintenances requests</title>
                <meta name='description' description='Admin panel for changing maintenance requests and downlaoding the csv files'></meta>
            </Head>
            <div className='flex'>
                <SideNav elName={"maintenance"} />
                <MaintenanceOverview />
            </div>
        </>
    )
}