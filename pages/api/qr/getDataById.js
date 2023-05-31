import dbConnect from "../../../lib/dbConnect"
import GatePass from "../../../Model/GatePass"

export default async function handler(req, res) {
    try {
        await dbConnect()
        if (req.method == 'GET') {
            const gatepass = await GatePass.findById(req.query.gatePassId)
            if (!gatepass) {
                return res.status(401).send({ msg: "No Collection with this id" })
            }
            res.json(gatepass)
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
