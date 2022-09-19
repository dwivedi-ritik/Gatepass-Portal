import React from 'react'
import { useRouter } from 'next/router'
import useSWR from 'swr'
import Head from 'next/head'
import Spinner from "../../components/Spinner"
import Error from '../../components/Error'
import PassDetails from '../../components/PassDetails'
import NavBar from '../../components/NavBar'

const fetcher = (...args) => fetch(...args, {
    method: "GET"
}).then(res => res.json())

export default function CheckStaus() {
    const router = useRouter()
    const token = router.query.id;

    const url = `/api/gatepass/getByToken?tokenId=${token}`
    const { data, error } = useSWR(url, fetcher)
    return (
        <div>
            <Head>
                <title>Status of your Token</title>
            </Head>
            <NavBar />
            {(data) ? ((data.msg) ? <Error /> : <PassDetails data={data} />) : <Spinner />}
        </div>
    )
}

