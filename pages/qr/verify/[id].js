import Head from "next/head.js";
import QrInfo from "../../../components/qr/QrInfo.js"
import { useRouter } from "next/router";
import useSWR from 'swr'
import Spinner from "../../../components/Spinner.js";

const fetcher = (...args) => fetch(...args, {
    method: "GET"
}).then(res => res.json())

export default function verifyQrCode() {
    const router = useRouter()
    const qrId = router.query.id
    const url = `/api/qr/getDataById?gatePassId=${qrId}`
    const { data, error } = useSWR(url, fetcher)
    return (
        <>
            <Head>
                <title>Verify Token</title>
            </Head>
            {data ? <QrInfo data={data} /> : <Spinner />}
        </>
    )
}