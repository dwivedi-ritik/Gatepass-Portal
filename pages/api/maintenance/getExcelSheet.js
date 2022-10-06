import { Readable } from 'stream'

import dbConnect from "../../../lib/dbConnect";
import Maintenance from "../../../Model/Maintenance"
import { dateParserFromString, parseJson } from "../../../utils/helper"


function generateFilename(status) {
    const date = new Date().toLocaleDateString()
    return `${status}-maintenance-${date}.csv`
}


export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(403).send("Method not allowed")
    }

    try {
        const { status } = req.query
        const readableStream = new Readable()
        let size = 0
        const filename = generateFilename(status)
        await dbConnect()
        const dbData = await Maintenance.find({ status })

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
            'Content-Disposition': 'filename=' + filename
        })
        readableStream.push(null)
        readableStream.pipe(res)
    } catch (err) {
        console.log(err)
        res.status(500).send("Internal Server Error")
    }

}