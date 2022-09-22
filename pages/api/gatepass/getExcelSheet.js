import { Readable } from 'stream'

import { getSession } from 'next-auth/react'

import dbConnect from "../../../lib/dbConnect"
import GatePass from "../../../Model/GatePass"
import { dateParserFromString, parseJson } from "../../../utils/helper"


export default async function handler(req, res) {
    await dbConnect()
    if (req.method !== 'GET') {
        return res.status(403).send("Method not allowed")
    }
    try {
        const session = await getSession({ req: req })
        if (!session) {
            return res.status(401).send("Unauthorized")
        }

        const readableStream = new Readable()
        let size = 0
        const dbData = await GatePass.find()
            .select('-_id')
            .select('-__v')
            .select('-updatedAt')
            .sort({ 'createdAt': 'desc' })

        if (!dbData.length) {
            return res.status(200).send("Empty Entries")
        }
        const parsedData = parseJson(dbData[0])
        let csvHeader = Object.keys(parsedData).join(',')
        csvHeader += '\n'
        size += csvHeader.length

        readableStream.push(csvHeader)

        dbData.forEach(obj => {
            let parsedObj = parseJson(obj)
            parsedObj.arrival = dateParserFromString(parsedObj.arrival)
            parsedObj.departure = dateParserFromString(parsedObj.departure)
            parsedObj.createdAt = dateParserFromString(parsedObj.createdAt)
            let tempStr = Object.values(parsedObj).join(',')
            tempStr += '\n'
            size += tempStr.length
            readableStream.push(tempStr)
        })

        res.writeHead(200, {
            'Content-Type': 'text/csv',
            'Content-Length': size,
            'Content-Disposition': 'filename=data.csv'
        })
        readableStream.push(null)
        readableStream.pipe(res)
    }
    catch (e) {
        console.error(e)
        res.status(500).send("Server Error")
    }
}