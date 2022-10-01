import { getSession } from "next-auth/react"
import dbConnect from "../../../lib/dbConnect"

import GatePass from "../../../Model/GatePass"

export default async function handler(req, res) {
    if (req.method !== 'PATCH') {
        return res.status(405).send("Method not Allowed")
    }
    try {
        const session = await getSession({ req: req })
        if (!session) {
            return res.status(401).send("Unauthorized")
        }
        const { token, status } = JSON.parse(req.body)

        if (!token || !status) {
            return res.status(400).send("Bad Request")
        }

        await dbConnect()
        const updatedCollection = await GatePass.findOneAndUpdate({ token: token },
            { $set: { status: status } },
            { new: true })

        return res.json(updatedCollection)

    } catch (e) {
        console.error(e)
    }

}

export const config = {
    api: {
        bodyParser: true
    },
}