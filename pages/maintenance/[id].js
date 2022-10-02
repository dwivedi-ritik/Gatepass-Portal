import MaintenanceStatus from "../../components/maitenance/MaintenanceStatus"
import Head from "next/head"
import NavBar from "../../components/NavBar"
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import { useRouter } from "next/router";
import useSWR from "swr"


const fetcher = (...args) => fetch(...args, {
    method: "GET"
}).then(res => res.json())


export default function status() {
    const router = useRouter()
    const token = router.query.id;

    const url = `/api/maintenance/getByToken?tokenId=${token}`
    const { data, error } = useSWR(url, fetcher)
    return (
        <>
            <Head>
                <title>Maintenance Status</title>
            </Head>
            <NavBar />
            {(data) ? ((data.msg) ? <Error /> : <MaintenanceStatus data={data} />) : <Spinner />}
        </>
    )
}