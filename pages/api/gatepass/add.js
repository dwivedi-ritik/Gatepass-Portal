import dbConnect from "../../../lib/dbConnect"
import GatePass from "../../../Model/GatePass"

export default async function handler(req, res) {
    try {
        await dbConnect()
        if (req.method == 'POST') {
            const newGatePassBody = JSON.parse(req.body)
            const newGatePass = GatePass(newGatePassBody)
            res.json(await newGatePass.save())

        } else {
            return
        }
    }
    catch (e) {
        res.status(500).json({ error: "Error occured in API" })
    }
}

export const config = {
    api: {
        bodyParser: true
    },
}
