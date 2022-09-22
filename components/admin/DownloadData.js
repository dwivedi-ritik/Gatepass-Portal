import react from 'react'
import Link from 'next/link'
export default function DownloadData() {
    return (
        <>
            <Link href="/api/gatepass/getExcelSheet">
                <a className="bg-indigo-500 hover:bg-indigo-700  text-white font-semibold  py-1 px-2 rounded text-xs" type='submit' target='_blank' >
                    Download Data
                </a>
            </Link>
        </>
    )
}