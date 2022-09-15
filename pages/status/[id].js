import React from 'react'
import { useRouter } from 'next/router'
export default function CheckStaus() {
    const router = useRouter()
    const { id } = router.query
    return (
        <div>
            <p>id of this page is {id}</p>
        </div>
    )
}